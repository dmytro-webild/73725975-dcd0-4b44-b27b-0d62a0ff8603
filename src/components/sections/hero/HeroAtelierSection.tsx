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
        "relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-[6.5rem] lg:pt-[7.5rem] pb-10 overflow-hidden text-foreground bg-background",
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
            {/* Photorealistic vehicle backdrop image */}
            <img
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200"
              alt="JD Car Wrapping Atelier Luxury Vehicle"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-xl opacity-85 transition-opacity duration-500 group-hover:opacity-95"
            />

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
