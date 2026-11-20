import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import { modelChapter, type ModelChapter } from "@/components/kit/modelPose";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Detail = { label: string; value: string; href?: string };

type ContactAnchorDetailsProps = {
  title?: string;
  script?: string;
  details?: Detail[];
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  submitText?: string;
  successText?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
  model?: ModelChapter;
  media?: "model" | "image";
  ariaLabel?: string;
  className?: string;
};

const EASE = [0.19, 1, 0.22, 1] as const;

const ContactAnchorDetails = ({
  title = "Get in Touch",
  script,
  details = [
    { label: "Address", value: "12 Rue de la Paix, 75002 Paris" },
    { label: "Email", value: "hello@studio.com", href: "mailto:hello@studio.com" },
    { label: "Phone", value: "+33 1 23 45 67 89", href: "tel:+33123456789" },
    { label: "Hours", value: "Mon to Sat, 10:00 to 19:00" },
  ],
  nameLabel = "Name",
  emailLabel = "Email",
  messageLabel = "Message",
  submitText = "Send message",
  successText = "Thank you. We will reply within one working day.",
  onSubmit,
  model,
  media = "model",
  ariaLabel,
  className,
}: ContactAnchorDetailsProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const [sent, setSent] = useState(false);
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: kit.slow, ease: EASE, delay },
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    onSubmit?.({ name: String(data.get("name") ?? ""), email: String(data.get("email") ?? ""), message: String(data.get("message") ?? "") });
    setSent(true);
  };

  const field = "w-full border-0 border-b border-foreground/20 bg-transparent py-2 text-[length:var(--text-small)] leading-[1.4] text-foreground outline-none transition-colors duration-300 placeholder:text-foreground/30 focus:border-foreground";

  return (
    <section aria-label={ariaLabel ?? title} {...modelChapter(media === "model" ? model : undefined)} className={cn("relative py-[var(--section-space)] text-foreground", className)}>
      <div className={cn("mx-auto grid w-[var(--container)]", media === "model" && "gap-[clamp(2.5rem,6vw,4rem)] lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-center lg:gap-[clamp(3rem,6vw,6rem)]")}>
        <div className={cn("flex flex-col", media !== "model" && "lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_1fr] lg:items-start lg:gap-x-[clamp(3rem,6vw,6rem)]")}>
          <motion.div {...fade(0)}>
            <svg aria-hidden="true" width="9" height="9" viewBox="0 0 8 8" fill="none" className="text-foreground">
              <path fill="currentColor" d="M3.5 0h1v8h-1z" />
              <path fill="currentColor" d="M8 3.5v1H0v-1z" />
            </svg>
          </motion.div>
          {script && (
            <motion.p {...fade(0.05)} className="mt-[clamp(0.75rem,1vw,1rem)] text-[length:var(--text-script)] leading-[0.9] text-accent [font-family:var(--font-accent)]">
              {script}
            </motion.p>
          )}
          <motion.h2
            {...fade(0.05)}
            className="mt-[clamp(0.875rem,1.1vw,1.25rem)] text-balance bg-[linear-gradient(100deg,color-mix(in_srgb,var(--foreground)_72%,var(--tint-3)),var(--foreground)_70%)] bg-clip-text text-[length:min(var(--text-h2),9vw)] uppercase leading-[1] tracking-[0.05em] text-transparent [overflow-wrap:anywhere]"
          >
            {title}
          </motion.h2>

          <dl className={cn("mt-[clamp(1.5rem,3vw,3rem)] grid grid-cols-1 gap-y-[clamp(1rem,1.4vw,1.25rem)] sm:grid-cols-2 sm:gap-x-[var(--gap)]", media === "model" ? "lg:grid-cols-1" : "lg:col-start-1")}>
            {details.map((item, index) => (
              <motion.div key={index} {...fade(0.1 + index * 0.06)} className="min-w-0">
                <dt className="mb-[0.375rem] text-[length:var(--text-small)] leading-none text-foreground/40">{item.label}</dt>
                <dd className="text-[length:var(--text-small)] leading-[1.35] [overflow-wrap:anywhere]">
                  {item.href ? (
                    <a href={item.href} className="underline decoration-foreground/20 underline-offset-4 transition-colors duration-300 hover:decoration-foreground">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </motion.div>
            ))}
          </dl>

          <motion.form {...fade(0.3)} onSubmit={submit} className={cn("mt-[clamp(2rem,3.5vw,3rem)] flex flex-col gap-[clamp(1rem,1.4vw,1.25rem)] border-t border-foreground/15 pt-[clamp(1.5rem,2.4vw,2rem)]", media !== "model" && "lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:mt-0")}>
            <label className="flex flex-col">
              <p className="text-[length:var(--text-small)] leading-none text-foreground/40">{nameLabel}</p>
              <input name="name" type="text" required autoComplete="name" className={field} />
            </label>
            <label className="flex flex-col">
              <p className="text-[length:var(--text-small)] leading-none text-foreground/40">{emailLabel}</p>
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            <label className="flex flex-col">
              <p className="text-[length:var(--text-small)] leading-none text-foreground/40">{messageLabel}</p>
              <textarea name="message" rows={3} required className={cn(field, "resize-none")} />
            </label>
            <div className="mt-[0.5rem] min-h-[1.75rem]">
              {sent ? (
                <p role="status" className="text-[length:var(--text-small)] leading-[1.4] text-foreground/70">
                  {successText}
                </p>
              ) : (
                <button type="submit" className="btn-link">
                  <p className="btn-label">{submitText}</p>
                </button>
              )}
            </div>
          </motion.form>
        </div>

        {media === "model" && (
        <div aria-hidden="true" className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-foreground/10 lg:block" />
          <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full bg-foreground/10 lg:block" />
          <div data-model-anchor className="relative mx-auto aspect-[4/5] w-full max-w-[28rem] lg:aspect-auto lg:h-[min(80svh,44rem)] lg:max-w-none" />
        </div>
        )}
      </div>
    </section>
  );
};

export default ContactAnchorDetails;
