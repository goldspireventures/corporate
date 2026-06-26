type GoldspireLogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md";
};

export function GoldspireLogo({ className = "", showWordmark = true, size = "md" }: GoldspireLogoProps) {
  const icon = size === "sm" ? 28 : 32;
  const wordClass = size === "sm" ? "text-xs tracking-[0.18em]" : "text-sm tracking-[0.2em]";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#0B0D18" stroke="rgba(212,175,55,0.35)" strokeWidth="1" />
        <path
          d="M8 22V14L16 6L24 14V22"
          stroke="#d4af37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V16L16 12L20 16V22"
          stroke="#f5e6b8"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="9" r="1.25" fill="#d4af37" />
      </svg>
      {showWordmark ? (
        <span className={`font-medium text-white/90 ${wordClass}`}>
          GOLDSPIRE
        </span>
      ) : null}
    </span>
  );
}
