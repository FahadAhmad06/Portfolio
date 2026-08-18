import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";

export default function FloatingObject({ mouse }) {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const wireRef = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // continuous slow rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.18;
      coreRef.current.rotation.x += delta * 0.08;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.12;
      wireRef.current.rotation.z += delta * 0.05;
    }

    // gentle floating bob
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.18;

      // mouse-following rotation (lerped, subtle)
      const targetRotX = mouse.current.y * 0.35;
      const targetRotY = mouse.current.x * 0.5;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.04;
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <Icosahedron ref={coreRef} args={[1.15, 1]}>
        <MeshDistortMaterial
          color="#1D4ED8"
          emissive="#3B82F6"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.6}
          distort={0.28}
          speed={1.4}
          transparent
          opacity={0.85}
        />
      </Icosahedron>
      <Icosahedron ref={wireRef} args={[1.55, 0]}>
        <meshBasicMaterial color="#60A5FA" wireframe transparent opacity={0.35} />
      </Icosahedron>
    </group>
  );
}
