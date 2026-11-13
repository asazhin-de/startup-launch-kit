---
title: "How we survived wedding-season traffic"
description: "800 guests, one kazan, zero servers to manage."
pubDate: 2026-11-12
author: "The Plovify team"
sample: true
---

In wedding season, traffic does not grow slowly. It arrives all at once, hungry, and with relatives. We wanted a website that could handle a quiet Tuesday and a Saturday wedding for 800 guests without anyone buying a new server.

## The stack

- **Astro** turns one settings file and a few Markdown posts (like this one) into a fast, static website.
- **Cloudflare Workers** serves it from Cloudflare's global network and scales automatically, so a spike of visitors is just another busy evening.
- **Workers Builds** connects to our GitHub repository: every change we save goes live in about a minute.

Later we added a waitlist backed by a **D1** database and an AI assistant powered by **Workers AI**, in the same project. No second cloud account, no extra kitchen.

## What we learned

Start with the smallest thing guests can taste, put it online, and improve it in public. A live link beats a perfect recipe.

*Tip for founders: this is a sample post about a fictional startup. Edit or delete `src/content/blog/how-we-survived-wedding-season.md`.*
