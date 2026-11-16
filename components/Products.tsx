"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "../lib/lang";

export default function Products() {
  const { lang, t } = useLang();

  return (
    <section
      id="collection"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-10 md:py-36"
      aria-labelledby="collection-title"
    >
      <div className="mb-14 text-center md:mb-20">
        <p className="smallcaps text-xs text-gold">{t.products.kicker}</p>
        <h2
          id="collection-title"
          className={`mt-4 font-serif text-4xl leading-tight text-cream md:text-6xl ${
            lang === "fa" ? "font-fa" : ""
          }`}
        >
          {t.products.title}
        </h2>
        <p
          className={`mx-auto mt-4 max-w-xl text-base text-cream/70 ${
            lang === "fa" ? "font-fa" : ""
          }`}
        >
          {t.products.sub}
        </p>
      </div>

      {/* Inset gallery frame with corner brackets */}
      <div className="relative">
        <span
          className="pointer-events-none absolute -left-2 -top-2 h-8 w-8 border-l-2 border-t-2 border-gold/70 md:-left-4 md:-top-4"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -right-2 -top-2 h-8 w-8 border-r-2 border-t-2 border-gold/70 md:-right-4 md:-top-4"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 border-gold/70 md:-bottom-4 md:-left-4"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-gold/70 md:-bottom-4 md:-right-4"
          aria-hidden="true"
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {t.items.map((item) => (
            <motion.article
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-sm border border-white/10 bg-white/[0.02] transition-[border-color,box-shadow] duration-700 ease-out hover:border-gold/60 hover:shadow-[0_0_50px_rgba(201,169,97,0.22)]"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span
                  className={`absolute start-4 top-4 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-xs text-cream backdrop-blur-md ${
                    lang === "fa" ? "font-fa" : ""
                  }`}
                >
                  {item.chip}
                </span>
              </div>

              <div className="p-6">
                <h3
                  className={`font-serif text-2xl text-cream ${
                    lang === "fa" ? "font-fa" : ""
                  }`}
                >
                  {item.name}
                </h3>
                <p
                  className={`mt-2 min-h-[3.5rem] text-sm leading-relaxed text-cream/70 ${
                    lang === "fa" ? "font-fa" : ""
                  }`}
                >
                  {item.desc}
                </p>
                <div className="mt-5 flex items-baseline justify-between border-t border-white/10 pt-4">
                  <span
                    className={`font-serif text-xl text-gold ${
                      lang === "fa" ? "font-fa" : ""
                    }`}
                  >
                    {item.price}
                  </span>
                  <span
                    className={`text-xs text-cream/50 ${
                      lang === "fa" ? "font-fa" : ""
                    }`}
                  >
                    {item.perKg}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
