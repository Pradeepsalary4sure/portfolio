import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";

const Laptop = () => {
  return (
        <group 
            scale={0.65}
            rotation={[0,0.25,0]}
        >
      {/* Screen */}

      <mesh position={[0, 0.95, 0]}>
        <boxGeometry args={[3.2, 2, 0.12]} />
        <meshStandardMaterial
          color="#111827"
          metalness={1}
          roughness={0.15}
        />
      </mesh>

      {/* Screen Glow */}

      <mesh position={[0, 0.95, -0.07]}>
        <boxGeometry args={[2.9, 1.7, 0.02]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={5}
        />
      </mesh>

      {/* Keyboard */}

      <mesh position={[0, -0.35, 0]}>
        <boxGeometry args={[3.5, 0.18, 2.2]} />
        <meshStandardMaterial
          color="#374151"
          metalness={1}
          roughness={0.25}
        />
      </mesh>

      {/* Trackpad */}

      <mesh position={[0, -0.25, 0.82]}>
        <boxGeometry args={[1, 0.03, 0.65]} />
        <meshStandardMaterial color="#22d3ee" />
      </mesh>
    </group>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas
      camera={{
            position:[0,0,7],
            fov:38
        }}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-5, 5, 5]}
        intensity={2}
        color="#22d3ee"
      />

      <pointLight
        position={[5, -3, 3]}
        intensity={2}
        color="#8b5cf6"
      />

      <Float
        speed={2}
        rotationIntensity={0.8}
        floatIntensity={1.5}
      >
        <Laptop />
      </Float>

      <ContactShadows
        position={[0, -2.2, 0]}
        opacity={0.45}
        scale={10}
        blur={2.5}
        far={4}
      />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={true}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
};

export default HeroCanvas;