const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const emailIds = {
  "General query": "SECDinfo@sharpsec.com",
  "R-IGZO Displays": "SECDinfo@sharpsec.com",
  "8K Display": "SECDinfo@sharpsec.com",
  "Custom Camera Module": "changa@sharpsec.com",
  "Memory-in-pixel Landing":
    "SECDInfo@sharpsec.com",
  "5-inch R-IGZO Landing": "carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "Low Power Display": "carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "O'Donnell":
    "carrollb@sharpsec.com,karamy@xposureunlimited.com,lberndt@odonnell.com",
  TCS: "carrollb@sharpsec.com,karamy@xposureunlimited.com,ashley@tc-sales.com",
  IntelliMark:
    "carrollb@sharpsec.com,karamy@xposureunlimited.com,secdintellimarkwebcontact@sharpsec.com",
  "Control Sales":
    "carrollb@sharpsec.com,karamy@xposureunlimited.com,lisay@controlsales.com",
  "O'Donnell Low Power":
    "carrollb@sharpsec.com,karamy@xposureunlimited.com,LBerndt@odonnell.com",
  ePoster: "carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "Control Sales R-IGZO":
    "jcoombs@controlsales.com,carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "Control Sales R-IGZO TCS":
    "ashley@tc-sales.com,carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "Reflective LCD Landing Page":
    "carrollb@sharpsec.com,karamy@xposureunlimited.com",
  "control-sales-form":
    "lisay@controlsales.com,CarrollB@sharpsec.com,karamy@xposureunlimited.com",
  "thom-luke-sales-form":
    "rick@thomlukesales.com,CarrollB@sharpsec.com,karamy@xposureunlimited.com",
  "quantum-sales-form":
    "lori@quantumsales.ca,CarrollB@sharpsec.com,karamy@xposureunlimited.com",
  "tech-coast-sales-form":
    "ashley@tc-sales.com,CarrollB@sharpsec.com,karamy@xposureunlimited.com",
  "odonnell-sales-form":
    "LBerndt@odonnell.com,CarrollB@sharpsec.com,karamy@xposureunlimited.com,yeep@sharpusa.com",
};
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
const _app_folder = "./build";

/* ---------------------------------------------------------------------------
 * SEO: put each page's title/description/canonical in the HTML we send, so
 * crawlers see them without running JavaScript. React Helmet still sets the
 * same values in the browser; these just get there first.
 *
 * Copy lives in src/json/pageMeta.json and is copied to build/page-meta.json
 * by the "postbuild" script, so changing copy only needs a new build deploy,
 * not a new copy of this file.
 * ------------------------------------------------------------------------- */
const _index_file = path.join(_app_folder, "index.html");
const _meta_file = path.join(_app_folder, "page-meta.json");

/* Client-side routes that really exist (see src/routes.js). Anything else is
 * a genuine 404. The live list ships in build/routes.json (generated from
 * src/json/routes.json), so adding a route only needs a new build deploy. The
 * array below is the fallback if that file is missing. */
let knownRoutes = [
  "/",
  "/about",
  "/contact",
  "/news",
  "/memory-in-pixel-displays",
  "/memory-in-pixel-lcds-product",
  "/memory-in-pixel-lcds-technology",
  "/memoryinpixel-tcs",
  "/memoryinpixel-intellimark",
  "/memoryinpixel-odonnell",
  "/memoryinpixel-control-sales",
  "/eposters-displays",
  "/eposters_product",
  "/eposter-display-modules-technology",
  "/r-igzo-tcs",
  "/r-igzo-control-sales",
  "/low-power-odonnell",
];
try {
  const fromBuild = JSON.parse(
    fs.readFileSync(path.join(_app_folder, "routes.json"), "utf8")
  );
  if (Array.isArray(fromBuild) && fromBuild.length) knownRoutes = fromBuild;
} catch (err) {
  console.log("Using built-in route list (" + err.message + ")");
}
knownRoutes = knownRoutes.map(normalisePath);

const knownPrefixes = ["/search-result/"];

/* Retired URLs: permanent redirect so search engines drop them.
 * Targets are final destinations, never another redirect, so there are no
 * redirect chains. */
const redirects = {
  "/general-purpose-lcds": "/",
  "/industrial-lcds-product": "/",
  "/r-igzo-google": "/",
  "/r-igzo-linkedin": "/",
  "/reflectivelcdlanding": "/",
  "/reflective-igzo-displays-product": "/",
  "/eposters": "/eposters-displays",
  "/eposters-displays-control-sales": "/eposters-displays",
  "/eposters-displays-odonnell": "/eposters-displays",
  "/eposters-displays-quantum": "/eposters-displays",
  "/eposters-displays-tech-coast": "/eposters-displays",
  "/eposters-displays-thom-luke": "/eposters-displays",
  /* Renamed for clarity; the old paths 301 to the new one. */
  "/memoryinpixel": "/Memory-In-Pixel-Displays",
  "/memoryinpixellanding": "/Memory-In-Pixel-Displays",
};

let pageMeta = {};
try {
  const raw = JSON.parse(fs.readFileSync(_meta_file, "utf8"));
  Object.keys(raw).forEach(function (route) {
    pageMeta[route.toLowerCase()] = raw[route];
  });
} catch (err) {
  console.log("No page metadata loaded (" + err.message + ")");
}

function normalisePath(pathname) {
  return pathname.toLowerCase().replace(/\/+$/, "") || "/";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

let _template = null;
let _templateMtime = 0;
function indexTemplate() {
  const stat = fs.statSync(_index_file);
  if (!_template || stat.mtimeMs !== _templateMtime) {
    _template = fs.readFileSync(_index_file, "utf8");
    _templateMtime = stat.mtimeMs;
  }
  return _template;
}

function renderPage(pathname) {
  let html = indexTemplate();
  const meta = pageMeta[normalisePath(pathname)];
  if (!meta) return html;

  if (meta.title) {
    html = html.replace(
      /<title>[\s\S]*?<\/title>/,
      "<title>" + escapeHtml(meta.title) + "</title>"
    );
  }
  let tags = "";
  if (meta.description) {
    /* data-react-helmet marks this as Helmet's own, so when Helmet runs in the
     * browser it adopts this tag instead of adding a second description. */
    tags +=
      '<meta data-react-helmet="true" name="description" content="' +
      escapeHtml(meta.description) +
      '"/>';
  }
  if (meta.canonical) {
    /* No data-react-helmet here on purpose: these pages do not declare a
     * canonical in Helmet, and a marked tag would be stripped on hydration. */
    tags += '<link rel="canonical" href="' + escapeHtml(meta.canonical) + '"/>';
  }
  return tags ? html.replace("</head>", tags + "</head>") : html;
}

/* ---------------------------------------------------------------------------
 * Prerendered snapshots, written by scripts/prerender.js at build time.
 *
 * This is a client-rendered app, so the shell above ships an empty
 * <div id="root"></div>: a crawler that does not run JavaScript sees no
 * headings and no body copy, which is why audits report "no H1" and
 * "word count 0". Serving the snapshot gives it the fully rendered page
 * instead; the browser still boots the normal React app on top of it.
 *
 * A missing snapshot falls through to renderPage() below, so a failed
 * prerender degrades to the previous behaviour rather than breaking the site.
 * ------------------------------------------------------------------------- */
const _prerender_folder = path.resolve(path.join(_app_folder, "prerender"));
const _snapshots = new Map();

function prerenderedHtml(pathname) {
  const normalised = normalisePath(pathname);
  const relative =
    normalised === "/" ? "index.html" : normalised.slice(1) + "/index.html";
  const file = path.resolve(path.join(_prerender_folder, relative));

  /* Never let a crafted path escape the snapshot folder. */
  if (!file.startsWith(_prerender_folder + path.sep)) return null;

  let stat;
  try {
    stat = fs.statSync(file);
  } catch (err) {
    return null;
  }
  const cached = _snapshots.get(file);
  if (cached && cached.mtimeMs === stat.mtimeMs) return cached.html;

  const html = fs.readFileSync(file, "utf8");
  _snapshots.set(file, { mtimeMs: stat.mtimeMs, html: html });
  return html;
}

app.use(function (req, res, next) {
  const target = redirects[normalisePath(req.path)];
  if (target) return res.redirect(301, target);
  next();
});

/* The snapshot folder is an implementation detail. Serving it directly would
 * expose a second, crawlable copy of every page at /prerender/<route>/. */
app.use(function (req, res, next) {
  if (/^\/prerender(\/|$)/i.test(req.path)) {
    return res.status(404).type("txt").send("Not found");
  }
  next();
});
app.get("/api", (req, res) => {
  res.send("SHARP SECD");
});

app.post("/api/form", (req, res) => {
  // debugger;

  let data = req.body;
  var sEmail = [];
  data.subject.forEach((element) => {
    sEmail.push(emailIds[element]);
  });
  // res.send(data.name);
  let smtpTransport = nodemailer.createTransport({
    host: "172.29.12.236",
    port: 25,
  });
  // res.send(sEmail.join(","));
  let mailOptions = {
    from: "SECDinfo@sharpsec.com",
    to: sEmail.join(","),
    subject: data.subject.join(","),
    html: `<h3>Name: ${data.name}</h3><h3>Email: ${data.email}</h3><h3>Mobile: ${data.mobile}</h3><h3>Message: ${data.message}</h3>`,
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log("Mail sent unsuccessfull", error);
      res.send(error);
    } else {
      console.log("Mail sent succeessfully to:" + sEmail.join(","));
    }
  });
  res.send("Success");
  smtpTransport.close();
});
app.get(
  "*.*",
  express.static(_app_folder, {
    maxAge: "1y",
  })
);

/* A static file that does not exist must 404, not fall through to the app
 * shell below — otherwise missing assets look like valid pages to crawlers. */
app.get("/static/*", function (req, res) {
  res.status(404).type("txt").send("Not found");
});

app.all("*", function (req, res) {
  const pathname = normalisePath(req.path);
  const isKnown =
    knownRoutes.indexOf(pathname) !== -1 ||
    knownPrefixes.some(function (prefix) {
      return pathname.indexOf(prefix) === 0;
    });

  /* An unmatched request for something that looks like a file is not a page. */
  if (!isKnown && /\.[a-z0-9]{2,5}$/i.test(pathname)) {
    return res.status(404).type("txt").send("Not found");
  }

  try {
    /* Prefer the prerendered snapshot; fall back to the metadata-injected
     * shell when there is not one for this route. */
    const snapshot = isKnown ? prerenderedHtml(req.path) : null;
    res
      .status(isKnown ? 200 : 404)
      .type("html")
      .send(snapshot || renderPage(req.path));
  } catch (err) {
    console.log("Falling back to plain index.html: " + err.message);
    res.status(isKnown ? 200 : 404).sendFile("/", { root: _app_folder });
  }
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server running at ${PORT} `);
});
