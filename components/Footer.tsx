"use client";

import { useLang } from "../lib/lang";

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-12 text-center md:px-10">
        <p
          className={`font-serif text-2xl tracking-wide text-cream ${
            lang === "fa" ? "font-fa" : ""
          }`}
        >
          {lang === "fa" ? "عسل کوهستان" : "KOOHESTAN HONEY"}
        </p>
        <p
          className={`text-sm text-cream/60 ${
            lang === "fa" ? "font-fa" : ""
          }`}
        >
          {t.footer.tagline}
        </p>

        <div className="h-px w-24 bg-gold/70" aria-hidden="true" />

        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.instagram}
            className="text-cream/70 transition-colors duration-300 hover:text-gold"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.x}
            className="text-cream/70 transition-colors duration-300 hover:text-gold"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        <p
          className={`text-xs text-cream/40 ${
            lang === "fa" ? "font-fa" : ""
          }`}
        >
          {t.footer.rights}
        </p>

        <a
          href="#top"
          className={`smallcaps text-[11px] text-cream/60 transition-colors duration-300 hover:text-gold ${
            lang === "fa" ? "font-fa" : ""
          }`}
        >
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
