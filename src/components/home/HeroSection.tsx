import { Link } from "wouter";
import { motion } from "framer-motion";
import { ParticleField } from "@/components/ParticleField";
import { fadeUp, stagger } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <ParticleField />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        <motion.div initial="hidden" animate="visible" variants={stagger(0.12)} className="max-w-4xl">
          <motion.h1 variants={fadeUp} className="heading-display">
            We build companies that solve{" "}
            <span className="gold-gradient-text">infrastructure-scale</span> problems.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Goldspire Ventures is a holding company and venture studio — originating, backing, and scaling
            product businesses from Dublin across Europe and Africa. Our portfolio is the proof; our
            partners help us go further.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-rich-black hover:bg-[#e8c75a] transition-colors"
            >
              View portfolio
            </Link>
            <Link
              href="/partner"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm text-white hover:border-gold/40 hover:text-gold transition-colors"
            >
              Partner with us
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
