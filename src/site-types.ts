// The shape of src/config.ts. You do not need to edit this file.

export interface Feature {
  title: string;
  text: string;
}
export interface MenuItem {
  name: string;
  text: string;
  label?: string;
}
export interface Step {
  title: string;
  text: string;
}
export interface Stat {
  value: string;
  label: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  contactEmail: string;
  showPlovifyExamples: boolean;

  eyebrow?: string;
  callToAction?: { text?: string; link?: string };
  features?: Feature[];
  menu?: MenuItem[];
  steps?: Step[];
  stats?: Stat[];
  faq?: FaqItem[];
  assistantSuggestions?: string[];

  enableWaitlist: boolean;
  enableAssistant: boolean;
}
