import { Outlet } from "react-router-dom";
import NavbarHairlineRing from "@/components/navbars/NavbarHairlineRing";
import FooterWordmark from "@/components/sections/footer/FooterWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="outline" data-card="hairline" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarHairlineRing
          brand="JD CAR WRAPPING ATELIER"
          button={{
            text: "Request Quote",
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
              title: "Services",
              links: [
                {
                  text: "Full Car Wrapping",
                  href: "#finishes"
                },
                {
                  text: "Paint Protection (PPF)",
                  href: "#finishes"
                },
                {
                  text: "Chrome Delete",
                  href: "#finishes"
                }
              ]
            },
            {
              title: "Atelier",
              links: [
                {
                  text: "Transformations",
                  href: "#profile"
                },
                {
                  text: "Client Reviews",
                  href: "#testimonials"
                },
                {
                  text: "Consultation FAQ",
                  href: "#faq"
                }
              ]
            },
            {
              title: "Contact",
              links: [
                {
                  text: "info@jdcarwrapping.ch",
                  href: "mailto:info@jdcarwrapping.ch"
                },
                {
                  text: "Instagram",
                  href: "https://instagram.com/jdcarwrappingatelier"
                },
                {
                  text: "Request Quote",
                  href: "#contact"
                }
              ]
            }
          ]}
          bottomLinks={[
            {
              text: "© 2026 JD Car Wrapping Atelier",
              href: "#hero"
            },
            {
              text: "Privacy Policy",
              href: "#"
            },
            {
              text: "Imprint",
              href: "#"
            }
          ]}
        />
      </footer>
    </div>
  );
}
