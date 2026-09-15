import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { Sparkles } from "lucide-react";

export default function PageTransition({ children }) {
  const overlayRef = useRef(null);
  const secondaryOverlayRef = useRef(null);
  const scanlineRef = useRef(null);
  const contentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // SCROLL TO TOP ON ROUTE CHANGE IMMEDIATELY
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // INITIAL SETUPS
      gsap.set(overlayRef.current, { scaleY: 1, transformOrigin: "bottom" });
      gsap.set(secondaryOverlayRef.current, { scaleY: 1, transformOrigin: "bottom" });
      gsap.set(scanlineRef.current, { opacity: 1 });
      gsap.set(contentRef.current, {
        opacity: 0,
        y: 35,
        scale: 0.97,
        rotateX: 6,
        filter: "blur(10px)",
      });

      // TRANSITION ANIMATION SEQUENCE
      tl.to(secondaryOverlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.65,
        ease: "power4.inOut",
      })
        .to(
          overlayRef.current,
          {
            scaleY: 0,
            transformOrigin: "top",
            duration: 0.75,
            ease: "power4.inOut",
          },
          "-=0.45"
        )
        .to(
          scanlineRef.current,
          {
            opacity: 0,
            duration: 0.3,
          },
          "-=0.2"
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55"
        );
    });

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <>
      {/* SECONDARY BACKDROP ACCENT LAYER */}
      <div
        ref={secondaryOverlayRef}
        className="pointer-events-none fixed inset-0 z-[98] bg-gradient-to-b from-purple-900/40 via-purple-600/20 to-transparent"
        style={{ transform: "scaleY(0)" }}
      />

      {/* PRIMARY TRANSITION OVERLAY */}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[99] bg-gradient-to-b from-black via-ink to-panel"
        style={{ transform: "scaleY(0)" }}
      >
        {/* LEADING NEON SCANLINE */}
        <div
          ref={scanlineRef}
          className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-electric via-cyan-300 to-purple-500 shadow-[0_0_20px_rgba(0,255,255,1)]"
        />

        {/* CENTER ICON EMBLEM */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2 rounded-full border border-electric/30 bg-black/80 px-4 py-2 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.2)]">
            <Sparkles size={16} className="animate-spin text-electric" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent font-bold">
              FAHAD AHMAD
            </span>
          </div>
        </div>
      </div>

      {/* PAGE CONTENT CONTAINER */}
      <div
        ref={contentRef}
        className="will-change-transform"
        style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
      >
        {children}
      </div>
    </>
  );
}