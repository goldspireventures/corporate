import { BRAND_ASSETS, LOGO_DIMENSIONS } from "@/lib/brand-assets";

type GoldspireLogoProps = {
  className?: string;
  /** Full lockup (icon + GOLDSPIRE + VENTURES) or spire mark only. */
  variant?: "full" | "mark";
  /** Transparent gold lockup (nav) or navy-flattened tile (footer). */
  asset?: "transparent" | "site";
  /** Pixel height — width scales automatically from asset aspect ratio. */
  height?: number;
};

export function GoldspireLogo({
  className = "",
  variant = "full",
  asset = "transparent",
  height,
}: GoldspireLogoProps) {
  const h = height ?? (variant === "mark" ? 36 : 48);
  const dims = variant === "mark" ? LOGO_DIMENSIONS.logoMark : LOGO_DIMENSIONS.logoSite;
  const w = Math.round(h * (dims.width / dims.height));
  const src =
    variant === "mark"
      ? BRAND_ASSETS.logoMark
      : asset === "site"
        ? BRAND_ASSETS.logoFull
        : BRAND_ASSETS.logoTransparent;

  return (
    <span
      className={`brand-logo-wrap ${className}`}
      style={{ width: w, height: h }}
      aria-hidden={variant === "mark" ? true : undefined}
    >
      <img
        src={src}
        alt={variant === "mark" ? "" : "Goldspire Ventures"}
        className="brand-logo-img"
        width={w}
        height={h}
        decoding="async"
        draggable={false}
      />
    </span>
  );
}
