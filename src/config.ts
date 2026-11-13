// ============================================================
//  EDIT THIS FILE to make the website about YOUR startup.
//  The starter site is about Plovify, a fictional startup.
//  Replace it with yours, or keep it and tweak it.
//  Change the text between the quotes, then commit.
//  Your site will redeploy automatically in about a minute.
// ============================================================
import type { SiteConfig } from "./site-types";

export const site: SiteConfig = {
  // ----------------------------------------------------------
  //  EDIT: basics. Start here (Level 1, Part B).
  // ----------------------------------------------------------
  name: "Plovify by Alexey",
  tagline: "Plov as a Service by Alexey",
  description:
    "Plovify brings hot, fresh plov to every table, from a family dinner to a wedding for 800 guests. Replace this text with one or two sentences about the problem your startup solves and who it is for.",
  accentColor: "#2563eb", // your brand colour as a hex code, e.g. "#2563eb" (blue)
  contactEmail: "asazhin@demolabs.fyi",

  // Building your own startup? Set this to false.
  // (It hides the Plovify menu, numbers, FAQ and sample blog posts,
  //  and uses neutral texts about YOUR startup instead.)
  showPlovifyExamples: false,

  // ----------------------------------------------------------
  //  OPTIONAL: more sections. Edit them later if you like.
  //  An empty list [] or empty text "" means: use the Plovify
  //  example (or a neutral text if showPlovifyExamples is false).
  //  Add your own items to replace them. Examples to copy:
  //
  //  features: [{ title: "Fast setup", text: "Start in 5 minutes." }],
  //  menu: [{ name: "Basic plan", text: "For small shops.", label: "Popular" }],
  //  steps: [{ title: "Sign up", text: "Leave your email." }],
  //  stats: [{ value: "120", label: "shops on the waitlist" }],
  //  faq: [{ question: "Do you work in Samarkand?", answer: "Yes, since 2026." }],
  //
  //  Tip: the AI assistant (Level 3) learns everything you write here.
  // ----------------------------------------------------------
  eyebrow: "",
  callToAction: { text: "", link: "" }, // the main button; empty = automatic
  features: [],
  menu: [],
  steps: [],
  stats: [],
  faq: [],
  assistantSuggestions: [],

  // ----------------------------------------------------------
  //  Workshop switches. Leave as `false` until the workbook
  //  tells you to turn them on.
  // ----------------------------------------------------------
  enableWaitlist: true, // Level 2
  enableAssistant: false, // Level 3
};
