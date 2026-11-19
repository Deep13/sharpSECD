#!/usr/bin/env node
/**
 * Checks what a crawler sees: the raw HTML, with no JavaScript run.
 *
 * This is the only way to test the H1 / word-count fix. A browser's DevTools
 * shows the DOM *after* React has run, which looked correct even when the raw
 * HTML was an empty <div id="root"></div> -- that mismatch is exactly why the
 * SEO audit disagreed with what the site looked like in a browser.
 *
 * Markup inside <script> and <style> is text, not elements, so it is stripped
 * before counting. Without that, the "For better site experience..." notice in
 * index.html (which sits inside a script string) reads as a second <h1>.
 *
 * Usage:
 *   node scripts/check-seo.js                        # http://localhost:3001
 *   node scripts/check-seo.js http://localhost:3999
 *   node scripts/check-seo.js https://sharpsecd.com  # after deploying
 */
"use strict";

const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");

const BASE = (process.argv[2] || "http://localhost:3001").replace(/\/+$/, "");
const ROOT = path.join(__dirname, "..");

const routes = JSON.parse(
  fs.readFileSync(path.join(ROOT, "src", "json", "routes.json"), "utf8")
);

/* Minimum body words before a page counts as having real content. The shortest
 * real page (/contact) has about 120. */
const MIN_WORDS = 80;

function fetch(url, redirectsLeft = 3) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https:") ? https : http;
    client
      .get(url, { headers: { "User-Agent": "secd-seo-check" } }, (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location &&
          redirectsLeft > 0
        ) {
          res.resume();
          const next = new URL(res.headers.location, url).toString();
          return resolve(
            fetch(next, redirectsLeft - 1).then((r) => ({
              ...r,
              redirectedFrom: (r.redirectedFrom || []).concat(res.statusCode + " " + url),
            }))
          );
        }
        let body = "";
        res.on("data", (c) => (body += c));
        res.on("end", () => resolve({ status: res.statusCode, body, redirectedFrom: [] }));
      })
      .on("error", reject);
  });
}

function stripCode(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ");
}

function textOf(fragment) {
  return fragment
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

(async () => {
  console.log("Raw HTML, no JavaScript run -- " + BASE + "\n");
  console.log(
    "res".padEnd(5) + "h1".padEnd(4) + "words".padStart(6) + "   route" +
    " ".repeat(28) + "first h1"
  );
  console.log("-".repeat(104));

  const problems = [];

  for (const route of routes) {
    let r;
    try {
      r = await fetch(BASE + route);
    } catch (err) {
      problems.push(route + ": request failed (" + err.message + ")");
      console.log("ERR".padEnd(5) + "-".padEnd(4) + "-".padStart(6) + "   " + route);
      continue;
    }

    const markup = stripCode(r.body);
    const h1s = (markup.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi) || []).map(textOf);
    const bodyMatch = markup.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const words = bodyMatch ? textOf(bodyMatch[1]).split(" ").filter(Boolean).length : 0;
    const title = textOf((r.body.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [, ""])[1]);
    const hasDesc = /<meta\b[^>]*\bname=["']description["']/i.test(markup);

    if (r.status !== 200) problems.push(route + ": HTTP " + r.status);
    if (h1s.length !== 1) problems.push(route + ": " + h1s.length + " h1 tags (want 1)");
    if (words < MIN_WORDS) problems.push(route + ": only " + words + " words");
    if (!title) problems.push(route + ": no <title>");
    if (!hasDesc) problems.push(route + ": no meta description");

    const flag = r.status === 200 && h1s.length === 1 && words >= MIN_WORDS ? "" : "  <-- CHECK";
    console.log(
      String(r.status).padEnd(5) +
        String(h1s.length).padEnd(4) +
        String(words).padStart(6) +
        "   " +
        route.padEnd(36) +
        (h1s[0] || "(NONE)").slice(0, 46) +
        flag
    );
  }

  console.log("\n" + "=".repeat(104));
  if (problems.length === 0) {
    console.log(
      "PASS - every route serves one <h1> and real body copy without JavaScript.\n" +
      "This is what a crawler reads, so the audit's \"no H1\" and \"word count 0\" are addressed."
    );
  } else {
    console.log("FAIL - " + problems.length + " problem(s):");
    problems.forEach((p) => console.log("  - " + p));
    process.exitCode = 1;
  }
})();
