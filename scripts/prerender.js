#!/usr/bin/env node
/**
 * Build-time prerenderer.
 *
 * Why: this is a client-rendered app, so the HTML we serve has an empty
 * <div id="root"></div>. Crawlers that do not run JavaScript therefore see no
 * headings and no body copy at all, which is why SEO audits report "no H1" and
 * "word count 0" on every page.
 *
 * What this does: after `react-scripts build`, serve ./build locally, load each
 * real route in headless Chrome, and save the fully rendered HTML to
 * build/prerender/<route>/index.html. index.js serves that file when it exists,
 * so crawlers get real content while the browser still boots the normal React
 * app on top of it.
 *
 * Snapshots are written under build/prerender/ and never over build/index.html,
 * which stays the pristine app shell that index.js uses as a fallback template.
 *
 * Routes come from src/json/routes.json; approved titles/descriptions/canonicals
 * come from src/json/pageMeta.json and are re-applied to each snapshot *after*
 * rendering, so the approved SEO copy wins over whatever react-helmet produced.
 *
 * Usage:  node scripts/prerender.js [--allow-partial]
 * Chrome: found automatically; override with PUPPETEER_EXECUTABLE_PATH.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const express = require("express");
const puppeteer = require("puppeteer-core");

const ROOT = path.join(__dirname, "..");
const BUILD = path.join(ROOT, "build");
const OUT = path.join(BUILD, "prerender");
const ALLOW_PARTIAL = process.argv.includes("--allow-partial");

/* Tracking and ad scripts are blocked while rendering: they add nothing to the
 * snapshot, slow every page down, and would otherwise bake their injected tags
 * into the saved HTML. The real page still loads them in a real browser. */
const BLOCKED = [
  /googletagmanager\.com/i,
  /google-analytics\.com/i,
  /analytics\.google\.com/i,
  /doubleclick\.net/i,
  /licdn\.com/i,
  /px\.ads\.linkedin\.com/i,
];

/* Minimum rendered text before a page counts as rendered. Low enough for the
 * shortest real page, high enough to catch a blank or crashed render. */
const MIN_TEXT = 200;

function fail(message) {
  console.error("\nprerender: " + message + "\n");
  process.exit(1);
}

function findChrome() {
  const local = process.env.LOCALAPPDATA;
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    local && path.join(local, "Google", "Chrome", "Application", "chrome.exe"),
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      if (fs.statSync(candidate).isFile()) return candidate;
    } catch (err) {
      /* not installed at this path; try the next one */
    }
  }
  return null;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function normalise(route) {
  return route.toLowerCase().replace(/\/+$/, "") || "/";
}

/* The saved HTML is what crawlers read, so the approved copy has to be in it.
 * react-helmet overwrites the tags we inject at request time once React mounts,
 * so the snapshot carries Helmet's values; we replace them here with the
 * approved ones from pageMeta.json. */
function applyMeta(html, meta) {
  /* GTM injects its own <script> tag into the DOM; drop it so the snapshot does
   * not ship a second copy on top of the one main.js adds at runtime. */
  html = html.replace(
    /<script[^>]*src="[^"]*googletagmanager\.com[^"]*"[^>]*>\s*<\/script>/gi,
    ""
  );
  if (!meta) return html;

  if (meta.title) {
    html = html.replace(
      /<title[^>]*>[\s\S]*?<\/title>/i,
      "<title>" + escapeHtml(meta.title) + "</title>"
    );
  }
  html = html.replace(
    /<meta\b[^>]*\bname=["']description["'][^>]*>/gi,
    ""
  );
  html = html.replace(/<link\b[^>]*\brel=["']canonical["'][^>]*>/gi, "");

  let tags = "";
  if (meta.description) {
    /* data-react-helmet marks this as Helmet's own, so Helmet adopts this tag
     * in the browser instead of adding a second description. */
    tags +=
      '<meta data-react-helmet="true" name="description" content="' +
      escapeHtml(meta.description) +
      '"/>';
  }
  if (meta.canonical) {
    tags += '<link rel="canonical" href="' + escapeHtml(meta.canonical) + '"/>';
  }
  return tags ? html.replace("</head>", tags + "</head>") : html;
}

function outputFile(route) {
  const normalised = normalise(route);
  const relative =
    normalised === "/" ? "index.html" : normalised.slice(1) + "/index.html";
  return path.join(OUT, relative);
}

function rmrf(target) {
  fs.rmSync(target, { recursive: true, force: true });
}

async function main() {
  if (!fs.existsSync(path.join(BUILD, "index.html"))) {
    fail("build/index.html not found. Run `npm run build` first.");
  }

  const chrome = findChrome();
  if (!chrome) {
    fail(
      "could not find Chrome or Edge.\n" +
        "Install Google Chrome, or set PUPPETEER_EXECUTABLE_PATH to a Chrome binary."
    );
  }

  const routes = readJson(path.join(ROOT, "src", "json", "routes.json"));
  const rawMeta = readJson(path.join(ROOT, "src", "json", "pageMeta.json"));
  const pageMeta = {};
  Object.keys(rawMeta).forEach(function (route) {
    pageMeta[normalise(route)] = rawMeta[route];
  });

  console.log("prerender: using " + chrome);
  console.log("prerender: " + routes.length + " routes\n");

  /* Serve the build the same way production does, minus the metadata injection:
   * every unknown path falls back to the app shell so client routing works. */
  const app = express();
  app.use(express.static(BUILD));
  app.get("*", function (req, res) {
    res.sendFile(path.join(BUILD, "index.html"));
  });

  const server = await new Promise(function (resolve, reject) {
    const s = app.listen(0, "127.0.0.1", function () {
      resolve(s);
    });
    s.on("error", reject);
  });
  const base = "http://127.0.0.1:" + server.address().port;

  const browser = await puppeteer.launch({
    executablePath: chrome,
    headless: "new",
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars"],
  });

  rmrf(OUT);
  fs.mkdirSync(OUT, { recursive: true });

  const failures = [];
  const report = [];

  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.setViewport({ width: 1366, height: 900 });
      await page.setRequestInterception(true);
      page.on("request", function (request) {
        if (BLOCKED.some((pattern) => pattern.test(request.url()))) {
          request.abort().catch(function () {});
        } else {
          request.continue().catch(function () {});
        }
      });

      await page.goto(base + route, {
        waitUntil: "networkidle2",
        timeout: 45000,
      });

      /* networkidle2 can settle before React has painted, so wait for real text
       * in #root rather than trusting the network to tell us we are done. */
      await page.waitForFunction(
        function (minimum) {
          const root = document.getElementById("root");
          return !!root && root.innerText.trim().length > minimum;
        },
        { timeout: 25000 },
        MIN_TEXT
      );

      /* Let late effects (carousels, AOS, lazy images) finish mutating the DOM. */
      await new Promise((resolve) => setTimeout(resolve, 800));

      const stats = await page.evaluate(function () {
        const root = document.getElementById("root");
        const text = root ? root.innerText.replace(/\s+/g, " ").trim() : "";
        return {
          words: text ? text.split(" ").length : 0,
          h1: Array.from(document.querySelectorAll("h1")).map((h) =>
            h.textContent.replace(/\s+/g, " ").trim()
          ),
        };
      });

      let html = await page.content();
      html = applyMeta(html, pageMeta[normalise(route)]);

      if (/127\.0\.0\.1|localhost/i.test(html)) {
        throw new Error("snapshot contains a localhost URL");
      }
      if (stats.h1.length === 0) {
        throw new Error("rendered page has no <h1>");
      }

      const file = outputFile(route);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);

      report.push({
        route: route,
        words: stats.words,
        h1: stats.h1.length,
        firstH1: stats.h1[0],
        kb: Math.round(Buffer.byteLength(html) / 1024),
      });
      console.log(
        "  ok   " +
          route.padEnd(40) +
          String(stats.words).padStart(5) +
          " words  " +
          String(stats.h1.length) +
          " h1  " +
          String(Math.round(Buffer.byteLength(html) / 1024)).padStart(4) +
          " KB"
      );
    } catch (err) {
      failures.push({ route: route, message: err.message });
      console.error("  FAIL " + route + "  " + err.message);
    } finally {
      await page.close().catch(function () {});
    }
  }

  await browser.close();
  server.close();

  fs.writeFileSync(
    path.join(OUT, "manifest.json"),
    JSON.stringify(
      { generated: new Date().toISOString(), pages: report },
      null,
      2
    )
  );

  console.log(
    "\nprerender: " +
      report.length +
      " of " +
      routes.length +
      " routes written to build/prerender/"
  );

  if (failures.length) {
    console.error("\nprerender: failed routes:");
    failures.forEach(function (f) {
      console.error("  " + f.route + " -> " + f.message);
    });
    if (!ALLOW_PARTIAL) {
      /* Shipping a half-prerendered build silently undoes the SEO fix, so stop
       * the build instead. Pass --allow-partial to override deliberately. */
      fail(
        failures.length +
          " route(s) did not prerender. The build is incomplete.\n" +
          "Fix the pages above, or re-run with --allow-partial to ship anyway."
      );
    }
  }
}

main().catch(function (err) {
  console.error(err);
  process.exit(1);
});
