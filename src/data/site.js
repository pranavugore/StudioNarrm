import { SERVICES } from "./services.js";
import { SHOW_GP } from "./flags.js";

export const SITE = {
  brand: "Studio Narrm",
  domain: "studionarrm.com",
  brandDescription:
    "Studio Narrm is a Melbourne studio that designs and builds data dashboards, workflow automation, AI agents, custom apps and websites, founded by solution architect Pranav Gore.",
  name: "Pranav Gore",
  givenName: "Pranav",
  familyName: "Gore",
  jobTitle: "Solution Architect",
  email: "pranavugore@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranavugore",
  city: "Melbourne",
  region: "VIC",
  country: "AU",
  description:
    "Solution Designer and Architect with 19 years of experience building enterprise applications, integrations, data analytics solutions and workflow automation.",
  updated: "2026-10-27",
};

// Topics the studio works in, for knowsAbout. Keep to capabilities, not clients.
export const KNOWS_ABOUT = [
  "Solution architecture", "System integration", "Workflow automation", "n8n", "Robotic process automation",
  "AI agents", "Large language models", "Model Context Protocol", "Answer engine optimisation", "Generative engine optimisation",
  "Structured data", "Data analytics", "Data visualisation", "Dashboards", "ETL", "PostgreSQL", "Google AppSheet",
  "Low-code development", "Web development",
  ...(SHOW_GP ? ["My Health Record Security and Access Policy", "Secure messaging for general practice"] : []),
];

// Extra founder detail for the home page's Person node (see src/pages/index.astro).
export const FOUNDER_PROFILE = {
  alumniOf: { "@type": "CollegeOrUniversity", name: "NMAM Institute of Technology (Visvesvaraya Technological University)" },
  hasCredential: ["AWS Certified Solutions Architect – Associate", "SAFe Scrum Master", "ITIL Foundation"].map((name) => ({ "@type": "EducationalOccupationalCredential", name, credentialCategory: "certification" })),
  knowsAbout: ["Solution architecture", "System design", "Enterprise integration", "Microservices", "Event-driven architecture", "Apache Kafka", "IBM MQ", "Spring Boot", "AWS", "Open Banking", "Master data management", "Data analytics", "Dashboards", "Looker Studio", "Workflow automation", "n8n", "AI agents", "Large language models", "Anthropic Claude API", "ETL", "PostgreSQL", "REST APIs", "Robotic process automation", "Low-code development", "Google AppSheet", "AI-assisted software development", "Claude Code", "Cursor", "Oracle OSM", "Oracle UIM", "Order management and fulfilment", "Machine learning", "Agile delivery", "SAFe", "Product design", "Full-stack development", "Mobile app development"],
};

// Organization node for JSON-LD, shared by every page's @graph.
export function org(origin) {
  return {
    "@type": "ProfessionalService",
    "@id": origin + "/#org",
    name: SITE.brand,
    alternateName: ["studionarrm", SITE.domain],
    url: origin + "/",
    logo: origin + "/logo.png",
    image: origin + "/og.png",
    description: SITE.brandDescription,
    email: "mailto:" + SITE.email,
    founder: { "@id": origin + "/#person" },
    address: { "@type": "PostalAddress", addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: SITE.country },
    areaServed: [
      { "@type": "City", name: "Melbourne" },
      { "@type": "State", name: "Victoria" },
      { "@type": "Country", name: "Australia" },
    ],
    knowsAbout: KNOWS_ABOUT,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      url: origin + "/#contact",
      areaServed: "AU",
      availableLanguage: ["en-AU"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: SITE.brand + " services",
      itemListElement: [
        ...SERVICES.map((sv) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: sv.eyebrow, description: sv.summary, url: origin + sv.href },
        })),
        ...(SHOW_GP ? [{
          "@type": "Offer",
          itemOffered: { "@type": "Service", "@id": origin + "/gp-clinics/#service", name: "Rule 21 and fax-free packages for GP clinics", url: origin + "/gp-clinics/" },
        }] : []),
      ],
    },
    sameAs: [SITE.linkedin],
  };
}
