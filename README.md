# Megamix Chemicals — Premium Industrial Website

Tech stack:
- Next.js (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui (vendored components)

## Setup

```bash
# 1) Install dependencies
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build
```

## Deploy to Cloudflare Pages

This project is Next.js (App Router) and is configured for **static export** so it can be hosted on Cloudflare Pages.

### Option A: Deploy via Cloudflare Dashboard (Git integration)

1) Cloudflare Dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git
2) Build settings
- Build command: `npm run build`
- Build output directory: `out`
3) Deploy

Recommended build env:
- Node.js: 20 (set `NODE_VERSION=20` in Pages build environment variables if needed)

### Option B: Deploy via CLI (Wrangler)

```bash
npm install
npm run deploy:cf
```

If your Pages project name is different, change `--project-name` in `package.json`.

## Project structure

```
app/
  layout.tsx
  page.tsx
  about/page.tsx
  products/page.tsx
  products/products-client.tsx
  contact/page.tsx
  contact/contact-client.tsx
  privacy/page.tsx

components/
  Navbar.tsx
  Footer.tsx
  ProductCard.tsx
  ProductModal.tsx
  SectionHeading.tsx
  ui/*

lib/
  products.ts
  utils.ts

public/
  images/*

styles/
  globals.css
```

## Notes
- Product details are **modal-based** (no product routes/slugs).
- Contact form shows a success toast (no backend).
- Replace placeholder About Us text in `app/about/page.tsx` with your full content when ready.
