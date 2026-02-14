# ARK Contemporary — Premium Gallery Demo

A Next.js + Tailwind + Framer Motion gallery site rebuilt with curated content extracted from ARK Contemporary pages.

## Included experience
- Cinematic homepage with ARK hero image
- About page using the `ark. = art + rosendal + kuns.` narrative
- Artists section with structured bios, statements, and selected works
- Exhibitions + Events with season-based archive blocks and download links
- Contact details, gallery hours, and newsletter sign-up section
- Health endpoint and Vercel deployment config

## Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion

## Vercel deployment readiness
- `vercel.json` includes framework/build settings, region targeting, and baseline security headers.
- `.nvmrc` pins Node 20 and `.npmrc` enforces engine consistency in CI/builds.
- `.env.example` provides deploy-time environment variable template.
- `app/api/health/route.ts` provides `/api/health`.

## Run locally
```bash
npm install
npm run dev
```
