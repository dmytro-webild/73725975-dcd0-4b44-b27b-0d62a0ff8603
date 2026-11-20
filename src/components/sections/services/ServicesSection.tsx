import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Shield, Sparkles, Sliders, Layers, Sun, CheckCircle2, ArrowUpRight, Clock, Award } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const ICONS_AND_MEDIA = [
  {
    id: "full-wraps",
    icon: Sparkles,
    imageSrc: "https://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342620.jpg?_wi=2",
    imageAlt: "Technician applying precision full wrap to luxury supercar body"
  },
  {
    id: "partial-wraps",
    icon: Layers,
    imageSrc: "https://images.pexels.com/photos/16284837/pexels-photo-16284837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "High contrast partial roof and bonnet wrap on luxury vehicle"
  },
  {
    id: "chrome-delete",
    icon: Sliders,
    imageSrc: "https://images.pexels.com/photos/257988/pexels-photo-257988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Sleek chrome delete blackout trim on modern performance car"
  },
  {
    id: "ppf",
    icon: Shield,
    imageSrc: "https://images.pexels.com/photos/10162529/pexels-photo-10162529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Invisible paint protection film applied to front bumper of sportscar"
  },
  {
    id: "window-tinting",
    icon: Sun,
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
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("full-wraps");

  const services = t.services.items.map((item) => {
    const mediaObj = ICONS_AND_MEDIA.find((m) => m.id === item.id) || ICONS_AND_MEDIA[0];
    return {
      ...item,
      icon: mediaObj.icon,
      imageSrc: mediaObj.imageSrc,
      imageAlt: mediaObj.imageAlt,
    };
  });

  const selectedService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section id="services" className={cn("relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40", className)}>
      <div className="mx-auto w-[var(--container)]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Award className="size-3.5 text-primary" />
              <span>{t.services.badge}</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              {t.services.titleLine1} <br />
              <span className="text-foreground/50">{t.services.titleLine2}</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/60 max-w-md">
            {t.services.description}
          </p>
        </div>

        {/* Service Navigation Tabs */}
        <div className="flex flex-nowrap overflow-x-auto scrollbar-none pb-4 mb-10 gap-2 border-b border-border/40">
          {services.map((service) => {
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
                  {t.services.turnaroundLabel}: {selectedService.turnaround}
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
                  {t.services.finishesTitle}
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
                  {t.services.craftsmanshipTitle}
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
                  <span>{t.services.customize3d}</span>
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border/80 text-foreground font-mono text-xs uppercase tracking-widest hover:bg-muted transition-all"
                >
                  <span>{t.services.inquireNow}</span>
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
