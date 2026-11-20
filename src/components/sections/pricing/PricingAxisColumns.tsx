import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import { modelChapter, type ModelChapter } from "@/components/kit/modelPose";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Plan = {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features?: string[];
  button?: { text: string; href: string };
};

type PricingAxisColumnsProps = {
  counter?: string;
  title?: string;
  script?: string;
  ghost?: string;
  description?: string;
  items?: Plan[];
  model?: ModelChapter;
  media?: "model" | "image";
  ariaLabel?: string;
  className?: string;
};

const EASE = [0.19, 1, 0.22, 1] as const;

const ROWS = ["lg:row-start-1", "lg:row-start-2", "lg:row-start-3", "lg:row-start-4", "lg:row-start-5", "lg:row-start-6"];
const SPANS = ["", "", "lg:row-span-2", "lg:row-span-3", "lg:row-span-4", "lg:row-span-5", "lg:row-span-6"];
const LEFT = "lg:col-start-1 lg:items-end lg:self-center lg:text-right";
const RIGHT = "lg:col-start-3 lg:items-start lg:self-center";

const PricingAxisColumns = ({
  counter = "03 plans",
  title = "Ownership",
  script,
  ghost,
  description = "Three ways to own it. Every edition ships with free delivery and personal care.",
  items = [
    { name: "Essential", price: "€1,200", features: ["Standard finish", "Two year warranty", "Free delivery"], button: { text: "Choose Essential", href: "#contact" } },
    { name: "Signature", price: "€2,400", features: ["Four finishes", "Five year warranty", "Personal fitting", "Engraving"], button: { text: "Choose Signature", href: "#contact" } },
    { name: "Atelier", price: "€4,800", features: ["Custom materials", "Lifetime care", "Studio visit"], button: { text: "Book a visit", href: "#contact" } },
  ],
  model,
  media = "model",
  ariaLabel,
  className,
}: PricingAxisColumnsProps) => {
  const isModel = media === "model";
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const plans = items;
  const half = Math.ceil(plans.length / 2);
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "0px 0px 0px 0px" },
    transition: { duration: kit.slow, ease: EASE, delay },
  });
  const draw = (axis: "x" | "y", delay: number) => ({
    initial: reduce ? false : axis === "x" ? { scaleX: 0 } : { scaleY: 0 },
    whileInView: axis === "x" ? { scaleX: 1 } : { scaleY: 1 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: 1.6, ease: EASE, delay },
  });

  return (
    <section aria-label={ariaLabel ?? title ?? "Pricing"} {...modelChapter(media === "model" ? model : undefined)} className={cn("relative overflow-x-clip py-[var(--section-space)] text-foreground", className)}>
      {ghost && (
        <p aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[calc(var(--section-space)+clamp(3rem,6vw,5rem))] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[length:calc(var(--text-display)*1.7)] leading-none text-accent/15 [font-family:var(--font-accent)]">
          {ghost}
        </p>
      )}
      <div className="relative mx-auto flex w-[var(--container)] flex-col items-center">
        <motion.div {...fade(0)} className="flex items-center justify-center">
          <svg aria-hidden="true" width="9" height="9" viewBox="0 0 8 8" fill="none" className="text-foreground">
            <path fill="currentColor" d="M3.5 0h1v8h-1z" />
            <path fill="currentColor" d="M8 3.5v1H0v-1z" />
          </svg>
        </motion.div>
        {counter && (
          <motion.p {...fade(0.1)} className="mt-[clamp(0.5rem,0.8vw,0.75rem)] whitespace-nowrap text-[length:var(--text-label)] leading-none text-foreground/40">
            {counter}
          </motion.p>
        )}
        {script && (
          <motion.p {...fade(0.1)} className="mt-[clamp(0.75rem,1vw,1rem)] text-[length:var(--text-script)] leading-[0.9] text-accent [font-family:var(--font-accent)]">
            {script}
          </motion.p>
        )}
        {title && (
          <div className="-mb-[var(--mask-pad-b,0.15em)] overflow-hidden pb-[var(--mask-pad-b,0.15em)] pt-[var(--mask-pad-t,0px)] [margin-top:calc(clamp(0.875rem,1.1vw,1.25rem)-var(--mask-pad-t,0px))]">
            <motion.h2
              initial={reduce ? false : { y: "150%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1.2, ease: EASE }}
              className="bg-[linear-gradient(90deg,var(--foreground),var(--tint-3))] bg-clip-text text-balance text-center text-[length:min(var(--text-h1),11vw)] font-light leading-[1] [text-transform:var(--display-case,uppercase)] tracking-[0.05em] text-transparent [font-family:var(--font-heading)] [overflow-wrap:anywhere]"
            >
              {title}
            </motion.h2>
          </div>
        )}
        {description && (
          <motion.p {...fade(0.3)} className="mt-[clamp(1rem,1.4vw,1.25rem)] max-w-[22rem] text-balance text-center text-[length:var(--text-small)] leading-[1.4] text-foreground/50">
            {description}
          </motion.p>
        )}
      </div>

      <div className="relative mt-[clamp(1.5rem,3vw,3rem)]">
        {isModel && (
          <>
            <motion.div aria-hidden="true" {...draw("y", 0.1)} className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px origin-top bg-foreground/10 lg:block" />
            <motion.div aria-hidden="true" {...fade(0.3)} className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
              <div className="absolute left-1/2 top-[clamp(11rem,17vw,17rem)] h-px w-[200vmax] -translate-x-1/2 rotate-[24deg] bg-foreground/[0.06]" />
              <div className="absolute left-1/2 top-[clamp(11rem,17vw,17rem)] h-px w-[200vmax] -translate-x-1/2 -rotate-[24deg] bg-foreground/[0.06]" />
            </motion.div>
          </>
        )}

        <div className={cn("relative mx-auto grid w-[var(--container)] grid-cols-1", isModel ? "lg:grid-cols-[minmax(0,1fr)_clamp(16rem,30vw,30rem)_minmax(0,1fr)]" : "lg:auto-cols-fr lg:grid-flow-col")}>
          {isModel && (
            <>
              <motion.div aria-hidden="true" {...draw("x", 0.2)} className="pointer-events-none absolute left-1/2 top-[clamp(11rem,17vw,17rem)] hidden h-px w-screen -translate-x-1/2 bg-foreground/10 lg:block" />
              <div data-model-anchor className={cn("relative mx-auto aspect-[4/5] h-[clamp(18rem,80vw,26rem)] lg:col-start-2 lg:row-start-1 lg:h-[clamp(22rem,34vw,34rem)] lg:self-center", SPANS[half])} />
            </>
          )}
          {plans.map((plan, index) => {
            const left = isModel && index < half;
            const slot = isModel
              ? cn(left ? LEFT : RIGHT, ROWS[left ? index : index - half])
              : "lg:border-l lg:border-t lg:px-[clamp(1.25rem,2.5vw,2.5rem)] lg:py-[clamp(2rem,3vw,3rem)] lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0";
            return (
              <motion.div
                key={index}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 0px 0px" }}
                transition={{ duration: kit.slow, ease: EASE, delay: 0.1 + index * 0.06 }}
                className={cn("relative z-20 flex min-w-0 flex-col items-start border-t border-foreground/15 py-[clamp(1.75rem,6vw,2.25rem)] lg:border-t-0 lg:py-[clamp(0.75rem,1.5vw,1.5rem)]", slot)}
              >
                <div className={cn("flex items-center gap-[clamp(0.75rem,1vw,1rem)]", left && "lg:flex-row-reverse")}>
                  {isModel && <div aria-hidden="true" className="hidden h-px w-[clamp(2rem,5vw,5rem)] bg-foreground/25 lg:block" />}
                  <div className="flex gap-[0.25em] text-[length:var(--text-label)] leading-none text-foreground/40">
                    <p aria-hidden="true">{String(index + 1).padStart(2, "0")} /</p>
                    <p>{plan.name}</p>
                  </div>
                </div>
                <div className={cn("mt-[clamp(0.875rem,1.2vw,1.125rem)] flex flex-wrap items-baseline gap-x-[0.5rem] gap-y-1", left && "lg:flex-row-reverse")}>
                  <p className="whitespace-nowrap text-[length:clamp(2.5rem,4.1667vw,4.5rem)] font-light leading-[0.9] tracking-[0.02em] [font-family:var(--font-heading)]">{plan.price}</p>
                  {plan.period && <p className="whitespace-nowrap text-[length:var(--text-small)] leading-none text-foreground/40">{plan.period}</p>}
                </div>
                {plan.description && <p className="mt-[clamp(0.875rem,1.2vw,1rem)] max-w-[15rem] text-balance text-[length:max(0.75rem,0.8333vw)] leading-[1.25] text-foreground/40">{plan.description}</p>}
                {plan.features && plan.features.length > 0 && (
                  <ul className="mt-[clamp(1rem,1.4vw,1.25rem)] flex flex-col gap-[0.375rem]">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="text-[length:max(0.75rem,0.8333vw)] leading-[1.25] [overflow-wrap:anywhere]">
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {plan.button && (
                  <a href={plan.button.href} className="btn-link mt-[clamp(1.25rem,1.8vw,1.75rem)]">
                    <p className="btn-label">{plan.button.text}</p>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingAxisColumns;
