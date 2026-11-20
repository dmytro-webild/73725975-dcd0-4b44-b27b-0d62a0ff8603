import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import ExampleSportsCar from "@/components/models/ExampleSportsCar";
import { Sparkles, ArrowRight, RotateCcw, Palette, Layers, Check, Shield } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  finishType: "Matte" | "Satin" | "Gloss" | "Metallic";
  roughness: number;
  metalness: number;
}

const COLOR_PRESETS: ColorOption[] = [
  { id: "stealth-black", name: "Stealth Obsidian", hex: "#121214", finishType: "Satin", roughness: 0.45, metalness: 0.3 },
  { id: "nardo-grey", name: "Nardo Grey", hex: "#5b6572", finishType: "Gloss", roughness: 0.12, metalness: 0.2 },
  { id: "frozen-blue", name: "Frozen Satin Blue", hex: "#1e3a8a", finishType: "Satin", roughness: 0.4, metalness: 0.4 },
  { id: "liquid-gold", name: "Liquid Gold", hex: "#b45309", finishType: "Metallic", roughness: 0.22, metalness: 0.95 },
  { id: "emerald-satin", name: "Emerald Satin", hex: "#064e3b", finishType: "Satin", roughness: 0.4, metalness: 0.5 },
  { id: "carmine-red", name: "Carmine Red", hex: "#991b1b", finishType: "Gloss", roughness: 0.08, metalness: 0.2 },
  { id: "champagne-metallic", name: "Champagne Quartz", hex: "#78716c", finishType: "Metallic", roughness: 0.2, metalness: 0.9 },
  { id: "pearl-white", name: "Pearl White", hex: "#e2e8f0", finishType: "Matte", roughness: 0.85, metalness: 0.05 },
];

const FINISHES = [
  { id: "Matte", label: "Matte Finish", roughness: 0.85, metalness: 0.05 },
  { id: "Satin", label: "Satin Finish", roughness: 0.42, metalness: 0.35 },
  { id: "Gloss", label: "Gloss Finish", roughness: 0.08, metalness: 0.2 },
  { id: "Metallic", label: "Metallic Finish", roughness: 0.22, metalness: 0.88 },
];

export interface Customizer3DSectionProps {
  className?: string;
  onApplySpec?: (spec: { colorName: string; finish: string; hex: string }) => void;
}

export default function Customizer3DSection({ className, onApplySpec }: Customizer3DSectionProps) {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(COLOR_PRESETS[0]);
  const [activeFinish, setActiveFinish] = useState<string>(selectedColor.finishType);
  const [appliedNotification, setAppliedNotification] = useState<boolean>(false);

  const handleSelectColor = (color: ColorOption) => {
    setSelectedColor(color);
    setActiveFinish(color.finishType);
  };

  const handleApplyToQuote = () => {
    if (onApplySpec) {
      onApplySpec({
        colorName: selectedColor.name,
        finish: activeFinish,
        hex: selectedColor.hex,
      });
    }
    setAppliedNotification(true);
    setTimeout(() => setAppliedNotification(false), 3000);

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="customizer" className={cn("relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40 overflow-hidden", className)}>
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Sparkles className="size-3.5 text-primary" />
              <span>Interactive 3D Experience</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              Create Your Style <br />
              <span className="text-foreground/50">Automotive Customization Studio</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/60 max-w-md">
            Rotate the 3D model, test luxury vinyl finishes, and select your custom spec to send directly with your Canton of Zurich inquiry.
          </p>
        </div>

        {/* Main 3D Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 3D Canvas Container */}
          <div className="lg:col-span-8 relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] bg-card border border-border/60 overflow-hidden flex flex-col justify-between">
            {/* Background Studio Lights / Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />

            {/* 3D Canvas */}
            <div className="absolute inset-0">
              <Canvas shadows gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[3.8, 1.4, 3.8]} fov={38} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 15, 10]} intensity={1.8} castShadow />
                <directionalLight position={[-10, 8, -5]} intensity={0.6} color="#90b0e0" />

                {/* 3D Car Model */}
                <group position={[0, -0.3, 0]}>
                  <ExampleSportsCar color={selectedColor.hex} />
                </group>

                <ContactShadows position={[0, -0.31, 0]} opacity={0.6} scale={10} blur={1.8} far={4} />

                <OrbitControls
                  enablePan={false}
                  enableZoom={true}
                  minDistance={2.5}
                  maxDistance={6.5}
                  maxPolarAngle={Math.PI / 2 - 0.05}
                  autoRotate
                  autoRotateSpeed={0.8}
                />
              </Canvas>
            </div>

            {/* Canvas Controls Overlay (Top Right / Bottom Left) */}
            <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1.5 bg-background/80 backdrop-blur-md border border-border/60 text-[11px] font-mono uppercase tracking-widest text-foreground pointer-events-auto flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>3D Studio Engine</span>
              </div>

              <div className="px-3 py-1.5 bg-background/80 backdrop-blur-md border border-border/60 text-[11px] font-mono text-foreground/60 pointer-events-auto flex items-center gap-2">
                <RotateCcw className="size-3" />
                <span>Drag to rotate 360°</span>
              </div>
            </div>

            {/* Live Spec Bar Overlay (Bottom) */}
            <div className="relative z-10 p-4 sm:p-6 backdrop-blur-md bg-background/80 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50 block">Active Specification</span>
                <div className="flex items-center gap-3">
                  <div className="size-4 rounded-full border border-border/80 shadow-inner" style={{ backgroundColor: selectedColor.hex }} />
                  <span className="font-mono text-sm uppercase font-semibold tracking-wider text-foreground">
                    {selectedColor.name} — {activeFinish} Wrap
                  </span>
                </div>
              </div>

              <button
                onClick={handleApplyToQuote}
                className="btn-link inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all font-semibold cursor-pointer shadow-lg"
              >
                <span>CREATE YOUR STYLE</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Customizer Control Panel */}
          <div className="lg:col-span-4 p-6 sm:p-8 border border-border/60 bg-card/60 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-6">
                <Palette className="size-4" />
                <span>Customization Options</span>
              </div>

              {/* Vinyl Color Palette */}
              <div className="mb-8">
                <label className="text-xs font-mono uppercase tracking-widest text-foreground/60 mb-3 block">
                  1. Select Vinyl Color Palette ({COLOR_PRESETS.length} Options)
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {COLOR_PRESETS.map((color) => {
                    const isSelected = selectedColor.id === color.id;
                    return (
                      <button
                        key={color.id}
                        onClick={() => handleSelectColor(color)}
                        title={`${color.name} (${color.finishType})`}
                        className={cn(
                          "relative aspect-square rounded-none border transition-all cursor-pointer flex items-center justify-center group overflow-hidden",
                          isSelected
                            ? "border-foreground ring-2 ring-foreground/40 scale-105"
                            : "border-border/60 hover:border-foreground/50"
                        )}
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && (
                          <Check
                            className={cn(
                              "size-4 drop-shadow-md",
                              color.hex === "#e2e8f0" ? "text-background" : "text-foreground"
                            )}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs font-mono text-foreground/50 mt-2">
                  Selected: <span className="text-foreground font-semibold">{selectedColor.name}</span>
                </p>
              </div>

              {/* Finish Type Selection */}
              <div className="mb-8">
                <label className="text-xs font-mono uppercase tracking-widest text-foreground/60 mb-3 block flex items-center gap-2">
                  <Layers className="size-3.5" />
                  <span>2. Select Vinyl Finish & Texture</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {FINISHES.map((f) => {
                    const isSelected = activeFinish === f.id;
                    return (
                      <button
                        key={f.id}
                        onClick={() => setActiveFinish(f.id)}
                        className={cn(
                          "px-3 py-2.5 text-xs font-mono uppercase tracking-wider text-center border transition-all cursor-pointer",
                          isSelected
                            ? "bg-foreground text-background border-foreground font-semibold"
                            : "bg-muted/30 text-foreground/70 border-border/40 hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {f.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Specifications Breakdown Box */}
              <div className="p-4 bg-muted/40 border border-border/40 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-foreground/60">
                  <span>Atelier Standard:</span>
                  <span className="text-foreground">Full Edge Wrapping</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/60">
                  <span>Blade Risk:</span>
                  <span className="text-emerald-400">0% (Knifeless Tape)</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/60">
                  <span>Protection:</span>
                  <span className="text-foreground">UV & Weather Resistant</span>
                </div>
              </div>
            </div>

            <div>
              {appliedNotification && (
                <div className="p-3 mb-4 bg-emerald-950/80 border border-emerald-600/50 text-emerald-200 text-xs font-mono flex items-center gap-2">
                  <Shield className="size-4 shrink-0 text-emerald-400" />
                  <span>Spec applied to inquiry form below!</span>
                </div>
              )}

              <button
                onClick={handleApplyToQuote}
                className="w-full py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-semibold hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>CREATE YOUR STYLE</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
