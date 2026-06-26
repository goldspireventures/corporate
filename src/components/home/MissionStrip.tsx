import { Reveal } from "@/components/Reveal";
import { LEGAL_ENTITY_NAME } from "@/lib/company";

export function MissionStrip() {
  return (
    <section className="border-y border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <Reveal>
          <p className="text-center font-display text-lg leading-relaxed text-soft sm:text-xl">
            We originate, back, and scale product businesses worldwide.
          </p>
          <p className="mt-3 text-center text-xs tracking-wide text-muted">
            {LEGAL_ENTITY_NAME} · Dublin
          </p>
        </Reveal>
      </div>
    </section>
  );
}
