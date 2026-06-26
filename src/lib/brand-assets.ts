/** Canonical brand assets — official Goldspire Ventures lockup. */
export const BRAND_ASSETS = {
  /** Navy-flattened lockup for site (nav, hero, footer) — seamless on #050816. */
  logoFull: "/images/brand/goldspire-ventures-logo-site.png",
  /** True transparent lockup — light backgrounds, overlays. */
  logoTransparent: "/images/brand/goldspire-ventures-logo-transparent.png",
  /** Official master on black — decks, social, Apple touch icon. */
  logoFullNavy: "/images/brand/goldspire-ventures-logo.png",
  /** Unprocessed master archive in repo. */
  logoSource: "/images/brand/goldspire-ventures-logo-source.png",
  logoMark: "/images/brand/goldspire-mark.png",
  favicon: "/images/brand/favicon-32.png",
} as const;

/** Trimmed asset dimensions — keep in sync via `npm run brand:process`. */
export const LOGO_DIMENSIONS = {
  logoSite: { width: 683, height: 581 },
  logoMark: { width: 211, height: 370 },
} as const;
