import { Reveal } from "@/components/Reveal";

export function FounderSection() {
  return (
    <section className="section-pad bg-rich-black">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 via-navy to-rich-black">
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-xs tracking-widest text-gold/80">FOUNDER & CEO</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-light text-gold/20">G</span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs tracking-[0.3em] text-gold">LEADERSHIP</p>
            <h2 className="heading-section mt-4">Building for the long arc</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Goldspire started from a straightforward view: the best companies come from hard problems
              and disciplined execution. We are not a single product — we build and hold multiple
              ventures, each with its own team and market.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Trust, finance, mobility, and the platforms that sit on top of them are where we spend
              most of our time — in Africa, Europe, and markets beyond.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="mt-8 border-l-2 border-gold/50 pl-6 text-soft italic">
              &ldquo;We would rather build one thing properly than ten things loudly.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
