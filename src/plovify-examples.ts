// Sample content for Plovify, the fictional startup of the starter site.
// Used only while `showPlovifyExamples: true` in src/config.ts.
// You do not need to edit this file: add your own items in config.ts instead.
import type { FaqItem, Feature, MenuItem, Stat, Step } from "./site-types";

export const plovify = {
  eyebrow: "Hot plov in 50 ms. Anywhere.",
  ctaText: "Reserve your kazan",
  footerNote: "Plovify is fictional. The plov is real — somewhere near you.",

  features: [
    {
      title: "Zero cold starts",
      text: "Our plov is always hot. So is this website: it runs on Cloudflare Workers, which have no cold starts.",
    },
    {
      title: "A choyxona in every city",
      text: "Served from Cloudflare's network in 330+ cities, so there is always a kazan close to your guests.",
    },
    {
      title: "From dinner for 4 to a wedding for 800",
      text: "Scales automatically. No extra servers, no extra stoves, no panic in the kitchen.",
    },
    {
      title: "Every recipe welcome",
      text: "Tashkent, Samarkand, Fergana, Almaty, Dushanbe, Bishkek or Baku style: every family recipe is the best one.",
    },
    {
      title: "Bots stay outside",
      text: "Cloudflare's built-in DDoS protection keeps bad traffic away from the kitchen. Real guests are always welcome.",
    },
    {
      title: "Start free, pay when the wedding comes",
      text: "Prototype on the free plan with no credit card. Grow into a paid plan when the guests arrive.",
    },
  ] satisfies Feature[],

  // No real prices: playful labels only.
  menu: [
    {
      name: "Classic plov",
      text: "Rice, yellow carrots, onions and a lot of patience, slow-cooked in a kazan.",
      label: "1 portion = 1 commit",
    },
    { name: "Vegetarian plov", text: "Chickpeas, raisins and carrots. Zero compromises.", label: "100% plant-powered" },
    { name: "Wedding pack", text: "800 portions from a kazan the size of a small data center.", label: "Scales automatically" },
    { name: "Achichuk salad", text: "Tomatoes, onions and a little heat. The perfect side.", label: "Served fresh" },
    {
      name: "Green tea",
      text: "Refills without limits, just like static asset requests on Cloudflare's free plan.",
      label: "Free and unlimited",
    },
  ] satisfies MenuItem[],

  steps: [
    { title: "Choose your plov", text: "Classic, vegetarian or the full wedding pack." },
    { title: "We deploy the kazan", text: "One commit, and the kitchen is ready in about a minute." },
    { title: "Served worldwide", text: "Hot plov, close to every guest, in 330+ cities." },
  ] satisfies Step[],

  stats: [
    { value: "99.99%", label: "rice uptime" },
    { value: "0", label: "cold starts" },
    { value: "1,000,000", label: "kazans served (in our dreams)" },
  ] satisfies Stat[],

  faq: [
    {
      question: "Are carrots mandatory?",
      answer: "In our classic plov, yes: yellow carrots. Your family recipe, your rules.",
    },
    { question: "Raisins or no raisins?", answer: "We support both. That's called multi-tenancy." },
    {
      question: "Do you deliver to Almaty, Dushanbe, Bishkek and Baku?",
      answer: "Our website already does: it is served from Cloudflare's network in 330+ cities. The plov itself is fictional, for now.",
    },
    {
      question: "Can you cater a wedding for 800 guests?",
      answer: "That is our favourite traffic spike. We scale up automatically, and nobody has to buy a new server.",
    },
    {
      question: "Is Plovify a real company?",
      answer: "No. Plovify is a fictional startup used in a Cloudflare workshop. Replace it with yours!",
    },
  ] satisfies FaqItem[],

  waitlist: {
    title: "Reserve your kazan for wedding season",
    text: "Leave your email and we will save you a seat at the table. No spam, only plov news.",
    button: "Reserve",
    countLabel: "People waiting for plov",
  },

  assistantSuggestions: [
    "Do you have vegetarian plov?",
    "Can you cater a wedding for 800 guests?",
    "Do you deliver to Almaty?",
  ],
  offTopicExample: "Ask me about Kubernetes and I'll recommend more carrots.",
};
