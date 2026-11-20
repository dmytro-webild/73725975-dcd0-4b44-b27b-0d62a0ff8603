import { useState, useRef, useEffect } from "react";
import { Upload, X, CheckCircle2, Send, MessageCircle, MapPin, Mail, Phone, Calendar, Car, Image as ImageIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("2024");
  const [customSpecText, setCustomSpecText] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Full Car Wrap"]);
  const [appointmentDate, setAppointmentDate] = useState("");
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

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
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
    }, 1200);
  };

  const buildWhatsAppUrl = () => {
    const specInfo = customSpecText ? ` Spec: ${customSpecText}.` : "";
    const vehicleInfo = `${vehicleYear} ${vehicleMake} ${vehicleModel}`.trim() || "Vehicle";
    const servicesText = selectedServices.join(", ") || "Car Wrapping";
    const text = encodeURIComponent(
      `Hello JD Car Wrapping Atelier Zurich! I would like to request a quote for my ${vehicleInfo}.${specInfo} Services: ${servicesText}. My name is ${clientName || "Customer"}.`
    );
    return `https://wa.me/41790000000?text=${text}`;
  };

  return (
    <section id="contact" className={cn("relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40", className)}>
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Mail className="size-3.5 text-primary" />
              <span>Atelier Consultations</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              Request Atelier Quote <br />
              <span className="text-foreground/50">Private Consultation Zurich</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/60 max-w-md">
            Complete the specification form below or connect directly via WhatsApp to receive a bespoke quote for your vehicle.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-8 border border-border/60 bg-card/60 p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
            {isSubmitted ? (
              <div className="text-center py-16 px-4 space-y-6">
                <div className="size-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="text-[length:var(--text-h2)] font-light uppercase [font-family:var(--font-heading)]">
                  Inquiry Received
                </h3>
                <p className="text-[length:var(--text-body-lg)] text-foreground/80 max-w-md mx-auto">
                  Thank you, <span className="text-foreground font-semibold">{clientName || "Valued Client"}</span>. Our senior wrapping technician will review your vehicle specifications and contact you within 24 hours.
                </p>

                <div className="p-4 bg-muted/40 border border-border/40 font-mono text-xs max-w-md mx-auto space-y-2 text-left text-foreground/70">
                  <div><span className="text-foreground/40">Vehicle:</span> {vehicleYear} {vehicleMake} {vehicleModel}</div>
                  <div><span className="text-foreground/40">Services:</span> {selectedServices.join(", ")}</div>
                  {customSpecText && <div><span className="text-foreground/40">Custom Spec:</span> {customSpecText}</div>}
                  <div><span className="text-foreground/40">Location:</span> Canton of Zurich Studio</div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setVehicleMake("");
                      setVehicleModel("");
                      setCustomSpecText("");
                      removeImage();
                    }}
                    className="px-6 py-3 border border-border/80 font-mono text-xs uppercase tracking-widest hover:bg-muted transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-600 text-white font-mono text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all inline-flex items-center gap-2"
                  >
                    <MessageCircle className="size-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Vehicle Details */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                    <Car className="size-4" />
                    <span>1. Vehicle Information</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-foreground/60 uppercase block mb-1">Year</label>
                      <input
                        type="text"
                        value={vehicleYear}
                        onChange={(e) => setVehicleYear(e.target.value)}
                        placeholder="e.g. 2024"
                        className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-foreground/60 uppercase block mb-1">Make</label>
                      <input
                        type="text"
                        value={vehicleMake}
                        onChange={(e) => setVehicleMake(e.target.value)}
                        placeholder="e.g. Porsche / BMW / Audi"
                        className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-foreground/60 uppercase block mb-1">Model / Trim</label>
                      <input
                        type="text"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        placeholder="e.g. 911 GT3 RS / M4 Comp"
                        className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Service Selection Checkboxes */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
                    2. Select Required Services
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Full Car Wrap", "Partial Wrap", "Chrome Delete", "PPF Protection", "Window Tinting", "Custom Detail"].map((srv) => {
                      const isChecked = selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={cn(
                            "p-3 text-xs font-mono uppercase tracking-wider text-left border transition-all cursor-pointer flex items-center justify-between",
                            isChecked
                              ? "bg-foreground text-background border-foreground font-semibold"
                              : "bg-muted/20 text-foreground/70 border-border/40 hover:bg-muted"
                          )}
                        >
                          <span>{srv}</span>
                          {isChecked && <CheckCircle2 className="size-4 text-background shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Desired Color / Customizer Spec */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-mono text-foreground/60 uppercase">Desired Color, Finish & Spec</label>
                    {appliedSpec && (
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                        ✓ 3D Spec Applied
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    value={customSpecText}
                    onChange={(e) => setCustomSpecText(e.target.value)}
                    placeholder="e.g. Stealth Satin Obsidian Black / Nardo Grey Gloss / Forged Carbon Roof"
                    className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground"
                  />
                </div>

                {/* 4. Reference Image Upload */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-primary mb-2 block flex items-center gap-2">
                    <ImageIcon className="size-3.5" />
                    <span>4. Attach Vehicle / Design Photo (Optional)</span>
                  </label>

                  {uploadedImage ? (
                    <div className="p-4 bg-muted/50 border border-border/60 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <img src={uploadedImage.url} alt="Vehicle Upload Preview" className="size-14 object-cover border border-border/60 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-mono text-foreground truncate">{uploadedImage.name}</p>
                          <span className="text-[10px] font-mono text-foreground/50">{uploadedImage.size} • Ready for quote</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeImage}
                        className="p-2 text-foreground/50 hover:text-foreground hover:bg-muted border border-border/40 transition-all cursor-pointer"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className="border border-dashed border-border/80 hover:border-foreground/50 bg-muted/20 p-6 text-center cursor-pointer transition-all group"
                    >
                      <Upload className="size-6 text-foreground/40 group-hover:text-foreground mx-auto mb-2 transition-colors" />
                      <p className="text-xs font-mono text-foreground/80 uppercase tracking-wider">
                        Click or Drag & Drop Vehicle Photo
                      </p>
                      <p className="text-[10px] font-mono text-foreground/50 mt-1">
                        PNG, JPG or WEBP up to 10MB
                      </p>
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

                {/* 5. Preferred Date & Client Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-foreground/60 uppercase block mb-1">Preferred Timeframe / Date</label>
                    <input
                      type="text"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      placeholder="e.g. Next Week / Preferred Month"
                      className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-foreground/60 uppercase block mb-1">Full Name</label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-foreground/60 uppercase block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-foreground/60 uppercase block mb-1">Phone Number (CH / Int)</label>
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+41 79 000 00 00"
                      className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-[11px] font-mono text-foreground/60 uppercase block mb-1">Additional Project Details</label>
                  <textarea
                    rows={3}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Mention any specific requests, door jamb wrapping, ceramic coating add-on, or vehicle condition..."
                    className="w-full px-4 py-3 bg-muted/40 border border-border/60 text-foreground font-mono text-xs focus:outline-none focus:border-foreground resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/40">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-semibold hover:bg-foreground/90 transition-all inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Specification...</span>
                    ) : (
                      <>
                        <Send className="size-4" />
                        <span>Submit Atelier Quote Request</span>
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
                    <span>Quick WhatsApp Quote</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards & Location Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 border border-border/60 bg-card/60 backdrop-blur-sm space-y-6">
              <h3 className="text-[length:var(--text-h3)] font-light uppercase tracking-tight [font-family:var(--font-heading)]">
                Atelier Location
              </h3>

              <div className="space-y-4 font-mono text-xs text-foreground/80">
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground/50 block">Studio Location:</span>
                    <span>Canton of Zurich, Switzerland</span>
                    <p className="text-[10px] text-foreground/50 mt-0.5">Exact address provided upon private appointment booking confirmation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-border/40">
                  <Mail className="size-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground/50 block">Email Consultations:</span>
                    <a href="mailto:info@jdcarwrapping.ch" className="hover:underline">info@jdcarwrapping.ch</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-border/40">
                  <Phone className="size-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground/50 block">WhatsApp Studio Line:</span>
                    <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-400">
                      +41 79 000 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-border/40">
                  <Calendar className="size-4 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground/50 block">Operating Hours:</span>
                    <span>Monday – Friday: 08:00 – 18:00</span>
                    <p className="text-[10px] text-foreground/50 mt-0.5">Saturday: By Prior Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Box */}
            <div className="p-6 border border-emerald-600/40 bg-emerald-950/20 backdrop-blur-sm text-foreground space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest font-semibold">
                <MessageCircle className="size-4" />
                <span>Instant WhatsApp Spec</span>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed font-mono">
                Have photos of your car ready on your phone? Click below to send your vehicle specs and photos directly to our Zurich head installer.
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 text-white font-mono text-xs uppercase tracking-widest text-center hover:bg-emerald-500 transition-all font-semibold block"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
