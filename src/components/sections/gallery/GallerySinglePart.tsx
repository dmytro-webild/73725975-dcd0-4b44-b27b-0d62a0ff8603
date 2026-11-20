import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import { modelChapter, type ModelChapter } from "@/components/kit/modelPose";
import WatchProductPhoto from "@/components/kit/WatchProductPhoto";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type GallerySinglePartProps = {
  counter?: string;
  title?: string;
  script?: string;
  ghost?: string;
  description?: string;
  model?: ModelChapter;
  media?: "model" | "image";
  productImageSrc?: string;
  productImageAlt?: string;
  className?: string;
};

const EASE = [0.19, 1, 0.22, 1] as const;

function LetterTitle({ title }: { title: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px 0px 0px" });
  const show = reduce || inView;
  const words = title.split(/\s+/).filter(Boolean);
  const total = Math.max(1, title.replace(/\s/g, "").length);
  let index = 0;

  return (
    <h2 ref={ref} className="mt-[clamp(0.875rem,1.1vw,1.25rem)] flex flex-col items-center text-center text-[length:min(calc(var(--text-h1)*1.4),13vw)] leading-[1] [text-transform:var(--display-case,uppercase)] tracking-[0.05em]">
      <div className="sr-only">{title}</div>
      {words.map((word, wi) => (
        <div key={wi} aria-hidden="true" className="flex max-w-full flex-wrap justify-center">
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

export default function GallerySinglePart({
  counter = "34 / 62",
  title = "Elegant Contours",
  script,
  ghost,
  description = "Subtle curves and beveled edges highlight the craftsmanship and create a refined visual depth",
  model,
  media = "model",
  productImageSrc = "https://images.pexels.com/photos/5895627/pexels-photo-5895627.jpeg?auto=compress&w=1200",
  productImageAlt = "Black dial watch beside watchmaker's tools",
  className,
}: GallerySinglePartProps) {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
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
    <section aria-label={title} {...modelChapter(media === "model" ? model : undefined)} className={cn("relative flex h-svh min-h-[40rem] flex-col overflow-x-clip pb-[clamp(1.5rem,3vw,3rem)] pt-[clamp(4.5rem,5.5vw,5.5rem)] text-foreground", media === "image" && "h-auto min-h-0 py-[var(--section-space)]", className)}>
      <motion.div aria-hidden="true" {...draw("y", 0)} className="pointer-events-none absolute inset-y-0 left-1/2 w-px origin-top bg-foreground/10" />
      {ghost && (
        <p aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[clamp(6rem,14vw,12rem)] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[length:calc(var(--text-display)*1.7)] leading-none text-accent/15 [font-family:var(--font-accent)]">
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
          <motion.p {...fade(0.1)} className="mt-[clamp(0.5rem,0.8vw,0.75rem)] px-2 text-[length:var(--text-label)] leading-none text-foreground/40">
            {counter}
          </motion.p>
        )}
        {script && (
          <motion.p {...fade(0.1)} className="mt-[clamp(0.75rem,1vw,1rem)] text-[length:var(--text-script)] leading-[0.9] text-accent [font-family:var(--font-accent)]">
            {script}
          </motion.p>
        )}
        <LetterTitle title={title} />
        {description && (
          <motion.p {...fade(0.2)} className="mt-[clamp(1rem,1.4vw,1.5rem)] max-w-[20rem] text-balance text-center text-[length:var(--text-small)] leading-[1.5] text-foreground/70">
            {description}
          </motion.p>
        )}
      </div>

      <div aria-hidden="true" className={cn("relative mx-auto mt-[clamp(1.5rem,3vw,3rem)] min-h-0 w-[var(--container)] flex-1", media === "image" && "h-[clamp(24rem,110vw,30rem)] flex-none lg:h-[min(76svh,44rem)]")}>
        <motion.div {...draw("x", 0.2)} className="pointer-events-none absolute left-1/2 top-1/2 h-px w-screen -translate-x-1/2 bg-foreground/10" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[150vmax] -translate-x-1/2 rotate-[38deg] bg-foreground/[0.07]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[150vmax] -translate-x-1/2 -rotate-[38deg] bg-foreground/[0.07]" />
        {media === "model" ? (
          <div data-model-anchor className="absolute inset-0" />
        ) : (
          <WatchProductPhoto
            imageSrc={productImageSrc}
            imageAlt={productImageAlt}
            className="absolute left-1/2 top-0 aspect-[4/5] h-full w-auto max-w-full -translate-x-1/2 rounded-none"
          />
        )}
      </div>
    </section>
  );
}
