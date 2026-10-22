# Continue this project in Google AI Studio

## Project type

This is a complete **framework-free JavaScript website**. It uses Vite only as a local development and production-build tool; it does not use React, a database, server routes, environment variables, or an API key.

The current public experience and client-preview dashboard are fully contained in:

```text
index.html        page structure and dialogs
styles.css        responsive desktop/tablet/mobile design
app.js            filters, WhatsApp flow, local admin editor, content
assets/           supplied owner/logo assets and included collection imagery
```

## Local run

```bash
npm install
npm run dev
```

For a deployment check:

```bash
npm run build
npm run preview
```

## Google AI Studio handoff

The most reliable official route for an existing codebase is to place this folder in a GitHub repository, then in Google AI Studio Build mode choose **Add files (+) → Import from GitHub** and select that repository. Google documents GitHub import as the existing-code workflow for Build mode. [Google AI Studio Build documentation](https://ai.google.dev/gemini-api/docs/aistudio-build-mode)

This package ZIP is a complete backup and can be uploaded where file upload is offered. If Build mode asks what to do with the project, use this instruction:

> Treat the imported `sree-ranganadha-jewellers` project as the source of truth. Preserve the current vanilla HTML/CSS/JavaScript architecture, visual design, bilingual Telugu/English copy, assets, WhatsApp flow, and local admin behavior. Modify only the files needed for my next request; do not recreate the app in React unless I explicitly ask.

## Included and working

- Bilingual Telugu-first / English-supporting storefront
- Responsive desktop, tablet, and mobile layout
- Provided crest and both proprietor portraits
- 18 collection cards with six distinct product-photo directions
- WhatsApp enquiry flow to `+91 93927 38383`
- Collection filters and product enquiry prompts
- Owner dashboard, starter passcode `SRJ2026`, with browser-local persistence
- Approximate Maps search link using the supplied Kollabazar / M.G. Road location

## External resources / requirements

| Item | Used for | Required now? |
| --- | --- | --- |
| Google Fonts CDN | Italiana, Manrope, DM Sans, Noto Serif Telugu | Internet connection for the intended typography |
| Lucide CDN | Interface icons | Internet connection for icons |
| WhatsApp deep link | Customer enquiries | No key or backend; opens WhatsApp |
| Google Maps search link | Approximate business area | No key; exact map pin still needs confirmation |
| Vite | Local development/build tooling | Run `npm install` once |

There are **no API keys**, external databases, payment providers, third-party forms, or server calls in the current source.

## Important production gaps

The existing admin panel is a client-preview editor powered by `localStorage`, not a secure multi-user CMS. Before a public business launch, add server-side authentication, a database/media store, a secure content-management workflow, and a real production domain. Also replace the approximate map search with the client-confirmed Google Maps pin, verify any purity/certification claims, and replace the included placeholder collection photography with real product photography when available.

## Assets

All referenced images are included locally in `assets/`. `brand-logo-source.png`, `owner-portrait-gold.png`, and `owner-portrait-plum.png` came from the client materials. The seven jewellery images are prototype collection imagery and are ready to be replaced with real campaign/product photographs.
