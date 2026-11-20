import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import { modelChapter, type ModelChapter } from "@/components/kit/modelPose";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const pad = (n: number) => String(n).padStart(2, "0");

type Testimonial = { quote: string; name: string; role?: string };

type TestimonialAxisCounterProps = {
  script?: string;
  ghost?: string;
  items?: Testimonial[];
  model?: ModelChapter;
  media?: "model" | "image";
  ariaLabel?: string;
  className?: string;
};

const EASE = [0.19, 1, 0.22, 1] as const;

const TestimonialAxisCounter = ({
  script,
  ghost,
  items = [
    { quote: "It feels finished from every angle. Nothing added, nothing missing.", name: "Claire Duval", role: "Collector, Paris" },
    { quote: "The quietest object on my desk, and the one everyone asks about.", name: "Marcus Lindqvist", role: "Architect, Stockholm" },
    { quote: "You can tell someone cared about the parts you never see.", name: "Aiko Tanaka", role: "Industrial designer, Tokyo" },
    { quote: "Delivered on time, built to last, and a pleasure to own.", name: "Daniel Okafor", role: "Founder, Lagos" },
  ],
  model,
  media = "model",
  ariaLabel,
  className,
}: TestimonialAxisCounterProps) => {
  const isModel = media === "model";
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: items.length > 1, duration: 32 });
  const [current, setCurrent] = useState(0);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    sync();
    emblaApi.on("select", sync).on("reInit", sync);
    return () => {
      emblaApi.off("select", sync).off("reInit", sync);
    };
  }, [emblaApi, sync]);

  const draw = (axis: "x" | "y", delay: number) => ({
    initial: reduce ? false : axis === "x" ? { scaleX: 0 } : { scaleY: 0 },
    whileInView: axis === "x" ? { scaleX: 1 } : { scaleY: 1 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: 1.6, ease: EASE, delay },
  });
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "0px 0px -15% 0px" },
    transition: { duration: kit.slow, ease: EASE, delay },
  });

  return (
    <section aria-label={ariaLabel ?? "Testimonials"} {...modelChapter(media === "model" ? model : undefined)} className={cn("relative overflow-x-clip py-[var(--section-space)] text-foreground", className)}>
      {ghost && (
        <p aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[length:calc(var(--text-display)*1.9)] leading-none text-accent/15 [font-family:var(--font-accent)]">
          {ghost}
        </p>
      )}
      {isModel && (
        <>
          <motion.div aria-hidden="true" {...draw("y", 0)} className="pointer-events-none absolute inset-y-0 left-[calc(50%-var(--container)/4)] hidden w-px origin-top bg-foreground/10 lg:block" />
          <motion.div
            aria-hidden="true"
            {...draw("x", 0.2)}
            className="pointer-events-none absolute inset-x-0 top-[calc(var(--section-space)+clamp(7.5rem,32vw,10.5rem))] h-px origin-left bg-foreground/10 lg:right-1/2 lg:top-1/2"
          />
        </>
      )}
      <div className={cn("relative mx-auto grid w-[var(--container)] grid-cols-1 items-center gap-[clamp(2rem,5vw,3rem)]", isModel && "lg:grid-cols-2 lg:gap-[var(--gap)]")}>
        {isModel && (
          <div aria-hidden="true" className="relative mx-auto h-[clamp(15rem,64vw,21rem)] w-full lg:h-[min(78svh,40rem)]">
            <motion.div {...draw("y", 0)} className="pointer-events-none absolute -top-[var(--section-space)] bottom-0 left-1/2 w-px origin-top bg-foreground/10 lg:hidden" />
            <motion.div {...fade(0.3)} className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
              <div className="absolute left-1/2 top-1/2 h-px w-[160%] -translate-x-1/2 rotate-[38deg] bg-foreground/[0.07]" />
              <div className="absolute left-1/2 top-1/2 h-px w-[160%] -translate-x-1/2 -rotate-[38deg] bg-foreground/[0.07]" />
            </motion.div>
            <div data-model-anchor className="absolute inset-y-0 left-1/2 aspect-[4/5] -translate-x-1/2" />
          </div>
        )}

        <div className={cn("relative z-20 flex min-w-0 flex-col items-center text-center", isModel && "lg:items-start lg:pl-[clamp(1rem,4vw,4rem)] lg:text-left")}>
          {!isModel && <motion.div aria-hidden="true" {...draw("y", 0)} className="mb-[clamp(1.5rem,2.6vw,2.5rem)] h-[clamp(4rem,8vw,7rem)] w-px origin-top bg-foreground/15" />}
          {script && (
            <motion.p {...fade(0)} className="mb-[clamp(1rem,1.6vw,1.5rem)] text-[length:var(--text-script)] leading-[0.9] text-accent [font-family:var(--font-accent)]">
              {script}
            </motion.p>
          )}
          <motion.div {...fade(0)} className="flex items-center gap-[0.75rem]">
            <svg aria-hidden="true" width="9" height="9" viewBox="0 0 8 8" fill="none" className="text-foreground">
              <path fill="currentColor" d="M3.5 0h1v8h-1z" />
              <path fill="currentColor" d="M8 3.5v1H0v-1z" />
            </svg>
            <p aria-hidden="true" className="whitespace-nowrap text-[length:var(--text-label)] leading-none tabular-nums text-foreground/40">{`${pad(current + 1)} / ${pad(items.length)}`}</p>
          </motion.div>

          <motion.div {...fade(0.15)} ref={emblaRef} className="mt-[clamp(1.5rem,2.6vw,2.5rem)] w-full cursor-grab overflow-hidden active:cursor-grabbing">
            <div className="flex touch-pan-y">
              {items.map((item, index) => (
                <figure
                  key={index}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} / ${items.length}`}
                  className={cn("flex min-w-0 shrink-0 grow-0 basis-full flex-col items-center", isModel && "lg:items-start")}
                >
                  <blockquote className="max-w-[16em] text-balance text-[length:var(--text-h2)] font-light leading-[var(--quote-leading,1.15)] [text-transform:var(--display-case,uppercase)] tracking-[0.06em] [font-family:var(--font-heading)] [overflow-wrap:anywhere]">
                    <p>{item.quote}</p>
                  </blockquote>
                  <figcaption className={cn("mt-[clamp(1.5rem,2.6vw,2.5rem)] flex flex-col items-center gap-[0.375rem]", isModel && "lg:items-start")}>
                    <p className="text-[length:var(--text-small)] leading-[1.2]">{item.name}</p>
                    {item.role && <p className="text-[length:var(--text-small)] leading-[1.2] text-foreground/40">{item.role}</p>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </motion.div>

          {items.length > 1 && (
            <motion.div {...fade(0.3)} className="mt-[clamp(2rem,3.4vw,3rem)] flex items-center gap-[0.75rem]">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => emblaApi?.scrollPrev()}
                className="flex size-[2.75rem] items-center justify-center rounded-full border border-foreground/25 transition-colors duration-300 hover:border-foreground/60"
              >
                <svg aria-hidden="true" width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M13 5H1M5 1 1 5l4 4" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => emblaApi?.scrollNext()}
                className="flex size-[2.75rem] items-center justify-center rounded-full border border-foreground/25 transition-colors duration-300 hover:border-foreground/60"
              >
                <svg aria-hidden="true" width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialAxisCounter;
