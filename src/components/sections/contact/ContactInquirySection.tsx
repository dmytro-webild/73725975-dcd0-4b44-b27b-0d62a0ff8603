import { useState, useRef, useEffect } from "react";
import { Upload, X, CheckCircle2, Send, MessageCircle, MapPin, Mail, Phone, Calendar, Car, Image as ImageIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export interface SpecProp {
  colorName: string;
  finish: string;
  hex: string;
}

export interface ContactInquirySectionProps {
  className?: string;
  appliedSpec?: SpecProp | null;
}

export default function ContactInquirySection({ className, appliedSpec }: ContactInquirySectionProps) {
  const { t } = useLanguage();

  const [vehicle, setVehicle] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [customSpecText, setCustomSpecText] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Full Car Wrap"]);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  // Photo Upload State
  const [uploadedImage, setUploadedImage] = useState<{ url: string; name: string; size: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-populate when appliedSpec prop changes
  useEffect(() => {
    if (appliedSpec) {
      setCustomSpecText(`${appliedSpec.colorName} (${appliedSpec.finish} Finish)`);
      setSelectedServices((prev) => (prev.includes("Full Car Wrap") ? prev : [...prev, "Full Car Wrap"]));
    }
  }, [appliedSpec]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      setUploadedImage({
        url,
        name: file.name,
        size: `${sizeMb} MB`,
      });
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const buildWhatsAppUrl = () => {
    const specInfo = customSpecText ? ` Spec: ${customSpecText}.` : "";
    const vehicleInfo = `${vehicleYear ? vehicleYear + " " : ""}${vehicle}`.trim() || "Vehicle";
    const servicesText = selectedServices.join(", ") || "Car Wrapping";
    const text = encodeURIComponent(
      `Hello JD Car Wrapping Atelier Zurich! I would like to request a quote for my ${vehicleInfo}.${specInfo} Services: ${servicesText}. My name is ${clientName || "Customer"}.`
    );
    return `https://wa.me/41790000000?text=${text}`;
  };

  const availableServicesOptions = [
    "Full Car Wrap",
    "PPF Protection",
    "Chrome Delete",
    "Window Tinting",
    "Custom Detail"
  ];

  return (
    <section id="contact" className={cn("relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40 overflow-x-clip", className)}>
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Mail className="size-3.5 text-primary" />
              <span>{t.contact.badge}</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              {t.contact.titleLine1} <br />
              <span className="text-foreground/50">{t.contact.titleLine2}</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/60 max-w-md">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Streamlined Inquiry Form */}
          <div className="lg:col-span-8 border border-border/60 bg-card/60 p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
            {isSubmitted ? (
              <div className="text-center py-12 px-4 space-y-6">
                <div className="size-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="text-[length:var(--text-h2)] font-light uppercase [font-family:var(--font-heading)]">
                  {t.contact.submittedTitle}
                </h3>
                <p className="text-[length:var(--text-body-lg)] text-foreground/80 max-w-md mx-auto">
                  {t.contact.submittedMessage.replace("{name}", clientName || "Valued Client")}
                </p>

                <div className="p-4 bg-muted/40 border border-border/40 font-mono text-xs max-w-md mx-auto space-y-2 text-left text-foreground/70">
                  <div><span className="text-foreground/40">Vehicle:</span> {vehicleYear ? `${vehicleYear} ` : ""}{vehicle}</div>
                  <div><span className="text-foreground/40">Services:</span> {selectedServices.join(", ")}</div>
                  {customSpecText && <div><span className="text-foreground/40">Custom Spec:</span> {customSpecText}</div>}
                  <div><span className="text-foreground/40">Studio:</span> Canton of Zurich Atelier</div>
                </div>

                <div className="pt-4 flex justify-center gap-4 flex-wrap">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setVehicle("");
                      setVehicleYear("");
                      setCustomSpecText("");
                      removeImage();
                    }}
                    className="px-6 py-3 border border-border/80 font-mono text-xs uppercase tracking-widest hover:bg-muted transition-all cursor-pointer"
                  >
                    {t.contact.submitAnother}
                  </button>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-600 text-white font-mono text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all inline-flex items-center gap-2"
                  >
                    <MessageCircle className="size-4" />
                    <span>{t.contact.whatsappDirect}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Section 1: Vehicle & Services */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="sm:col-span-3">
                      <label className="text-[11px] font-mono text-foreground/70 uppercase block mb-1.5 flex items-center gap-1.5 font-semibold">
                        <Car className="size-3.5 text-primary" />
                        <span>Vehicle Make & Model *</span>
                      </label>
                      <input
                        type="text"
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        placeholder="e.g. Porsche 911 GT3 RS / BMW M4"
                        className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-foreground/70 uppercase block mb-1.5">
                        Year
                      </label>
                      <input
                        type="text"
                        value={vehicleYear}
                        onChange={(e) => setVehicleYear(e.target.value)}
                        placeholder="2024"
                        className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services Pill Selector */}
                  <div>
                    <label className="text-[11px] font-mono text-foreground/70 uppercase block mb-2 font-semibold">
                      Select Required Services *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServicesOptions.map((srv) => {
                        const isChecked = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={cn(
                              "px-3 py-2 text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer flex items-center gap-2",
                              isChecked
                                ? "bg-foreground text-background border-foreground font-medium"
                                : "bg-muted/20 text-foreground/70 border-border/40 hover:border-foreground/40 hover:text-foreground"
                            )}
                          >
                            <span>{srv}</span>
                            {isChecked && <CheckCircle2 className="size-3.5 text-background" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/40 my-4" />

                {/* Section 2: Color Finish & Optional Photo */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[11px] font-mono text-foreground/70 uppercase font-semibold">
                        Desired Color / Finish / 3D Spec
                      </label>
                      {appliedSpec && (
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-medium">
                          ✓ 3D Spec Applied
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      value={customSpecText}
                      onChange={(e) => setCustomSpecText(e.target.value)}
                      placeholder="e.g. Satin Obsidian Black / Nardo Grey / Forged Carbon Roof"
                      className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  {/* Compact Photo Upload */}
                  <div>
                    {uploadedImage ? (
                      <div className="p-3 bg-muted/50 border border-border/60 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <img src={uploadedImage.url} alt="Vehicle Preview" className="size-10 object-cover border border-border/60 shrink-0" />
                          <div className="min-w-0">
                            <p className="text-xs font-mono text-foreground truncate">{uploadedImage.name}</p>
                            <span className="text-[10px] font-mono text-emerald-400">{uploadedImage.size} • Photo attached</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeImage}
                          className="p-1.5 text-foreground/50 hover:text-foreground hover:bg-muted transition-all cursor-pointer"
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-3 border border-dashed border-border/60 hover:border-foreground/50 bg-muted/20 transition-all">
                        <div className="flex items-center gap-2">
                          <ImageIcon className="size-4 text-foreground/50" />
                          <span className="text-xs font-mono text-foreground/70">
                            Attach Vehicle Photo (Optional)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-3 py-1 bg-muted border border-border/60 font-mono text-[10px] uppercase tracking-wider text-foreground hover:bg-muted/80 transition-all cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <Upload className="size-3" />
                          <span>Browse</span>
                        </button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-px bg-border/40 my-4" />

                {/* Section 3: Client Contact Details */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-foreground/70 uppercase block mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-foreground/70 uppercase block mb-1.5 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="name@domain.ch"
                        className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-foreground/70 uppercase block mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+41 79 000 00 00"
                        className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-foreground/70 uppercase block mb-1.5">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="Special requests, door jamb wrapping, ceramic coating add-on, preferred date..."
                      className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground resize-none transition-colors"
                    />
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/40">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-semibold hover:bg-foreground/90 transition-all inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.sections.submitting}</span>
                    ) : (
                      <>
                        <Send className="size-4" />
                        <span>Request Atelier Quote</span>
                      </>
                    )}
                  </button>

                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-4 border border-emerald-600/60 text-emerald-400 font-mono text-xs uppercase tracking-widest hover:bg-emerald-950/40 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="size-4" />
                    <span>Instant WhatsApp Quote</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards & Location Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 border border-border/60 bg-card/60 backdrop-blur-sm space-y-6">
              <h3 className="text-[length:var(--text-h3)] font-light uppercase tracking-tight [font-family:var(--font-heading)]">
                {t.contact.info.title}
              </h3>

              <div className="space-y-4 font-mono text-xs text-foreground/80">
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground/50 block">{t.contact.info.locationLabel}</span>
                    <span>{t.contact.info.locationVal}</span>
                    <p className="text-[10px] text-foreground/50 mt-0.5">{t.contact.info.locationNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-border/40">
                  <Mail className="size-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground/50 block">{t.contact.info.emailLabel}</span>
                    <a href="mailto:info@jdcarwrapping.ch" className="hover:underline">info@jdcarwrapping.ch</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-border/40">
                  <Phone className="size-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground/50 block">{t.contact.info.phoneLabel}</span>
                    <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-400">
                      +41 79 000 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-border/40">
                  <Calendar className="size-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground/50 block">{t.contact.info.hoursLabel}</span>
                    <span>{t.contact.info.hoursVal}</span>
                    <p className="text-[10px] text-foreground/50 mt-0.5">{t.contact.info.hoursNote}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Box */}
            <div className="p-6 border border-emerald-600/40 bg-emerald-950/20 backdrop-blur-sm text-foreground space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest font-semibold">
                <MessageCircle className="size-4" />
                <span>{t.contact.info.instantWhatsappTitle}</span>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed font-mono">
                {t.contact.info.instantWhatsappDesc}
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 text-white font-mono text-xs uppercase tracking-widest text-center hover:bg-emerald-500 transition-all font-semibold block"
              >
                {t.contact.info.instantWhatsappBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
