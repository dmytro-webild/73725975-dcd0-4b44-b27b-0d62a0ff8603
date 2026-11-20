import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck, MapPin } from "lucide-react";
import { modelChapter, type ModelChapter } from "@/components/kit/modelPose";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export interface HeroAtelierSectionProps {
  modelPose?: ModelChapter;
  media?: "model" | "image";
  className?: string;
}

const EXPO = [0.19, 1, 0.22, 1] as const;

export default function HeroAtelierSection({
  modelPose = {},
  media = "model",
  className,
}: HeroAtelierSectionProps) {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      {...modelChapter(media === "model" ? modelPose : undefined)}
      aria-label="Hero"
      className={cn(
        "relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-[6rem] lg:pt-[7rem] pb-8 overflow-x-clip text-foreground bg-background",
        className
      )}
    >
      {/* Background Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[600px] bg-gradient-to-b from-foreground/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="mx-auto w-[var(--container)] relative z-10 pt-2 pb-4">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EXPO }}
          className="inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-full border border-border/60 bg-muted/40 text-xs font-mono uppercase tracking-[0.15em] text-foreground/80 backdrop-blur-md"
        >
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            {t.hero.locationBadge}
          </span>
          <span className="text-foreground/30">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-primary" />
            {t.hero.appointmentBadge}
          </span>
        </motion.div>
      </div>

      {/* Main Center Content Grid: Strict 2-column layout (Left 55-60%, Right 35-40%) on desktop, vertical stack on mobile */}
      <div className="mx-auto w-[var(--container)] relative z-10 my-auto py-4 lg:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (55-60% width): Text hierarchy and accessible CTA buttons */}
        <div className="lg:col-span-7 relative z-20 flex flex-col justify-center">
          {/* Atelier Brand Title */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-primary/90 font-semibold mb-3 flex items-center gap-2"
          >
            <span className="inline-block w-6 h-px bg-primary/60" />
            {t.hero.subheading || "JD CAR WRAPPING ATELIER ZÜRICH"}
          </motion.p>

          {/* Slogan / Main Headline */}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EXPO, delay: 0.2 }}
            className="text-[length:max(3.25rem,5.5vw)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9] mb-4 text-foreground"
          >
            {t.hero.slogan || "REDEFINE YOUR DRIVE"}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[length:var(--text-h3)] font-mono uppercase tracking-[0.16em] text-foreground/90 font-medium mb-5"
          >
            {t.hero.tagline || "PRECISION. PROTECTION. PERSONALIZATION."}
          </motion.p>

          {/* German Business Description */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[length:var(--text-body-lg)] text-foreground/75 max-w-xl leading-relaxed mb-8"
          >
            {t.hero.description}
          </motion.p>

          {/* Call to Actions (Explore Services, Request a Quote, WhatsApp) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <Sparkles className="size-4" />
              <span>{t.hero.exploreServicesBtn || "Dienstleistungen erkunden"}</span>
              <ArrowRight className="size-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-border/80 bg-muted/30 text-foreground font-mono text-xs uppercase tracking-widest hover:bg-muted hover:border-foreground/40 transition-all rounded-lg font-semibold shadow-sm hover:-translate-y-0.5"
            >
              <span>{t.hero.requestQuoteBtn || "Angebot anfragen"}</span>
            </a>

            <a
              href="https://wa.me/41790000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 border border-emerald-600/40 bg-emerald-950/20 text-emerald-400 font-mono text-xs uppercase tracking-widest hover:bg-emerald-950/50 transition-all rounded-lg"
            >
              <MessageCircle className="size-4" />
              <span className="hidden sm:inline">{t.hero.whatsappBtn}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column (35-40% width): Photorealistic luxury vehicle contained strictly within its own space */}
        <div className="lg:col-span-5 relative z-10 w-full flex items-center justify-center">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] max-w-[540px] max-h-[360px] lg:max-h-[460px] rounded-2xl border border-border/40 bg-gradient-to-b from-muted/30 via-background/40 to-background/80 backdrop-blur-md p-3 overflow-hidden shadow-2xl group flex items-center justify-center">
            {/* Elegant JD Car Wrapping Luxury Atelier Emblem Logo */}
            <div className="absolute inset-0 size-full flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-zinc-950 via-neutral-900 to-black rounded-xl overflow-hidden group-hover:border-primary/50 transition-all duration-500 shadow-inner">
              {/* Radial backdrop glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              <svg
                viewBox="0 0 500 500"
                className="w-full h-full max-w-[320px] max-h-[320px] sm:max-w-[360px] sm:max-h-[360px] relative z-10 filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-105"
                aria-label="JD Car Wrapping Atelier Logo"
              >
                <defs>
                  <linearGradient id="jdGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="35%" stopColor="#eab308" />
                    <stop offset="70%" stopColor="#ca8a04" />
                    <stop offset="100%" stopColor="#854d0e" />
                  </linearGradient>

                  <linearGradient id="jdChromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#64748b" />
                  </linearGradient>

                  <linearGradient id="jdWrapFoilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.9" />
                  </linearGradient>

                  <radialGradient id="jdCenterGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#eab308" stopOpacity="0.2" />
                    <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>

                  <filter id="jdGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Central Soft Glow */}
                <circle cx="250" cy="250" r="210" fill="url(#jdCenterGlow)" />

                {/* Outer Concentric Precision Emblem Rings */}
                <circle cx="250" cy="250" r="225" fill="none" stroke="url(#jdChromeGrad)" strokeWidth="1.5" strokeOpacity="0.3" />
                <circle cx="250" cy="250" r="215" fill="none" stroke="url(#jdGoldGrad)" strokeWidth="2.5" strokeDasharray="8 6" strokeOpacity="0.75" />
                <circle cx="250" cy="250" r="202" fill="none" stroke="url(#jdChromeGrad)" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="250" cy="250" r="192" fill="none" stroke="url(#jdGoldGrad)" strokeWidth="0.75" strokeOpacity="0.3" />

                {/* Precision Dial Ticks */}
                <line x1="250" y1="26" x2="250" y2="40" stroke="url(#jdGoldGrad)" strokeWidth="3" strokeLinecap="round" />
                <line x1="250" y1="460" x2="250" y2="474" stroke="url(#jdGoldGrad)" strokeWidth="3" strokeLinecap="round" />
                <line x1="26" y1="250" x2="40" y2="250" stroke="url(#jdGoldGrad)" strokeWidth="3" strokeLinecap="round" />
                <line x1="460" y1="250" x2="474" y2="250" stroke="url(#jdGoldGrad)" strokeWidth="3" strokeLinecap="round" />

                {/* Diagonal Corner Marks */}
                <line x1="92" y1="92" x2="102" y2="102" stroke="url(#jdGoldGrad)" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="408" y1="92" x2="398" y2="102" stroke="url(#jdGoldGrad)" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="92" y1="408" x2="102" y2="398" stroke="url(#jdGoldGrad)" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="408" y1="408" x2="398" y2="398" stroke="url(#jdGoldGrad)" strokeWidth="2" strokeOpacity="0.6" />

                {/* --- CAR SILHOUETTE & WRAP EMBLEM GROUP --- */}
                <g transform="translate(0, -18)">
                  {/* Dynamic Vinyl Wrap Foil Arc (Wrapping Wave over the car) */}
                  <path
                    d="M 85 275 C 150 195, 260 200, 340 220 C 380 230, 415 242, 435 255"
                    fill="none"
                    stroke="url(#jdWrapFoilGrad)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    filter="url(#jdGlowFilter)"
                  />
                  <path
                    d="M 70 290 C 140 205, 255 210, 345 232 C 385 242, 420 255, 445 270"
                    fill="none"
                    stroke="url(#jdGoldGrad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />

                  {/* Supercar Profile Outline */}
                  <path
                    d="M 105 268 C 125 263, 145 252, 168 232 C 195 208, 235 178, 292 178 C 342 178, 368 198, 398 234 C 418 248, 438 255, 448 259 C 455 262, 458 270, 450 274 C 442 277, 422 279, 402 279 C 388 279, 378 268, 362 268 C 346 268, 336 279, 306 279 C 276 279, 266 268, 246 268 C 226 268, 216 279, 180 279 C 148 279, 128 276, 105 268 Z"
                    fill="url(#jdChromeGrad)"
                    fillOpacity="0.12"
                    stroke="url(#jdChromeGrad)"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />

                  {/* Windshield & Side Window Contour */}
                  <path
                    d="M 178 234 C 210 196, 275 186, 330 206 L 362 234 Z"
                    fill="url(#jdWrapFoilGrad)"
                    fillOpacity="0.25"
                    stroke="url(#jdGoldGrad)"
                    strokeWidth="1.5"
                  />

                  {/* Headlight & Taillight Glow Features */}
                  <path d="M 412 249 L 445 260" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" filter="url(#jdGlowFilter)" />
                  <path d="M 110 266 L 132 262" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" filter="url(#jdGlowFilter)" />

                  {/* Alloy Wheels & Brake Discs */}
                  <g>
                    <circle cx="372" cy="274" r="21" fill="#09090b" stroke="url(#jdGoldGrad)" strokeWidth="2.5" />
                    <circle cx="372" cy="274" r="13" fill="none" stroke="url(#jdChromeGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
                    <circle cx="372" cy="274" r="5" fill="url(#jdGoldGrad)" />
                  </g>
                  <g>
                    <circle cx="196" cy="274" r="21" fill="#09090b" stroke="url(#jdGoldGrad)" strokeWidth="2.5" />
                    <circle cx="196" cy="274" r="13" fill="none" stroke="url(#jdChromeGrad)" strokeWidth="1.5" strokeDasharray="4 3" />
                    <circle cx="196" cy="274" r="5" fill="url(#jdGoldGrad)" />
                  </g>
                </g>

                {/* --- CENTRAL MONOGRAM & TYPOGRAPHY --- */}
                <g transform="translate(250, 342)" textAnchor="middle">
                  <text
                    x="0"
                    y="0"
                    fill="url(#jdGoldGrad)"
                    fontSize="60"
                    fontWeight="900"
                    fontFamily="serif, system-ui"
                    letterSpacing="8"
                    filter="drop-shadow(0px 4px 12px rgba(0,0,0,0.95))"
                  >
                    JD
                  </text>

                  <line x1="-90" y1="16" x2="90" y2="16" stroke="url(#jdGoldGrad)" strokeWidth="1" strokeOpacity="0.6" />
                  <polygon points="0,13 4,16 0,19 -4,16" fill="url(#jdGoldGrad)" />

                  <text
                    x="0"
                    y="36"
                    fill="#ffffff"
                    fillOpacity="0.95"
                    fontSize="15"
                    fontWeight="800"
                    fontFamily="monospace"
                    letterSpacing="7"
                  >
                    CAR WRAPPING
                  </text>

                  <text
                    x="0"
                    y="52"
                    fill="url(#jdGoldGrad)"
                    fontSize="9.5"
                    fontWeight="600"
                    fontFamily="monospace"
                    letterSpacing="4"
                    opacity="0.85"
                  >
                    ZÜRICH • LUXURY ATELIER
                  </text>
                </g>
              </svg>
            </div>

            {/* Subtle dark gradient overlay to guarantee contrast & aesthetic fit */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/30 rounded-xl pointer-events-none" />

            {/* 3D Model Anchor Area for R3F Canvas positioning */}
            <div
              data-model-anchor
              aria-hidden="true"
              className="relative z-10 size-full max-w-full max-h-full flex items-center justify-center pointer-events-none"
            />

            {/* Atelier Specification Badge Overlay */}
            <div className="absolute bottom-3 left-3 z-20 px-3 py-1 rounded-full bg-background/80 border border-border/50 text-[10px] font-mono tracking-wider text-foreground/80 uppercase backdrop-blur-md flex items-center gap-1.5 pointer-events-none">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span>ATELIER SPEC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Badges */}
      <div className="mx-auto w-[var(--container)] relative z-10 pt-6 border-t border-border/40 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-foreground/60">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-foreground/80 shrink-0" />
          <span>{t.hero.badge1}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-foreground/80 shrink-0" />
          <span>{t.hero.badge2}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-foreground/80 shrink-0" />
          <span>{t.hero.badge3}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-foreground/80 shrink-0" />
          <span>{t.hero.badge4}</span>
        </div>
      </div>
    </section>
  );
}
