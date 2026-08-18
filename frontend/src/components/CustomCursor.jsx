import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    document.documentElement.classList.add("has-custom-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      gsap.to(dotRef.current, { x: pos.x, y: pos.y, duration: 0.05 });
    };

    let raf;
    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;
      if (ringRef.current) gsap.set(ringRef.current, { x: ring.x, y: ring.y });
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        const type = target.getAttribute("data-cursor");
        setLabel(type === "view" ? "VIEW" : "");
        gsap.to(ringRef.current, {
          scale: type === "view" ? 2.6 : 1.8,
          borderColor: "rgba(59,130,246,0.9)",
          duration: 0.3,
        });
        gsap.to(dotRef.current, { scale: type === "view" ? 0 : 0.4, duration: 0.3 });
      }
    };
    const onOut = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setLabel("");
        gsap.to(ringRef.current, { scale: 1, borderColor: "rgba(96,165,250,0.6)", duration: 0.3 });
        gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -ml-1 -mt-1 rounded-full bg-white"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] flex h-10 w-10 -ml-5 -mt-5 items-center justify-center rounded-full border"
        style={{ borderColor: "rgba(96,165,250,0.6)" }}
      >
        {label && <span className="text-[9px] font-semibold tracking-widest text-white">{label}</span>}
      </div>
    </>
  );
}
