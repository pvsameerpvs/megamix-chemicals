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
npm start
```

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

