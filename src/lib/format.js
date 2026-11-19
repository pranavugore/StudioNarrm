// Small formatting helpers shared by pages, components and data files.

// 0 -> "01": step and card numbers.
export const two = (k) => String(k + 1).padStart(2, "0");

// 3800 -> "$3,800"
export const money = (n) => "$" + n.toLocaleString("en-AU");

// "2026-10-27" -> "27 October 2026"
export const longDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });

// "2026-10-27" -> "2026-10-27T00:00:00+11:00" (midnight Melbourne time, with the right offset for daylight saving).
// Google's ProfilePage docs ask for dateCreated/dateModified as a full ISO 8601 date-time. Values that already have a time pass through.
export const isoDateTime = (d) => {
  if (String(d).includes("T")) return d;
  const at = new Date(d + "T12:00:00Z");
  const off = new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Melbourne", timeZoneName: "longOffset" }).formatToParts(at).find((x) => x.type === "timeZoneName").value.replace("GMT", "") || "+00:00";
  return `${d}T00:00:00${off}`;
};

// 3 -> "three" (falls back to digits past ten)
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
export const numberWord = (n) => WORDS[n] || String(n);
export const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1);
