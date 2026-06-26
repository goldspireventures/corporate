import type { PortfolioCompany } from "@/data/portfolio";

type PortfolioCardMediaProps = {
  company: PortfolioCompany;
  className?: string;
};

export function PortfolioCardMedia({ company, className = "" }: PortfolioCardMediaProps) {
  if (company.previewImage) {
    return (
      <div
        className={`overflow-hidden rounded-lg border border-white/8 bg-black/30 ${className}`}
      >
        <img
          src={company.previewImage}
          alt={`${company.name} product preview`}
          className="aspect-[16/9] w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-white/8 bg-gradient-to-br ${company.gradient} ${className}`}
      aria-hidden
    >
      <div className="aspect-[16/9] w-full p-6 flex flex-col justify-end">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(212,175,55,0.12),transparent)]" />
        <span className="relative text-4xl font-display font-semibold text-gold/25">
          {company.name.charAt(0)}
        </span>
        <p className="relative mt-2 text-xs uppercase tracking-widest text-gold/50">
          {company.industry}
        </p>
      </div>
    </div>
  );
}
