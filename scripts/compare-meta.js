/**
 * Compare the raw HTML (no JavaScript executed) served by two sites.
 *
 * Usage:
 *   node scripts/compare-meta.js http://localhost:3999 https://sharpsecd.com
 *
 * This is what a crawler sees before rendering, so it is the right way to
 * check SEO metadata. Chrome's Elements panel shows the page after React has
 * run, which hides the problem — use View Source (Ctrl+U) instead.
 */
const http = require("http");
const https = require("https");
const pageMeta = require("../src/json/pageMeta.json");

const [, , A = "http://localhost:3999", B = "https://sharpsecd.com"] = process.argv;
const PATHS = Object.keys(pageMeta).concat(["/general-purpose-lcds", "/no-such-page"]);

function fetch(url) {
  return new Promise((resolve) => {
    const lib = url.indexOf("https:") === 0 ? https : http;
    const req = lib.get(url, { timeout: 30000 }, (res) => {
      let body = "";
      res.on("data", (c) => (body += c));
      res.on("end", () =>
        resolve({ status: res.statusCode, location: res.headers.location, body })
      );
    });
    req.on("timeout", () => { req.destroy(); resolve({ status: 0, body: "" }); });
    req.on("error", (e) => resolve({ status: 0, body: "error: " + e.message }));
  });
}

const decode = (s) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
const grab = (body, re) => { const m = body.match(re); return m ? decode(m[1]).trim() : null; };
const read = (r) => ({
  status: r.status,
  location: r.location,
  title: grab(r.body, /<title>([\s\S]*?)<\/title>/i),
  description: grab(r.body, /<meta[^>]*name="description"[^>]*content="([^"]*)"/i),
  canonical: grab(r.body, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i),
});

const short = (v, n) => (v == null ? "(none)" : v.length > n ? v.slice(0, n - 1) + "…" : v);

(async () => {
  console.log("A = " + A + "\nB = " + B + "\n");
  let differences = 0;

  for (const p of PATHS) {
    const [a, b] = await Promise.all([fetch(A + p), fetch(B + p)]);
    const ra = read(a);
    const rb = read(b);
    const expected = pageMeta[p];

    const same =
      ra.title === rb.title &&
      ra.description === rb.description &&
      ra.canonical === rb.canonical &&
      ra.status === rb.status;
    if (!same) differences++;

    console.log((same ? "SAME  " : "DIFF  ") + p);
    for (const field of ["status", "title", "description", "canonical"]) {
      const va = field === "status" ? ra.status + (ra.location ? " -> " + ra.location : "") : ra[field];
      const vb = field === "status" ? rb.status + (rb.location ? " -> " + rb.location : "") : rb[field];
      if (String(va) === String(vb)) continue;
      console.log("        " + field.padEnd(12) + "A: " + short(String(va), 78));
      console.log("        " + "".padEnd(12) + "B: " + short(String(vb), 78));
    }
    if (expected) {
      const ok =
        ra.title === expected.title.trim() &&
        ra.description === expected.description.trim();
      if (!ok) console.log("        !! A does not match the approved copy in pageMeta.json");
    }
  }

  console.log("\n" + differences + " of " + PATHS.length + " paths differ between A and B.");
})();
