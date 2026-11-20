import { useEffect, useRef, useState } from "react";
import { useFitWidth } from "@/components/kit/useFitWidth";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { modelChapter, type ModelChapter } from "@/components/kit/modelPose";
import WatchProductPhoto from "@/components/kit/WatchProductPhoto";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Colorway = { name: string };

type HeroWordmarkDialProps = {
  title?: string;
  modelPose?: ModelChapter;
  colorLabel?: string;
  items?: Colorway[];
  modelLabel?: string;
  model?: string;
  introDelay?: number;
  media?: "model" | "image";
  productImageSrc?: string;
  productImageAlt?: string;
  ariaLabel?: string;
  className?: string;
};

const EXPO = [0.19, 1, 0.22, 1] as const;
const CUBIC = [0.215, 0.61, 0.355, 1] as const;
const C = 350;
const R = 345;
const WEDGES = [315, 0, 135, 180];
const ARC_OPACITY = [0.3, 1, 0.15, 0.4];
const AXES = [0, 45, 315];

const point = (deg: number, r = R) => {
  const a = (deg * Math.PI) / 180;
  return `${(C + r * Math.sin(a)).toFixed(2)} ${(C - r * Math.cos(a)).toFixed(2)}`;
};
const arc = (from: number) => `M${point(from)} A${R} ${R} 0 0 1 ${point(from + 45)}`;
const wedge = (from: number) => `M${C} ${C} L${point(from)} A${R} ${R} 0 0 1 ${point(from + 45)} Z`;

const HeroWordmarkDial = ({
  title = "FS 60P",
  modelPose = {},
  colorLabel = "Color",
  items = [{ name: "Silver Steel" }, { name: "Deep black" }, { name: "Pure Gold" }, { name: "Rose Gold" }],
  modelLabel = "Model",
  model = "146GR",
  introDelay = 0,
  media = "model",
  productImageSrc = "https://images.pexels.com/photos/5895627/pexels-photo-5895627.jpeg?auto=compress&w=1200",
  productImageAlt = "Black dial watch beside watchmaker's tools",
  ariaLabel,
  className,
}: HeroWordmarkDialProps) => {
  const reduce = useReducedMotion();
  const [go, setGo] = useState(introDelay <= 0);
  const [left, ...rest] = title.trim().split(/\s+/);
  const right = rest.join(" ");
  const words = right ? [left, right] : [left];
  const d = 0;
  const show = <T,>(value: T) => (go ? value : undefined);
  const wordmark = useRef<HTMLHeadingElement>(null);
  const wordmarkRow = useRef<HTMLDivElement>(null);
  useFitWidth(wordmark, wordmarkRow, title);

  useEffect(() => {
    if (go) return;
    const start = () => setGo(true);
    const fallback = window.setTimeout(start, (introDelay + 15) * 1000);
    window.addEventListener("kit:intro", start);
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("kit:intro", start);
    };
  }, [go, introDelay]);

  return (
    <section
      {...modelChapter(media === "model" ? modelPose : undefined)}
      aria-label={ariaLabel ?? title}
      className={cn(
        "relative h-svh min-h-[37.5rem] overflow-hidden text-foreground [--dial:max(31.25rem,min(95vw,95svh))] lg:[--dial:max(31.25rem,min(80vw,80svh))]",
        className,
      )}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 1.5 }}
        animate={show({ opacity: 1, scale: 1 })}
        transition={{ duration: 1, ease: CUBIC, delay: d }}
        className="absolute left-1/2 top-1/2 z-0 -ml-[calc(var(--dial)/2)] -mt-[calc(var(--dial)/2)] size-[var(--dial)]"
      >
        <svg viewBox="0 0 700 700" fill="none" className="size-full overflow-visible">
          <circle cx={C} cy={C} r={R} stroke="currentColor" strokeOpacity="0.1" />
          {AXES.map((deg) => (
            <motion.path
              key={deg}
              d={`M${point(deg)} L${point(deg + 180)}`}
              stroke="currentColor"
              strokeOpacity="0.1"
              initial={reduce ? false : { pathLength: 0 }}
              animate={show({ pathLength: 1 })}
              transition={{ duration: 3, ease: CUBIC, delay: d + 0.2 }}
            />
          ))}
          {items.map((item, i) => {
            const from = WEDGES[i % WEDGES.length];
            return (
              <g key={`${i}-${item.name}`}>
                {i === 0 && <path d={wedge(from)} fill="currentColor" fillOpacity="0.07" />}
                <motion.path
                  d={arc(from)}
                  stroke="currentColor"
                  strokeOpacity={ARC_OPACITY[i % ARC_OPACITY.length]}
                  strokeWidth="3"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={show({ pathLength: 1 })}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: d + 0.6 + i * 0.1 }}
                />
              </g>
            );
          })}
        </svg>
      </motion.div>

      <h1 ref={wordmark} className="absolute left-0 top-1/2 z-10 flex w-full -translate-y-1/2 items-center justify-center whitespace-nowrap px-[var(--gutter)] text-[length:max(6.25rem,24.3056vw)] leading-[0.8] lg:px-[1.5vw] [[data-model-shape=long]_&]:top-[calc(50%-6rem)] lg:[[data-model-shape=long]_&]:top-1/2">
        <div className="sr-only">{title}</div>
        <div ref={wordmarkRow} aria-hidden="true" className="inline-flex gap-x-[0.25em]">
        {words.map((word, w) => (
          <div key={w} className="flex">
            {Array.from(word).map((char, i) => (
              <div key={i} className="-my-[0.15em] overflow-hidden py-[0.15em]">
                <motion.div
                  initial={reduce ? false : { y: "150%" }}
                  animate={show({ y: "0%" })}
                  transition={{ duration: 1.2, ease: EXPO, delay: d + 0.15 + (w * 2 + i) * 0.06 }}
                  className={cn(
                    "whitespace-pre",
                    w > 0 && "bg-[linear-gradient(100deg,color-mix(in_srgb,var(--foreground)_72%,var(--background)),var(--foreground)_70%)] bg-clip-text text-transparent",
                  )}
                >
                  {char}
                </motion.div>
              </div>
            ))}
          </div>
        ))}
        </div>
      </h1>

      {media === "model" ? (
        <div
          data-model-anchor
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 aspect-[5/8] h-[calc(var(--dial)*0.52)] -translate-x-1/2 -translate-y-1/2 lg:h-[calc(var(--dial)*0.66)] [[data-model-shape=long]_&]:top-[calc(50%+3.25rem)] [[data-model-shape=long]_&]:aspect-[2/1] [[data-model-shape=long]_&]:h-auto [[data-model-shape=long]_&]:w-[88vw] lg:[[data-model-shape=long]_&]:top-1/2 lg:[[data-model-shape=long]_&]:aspect-[5/8] lg:[[data-model-shape=long]_&]:h-[calc(var(--dial)*0.66)] lg:[[data-model-shape=long]_&]:w-auto"
        />
      ) : (
        <WatchProductPhoto
          imageSrc={productImageSrc}
          imageAlt={productImageAlt}
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 aspect-[5/8] h-[calc(var(--dial)*0.52)] w-auto -translate-x-1/2 -translate-y-1/2 rounded-none lg:h-[calc(var(--dial)*0.66)]"
        />
      )}

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={show({ opacity: 1 })}
        transition={{ duration: 1, ease: "linear", delay: d + 0.8 }}
        className="absolute bottom-[1.25rem] left-[var(--gutter)] z-30 flex flex-col lg:bottom-[2rem] lg:flex-row lg:items-end lg:gap-[8.5vw]"
      >
        <div className="text-[length:clamp(var(--text-label),0.8333vw,var(--text-small))] leading-[1.3]">
          <p className="text-foreground/40">{colorLabel}</p>
          <p className="whitespace-nowrap">{items[0]?.name}</p>
        </div>
        <div className="mt-[0.875rem] whitespace-nowrap text-[length:max(2.5rem,4.1667vw)] uppercase leading-[0.8] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] lg:mt-0">
          <p className="text-foreground/40">{modelLabel}</p>
          <p>{model}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroWordmarkDial;
