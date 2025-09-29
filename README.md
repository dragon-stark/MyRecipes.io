# 🍲 MyRecipes.io

## 📌 Project Overview
This project came out of the pain of managing recipes the old-school way: every time we wanted to add one, we had to duplicate static HTML files, manually update links, and pray we didn’t break the layout. It worked for a couple of pages, but it got ugly fast. So we decided to treat recipes like data instead of hard-coded pages. Now everything lives in a single JSON file, and the site pulls in content dynamically. That means adding a new recipe is as simple as dropping in an object — no template duplication, no layout drift, no broken links. Cleaner codebase, faster updates, and way easier for anyone on the team to contribute.

---

## 🎯 Goals
- Centralize recipe data in `recipes.json` for single-source-of-truth management.
- Dynamically generate recipe listings, detail pages, and tag-based filters.
- Maintain consistent UI/UX styling across all recipe entries.
- Support accessibility and responsive design for cross-device usability.
- Provide maintainable, extensible code that a small dev team can iterate on.

---

## 🛠️ Functional Requirements

### 1. Data Source
- All recipe data stored in `recipes.json`.
- Each recipe object includes:
  - `slug`, `title`, `description`, `image`
  - `tags[]`, `yield`, `prepTime`, `cookTime`, `totalTime`
  - `ingredients[]`, `instructions[]`

### 2. Recipe Listing Page (`recipes.html`)
- Displays all recipes with title, image, description, and tags.
- Search by title, ingredient, or tag.
- Responsive grid layout.

### 3. Single Recipe Page (`single-recipe.html`)
- Dynamic rendering based on `slug`.
- Shows hero image, prep/cook time, yield, tags, instructions, and ingredients.
- Includes JSON-LD schema for SEO.

### 4. Tag Filtering Page (`tag-template.html`)
- Filter recipes by selected tag.
- Tag cloud dynamically generated with counts.

### 5. General
- Navigation and footer consistent across all pages.
- Accessibility via semantic HTML and ARIA roles.
- Performance: lazy-loading images, no redundant fetches.

---

## ✅ Acceptance Criteria
- [ ] Adding a new recipe object to `recipes.json` automatically updates **Recipes page**, **Single Recipe view**, and **Tag filters**.
- [ ] Navigating to `single-recipe.html?slug=banana-pancakes` loads the correct recipe with all fields populated.
- [ ] Searching “cornbread” in the Recipes page returns the expected card.
- [ ] Tag clicks link correctly to `tag-template.html?tag=bread` (or other tags).
- [ ] Site passes mobile-responsive checks (Chrome dev tools).
- [ ] No console errors in modern browsers.

---

## 📅 Roadmap (Agile Style)

### MVP (Complete)
- JSON-driven recipes
- Recipe list page
- Single recipe detail page
- Tag filtering
- Basic search

### Next Iterations
- User auth to save personal recipe collections
- Editable “add your own recipe” form with local storage fallback
- Category/tag management UI
- Dark mode styling
- Automated tests for data integrity

---

## 👥 User Stories

- **As a visitor**, I want to browse recipes by category/tag so that I can quickly find meals that fit my needs.
- **As a cook**, I want to see step-by-step instructions so that I can follow the recipe without confusion.
- **As a contributor**, I want to add a new recipe to `recipes.json` without touching HTML so that updates are simple and low-risk.
- **As a site owner**, I want consistent styling and SEO-rich pages so that the project looks professional and ranks well.

---

