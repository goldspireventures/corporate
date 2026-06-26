import { BRAND_ASSETS, LOGO_DIMENSIONS } from "@/lib/brand-assets";

type GoldspireLogoProps = {
  className?: string;
  /** Full lockup (icon + GOLDSPIRE + VENTURES) or spire mark only. */
  variant?: "full" | "mark";
  /** Pixel height — width scales automatically from asset aspect ratio. */
  height?: number;
};

export function GoldspireLogo({
  className = "",
  variant = "full",
  height,
}: GoldspireLogoProps) {
  const h = height ?? (variant === "mark" ? 36 : 48);
  const dims = variant === "mark" ? LOGO_DIMENSIONS.logoMark : LOGO_DIMENSIONS.logoSite;
  const w = Math.round(h * (dims.width / dims.height));

  return (
    <img
      src={variant === "mark" ? BRAND_ASSETS.logoMark : BRAND_ASSETS.logoFull}
      alt={variant === "mark" ? "" : "Goldspire Ventures"}
      aria-hidden={variant === "mark" ? true : undefined}
      width={w}
      height={h}
      className={`block shrink-0 object-contain object-left ${className}`}
      style={{ height: h, width: w, maxHeight: h, maxWidth: w }}
      decoding="async"
    />
  );
}
