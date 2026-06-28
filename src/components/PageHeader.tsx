import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHeader({
  label,
  title,
  description,
  documentTitle,
}: {
  label: string;
  title: string;
  description?: string;
  /** Browser tab title — defaults to `${title} · Goldspire Ventures`. */
  documentTitle?: string;
}) {
  useEffect(() => {
    const full = documentTitle ?? `${title} · Goldspire Ventures`;
    const prev = document.title;
    document.title = full;
    return () => {
      document.title = prev;
    };
  }, [documentTitle, title]);

  return (
    <section className="border-b border-white/5 pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-gold">{label}</p>
          <h1 className="heading-section mt-4 max-w-4xl">{title}</h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
