// Decides which text is shown: what you wrote in config.ts first,
// then the Plovify examples (if switched on), then neutral defaults.
// Used by the website AND by the AI assistant (worker/index.ts),
// so both always tell the same story. You do not need to edit this file.
import { site } from "./config";
import { plovify } from "./plovify-examples";

const examples = site.showPlovifyExamples === true;
const name = site.name;

function pick<T>(own: T[] | undefined, example: T[], neutral: T[]): T[] {
  if (own && own.length > 0) return own;
  return examples ? example : neutral;
}

function suggestions(): string[] {
  if (site.assistantSuggestions && site.assistantSuggestions.length > 0) {
    return site.assistantSuggestions;
  }
  const ownFaq = (site.faq ?? []).map((item) => item.question).filter(Boolean);
  if (ownFaq.length > 0) return ownFaq.slice(0, 3);
  if (examples) return plovify.assistantSuggestions;
  return [`What does ${name} do?`, `Who is ${name} for?`, "How can I get in touch?"];
}

export const content = {
  examples,
  eyebrow: site.eyebrow || (examples ? plovify.eyebrow : ""),
  ctaText: site.callToAction?.text || (examples ? plovify.ctaText : "Get early access"),
  ctaLink: site.callToAction?.link || "",
  footerNote: examples ? plovify.footerNote : "",

  features: pick(site.features, plovify.features, [
    { title: "Simple to start", text: `Getting started with ${name} takes minutes, not weeks.` },
    { title: "Works everywhere", text: "Use it on your phone, laptop or tablet, wherever you are." },
    { title: "Built with our customers", text: "Every feature starts with a conversation with people like you." },
  ]),
  menu: pick(site.menu, plovify.menu, []),
  steps: pick(site.steps, plovify.steps, [
    { title: "Get in touch", text: `Tell us what you need from ${name}.` },
    { title: "Get early access", text: "We invite early users step by step and help them get started." },
    { title: "Grow with us", text: "Share feedback and help shape what we build next." },
  ]),
  stats: pick(site.stats, plovify.stats, []),
  faq: pick(site.faq, plovify.faq, []),

  waitlist: examples
    ? plovify.waitlist
    : {
        title: `Join the ${name} waitlist`,
        text: "Be the first to know when we launch. No spam, unsubscribe any time.",
        button: "Join",
        countLabel: "People on the waitlist",
      },

  assistant: {
    title: `Ask ${name}`,
    text: "Our AI assistant knows everything on this page. Ask in English, Russian, Uzbek or your language.",
    // Suggested questions must match what the page actually says:
    // 1) your own suggestions, 2) the first questions of YOUR FAQ,
    // 3) Plovify's (only while the page shows Plovify's FAQ), 4) generic ones.
    suggestions: suggestions(),
    offTopicExample: examples ? plovify.offTopicExample : "",
  },
};
