import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  PORTFOLIO_REGIONS,
  getBuildingPortfolioCompanies,
  getCompaniesByRegionSorted,
  getLivePortfolioCompanies,
} from "@/data/portfolio";
import { CompanyCard } from "@/components/portfolio/CompanyCard";

type PortfolioFilter = "all" | "live" | "building";

const FILTERS: { id: PortfolioFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "live", label: "Live" },
  { id: "building", label: "In development" },
];

export function PortfolioSection() {
  const [active, setActive] = useState<string | null>(null);
  const [filter, setFilter] = useState<PortfolioFilter>("all");

  const live = getLivePortfolioCompanies();
  const building = getBuildingPortfolioCompanies();
  const showLive = filter === "all" || filter === "live";
  const showBuilding = filter === "all" || filter === "building";

  let cardIndex = 0;

  return (
    <section className="section-pad !pt-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  filter === f.id
                    ? "bg-gold text-rich-black font-medium"
                    : "border border-white/10 text-muted hover:border-gold/30 hover:text-gold"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 space-y-20">
          {showLive && live.length > 0 ? (
            <div>
              <Reveal>
                <p className="text-xs tracking-[0.3em] text-gold">LIVE TODAY</p>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Products and divisions shipping under the Ventures umbrella.
                </p>
              </Reveal>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {live.map((company) => {
                  const delay = cardIndex++ * 0.05;
                  return (
                    <Reveal key={company.slug} delay={delay}>
                      <CompanyCard
                        company={company}
                        active={active}
                        onHover={setActive}
                      />
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ) : null}

          {showBuilding ? (
            <>
              {PORTFOLIO_REGIONS.map((region) => {
                const companies = getCompaniesByRegionSorted(region.id).filter(
                  (c) => c.status === "building",
                );
                if (companies.length === 0) return null;

                return (
                  <div key={region.id}>
                    <Reveal>
                      <p className="text-xs tracking-[0.3em] text-gold">
                        {filter === "building" ? region.label : `IN DEVELOPMENT · ${region.label}`}
                      </p>
                      <p className="mt-2 max-w-2xl text-sm text-muted">{region.description}</p>
                    </Reveal>
                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                      {companies.map((company) => {
                        const delay = cardIndex++ * 0.05;
                        return (
                          <Reveal key={company.slug} delay={delay}>
                            <CompanyCard
                              company={company}
                              active={active}
                              onHover={setActive}
                            />
                          </Reveal>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}

          {filter === "live" && live.length === 0 ? (
            <p className="text-muted text-sm">No live ventures match this filter.</p>
          ) : null}
          {filter === "building" && building.length === 0 ? (
            <p className="text-muted text-sm">No ventures in development match this filter.</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
