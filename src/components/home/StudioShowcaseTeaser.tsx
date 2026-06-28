import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import { STUDIO_CONTACT_EMAIL, STUDIO_SITE_URL } from "@/lib/company";

/** Homepage — visual tease only; full Studio pitch lives on /partner. */
export function StudioShowcaseTeaser() {
  return (
    <section className="section-pad border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-xl border border-white/8 bg-rich-black/40 order-2 lg:order-1">
              <img
                  src="/images/portfolio/studio-preview.svg"
                alt="Goldspire Studio — product design and engineering"
                className="aspect-[16/9] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs tracking-[0.3em] text-gold">GOLDSPIRE STUDIO</p>
              <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                Fixed-scope products, built to ship
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Our design and engineering division turns proven templates into branded apps — with
                clear checkpoints and code you keep. A taste of what is on the shelf; the full picture
                is on the Studio site.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={STUDIO_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-rich-black hover:bg-[#e8c75a] transition-colors"
                >
                  goldspire.dev
                </a>
                <Link
                  href="/partner"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-sm text-white hover:border-gold/40 hover:text-gold transition-colors"
                >
                  Partnership & Studio →
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">
                Studio enquiries:{" "}
                <a href={`mailto:${STUDIO_CONTACT_EMAIL}`} className="text-gold hover:underline">
                  {STUDIO_CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
