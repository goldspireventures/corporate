import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";

export function PhilosophyBlurb() {
  return (
    <section className="section-pad !py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs tracking-[0.3em] text-gold">HOW WE BUILD</p>
            <p className="mt-6 font-display text-xl leading-relaxed text-soft sm:text-2xl">
              We identify infrastructure-scale problems, validate with real users, and spin out companies
              built to last — across Europe and Africa.
            </p>
            <Link
              href="/philosophy"
              className="mt-8 inline-block text-sm font-medium text-gold hover:underline"
            >
              Our philosophy →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
