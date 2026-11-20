import HeroWordmarkDial from "@/components/sections/hero/HeroWordmarkDial";
import FeaturesVerticalWordmark from "@/components/sections/features/FeaturesVerticalWordmark";
import PricingAxisColumns from "@/components/sections/pricing/PricingAxisColumns";
import GallerySinglePart from "@/components/sections/gallery/GallerySinglePart";
import TestimonialAxisCounter from "@/components/sections/testimonial/TestimonialAxisCounter";
import FaqTrackedRows from "@/components/sections/faq/FaqTrackedRows";
import ContactAnchorDetails from "@/components/sections/contact/ContactAnchorDetails";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import ModelStage from "@/components/kit/ModelStage";
import LoaderRingProgress from "@/components/loaders/LoaderRingProgress";

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop

      />

      <ModelStage
        src="https://storage.googleapis.com/webild/default/models/supercar/model.a5a995cd30bf.glb"
        scale={3.7}
      />

      <LoaderRingProgress

      />

      <div id="hero" data-webild-section="HeroWordmarkDial" data-webild-section-id="HeroWordmarkDial-1" data-section="hero">
        <HeroWordmarkDial
          title="JD WRAP"
          modelPose={{}}
          colorLabel="Finish"
          items={[
            {
              name: "Satin Obsidian"
            }
          ]}
          modelLabel="Studio"
          model="ZH-01"
          introDelay={2.6}
          media="model"
          productImageAlt="Technician inspecting vehicle paint finish at JD Car Wrapping Atelier in Zurich"
        />
      </div>

      <div id="finishes" data-webild-section="FeaturesVerticalWordmark" data-webild-section-id="FeaturesVerticalWordmark-1" data-section="finishes">
        <FeaturesVerticalWordmark
          title="JD WRAP"
          items={[
            {
              title: "Full Car Wrapping",
              description: "Complete vehicle color transformation available in gloss, matte, satin, metallic, and custom vinyl finishes tailored for your luxury vehicle."
            },
            {
              title: "Paint Protection Film",
              description: "Transparent self-healing PPF engineered to shield original factory paint against stone chips, scratches, and road debris across Swiss roads."
            },
            {
              title: "Chrome Delete",
              description: "Sleek blackout styling for window trims, front grilles, and side mirrors, alongside targeted partial body panel accents."
            }
          ]}
          model={{
            ry: 360
          }}
          media="model"
          productImageAlt="Technician applying custom blue wrap to vehicle body panel"
        />
      </div>

      <div id="pricing" data-webild-section="PricingAxisColumns" data-webild-section-id="PricingAxisColumns-1" data-section="pricing">
        <PricingAxisColumns
          counter="03 options"
          title="Atelier Tiers"
          description="Tailored styling and paint protection packages crafted for discerning vehicle owners in Zurich."
          items={[
            {
              name: "Partial Wrap",
              price: "By Quote",
              features: [
                "Chrome delete detail",
                "Roof and mirror wrap",
                "Custom panel accents"
              ],
              button: {
                text: "Request Quote",
                href: "#contact"
              }
            },
            {
              name: "Full Wrap",
              price: "By Quote",
              features: [
                "Full color change",
                "Matte or satin wrap",
                "Precision application"
              ],
              button: {
                text: "Request Quote",
                href: "#contact"
              }
            },
            {
              name: "PPF Shield",
              price: "By Quote",
              features: [
                "Paint protection film",
                "Stone chip defense",
                "Self healing film"
              ],
              button: {
                text: "Request Quote",
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

      <div id="profile" data-webild-section="GallerySinglePart" data-webild-section-id="GallerySinglePart-1" data-section="profile">
        <GallerySinglePart
          counter="01 / 07"
          title="Matte Stealth Finish"
          description="Full vehicle body wrap in dark matte film, executed with precision finishing in Zurich."
          model={{
            ry: 360,
            rz: -90,
            rx: -108,
            radius: 4,
            scale: 2.1,
            y: -0.45,
            sm: {
              radius: 6,
              scale: 1.3,
              y: -0.3
            }
          }}
          media="image"
          productImageSrc="https://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342620.jpg"
          productImageAlt="Person working on car wrapping"
        />
      </div>

      <div id="testimonials" data-webild-section="TestimonialAxisCounter" data-webild-section-id="TestimonialAxisCounter-1" data-section="testimonials">
        <TestimonialAxisCounter
          items={[
            {
              quote: "Flawless satin wrap finish. The edges and tension around the corners are perfection.",
              name: "Natalie Coleman",
              role: "Porsche GT3 owner"
            },
            {
              quote: "Full PPF application gave me complete peace of mind on the alpine roads.",
              name: "Nathan Bennett",
              role: "Audi RS6 owner"
            },
            {
              quote: "Sleek chrome delete transformed the look of my car instantly. Sublime craft.",
              name: "Imogen Price",
              role: "Tesla Model S owner"
            },
            {
              quote: "Meticulous attention to detail. The studio standard in Zurich is unmatched.",
              name: "Callum Henderson",
              role: "BMW M5 owner"
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

      <div id="faq" data-webild-section="FaqTrackedRows" data-webild-section-id="FaqTrackedRows-1" data-section="faq">
        <FaqTrackedRows
          title="Before Booking"
          items={[
            {
              question: "How long does a full vehicle wrap take?",
              answer: "Full wraps take between 3 and 5 business days to ensure proper disassembly, surface preparation, vinyl application, and curing."
            },
            {
              question: "Are your window tints legal on Swiss roads?",
              answer: "Yes. All window tinting installed at our atelier strictly complies with applicable Swiss road traffic regulations."
            },
            {
              question: "What is the difference between vinyl and PPF?",
              answer: "Vinyl wrapping alters the color and visual finish of your car, while Paint Protection Film provides a clear layer to safeguard paint from chips and scratches."
            },
            {
              question: "Can paint protection film be safely removed?",
              answer: "Yes. Professional removal preserves your vehicle's original factory paint completely intact."
            },
            {
              question: "How do I schedule an atelier appointment?",
              answer: "Services are offered strictly by appointment at our Canton of Zurich location. Contact us online or via email to reserve a time slot."
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

      <div id="contact" data-webild-section="ContactAnchorDetails" data-webild-section-id="ContactAnchorDetails-1" data-section="contact">
        <ContactAnchorDetails
          title="Request a Quote"
          model={{
            ry: 380,
            rx: -15,
            radius: 6,
            scale: 0.77
          }}
          media="image"
          details={[
            {
              label: "Location",
              value: "Zurich (By appointment)"
            },
            {
              label: "Email",
              value: "info@jdcarwrapping.ch",
              href: "mailto:info@jdcarwrapping.ch"
            },
            {
              label: "Opening Hours",
              value: "Mon to Fri, 08:00 to 18:00"
            }
          ]}
          nameLabel="Full Name"
          emailLabel="Email Address"
          messageLabel="Vehicle Model & Service Details"
          submitText="Submit Inquiry"
          successText="Thank you. Our team will review your inquiry and reply promptly."
        />
      </div>
    </>
  );
}
