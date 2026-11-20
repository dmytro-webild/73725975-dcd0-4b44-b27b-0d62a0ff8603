import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import { modelChapter, type ModelChapter } from "@/components/kit/modelPose";
import WatchProductPhoto from "@/components/kit/WatchProductPhoto";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Item = { title: string; description: string };

type FeaturesVerticalWordmarkProps = {
  title?: string;
  script?: string;
  items?: Item[];
  model?: ModelChapter;
  media?: "model" | "image";
  productImageSrc?: string;
  productImageAlt?: string;
  ariaLabel?: string;
  className?: string;
};

const FeaturesVerticalWordmark = ({
  title = "FS 60P",
  script,
  items = [
    {
      title: "Case & Finishes",
      description:
        "Crafted with meticulous attention to detail, the case alternates between polished and satin-brushed surfaces, creating subtle contrasts that enhance its presence and reflect light with precision.",
    },
    {
      title: "Dial & Complications",
      description:
        "The dial reveals a layered composition with refined textures and carefully balanced subdials. Each element is designed to ensure clarity, depth, and a distinctive visual identity.",
    },
  ],
  model,
  media = "model",
  productImageSrc = "https://images.pexels.com/photos/37108235/pexels-photo-37108235.jpeg?auto=compress&w=1200",
  productImageAlt = "Watchmaker setting the hand of a chronograph dial",
  ariaLabel,
  className,
}: FeaturesVerticalWordmarkProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const kit = useKitMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], reduce ? ["-50%", "-50%"] : ["-20%", "-80%"]);
  const [first, ...rest] = title.split(" ");
  const second = rest.join(" ");

  return (
    <section
      ref={sectionRef}
      aria-label={ariaLabel ?? items.map((item) => item.title).join(", ")}
      {...modelChapter(media === "model" ? model : undefined)}
      className={cn("relative overflow-hidden py-[var(--section-space)] text-foreground", className)}
    >
      <div className="relative mx-auto w-[var(--container)]">
        <div className="relative flex flex-col gap-[clamp(3rem,8vw,5rem)] lg:mx-auto lg:min-h-[clamp(36rem,52vw,46rem)] lg:w-[72%] lg:flex-row lg:items-stretch lg:justify-between">
          <div className="relative z-10 order-2 w-full max-w-[16rem] lg:order-none lg:w-[clamp(11rem,13.889vw,14rem)] lg:max-w-none lg:pt-[clamp(2rem,4vw,4rem)]">
            {script && (
              <motion.div initial={reduce ? false : "hidden"} whileInView="shown" viewport={{ once: true, margin: "0px 0px -10% 0px" }} className="-mt-[0.15em] mb-[clamp(1.25rem,2vw,2rem)] overflow-hidden py-[0.15em]">
                <motion.p
                  variants={{ hidden: { y: "150%" }, shown: { y: "0%", transition: { duration: kit.slow, ease: [0.19, 1, 0.22, 1] } } }}
                  className="text-[length:var(--text-script)] leading-[1.25] text-accent [font-family:var(--font-accent)]"
                >
                  {script}
                </motion.p>
              </motion.div>
            )}
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: kit.base, ease: [0.19, 1, 0.22, 1], delay: index * 0.12 }}
                className="mb-[clamp(1.75rem,2.639vw,2.5rem)] last:mb-0"
              >
                <p className="mb-[clamp(0.6875rem,0.764vw,0.75rem)] text-[length:max(0.75rem,0.8333vw)] leading-none text-foreground/40">
                  {item.title}
                </p>
                <p className="text-[length:max(0.75rem,0.8333vw)] leading-[1.2]">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative order-1 flex h-[clamp(26rem,120vw,34rem)] items-center justify-center overflow-hidden lg:absolute lg:inset-x-0 lg:top-[calc(var(--section-space)*-1)] lg:bottom-[calc(var(--section-space)*-1)] lg:order-none lg:h-auto lg:overflow-visible">
            <motion.div
              aria-hidden
              style={{ x: "-50%", y: drift, rotate: 180 }}
              className="pointer-events-none absolute left-1/2 top-1/2 whitespace-nowrap bg-[linear-gradient(90deg,var(--foreground),var(--tint-1))] bg-clip-text text-[length:clamp(9rem,23vw,22rem)] font-light [text-transform:var(--display-case,uppercase)]leading-[0.75] text-transparent will-change-transform [font-family:var(--font-heading)] [writing-mode:vertical-rl]"
            >
              {title}
            </motion.div>
            {media === "model" ? (
              <div aria-hidden data-model-anchor className="relative aspect-[3/4] w-[min(62vw,18rem)] lg:w-[clamp(15rem,21vw,20rem)]" />
            ) : (
              <WatchProductPhoto
                imageSrc={productImageSrc}
                imageAlt={productImageAlt}
                className="relative aspect-[3/4] w-[min(62vw,18rem)] rounded-none lg:w-[clamp(15rem,21vw,20rem)]"
              />
            )}
          </div>

          <div className="relative hidden items-end lg:flex">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: kit.slow, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="flex gap-[0.694vw] text-[length:clamp(3rem,5.556vw,5.25rem)] font-light [text-transform:var(--display-case,uppercase)]leading-none text-[var(--tint-1)] [font-family:var(--font-heading)]"
            >
              <p className="[transform:rotate(180deg)] [writing-mode:vertical-rl]">{first}</p>
              {second && (
                <div className="flex items-center gap-[0.694vw] [transform:rotate(180deg)] [writing-mode:vertical-rl]">
                  <div aria-hidden className="h-[4.167vw] w-[0.417vw] max-w-[0.375rem] bg-current" />
                  <p>{second}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesVerticalWordmark;
