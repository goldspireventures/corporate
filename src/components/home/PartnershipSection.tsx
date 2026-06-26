import { Reveal } from "@/components/Reveal";

const PARTNER_TYPES = [
  "Investors",
  "Design partners",
  "Enterprise pilots",
  "Governments",
  "Strategic alliances",
] as const;

export function PartnershipSection() {
  return (
    <section className="section-pad bg-rich-black border-t border-white/5">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-gold">PARTNER</p>
          <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">Build the next company with us</h2>
          <p className="mt-4 text-muted leading-relaxed">
            We work with capital partners, enterprises, and institutions who think in decades — not
            quarters. If you are exploring co-investment, pilots, or strategic alignment across our
            portfolio, start here.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {PARTNER_TYPES.map((type) => (
              <span
                key={type}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-soft"
              >
                {type}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <a
            href="mailto:support@goldspireventures.com?subject=Partnership%20inquiry"
            className="mt-10 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-medium text-rich-black hover:bg-[#e8c75a] transition-colors"
          >
            Start a conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
