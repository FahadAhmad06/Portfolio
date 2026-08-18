import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const numRef = useRef(null);
  const isInfinity = value === "∞";

  useEffect(() => {
    if (isInfinity) return;
    const obj = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            if (numRef.current) numRef.current.textContent = Math.floor(obj.val);
          },
        });
      },
    });
    return () => trigger.kill();
  }, [value, isInfinity]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold text-white md:text-5xl">
        {isInfinity ? "∞" : <span ref={numRef}>0</span>}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-mist">{label}</p>
    </div>
  );
}
