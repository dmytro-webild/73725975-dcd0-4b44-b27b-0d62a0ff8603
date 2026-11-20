import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ArrowRight, MapPin, Sparkles, Sliders, Check, ShieldCheck } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export interface CarVariationItem {
  id: string;
  title: string;
  vehicle: string;
  categoryKey: "all" | "windowTinting" | "fullWraps" | "partialWraps" | "chromeDelete" | "ppf";
  categoryLabel: string;
  finish: string;
  turnaround: string;
  location: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel: string;
  description: string;
  specs: string[];
  gridSpan: string;
  isTintService?: boolean;
}

export interface BeforeAfterPhotoSliderProps {
  beforeImage?: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  isTintService?: boolean;
  className?: string;
}

export function BeforeAfterPhotoSlider({
  afterImage,
  afterLabel = "ПОСЛЕ: ГОТОВЫЙ РЕЗУЛЬТАТ",
  className = "",
}: BeforeAfterPhotoSliderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden select-none group border border-border/80 bg-card outline-none",
        className
      )}
    >
      <Media
        src={afterImage}
        alt="Finished film treatment"
        className="size-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

      {/* FINISHED RESULT BADGE */}
      <div className="absolute top-3 right-3 z-20 px-2.5 py-1 bg-foreground text-background font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-md flex items-center gap-1.5 pointer-events-none">
        <span className="size-2 rounded-full bg-emerald-400" />
        <span>{afterLabel}</span>
      </div>
    </div>
  );
}

// Export BeforeAfterSlider alias for backwards compatibility
export const BeforeAfterSlider = BeforeAfterPhotoSlider;

// 4 Variations of Cars - Static Photos Showing Completed Film Finishing
const CAR_VARIATIONS: CarVariationItem[] = [
  {
    id: "aston-martin-full-wrap",
    title: "Satin Obsidian Anthrazit Vollfolierung",
    vehicle: "Aston Martin DBS Superleggera",
    categoryKey: "fullWraps",
    categoryLabel: "Vollfolierung",
    finish: "Satin Obsidian Metallic Film Wrap",
    turnaround: "4 Tage",
    location: "Zürich Atelier",
    image: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977859-s2ylivcm.webp",
    beforeImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977859-s2ylivcm.webp",
    afterImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977859-s2ylivcm.webp",
    beforeLabel: "ПОСЛЕ: SATIN OBSIDIAN FOLIE",
    afterLabel: "ПОСЛЕ: SATIN OBSIDIAN FOLIE",
    description: "Vollständige Farbtransformation in seidenmattes Obsidian-Schwarz inkl. präziser Kantenverlegung und selbstheilender Oberflächenversiegelung.",
    specs: ["Vollfolierung Satin Obsidian", "Präzisions-Türeinstiege", "Knifeless Tape Technologie", "Selbstheilende Schutzschicht"],
    gridSpan: "lg:col-span-6",
    isTintService: false,
  },
  {
    id: "amg-g63-shadowline",
    title: "Piano Black Shadowline & Tönung",
    vehicle: "Mercedes-AMG G 63",
    categoryKey: "chromeDelete",
    categoryLabel: "Chrome Delete / Tönung",
    finish: "Piano Gloss Black Delete & Ceramic Glass Tint",
    turnaround: "2 Tage",
    location: "Zürich Atelier",
    image: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977860-g4g4nso2.png",
    beforeImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977860-g4g4nso2.png",
    afterImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977860-g4g4nso2.png",
    beforeLabel: "ПОСЛЕ: PIANO BLACK & TÖNUNG",
    afterLabel: "ПОСЛЕ: PIANO BLACK & TÖNUNG",
    description: "Vollständiges Anti-Chrom Paket in hochglänzendem Piano Black in Kombination mit nano-keramischer Scheibentönung.",
    specs: ["Fensterleisten Blackout", "Panamericana Grill Rahmen", "Keramik Scheibentönung", "Spiegelkappen Folierung"],
    gridSpan: "lg:col-span-6",
    isTintService: true,
  },
  {
    id: "amg-cla-velvet-wrap",
    title: "Satin Midnight Purple Vollfolierung",
    vehicle: "Mercedes-AMG CLA / GT",
    categoryKey: "fullWraps",
    categoryLabel: "Vollfolierung",
    finish: "Satin Midnight Purple Flip Wrap",
    turnaround: "4 Tage",
    location: "Zürich Studio",
    image: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977861-bfn83avt.png",
    beforeImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977861-bfn83avt.png",
    afterImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977861-bfn83avt.png",
    beforeLabel: "ПОСЛЕ: MIDNIGHT PURPLE FOLIE",
    afterLabel: "ПОСЛЕ: MIDNIGHT PURPLE FOLIE",
    description: "Exklusive Vollfolierung in seidenmattem Midnight Purple mit edlem Farbspiel und nahtloser Kantenumbiegung.",
    specs: ["Satin Purple Vollfolierung", "360° Kantenumbiegung", "Keramische Versiegelung", "Piano Black Akzente"],
    gridSpan: "lg:col-span-6",
    isTintService: false,
  },
  {
    id: "amg-edition1-stealth",
    title: "Satin Black & Edition 1 Akzente",
    vehicle: "Mercedes-AMG CLA 45 Edition 1",
    categoryKey: "ppf",
    categoryLabel: "Stealth PPF & Akzente",
    finish: "Satin Black Film Wrap & Yellow Striping",
    turnaround: "3 Tage",
    location: "Zürich Studio",
    image: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977862-bxds4tv1.png",
    beforeImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977862-bxds4tv1.png",
    afterImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/uploaded-1795183977862-bxds4tv1.png",
    beforeLabel: "ПОСЛЕ: SATIN BLACK & GELB AKZENTE",
    afterLabel: "ПОСЛЕ: SATIN BLACK & GELB AKZENTE",
    description: "Seidenmatte Karosserie-Vollfolierung mit gelben Edition 1 Rennsport-Akzenten an Frontsplitter, Schweller und Felgen.",
    specs: ["Satin Black Vollfolierung", "Edition 1 Gelb Akzente", "Frontsplitter Striping", "Hydrophober Oberflächenschutz"],
    gridSpan: "lg:col-span-6",
    isTintService: false,
  },
];

export default function PortfolioSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedCar, setSelectedCar] = useState<CarVariationItem | null>(null);

  const categories = [
    { key: "all", label: "Alle 4 Fahrzeug-Variationen" },
    { key: "fullWraps", label: "Vollfolierung" },
    { key: "chromeDelete", label: "Chrome Delete & Tönung" },
    { key: "ppf", label: "Stealth PPF & Akzente" },
  ];

  const filteredVariations = CAR_VARIATIONS.filter((car) =>
    activeFilter === "all" ? true : car.categoryKey === activeFilter
  );

  return (
    <section id="portfolio" className="relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40">
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Sparkles className="size-3.5 text-primary" />
              <span>{t.portfolio.badge} — 4 Fahrzeug-Variationen</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              Atelier Galerie <br />
              <span className="text-foreground/50">Exklusive Folien-Ergebnisse</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/60 max-w-md">
            Entdecken Sie unsere fertiggestellten Fahrzeug-Transformationen in höchster Präzision — edle Matt- & Satin-Folierungen, Gloss-Behandlungen und Akzente.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-10 flex flex-wrap gap-2.5 border-b border-border/40 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveFilter(cat.key)}
              className={cn(
                "px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer flex items-center gap-2",
                activeFilter === cat.key
                  ? "bg-foreground text-background border-foreground font-bold shadow-md"
                  : "bg-card/60 text-foreground/70 border-border/50 hover:bg-muted hover:text-foreground"
              )}
            >
              {activeFilter === cat.key && <Check className="size-3 text-emerald-400" />}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* ============================================================ */}
        {/* PHOTO COLLAGE GRID (4 VARIATIONS OF CARS AFTER FILM) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
          {filteredVariations.map((car) => (
            <motion.div
              layout
              key={car.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "group border border-border/70 bg-card/70 overflow-hidden flex flex-col justify-between hover:border-foreground/60 transition-all duration-300 relative shadow-xl",
                activeFilter === "all" ? car.gridSpan : "lg:col-span-6"
              )}
            >
              {/* Static Photo View Showing Completed Film Wrap */}
              <div className="relative w-full">
                <BeforeAfterPhotoSlider
                  afterImage={car.afterImage}
                  afterLabel={car.afterLabel}
                  isTintService={car.isTintService}
                  className="h-[280px] sm:h-[340px] lg:h-[380px] w-full"
                />

                {/* Inspect Button overlay on image */}
                <button
                  type="button"
                  onClick={() => setSelectedCar(car)}
                  className="absolute bottom-3 right-3 z-30 px-3 py-1.5 bg-background/90 backdrop-blur-md border border-border/80 text-[10px] font-mono uppercase tracking-widest text-foreground font-semibold hover:bg-foreground hover:text-background transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <Eye className="size-3.5" />
                  <span>Spezifikation</span>
                </button>
              </div>

              {/* Card Metadata */}
              <div className="p-6 bg-card/90 border-t border-border/40 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-2">
                    <span className="font-semibold text-foreground/90 uppercase tracking-wider">{car.vehicle}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3 text-primary" />
                      {car.location}
                    </span>
                  </div>

                  <h3 className="text-[length:var(--text-h3)] font-light uppercase tracking-tight [font-family:var(--font-heading)] mb-1">
                    {car.title}
                  </h3>

                  <p className="text-xs font-mono text-primary/90 mb-4">
                    Finish: <span className="text-foreground">{car.finish}</span>
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {car.specs.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-muted/60 border border-border/40 text-[10px] font-mono text-foreground/80 flex items-center gap-1"
                      >
                        <ShieldCheck className="size-3 text-emerald-400" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs font-mono text-foreground/60">
                  <span>Bearbeitungszeit: <strong className="text-foreground">{car.turnaround}</strong></span>
                  <button
                    type="button"
                    onClick={() => setSelectedCar(car)}
                    className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors cursor-pointer font-semibold"
                  >
                    <span>Details & Spezifikation</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Studio Info Bar */}
        <div className="p-6 bg-card/60 border border-border/80 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
              <Sliders className="size-6" />
            </div>
            <div>
              <h4 className="text-base font-mono uppercase tracking-wider font-bold">
                Eigener Fahrzeug-Wunsch?
              </h4>
              <p className="text-xs font-mono text-foreground/60">
                Lassen Sie Ihr Fahrzeugmodell in unserem Atelier mit Premium-Folie oder Keramik-Tönung veredeln.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-8 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all font-bold cursor-pointer shrink-0 shadow-lg"
          >
            <span>Unverbindliche Offerte anfragen</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      {/* Lightbox / Spec Modal */}
      <AnimatePresence>
        {selectedCar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-background/90 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-card border border-border/80 p-6 sm:p-8 lg:p-10 text-foreground overflow-hidden my-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 z-20 p-2 text-foreground/60 hover:text-foreground hover:bg-muted border border-border/40 transition-all cursor-pointer"
              >
                <X className="size-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Static Photo Spec View */}
                <div className="lg:col-span-7">
                  <BeforeAfterPhotoSlider
                    afterImage={selectedCar.afterImage}
                    afterLabel={selectedCar.afterLabel}
                    isTintService={selectedCar.isTintService}
                    className="h-[320px] sm:h-[420px] w-full"
                  />
                  <p className="text-[11px] font-mono text-foreground/50 mt-2 text-center">
                    Fertiggestellte Folierung: {selectedCar.vehicle}
                  </p>
                </div>

                {/* Right: Specifications & Details */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-2">
                      <Sparkles className="size-3.5" />
                      <span>{selectedCar.vehicle}</span>
                    </div>

                    <h3 className="text-[length:var(--text-h2)] font-light uppercase tracking-tight mb-2">
                      {selectedCar.title}
                    </h3>

                    <p className="text-xs font-mono text-foreground/70 mb-4">
                      Spezifikation: <span className="text-foreground font-semibold">{selectedCar.finish}</span>
                    </p>

                    <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                      {selectedCar.description}
                    </p>

                    {/* Spec Bullet List */}
                    <div className="space-y-2 mb-6 p-4 bg-muted/40 border border-border/40">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50 block mb-2">
                        Technische Ausführung:
                      </span>
                      {selectedCar.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-foreground/90">
                          <Check className="size-3.5 text-emerald-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/40 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-foreground/60">
                      <span>Bearbeitungszeit:</span>
                      <span className="text-foreground font-semibold">{selectedCar.turnaround}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-foreground/60">
                      <span>Standort:</span>
                      <span className="text-foreground font-semibold">{selectedCar.location}</span>
                    </div>

                    <a
                      href="#contact"
                      onClick={() => setSelectedCar(null)}
                      className="w-full mt-4 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest text-center font-bold hover:bg-foreground/90 transition-all inline-flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Offerte für diesen Typ anfragen</span>
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
