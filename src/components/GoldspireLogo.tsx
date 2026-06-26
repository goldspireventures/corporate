import { BRAND_ASSETS } from "@/lib/brand-assets";

type GoldspireLogoProps = {
  className?: string;
  /** Full lockup (icon + GOLDSPIRE + VENTURES) or spire mark only. */
  variant?: "full" | "mark";
  /** Pixel height — width scales automatically. */
  height?: number;
};

export function GoldspireLogo({
  className = "",
  variant = "full",
  height,
}: GoldspireLogoProps) {
  if (variant === "mark") {
    const h = height ?? 32;
    return (
      <img
        src={BRAND_ASSETS.logoMark}
        alt=""
        aria-hidden
        height={h}
        width={Math.round(h * 0.8)}
        className={`w-auto shrink-0 ${className}`}
      />
    );
  }

  const h = height ?? 44;
  return (
    <img
      src={BRAND_ASSETS.logoFull}
      alt="Goldspire Ventures"
      height={h}
      width={Math.round(h * 1.05)}
      className={`w-auto shrink-0 ${className}`}
    />
  );
}
