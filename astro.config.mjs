import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import agentFiles from "./integrations/agent-files.mjs";
import { SERVICES } from "./src/data/services.js";
import { SHOW_GP } from "./src/data/flags.js";
import hideGp from "./integrations/hide-gp.mjs";
import { readdirSync, readFileSync } from "node:fs";

// True once any article in src/content/articles is not a draft. Until then /articles/ is noindex and kept out of the sitemap.
const hasArticles = readdirSync("./src/content/articles").some((f) => f.endsWith(".md") && !/^draft:\s*true\b/m.test(readFileSync(`./src/content/articles/${f}`, "utf8")));

// Override with SITE_URL (e.g. a *.pages.dev preview URL) if you need to.
const site = process.env.SITE_URL || "https://studionarrm.com";

export default defineConfig({
  site,
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    // While SHOW_GP is off, drop the GP clinic pages and PDF from the output (runs first so nothing below sees them).
    ...(SHOW_GP ? [] : [hideGp()]),
    sitemap({ filter: (page) => !page.includes("/404") && (SHOW_GP || !page.includes("/gp-clinics/")) && (hasArticles || !page.includes("/articles/")) }),
    // Markdown copy of every page, llms-full.txt and _headers rules for them, in reading order.
    agentFiles({ order: ["/", ...SERVICES.map((s) => s.href), ...(SHOW_GP ? ["/gp-clinics/", "/gp-clinics/rule-21-guide/"] : []), "/work/", "/articles/", "/about/"] }),
  ],
});
