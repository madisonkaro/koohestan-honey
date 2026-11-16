"use client";

import { useEffect, useState } from "react";
import { useLang } from "../lib/lang";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 mix-blend-difference md:h-20 md:px-10">
        <a
          href="#top"
          className="flex items-baseline gap-2 text-cream"
          aria-label="Koohestan Honey — back to top"
        >
          <span
            className={`font-serif text-xl tracking-wide md:text-2xl ${
              lang === "fa" ? "font-fa" : ""
            }`}
          >
            {t.nav.brand}
          </span>
          {t.nav.brandSuffix ? (
            <span className="smallcaps font-sans text-[10px] text-gold md:text-xs">
              {t.nav.brandSuffix}
            </span>
          ) : null}
        </a>

        <nav className="flex items-center gap-5 md:gap-8" aria-label="Main">
          <a
            href="#collection"
            className={`text-sm text-cream/80 transition-colors duration-300 hover:text-gold ${
              lang === "fa" ? "font-fa" : ""
            }`}
          >
            {t.nav.collection}
          </a>

          <div
            className="flex items-center gap-2 text-sm"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`transition-colors duration-300 ${
                lang === "en" ? "text-gold" : "text-cream/60 hover:text-cream"
              }`}
            >
              {t.nav.toggleEn}
            </button>
            <span className="h-4 w-px bg-gold/60" aria-hidden="true" />
            <button
              type="button"
              onClick={() => setLang("fa")}
              aria-pressed={lang === "fa"}
              className={`transition-colors duration-300 ${
                lang === "fa" ? "text-gold" : "text-cream/60 hover:text-cream"
              }`}
            >
              {t.nav.toggleFa}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
