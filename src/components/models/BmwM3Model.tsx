import * as THREE from "three";
import { arch, extrudeProfile, finishes, useParts } from "@/components/kit/codeModel";
import Wheels from "@/components/models/Wheels";

type BmwM3ModelProps = { color?: string };

const LENGTH = 4.79;
const WIDTH = 1.9;
const WHEEL_R = 0.36;
const WHEEL_X = 1.42;
const ARCH = WHEEL_R + 0.1;
const TRACK = WIDTH - 0.22;

// BMW M3 Sedan side profile
const bodyShape = () => {
  const s = new THREE.Shape();
  s.moveTo(-2.38, 0.32);
  s.lineTo(-WHEEL_X - ARCH, 0.22);
  arch(s, -WHEEL_X, WHEEL_R, ARCH);
  s.lineTo(WHEEL_X - ARCH, 0.2);
  arch(s, WHEEL_X, WHEEL_R, ARCH);
  s.lineTo(2.25, 0.22);
  s.quadraticCurveTo(2.4, 0.28, 2.38, 0.45);
  s.quadraticCurveTo(2.28, 0.68, 1.82, 0.82); // Hood
  s.quadraticCurveTo(1.4, 0.96, 0.95, 0.88);
  s.lineTo(0.72, 0.86);
  s.lineTo(-0.85, 0.88);
  s.quadraticCurveTo(-1.3, 0.98, -1.9, 0.94); // Trunk
  s.lineTo(-2.3, 0.9);
  s.lineTo(-2.38, 0.8);
  s.quadraticCurveTo(-2.42, 0.5, -2.38, 0.32);
  return s;
};

// BMW M3 4-door cabin canopy profile
const canopyShape = () => {
  const s = new THREE.Shape();
  s.moveTo(0.85, 0.82);
  s.quadraticCurveTo(0.35, 1.24, -0.15, 1.28);
  s.lineTo(-0.9, 1.28);
  s.quadraticCurveTo(-1.55, 1.18, -1.85, 0.86);
  s.lineTo(0.85, 0.82);
  return s;
};

export default function BmwM3Model({ color = "rgb(20, 24, 30)" }: BmwM3ModelProps) {
  const f = useParts(() => finishes(color), [color]);
  const g = useParts(
    () => ({
      body: extrudeProfile(bodyShape(), WIDTH - 0.08, 0.05),
      canopy: extrudeProfile(canopyShape(), WIDTH - 0.48, 0.1),
      box: new THREE.BoxGeometry(1, 1, 1),
    }),
    []
  );

  return (
    <group name="bmw-m3">
      <group name="part-body">
        {/* Main Body Shell */}
        <mesh name="body" geometry={g.body} material={f.paint} />
        {/* Cabin Glass Canopy */}
        <mesh name="canopy" geometry={g.canopy} material={f.glass} />
        
        {/* Carbon Roof */}
        <mesh
          name="carbon-roof"
          geometry={g.box}
          material={f.trim}
          position={[-0.4, 1.29, 0]}
          scale={[1.4, 0.02, WIDTH - 0.52]}
        />
        
        {/* Underbody & Diffuser */}
        <mesh
          name="underbody"
          geometry={g.box}
          material={f.trim}
          position={[0, 0.24, 0]}
          scale={[LENGTH - 0.5, 0.1, WIDTH - 0.26]}
        />
        <mesh
          name="splitter"
          geometry={g.box}
          material={f.trim}
          position={[2.26, 0.22, 0]}
          scale={[0.26, 0.05, WIDTH - 0.24]}
        />
        <mesh
          name="diffuser"
          geometry={g.box}
          material={f.trim}
          position={[-2.32, 0.28, 0]}
          scale={[0.22, 0.14, WIDTH - 0.4]}
        />

        {/* BMW Iconic Twin Vertical Kidney Grille */}
        <mesh
          name="kidney-grille-left"
          geometry={g.box}
          material={f.trim}
          position={[2.34, 0.52, 0.16]}
          scale={[0.06, 0.38, 0.22]}
        />
        <mesh
          name="kidney-grille-right"
          geometry={g.box}
          material={f.trim}
          position={[2.34, 0.52, -0.16]}
          scale={[0.06, 0.38, 0.22]}
        />

        {/* Taillights */}
        <mesh
          name="taillight"
          geometry={g.box}
          material={f.signal}
          position={[-2.39, 0.72, 0]}
          scale={[0.04, 0.06, WIDTH - 0.38]}
        />

        {/* M Rear Spoiler Lip */}
        <mesh
          name="spoiler-lip"
          geometry={g.box}
          material={f.trim}
          position={[-2.28, 0.92, 0]}
          scale={[0.18, 0.04, WIDTH - 0.4]}
        />

        {/* Side Mirror, Headlights & M Side Gill Vents */}
        {[1, -1].map((side) => (
          <group key={side}>
            {/* Laser Light Headlights */}
            <mesh
              name="headlight"
              geometry={g.box}
              material={f.light}
              position={[2.12, 0.68, side * 0.62]}
              rotation-z={-0.35}
              scale={[0.32, 0.06, 0.36]}
            />
            {/* Side M Gill Vent */}
            <mesh
              name="m-side-gill"
              geometry={g.box}
              material={f.trim}
              position={[1.05, 0.62, side * (WIDTH / 2 - 0.01)]}
              scale={[0.18, 0.24, 0.04]}
            />
            {/* Aerodynamic M Mirrors */}
            <mesh
              name="mirror"
              geometry={g.box}
              material={f.paint}
              position={[0.55, 1.02, side * 0.98]}
              scale={[0.18, 0.09, 0.22]}
            />
          </group>
        ))}
      </group>
      
      {/* 4 M Alloy Wheels */}
      <Wheels wheelbase={WHEEL_X * 2} track={TRACK} radius={WHEEL_R} finishes={f} />
    </group>
  );
}
