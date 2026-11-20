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
        "relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-[7rem] pb-12 overflow-hidden text-foreground bg-background",
        className
      )}
    >
      {/* Background Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[600px] bg-gradient-to-b from-foreground/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="mx-auto w-[var(--container)] relative z-10 pt-4">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EXPO }}
          className="inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-full border border-border/60 bg-muted/40 text-xs font-mono uppercase tracking-[0.15em] text-foreground/80 backdrop-blur-md"
        >
          <span className="flex items-center gap-1.5 text-emerald-400">
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

      {/* Main Center Content Grid */}
      <div className="mx-auto w-[var(--container)] relative z-10 my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Headlines */}
        <div className="lg:col-span-7">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/50 mb-3"
          >
            {t.hero.subheading}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EXPO, delay: 0.2 }}
            className="text-[length:max(3.5rem,7.5vw)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.85] mb-6"
          >
            {t.hero.h1Line1} <br />
            <span className="text-foreground/50">{t.hero.h1Line2}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[length:var(--text-h3)] font-light uppercase tracking-widest text-primary/90 mb-4 font-mono"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[length:var(--text-body-lg)] text-foreground/70 max-w-xl leading-relaxed mb-8"
          >
            {t.hero.description}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#customizer"
              className="btn-link inline-flex items-center gap-2.5 px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all font-semibold shadow-xl"
            >
              <Sparkles className="size-4" />
              <span>{t.hero.createStyleBtn}</span>
              <ArrowRight className="size-4" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-4 border border-border/80 text-foreground font-mono text-xs uppercase tracking-widest hover:bg-muted transition-all"
            >
              <span>{t.hero.explorePortfolioBtn}</span>
            </a>

            <a
              href="https://wa.me/41790000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-4 border border-emerald-600/40 text-emerald-400 font-mono text-xs uppercase tracking-widest hover:bg-emerald-950/40 transition-all"
            >
              <MessageCircle className="size-4" />
              <span className="hidden sm:inline">{t.hero.whatsappBtn}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Model Anchor Area */}
        <div className="lg:col-span-5 relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center pointer-events-none">
          <div
            data-model-anchor
            aria-hidden="true"
            className="size-full max-w-[500px] max-h-[500px]"
          />
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
