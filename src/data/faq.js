// Home page FAQ: rendered on the page and as FAQPage JSON-LD, so the two always match.
// Written as the questions a buyer (or an AI assistant on their behalf) actually asks.
import { SITE } from "./site.js";
import { SHOW_GP } from "./flags.js";
import { priceLine, CHECK } from "./automation.js";

export const FAQ = [
  ["What can be automated in a small business?", "Most repetitive admin that moves information between tools: web enquiries into your CRM, quotes and invoices, payment reminders, booking confirmations, weekly reports, onboarding emails, and copying data between spreadsheets and systems. If someone on your team does the same steps every day or week, it can usually be automated. AI agents add the jobs that need reading: sorting emails, pulling details out of forms and documents, and drafting replies for a person to check."],
  ["How much does automation cost?", `Every project has a fixed price, agreed in writing before work starts: ${priceLine()}. The ${CHECK.name.toLowerCase()} comes first, so you know the price before you commit. Running costs are low: self-hosted n8n costs a few dollars to a few tens of dollars a month in hosting, with no per-task fees.`],
  ["n8n, Zapier or Make: which should I use?", "Zapier and Make are quick to start but charge per task, which gets expensive as volumes grow. n8n can be self-hosted, so you pay for hosting rather than per task, it handles more complex logic, and your data stays on a server you control. We mostly build in n8n, and we'll tell you honestly if a simple Zapier setup is enough."],
  ["Do I need to change my software?", "No. We connect the tools you already use, such as Xero, MYOB, HubSpot, Google Workspace, Microsoft 365 or Shopify, through their built-in connections or APIs. Your team keeps working the way they do now, minus the copying and pasting."],
  ["What happens if an automation breaks?", "Every workflow we build sends an alert when something fails (to you, and to us if we look after it), retries where it's safe, and logs what happened. You get documentation and a walkthrough at hand-over, and we can stay on to monitor and fix things, or your team can run it themselves."],
  ["Is my data kept in Australia?", "It can be. We can host n8n for you on Australian servers or on your own account, so customer data doesn't have to pass through overseas automation platforms. We use the access each workflow needs and nothing more, and store passwords and keys in n8n's encrypted credential store."],
  ["Do you work outside Melbourne?", "Yes. We're based in Melbourne, visit on-site around Melbourne when it helps, and work remotely with businesses across Victoria and the rest of Australia."],
  ...(SHOW_GP ? [["Do you work with GP clinics?", "Yes. We help general practices in Victoria, especially regional and rural clinics, put the My Health Record Security and Access Policy (Rule 21) in place and replace fax and email referrals with secure messaging inside the practice software they already use. Our GP clinics page has the two fixed-fee packages, prices, funding pointers and a two-minute Rule 21 self-check."]] : []),
  ["Who is behind Studio Naarm?", "Studio Naarm was founded by Pranav Gore, a Melbourne-based solution architect with 19 years of experience in system integration, data and workflow automation. You deal with him directly. Besides automation, we build dashboards, custom apps and websites, and help businesses get found by AI assistants."],
  ["How do I get started?", `Tell us which job eats the most time, by email at ${SITE.email} or with the form below. We'll reply with a straight answer on whether we can automate it and what it would take.`],
];

export function faqJsonLd(origin) {
  return {
    "@type": "FAQPage",
    "@id": origin + "/#faq",
    mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}
