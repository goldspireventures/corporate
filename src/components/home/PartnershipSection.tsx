import { Reveal } from "@/components/Reveal";
import {
  STUDIO_CONTACT_EMAIL,
  STUDIO_CONTACT_URL,
  STUDIO_SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/company";

const PARTNER_TYPES = [
  "Investors",
  "Design partners",
  "Enterprise pilots",
  "Governments",
  "Strategic alliances",
] as const;

const STUDIO_OFFERS = [
  "Fixed-scope web & mobile products",
  "Template catalog — dating, booking, and more",
  "Client-owned repos at handover",
  "Written delivery checkpoints and a private project hub when scoped",
] as const;

export function PartnershipSection() {
  return (
    <section className="section-pad border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="glass-panel overflow-hidden rounded-2xl border-gold/20 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="text-left">
                <p className="text-xs tracking-[0.3em] text-gold">GOLDSPIRE STUDIO</p>
                <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                  Ship a credible product — without open-ended agency drift
                </h2>
                <p className="mt-4 text-muted leading-relaxed">
                  Goldspire Studio is our product design and engineering division. Founders and operators
                  come to us when they need something real in market: a branded app from a proven template,
                  a scoped custom build, or a fixed-price path with clear checkpoints and code they keep.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-soft">
                  {STUDIO_OFFERS.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={STUDIO_SITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-rich-black hover:bg-[#e8c75a] transition-colors"
                  >
                    Explore Goldspire Studio
                  </a>
                  <a
                    href={`${STUDIO_SITE_URL}/templates`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-7 py-3.5 text-sm text-white hover:border-gold/40 hover:text-gold transition-colors"
                  >
                    View templates
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-white/8 bg-rich-black/40">
                <img
                  src="/images/portfolio/studio-preview.png"
                  alt="Goldspire Studio marketing site preview"
                  className="aspect-[16/9] w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-xs text-muted">
                  Live at{" "}
                  <a href={STUDIO_SITE_URL} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                    goldspire.dev
                  </a>
                  {" · "}
                  <a href={`mailto:${STUDIO_CONTACT_EMAIL}`} className="text-gold hover:underline">
                    {STUDIO_CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 max-w-4xl text-center">
          <Reveal delay={0.06}>
            <p className="text-xs tracking-[0.3em] text-gold">VENTURE PARTNERSHIP</p>
            <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
              Build the next company with us
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We also work with investors, enterprises, and public bodies on co-investment, pilots, and
              alignment with companies in the portfolio. If you are thinking in years rather than quarters,
              we should talk.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
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

          <Reveal delay={0.14}>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Partnership%20inquiry`}
              className="mt-10 inline-flex rounded-full border border-gold/40 px-8 py-4 text-sm font-medium text-gold hover:bg-gold/10 transition-colors"
            >
              Start a conversation
            </a>
            <p className="mt-4 text-xs text-muted">
              For Studio enquiries, use{" "}
              <a href={STUDIO_CONTACT_URL} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                {STUDIO_CONTACT_URL.replace("https://", "")}
              </a>
              {" "}or{" "}
              <a href={`mailto:${STUDIO_CONTACT_EMAIL}`} className="text-gold hover:underline">
                {STUDIO_CONTACT_EMAIL}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
