export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} color="#8fb4ff" />
      <directionalLight position={[4, 5, 3]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={2.2} color="#3B82F6" distance={12} />
      <pointLight position={[3, -3, -2]} intensity={1.4} color="#60A5FA" distance={10} />
    </>
  );
}
