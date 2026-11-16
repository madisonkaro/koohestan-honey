"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "../lib/lang";

/**
 * Scroll-synced hero video.
 *
 * VIDEO SWAP NOTE: the hero file is a placeholder. Madison is directing a new
 * bee-journey version that will replace these files at the SAME paths, so no
 * code change is needed when the new video lands:
 *   - /hero-scrub.mp4  (keyframe-per-frame, used for scroll scrubbing)
 *   - /hero-poster.webp  (poster frame)
 */
const VIDEO_SRC = "/hero-scrub.mp4";
const POSTER_SRC = "/hero-poster.webp";

/** Scroll-progress ranges (fractions of the whole hero) for each overlay. */
const OVERLAY_RANGES: [number, number][] = [
  [0.15, 0.25],
  [0.35, 0.45],
  [0.6, 0.7],
  [0.85, 1.0],
];

function rangeOpacity(p: number, [a, b]: [number, number]): number {
  const fade = 0.04; // fade in/out over 4% of the total scroll
  if (p < a || p > b) return 0;
  return Math.min((p - a) / fade, (b - p) / fade, 1);
}

export default function HeroVideo() {
  const { lang, t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hintRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // iOS Safari: explicit load() so the video is ready to seek.
    video.load();

    let duration = 0;
    const onMeta = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
    };
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) onMeta();

    const applyOverlays = (p: number) => {
      overlayRefs.current.forEach((el, i) => {
        if (!el) return;
        const o = rangeOpacity(p, OVERLAY_RANGES[i]);
        el.style.opacity = String(o);
        el.style.visibility = o > 0.01 ? "visible" : "hidden";
      });
      const hint = hintRef.current;
      if (hint) {
        const o = p < 0.06 ? 1 - p / 0.06 : 0;
        hint.style.opacity = String(Math.max(0, o));
        hint.style.visibility = o > 0.01 ? "visible" : "hidden";
      }
    };

    let ctx: gsap.Context | null = null;

    if (reduced) {
      // No scrubbing: show the final brand headline over the poster frame.
      applyOverlays(0.92);
    } else {
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: (self) => {
            const p = self.progress;
            // Seek only while paused (guide ch.5) and only once metadata is in.
            if (duration > 0 && video.readyState >= 1) {
              const target = p * duration;
              if (Math.abs(video.currentTime - target) > 0.03) {
                try {
                  video.currentTime = target;
                } catch {
                  /* seek not ready yet — next scroll tick retries */
                }
              }
            }
            applyOverlays(p);
          },
        });
      }, section);

      if (document.fonts) {
        document.fonts.ready
          .then(() => ScrollTrigger.refresh())
          .catch(() => {});
      }
    }

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[450vh] bg-black"
      aria-label="Koohestan Honey film"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          muted
          playsInline
          preload="auto"
          aria-label="Cinematic film: honey dripping from a dipper into a jar"
        />
        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Bottom fade into the next section */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"
          aria-hidden="true"
        />

        {/* Overlay headlines — stable keys, never remounted on language switch;
            only their text content swaps. */}
        {t.hero.overlays.map((o, i) => (
          <div
            key={`overlay-${i}`}
            ref={(el) => {
              overlayRefs.current[i] = el;
            }}
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0"
            style={{ visibility: "hidden" }}
          >
            <h2
              className={`font-serif text-4xl leading-tight text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] md:text-6xl ${
                lang === "fa" ? "font-fa" : ""
              }`}
            >
              {o.headline}
            </h2>
            <p
              className={`mt-4 max-w-xl text-base text-cream/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-lg ${
                lang === "fa" ? "font-fa" : ""
              }`}
            >
              {o.sub}
            </p>
          </div>
        ))}

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-2"
        >
          <span
            className={`smallcaps text-[11px] text-cream/70 ${
              lang === "fa" ? "font-fa" : ""
            }`}
          >
            {t.hero.scrollHint}
          </span>
          <span
            className="block h-10 w-px animate-pulse bg-gold/80"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
