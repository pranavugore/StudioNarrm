# Guide for AI agents and writing tools

This is the Astro source for studionarrm.com. Read this before adding or changing pages.

## Articles

- Articles are Markdown files in `src/content/articles/<slug>.md`. The file name is the URL: `/articles/<slug>/`.
- Fields (schema in `src/content.config.ts`): `title`, `description`, `date` (YYYY-MM-DD), optional `updated`, `tags` (list), `draft` (true keeps it off the live site). Copy `src/content/articles/_TEMPLATE.md.example`.
- The articles routes already exist. Reuse them; do not add new routes or directory pages for articles:
  - List / directory page: `src/pages/articles/index.astro` (`/articles/`)
  - Article page: `src/pages/articles/[slug]/index.astro`
- To publish, add a Markdown file. The menu link, sitemap, llms.txt and Markdown copies update automatically.

## Styling

All styles live in `src/styles/global.css` (no Tailwind, no component CSS). Any new page must wrap content in the `Base` layout (`src/layouts/Base.astro`) and reuse these classes:

| Purpose | Classes |
|---|---|
| Page shell | `<main class="wrap-main t-articles">`, inner `<div class="wrap">` |
| Page header | `section.page-hero`, `.eyebrow`, `h1`, `p.lead` |
| List of articles | `ol.article-list` > `li` > `article` with `p.mono.article-meta`, `h2 > a`, `p` |
| Single article | `article.guide` > `.wrap`, `nav.crumbs.mono`, `.eyebrow`, `h1`, `p.lead`, `div.prose` |
| Tags | `ul.tags` |
| Call to action | `aside.guide-cta` with `a.btn.tone` |
| Cards / grids | `.grid`, `.card` |

Design tokens are CSS custom properties on `:root` in `global.css` (for example `--text`, `--muted`, `--bg`, `--surface`, `--line`, `--accent`, `--accent-text`, `--tone`, `--r`, `--f-body`, `--f-display`, `--f-mono`). Use them instead of hard-coded colours or fonts. Light and dark mode follow the visitor's device.

## Writing

- Write "Studio Narrm" in text; "studionarrm" only for the domain.
- Use the "we" voice for the studio.
- Australian English.
