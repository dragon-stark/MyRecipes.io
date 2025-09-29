# 🍴 MyRecipes.io

> A modern, data-driven recipe book built with plain HTML, CSS, and vanilla JavaScript.
> Every recipe is powered by JSON—no hard-coded pages, just clean content rendered dynamically.

---

## 🌐 Live Demo
👉 [View the project live](https://dragon-stark.github.io/MyRecipes.io/)

---

## 📌 Problem Statement
Most recipe sites are cluttered with ads, pop-ups, and endless scrolling before you even see the ingredients.
**MyRecipes.io** solves that by being lightweight, structured, and fast:
- Recipes live in a single JSON source of truth
- Pages render dynamically from that data
- Search and tags make navigation intuitive
- A validator script ensures consistency and prevents broken entries

The result: a recipe book that feels more like a mini-CMS than a blog.

---

## 🎯 Project Goals
- Centralize recipe data in `recipes.json` for easy updates
- Dynamically generate listings, detail pages, and tag-based filters
- Maintain a consistent, responsive UI/UX across all devices
- Support accessibility with semantic HTML and ARIA roles
- Provide maintainable, extensible code a small dev team can iterate on

---

## 🛠️ Functional Overview
- **Recipes Page (`recipes.html`)**
  Displays all recipes in a responsive grid with search and tag browsing.

- **Single Recipe Page (`single-recipe.html`)**
  Loads details dynamically by `slug`: hero image, timings, yield, tags, ingredients, instructions, and tools. JSON-LD schema included for SEO.

- **Tags Page (`tag-template.html`)**
  Filters recipes by tag with dynamically generated counts.

- **Consistency & Performance**
  Navigation and footer are global, images lazy-load, and the validator script checks recipes before deployment.

---

## ✅ Acceptance Criteria
- Adding a new recipe to `recipes.json` updates all relevant views (list, single, tag).
- Recipe detail page correctly loads when accessed by slug.
- Search returns accurate results across title, ingredients, and tags.
- Tag links route correctly to filtered views.
- Site is responsive and accessible with no console errors.

---

## 👥 User Stories
- **As a visitor**, I want to browse recipes by category so I can quickly find meals that fit my needs.
- **As a cook**, I want clear, step-by-step instructions so I can follow a recipe without confusion.
- **As a contributor**, I want to add new recipes in JSON without touching HTML so updates are simple and low-risk.
- **As a site owner**, I want consistent styling and SEO-friendly pages so the project looks professional and ranks well.

---

## 📅 Roadmap (Agile Style)

**MVP (Complete)**
- JSON-driven recipes
- Recipe list page
- Single recipe detail view
- Tag filtering
- Basic search

**Next Iterations**
- Printable recipe view
- Dark mode styling
- “Add your own recipe” form with local storage fallback
- Smarter tag organization (meal type, cuisine, dietary)
- Automated validation on deployment

