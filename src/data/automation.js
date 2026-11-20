// Small-business automation offer: one source for the Automation page pricing, its structured data,
// the home FAQ cost answer and llms.txt. Prices are ex GST and live only here.
import { money, numberWord } from "../lib/format.js";

// The free first call. Every "book" button on the site points at SITE.bookingUrl (see site.js).
export const CHECK = {
  name: "Free 30-minute automation check",
  short: "Book a free automation check",
  minutes: 30,
  text: "A 30-minute video call. Show us how the week runs and we'll point out the three jobs most worth automating, what each would take, and a fixed price. No obligation.",
};

export const AUTO_PLANS = [
  {
    name: "Starter automation",
    price: 2400,
    founding: 1900,
    unit: "fixed price",
    note: "The best place to start: one job, done properly, live in about two weeks.",
    items: [
      "One workflow that takes a repetitive job off your team, end to end",
      "Connects up to three of the tools you already use",
      "AI step included where it helps, such as reading emails or documents",
      "Failure alerts, retries and a plain-English run sheet",
      "Hosted on Australian servers or your own account, and you own it",
      "Hand-over walkthrough and 30 days of fixes after go-live",
    ],
  },
  {
    name: "Growth",
    price: 6500,
    from: true,
    unit: "fixed price, scoped together",
    note: "For a whole process, such as enquiry to invoice, or several connected jobs.",
    items: [
      "Three to five connected workflows across your tools",
      "A simple dashboard showing what ran and what it saved",
      "AI agents for reading, sorting and drafting, with a human check",
      "Staff walkthrough and written documentation",
      "60 days of fixes after go-live",
    ],
  },
  {
    name: "Care plan",
    price: 290,
    monthly: true,
    unit: "per month, cancel any time",
    note: "Starts after any build, so your automations keep running while you get on with work.",
    items: [
      "Hosting and updates on Australian servers",
      "Monitoring, with failures fixed for you",
      "One small change or new step each month",
      "A short monthly note on what ran",
    ],
  },
];

export const FOUNDING = { places: 3 };

// "$2,400" etc., used in copy.
export const STARTER = AUTO_PLANS[0];
export const FROM_PRICE = money(STARTER.price);
export const priceLine = () => {
  const [s, g, c] = AUTO_PLANS;
  return `${s.name} ${money(s.price)} + GST (founding price ${money(s.founding)} + GST for the first ${numberWord(FOUNDING.places)} businesses), ${g.name} from ${money(g.price)} + GST, ${c.name.toLowerCase()} ${money(c.price)} + GST a month`;
};
