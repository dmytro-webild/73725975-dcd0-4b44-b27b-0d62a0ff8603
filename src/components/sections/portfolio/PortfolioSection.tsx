import { useState, useRef, useCallback, useLayoutEffect, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ArrowRight, ShieldCheck, MapPin, Sparkles, Sliders, Box, Camera, Check, Layers } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, ContactShadows, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/useLanguage";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const PORSCHE_MODEL_URL = "https://storage.googleapis.com/webild/default/models/sports-car/model.fd149a09dc4d.glb";

// Preload 3D Porsche 911 Model
useGLTF.preload(PORSCHE_MODEL_URL);

export type ServicePairKey = "fullWraps" | "partialWraps" | "chromeDelete" | "ppf" | "windowTinting";

export interface ProjectItem {
  id: string;
  title: string;
  vehicle: string;
  category: string;
  categoryKey: "all" | ServicePairKey;
  finish: string;
  turnaround: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  specs: string[];
  gridSpan?: string;
}

// Renderable Porsche 911 with custom service-specific materials for before/after comparison
function Porsche911ServiceCar({
  serviceKey,
  mode,
  sharedRotationRef,
}: {
  serviceKey: ServicePairKey;
  mode: "before" | "after";
  sharedRotationRef?: React.RefObject<number>;
}) {
  const { scene } = useGLTF(PORSCHE_MODEL_URL);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && sharedRotationRef && sharedRotationRef.current !== undefined) {
      groupRef.current.rotation.y = sharedRotationRef.current;
    }
  });

  useEffect(() => {
    let bodyColor = new THREE.Color("#e2e8f0");
    let roughness = 0.08;
    let metalness = 0.15;
    let clearcoat = 1.0;
    let clearcoatRoughness = 0.03;

    let roofColor: THREE.Color | null = null;
    let roofRoughness = 0.5;

    let isChromeDelete = false;
    let chromeColor = new THREE.Color("#ffffff");
    let chromeMetalness = 1.0;
    let chromeRoughness = 0.05;

    let isTinted = false;
    let glassColor = new THREE.Color("#ffffff");
    let glassOpacity = 0.35;

    if (mode === "before") {
      switch (serviceKey) {
        case "fullWraps":
          bodyColor = new THREE.Color("#e2e8f0"); // Factory Carrara White Gloss
          roughness = 0.08;
          clearcoat = 1.0;
          break;
        case "partialWraps":
          bodyColor = new THREE.Color("#e2e8f0"); // Monotone Factory White
          roughness = 0.08;
          break;
        case "chromeDelete":
          bodyColor = new THREE.Color("#1a2b4c"); // Deep Sapphire Metallic
          metalness = 0.8;
          roughness = 0.15;
          isChromeDelete = true;
          chromeColor = new THREE.Color("#ffffff"); // OEM Bright Polished Chrome
          chromeMetalness = 1.0;
          chromeRoughness = 0.05;
          break;
        case "ppf":
          bodyColor = new THREE.Color("#1b2f24"); // Unprotected Metallic Dark Emerald
          metalness = 0.7;
          roughness = 0.06;
          clearcoat = 1.0;
          break;
        case "windowTinting":
          bodyColor = new THREE.Color("#5b6572"); // Satin Grey
          metalness = 0.5;
          roughness = 0.35;
          isTinted = true;
          glassColor = new THREE.Color("#ffffff"); // Clear Untinted Glass
          glassOpacity = 0.35;
          break;
      }
    } else {
      // AFTER finish customization
      switch (serviceKey) {
        case "fullWraps":
          bodyColor = new THREE.Color("#141518"); // Satin Obsidian Black
          roughness = 0.38;
          metalness = 0.45;
          clearcoat = 0.25;
          clearcoatRoughness = 0.3;
          break;
        case "partialWraps":
          bodyColor = new THREE.Color("#e2e8f0"); // Factory White
          roofColor = new THREE.Color("#0c0d10"); // Forged Satin Carbon Roof
          roofRoughness = 0.55;
          break;
        case "chromeDelete":
          bodyColor = new THREE.Color("#1a2b4c"); // Deep Sapphire
          metalness = 0.8;
          roughness = 0.15;
          isChromeDelete = true;
          chromeColor = new THREE.Color("#07080a"); // Piano Black Shadowline
          chromeMetalness = 0.1;
          chromeRoughness = 0.04;
          break;
        case "ppf":
          bodyColor = new THREE.Color("#1b2f24"); // 200μm Stealth Matte PPF
          roughness = 0.85;
          metalness = 0.05;
          clearcoat = 0.0;
          clearcoatRoughness = 0.8;
          break;
        case "windowTinting":
          bodyColor = new THREE.Color("#5b6572");
          metalness = 0.5;
          roughness = 0.35;
          isTinted = true;
          glassColor = new THREE.Color("#040608"); // 15% Nano-Ceramic Tint
          glassOpacity = 0.94;
          break;
      }
    }

    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const matName = (mesh.material as THREE.Material).name.toLowerCase();

          // Target Glass
          if (matName.includes("glass") || matName.includes("window")) {
            if (isTinted) {
              mesh.material = new THREE.MeshPhysicalMaterial({
                color: glassColor,
                transparent: true,
                opacity: glassOpacity,
                roughness: 0.05,
                clearcoat: 1.0,
              });
            }
          }
          // Target Chrome / Trim
          else if (matName.includes("chrome") || matName.includes("trim") || matName.includes("badge") || matName.includes("grille")) {
            if (isChromeDelete) {
              mesh.material = new THREE.MeshStandardMaterial({
                color: chromeColor,
                metalness: chromeMetalness,
                roughness: chromeRoughness,
              });
            }
          }
          // Target Roof for Partial Wrap
          else if (roofColor && (matName.includes("roof") || matName.includes("hood") || matName.includes("mirror"))) {
            mesh.material = new THREE.MeshStandardMaterial({
              color: roofColor,
              roughness: roofRoughness,
              metalness: 0.3,
            });
          }
          // Target Body Paint
          else if (
            matName.includes("paint") ||
            matName.includes("body") ||
            matName.includes("car") ||
            matName.includes("main") ||
            matName === ""
          ) {
            mesh.material = new THREE.MeshPhysicalMaterial({
              color: bodyColor,
              roughness,
              metalness,
              clearcoat,
              clearcoatRoughness,
            });
          }
        }
      }
    });
  }, [clonedScene, serviceKey, mode]);

  return (
    <group ref={groupRef} rotation={[0, Math.PI / 4, 0]}>
      <primitive
        object={clonedScene}
        scale={3.6}
        position={[0, -0.6, 0]}
      />
    </group>
  );
}

// Studio HD Rendered Canvas representation matching genref-1.png for instant display
function StudioHDCarsView({ serviceKey, sliderPos }: { serviceKey: ServicePairKey; sliderPos: number }) {
  const getFinishStyles = (mode: "before" | "after") => {
    if (mode === "before") {
      switch (serviceKey) {
        case "fullWraps":
          return { bg: "bg-slate-200", text: "Factory Carrara White Gloss Paint", stroke: "#cbd5e1" };
        case "partialWraps":
          return { bg: "bg-slate-200", text: "Monotone Factory White Paint", stroke: "#cbd5e1" };
        case "chromeDelete":
          return { bg: "bg-slate-800", text: "Deep Blue Paint with Bright Chrome Trims", stroke: "#ffffff" };
        case "ppf":
          return { bg: "bg-emerald-950", text: "Unprotected High-Gloss Emerald Paint", stroke: "#34d399" };
        case "windowTinting":
          return { bg: "bg-slate-700", text: "Clear Untinted Factory Windows", stroke: "#94a3b8" };
      }
    } else {
      switch (serviceKey) {
        case "fullWraps":
          return { bg: "bg-zinc-950", text: "Atelier Satin Obsidian Black Wrap", stroke: "#3f3f46" };
        case "partialWraps":
          return { bg: "bg-slate-200", text: "Forged Carbon Roof & Satin Accents", stroke: "#18181b" };
        case "chromeDelete":
          return { bg: "bg-slate-900", text: "Gloss Piano Black Shadowline Trims", stroke: "#09090b" };
        case "ppf":
          return { bg: "bg-emerald-950", text: "200μm Stealth Matte PPF Shield", stroke: "#059669" };
        case "windowTinting":
          return { bg: "bg-slate-900", text: "15% Nano-Ceramic Thermal Heat Tint", stroke: "#020617" };
      }
    }
  };

  const beforeStyle = getFinishStyles("before");
  const afterStyle = getFinishStyles("after");

  return (
    <div className="relative size-full bg-[#0d0e12] flex items-center justify-center overflow-hidden">
      {/* Studio Backdrop Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* AFTER Vector Vehicle View (Bottom Layer) */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <svg viewBox="0 0 1000 550" className="w-full max-w-4xl h-auto filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]">
          {/* Studio Shadow */}
          <ellipse cx="500" cy="460" rx="380" ry="30" fill="rgba(0,0,0,0.7)" filter="blur(10px)" />
          
          {/* Porsche Silhouette Body (After) */}
          <path
            d="M 180 380 C 180 340, 240 300, 310 270 C 370 200, 480 140, 620 140 C 740 140, 830 200, 860 260 C 900 280, 930 330, 930 380 C 930 420, 900 440, 840 440 L 250 440 C 200 440, 180 410, 180 380 Z"
            fill={serviceKey === "fullWraps" ? "#141518" : serviceKey === "ppf" ? "#18261e" : "#242c38"}
            stroke={afterStyle.stroke}
            strokeWidth="3"
          />
          {/* Cabin Roof / Glass (After) */}
          <path
            d="M 350 260 C 420 190, 520 155, 630 155 C 730 155, 790 200, 820 260 Z"
            fill={serviceKey === "partialWraps" ? "#090a0c" : serviceKey === "windowTinting" ? "#05070a" : "rgba(255,255,255,0.12)"}
            stroke="#52525b"
            strokeWidth="2"
          />
          {/* Wheels */}
          <circle cx="310" cy="420" r="55" fill="#18181b" stroke="#71717a" strokeWidth="6" />
          <circle cx="310" cy="420" r="35" fill="#27272a" stroke="#a1a1aa" strokeWidth="3" />
          <circle cx="780" cy="420" r="55" fill="#18181b" stroke="#71717a" strokeWidth="6" />
          <circle cx="780" cy="420" r="35" fill="#27272a" stroke="#a1a1aa" strokeWidth="3" />
          
          {/* Window Trims (Chrome Delete indicator) */}
          <path
            d="M 350 260 L 820 260"
            stroke={serviceKey === "chromeDelete" ? "#09090b" : "#e4e4e7"}
            strokeWidth={serviceKey === "chromeDelete" ? "6" : "4"}
          />
        </svg>
      </div>

      {/* BEFORE Vector Vehicle View (Top Clipped Layer) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden flex items-center justify-center"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="absolute inset-y-0 left-0 size-full flex items-center justify-center p-6 min-w-[320px]">
          <svg viewBox="0 0 1000 550" className="w-full max-w-4xl h-auto filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]">
            {/* Studio Shadow */}
            <ellipse cx="500" cy="460" rx="380" ry="30" fill="rgba(0,0,0,0.7)" filter="blur(10px)" />
            
            {/* Porsche Silhouette Body (Before) */}
            <path
              d="M 180 380 C 180 340, 240 300, 310 270 C 370 200, 480 140, 620 140 C 740 140, 830 200, 860 260 C 900 280, 930 330, 930 380 C 930 420, 900 440, 840 440 L 250 440 C 200 440, 180 410, 180 380 Z"
              fill={serviceKey === "chromeDelete" ? "#1e3a8a" : serviceKey === "ppf" ? "#1e3a2b" : "#e2e8f0"}
              stroke={beforeStyle.stroke}
              strokeWidth="3"
            />
            {/* Cabin Roof / Glass (Before) */}
            <path
              d="M 350 260 C 420 190, 520 155, 630 155 C 730 155, 790 200, 820 260 Z"
              fill="rgba(255,255,255,0.35)"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            {/* Wheels */}
            <circle cx="310" cy="420" r="55" fill="#18181b" stroke="#94a3b8" strokeWidth="6" />
            <circle cx="310" cy="420" r="35" fill="#334155" stroke="#cbd5e1" strokeWidth="3" />
            <circle cx="780" cy="420" r="55" fill="#18181b" stroke="#94a3b8" strokeWidth="6" />
            <circle cx="780" cy="420" r="35" fill="#334155" stroke="#cbd5e1" strokeWidth="3" />
            
            {/* Chrome Trim (Before) */}
            <path
              d="M 350 260 L 820 260"
              stroke="#f8fafc"
              strokeWidth="5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export interface BeforeAfterSliderProps {
  serviceKey?: ServicePairKey;
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  serviceKey,
  beforeImage,
  afterImage,
  beforeLabel = "Factory Stock",
  afterLabel = "JD Wrapped Finish",
  className
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"3d" | "hd">("3d");
  const isDragging = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sharedRotationRef = useRef<number>(Math.PI / 4);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      sharedRotationRef.current += dt * 0.18;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const updateWidth = () => {
      setContainerWidth(el.offsetWidth);
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      isDragging.current = false;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((prev) => Math.max(0, prev - 4));
    } else if (e.key === "ArrowRight") {
      setSliderPos((prev) => Math.min(100, prev + 4));
    } else if (e.key === "Home") {
      setSliderPos(0);
    } else if (e.key === "End") {
      setSliderPos(100);
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={cn(
        "relative overflow-hidden select-none cursor-ew-resize group border border-border/80 bg-card outline-none touch-none",
        className
      )}
    >
      {/* 3D Model comparison dual view if serviceKey is active */}
      {serviceKey ? (
        <>
          {viewMode === "3d" ? (
            <div className="absolute inset-0 size-full bg-[#0a0b0e]">
              {/* Studio Lights backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_75%)] pointer-events-none z-0" />

              {/* AFTER 3D Canvas (Bottom Layer) */}
              <div className="absolute inset-0 pointer-events-none">
                <Canvas shadows gl={{ antialias: true, alpha: true }}>
                  <PerspectiveCamera makeDefault position={[4.2, 1.5, 4.2]} fov={36} />
                  <ambientLight intensity={1.2} />
                  <directionalLight position={[10, 15, 10]} intensity={2.2} castShadow />
                  <directionalLight position={[-10, 8, -5]} intensity={0.9} color="#a0c0f0" />
                  <directionalLight position={[0, -5, 10]} intensity={0.4} />

                  <Porsche911ServiceCar serviceKey={serviceKey} mode="after" sharedRotationRef={sharedRotationRef} />

                  <ContactShadows position={[0, -0.61, 0]} opacity={0.7} scale={12} blur={2.0} far={5} />
                </Canvas>
              </div>

              {/* BEFORE 3D Canvas (Top Clipped Layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden z-10 border-r border-foreground/40 shadow-2xl pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <div
                  className="absolute inset-y-0 left-0 size-full"
                  style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
                >
                  <Canvas shadows gl={{ antialias: true, alpha: true }}>
                    <PerspectiveCamera makeDefault position={[4.2, 1.5, 4.2]} fov={36} />
                    <ambientLight intensity={1.2} />
                    <directionalLight position={[10, 15, 10]} intensity={2.2} castShadow />
                    <directionalLight position={[-10, 8, -5]} intensity={0.9} color="#a0c0f0" />
                    <directionalLight position={[0, -5, 10]} intensity={0.4} />

                    <Porsche911ServiceCar serviceKey={serviceKey} mode="before" sharedRotationRef={sharedRotationRef} />

                    <ContactShadows position={[0, -0.61, 0]} opacity={0.7} scale={12} blur={2.0} far={5} />
                  </Canvas>
                </div>
              </div>
            </div>
          ) : (
            <StudioHDCarsView serviceKey={serviceKey} sliderPos={sliderPos} />
          )}

          {/* Mode Switcher Buttons */}
          <div className="absolute bottom-4 right-4 z-30 flex items-center gap-1 bg-background/90 backdrop-blur-md p-1 border border-border/60">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setViewMode("3d"); }}
              className={cn(
                "px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest cursor-pointer transition-all flex items-center gap-1",
                viewMode === "3d" ? "bg-foreground text-background font-bold" : "text-foreground/70 hover:text-foreground"
              )}
            >
              <Box className="size-3" />
              <span>3D Engine</span>
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setViewMode("hd"); }}
              className={cn(
                "px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest cursor-pointer transition-all flex items-center gap-1",
                viewMode === "hd" ? "bg-foreground text-background font-bold" : "text-foreground/70 hover:text-foreground"
              )}
            >
              <Camera className="size-3" />
              <span>Studio HD</span>
            </button>
          </div>
        </>
      ) : (
        /* Image fallback mode for static modal items */
        <>
          <img src={afterImage} alt={afterLabel} className="absolute inset-0 size-full object-cover object-center" />
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={beforeImage}
              alt={beforeLabel}
              className="absolute inset-y-0 left-0 size-full object-cover object-center max-w-none"
              style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
            />
          </div>
        </>
      )}

      {/* BEFORE / AFTER BADGES */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-background/90 backdrop-blur-md border border-border/70 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-foreground shadow-md flex items-center gap-2">
        <span className="size-2 rounded-full bg-slate-400" />
        <span>{beforeLabel}</span>
      </div>
      <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-foreground text-background font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold shadow-md flex items-center gap-2">
        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>{afterLabel}</span>
      </div>

      {/* DRAGGABLE HANDLE DIVIDER */}
      <div
        className="absolute top-0 bottom-0 z-30 w-0.5 bg-foreground shadow-[0_0_15px_rgba(255,255,255,0.9)] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-2xl border-2 border-background transform group-hover:scale-110 transition-transform">
          <div className="flex items-center gap-0.5 text-xs font-black tracking-tighter">
            ‹›
          </div>
        </div>
      </div>
    </div>
  );
}

// 6 Projects in the Portfolio Grid using identical vehicle pairs
const PROJECTS: Omit<ProjectItem, "category">[] = [
  {
    id: "porsche-911-satin-grey",
    title: "Satin Metallic Obsidian Edition",
    vehicle: "Porsche 911 Carrera S (992)",
    categoryKey: "fullWraps",
    finish: "Satin Obsidian Anthracite Black Vinyl",
    turnaround: "4 Days",
    location: "Zurich Studio",
    beforeImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    afterImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/tmp/porsche-911-carrera-s-992-canton-zurich--1795174685906-2c734e80.jpg",
    description: "Complete full vehicle transformation from factory Carrara White gloss to Satin Obsidian Black, featuring door jamb execution and knifeless edge tucking.",
    specs: ["Full Body Satin Wrap", "Door Jamb Precision Execution", "Knifeless Tape Trimmed", "Self-Healing Topcoat"],
    gridSpan: "lg:col-span-8 lg:row-span-2"
  },
  {
    id: "porsche-911-forged-roof",
    title: "Forged Carbon & Satin Accent Spec",
    vehicle: "Porsche 911 Carrera S (992)",
    categoryKey: "partialWraps",
    finish: "Forged Carbon Roof & Hood Accents",
    turnaround: "2 Days",
    location: "Canton Zurich Atelier",
    beforeImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    afterImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/tmp/porsche-911-carrera-s-992-canton-zurich--1795174685906-2c734e80.jpg",
    description: "High-contrast partial wrap featuring forged carbon roof execution, gloss piano black side skirts, and front spoiler blackout.",
    specs: ["Forged Carbon Roof Wrap", "Piano Black Side Skirts", "Mirror Cap Accents", "Front Splitter Blackout"],
    gridSpan: "lg:col-span-4"
  },
  {
    id: "porsche-911-stealth-ppf",
    title: "Stealth Matte 200μm PPF Shield",
    vehicle: "Porsche 911 Carrera S (992)",
    categoryKey: "ppf",
    finish: "200μm Stealth Matte Paint Protection Film",
    turnaround: "5 Days",
    location: "Zurich Studio",
    beforeImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    afterImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/tmp/porsche-911-carrera-s-992-canton-zurich--1795174685906-2c734e80.jpg",
    description: "Converted factory gloss finish into a sleek matte sheen using 200-micron self-healing hydrophobic PPF, guarding against alpine gravel impact.",
    specs: ["200μm Self-Healing PPF", "Hydrophobic Topcoat", "Full Track Front Shield", "10-Year Warranty"],
    gridSpan: "lg:col-span-4"
  },
  {
    id: "porsche-911-chrome-delete",
    title: "Gloss Piano Black Shadowline Delete",
    vehicle: "Porsche 911 Carrera S (992)",
    categoryKey: "chromeDelete",
    finish: "Piano Black Trim & Grille Blackout",
    turnaround: "1 Day",
    location: "Zurich Atelier",
    beforeImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    afterImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/tmp/porsche-911-carrera-s-992-canton-zurich--1795174685906-2c734e80.jpg",
    description: "Total blackout conversion of aluminum window trims, grille surrounds, rear lettering, and badges to high-gloss piano black.",
    specs: ["Window Surround Blackout", "Grille Frame Wrap", "Rear Model Badge Blackout", "Mirror Base Blackout"],
    gridSpan: "lg:col-span-4"
  },
  {
    id: "porsche-911-liquid-gold",
    title: "Liquid Quartz Gold Atelier Spec",
    vehicle: "Porsche 911 Carrera S (992)",
    categoryKey: "fullWraps",
    finish: "Liquid Quartz Gold Satin Metal",
    turnaround: "4 Days",
    location: "Zurich Studio",
    beforeImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    afterImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/tmp/porsche-911-carrera-s-992-canton-zurich--1795174685906-2c734e80.jpg",
    description: "Full body wrap in exclusive Liquid Quartz Gold, combined with ceramic heat-rejection window tinting and brake caliper detailing.",
    specs: ["Liquid Gold Satin Metal", "Ceramic Heat Shield Tint", "Knifeless Edge Tucking", "5-Year Guarantee"],
    gridSpan: "lg:col-span-4"
  },
  {
    id: "porsche-911-ceramic-tint",
    title: "15% Nano-Ceramic Heat & Privacy Shield",
    vehicle: "Porsche 911 Carrera S (992)",
    categoryKey: "windowTinting",
    finish: "Nano-Ceramic 15% Thermal Shield Tint",
    turnaround: "1 Day",
    location: "Zurich Atelier",
    beforeImage: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200",
    afterImage: "https://storage.googleapis.com/webild/users/user_3MMom4VmFM7e63trjauJ4SjcbJR/tmp/porsche-911-carrera-s-992-canton-zurich--1795174685906-2c734e80.jpg",
    description: "Nano-ceramic window tinting providing 99% UV rejection and 92% IR thermal shielding, compliant with Swiss ASTRA standards.",
    specs: ["99% UV Protection", "92% IR Heat Rejection", "Swiss ASTRA Compliant", "Scratch-Resistant Coating"],
    gridSpan: "lg:col-span-8"
  }
];

export default function PortfolioSection() {
  const { t } = useLanguage();
  const [activeServiceKey, setActiveServiceKey] = useState<ServicePairKey>("fullWraps");
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const serviceKeys: ServicePairKey[] = ["fullWraps", "partialWraps", "chromeDelete", "ppf", "windowTinting"];

  const categories = [
    { key: "all", label: t.portfolio.categories.all },
    { key: "fullWraps", label: t.portfolio.categories.fullWraps },
    { key: "partialWraps", label: t.portfolio.categories.partialWraps },
    { key: "chromeDelete", label: t.portfolio.categories.chromeDelete },
    { key: "ppf", label: t.portfolio.categories.ppf },
    { key: "windowTinting", label: t.portfolio.categories.windowTinting },
  ];

  const projects: ProjectItem[] = PROJECTS.map((p) => ({
    ...p,
    category: t.portfolio.categories[p.categoryKey],
  }));

  const filteredProjects = projects.filter((p) =>
    activeCategoryKey === "all" ? true : p.categoryKey === activeCategoryKey
  );

  const activeServiceInfo = t.portfolio.services[activeServiceKey];

  return (
    <section id="portfolio" className="relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40">
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Sparkles className="size-3.5 text-primary" />
              <span>{t.portfolio.badge}</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              {t.portfolio.titleLine1} <br />
              <span className="text-foreground/50">{t.portfolio.titleLine2}</span>
            </h2>
          </div>
          <p className="text-[length:var(--text-body)] text-foreground/60 max-w-md">
            {t.portfolio.description}
          </p>
        </div>

        {/* ============================================================ */}
        {/* FEATURED TRANSFORMATION SLIDER (EXKLUSIVE TRANSFORMATION — REGLER ZIEHEN) */}
        {/* ============================================================ */}
        <div className="mb-20 bg-card/60 border border-border/80 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-border/40 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-2 bg-foreground text-background text-[10px] font-mono uppercase tracking-widest font-bold">
                <Sliders className="size-3" />
                <span>{t.portfolio.sliderTitle}</span>
              </div>
              <h3 className="text-[length:var(--text-h2)] font-light uppercase tracking-tight [font-family:var(--font-heading)]">
                {activeServiceInfo.title}
              </h3>
              <p className="text-xs font-mono text-foreground/60 mt-1 max-w-xl">
                {t.portfolio.transformationSubtitle}
              </p>
            </div>

            {/* Service Category Selection Tabs */}
            <div className="flex flex-wrap gap-2">
              {serviceKeys.map((sKey) => {
                const sInfo = t.portfolio.services[sKey];
                const isActive = activeServiceKey === sKey;
                return (
                  <button
                    key={sKey}
                    type="button"
                    onClick={() => setActiveServiceKey(sKey)}
                    className={cn(
                      "px-3.5 py-2 text-[11px] font-mono uppercase tracking-wider transition-all border cursor-pointer flex items-center gap-1.5",
                      isActive
                        ? "bg-foreground text-background border-foreground font-bold shadow-md"
                        : "bg-muted/40 text-foreground/70 border-border/60 hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {isActive && <Check className="size-3 text-emerald-400" />}
                    <span>{sInfo.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Draggable Slider Stage showing identical vehicle for active service */}
          <div className="relative mb-6">
            <BeforeAfterSlider
              serviceKey={activeServiceKey}
              beforeLabel={activeServiceInfo.beforeLabel}
              afterLabel={activeServiceInfo.afterLabel}
              className="h-[360px] sm:h-[460px] lg:h-[540px] w-full"
            />
          </div>

          {/* Interactive Specification Footer Bar */}
          <div className="p-4 bg-muted/30 border border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="px-3 py-1.5 bg-background border border-border/60">
                <span className="text-foreground/50 block text-[10px]">VEHICLE MODEL:</span>
                <span className="font-semibold text-foreground">{activeServiceInfo.vehicle}</span>
              </div>
              <div className="px-3 py-1.5 bg-background border border-border/60">
                <span className="text-foreground/50 block text-[10px]">EXECUTION TURNAROUND:</span>
                <span className="font-semibold text-foreground">{activeServiceInfo.turnaround}</span>
              </div>
            </div>

            <a
              href="#contact"
              className="px-6 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all font-semibold cursor-pointer"
            >
              <span>Offerte anfragen: {activeServiceInfo.name}</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PORTFOLIO GALLERY (EDITORIAL COLLAGE GRID) */}
        {/* ============================================================ */}
        <div className="mb-8 flex items-center justify-between border-b border-border/40 pb-4">
          <h3 className="text-[length:var(--text-h3)] font-light uppercase tracking-wider [font-family:var(--font-heading)] flex items-center gap-2">
            <Layers className="size-4 text-primary" />
            <span>Atelier Portfolio Galerie</span>
          </h3>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategoryKey(cat.key)}
                className={cn(
                  "px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-all border cursor-pointer",
                  activeCategoryKey === cat.key
                    ? "bg-foreground text-background border-foreground font-semibold"
                    : "bg-muted/30 text-foreground/70 border-border/40 hover:bg-muted hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
              className={cn(
                "group cursor-pointer border border-border/60 bg-card/60 overflow-hidden flex flex-col justify-between hover:border-foreground/50 transition-all duration-300 relative min-h-[360px]",
                activeCategoryKey === "all" ? (project.gridSpan || "lg:col-span-4") : "lg:col-span-4"
              )}
            >
              <div className="relative size-full min-h-[260px] flex-grow overflow-hidden bg-muted">
                <img
                  src={project.afterImage}
                  alt={project.title}
                  className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <div className="px-2.5 py-1 bg-background/90 backdrop-blur-md border border-border/60 text-[10px] font-mono uppercase tracking-widest text-foreground">
                    {project.category}
                  </div>
                </div>

                {/* Inspect Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-xs z-20">
                  <div className="px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 font-bold shadow-xl">
                    <Eye className="size-4" />
                    <span>{t.portfolio.inspectBtn}</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 relative z-10 bg-card/90 backdrop-blur-md border-t border-border/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-1.5">
                    <span className="font-semibold text-foreground/90">{project.vehicle}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3" />
                      {project.location}
                    </span>
                  </div>
                  <h4 className="text-[length:var(--text-h3)] font-light uppercase tracking-tight [font-family:var(--font-heading)] mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-primary/90 mb-3">
                    {project.finish}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs font-mono text-foreground/60">
                  <span>{t.portfolio.turnaroundLabel}: {project.turnaround}</span>
                  <ArrowRight className="size-4 text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Spec Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-background/90 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-card border border-border/80 p-6 sm:p-8 lg:p-10 text-foreground overflow-hidden my-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 text-foreground/60 hover:text-foreground hover:bg-muted border border-border/40 transition-all cursor-pointer"
              >
                <X className="size-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Interactive Before/After in Modal */}
                <div className="lg:col-span-7">
                  <BeforeAfterSlider
                    serviceKey={selectedProject.categoryKey as ServicePairKey}
                    beforeImage={selectedProject.beforeImage}
                    afterImage={selectedProject.afterImage}
                    beforeLabel={t.portfolio.modalBefore}
                    afterLabel={t.portfolio.modalAfter}
                    className="h-[300px] sm:h-[400px] w-full"
                  />
                  <p className="text-[11px] font-mono text-foreground/50 text-center mt-2">
                    {t.portfolio.modalInstruction}
                  </p>
                </div>

                {/* Right: Spec Details */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2 block">
                      {selectedProject.category} — {selectedProject.vehicle}
                    </span>
                    <h3 className="text-[length:var(--text-h2)] font-light uppercase tracking-tight [font-family:var(--font-heading)] mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-[length:var(--text-body)] text-foreground/80 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="p-3 bg-muted/50 border border-border/40 font-mono text-xs">
                        <span className="text-foreground/50 block">Applied Finish:</span>
                        <span className="text-foreground font-semibold">{selectedProject.finish}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 bg-muted/30 border border-border/40">
                          <span className="text-foreground/50 block">{t.portfolio.turnaroundLabel}:</span>
                          <span className="text-foreground">{selectedProject.turnaround}</span>
                        </div>
                        <div className="p-3 bg-muted/30 border border-border/40">
                          <span className="text-foreground/50 block">{t.portfolio.studioLabel}:</span>
                          <span className="text-foreground">{selectedProject.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/50 mb-3">
                        {t.portfolio.specsHeader}
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                            <ShieldCheck className="size-3.5 text-foreground" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest text-center hover:bg-foreground/90 transition-all font-semibold"
                  >
                    {t.portfolio.requestQuoteForSpec}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
