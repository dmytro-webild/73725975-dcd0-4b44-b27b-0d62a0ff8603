import { Fragment, useRef } from "react";
import { useFitWidth } from "@/components/kit/useFitWidth";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { modelChapter, type ModelChapter } from "@/components/kit/modelPose";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FooterLink = { text: string; href: string; onClick?: (e: React.MouseEvent) => void };

type FooterColumn = { title: string; links: FooterLink[] };

type FooterWordmarkProps = {
  title?: string;
  columns?: FooterColumn[];
  bottomLinks?: FooterLink[];
  model?: ModelChapter;
  media?: "model" | "image";
  fit?: boolean;
  className?: string;
};

const ease: [number, number, number, number] = [0.215, 0.61, 0.355, 1];

const FooterWordmark = ({
  title = "FS 60P",
  columns = [],
  bottomLinks = [],
  model,
  media = "model",
  fit = false,
  className,
}: FooterWordmarkProps) => {
  const reduce = useReducedMotion();
  const words = title.trim().split(/\s+/);
  const last = words.length - 1;
  const wordmark = useRef<HTMLHeadingElement>(null);
  const wordmarkRow = useRef<HTMLDivElement>(null);
  useFitWidth(wordmark, wordmarkRow, title, fit);

  return (
    <motion.section
      aria-label={title}
      {...modelChapter(media === "model" ? model : undefined)}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, amount: 0.05 }}
      className={cn("relative overflow-x-clip pb-[var(--section-space)] pt-[clamp(2rem,3.6vw,3.25rem)] text-foreground", className)}
    >
      {columns.length > 0 && (
        <motion.nav
          aria-label={`${title} links`}
          variants={{ hidden: { opacity: 0, y: 16 }, shown: { opacity: 1, y: 0 } }}
          transition={{ duration: 1, ease }}
          className="mx-auto mb-[clamp(3rem,7vw,6rem)] mt-[clamp(1rem,3vw,3rem)] grid w-[var(--container)] grid-cols-2 gap-x-[clamp(1rem,2vw,2rem)] gap-y-[clamp(2rem,4vw,3rem)] lg:flex lg:justify-end"
        >
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="min-w-0 border-t border-foreground/15 pt-[clamp(0.75rem,1vw,1rem)] lg:w-[12rem]">
              <p className="mb-[clamp(0.75rem,1.2vw,1.125rem)] text-[length:var(--text-small)] leading-none text-foreground/40">{column.title}</p>
              <ul className="flex flex-col gap-[0.5rem]">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      className="text-[length:var(--text-small)] leading-[1.2] text-foreground transition-opacity duration-300 [overflow-wrap:anywhere] hover:opacity-50"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.nav>
      )}
      <h2 ref={wordmark} className={cn("flex w-full px-[clamp(0.5rem,1.4vw,1.25rem)] text-[length:clamp(2.5rem,14vw,18rem)] uppercase leading-[0.8] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)]", fit ? "justify-center" : media === "model" ? "justify-between" : "justify-center gap-x-[0.2em]")}>
        <div className="sr-only">{title}</div>
        <div ref={wordmarkRow} aria-hidden="true" className={fit ? "inline-flex gap-x-[0.2em]" : "contents"}>
        {words.map((word, wordIndex) => (
          <Fragment key={wordIndex}>
          {wordIndex === 1 && media === "model" && <div data-model-anchor aria-hidden="true" className="h-[0.95em] w-[0.6em] shrink-0 self-center" />}
          <div className={cn("flex whitespace-nowrap", wordIndex === last && wordIndex > 0 && "text-foreground/70")}>
            {fit ? word : [...word].map((char, index) => {
              const order = words.slice(0, wordIndex).join("").length + index;
              return (
                <div key={index} className="-mt-[0.1em] inline-block overflow-hidden pt-[0.1em]">
                  <motion.div
                    className="inline-block"
                    variants={{ hidden: { x: "-100%", opacity: 0 }, shown: { x: "0%", opacity: 1 } }}
                    transition={{ duration: 1, ease, delay: order * 0.05 }}
                  >
                    {char}
                  </motion.div>
                </div>
              );
            })}
          </div>
          </Fragment>
        ))}
        </div>
      </h2>
      {bottomLinks.length > 0 && (
        <motion.ul
          variants={{ hidden: { opacity: 0 }, shown: { opacity: 1 } }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="mx-auto mt-[clamp(1.5rem,3vw,2.5rem)] flex w-[var(--container)] flex-wrap gap-x-[clamp(1rem,2vw,2rem)] gap-y-[0.5rem] text-[length:var(--text-small)] leading-none text-foreground/40"
        >
          {bottomLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={link.onClick}
                className="whitespace-nowrap transition-colors duration-300 hover:text-foreground cursor-pointer"
              >
                {link.text}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.section>
  );
};

export default FooterWordmark;
