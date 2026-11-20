import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Sun, Droplets, ArrowRight, Check } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export interface FinishSample {
  id: string;
  nameKey: string;
  type: string;
  image: string;
  hex: string;
  texturePattern: string;
  durability: string;
  maintenance: string;
  popularCars: string;
  featuresKey: string[];
}

export default function FindYourFinishSection() {
  const { t } = useLanguage();
  const [activeFinishId, setActiveFinishId] = useState<string>("satin");

  const finishDetails = t.finishesShowcase;

  const activeFinish = finishDetails.items.find((f) => f.id === activeFinishId) || finishDetails.items[0];

  return (
    <section id="finishes" className="relative py-[var(--section-space)] bg-card border-t border-border/40 overflow-x-clip text-foreground">
      {/* Background glow & subtle accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-[var(--container)] relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/30 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
            <Sparkles className="size-3.5 text-primary" />
            <span>{finishDetails.badge}</span>
          </div>
          <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.95] mb-4">
            {finishDetails.titleLine1} <br />
            <span className="text-foreground/50">{finishDetails.titleLine2}</span>
          </h2>
          <p className="text-[length:var(--text-body)] text-foreground/70 leading-relaxed max-w-2xl">
            {finishDetails.description}
          </p>
        </div>

        {/* Finish Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border/40 pb-4">
          {finishDetails.items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveFinishId(item.id)}
              className={cn(
                "px-5 py-3 rounded-none font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-3 cursor-pointer border",
                activeFinishId === item.id
                  ? "border-foreground bg-foreground text-background font-bold shadow-lg"
                  : "border-border/40 bg-background/50 text-foreground/70 hover:border-foreground/40 hover:text-foreground"
              )}
            >
              <span
                className="size-3 rounded-full border border-border/60 shrink-0"
                style={{ backgroundColor: item.swatchHex }}
              />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Active Finish Details Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFinish.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-border/60 bg-background/80 p-6 sm:p-8 lg:p-10 relative"
          >
            {/* Visual Sample / Vehicle Photo */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[400px] overflow-hidden group">
              <img
                src={activeFinish.image}
                alt={activeFinish.name}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

              {/* Texture & Swatch Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-4 p-4 bg-background/90 backdrop-blur-md border border-border/60">
                <div className="flex items-center gap-3">
                  <div
                    className="size-8 rounded-full border-2 border-foreground/30 shadow-inner"
                    style={{ backgroundColor: activeFinish.swatchHex }}
                  />
                  <div>
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                      {activeFinish.name}
                    </div>
                    <div className="text-[11px] font-mono text-foreground/60">
                      {activeFinish.specCode}
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-muted/60 border border-border/40 text-[10px] font-mono uppercase tracking-wider text-foreground/80">
                  {activeFinish.sheenLevel}
                </div>
              </div>
            </div>

            {/* Details & Material Specs */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-primary mb-2 font-semibold">
                  <span>{finishDetails.finishCategoryLabel}</span>
                  <span>{activeFinish.vehicleLabel}</span>
                </div>
                <h3 className="text-[length:var(--text-h2)] font-light uppercase tracking-tight mb-4">
                  {activeFinish.name}
                </h3>
                <p className="text-[length:var(--text-body)] text-foreground/70 leading-relaxed mb-6">
                  {activeFinish.description}
                </p>

                {/* Key Features list */}
                <div className="space-y-3 mb-6 border-t border-border/40 pt-4">
                  {activeFinish.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs font-mono text-foreground/80">
                      <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attributes Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/40">
                <div className="p-3 bg-muted/20 border border-border/40">
                  <div className="text-[10px] font-mono uppercase text-foreground/50 mb-1 flex items-center gap-1.5">
                    <Sun className="size-3" />
                    <span>{finishDetails.durabilityLabel}</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-foreground">
                    {activeFinish.durability}
                  </div>
                </div>

                <div className="p-3 bg-muted/20 border border-border/40">
                  <div className="text-[10px] font-mono uppercase text-foreground/50 mb-1 flex items-center gap-1.5">
                    <Droplets className="size-3" />
                    <span>{finishDetails.maintenanceLabel}</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-foreground">
                    {activeFinish.maintenance}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <a
                href="#customizer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 border border-foreground bg-foreground text-background font-mono text-xs uppercase font-bold tracking-widest hover:bg-transparent hover:text-foreground transition-all duration-300"
              >
                <span>{finishDetails.configureBtn}</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
