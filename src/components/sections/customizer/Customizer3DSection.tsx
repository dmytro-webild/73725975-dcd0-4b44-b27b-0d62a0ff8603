import { useState, useMemo, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, ContactShadows, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Sparkles, ArrowRight, RotateCcw, Palette, Layers, Check, Shield } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const PORSCHE_MODEL_URL = "https://storage.googleapis.com/webild/default/models/sports-car/model.fd149a09dc4d.glb";

// Preload Porsche 911 model
useGLTF.preload(PORSCHE_MODEL_URL);

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  finishType: "Matte" | "Satin" | "Gloss" | "Metallic" | "Special";
  roughness: number;
  metalness: number;
  clearcoat: number;
}

const COLOR_PRESETS: ColorOption[] = [
  { id: "stealth-black", name: "Satin Obsidian Black", hex: "#121214", finishType: "Satin", roughness: 0.38, metalness: 0.45, clearcoat: 0.2 },
  { id: "nardo-grey", name: "Satin Metallic Grey", hex: "#5b6572", finishType: "Satin", roughness: 0.35, metalness: 0.6, clearcoat: 0.3 },
  { id: "frozen-blue", name: "Deep Satin Blue", hex: "#1e3a8a", finishType: "Satin", roughness: 0.4, metalness: 0.5, clearcoat: 0.2 },
  { id: "gloss-nardo", name: "Gloss Nardo Grey", hex: "#64748b", finishType: "Gloss", roughness: 0.08, metalness: 0.15, clearcoat: 1.0 },
  { id: "liquid-gold", name: "Liquid Quartz Gold", hex: "#b45309", finishType: "Metallic", roughness: 0.22, metalness: 0.9, clearcoat: 0.8 },
  { id: "emerald-satin", name: "Matte Alpine Green", hex: "#064e3b", finishType: "Matte", roughness: 0.75, metalness: 0.05, clearcoat: 0.0 },
  { id: "carmine-red", name: "Carmine Gloss Red", hex: "#991b1b", finishType: "Gloss", roughness: 0.06, metalness: 0.2, clearcoat: 1.0 },
  { id: "pearl-white", name: "Pearl Satin White", hex: "#e2e8f0", finishType: "Special", roughness: 0.3, metalness: 0.7, clearcoat: 0.6 },
];

function Porsche911Car({ colorHex, finishType }: { colorHex: string; finishType: string }) {
  const { scene } = useGLTF(PORSCHE_MODEL_URL);

  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    let roughness = 0.35;
    let metalness = 0.4;
    let clearcoat = 0.3;
    let clearcoatRoughness = 0.2;

    switch (finishType) {
      case "Gloss":
        roughness = 0.06;
        metalness = 0.15;
        clearcoat = 1.0;
        clearcoatRoughness = 0.03;
        break;
      case "Satin":
        roughness = 0.36;
        metalness = 0.5;
        clearcoat = 0.25;
        clearcoatRoughness = 0.3;
        break;
      case "Matte":
        roughness = 0.78;
        metalness = 0.05;
        clearcoat = 0.0;
        clearcoatRoughness = 0.8;
        break;
      case "Metallic":
        roughness = 0.2;
        metalness = 0.9;
        clearcoat = 0.8;
        clearcoatRoughness = 0.1;
        break;
      case "Special":
        roughness = 0.28;
        metalness = 0.8;
        clearcoat = 0.6;
        clearcoatRoughness = 0.15;
        break;
      default:
        break;
    }

    const targetColor = new THREE.Color(colorHex);

    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const matName = (mesh.material as THREE.Material).name.toLowerCase();
          // Check if mesh material is part of body paint
          if (
            matName.includes("paint") ||
            matName.includes("body") ||
            matName.includes("car") ||
            matName.includes("main") ||
            matName === "" ||
            (!matName.includes("glass") &&
             !matName.includes("wheel") &&
             !matName.includes("tire") &&
             !matName.includes("rubber") &&
             !matName.includes("light") &&
             !matName.includes("chrome") &&
             !matName.includes("brake"))
          ) {
            const pMat = new THREE.MeshPhysicalMaterial({
              color: targetColor,
              roughness,
              metalness,
              clearcoat,
              clearcoatRoughness,
            });
            mesh.material = pMat;
          }
        }
      }
    });
  }, [clonedScene, colorHex, finishType]);

  return (
    <primitive
      object={clonedScene}
      scale={3.6}
      position={[0, -0.6, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export interface Customizer3DSectionProps {
  className?: string;
  onApplySpec?: (spec: { colorName: string; finish: string; hex: string }) => void;
}

export default function Customizer3DSection({ className, onApplySpec }: Customizer3DSectionProps) {
  const { t } = useLanguage();
  const [selectedColor, setSelectedColor] = useState<ColorOption>(COLOR_PRESETS[1]);
  const [activeFinish, setActiveFinish] = useState<string>(selectedColor.finishType);
  const [appliedNotification, setAppliedNotification] = useState<boolean>(false);

  const finishes = [
    { id: "Satin", label: t.customizer.finishes.satin },
    { id: "Gloss", label: t.customizer.finishes.gloss },
    { id: "Matte", label: t.customizer.finishes.matte },
    { id: "Metallic", label: t.customizer.finishes.metallic },
  ];

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
    setTimeout(() => setAppliedNotification(false), 3500);

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
              <span>{t.customizer.badge}</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              {t.customizer.title} <br />
              <span className="text-foreground/50">{t.customizer.subtitle}</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/60 max-w-md">
            {t.customizer.instruction}
          </p>
        </div>

        {/* Main 3D Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 3D Canvas Container */}
          <div className="lg:col-span-8 relative min-h-[440px] sm:min-h-[520px] lg:min-h-[600px] bg-card border border-border/60 overflow-hidden flex flex-col justify-between">
            {/* Background Studio Lights / Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_75%)] pointer-events-none" />

            {/* 3D Canvas */}
            <div className="absolute inset-0">
              <Canvas shadows gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[4.2, 1.5, 4.2]} fov={36} />
                <ambientLight intensity={1.2} />
                <directionalLight position={[10, 15, 10]} intensity={2.2} castShadow />
                <directionalLight position={[-10, 8, -5]} intensity={0.9} color="#a0c0f0" />
                <directionalLight position={[0, -5, 10]} intensity={0.4} />

                {/* Porsche 911 3D Model */}
                <Porsche911Car colorHex={selectedColor.hex} finishType={activeFinish} />

                <ContactShadows position={[0, -0.61, 0]} opacity={0.7} scale={12} blur={2.0} far={5} />

                <OrbitControls
                  enablePan={false}
                  enableZoom={true}
                  minDistance={3.0}
                  maxDistance={7.5}
                  maxPolarAngle={Math.PI / 2 - 0.05}
                  autoRotate
                  autoRotateSpeed={0.6}
                />
              </Canvas>
            </div>

            {/* Canvas Controls Overlay */}
            <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1.5 bg-background/85 backdrop-blur-md border border-border/60 text-[11px] font-mono uppercase tracking-widest text-foreground pointer-events-auto flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>3D Porsche 911 Studio Engine</span>
              </div>

              <div className="px-3 py-1.5 bg-background/85 backdrop-blur-md border border-border/60 text-[11px] font-mono text-foreground/70 pointer-events-auto flex items-center gap-2">
                <RotateCcw className="size-3" />
                <span>Drag to rotate 360°</span>
              </div>
            </div>

            {/* Live Spec Bar Overlay (Bottom) */}
            <div className="relative z-10 p-4 sm:p-6 backdrop-blur-md bg-background/85 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50 block mb-1">
                  {t.customizer.activeSpecLabel}
                </span>
                <div className="flex items-center gap-3">
                  <div className="size-4 rounded-full border border-border/80 shadow-inner" style={{ backgroundColor: selectedColor.hex }} />
                  <span className="font-mono text-sm uppercase font-semibold tracking-wider text-foreground">
                    Porsche 911 — {selectedColor.name} ({activeFinish})
                  </span>
                </div>
              </div>

              <button
                onClick={handleApplyToQuote}
                className="btn-link inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all font-semibold cursor-pointer shadow-lg"
              >
                <span>{t.customizer.applyBtn}</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Customizer Control Panel */}
          <div className="lg:col-span-4 p-6 sm:p-8 border border-border/60 bg-card/60 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-6">
                <Palette className="size-4" />
                <span>{t.customizer.colorsLabel}</span>
              </div>

              {/* Vinyl Color Palette */}
              <div className="mb-8">
                <label className="text-xs font-mono uppercase tracking-widest text-foreground/60 mb-3 block">
                  1. {t.customizer.colorsLabel} ({COLOR_PRESETS.length} Options)
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
                  <span>2. {t.customizer.finishesLabel}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {finishes.map((f) => {
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
                  <span>Vehicle Base:</span>
                  <span className="text-foreground">Porsche 911 Carrera S</span>
                </div>
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
                  <span className="text-foreground">UV & Alpine Salt Shield</span>
                </div>
              </div>
            </div>

            <div>
              {appliedNotification && (
                <div className="p-3 mb-4 bg-emerald-950/80 border border-emerald-600/50 text-emerald-200 text-xs font-mono flex items-center gap-2">
                  <Shield className="size-4 shrink-0 text-emerald-400" />
                  <span>{t.customizer.appliedToast}</span>
                </div>
              )}

              <button
                onClick={handleApplyToQuote}
                className="w-full py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest font-semibold hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.customizer.applyBtn}</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
