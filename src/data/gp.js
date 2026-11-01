// GP clinic offer: one source for the /gp-clinics/ page, its structured data, the Rule 21 self-check and llms.txt.
// Prices are ex GST and live only in PLANS: the page, FAQ, guide, JSON-LD and llms.txt all read them from here.
// The one-page PDF in public/gp-clinics/ is made separately (previews/gp-clinics/make-offer-pdf.mjs), so
// regenerate it when prices change. Keep wording to "help you meet" Rule 21; never promise compliance.
import { money, numberWord } from "../lib/format.js";

export const GP = {
  href: "/gp-clinics/",
  guideHref: "/gp-clinics/rule-21-guide/",
  pdf: "/gp-clinics/studio-narrm-gp-clinic-offer.pdf",
  checkSubject: "Free Rule 21 check",
  regions: ["Gippsland", "Western Victoria", "the Murray region", "the rest of regional and rural Victoria"],
  reviewed: "2026-10-27",
};

export const SOURCES = [
  ["My Health Records Rules 2026 (Federal Register of Legislation)", "https://www.legislation.gov.au/F2026L00392/asmade/text"],
  ["Participation obligations (Australian Digital Health Agency)", "https://www.digitalhealth.gov.au/healthcare-providers/initiatives-and-programs/my-health-record/register-and-set-up-access/participation-obligations"],
  ["My Health Record security and access policy update (Gippsland PHN)", "https://gphn.org.au/latest-news/mhr-security-access/"],
  ["General practice digital health maturity (Western Victoria PHN)", "https://westvicphn.com.au/?p=18467"],
  ["My Health Record security and access policy guidance (OAIC)", "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/health-service-providers/my-health-record/my-health-record-security-access-policyguidance"],
  ["PIP eHealth Incentive eligibility requirements (Australian Digital Health Agency)", "https://www.digitalhealth.gov.au/healthcare-providers/practice-incentives-program-ehealth-incentive-epip/epip-incentive-eligibility-requirements"],
  ["Digital health support for practices (Western Victoria PHN)", "https://westvicphn.com.au/health-professionals/health-topics/digital-health/"],
];

// What Rule 21 asks for, as described in the sources above.
export const RULE21 = [
  ["A written Security and Access Policy", "Tailored to your practice and covering everything the rule requires. It applies to every practice that uses My Health Record, whatever its size."],
  ["Managed user access", "How accounts are created, changed, suspended and removed, how often access is reviewed, and making sure every user can be identified."],
  ["Staff training", "Training on My Health Record privacy and security. Annual refreshers and keeping training records are recommended."],
  ["Handling data breaches", "How the practice identifies, manages and responds to My Health Record-related data breaches."],
];

// What both packages cover (the Essential package). Turnkey adds hands-on work on top.
export const PACKAGE = [
  ["Rule 21 policy and records", "We tailor your Security and Access Policy from the official guidance, set up version tracking, and start the registers you need to keep: policy versions, training and access reviews."],
  ["Core security", "Two-step login on practice email and cloud tools, automatic updates, screen auto-lock, and daily encrypted backups."],
  ["Secure messaging, set up and tested", "HealthLink, Argus or ReferralNet address lookups configured in your practice software, encrypted referral delivery tested, and a written secure messaging policy."],
  ["Staff training", "A 30-minute remote session (or a recording) on My Health Record privacy and security, with attendance logged."],
];

export const PLANS = [
  {
    name: "Essential compliance and security",
    price: 3800,
    founding: 3200,
    unit: "fixed fee",
    note: "For clinics that need the Rule 21 basics and core security done properly.",
    items: [
      "Security and Access Policy tailored to your practice, with version tracking",
      "Record-keeping registers for policy versions, training and access reviews",
      "Two-step login, automatic updates, screen auto-lock, daily encrypted backups",
      "Secure messaging configured and tested, plus a written secure messaging policy",
      "30-minute remote staff training session, attendance logged",
    ],
  },
  {
    name: "Turnkey fax-free",
    price: 5800,
    founding: 4900,
    unit: "fixed fee",
    note: "Everything in Essential, plus hands-on training, fax retirement and 30 days of support.",
    items: [
      "Everything in Essential",
      "Live or on-site training for all clinical and admin staff, including phishing and breach reporting",
      "Fax audit, with your top 10 specialist and hospital contacts moved to secure messaging",
      "A \"we no longer accept fax\" notice for letterheads and referral templates",
      "A test restore from backup to prove your data comes back",
      "30 days of support after go-live for staff questions and tweaks",
    ],
  },
  {
    name: "Monthly care plan",
    price: 390,
    monthly: true,
    unit: "per month, 12-month term",
    note: "Starts after either package, so the work stays done.",
    items: [
      "Yearly staff training session, with the training register kept",
      "Compliance records and access reviews kept up to date",
      "Automated patient recall reminders, set up and monitored",
      "Small fixes and questions answered",
    ],
  },
];

// The two fixed-fee packages, the monthly plan, and the lowest package price ("from $3,800").
export const PACKAGES = PLANS.filter((p) => !p.monthly);
export const CARE_PLAN = PLANS.find((p) => p.monthly);
export const FROM_PRICE = money(Math.min(...PACKAGES.map((p) => p.price)));

// Both packages are sized for this; larger practices are quoted after the free check.
export const SIZE = "Both packages are for practices with 1 to 5 GPs and 3 to 8 staff. Larger practices are quoted after the free check.";

export const FOUNDING = { places: 3 };
const [ESSENTIAL, TURNKEY] = PACKAGES;

// Funding: only what the official sources say. Never promise a grant or claim lost payments.
export const FUNDING = [
  ["PIP Digital Health Incentive", "To be eligible, practices need standards-compliant secure messaging, use it where feasible, and keep a written policy encouraging its use. Both packages set up and test secure messaging and give you that policy.", 5],
  ["Your primary health network", "Victorian PHNs run digital health programs and secure messaging support for practices. Ask yours whether any practice support or grant is open; we'll give you a written scope and quote to attach to an application.", 6],
];

export const STEPS = [
  ["Free 20-minute check", "A call to see where your practice stands on Rule 21, security and fax. No obligation."],
  ["Fixed quote", "A short written plan with the fixed price and dates, before any work starts."],
  ["Set up", "Usually two to four weeks, done remotely and around your clinic hours."],
  ["Hand over and keep current", "Documents, a staff walkthrough, then the monthly plan if you want it."],
];

export const TRUST = [
  ["No patient records needed to start", "We work on policies, accounts and settings. We don't need to see clinical records to do it."],
  ["Inside the software you already use", "Secure messaging and access controls are set up in your existing practice software and providers, not a new system to learn."],
  ["Privacy first", "We work to the Australian Privacy Principles, and anything we set up keeps data in Australia."],
  ["You stay in control", "We write the policy for you to review and adopt. We help you meet Rule 21; we don't give legal advice or certify compliance."],
];

export const GP_FAQ = [
  ["What is Rule 21?", "Rule 21 of the My Health Records Rules 2026 says that, from 1 October 2026, every healthcare provider organisation that uses My Health Record must have a written Security and Access Policy. It covers managing user access, staff training and handling My Health Record data breaches, and the Australian Digital Health Agency may check that it is in place."],
  ["Does a small practice need one?", "Yes. The rule applies to every organisation that participates in My Health Record, regardless of size."],
  ["What does it cost?", `There are two fixed-fee packages for practices with 1 to 5 GPs and 3 to 8 staff: ${ESSENTIAL.name} at ${money(ESSENTIAL.price)} plus GST, and ${TURNKEY.name} at ${money(TURNKEY.price)} plus GST. The first ${numberWord(FOUNDING.places)} clinics get a founding price of ${money(ESSENTIAL.founding)} or ${money(TURNKEY.founding)} plus GST. The optional monthly care plan is ${money(CARE_PLAN.price)} plus GST a month on a 12-month term. Larger practices are quoted after the free check.`],
  ["What's the difference between the two packages?", "Essential puts your Rule 21 policy, records, core security, secure messaging and a short remote training session in place. Turnkey adds live training for all staff, moves your most frequent fax contacts to secure messaging, tests a restore from backup, and includes 30 days of support after go-live."],
  ["Can funding help pay for it?", "Possibly. The PIP Digital Health Incentive asks practices to have secure messaging and a written policy encouraging its use, which both packages cover. Victorian primary health networks also run digital health support and sometimes grants, so it's worth asking yours. We'll give you a written scope and quote for any application, but we can't promise funding."],
  ["How long does it take?", "Usually two to four weeks from the go-ahead, depending on staff availability. Most of the work is done remotely."],
  ["Can a GP clinic stop using fax?", "Usually, yes. Most referrals and results can move to secure messaging that works inside your practice software. On the free check we confirm what's possible with your software and the services you exchange documents with."],
  ["Do you need access to patient records?", "No. The work is about policies, user accounts, security settings and message routing. We don't need to see clinical records."],
  ["Do you work outside Melbourne?", "Yes. We focus on regional and rural clinics across Victoria, including Gippsland, Western Victoria and the Murray region. Set-up is remote, so distance isn't a problem."],
];

// Rule 21 readiness self-check: [question, what to do if the answer isn't yes]
export const CHECK = [
  ["Does your practice have a written Security and Access Policy that covers My Health Record?", "Write a Security and Access Policy tailored to your practice."],
  ["Has the policy been updated for the Rule 21 changes from 1 October 2026?", "Update the policy for Rule 21, including data breach handling."],
  ["Does every staff member log in with their own account, with no shared logins?", "Give every user their own login so access can be traced to a person."],
  ["Do you have a written process for adding, changing, suspending and removing user access?", "Document how access is granted, changed and removed when staff join or leave."],
  ["Do you review who has access at least every few months?", "Set a regular access review and record when it's done."],
  ["Can you see who accessed what in your clinical software and My Health Record?", "Turn on and check access logs."],
  ["Have all staff had My Health Record privacy and security training in the last 12 months, with records kept?", "Run refresher training and keep a training register."],
  ["Do you have a written plan for responding to a data breach, including My Health Record breaches?", "Write a breach response plan and make sure staff know it."],
  ["Is two-step login on for email and remote access, and are backups tested?", "Turn on two-step login and test a backup restore."],
  ["Do you send and receive referrals and results without fax?", "Move referrals and results to secure messaging."],
];

