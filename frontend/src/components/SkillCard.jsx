import { useRef } from "react";
import gsap from "gsap";

export default function SkillCard({ icon: Icon, name, desc }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  const onEnter = () => {
    gsap.to(cardRef.current, { y: -8, boxShadow: "0 0 50px -10px rgba(59,130,246,0.5)", duration: 0.35, ease: "power2.out" });
    gsap.to(iconRef.current, { scale: 1.15, rotate: 4, duration: 0.35, ease: "power2.out" });
  };
  const onLeave = () => {
    gsap.to(cardRef.current, { y: 0, boxShadow: "0 0 0px rgba(59,130,246,0)", duration: 0.35, ease: "power2.out" });
    gsap.to(iconRef.current, { scale: 1, rotate: 0, duration: 0.35, ease: "power2.out" });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/60 p-6 transition-colors hover:border-electric/40"
    >
      <div ref={iconRef} className="mb-4 inline-flex rounded-xl border border-electric/30 bg-electric/10 p-3 text-electricGlow">
        <Icon size={22} />
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{name}</h3>
      <p className="mt-1.5 text-sm text-mist">{desc}</p>
    </div>
  );
}
