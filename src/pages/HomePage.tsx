import { useState } from "react";
import HeroAtelierSection from "@/components/sections/hero/HeroAtelierSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import Customizer3DSection from "@/components/sections/customizer/Customizer3DSection";
import PortfolioSection from "@/components/sections/portfolio/PortfolioSection";
import AboutSection from "@/components/sections/about/AboutSection";
import PricingAxisColumns from "@/components/sections/pricing/PricingAxisColumns";
import TestimonialAxisCounter from "@/components/sections/testimonial/TestimonialAxisCounter";
import FaqTrackedRows from "@/components/sections/faq/FaqTrackedRows";
import ContactInquirySection from "@/components/sections/contact/ContactInquirySection";
import InstagramSection from "@/components/sections/instagram/InstagramSection";
import WhatsAppWidget from "@/components/sections/whatsapp/WhatsAppWidget";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import ModelStage from "@/components/kit/ModelStage";
import LoaderRingProgress from "@/components/loaders/LoaderRingProgress";

export default function HomePage() {
  const [appliedSpec, setAppliedSpec] = useState<{
    colorName: string;
    finish: string;
    hex: string;
  } | null>(null);

  const handleApplySpec = (spec: { colorName: string; finish: string; hex: string }) => {
    setAppliedSpec(spec);
  };

  return (
    <>
      <ScrollToneBackdrop />

      <ModelStage
        src="https://storage.googleapis.com/webild/default/models/supercar/model.a5a995cd30bf.glb"
        scale={3.7}
      />

      <LoaderRingProgress />

      {/* Hero Section */}
      <div id="hero" data-webild-section="HeroAtelierSection" data-webild-section-id="HeroAtelierSection-1" data-section="hero">
        <HeroAtelierSection
          modelPose={{
            ry: 360,
            scale: 1,
          }}
          media="model"
        />
      </div>

      {/* Five Dedicated Services Section */}
      <div id="services" data-webild-section="ServicesSection" data-webild-section-id="ServicesSection-1" data-section="services">
        <ServicesSection />
      </div>

      {/* Interactive 3D Car Customizer Visualizer */}
      <div id="customizer" data-webild-section="Customizer3DSection" data-webild-section-id="Customizer3DSection-1" data-section="customizer">
        <Customizer3DSection onApplySpec={handleApplySpec} />
      </div>

      {/* Filterable Portfolio Gallery & Before/After Drag Slider */}
      <div id="portfolio" data-webild-section="PortfolioSection" data-webild-section-id="PortfolioSection-1" data-section="portfolio">
        <PortfolioSection />
      </div>

      {/* About The Atelier */}
      <div id="about" data-webild-section="AboutSection" data-webild-section-id="AboutSection-1" data-section="about">
        <AboutSection />
      </div>

      {/* Atelier Pricing Packages */}
      <div id="pricing" data-webild-section="PricingAxisColumns" data-webild-section-id="PricingAxisColumns-1" data-section="pricing">
        <PricingAxisColumns
          counter="03 Options"
          title="Atelier Packages"
          description="Tailored styling and paint protection packages crafted for discerning vehicle owners in Canton of Zurich."
          items={[
            {
              name: "Partial Wrap & Accents",
              price: "From CHF 1,200",
              features: [
                "Chrome delete blackout trim",
                "Gloss roof & mirror accents",
                "Custom bonnet & stripe details",
                "3-Year Atelier Warranty"
              ],
              button: {
                text: "Inquire Package",
                href: "#contact"
              }
            },
            {
              name: "Full Body Car Wrap",
              price: "From CHF 3,800",
              features: [
                "Full color & texture change",
                "Door jamb edge execution",
                "Knifeless tape technology",
                "5-Year Atelier Warranty"
              ],
              button: {
                text: "Inquire Package",
                href: "#contact"
              }
            },
            {
              name: "PPF Shield Protection",
              price: "From CHF 4,500",
              features: [
                "Self-healing 200μm clear film",
                "Front Track or Full Armor",
                "Stone chip gravel defense",
                "10-Year Manufacturer Warranty"
              ],
              button: {
                text: "Inquire Package",
                href: "#contact"
              }
            }
          ]}
          model={{
            rx: -27,
            ry: 360,
            radius: 7,
            scale: 0.85,
            sm: {
              radius: 9
            }
          }}
          media="model"
        />
      </div>

      {/* Owner Testimonials */}
      <div id="testimonials" data-webild-section="TestimonialAxisCounter" data-webild-section-id="TestimonialAxisCounter-1" data-section="testimonials">
        <TestimonialAxisCounter
          items={[
            {
              quote: "Flawless satin wrap finish on my 911 GT3 RS. The edges around the door jambs are completely indistinguishable from factory paint.",
              name: "Marc von Berg",
              role: "Porsche 911 GT3 RS Owner — Zurich"
            },
            {
              quote: "Full PPF application gave me complete confidence on high-speed alpine passes. Zero stone chip damage after 15,000 kilometers.",
              name: "Nathan Bennett",
              role: "Audi RS6 Avant Owner — Zurich"
            },
            {
              quote: "Sleek chrome delete blackout transformed the profile of my AMG GT instantly. Extraordinary Swiss craft standards.",
              name: "Imogen Price",
              role: "Mercedes-AMG GT 63 S Owner — Zurich"
            },
            {
              quote: "Meticulous dust-free clean room execution. The customizer online matched the physical vinyl sample 100%.",
              name: "Callum Henderson",
              role: "BMW M4 Competition Owner — Zurich"
            }
          ]}
          model={{
            ry: 380,
            rx: -15,
            radius: 7,
            scale: 0.75,
            sm: {
              radius: 9
            }
          }}
          media="image"
        />
      </div>

      {/* Frequently Asked Questions */}
      <div id="faq" data-webild-section="FaqTrackedRows" data-webild-section-id="FaqTrackedRows-1" data-section="faq">
        <FaqTrackedRows
          title="Atelier FAQ"
          items={[
            {
              question: "How long does a full vehicle wrap take at your Zurich studio?",
              answer: "Full car wraps typically require between 3 and 5 business days. This allows sufficient time for precision panel disassembly, micro-cleaning preparation, knifeless vinyl installation, and post-heating curing."
            },
            {
              question: "Are your window tints and lighting wraps 100% legal on Swiss roads?",
              answer: "Yes. All ceramic window tinting and optical lighting films installed at our Canton of Zurich atelier strictly comply with applicable Swiss Federal Road Traffic Office (ASTRA) regulations."
            },
            {
              question: "What is the difference between vinyl car wrapping and Paint Protection Film (PPF)?",
              answer: "Vinyl wrapping is designed to transform the aesthetic color, finish, and texture of your vehicle (gloss, matte, satin, metallic). Paint Protection Film (PPF) is an optically clear 200-micron self-healing armor engineered specifically for impact protection against stone chips and gravel."
            },
            {
              question: "Will wrapping or PPF damage my vehicle's original factory paint?",
              answer: "No. High-quality European vinyl and PPF films protect your original paint from UV degradation and minor scratches. When professionally removed, your original paint remains preserved in factory condition."
            },
            {
              question: "How do I schedule an appointment at the Canton of Zurich atelier?",
              answer: "Services are provided strictly by private appointment. You can submit an inquiry with your preferred vehicle specs through our online form or connect with us directly via WhatsApp."
            }
          ]}
          model={{
            rx: -15,
            ry: 370,
            radius: 10,
            scale: 0.8,
            sm: {
              radius: 10,
              scale: 0.95
            }
          }}
          media="image"
        />
      </div>

      {/* Detailed Customer Inquiry Form with Image Upload & Spec Population */}
      <div id="contact" data-webild-section="ContactInquirySection" data-webild-section-id="ContactInquirySection-1" data-section="contact">
        <ContactInquirySection appliedSpec={appliedSpec} />
      </div>

      {/* Instagram Feed Section */}
      <div id="instagram" data-webild-section="InstagramSection" data-webild-section-id="InstagramSection-1" data-section="instagram">
        <InstagramSection />
      </div>

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppWidget />
    </>
  );
}
