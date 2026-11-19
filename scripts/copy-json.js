#!/usr/bin/env node
/**
 * Copies the two JSON files the Express server reads at runtime into build/,
 * so changing page copy or the route list only needs a new build deploy and
 * not a fresh copy of index.js onto the server.
 */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const files = [
  ["src/json/pageMeta.json", "build/page-meta.json"],
  ["src/json/routes.json", "build/routes.json"],
];

for (const [from, to] of files) {
  const source = path.join(ROOT, from);
  const target = path.join(ROOT, to);
  JSON.parse(fs.readFileSync(source, "utf8")); // fail loudly on malformed JSON
  fs.copyFileSync(source, target);
  console.log("copied " + from + " -> " + to);
}
