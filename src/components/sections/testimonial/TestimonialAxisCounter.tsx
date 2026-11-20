"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  rating?: number;
};

export type TestimonialAxisCounterProps = {
  script?: string;
  ghost?: string;
  items?: Testimonial[];
  model?: unknown;
  media?: "model" | "image";
  ariaLabel?: string;
  className?: string;
};

const EXPO = [0.19, 1, 0.22, 1] as const;

export default function TestimonialAxisCounter({
  items,
  ariaLabel,
  className,
}: TestimonialAxisCounterProps) {
  const reduce = useReducedMotion();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const defaultItems: Testimonial[] = [
    {
      quote: language === "de"
        ? "Makellose Satin-Schwarz-Folierung an meinem Porsche 911 GT3 RS. Die Kanten an den Einstiegen sind von einer Werkslackierung nicht zu unterscheiden."
        : "Flawless satin wrap finish on my 911 GT3 RS. The edges around the door jambs are completely indistinguishable from factory paint.",
      name: "Marc von Berg",
      role: language === "de" ? "Porsche 911 GT3 RS Besitzer — Zürich" : "Porsche 911 GT3 RS Owner — Zurich",
      rating: 5,
    },
    {
      quote: language === "de"
        ? "Die PPF-Ganzkörperfolierung an meinem Audi RS6 Avant gibt mir absolutes Vertrauen auf Pässen. Nach 15.000 Kilometern kein einziger Steinschlag."
        : "Full PPF application on my Audi RS6 Avant gave me complete confidence on high-speed alpine passes. Zero stone chip damage.",
      name: "Nathan Bennett",
      role: language === "de" ? "Audi RS6 Avant Besitzer — Zürich" : "Audi RS6 Avant Owner — Zurich",
      rating: 5,
    },
    {
      quote: language === "de"
        ? "Das Chrome Delete Blackout hat das Profil meines AMG GT sofort aufgewertet. Schweizer Handwerkskunst auf höchstem Niveau."
        : "Sleek chrome delete blackout transformed the profile of my AMG GT instantly. Extraordinary Swiss craft standards.",
      name: "Imogen Price",
      role: language === "de" ? "Mercedes-AMG GT 63 S Besitzerin — Zürich" : "Mercedes-AMG GT 63 S Owner — Zurich",
      rating: 5,
    },
    {
      quote: language === "de"
        ? "Akribisch saubere Arbeit im Reinraum am BMW M4. Die Online-Farbvorschau stimmte 1:1 mit dem realen Folienmuster überein."
        : "Meticulous dust-free clean room execution on my BMW M4. The customizer online matched the physical vinyl sample 100%.",
      name: "Callum Henderson",
      role: language === "de" ? "BMW M4 Competition Besitzer — Zürich" : "BMW M4 Competition Owner — Zurich",
      rating: 5,
    },
    {
      quote: language === "de"
        ? "Messerscharfe Knifeless-Kanten und perfekter Stealth-Look für meinen BMW M3. Äusserst kompetentes Atelier-Team."
        : "Razor-sharp knifeless tape execution and flawless stealth look for my BMW M3. Outstanding team of craftsmen.",
      name: "Lukas Weber",
      role: language === "de" ? "BMW M3 Competition Besitzer — Zürich" : "BMW M3 Competition Owner — Zurich",
      rating: 5,
    },
    {
      quote: language === "de"
        ? "Hervorragende Nano-Keramik Scheibentönung an unserem Porsche Cayenne. Perfekter Hitzeschutz und makellose Optik."
        : "Outstanding nano-ceramic window tinting on our Porsche Cayenne. Perfect heat rejection and pristine optical clarity.",
      name: "Sophie Miller",
      role: language === "de" ? "Porsche Cayenne Turbo GT Besitzerin — Zürich" : "Porsche Cayenne Turbo GT Owner — Zurich",
      rating: 5,
    },
  ];

  const reviewList = items && items.length > 0 ? items : defaultItems;
  const isDe = language === "de";

  const nextReview = () => {
    setActiveTab((prev) => (prev + 1) % reviewList.length);
  };

  const prevReview = () => {
    setActiveTab((prev) => (prev - 1 + reviewList.length) % reviewList.length);
  };

  return (
    <section
      aria-label={ariaLabel ?? (isDe ? "Kundenstimmen" : "Client Reviews")}
      className={cn(
        "relative py-20 lg:py-28 bg-[#121316] text-slate-100 border-y border-white/10 overflow-hidden",
        className
      )}
    >
      {/* Dark Graphite Ambient Glows */}
      <div className="absolute top-0 left-1/4 size-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 size-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto w-[var(--container)] relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-4"
            >
              <CheckCircle2 className="size-3.5" />
              <span>{isDe ? "Echte Kundenmeinungen" : "Verified Atelier Reviews"}</span>
            </motion.div>

            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EXPO }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-[0.04em] [font-family:var(--font-heading)] text-white"
            >
              {isDe ? "Kundenstimmen & Referenzen" : "Client Testimonials & Feedback"}
            </motion.h2>
          </div>

          {/* Rating Summary Box */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md self-start md:self-auto"
          >
            <div className="flex items-center text-amber-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="h-6 w-px bg-white/15" />
            <div className="text-xs font-mono tracking-wider">
              <span className="font-bold text-white">5.0 / 5.0</span>
              <span className="text-white/50 ml-2">({isDe ? "Ausgezeichnet" : "Excellent"})</span>
            </div>
          </motion.div>
        </div>

        {/* Featured Testimonial Spotlight */}
        <motion.div
          key={activeTab}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EXPO }}
          className="relative mb-12 p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          <Quote className="absolute top-6 right-8 size-24 text-white/[0.03] pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-1.5 mb-6 text-amber-400">
              {[...Array(reviewList[activeTab]?.rating || 5)].map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-slate-100 mb-8 [font-family:var(--font-heading)]">
              "{reviewList[activeTab].quote}"
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-sky-500/20 border border-white/20 flex items-center justify-center font-mono font-bold text-lg text-emerald-400 shadow-inner">
                  {reviewList[activeTab].name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base tracking-wide">
                    {reviewList[activeTab].name}
                  </h3>
                  {reviewList[activeTab].role && (
                    <p className="text-xs font-mono text-emerald-400/90 tracking-wider">
                      {reviewList[activeTab].role}
                    </p>
                  )}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                <CheckCircle2 className="size-3.5" />
                <span>{isDe ? "Verifizierte Folierung" : "Verified Wrap"}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel Controls & Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewList.map((item, index) => {
            const isActive = index === activeTab;
            return (
              <motion.button
                key={index}
                type="button"
                onClick={() => setActiveTab(index)}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "text-left p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between border backdrop-blur-md group",
                  isActive
                    ? "bg-white/[0.08] border-emerald-500/50 shadow-lg shadow-emerald-500/5"
                    : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-amber-400 gap-1">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span
                      className={cn(
                        "text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border",
                        isActive
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                          : "text-white/40 border-white/10 group-hover:text-white/60"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")} / {String(reviewList.length).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4 font-light">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </p>
                    {item.role && (
                      <p className="text-[11px] font-mono text-white/50 truncate max-w-[200px]">
                        {item.role}
                      </p>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Action Footer: Invite Contact */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
              <MessageSquare className="size-5" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-white">
                {isDe ? "Möchten Sie Ihr Fahrzeug veredeln?" : "Ready to transform your vehicle?"}
              </p>
              <p className="text-xs text-white/50">
                {isDe ? "Vereinbaren Sie eine persönliche Beratung in Zürich." : "Schedule a personal atelier consultation in Zurich."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevReview}
              aria-label="Previous Review"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer text-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={nextReview}
              aria-label="Next Review"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer text-white"
            >
              <ChevronRight className="size-5" />
            </button>
            <a
              href="#contact"
              className="ml-2 px-6 py-3 rounded-xl bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white/90 transition-all shadow-lg"
            >
              {isDe ? "Beratung anfragen" : "Request Consultation"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
