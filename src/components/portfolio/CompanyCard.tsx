import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioCompany } from "@/data/portfolio";
import { statusLabel } from "@/lib/motion";
import { PortfolioCardMedia } from "@/components/portfolio/PortfolioCardMedia";

type CompanyCardProps = {
  company: PortfolioCompany;
  active?: string | null;
  onHover?: (slug: string | null) => void;
  compact?: boolean;
};

export function CompanyCard({ company, active, onHover, compact = false }: CompanyCardProps) {
  const industryLabel = company.industry === "Services" ? "Division" : company.industry;

  return (
    <motion.article
      layout={!compact}
      onHoverStart={onHover ? () => onHover(company.slug) : undefined}
      onHoverEnd={onHover ? () => onHover(null) : undefined}
      className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br ${company.gradient} transition-colors hover:border-gold/30 ${
        compact ? "p-5" : "p-8 sm:p-10 glow-gold"
      }`}
    >
      <PortfolioCardMedia company={company} className="mb-5" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold/80">{industryLabel}</p>
          <h3
            className={`mt-2 font-display font-semibold ${
              compact ? "text-xl group-hover:text-gold transition-colors" : "text-2xl sm:text-3xl"
            }`}
          >
            {company.name}
          </h3>
          <p className={`mt-2 text-soft ${compact ? "text-sm" : ""}`}>{company.tagline}</p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
          {statusLabel[company.status]}
        </span>
      </div>

      {!compact ? (
        <p className="mt-6 text-sm leading-relaxed text-muted">{company.description}</p>
      ) : (
        <p className="mt-3 text-sm text-muted line-clamp-2">{company.description}</p>
      )}

      {!compact && onHover ? (
        <AnimatePresence>
          {active === company.slug ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm italic text-soft/80">{company.vision}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      ) : null}

      <div className={`flex flex-wrap gap-3 ${compact ? "mt-5" : "mt-8"}`}>
        <Link
          href={`/companies/${company.slug}`}
          className="text-sm font-medium text-gold hover:underline"
        >
          {compact ? "View company →" : "View company →"}
        </Link>
        {company.externalUrl ? (
          <a
            href={company.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-white"
          >
            Visit site ↗
          </a>
        ) : null}
      </div>

      {compact ? (
        <p className="mt-4 text-xs text-soft/60">
          {company.region === "global" ? "UK, EU & Global" : "Africa"}
        </p>
      ) : null}
    </motion.article>
  );
}
