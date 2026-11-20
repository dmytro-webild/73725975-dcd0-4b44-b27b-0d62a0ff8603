import { useState, useRef, useCallback, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ArrowRight, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export interface ProjectItem {
  id: string;
  title: string;
  vehicle: string;
  category: "Full Wraps" | "Partial Wraps" | "Chrome Delete" | "PPF" | "Window Tinting";
  finish: string;
  turnaround: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  specs: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "porsche-gt3-satin",
    title: "Stealth Satin Black Transformation",
    vehicle: "Porsche 911 GT3 RS (992)",
    category: "Full Wraps",
    finish: "Stealth Satin Obsidian Black Vinyl",
    turnaround: "4 Days",
    location: "Canton of Zurich Atelier",
    beforeImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    afterImage: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&w=1200",
    description: "Complete vehicle wrap from factory White to Satin Obsidian Black, combined with gloss carbon wing accents and knifeless door jamb tucking.",
    specs: ["Full Body Satin Wrap", "Door Jamb Execution", "Forged Carbon Wing Accent", "Knifeless Tape Trimmed"]
  },
  {
    id: "bmw-m4-nardo",
    title: "Nardo Grey & Forged Carbon Spec",
    vehicle: "BMW M4 Competition (G82)",
    category: "Full Wraps",
    finish: "Nardo Grey Gloss + Forged Carbon",
    turnaround: "4 Days",
    location: "Zurich Studio",
    beforeImage: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=1200",
    afterImage: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&w=1200",
    description: "Full body Nardo Grey vinyl wrap accompanied by gloss black roof wrap and full front bumper chrome delete.",
    specs: ["Gloss Nardo Grey Film", "Gloss Black Roof Wrap", "Front Kidney Grille Blackout", "Side Mirror Caps"]
  },
  {
    id: "amg-gt-ppf",
    title: "Full Body Stealth PPF Shield",
    vehicle: "Mercedes-AMG GT 63 S",
    category: "PPF",
    finish: "Matte Stealth Paint Protection Film",
    turnaround: "5 Days",
    location: "Zurich Atelier",
    beforeImage: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&w=1200",
    afterImage: "https://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342620.jpg",
    description: "Converted original gloss paint into a silky satin matte sheen using 200-micron self-healing PPF, protecting against high-speed alpine gravel.",
    specs: ["200μm Self-Healing PPF", "Hydrophobic Topcoat", "Full Front Track Coverage", "10-Year Warranty"]
  },
  {
    id: "audi-rs6-blackout",
    title: "Complete Satin Chrome Delete",
    vehicle: "Audi RS6 Avant (C8)",
    category: "Chrome Delete",
    finish: "Satin Black Trim Blackout",
    turnaround: "1 Day",
    location: "Zurich Studio",
    beforeImage: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&w=1200",
    afterImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    description: "Total blackout conversion of aluminum window trims, roof rails, front Singleframe grille, and rear diffuser inserts.",
    specs: ["Window Surround Blackout", "Roof Rail Wrap", "Grille Surround", "Badges & Emblems"]
  },
  {
    id: "ferrari-f8-tint",
    title: "Ceramic Heat Rejection Tinting",
    vehicle: "Ferrari F8 Tributo",
    category: "Window Tinting",
    finish: "Nano-Ceramic 15% Privacy Tint",
    turnaround: "5 Hours",
    location: "Zurich Atelier",
    beforeImage: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&w=1200",
    afterImage: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&w=1200",
    description: "Premium ceramic window tinting providing 99% UV rejection and 92% IR thermal shielding, certified compliant with Swiss traffic regulations.",
    specs: ["99% UV Protection", "92% IR Rejection", "Canton Zurich Compliant", "Non-Interference Ceramic"]
  },
  {
    id: "tesla-plaid-roof",
    title: "Gloss Black Roof & Accent Spec",
    vehicle: "Tesla Model S Plaid",
    category: "Partial Wraps",
    finish: "Gloss Piano Black Accent Wrap",
    turnaround: "2 Days",
    location: "Zurich Studio",
    beforeImage: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=1200",
    afterImage: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&w=1200",
    description: "Panoramic gloss black roof wrap extension seamlessly integrated with satin black side mirror caps and lip spoiler.",
    specs: ["Panoramic Roof Wrap", "Mirror Cap Accents", "Trunk Lip Spoiler", "Camera Trim Blackout"]
  }
];

const CATEGORIES = ["All", "Full Wraps", "Partial Wraps", "Chrome Delete", "PPF", "Window Tinting"] as const;

export interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Factory Stock",
  afterLabel = "JD Wrapped Finish",
  className
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const isDragging = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className={cn("relative overflow-hidden select-none cursor-ew-resize group border border-border/60 bg-card", className)}
    >
      {/* After Image (Full background) */}
      <img src={afterImage} alt={afterLabel} className="absolute inset-0 size-full object-cover object-center" />

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-y-0 left-0 size-full object-cover object-center max-w-none"
          style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
        />
      </div>

      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-background/80 backdrop-blur-md border border-border/60 text-[length:var(--text-label)] font-mono uppercase tracking-widest text-foreground">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-foreground text-background font-mono text-[length:var(--text-label)] uppercase tracking-widest font-semibold">
        {afterLabel}
      </div>

      {/* Divider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-foreground shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-9 rounded-full bg-foreground text-background flex items-center justify-center shadow-xl border border-background">
          <div className="flex items-center gap-0.5 text-xs font-bold">
            ‹›
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((p) =>
    activeCategory === "All" ? true : p.category === activeCategory
  );

  return (
    <section id="portfolio" className="relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40">
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Sparkles className="size-3.5 text-primary" />
              <span>Atelier Portfolio</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              Vehicle Transformations <br />
              <span className="text-foreground/50">Canton of Zurich Gallery</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/60 max-w-md">
            Explore our portfolio of luxury automotive wraps, PPF armor, and custom blackout styling executed for discerning Swiss vehicle owners.
          </p>
        </div>

        {/* Featured Interactive Before & After Slider */}
        <div className="mb-16">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-[length:var(--text-h3)] font-light uppercase tracking-wider [font-family:var(--font-heading)]">
              Featured Transformation — Drag Slider
            </h3>
            <span className="text-xs font-mono uppercase tracking-widest text-foreground/50">
              Porsche 911 GT3 RS
            </span>
          </div>
          <BeforeAfterSlider
            beforeImage="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200"
            afterImage="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&w=1200"
            beforeLabel="Factory White Paint"
            afterLabel="Atelier Satin Obsidian Black"
            className="h-[380px] sm:h-[480px] lg:h-[560px] w-full"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border/40 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-[length:var(--text-small)] font-mono uppercase tracking-wider transition-all border cursor-pointer",
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground font-semibold"
                  : "bg-muted/30 text-foreground/70 border-border/40 hover:bg-muted hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer border border-border/60 bg-card/60 overflow-hidden flex flex-col justify-between hover:border-foreground/40 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={project.afterImage}
                  alt={project.title}
                  className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors" />

                <div className="absolute top-3 left-3 px-2.5 py-1 bg-background/80 backdrop-blur-md border border-border/60 text-[10px] font-mono uppercase tracking-widest text-foreground">
                  {project.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40 backdrop-blur-xs">
                  <div className="px-4 py-2 bg-foreground text-background font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2">
                    <Eye className="size-4" />
                    <span>Inspect Specs</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-2">
                    <span>{project.vehicle}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3" />
                      {project.location}
                    </span>
                  </div>
                  <h4 className="text-[length:var(--text-h3)] font-light uppercase tracking-tight [font-family:var(--font-heading)] mb-2">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-primary/90 mb-4">
                    {project.finish}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-mono text-foreground/60">
                  <span>Turnaround: {project.turnaround}</span>
                  <ArrowRight className="size-4 text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Spec Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-background/90 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-card border border-border/80 p-6 sm:p-8 lg:p-10 text-foreground overflow-hidden my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 text-foreground/60 hover:text-foreground hover:bg-muted border border-border/40 transition-all cursor-pointer"
              >
                <X className="size-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Interactive Before/After in Modal */}
                <div className="lg:col-span-7">
                  <BeforeAfterSlider
                    beforeImage={selectedProject.beforeImage}
                    afterImage={selectedProject.afterImage}
                    beforeLabel="Before Wrap"
                    afterLabel="After Transformation"
                    className="h-[300px] sm:h-[400px] w-full"
                  />
                  <p className="text-[11px] font-mono text-foreground/50 text-center mt-2">
                    Drag middle handle to compare factory vs wrapped atelier finish
                  </p>
                </div>

                {/* Right: Spec Details */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2 block">
                      {selectedProject.category} — {selectedProject.vehicle}
                    </span>
                    <h3 className="text-[length:var(--text-h2)] font-light uppercase tracking-tight [font-family:var(--font-heading)] mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-[length:var(--text-body)] text-foreground/80 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="p-3 bg-muted/50 border border-border/40 font-mono text-xs">
                        <span className="text-foreground/50 block">Applied Finish:</span>
                        <span className="text-foreground font-semibold">{selectedProject.finish}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 bg-muted/30 border border-border/40">
                          <span className="text-foreground/50 block">Turnaround:</span>
                          <span className="text-foreground">{selectedProject.turnaround}</span>
                        </div>
                        <div className="p-3 bg-muted/30 border border-border/40">
                          <span className="text-foreground/50 block">Studio:</span>
                          <span className="text-foreground">{selectedProject.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/50 mb-3">
                        Specification Highlights
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                            <ShieldCheck className="size-3.5 text-foreground" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest text-center hover:bg-foreground/90 transition-all font-semibold"
                  >
                    Request Quote For This Spec
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
