// Blog posts live in src/content/blog/ as Markdown (.md) files.
// This file describes the fields every post must have at the top
// (between the two --- lines).
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Write the date like 2026-11-20 (year-month-day).
    pubDate: z
      .union(
        [z.date(), z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "write the date like 2026-11-20")],
        { error: "pubDate must look like 2026-11-20 (year-month-day)" },
      )
      .transform((value) => new Date(value)),
    author: z.string().optional(),
    draft: z.boolean().optional(), // draft: true hides the post
    sample: z.boolean().optional(), // Plovify sample post (hidden when showPlovifyExamples is false)
  }),
});

export const collections = { blog };
