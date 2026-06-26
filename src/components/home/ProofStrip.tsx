import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import { countBuildingVentures, countLiveProducts, PORTFOLIO_COMPANIES } from "@/data/portfolio";

const STUDIO = PORTFOLIO_COMPANIES.find((c) => c.slug === "goldspire-studio")!;

const PROOF_ITEMS = [
  {
    label: "Livia",
    detail: "People Business OS",
    status: "Live",
    href: "https://livia-hq.com",
    external: true,
  },
  {
    label: "Veil",
    detail: "Browser security",
    status: "Live",
    href: "https://join-veil.goldspireventures.com",
    external: true,
  },
  {
    label: STUDIO.name,
    detail: "Studio division",
    status: "Live",
    href: STUDIO.externalUrl!,
    external: true,
  },
  {
    label: `${countBuildingVentures()} ventures`,
    detail: "In development",
    status: "Building",
    href: "/portfolio",
    external: false,
  },
] as const;

export function ProofStrip() {
  return (
    <section className="border-y border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-muted">
              <span className="text-gold font-medium">{countLiveProducts()} products live</span>
              {" · "}Goldspire Ventures Ltd · Dublin & global
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {PROOF_ITEMS.map((item) => {
                const inner = (
                  <>
                    <p className="text-xs uppercase tracking-widest text-gold/70">{item.status}</p>
                    <p className="mt-1 text-sm font-medium text-white">{item.label}</p>
                    <p className="text-xs text-muted">{item.detail}</p>
                  </>
                );

                if (item.external) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/6 px-4 py-3 transition-colors hover:border-gold/25"
                    >
                      {inner}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-lg border border-white/6 px-4 py-3 transition-colors hover:border-gold/25"
                  >
                    {inner}
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
