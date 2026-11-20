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
import { useLanguage } from "@/context/useLanguage";

export default function HomePage() {
  const { t } = useLanguage();
  const [appliedSpec, setAppliedSpec] = useState<{
    colorName: string;
    finish: string;
    hex: string;
  } | null>(null);

  const handleApplySpec = (spec: { colorName: string; finish: string; hex: string }) => {
    setAppliedSpec(spec);
  };

  const pricingItems = t.pricing.items.map((p) => ({
    ...p,
    button: {
      text: t.pricing.inquireBtn,
      href: "#contact",
    },
  }));

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
          counter={t.pricing.counter}
          title={t.pricing.title}
          description={t.pricing.description}
          items={pricingItems}
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
          items={t.testimonials.items}
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
          counter={t.faq.counter}
          title={t.faq.title}
          script={t.faq.script}
          items={t.faq.items}
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
