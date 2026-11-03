// Content collections. Articles live in src/content/articles/ as Markdown, one file per article.
// The file name (without .md) becomes the URL: src/content/articles/my-post.md -> /articles/my-post/
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    // One or two sentences: used for the meta description, the list page and llms.txt.
    description: z.string(),
    // YYYY-MM-DD
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // true keeps the article out of the built site (it still shows in `npm run dev`).
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
