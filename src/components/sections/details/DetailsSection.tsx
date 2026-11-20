import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ShieldCheck, Sparkles, Sliders, CheckCircle2, ArrowRight, Layers, Eye, Award } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";
import Media, { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const CLOSEUP_PHOTOS = [
  {
    id: "detail-1",
    title: "Knifeless Tape & Edge Precision",
    category: "Attention to Detail",
    image: "https://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342620.jpg?_wi=2",
    caption: "Micro-precision film tucking around fender emblems without blade contact on original paint."
  },
  {
    id: "detail-2",
    title: "Cleanroom Thermal Curing",
    category: "Professional Installation",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    caption: "Applied under dust-filtered, climate-regulated 22°C studio conditions for optimal film bonding."
  },
  {
    id: "detail-3",
    title: "Satin Sheen & Reflection Control",
    category: "Quality Materials",
    image: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795174512849-7i3po9ed.avif",
    caption: "Multi-layered cast vinyl diffusing ambient studio lighting seamlessly across vehicle contours."
  },
  {
    id: "detail-4",
    title: "Blackout Trim & Emblem Refinement",
    category: "Individual Customization",
    image: "https://images.pexels.com/photos/257988/pexels-photo-257988.jpeg?auto=compress&w=1200",
    caption: "De-badging, custom satin accents, and high-gloss piano black chrome delete execution."
  }
];

export default function DetailsSection() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [activePhoto, setActivePhoto] = useState(CLOSEUP_PHOTOS[0]);

  const pillars = [
    {
      icon: Eye,
      title: t.details.pillars.detail.title,
      description: t.details.pillars.detail.desc,
      tag: "01 / PRECIS"
    },
    {
      icon: ShieldCheck,
      title: t.details.pillars.installation.title,
      description: t.details.pillars.installation.desc,
      tag: "02 / CLEANROOM"
    },
    {
      icon: Sliders,
      title: t.details.pillars.customization.title,
      description: t.details.pillars.customization.desc,
      tag: "03 / BESPOKE"
    },
    {
      icon: Layers,
      title: t.details.pillars.materials.title,
      description: t.details.pillars.materials.desc,
      tag: "04 / PREMIUM"
    },
    {
      icon: Award,
      title: t.details.pillars.service.title,
      description: t.details.pillars.service.desc,
      tag: "05 / DEDICATED"
    }
  ];

  return (
    <section id="details" className="relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40">
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Sparkles className="size-3.5 text-primary" />
              <span>{t.details.badge}</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              {t.details.titleLine1} <br />
              <span className="text-foreground/50">{t.details.titleLine2}</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/70 max-w-md leading-relaxed font-mono text-xs uppercase tracking-wide">
            {t.details.subtitle}
          </p>
        </div>

        {/* Top Feature Grid - 5 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 border border-border/60 bg-card/60 backdrop-blur-sm flex flex-col justify-between hover:border-foreground/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-10 rounded-none bg-muted/60 border border-border/60 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold uppercase tracking-wide [font-family:var(--font-heading)] mb-2 text-foreground">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-foreground/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-border/30 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-foreground/50 group-hover:text-foreground transition-colors">
                  <CheckCircle2 className="size-3 text-emerald-400" />
                  <span>Precision Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Installation Photography & Close-Up Showcase */}
        <div className="border border-border/60 bg-card/80 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border/40">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary/80 block mb-1">
                {t.details.galleryBadge}
              </span>
              <h3 className="text-[length:var(--text-h2)] font-light uppercase tracking-tight [font-family:var(--font-heading)]">
                {t.details.galleryTitle}
              </h3>
            </div>
            <p className="text-xs font-mono text-foreground/60 max-w-sm">
              {t.details.gallerySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Featured Close-Up Large Photo Display */}
            <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden border border-border/60 bg-black group">
              <MotionMedia
                key={activePhoto.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={activePhoto.image}
                alt={activePhoto.title}
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 backdrop-blur-md bg-background/80 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                    {activePhoto.category}
                  </span>
                  <h4 className="text-lg font-light uppercase [font-family:var(--font-heading)] text-foreground">
                    {activePhoto.title}
                  </h4>
                  <p className="text-xs text-foreground/70 font-mono mt-1">
                    {activePhoto.caption}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all shrink-0 inline-flex items-center gap-2"
                >
                  <span>{t.details.inquireCta}</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="lg:col-span-4 space-y-3">
              {CLOSEUP_PHOTOS.map((photo) => {
                const isSelected = activePhoto.id === photo.id;
                return (
                  <button
                    key={photo.id}
                    onClick={() => setActivePhoto(photo)}
                    className={cn(
                      "w-full p-3.5 flex items-center gap-4 text-left border transition-all duration-300 cursor-pointer group",
                      isSelected
                        ? "bg-muted/80 border-foreground shadow-lg"
                        : "bg-card/40 border-border/40 hover:bg-muted/30 hover:border-border/80"
                    )}
                  >
                    <div className="size-16 shrink-0 relative overflow-hidden border border-border/40">
                      <Media src={photo.image} alt={photo.title} className="size-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className={cn(
                        "text-[9px] font-mono uppercase tracking-widest block mb-0.5",
                        isSelected ? "text-emerald-400 font-semibold" : "text-foreground/50"
                      )}>
                        {photo.category}
                      </span>
                      <h5 className="text-xs font-mono uppercase tracking-wider text-foreground truncate">
                        {photo.title}
                      </h5>
                      <span className="text-[10px] text-foreground/50 block truncate font-mono">
                        {photo.caption}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 p-8 border border-border/60 bg-card/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-light uppercase tracking-tight [font-family:var(--font-heading)]">
              {t.details.bottomCtaTitle}
            </h4>
            <p className="text-xs font-mono text-foreground/60 mt-1">
              {t.details.bottomCtaSubtitle}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-semibold hover:bg-foreground/90 transition-all inline-flex items-center gap-2"
            >
              <span>{t.details.bottomCtaBtn}</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
