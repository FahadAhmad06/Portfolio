import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lights from "./Lights";
import FloatingObject from "./FloatingObject";
import Particles from "./Particles";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 });
  const groupWrapRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);

    // scroll-based scale/rotation on the canvas wrapper for a subtle
    // "object responds to page scroll" feel within the hero section.
    let st;
    if (groupWrapRef.current && !reducedMotion) {
      st = ScrollTrigger.create({
        trigger: groupWrapRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
        onUpdate: (self) => {
          gsap.set(groupWrapRef.current, {
            scale: 1 - self.progress * 0.25,
            y: self.progress * -40,
            opacity: 1 - self.progress * 0.4,
          });
        },
      });
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
      st?.kill();
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div ref={groupWrapRef} className="pointer-events-none absolute inset-0">
      <Canvas
        dpr={isMobile ? 1 : [1, 1.8]}
        camera={{ position: [0, 0, 4.6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Lights />
        <FloatingObject mouse={mouse} />
        {!isMobile && <Particles count={100} mouse={mouse} />}
      </Canvas>
    </div>
  );
}
