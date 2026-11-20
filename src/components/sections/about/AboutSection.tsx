import { Shield, Award, Sparkles, MapPin, Lock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40">
      <div className="mx-auto w-[var(--container)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Award className="size-3.5 text-primary" />
              <span>Canton of Zurich Atelier</span>
            </div>

            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9] mb-6">
              Precision. Protection. <br />
              <span className="text-foreground/50">Personalization.</span>
            </h2>

            <p className="text-[length:var(--text-body-lg)] text-foreground/80 leading-relaxed mb-6">
              JD CAR WRAPPING ATELIER was founded on a simple principle: to deliver uncompromising automotive customization and paint protection to Zurich’s most discerning car collectors and enthusiasts.
            </p>

            <p className="text-[length:var(--text-body)] text-foreground/60 leading-relaxed mb-8">
              Operating strictly by private appointment from our state-of-the-art facility in the Canton of Zurich, we combine European precision engineering, dust-free climate control, and knifeless tape technology to guarantee zero blade contact with your vehicle's original factory paint.
            </p>

            {/* Atelier Standards Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3 p-4 border border-border/40 bg-card/40">
                <Shield className="size-5 text-foreground shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">Climate-Controlled Booth</h4>
                  <p className="text-xs text-foreground/60 mt-1">Filtered air circulation eliminates micro-dust for glass-smooth vinyl installation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border border-border/40 bg-card/40">
                <Sparkles className="size-5 text-foreground shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">0% Blade-to-Paint Risk</h4>
                  <p className="text-xs text-foreground/60 mt-1">Knifeless filament tapes guarantee perfect trim lines with zero blade touch.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border border-border/40 bg-card/40">
                <Lock className="size-5 text-foreground shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">Appointment Exclusivity</h4>
                  <p className="text-xs text-foreground/60 mt-1">Dedicated one-on-one studio attention for every vehicle entrusted to our care.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border border-border/40 bg-card/40">
                <MapPin className="size-5 text-foreground shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">Swiss Legal Compliance</h4>
                  <p className="text-xs text-foreground/60 mt-1">All window tints and lighting modifications adhere 100% to Swiss road laws.</p>
                </div>
              </div>
            </div>

            {/* Atelier Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40">
              <div>
                <span className="block text-2xl sm:text-3xl font-light [font-family:var(--font-heading)] text-foreground">500+</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">Vehicles Wrapped</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-light [font-family:var(--font-heading)] text-foreground">10-Year</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">PPF Warranty</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-light [font-family:var(--font-heading)] text-foreground">100%</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">Swiss Precision</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photograph */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-border/60 bg-card aspect-[4/5]">
            <img
              src="https://images.pexels.com/photos/5895627/pexels-photo-5895627.jpeg?auto=compress&w=1200"
              alt="Atelier technician inspecting paint finish at JD Car Wrapping Studio Zurich"
              className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-background/80 border border-border/60">
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary block mb-1">
                Studio Location — Canton of Zurich
              </span>
              <p className="text-sm font-mono text-foreground">
                Private Appointment Only • Studio Location Disclosed Upon Booking Confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
