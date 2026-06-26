import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import {
  PORTFOLIO_COMPANIES,
  countBuildingVentures,
  countLiveProducts,
} from "@/data/portfolio";

const METRICS = [
  { label: "Companies in portfolio", value: PORTFOLIO_COMPANIES.length },
  { label: "Products live", value: countLiveProducts() },
  { label: "In development", value: countBuildingVentures() },
  { label: "Focus regions", value: 2 },
] as const;

export function MetricsSection() {
  return (
    <section className="section-pad border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="text-4xl font-semibold text-gold sm:text-5xl">
                  <Counter value={m.value} />
                </p>
                <p className="mt-3 text-sm text-muted">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
