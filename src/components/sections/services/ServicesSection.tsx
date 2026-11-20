import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Shield, Sparkles, Sliders, Layers, Sun, CheckCircle2, ArrowUpRight, Clock, Award } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: typeof Shield;
  description: string;
  finishes: string[];
  keyFeatures: string[];
  turnaround: string;
  warranty: string;
  imageSrc: string;
  imageAlt: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "full-wraps",
    title: "Full Car Wraps",
    subtitle: "Complete Vehicle Color & Texture Transformation",
    category: "Full Body Customization",
    icon: Sparkles,
    description:
      "Transform your vehicle's aesthetic with seamless full body wrapping. Every panel, handle, and edge is meticulously prepared and wrapped to ensure a factory-level finish with zero paint exposure.",
    finishes: ["Gloss", "Matte", "Satin", "Metallic", "Color-Shift", "Velvet & Textured"],
    keyFeatures: [
      "Precision door jamb & handle edge tucking",
      "Protects original factory paint underneath",
      "Reversible at any time without residue",
      "Premium European vinyl (3M, Avery Dennison, Inozetek)"
    ],
    turnaround: "3 - 5 Business Days",
    warranty: "5-Year Atelier Guarantee",
    imageSrc: "https://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342620.jpg",
    imageAlt: "Technician applying precision full wrap to luxury supercar body"
  },
  {
    id: "partial-wraps",
    title: "Partial Wraps & Accents",
    subtitle: "Targeted Styling for Roofs, Hoods & Aero Accents",
    category: "Panel Styling",
    icon: Layers,
    description:
      "Elevate key features of your automobile with high-contrast panel wraps. From gloss black roof contrast options to forged carbon bonnets and custom racing stripes, create a distinct profile.",
    finishes: ["Gloss Piano Black", "Forged Carbon", "Satin Dark Grey", "Custom Striping"],
    keyFeatures: [
      "Gloss Black panoramic roof styling",
      "Carbon fiber bonnet & spoiler accents",
      "Custom plotter-cut stripes & graphics",
      "Knifeless tape technology — 0% blade risk"
    ],
    turnaround: "1 - 2 Business Days",
    warranty: "3-Year Atelier Guarantee",
    imageSrc: "https://images.pexels.com/photos/16284837/pexels-photo-16284837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "High contrast partial roof and bonnet wrap on luxury vehicle"
  },
  {
    id: "chrome-delete",
    title: "Chrome Delete",
    subtitle: "Stealth Blackout Treatments for Window Trims & Badges",
    category: "Styling Detail",
    icon: Sliders,
    description:
      "Replace factory brightwork with a refined stealth blackout look. We wrap window surrounds, front kidney/mesh grilles, side vents, exhaust surrounds, and badging in premium dark vinyl.",
    finishes: ["Satin Obsidian Black", "Gloss Piano Black", "Matte Charcoal"],
    keyFeatures: [
      "Full window trim blackout kit",
      "Front grille & kidney surround wrapping",
      "Badges, emblems & exhaust tip accents",
      "Durable against Swiss winter salt & washing"
    ],
    turnaround: "1 Business Day",
    warranty: "3-Year Atelier Guarantee",
    imageSrc: "https://images.pexels.com/photos/257988/pexels-photo-257988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Sleek chrome delete blackout trim on modern performance car"
  },
  {
    id: "ppf",
    title: "Paint Protection Film (PPF)",
    subtitle: "Invisible Self-Healing Polyurethane Armor",
    category: "Paint Protection",
    icon: Shield,
    description:
      "Shield your vehicle's factory paint from stone chips, gravel, road debris, bug splatter, and parking scratches with optically clear, self-healing 200-micron polyurethane film.",
    finishes: ["Optically Clear Gloss PPF", "Stealth Satin Matte PPF", "Hydrophobic Coating"],
    keyFeatures: [
      "Heat-activated self-healing top layer",
      "Computer CAD pre-cut patterns for perfect fitment",
      "Full Front Track Package or 100% Full Body",
      "10-Year anti-yellowing & anti-cracking warranty"
    ],
    turnaround: "2 - 4 Business Days",
    warranty: "10-Year Manufacturer Warranty",
    imageSrc: "https://images.pexels.com/photos/10162529/pexels-photo-10162529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Invisible paint protection film applied to front bumper of sportscar"
  },
  {
    id: "window-tinting",
    title: "Window Tinting",
    subtitle: "Ceramic Solar Heat Rejection & Privacy Shield",
    category: "Glass Protection",
    icon: Sun,
    description:
      "Enhance cabin privacy and eliminate interior solar heat buildup with high-performance nano-ceramic glass tinting. Compliant with Canton of Zurich road traffic regulations.",
    finishes: ["Ceramic 5% Privacy", "Ceramic 15% Dark", "Ceramic 35% Medium", "Ceramic 70% Light"],
    keyFeatures: [
      "Up to 99% UV ray radiation protection",
      "92% Infrared thermal heat rejection",
      "100% Canton of Zurich road legal compliance",
      "Non-metallic — no signal interference with mobile/GPS"
    ],
    turnaround: "4 - 6 Hours",
    warranty: "Lifetime Glass Tint Warranty",
    imageSrc: "https://images.pexels.com/photos/40046464/pexels-photo-40046464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Ceramic window tinting on high end sports coupe"
  }
];

export interface ServicesSectionProps {
  className?: string;
  onSelectService?: (serviceId: string) => void;
}

export default function ServicesSection({ className, onSelectService }: ServicesSectionProps) {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState<string>("full-wraps");
  const selectedService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <section id="services" className={cn("relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40", className)}>
      <div className="mx-auto w-[var(--container)]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Award className="size-3.5 text-primary" />
              <span>Zurich Atelier Services</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              Precision Engineering <br />
              <span className="text-foreground/50">For Automotive Perfection</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/60 max-w-md">
            Five specialized styling and protection services executed in our dust-free Canton of Zurich studio using state-of-the-art materials.
          </p>
        </div>

        {/* Service Navigation Tabs */}
        <div className="flex flex-nowrap overflow-x-auto scrollbar-none pb-4 mb-10 gap-2 border-b border-border/40">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "flex items-center gap-2.5 px-5 py-3 rounded-none whitespace-nowrap text-[length:var(--text-small)] font-mono uppercase tracking-wider transition-all duration-300 border border-transparent cursor-pointer",
                  isActive
                    ? "bg-foreground text-background font-semibold border-foreground"
                    : "bg-muted/30 text-foreground/70 hover:bg-muted hover:text-foreground border-border/30"
                )}
              >
                <Icon className={cn("size-4", isActive ? "text-background" : "text-foreground/50")} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase */}
        <motion.div
          key={selectedService.id}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          {/* Left Column: Details & Features */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 lg:p-10 border border-border/60 bg-card/60 backdrop-blur-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[length:var(--text-label)] font-mono uppercase tracking-widest text-primary/80">
                  {selectedService.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[length:var(--text-small)] text-foreground/60 font-mono">
                  <Clock className="size-3.5" />
                  {selectedService.turnaround}
                </span>
              </div>

              <h3 className="text-[length:var(--text-h2)] font-light uppercase tracking-tight [font-family:var(--font-heading)] mb-2">
                {selectedService.title}
              </h3>
              <p className="text-[length:var(--text-body)] text-foreground/70 mb-6 font-mono text-xs uppercase tracking-wider">
                {selectedService.subtitle}
              </p>

              <p className="text-[length:var(--text-body-lg)] text-foreground/80 leading-relaxed mb-8">
                {selectedService.description}
              </p>

              {/* Finishes Badges */}
              <div className="mb-8">
                <h4 className="text-[length:var(--text-small)] font-mono uppercase tracking-wider text-foreground/50 mb-3">
                  Available Finishes & Textures
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.finishes.map((finish, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[length:var(--text-small)] bg-muted/80 text-foreground/90 border border-border/60 font-mono"
                    >
                      {finish}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="mb-8">
                <h4 className="text-[length:var(--text-small)] font-mono uppercase tracking-wider text-foreground/50 mb-3">
                  Craftsmanship Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="size-4 text-foreground shrink-0 mt-0.5" />
                      <span className="text-[length:var(--text-small)]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Shield className="size-4 text-foreground/70" />
                <span className="text-[length:var(--text-small)] font-mono text-foreground/70">{selectedService.warranty}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#customizer"
                  onClick={() => onSelectService && onSelectService(selectedService.id)}
                  className="btn-link inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all"
                >
                  <span>Customize in 3D</span>
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border/80 text-foreground font-mono text-xs uppercase tracking-widest hover:bg-muted transition-all"
                >
                  <span>Inquire Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo & Interactive Spec Box */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-border/60 bg-card min-h-[350px] lg:min-h-full flex flex-col justify-end">
            <img
              src={selectedService.imageSrc}
              alt={selectedService.imageAlt}
              className="absolute inset-0 size-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

            <div className="relative z-10 p-6 lg:p-8 backdrop-blur-md bg-background/70 border-t border-border/40">
              <div className="flex items-center justify-between text-[length:var(--text-label)] font-mono uppercase tracking-widest text-foreground/60 mb-2">
                <span>Atelier Spec: {selectedService.id.toUpperCase()}</span>
                <span>Zurich Studio</span>
              </div>
              <p className="text-[length:var(--text-h3)] [font-family:var(--font-heading)] font-light text-foreground">
                {selectedService.title}
              </p>
              <p className="text-xs font-mono text-foreground/70 mt-1">
                Hand-fitted with micro-precision in climate-controlled clean room environment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
