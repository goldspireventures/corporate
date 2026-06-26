import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import { CORPORATE_DOMAIN, LEGAL_ENTITY_JURISDICTION, LEGAL_ENTITY_NAME, SUPPORT_EMAIL } from "@/lib/company";

export function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl section-pad">
        <Link href="/" className="text-sm text-muted hover:text-gold">
          ← Home
        </Link>
        <Reveal>
          <h1 className="heading-section mt-8">Privacy Policy</h1>
          <p className="mt-6 text-muted leading-relaxed">
            Goldspire Ventures Ltd (&ldquo;Goldspire&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
            privacy. This policy describes how we handle information when you visit {CORPORATE_DOMAIN} or
            contact us.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 text-lg font-semibold text-gold">Information we collect</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            We may collect basic analytics data (pages visited, browser type, approximate location) and any
            information you voluntarily provide via email to {SUPPORT_EMAIL}.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="mt-10 text-lg font-semibold text-gold">How we use it</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            To respond to enquiries, improve our corporate website, and communicate regarding partnership or
            investment opportunities. We do not sell personal data.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
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
