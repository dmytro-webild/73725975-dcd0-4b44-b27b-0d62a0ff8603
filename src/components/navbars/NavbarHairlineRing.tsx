"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { X, MessageCircle, ShieldCheck, Globe } from "lucide-react";
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
        className="fixed inset-x-0 top-0 z-[60] bg-background/90 backdrop-blur-xl border-b border-border/50 text-foreground shadow-sm px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex h-[4.5rem] w-full max-w-[var(--max-w)] items-center justify-between gap-3 xl:gap-6 lg:h-[5.25rem]">
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
          <div className="hidden xl:flex items-center gap-3.5 2xl:gap-5 font-mono text-[11px] uppercase tracking-wider text-foreground/80 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors py-2.5 relative font-medium group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          {/* Actions: Menu & Language Trigger Tab + WhatsApp + Quote CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Content & Language Menu Trigger Tab (replaces standalone switcher) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 border border-border/60 bg-muted/40 hover:bg-muted/70 active:scale-95 text-foreground rounded-full font-mono text-xs transition-all cursor-pointer shadow-inner group"
              aria-label={language === "de" ? "Inhalt & Sprache" : "Content & Language"}
            >
              <Globe className="size-3.5 text-primary group-hover:rotate-45 transition-transform duration-300" />
              <span className="font-semibold text-[11px] tracking-wider uppercase">
                {language === "de" ? "Inhalt & Sprache" : "Content & Lang"}
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-foreground text-background text-[10px] font-bold uppercase tracking-wider">
                {language.toUpperCase()}
              </span>
            </button>

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
          </div>
        </div>
      </motion.nav>

      {/* Navigation Content & Language Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[55] bg-background/98 backdrop-blur-2xl pt-[5.25rem] px-4 sm:px-8 pb-8 flex flex-col justify-between border-b border-border/60 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto w-full space-y-6 pt-2">
              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <Globe className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] font-bold text-foreground">
                      {language === "de" ? "Inhaltsverzeichnis & Sprache" : "Table of Contents & Language"}
                    </h3>
                    <p className="text-[10px] font-mono text-foreground/50 uppercase tracking-wider">
                      {language === "de" ? "Schnellnavigation & Sprachauswahl" : "Quick Navigation & Language Selection"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full border border-border/60 bg-muted/40 hover:bg-muted/80 text-foreground transition-all cursor-pointer"
                  aria-label="Schliessen"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Navigation Content Grid (Mini headers for quick jump) */}
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/40 font-semibold mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-emerald-400" />
                  <span>{language === "de" ? "Abschnitte auf dieser Seite" : "Sections on this page"} ({navLinks.length})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 font-mono text-xs">
                  {navLinks.map((link, idx) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/70 border border-border/40 hover:border-primary/50 transition-all text-foreground/90 hover:text-foreground"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-mono font-bold text-primary group-hover:scale-110 transition-transform">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-medium tracking-wide">{link.label}</span>
                      </div>
                      <span className="text-[10px] text-foreground/40 group-hover:text-primary transition-colors">→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Integrated Language Switcher & Actions at the bottom */}
              <div className="border-t border-border/40 pt-5 space-y-4 font-mono text-xs">
                <div className="bg-muted/30 border border-border/50 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-foreground/80 font-semibold">
                    <span className="flex items-center gap-2">
                      <Globe className="size-4 text-primary" />
                      {language === "de" ? "Sprache wählen" : "Select Language"}
                    </span>
                    <span className="text-[10px] font-bold text-foreground/50 px-2 py-0.5 rounded bg-muted uppercase">
                      {language === "de" ? "Aktiv: Deutsch" : "Active: English"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <button
                      onClick={() => setLanguage("de")}
                      className={`py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                        language === "de"
                          ? "bg-foreground text-background border-foreground shadow-md"
                          : "bg-background/50 text-foreground/70 border-border/60 hover:text-foreground hover:bg-background"
                      }`}
                    >
                      <span className="text-sm">🇩🇪</span>
                      <span>DE (Deutsch)</span>
                    </button>
                    <button
                      onClick={() => setLanguage("en")}
                      className={`py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                        language === "en"
                          ? "bg-foreground text-background border-foreground shadow-md"
                          : "bg-background/50 text-foreground/70 border-border/60 hover:text-foreground hover:bg-background"
                      }`}
                    >
                      <span className="text-sm">🇬🇧</span>
                      <span>EN (English)</span>
                    </button>
                  </div>
                </div>

                {/* Quick Action CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <a
                    href="https://wa.me/41790000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white uppercase tracking-widest text-center flex items-center justify-center gap-2 rounded-xl shadow-lg transition-all font-semibold"
                  >
                    <MessageCircle className="size-4" />
                    <span>WhatsApp Beratung</span>
                  </a>
                  <a
                    href={buttonHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-4 bg-foreground text-background uppercase tracking-widest text-center block font-semibold rounded-xl shadow-md hover:bg-foreground/90 transition-all"
                  >
                    {buttonText}
                  </a>
                </div>

                <p className="text-[10px] text-foreground/40 text-center uppercase tracking-widest pt-2">
                  JD CAR WRAPPING ATELIER • ZÜRICH
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarHairlineRing;
