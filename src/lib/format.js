// Small formatting helpers shared by pages, components and data files.

// 0 -> "01": step and card numbers.
export const two = (k) => String(k + 1).padStart(2, "0");

// 3800 -> "$3,800"
export const money = (n) => "$" + n.toLocaleString("en-AU");

// "2026-10-27" -> "27 October 2026"
export const longDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });

// 3 -> "three" (falls back to digits past ten)
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
export const numberWord = (n) => WORDS[n] || String(n);
export const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1);
