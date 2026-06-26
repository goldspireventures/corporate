# Goldspire Corporate

Public marketing site for **Goldspire Ventures Ltd** — portfolio, philosophy, and partnership inquiries.

**Production:** [goldspireventures.com](https://goldspireventures.com)  
**GitHub org:** [github.com/goldspireventures](https://github.com/goldspireventures)  
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
| `goldspireventures/corporate` | This site |
| `goldspireventures/livia` | Livia product monorepo |
| `goldspireventures/veil` | Veil browser security (`secure-text`) |
| `goldspireventures/launch-stack` | Goldspire Studio factory |

See [BRAND-HIERARCHY.md](../docs/BRAND-HIERARCHY.md) in the org docs folder for the full map.
