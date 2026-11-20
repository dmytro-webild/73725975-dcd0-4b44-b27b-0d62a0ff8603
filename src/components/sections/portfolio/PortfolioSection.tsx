import { useState, useRef, useCallback, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ArrowRight, MapPin, Sparkles, Sliders, Check, ShieldCheck } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";

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
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  specs: string[];
  gridSpan: string;
  isTintService?: boolean;
}

export interface BeforeAfterPhotoSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  isTintService?: boolean;
  className?: string;
}

export function BeforeAfterPhotoSlider({
  beforeImage,
  afterImage,
  beforeLabel = "ДО: Без плёнки",
  afterLabel = "ПОСЛЕ: С плёнкой",
  isTintService = false,
  className = "",
}: BeforeAfterPhotoSliderProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const isDragging = useRef<boolean>(false);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const updateWidth = () => {
      setContainerWidth(el.offsetWidth);
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      isDragging.current = false;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPos((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      setSliderPos(0);
    } else if (e.key === "End") {
      setSliderPos(100);
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={cn(
        "relative overflow-hidden select-none cursor-ew-resize group border border-border/80 bg-card outline-none touch-none",
        className
      )}
    >
      {/* AFTER IMAGE (Bottom Layer - Film Tint / Wrap Finish) */}
      <div className="absolute inset-0 size-full overflow-hidden">
        <img
          src={afterImage}
          alt="After film treatment"
          className="size-full object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Nano-ceramic dark glass / film protection sheen overlay */}
        {isTintService ? (
          <div className="absolute inset-0 bg-slate-950/30 mix-blend-multiply pointer-events-none" />
        ) : (
          <div className="absolute inset-0 bg-zinc-950/20 mix-blend-multiply pointer-events-none" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* BEFORE IMAGE (Top Layer - Clipped by sliderPos - Factory Stock) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden z-10 border-r-2 border-foreground/90 shadow-2xl pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <div
          className="absolute inset-y-0 left-0 h-full"
          style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
        >
          <img
            src={beforeImage}
            alt="Before factory stock"
            className="size-full object-cover object-center filter brightness-110 contrast-95 saturate-90"
          />
          {/* Clear Untinted Glass Reflective Sheen Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/25 via-blue-100/20 to-transparent mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* BEFORE / AFTER BADGES */}
      <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-background/90 backdrop-blur-md border border-border/80 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-foreground shadow-md flex items-center gap-1.5 pointer-events-none">
        <span className="size-2 rounded-full bg-amber-400" />
        <span>{beforeLabel}</span>
      </div>
      <div className="absolute top-3 right-3 z-20 px-2.5 py-1 bg-foreground text-background font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-md flex items-center gap-1.5 pointer-events-none">
        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>{afterLabel}</span>
      </div>

      {/* DRAGGABLE HANDLE DIVIDER */}
      <div
        className="absolute top-0 bottom-0 z-30 w-0.5 bg-foreground shadow-[0_0_15px_rgba(255,255,255,0.9)] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-9 rounded-full bg-foreground text-background flex items-center justify-center shadow-2xl border-2 border-background transform group-hover:scale-110 transition-transform">
          <span className="text-[11px] font-black tracking-tighter">‹›</span>
        </div>
      </div>
    </div>
  );
}

// Export BeforeAfterSlider alias for backwards compatibility
export const BeforeAfterSlider = BeforeAfterPhotoSlider;

// 4 Variations of Cars - Before & After Film Processing
const CAR_VARIATIONS: CarVariationItem[] = [
  {
    id: "porsche-911-full-wrap",
    title: "Satin Obsidian Anthrazit Vollfolierung",
    vehicle: "Porsche 911 Carrera S (992)",
    categoryKey: "fullWraps",
    categoryLabel: "Vollfolierung",
    finish: "Satin Obsidian Metallic Film Wrap",
    turnaround: "4 Tage",
    location: "Zürich Atelier",
    beforeImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    afterImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    beforeLabel: "ДО: Werkslack Weiss",
    afterLabel: "ПОСЛЕ: Satin Obsidian Folie",
    description: "Vollständige Farbtransformation von Carrara-Weiss-Werkslack zu seidenmattem Obsidian-Schwarz inkl. Türeinstiegen und Knifeless-Kantenverlegung.",
    specs: ["Vollfolierung Satin Obsidian", "Präzisions-Türeinstiege", "Knifeless Tape Technologie", "Selbstheilende Schutzschicht"],
    gridSpan: "lg:col-span-6",
    isTintService: false,
  },
  {
    id: "bmw-m4-forged-roof",
    title: "Forged Carbon Dach & Akzent-Folierung",
    vehicle: "BMW M4 Competition",
    categoryKey: "partialWraps",
    categoryLabel: "Teilfolierung / Dach",
    finish: "Forged Carbon Roof & Piano Black Trim",
    turnaround: "2 Tage",
    location: "Zürich Atelier",
    beforeImage: "https://images.pexels.com/photos/16284837/pexels-photo-16284837.jpeg?auto=compress&w=1200",
    afterImage: "https://images.pexels.com/photos/16284837/pexels-photo-16284837.jpeg?auto=compress&w=1200",
    beforeLabel: "ДО: Werkszustand",
    afterLabel: "ПОСЛЕ: Forged Carbon Dach",
    description: "Teilfolierung mit echtem Forged-Carbon-Muster auf dem Fahrzeugdach, ergänzt durch hochglänzende Piano Black Seitenschweller.",
    specs: ["Forged Carbon Dachfolie", "Piano Black Seitenschweller", "Spiegelkappen Folierung", "Frontsplitter Blackout"],
    gridSpan: "lg:col-span-6",
    isTintService: false,
  },
  {
    id: "amg-gt-shadowline",
    title: "Piano Black Shadowline Anti-Chrom",
    vehicle: "Mercedes-AMG GT 63 S",
    categoryKey: "chromeDelete",
    categoryLabel: "Chrome Delete",
    finish: "Piano Gloss Black Shadowline Delete",
    turnaround: "1 Tag",
    location: "Zürich Studio",
    beforeImage: "https://images.pexels.com/photos/18370669/pexels-photo-18370669.jpeg?auto=compress&w=1200",
    afterImage: "https://images.pexels.com/photos/18370669/pexels-photo-18370669.jpeg?auto=compress&w=1200",
    beforeLabel: "ДО: Werks-Chrom",
    afterLabel: "ПОСЛЕ: Piano Shadowline",
    description: "Vollständige Entchromung aller Fensterleisten, des Panamericana-Grillrahmens und der Heckembleme in tiefglänzendem Piano Black.",
    specs: ["Fensterleisten Blackout", "Panamericana Grill Rahmen", "Modellschriftzug Schwarz", "Spiegelfuss Folierung"],
    gridSpan: "lg:col-span-6",
    isTintService: false,
  },
  {
    id: "bmw-5-stealth-ppf",
    title: "200μm Stealth Matte PPF Lackschutz",
    vehicle: "BMW 5er Limousine",
    categoryKey: "ppf",
    categoryLabel: "Stealth PPF",
    finish: "200μm Stealth Matte Paint Protection Film",
    turnaround: "5 Tage",
    location: "Zürich Studio",
    beforeImage: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=1200",
    afterImage: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=1200",
    beforeLabel: "ДО: Glanz-Werkslack",
    afterLabel: "ПОСЛЕ: 200μm Stealth PPF",
    description: "Transformation des Werkslacks in ein samtiges Matt-Finish mit 200-Mikron dichter selbstheilender Steinschlagschutzfolie.",
    specs: ["200μm Selbstheilende Folie", "Hydrophober Topcoat", "Steinschlagschutz Front", "10 Jahre Schweizer Garantie"],
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
    { key: "windowTinting", label: "Keramik-Tönung" },
    { key: "fullWraps", label: "Vollfolierung" },
    { key: "partialWraps", label: "Teilfolierung / Dach" },
    { key: "chromeDelete", label: "Chrome Delete" },
    { key: "ppf", label: "Stealth PPF" },
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
              Vorher & Nachher <br />
              <span className="text-foreground/50">Folien- & Tönungskollage</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/60 max-w-md">
            Symphonie aus 4 verschiedenen Fahrzeugmodellen im direkten Vorher/Nachher-Vergleich vor und nach der Folien- & Tönungsbehandlung. Identisches Modell, identischer Blickwinkel.
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
        {/* PHOTO COLLAGE GRID (6 VARIATIONS OF CARS BEFORE & AFTER) */}
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
              {/* Interactive Before & After Photo Slider */}
              <div className="relative w-full">
                <BeforeAfterPhotoSlider
                  beforeImage={car.beforeImage}
                  afterImage={car.afterImage}
                  beforeLabel={car.beforeLabel}
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
                    <span>Details & Vorher/Nachher</span>
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
                {/* Left: Large Interactive Before/After Photo Slider */}
                <div className="lg:col-span-7">
                  <BeforeAfterPhotoSlider
                    beforeImage={selectedCar.beforeImage}
                    afterImage={selectedCar.afterImage}
                    beforeLabel={selectedCar.beforeLabel}
                    afterLabel={selectedCar.afterLabel}
                    isTintService={selectedCar.isTintService}
                    className="h-[320px] sm:h-[420px] w-full"
                  />
                  <p className="text-[11px] font-mono text-foreground/50 mt-2 text-center">
                    Regler ziehen zum Vergleichen (Identisches Fahrzeug {selectedCar.vehicle})
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
