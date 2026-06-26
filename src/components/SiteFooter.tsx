import { Link } from "wouter";
import { PORTFOLIO_COMPANIES } from "@/data/portfolio";
import { LEGAL_FOOTER_LINE } from "@/lib/company";
import { GoldspireLogo } from "@/components/GoldspireLogo";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl section-pad !py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <GoldspireLogo height={56} asset="site" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              A holding company and venture studio. We build and back product businesses across
              Europe and Africa.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-soft/70">Portfolio</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <Link href="/portfolio" className="hover:text-gold transition-colors">
                  All companies
                </Link>
              </li>
              {PORTFOLIO_COMPANIES.slice(0, 4).map((c) => (
                <li key={c.slug}>
                  <Link href={`/companies/${c.slug}`} className="hover:text-gold transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-soft/70">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <Link href="/philosophy" className="hover:text-gold transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-gold transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-gold transition-colors">
                  Vision 2035
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-gold transition-colors">
                  Partner
                </Link>
              </li>
              <li>
                <a href="mailto:support@goldspireventures.com" className="hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-white/5 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{LEGAL_FOOTER_LINE}</p>
          <p className="text-soft/60">Holding company · Dublin</p>
        </div>
      </div>
    </footer>
  );
}
