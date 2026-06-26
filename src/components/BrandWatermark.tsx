import { BRAND_ASSETS } from "@/lib/brand-assets";

/** Fixed, centered spire watermark blended into the site background. */
export function BrandWatermark() {
  return (
    <div className="brand-watermark" aria-hidden>
      <img
        src={BRAND_ASSETS.logoMarkTransparent}
        alt=""
        className="brand-watermark__mark"
        width={211}
        height={370}
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
