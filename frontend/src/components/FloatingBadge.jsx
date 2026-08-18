import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingBadge({ label, style, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, delay: 0.9 + delay, ease: "back.out(1.7)" }
    );
    gsap.to(ref.current, {
      y: "-=10",
      duration: 2.4 + delay,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [delay]);

  return (
    <div
      ref={ref}
      style={style}
      className="absolute rounded-xl border border-electric/30 bg-panel/80 px-3.5 py-2 text-xs font-medium text-white shadow-glowSm backdrop-blur-md"
    >
      {label}
    </div>
  );
}
