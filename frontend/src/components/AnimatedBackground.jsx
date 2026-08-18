export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink noise">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-electric/20 blur-[140px] animate-pulseGlow" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-electricDeep/25 blur-[130px] animate-pulseGlow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-electric/10 blur-[120px] animate-pulseGlow" style={{ animationDelay: "3s" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
    </div>
  );
}
