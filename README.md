# Goldspire Corporate

Public marketing site for **Goldspire Ventures Ltd** — portfolio, philosophy, and partnership inquiries.

**Production:** [goldspireventures.com](https://goldspireventures.com)  
**GitHub org:** [github.com/goldspire-global](https://github.com/goldspire-global) (`corporate` repo)  
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

Keep in sync with `REPO-REGISTRY.yaml` at the org level (see `goldspireventures/company` meta repo or Personal Projects root copy).

## Related repos

| Repo | Role |
|------|------|
| `goldspire-global/corporate` | This site |
| `goldspire-global/livia` | Livia product monorepo |
| `goldspire-global/veil` | Veil browser security (`secure-text`) |
| `goldspire-global/launch-stack` | Goldspire Studio factory |
| `goldspire-global/company` | Brand hierarchy & repo registry |

See [BRAND-HIERARCHY.md](../docs/BRAND-HIERARCHY.md) in the org docs folder for the full map.
