# ARK Contemporary — Premium Gallery Demo

A Next.js + Tailwind + Framer Motion gallery site populated with the structured ARK content pack across home, artists, exhibitions, about, contact, and newsletter sections.

## Included experience
- Cinematic homepage with ARK hero image and newsletter sign-up block
- About page using the `ark. = art + rosendal + kuns.` narrative and permanent-artist links
- Artists section with expanded bios/statements and full selected-works lists
- Exhibitions + Events with current show, seasonal archive cards, and Equilibrium quote
- Contact + Visit with address, manager details, email, and gallery hours
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
