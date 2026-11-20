"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle, ShieldCheck } from "lucide-react";
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
    { label: t.nav.services || "Dienstleistungen", href: "#services" },
    { label: t.nav.customizer || "3D Konfigurator", href: "#customizer" },
    { label: t.nav.portfolio || "Portfolio", href: "#portfolio" },
    { label: t.nav.details || "Details", href: "#details" },
    { label: t.nav.about || "Atelier", href: "#about" },
    { label: t.nav.reviews || "Kundenstimmen", href: "#testimonials" },
    { label: t.nav.faq || "FAQ", href: "#faq" },
  ];

  const buttonText = button?.text || t.nav.contact || "Angebot anfragen";
  const buttonHref = button?.href || "#contact";

  return (
    <>
      <motion.nav
        aria-label="Main"
        initial={reduce ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="fixed inset-x-0 top-0 z-[60] bg-background/90 backdrop-blur-xl border-b border-border/50 text-foreground shadow-sm"
      >
        <div className="mx-auto flex h-[4.5rem] w-[var(--container)] items-center justify-between gap-4 xl:gap-8 lg:h-[5.25rem]">
          {/* Brand Logo / Wordmark with High Legibility */}
          <a href="#" className="flex items-center gap-3 shrink-0 group py-1">
            {logoSrc ? (
              <img src={logoSrc} alt={brand} loading="eager" decoding="async" className="h-[1.5rem] w-auto max-w-[9rem] object-contain" />
            ) : (
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] font-bold text-foreground group-hover:text-primary transition-colors">
                    {brand}
                  </span>
                </div>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-foreground/50 hidden sm:block">
                  {t.nav.brandSub || "PREMIUM VEHICLE FINISHING • ZÜRICH"}
                </span>
              </div>
            )}
          </a>

          {/* Desktop Navigation Links — Well Spaced and Entzerrt */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 font-mono text-[11px] xl:text-xs uppercase tracking-wider text-foreground/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors py-2.5 relative font-medium group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          {/* Actions: Language Toggle + WhatsApp + Quote CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Language Switcher Toggle */}
            <div className="flex items-center border border-border/60 bg-muted/40 rounded-full p-0.5 font-mono text-xs shadow-inner">
              <button
                onClick={() => setLanguage("de")}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
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
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-foreground text-background shadow-xs"
                    : "text-foreground/60 hover:text-foreground"
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Direct WhatsApp Consultation */}
            <a
              href="https://wa.me/41790000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp direct chat"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono border border-emerald-500/40 text-emerald-400 bg-emerald-950/30 hover:bg-emerald-950/60 transition-all rounded-full shadow-xs"
            >
              <MessageCircle className="size-3.5" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Primary Action Button */}
            <a
              href={buttonHref}
              className="px-4 sm:px-5 py-2.5 bg-foreground text-background font-mono text-[11px] uppercase tracking-widest hover:bg-foreground/90 transition-all font-semibold rounded-lg shadow-md hover:shadow-lg"
            >
              {buttonText}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground border border-border/60 rounded-lg hover:bg-muted/40 transition-all cursor-pointer"
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
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[55] bg-background/98 backdrop-blur-2xl pt-[5.5rem] px-6 pb-8 flex flex-col justify-between lg:hidden border-b border-border/60 overflow-y-auto"
          >
            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/50 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-emerald-400" />
                  Navigation
                </span>
                <div className="flex items-center gap-1 font-mono text-xs bg-muted/40 p-1 rounded-full border border-border/50">
                  <button
                    onClick={() => setLanguage("de")}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all ${
                      language === "de" ? "bg-foreground text-background" : "text-foreground/60"
                    }`}
                  >
                    DE
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all ${
                      language === "en" ? "bg-foreground text-background" : "text-foreground/60"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 font-mono text-sm uppercase tracking-wider">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-foreground/90 hover:text-foreground py-3 border-b border-border/20 font-medium"
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-foreground/30">{String(idx + 1).padStart(2, "0")}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-border/40 font-mono text-xs mt-6">
              <a
                href="https://wa.me/41790000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 rounded-xl shadow-lg transition-all"
              >
                <MessageCircle className="size-4" />
                <span>WhatsApp Beratung</span>
              </a>

              <a
                href={buttonHref}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest text-center block font-semibold rounded-xl shadow-md"
              >
                {buttonText}
              </a>

              <p className="text-[10px] text-foreground/40 text-center uppercase tracking-widest pt-2">
                JD CAR WRAPPING ATELIER • ZÜRICH
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarHairlineRing;
