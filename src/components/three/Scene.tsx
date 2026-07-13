import { Float } from "@react-three/drei";

const Scene = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh>

        <boxGeometry args={[2,1.2,.1]} />

        <meshStandardMaterial
          color="#06b6d4"
        />

      </mesh>
    </Float>
  );
};

export default Scene;