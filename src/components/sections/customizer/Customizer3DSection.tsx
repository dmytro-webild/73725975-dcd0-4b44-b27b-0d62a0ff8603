import { useState, useMemo, useEffect, Suspense, Component, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, ContactShadows, useGLTF, Environment, useProgress } from "@react-three/drei";
import * as THREE from "three";
import { Sparkles, ArrowRight, RotateCcw, Palette, Layers, Check, Shield, AlertTriangle } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const PORSCHE_MODEL_URL = "https://storage.googleapis.com/webild/default/models/sports-car/model.fd149a09dc4d.glb";

// Preload Porsche 911 model safely
try {
  useGLTF.preload(PORSCHE_MODEL_URL);
} catch (e) {
  console.warn("Preload 3D model notice:", e);
}

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

interface ErrorBoundaryProps {
  fallback: ReactNode;
  onError?: () => void;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ModelErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("3D Model Error Boundary caught failure:", error);
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function ProgressWatcher({ onError }: { onError: () => void }) {
  const { errors } = useProgress();
  useEffect(() => {
    if (errors && errors.length > 0) {
      onError();
    }
  }, [errors, onError]);
  return null;
}

function Porsche911Car({ colorHex, finishType }: { colorHex: string; finishType: string }) {
  const { scene } = useGLTF(PORSCHE_MODEL_URL);

  const clonedScene = useMemo(() => {
    if (!scene) return null;
    return scene.clone(true);
  }, [scene]);

  useEffect(() => {
    if (!clonedScene) return;

    let roughness = 0.35;
    let metalness = 0.5;
    let clearcoat = 0.3;
    let clearcoatRoughness = 0.25;
    let envMapIntensity = 1.6;

    switch (finishType) {
      case "Gloss":
        roughness = 0.08;
        metalness = 0.2;
        clearcoat = 1.0;
        clearcoatRoughness = 0.03;
        envMapIntensity = 2.0;
        break;
      case "Satin":
        roughness = 0.36;
        metalness = 0.5;
        clearcoat = 0.3;
        clearcoatRoughness = 0.25;
        envMapIntensity = 1.6;
        break;
      case "Matte":
        roughness = 0.78;
        metalness = 0.05;
        clearcoat = 0.0;
        clearcoatRoughness = 0.8;
        envMapIntensity = 1.0;
        break;
      case "Metallic":
        roughness = 0.22;
        metalness = 0.85;
        clearcoat = 0.8;
        clearcoatRoughness = 0.1;
        envMapIntensity = 2.2;
        break;
      case "Special":
        roughness = 0.28;
        metalness = 0.75;
        clearcoat = 0.6;
        clearcoatRoughness = 0.15;
        envMapIntensity = 1.8;
        break;
      default:
        break;
    }

    const targetColor = new THREE.Color(colorHex);

    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];

          materials.forEach((mat, idx) => {
            const matName = (mat.name || "").toLowerCase();
            const meshName = (mesh.name || "").toLowerCase();

            const isBodyPaint =
              matName.includes("paint") ||
              matName.includes("body") ||
              matName.includes("car") ||
              matName.includes("main") ||
              meshName.includes("body") ||
              meshName.includes("paint") ||
              (matName === "" &&
                !matName.includes("glass") &&
                !matName.includes("wheel") &&
                !matName.includes("tire") &&
                !matName.includes("rubber") &&
                !matName.includes("light") &&
                !matName.includes("chrome") &&
                !matName.includes("interior") &&
                !matName.includes("brake"));

            if (isBodyPaint) {
              const pMat = new THREE.MeshPhysicalMaterial({
                color: targetColor,
                roughness,
                metalness,
                clearcoat,
                clearcoatRoughness,
                envMapIntensity,
              });
              pMat.needsUpdate = true;
              if (Array.isArray(mesh.material)) {
                mesh.material[idx] = pMat;
              } else {
                mesh.material = pMat;
              }
            } else {
              if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
                mat.envMapIntensity = 1.2;
                if (matName.includes("glass") || meshName.includes("glass") || meshName.includes("window")) {
                  mat.transparent = true;
                  mat.opacity = 0.45;
                  mat.roughness = 0.1;
                  mat.metalness = 0.1;
                } else if (
                  matName.includes("wheel") ||
                  matName.includes("rim") ||
                  matName.includes("chrome") ||
                  meshName.includes("wheel") ||
                  meshName.includes("rim")
                ) {
                  mat.metalness = 0.85;
                  mat.roughness = 0.2;
                } else if (matName.includes("tire") || matName.includes("rubber")) {
                  mat.roughness = 0.85;
                  mat.metalness = 0.05;
                }
                mat.needsUpdate = true;
              }
            }
          });
        }
      }
    });
  }, [clonedScene, colorHex, finishType]);

  if (!clonedScene) return null;

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
  const [has3DError, setHas3DError] = useState<boolean>(false);

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

  const fallbackView = (
    <div className="relative w-full h-full min-h-[440px] sm:min-h-[520px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-muted/20">
      <img
        src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200"
        alt="Porsche 911 Customizer Fallback Preview"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0 transition-colors duration-500 opacity-35 mix-blend-color pointer-events-none"
        style={{ backgroundColor: selectedColor.hex }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />

      <div className="absolute top-4 left-4 z-20 px-3.5 py-2 bg-background/90 border border-amber-500/40 backdrop-blur-md text-amber-300 text-xs font-mono rounded flex items-center gap-2 shadow-lg">
        <AlertTriangle className="size-4 text-amber-400 shrink-0" />
        <span>HD Fotorealistisches Fallback-Bild (Auto-Switch)</span>
      </div>
    </div>
  );

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
          {/* 3D Canvas / Preview Container */}
          <div className="lg:col-span-8 relative min-h-[440px] sm:min-h-[520px] lg:min-h-[600px] bg-card border border-border/60 overflow-hidden flex flex-col justify-between">
            {/* Background Studio Lights / Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_75%)] pointer-events-none" />

            {/* 3D Canvas or Fallback View */}
            <div className="absolute inset-0">
              {has3DError ? (
                fallbackView
              ) : (
                <ModelErrorBoundary onError={() => setHas3DError(true)} fallback={fallbackView}>
                  <Canvas shadows gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
                    <PerspectiveCamera makeDefault position={[4.2, 1.5, 4.2]} fov={36} />
                    
                    {/* Predefined Studio Environment map to eliminate black silhouette issue */}
                    <Environment preset="city" />

                    <ambientLight intensity={1.2} />
                    <directionalLight position={[10, 15, 10]} intensity={2.2} castShadow />
                    <directionalLight position={[-10, 8, -5]} intensity={1.0} color="#a0c0f0" />
                    <directionalLight position={[0, -5, 10]} intensity={0.5} />
                    <directionalLight position={[0, 8, 0]} intensity={0.8} />

                    <ProgressWatcher onError={() => setHas3DError(true)} />

                    {/* Porsche 911 3D Model with robust loading */}
                    <Suspense fallback={null}>
                      <Porsche911Car colorHex={selectedColor.hex} finishType={activeFinish} />
                    </Suspense>

                    <ContactShadows position={[0, -0.61, 0]} opacity={0.75} scale={12} blur={2.0} far={5} />

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
                </ModelErrorBoundary>
              )}
            </div>

            {/* Canvas Controls Overlay */}
            <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1.5 bg-background/85 backdrop-blur-md border border-border/60 text-[11px] font-mono uppercase tracking-widest text-foreground pointer-events-auto flex items-center gap-2">
                <span className={cn("size-2 rounded-full animate-pulse", has3DError ? "bg-amber-400" : "bg-emerald-500")} />
                <span>{has3DError ? "HD Car Visualizer (Fallback)" : "3D Porsche 911 Studio Engine"}</span>
              </div>

              {!has3DError && (
                <div className="px-3 py-1.5 bg-background/85 backdrop-blur-md border border-border/60 text-[11px] font-mono text-foreground/70 pointer-events-auto flex items-center gap-2">
                  <RotateCcw className="size-3" />
                  <span>Drag to rotate 360°</span>
                </div>
              )}
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
