import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import { getPublicPortfolioCompanies } from "@/data/portfolio";
import { CompanyCard } from "@/components/portfolio/CompanyCard";

const FEATURED_SLUGS = ["livia", "veil", "goldspire-studio"] as const;

export function PortfolioTeaser() {
  const featured = FEATURED_SLUGS.map(
    (slug) => getPublicPortfolioCompanies().find((c) => c.slug === slug)!,
  ).filter(Boolean);

  return (
    <section className="section-pad !py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] text-gold">PORTFOLIO</p>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                Companies under Goldspire&apos;s umbrella
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                What is live today. Studio client work is at{" "}
                <a
                  href="https://goldspire.dev"
                  className="text-gold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  goldspire.dev
                </a>
                .
              </p>
            </div>
            <Link href="/portfolio" className="text-sm font-medium text-gold hover:underline shrink-0">
              Full portfolio →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featured.map((company, i) => (
            <Reveal key={company.slug} delay={i * 0.06}>
              <CompanyCard company={company} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
