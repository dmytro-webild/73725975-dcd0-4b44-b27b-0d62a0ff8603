"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle, ShieldCheck, Globe } from "lucide-react";
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
    { label: t.nav.customizer || "3D Visualisierer", href: "#customizer" },
    { label: t.nav.finishes || "Oberflächen", href: "#finishes" },
    { label: t.nav.portfolio || "Portfolio", href: "#portfolio" },
    { label: t.nav.details || "Präzision", href: "#details" },
    { label: t.nav.about || "Über uns", href: "#about" },
    { label: t.nav.howItWorks || "Ablauf", href: "#how-it-works" },
    { label: t.nav.reviews || "Kundenstimmen", href: "#testimonials" },
    { label: t.nav.faq || "FAQ", href: "#faq" },
    { label: t.nav.contact || "Angebot anfragen", href: "#contact" },
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
        <div className="mx-auto flex h-[4.5rem] w-[var(--container)] items-center justify-between gap-3 xl:gap-8 lg:h-[5.25rem]">
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

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 font-mono text-[11px] xl:text-xs uppercase tracking-wider text-foreground/80">
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

          {/* Actions: Language Toggle + WhatsApp + Quote CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
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
              className="hidden sm:inline-block px-4 sm:px-5 py-2.5 bg-foreground text-background font-mono text-[11px] uppercase tracking-widest hover:bg-foreground/90 transition-all font-semibold rounded-lg shadow-md hover:shadow-lg"
            >
              {buttonText}
            </a>

            {/* Mobile Navigation Menu Button right next to Language Switcher */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-foreground bg-muted/50 hover:bg-muted/80 border border-border/60 rounded-full transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <>
                  <X className="size-4" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold">
                    {language === "de" ? "Schliessen" : "Close"}
                  </span>
                </>
              ) : (
                <>
                  <Menu className="size-4" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold">
                    {language === "de" ? "Menü" : "Menu"}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[55] bg-background/98 backdrop-blur-2xl pt-[5.25rem] px-6 pb-8 flex flex-col justify-between lg:hidden border-b border-border/60 overflow-y-auto"
          >
            <div className="space-y-5 pt-2">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/50 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-emerald-400" />
                  {language === "de" ? "Inhaltsverzeichnis" : "Page Sections"}
                </span>
                <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
                  {navLinks.length} {language === "de" ? "Abschnitte" : "Sections"}
                </span>
              </div>

              {/* Navigation Menu with Section Titles for Quick Jump */}
              <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-wider">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-foreground/90 hover:text-primary py-2.5 px-3 rounded-lg hover:bg-muted/30 border-b border-border/20 font-medium transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-foreground/40 font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Menu Area with Integrated Language Switcher */}
            <div className="space-y-4 pt-5 border-t border-border/40 font-mono text-xs mt-6">
              {/* Language Switching Section at the Bottom */}
              <div className="bg-muted/30 border border-border/50 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-foreground/70 uppercase tracking-wider font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Globe className="size-3.5 text-primary" />
                    {language === "de" ? "Sprache / Language" : "Language / Sprache"}
                  </span>
                  <span className="text-[10px] text-foreground/40 font-bold">{language.toUpperCase()}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  <button
                    onClick={() => setLanguage("de")}
                    className={`py-2 rounded-lg font-bold text-center transition-all cursor-pointer border ${
                      language === "de"
                        ? "bg-foreground text-background border-foreground shadow-sm"
                        : "bg-background/50 text-foreground/70 border-border/60 hover:text-foreground"
                    }`}
                  >
                    DE (Deutsch)
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`py-2 rounded-lg font-bold text-center transition-all cursor-pointer border ${
                      language === "en"
                        ? "bg-foreground text-background border-foreground shadow-sm"
                        : "bg-background/50 text-foreground/70 border-border/60 hover:text-foreground"
                    }`}
                  >
                    EN (English)
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-2.5">
                <a
                  href="https://wa.me/41790000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="size-4" />
                  <span>WhatsApp Beratung</span>
                </a>

                <a
                  href={buttonHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest text-center block font-semibold rounded-xl shadow-md hover:bg-foreground/90 transition-all"
                >
                  {buttonText}
                </a>
              </div>

              <p className="text-[10px] text-foreground/40 text-center uppercase tracking-widest pt-1">
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
