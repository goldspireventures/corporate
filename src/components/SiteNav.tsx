import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { GoldspireLogo } from "@/components/GoldspireLogo";
import { SUPPORT_EMAIL } from "@/lib/company";

const NAV = [
  { href: "/philosophy", label: "Philosophy" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/industries", label: "Industries" },
  { href: "/vision", label: "Vision 2035" },
  { href: "/partner", label: "Partner" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [path] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const linkClass = (href: string) =>
    `text-sm transition-colors ${path === href ? "text-gold" : "text-muted hover:text-gold"}`;

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 isolate transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "is-scrolled border-b border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : "border-b border-white/5"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group inline-flex shrink-0 items-center">
          <GoldspireLogo height={40} className="opacity-95 group-hover:opacity-100 transition-opacity" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="rounded-full border border-gold/40 px-4 py-2 text-sm text-gold hover:bg-gold/10 transition-colors"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-sm text-muted"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-rich-black/95 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-6">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              ))}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-gold">
                {SUPPORT_EMAIL}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
