import { useState } from "react";
import HeroAtelierSection from "@/components/sections/hero/HeroAtelierSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import Customizer3DSection from "@/components/sections/customizer/Customizer3DSection";
import FindYourFinishSection from "@/components/sections/customizer/FindYourFinishSection";
import PortfolioSection from "@/components/sections/portfolio/PortfolioSection";
import DetailsSection from "@/components/sections/details/DetailsSection";
import AboutSection from "@/components/sections/about/AboutSection";
import HowItWorksSection from "@/components/sections/about/HowItWorksSection";
import TestimonialAxisCounter from "@/components/sections/testimonial/TestimonialAxisCounter";
import FaqTrackedRows from "@/components/sections/faq/FaqTrackedRows";
import ContactInquirySection from "@/components/sections/contact/ContactInquirySection";
import InstagramSection from "@/components/sections/instagram/InstagramSection";
import WhatsAppWidget from "@/components/sections/whatsapp/WhatsAppWidget";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
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

  return (
    <>
      <ScrollToneBackdrop />

      <LoaderRingProgress />

      {/* Hero Section */}
      <div id="hero" data-webild-section="HeroAtelierSection" data-webild-section-id="HeroAtelierSection-1" data-section="hero">
        <HeroAtelierSection
          media="image"
        />
      </div>

      {/* Five Dedicated Services Section */}
      <div id="services" data-webild-section="ServicesSection" data-webild-section-id="ServicesSection-1" data-section="services">
        <ServicesSection />
      </div>

      {/* Interactive 3D Porsche 911 Car Customizer Visualizer */}
      <div id="customizer" data-webild-section="Customizer3DSection" data-webild-section-id="Customizer3DSection-1" data-section="customizer">
        <Customizer3DSection onApplySpec={handleApplySpec} />
      </div>

      {/* Find Your Finish Material Showcase */}
      <div id="finishes" data-webild-section="FindYourFinishSection" data-webild-section-id="FindYourFinishSection-1" data-section="finishes">
        <FindYourFinishSection />
      </div>

      {/* Filterable Portfolio Gallery (Asymmetric Editorial Collage) */}
      <div id="portfolio" data-webild-section="PortfolioSection" data-webild-section-id="PortfolioSection-1" data-section="portfolio">
        <PortfolioSection />
      </div>

      {/* Details Make The Difference Section */}
      <div id="details" data-webild-section="DetailsSection" data-webild-section-id="DetailsSection-1" data-section="details">
        <DetailsSection />
      </div>

      {/* About The Atelier */}
      <div id="about" data-webild-section="AboutSection" data-webild-section-id="AboutSection-1" data-section="about">
        <AboutSection />
      </div>

      {/* How It Works (4-Step Customer Journey) */}
      <div id="how-it-works" data-webild-section="HowItWorksSection" data-webild-section-id="HowItWorksSection-1" data-section="how-it-works">
        <HowItWorksSection />
      </div>

      {/* Owner Testimonials */}
      <div id="testimonials" data-webild-section="TestimonialAxisCounter" data-webild-section-id="TestimonialAxisCounter-1" data-section="testimonials">
        <TestimonialAxisCounter
          items={t.testimonials.items}
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
