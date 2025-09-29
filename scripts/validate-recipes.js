// scripts/validate-recipes.js
// Run: node scripts/validate-recipes.js

const fs = require("fs");
const path = require("path");

const RECIPES = "recipes.json";
const data = JSON.parse(fs.readFileSync(RECIPES, "utf8"));

let errors = 0;
let warnings = 0;
const err = m => { errors++; console.error("❌ " + m); };
const warn = m => { warnings++; console.warn("⚠️  " + m); };

if (!Array.isArray(data)) {
  console.error("❌ recipes.json must be an array");
  process.exit(1);
}

const seen = new Set();
const exists = p => fs.existsSync(path.join(process.cwd(), p));

data.forEach((r, i) => {
  const id = r?.slug || `index=${i}`;

  // slug
  if (!r?.slug) err(`${id} missing slug`);
  if (r?.slug && !/^[a-z0-9-]+$/.test(r.slug)) err(`${id} invalid slug "${r.slug}" (lowercase, numbers, hyphens)`);
  if (r?.slug) {
    if (seen.has(r.slug)) err(`duplicate slug "${r.slug}"`);
    seen.add(r.slug);
  }

  // required fields
  if (!r?.title) err(`${id} missing title`);
  if (!r?.image) err(`${id} missing image`);
  if (!Array.isArray(r?.ingredients) || r.ingredients.length === 0) err(`${id} ingredients must be a non-empty array`);
  if (!Array.isArray(r?.instructions) || r.instructions.length === 0) err(`${id} instructions must be a non-empty array`);

  // tags and tools
  if (!Array.isArray(r?.tags)) err(`${id} tags must be an array`);
  else if (r.tags.some(t => typeof t !== "string")) err(`${id} tags must be strings`);
  if (r?.tools) {
    if (!Array.isArray(r.tools)) err(`${id} tools must be an array`);
    else if (r.tools.some(t => typeof t !== "string")) err(`${id} tools must be strings`);
  }

  // images on disk
  if (r?.image && !exists(r.image)) err(`${id} image not found at "${r.image}"`);

  // light ISO8601 check
  ["prepTime","cookTime","totalTime"].forEach(f => {
    if (r?.[f] && typeof r[f] === "string" && !/^PT[0-9HMS]+$/i.test(r[f])) {
      warn(`${id} ${f} not a simple ISO duration like PT10M`);
    }
  });
});

console.log(`\nValidation summary: ${data.length} recipes, ${errors} error(s), ${warnings} warning(s).`);
if (errors > 0) process.exit(1);
