import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import {
  CORPORATE_DOMAIN,
  LEGAL_ENTITY_JURISDICTION,
  LEGAL_ENTITY_NAME,
  STUDIO_SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/company";

export function TermsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl section-pad">
        <Link href="/" className="text-sm text-muted hover:text-gold">
          ← Home
        </Link>
        <Reveal>
          <h1 className="heading-section mt-8">Terms of use</h1>
          <p className="mt-6 text-muted leading-relaxed">
            {LEGAL_ENTITY_NAME} (&ldquo;Goldspire&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates{" "}
            {CORPORATE_DOMAIN}. This site orients you to our holding company and portfolio — it is not an
            offer to invest, partner, or contract unless agreed in writing.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 text-lg font-semibold text-gold">Portfolio & links</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            We link to ventures and divisions we operate or hold. Each product (for example Veil or Goldspire
            Studio at{" "}
            <a href={STUDIO_SITE_URL} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
              goldspire.dev
            </a>
            ) has its own terms where you use that product or service.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="mt-10 text-lg font-semibold text-gold">Acceptable use</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Do not attempt to disrupt this site, scrape it in ways that impair service, or submit unlawful
            content through our contact channels.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="mt-10 text-lg font-semibold text-gold">Liability</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            This site is provided &ldquo;as is&rdquo; without warranties. To the extent permitted by law, our
            liability for use of this site is limited.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <h2 className="mt-10 text-lg font-semibold text-gold">Contact</h2>
          <p className="mt-3 text-sm text-muted">
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-gold hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p className="mt-8 text-xs text-soft/50">
            Last updated June 2026 · {LEGAL_ENTITY_NAME}, {LEGAL_ENTITY_JURISDICTION}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
