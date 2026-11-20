import { motion } from "motion/react";
import { MessageSquare, FileText, Wrench, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

export default function HowItWorksSection() {
  const { t } = useLanguage();
  const howItWorks = t.howItWorks;

  const icons = [MessageSquare, FileText, Wrench, ShieldCheck];

  return (
    <section id="how-it-works" className="relative py-[var(--section-space)] bg-background text-foreground border-t border-border/40 overflow-x-clip">
      <div className="mx-auto w-[var(--container)] relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/30 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Sparkles className="size-3.5 text-primary" />
              <span>{howItWorks.badge}</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.95]">
              {howItWorks.titleLine1} <br />
              <span className="text-foreground/50">{howItWorks.titleLine2}</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/70 max-w-md">
            {howItWorks.description}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorks.steps.map((step, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative border border-border/60 bg-card p-6 sm:p-8 flex flex-col justify-between hover:border-foreground/50 transition-all duration-300"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-border/40">
                    <span className="font-mono text-3xl font-light text-foreground/30 group-hover:text-foreground transition-colors">
                      {step.number}
                    </span>
                    <div className="size-10 rounded-full border border-border/60 bg-muted/40 flex items-center justify-center text-foreground/80 group-hover:bg-foreground group-hover:text-background transition-all">
                      <Icon className="size-4 shrink-0" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-mono text-sm uppercase font-bold tracking-wider text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[length:var(--text-small)] text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtag/Highlight */}
                <div className="mt-6 pt-4 border-t border-border/30 flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-primary/80">
                  <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-6 sm:p-8 border border-border/60 bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground mb-1">
              {howItWorks.ctaTitle}
            </h4>
            <p className="text-xs font-mono text-foreground/60">
              {howItWorks.ctaSubtitle}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-foreground bg-foreground text-background font-mono text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-foreground transition-all duration-300 shrink-0"
          >
            <span>{howItWorks.ctaButton}</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
