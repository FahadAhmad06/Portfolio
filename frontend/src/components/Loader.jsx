import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onDone }) {
  const ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onDone });
    tl.fromTo(textRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 })
      .to(textRef.current, { opacity: 0, duration: 0.4, delay: 0.4 })
      .to(ref.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "-=0.1");
  }, [onDone]);

  return (
    <div ref={ref} className="fixed inset-0 z-[999] flex items-center justify-center bg-ink">
      <p ref={textRef} className="font-display text-2xl font-semibold tracking-widest text-white">
        Fahad Ahmad<span className="text-electric">.</span>
      </p>
    </div>
  );
}
