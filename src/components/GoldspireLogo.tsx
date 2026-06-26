import { BRAND_ASSETS } from "@/lib/brand-assets";

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

  return (
    <img
      src={variant === "mark" ? BRAND_ASSETS.logoMark : BRAND_ASSETS.logoFull}
      alt={variant === "mark" ? "" : "Goldspire Ventures"}
      aria-hidden={variant === "mark" ? true : undefined}
      className={`w-auto shrink-0 ${className}`}
      style={{ height: h }}
      decoding="async"
    />
  );
}
