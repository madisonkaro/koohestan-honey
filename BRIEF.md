# KOOHESTAN HONEY — Build Brief

Demo site to win a honey seller as a client. Fictional brand (no real client yet).
Adapted from the Golestan Tea build guide (`~/workspace/user/files/golestan-guide-v2.pdf`).
Quality bar: flawless — full QA before showing Madison. Not like Karo.

## Brand
- Name: «عسل کوهستان» / **KOOHESTAN HONEY**
- Tagline: "Pour. Wait. Breathe." → honey version: «بچکان. صبر کن. نفس بکش.»
- Story: a bee flies to mountain fields, feeds on the best flowers, brings the nectar home, makes honey — that honey is our product.

## Design system (from the guide, adapted to honey)
- bg pure black #000000 · deep amber #8A5A00 → #4A2C00 · highlight antique gold #C9A961 · text off-white #F5F1E8
- Headlines: Cormorant Garamond (300/400) · Body: Inter (300/400) · Persian: Vazirmatn
- smallcaps utility: uppercase + 0.35em tracking
- Custom gold-dot cursor with lerp · film grain overlay (~4%) · vignette on hero · inset gallery frame with corner brackets · transitions ease-out 0.6s–1.2s

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger (scroll-synced hero video) · Framer Motion (micro-interactions). Deploy: GitHub (madisonkaro) + Vercel.

## Structure
- Fixed Navbar (mix-blend-difference text, transparent → blur on scroll) + EN/FA LangToggle
- HERO scroll-synced video (400–500vh tall, sticky video, GSAP scrub maps scroll → video.currentTime, overlay headlines fade in/out at 15–25, 35–45, 60–70, 85–100% scroll)
- PRODUCTS "THE COLLECTION" (3 cards, hover: scale 1.02, gold border glow, floating ingredient chip with frosted glass)
- Footer (logo, gold divider, © mark, IG/X icons)

## Products (demo prices, Toman/kg)
1. عسل کوهستان — Mountain Honey — ۱٬۴۸۰٬۰۰۰ تومان
2. عسل آویشن — Thyme Honey — ۱٬۲۸۰٬۰۰۰ تومان
3. عسل گون — Astragalus Honey — ۹۸۰٬۰۰۰ تومان

## Assets
- `assets/hero-bright.mp4` (18.8s, 8.2 MB, brightened) — main hero video
- `assets/hero-scrub.mp4` (18.8s, 16 MB, keyframe-per-frame) — scroll-scrub version
- `assets/hero-poster.jpg` — poster frame
- `assets/media-generation-scene*.mp4` — 5 source clips (v1, superseded by bee scenario)
- Product shots: generate 3 transparent PNGs (mountain / thyme / astragalus honey jars) — not yet made
- NOTE: hero video is being remade with a bee-journey scenario (Madison's direction 2026-11-16). Check with her answers before finalizing the hero. v1 clips are a fallback.

## Bilingual (EN · FA)
- EN/FA toggle in Navbar; only text content swaps (layout, scroll, motion stay)
- Vazirmatn for Persian; RTL via `dir="rtl"` on FA; persist choice in localStorage
- Use `key={headline}` (not index) in maps so ScrollTrigger doesn't remount on language switch

## Performance (from the guide, ch. 9 risks)
- Hero video < 25 MB; mobile 720p version if needed; poster prevents layout shift
- iOS Safari: playsInline + muted + preload="auto" + explicit video.load(), seek only when paused
- Lazy-load Products; next/image for product photos
- If LCP > 4s, serve video only on desktop via media query

## QA checklist (flawless bar)
- [ ] All links work (no href="#")
- [ ] EN/FA toggle swaps every string, layout intact in both
- [ ] Scroll scrub smooth on desktop Chrome + mobile Safari (real phone test)
- [ ] Video plays muted inline on iOS/Android, poster shows before play
- [ ] No console errors; Lighthouse mobile performance checked
- [ ] Products, prices, footer, navbar all render; no placeholder text left

## Skills installed for this build (2026-11-16)
gsap-scrolltrigger, gsap-core, gsap-timeline, gsap-react, gsap-performance, ui-ux-pro-max, design-system, taste-skill, i18n-next-intl-paraglide, locale-routing-subdomain-subdirectory, internationalization, deploy-to-vercel, vercel-react-best-practices, ffmpeg-skill (already present). Read the relevant SKILL.md files before building.
