import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import { modelChapter, type ModelChapter } from "@/components/kit/modelPose";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FaqItem = { question: string; answer: string };

type FaqTrackedRowsProps = {
  counter?: string;
  title?: string;
  script?: string;
  items?: FaqItem[];
  model?: ModelChapter;
  media?: "model" | "image";
  ariaLabel?: string;
  className?: string;
};

const EASE = [0.19, 1, 0.22, 1] as const;

const RAYS = [
  { x1: 50, y1: 0, x2: 50, y2: 100 },
  { x1: 0, y1: 50, x2: 100, y2: 50 },
  { x1: 50, y1: 50, x2: 15, y2: 0 },
  { x1: 50, y1: 50, x2: 85, y2: 0 },
  { x1: 50, y1: 50, x2: 20, y2: 100 },
  { x1: 50, y1: 50, x2: 80, y2: 100 },
];

function LetterTitle({ title }: { title: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px 0px 0px" });
  const show = reduce || inView;
  const words = title.split(/\s+/).filter(Boolean);
  const total = Math.max(1, title.replace(/\s/g, "").length);
  let index = 0;

  return (
    <h2 ref={ref} className="mt-[clamp(0.875rem,1.1vw,1.25rem)] flex flex-wrap gap-x-[0.35em] text-left text-[length:min(var(--text-h1),11vw)] leading-[1] [text-transform:var(--display-case,uppercase)] tracking-[0.05em]">
      <div className="sr-only">{title}</div>
      {words.map((word, wi) => (
        <div key={wi} aria-hidden="true" className="flex max-w-full flex-wrap">
          {Array.from(word).map((char) => {
            const i = index++;
            const mix = Math.round(78 - (i / Math.max(1, total - 1)) * 62);
            return (
              <motion.div
                key={i}
                className="inline-block"
                style={{ color: `color-mix(in srgb, var(--foreground) ${mix}%, var(--tint-3))` }}
                initial={reduce ? false : { y: "-50%", opacity: 0 }}
                animate={show ? { y: "0%", opacity: 1 } : { y: "-50%", opacity: 0 }}
                transition={{ duration: 1, ease: EASE, delay: i * 0.04 }}
              >
                {char}
              </motion.div>
            );
          })}
        </div>
      ))}
    </h2>
  );
}

const FaqTrackedRows = ({
  counter,
  title = "Questions",
  script,
  items = [
    { question: "How long does delivery take?", answer: "Orders ship within two working days from our studio and arrive in three to five days across Europe. Every parcel is insured and tracked from the moment it leaves." },
    { question: "Can I return or exchange my order?", answer: "Yes. You have 30 days to return or exchange any unused piece in its original packaging. Returns are free, and refunds reach your account within a week." },
    { question: "What does the warranty cover?", answer: "Every product carries a five year warranty against defects in materials and craftsmanship. Register it online with your order number to activate it." },
    { question: "Do you offer servicing and repairs?", answer: "Our service team handles care, repairs and replacement parts for the life of the product. Book a service online and we collect it from your door." },
    { question: "Can I see it in person first?", answer: "Visit our showroom or book a private appointment. We will have the piece and its finishes ready for you to compare side by side." },
    { question: "Do you ship internationally?", answer: "We ship to over 40 countries. Duties and taxes are shown at checkout, so there are no surprises on arrival." },
  ],
  model,
  media = "model",
  ariaLabel,
  className,
}: FaqTrackedRowsProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "0px 0px 0px 0px" },
    transition: { duration: kit.slow, ease: EASE, delay },
  });

  return (
    <section aria-label={ariaLabel ?? title} {...modelChapter(media === "model" ? model : undefined)} className={cn("relative overflow-x-clip py-[var(--section-space)] text-foreground", className)}>
      <div className={cn("relative mx-auto grid w-[var(--container)]", media === "model" ? "gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-2 lg:items-center lg:gap-[clamp(2rem,4vw,4rem)]" : "max-w-[48rem]")}>
        {media === "model" && (
        <div aria-hidden="true" className="relative order-first mx-auto aspect-square w-full max-w-[24rem] lg:order-last lg:aspect-auto lg:h-[min(80svh,46rem)] lg:w-full lg:max-w-none">
          <motion.svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            initial={reduce ? false : "hidden"}
            whileInView="shown"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            className="pointer-events-none absolute inset-0 h-full w-full text-foreground/10"
          >
            {RAYS.map((ray, index) => (
              <motion.line
                key={index}
                {...ray}
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                variants={{ hidden: { pathLength: 0 }, shown: { pathLength: 1 } }}
                transition={{ duration: kit.slow, ease: EASE, delay: index * 0.06 }}
              />
            ))}
          </motion.svg>
          <div data-model-anchor className="absolute inset-[6%]" />
        </div>
        )}
        <div className={cn("relative z-20 flex min-w-0 flex-col", media === "model" && "lg:max-w-[30rem]")}>
        <motion.div {...fade(0)} className="flex items-center">
          <svg aria-hidden="true" width="9" height="9" viewBox="0 0 8 8" fill="none" className="text-foreground">
            <path fill="currentColor" d="M3.5 0h1v8h-1z" />
            <path fill="currentColor" d="M8 3.5v1H0v-1z" />
          </svg>
        </motion.div>
        <motion.p {...fade(0.1)} aria-hidden={counter ? undefined : true} className="mt-[clamp(0.5rem,0.8vw,0.75rem)] text-[length:var(--text-label)] leading-none tabular-nums text-foreground/40">
          {counter ?? `01 / ${String(items.length).padStart(2, "0")}`}
        </motion.p>
        {script && (
          <motion.p {...fade(0.1)} className="mt-[clamp(0.75rem,1vw,1rem)] text-[length:var(--text-script)] leading-[0.9] text-accent [font-family:var(--font-accent)]">
            {script}
          </motion.p>
        )}
        <LetterTitle title={title} />

        <ul className="mt-[clamp(1.5rem,3vw,3rem)] w-full border-b border-foreground/15">
          {items.map((item, index) => {
            const isOpen = open === index;
            const panelId = `${baseId}-${index}`;
            return (
              <motion.li
                key={index}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 0px 0px" }}
                transition={{ duration: kit.slow, ease: EASE, delay: Math.min(index, 3) * 0.06 }}
                className="border-t border-foreground/15"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="grid w-full cursor-pointer grid-cols-[2.25rem_minmax(0,1fr)_auto] items-baseline gap-x-[var(--gap)] py-[clamp(1rem,1.4vw,1.25rem)] text-left"
                >
                  <p aria-hidden="true" className="text-[length:var(--text-label)] leading-none tabular-nums text-foreground/40">{String(index + 1).padStart(2, "0")}</p>
                  <p className="text-balance text-[length:var(--text-body)] leading-[1.3] [overflow-wrap:anywhere]">{item.question}</p>
                  <svg
                    aria-hidden="true"
                    width="11"
                    height="11"
                    viewBox="0 0 8 8"
                    fill="none"
                    className={cn("self-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]", isOpen && "rotate-45")}
                  >
                    <path fill="currentColor" d="M3.5 0h1v8h-1z" />
                    <path fill="currentColor" d="M8 3.5v1H0v-1z" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: kit.base, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-[clamp(1.25rem,1.8vw,1.75rem)] pl-6 sm:pl-[calc(2.25rem+var(--gap))] pr-[calc(11px+var(--gap))] text-[length:var(--text-small)] leading-[1.5] text-foreground/70">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqTrackedRows;
