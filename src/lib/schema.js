// Shared JSON-LD (schema.org) builders, so every page describes the site, studio and founder the same way.
import { SITE, org } from "../data/site.js";

// "https://studionarrm.com/" -> "https://studionarrm.com"
export const originOf = (site) => site.href.replace(/\/$/, "");

export function website(origin) {
  return { "@type": "WebSite", "@id": origin + "/#website", url: origin + "/", name: SITE.brand, publisher: { "@id": origin + "/#org" }, inLanguage: "en-AU" };
}

export { org };

// Founder. `extra` adds fields (the home page adds credentials, education and skills).
export function person(origin, extra = {}) {
  return {
    "@type": "Person",
    "@id": origin + "/#person",
    name: SITE.name,
    givenName: SITE.givenName,
    familyName: SITE.familyName,
    jobTitle: SITE.jobTitle,
    description: SITE.description,
    url: origin + "/",
    email: "mailto:" + SITE.email,
    address: { "@type": "PostalAddress", addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: SITE.country },
    sameAs: [SITE.linkedin],
    worksFor: { "@id": origin + "/#org" },
    ...extra,
  };
}

// breadcrumbs(origin, [["Home", "/"], ["About", "/about/"]])
export function breadcrumbs(origin, trail) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: origin + path })),
  };
}

// Adds "@context" to a top-level node.
export const ld = (node) => ({ "@context": "https://schema.org", ...node });
