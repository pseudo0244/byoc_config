import {
  MeshReflectorMaterial, // Reflective ground material
  PresentationControls,  // Interactive controls for rotating and zooming
  Stage,                 // Pre-configured environment and lighting
} from "@react-three/drei";

import { Suspense } from "react";
import Car1 from "./Car1";
import { useCustomization } from "../contexts/Customization";

function CarSelect({ carState }) {
  // Render the appropriate car model based on carState
  if (carState === "car1") {
    return <Car1 />;
  }
  return <Car2 />;
}

const Scene = () => {
  const { car, setCar } = useCustomization(); // Get current car and setter from context

  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]} // Restricts vertical rotation
    >
      <Stage environment={"city"} intensity={0.6} contactShadow={false}>
        <Suspense fallback={null}>
          <CarSelect carState={car} /> {/* Renders the selected car */}
        </Suspense>
      </Stage>

      {/* Ground plane with reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={45}
          roughness={1}
          depthScale={1.3}
          minDepthThreshold={0.3}
          maxDepthThreshold={1.5}
          color="#101010"
          metalness={0.6}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Scene;
