// Article helpers shared by the articles pages, header, footer and llms.txt.
import { getCollection } from "astro:content";

export const ARTICLES_HREF = "/articles/";
export const articleHref = (a) => `${ARTICLES_HREF}${a.id}/`;
export const isoDate = (d) => d.toISOString().slice(0, 10);

// Published articles, newest first. Drafts show only in `npm run dev`.
export async function getArticles({ includeDrafts = import.meta.env.DEV } = {}) {
  const all = await getCollection("articles", (a) => includeDrafts || !a.data.draft);
  return all.sort((a, b) => b.data.date - a.data.date);
}
