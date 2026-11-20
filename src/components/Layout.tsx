import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarHairlineRing from "@/components/navbars/NavbarHairlineRing";
import FooterWordmark from "@/components/sections/footer/FooterWordmark";
import LegalModal from "@/components/LegalModal";
import { LanguageProvider } from "@/context/LanguageProvider";
import { useLanguage } from "@/context/useLanguage";

function LayoutContent() {
  const { t } = useLanguage();
  const [legalModalType, setLegalModalType] = useState<'imprint' | 'privacy' | null>(null);

  const handleLegalClick = (e: React.MouseEvent, type: 'imprint' | 'privacy') => {
    e.preventDefault();
    setLegalModalType(type);
  };

  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="outline" data-card="hairline" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarHairlineRing
          brand="JD CAR WRAPPING ATELIER"
          button={{
            text: t.nav.contact,
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow" data-button="outline" data-card="hairline" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterWordmark
          title="JD CAR WRAPPING ATELIER"
          media="image"
          fit
          columns={[
            {
              title: t.footer.col1Title,
              links: t.footer.col1Links
            },
            {
              title: t.footer.col2Title,
              links: t.footer.col2Links
            },
            {
              title: t.footer.col3Title,
              links: t.footer.col3Links
            }
          ]}
          bottomLinks={[
            {
              text: t.footer.copyright,
              href: "#hero"
            },
            {
              text: t.footer.privacyLink,
              href: "#privacy",
              onClick: (e: React.MouseEvent) => handleLegalClick(e, 'privacy')
            },
            {
              text: t.footer.imprintLink,
              href: "#imprint",
              onClick: (e: React.MouseEvent) => handleLegalClick(e, 'imprint')
            }
          ]}
        />
      </footer>

      {/* Legal Modal Popup */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default function Layout() {
  return (
    <LanguageProvider>
      <LayoutContent />
    </LanguageProvider>
  );
}
