import { Shield, Award, Sparkles, MapPin, Lock } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

export default function AboutSection() {
  const { t } = useLanguage();

  const icons = [Shield, Sparkles, Lock, MapPin];

  return (
    <section id="about" className="relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40 overflow-x-clip">
      <div className="mx-auto w-[var(--container)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Award className="size-3.5 text-primary" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9] mb-6">
              {t.about.titleLine1} <br />
              <span className="text-foreground/50">{t.about.titleLine2}</span>
            </h2>

            <p className="text-[length:var(--text-body-lg)] text-foreground/80 leading-relaxed mb-6">
              {t.about.p1}
            </p>

            <p className="text-[length:var(--text-body)] text-foreground/60 leading-relaxed mb-8">
              {t.about.p2}
            </p>

            {/* Atelier Standards Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {t.about.checklists.map((item, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <div key={index} className="flex items-start gap-3 p-4 border border-border/40 bg-card/40">
                    <IconComponent className="size-5 text-foreground shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">{item.title}</h4>
                      <p className="text-xs text-foreground/60 mt-1">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Atelier Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40">
              <div>
                <span className="block text-2xl sm:text-3xl font-light [font-family:var(--font-heading)] text-foreground">{t.about.stats.v1}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">{t.about.stats.l1}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-light [font-family:var(--font-heading)] text-foreground">{t.about.stats.v2}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">{t.about.stats.l2}</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-light [font-family:var(--font-heading)] text-foreground">{t.about.stats.v3}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">{t.about.stats.l3}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photograph */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-border/60 bg-card aspect-[4/5] min-h-[340px]">
            <img
              src="https://images.pexels.com/photos/5895627/pexels-photo-5895627.jpeg?auto=compress&w=1200"
              alt="Atelier technician inspecting paint finish at JD Car Wrapping Studio Zurich"
              className="absolute inset-0 size-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-background/80 border border-border/60">
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary block mb-1">
                {t.about.imageTag}
              </span>
              <p className="text-sm font-mono text-foreground">
                {t.about.imageSub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
