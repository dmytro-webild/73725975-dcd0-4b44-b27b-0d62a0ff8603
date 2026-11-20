"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

type ButtonProps = { text?: string; href?: string };

type NavLink = { label: string; href: string };

type NavbarHairlineRingProps = {
  brand?: string;
  logoSrc?: string;
  button?: ButtonProps;
  links?: NavLink[];
};

const EASE = [0.19, 1, 0.22, 1] as const;

const NavbarHairlineRing = ({
  brand = "JD CAR WRAPPING ATELIER",
  logoSrc,
  button,
}: NavbarHairlineRingProps) => {
  const reduce = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks: NavLink[] = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.customizer, href: "#customizer" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.reviews, href: "#testimonials" },
    { label: t.nav.faq, href: "#faq" },
  ];

  const buttonText = button?.text || t.nav.contact;
  const buttonHref = button?.href || "#contact";

  return (
    <>
      <motion.nav
        aria-label="Main"
        initial={reduce ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 text-foreground"
      >
        <div className="mx-auto flex h-[4.5rem] w-[var(--container)] items-center justify-between gap-[clamp(1rem,2vw,2rem)] lg:h-[5.5rem]">
          {/* Brand Logo / Wordmark */}
          <a href="#" className="flex min-w-0 shrink items-center group">
            {logoSrc ? (
              <img src={logoSrc} alt={brand} loading="eager" decoding="async" className="h-[1.25rem] w-auto max-w-[8rem] object-contain" />
            ) : (
              <div className="flex flex-col">
                <span className="truncate text-xs font-mono uppercase tracking-[0.2em] font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                  {brand}
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-foreground/40 hidden sm:block">
                  {t.nav.brandSub}
                </span>
              </div>
            )}
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-foreground/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions: Language Toggle + WhatsApp + Quote Button + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher Toggle */}
            <div className="flex items-center border border-border/60 bg-muted/30 rounded-full p-0.5 font-mono text-xs">
              <button
                onClick={() => setLanguage("de")}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  language === "de"
                    ? "bg-foreground text-background shadow-xs"
                    : "text-foreground/60 hover:text-foreground"
                }`}
                title="Deutsch"
              >
                DE
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-foreground text-background shadow-xs"
                    : "text-foreground/60 hover:text-foreground"
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            <a
              href="https://wa.me/41790000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp direct chat"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-emerald-600/40 text-emerald-400 bg-emerald-950/20 hover:bg-emerald-950/50 transition-all rounded-full"
            >
              <MessageCircle className="size-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={buttonHref}
              className="px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all font-semibold"
            >
              {buttonText}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground/80 hover:text-foreground border border-border/40 transition-all cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-[5.5rem] px-6 pb-8 flex flex-col justify-between lg:hidden border-b border-border/60"
          >
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between border-b border-border/40 pb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 block">
                  Navigation
                </span>
                <div className="flex items-center gap-1 font-mono text-xs">
                  <Globe className="size-3 text-foreground/50 mr-1" />
                  <button
                    onClick={() => setLanguage("de")}
                    className={`px-2 py-0.5 rounded text-xs ${language === "de" ? "bg-foreground text-background font-bold" : "text-foreground/60"}`}
                  >
                    DE
                  </button>
                  <span className="text-foreground/30">|</span>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-2 py-0.5 rounded text-xs ${language === "en" ? "bg-foreground text-background font-bold" : "text-foreground/60"}`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-foreground/80 hover:text-foreground py-2 border-b border-border/20"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-border/40 font-mono text-xs">
              <a
                href="https://wa.me/41790000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 text-white font-mono text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="size-4" />
                <span>WhatsApp Direct Consultation</span>
              </a>

              <p className="text-[10px] text-foreground/40 text-center uppercase tracking-widest">
                {t.nav.brandSub}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarHairlineRing;
