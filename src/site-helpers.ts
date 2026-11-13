// Small helpers used by the pages. You do not need to edit this file.
import { site } from "./config";
import { content } from "./site-content";

// Use the brand colour from config.ts if it is a valid hex code.
const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
export const accent = HEX.test(site.accentColor ?? "") ? site.accentColor : "#e8630a";

// Pick black or white text so buttons stay readable on any brand colour.
function luminance(hex: string) {
  const full = hex.length === 4 ? "#" + [...hex.slice(1)].map((c) => c + c).join("") : hex;
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(full.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export const onAccent = luminance(accent) > 0.3 ? "#111111" : "#ffffff";

export const { features, menu, steps, stats, faq } = content;

// Feature icons are picked automatically, in this order.
export const featureIcons = ["bolt", "globe", "users", "heart", "shield", "sparkles"];

// Main button: your own link if set; otherwise the waitlist (Level 2+),
// otherwise an email to you ("Get in touch"), otherwise the features section.
const customLink = content.ctaLink;
const emailLink = site.contactEmail ? `mailto:${site.contactEmail}` : "";
export const ctaHref =
  customLink || (site.enableWaitlist ? "/#waitlist" : emailLink || "/#features");
export const ctaText =
  customLink || site.enableWaitlist
    ? content.ctaText
    : "Get in touch";

export const navLinks = [
  features.length ? { href: "/#features", label: "Features" } : null,
  menu.length ? { href: "/#menu", label: "Menu" } : null,
  steps.length ? { href: "/#how-it-works", label: "How it works" } : null,
  site.enableWaitlist ? { href: "/#waitlist", label: "Waitlist" } : null,
  site.enableAssistant ? { href: "/#ask", label: "Ask AI" } : null,
  faq.length ? { href: "/#faq", label: "FAQ" } : null,
  { href: "/blog/", label: "Blog" },
].filter((link) => link !== null);

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
