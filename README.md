# Goldspire Corporate

Public marketing site for **Goldspire Ventures Ltd** — portfolio, philosophy, and partnership inquiries.

**Production:** [goldspireventures.com](https://goldspireventures.com)  
**GitHub org:** [github.com/goldspireventures](https://github.com/goldspireventures) (`corporate` repo)  
**Canonical registry:** portfolio data lives in `src/data/portfolio.ts`

This repo was extracted from the Livia monorepo (`artifacts/goldspire-corporate`) so the holding company site ships on its own release cadence.

## Quick start

```bash
npm install
npm run dev      # Vite dev server
npm run build    # production build → dist/
npm run typecheck
```

## Deploy

Configured for Vercel (`vercel.json`). Connect the `goldspireventures` domain to this project.

## Portfolio updates

Edit `src/data/portfolio.ts` — the single source for company pages (`/companies/:slug`), homepage teaser, footer links, and metrics counts.

## Brand assets

Official lockup recreated as vector exports in `public/images/brand/`:

| File | Use |
|------|-----|
| `goldspire-ventures-logo-transparent.png` | Site nav, hero, footer |
| `goldspire-ventures-logo.png` | Navy tile — decks, social, Apple touch icon |
| `goldspire-mark.png` | Favicon, small marks |

**Regenerate PNGs** after editing `scripts/render-brand-assets.html`:

```bash
npm run brand:export
```

Source: Cinzel (GOLDSPIRE) + Montserrat (VENTURES) + spire line art matching the official lockup.


## Related repos

| Repo | Role |
|------|------|
| `goldspireventures/corporate` | This site |
| `goldspireventures/livia` | Livia product monorepo |
| `goldspireventures/veil` | Veil browser security (`secure-text`) |
| `goldspireventures/launch-stack` | Goldspire Studio factory |
| `goldspireventures/company` | Brand hierarchy & repo registry |

See [BRAND-HIERARCHY.md](../docs/BRAND-HIERARCHY.md) in the org docs folder for the full map.
