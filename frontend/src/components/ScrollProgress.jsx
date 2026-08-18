import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      gsap.to(barRef.current, { width: `${pct}%`, duration: 0.1, ease: "none" });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[95] h-[2px] w-full bg-transparent">
      <div ref={barRef} className="h-full bg-electric shadow-glowSm" style={{ width: "0%" }} />
    </div>
  );
}
