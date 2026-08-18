import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(overlayRef.current, { scaleY: 1, transformOrigin: "bottom" })
      .to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.7,
        ease: "power4.inOut",
      })
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 24, scale: 0.99 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" },
        "-=0.35"
      );
    window.scrollTo(0, 0);
    return () => tl.kill();
  }, [location.pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[90] bg-gradient-to-b from-electricDeep to-ink"
        style={{ transform: "scaleY(0)" }}
      />
      <div ref={contentRef}>{children}</div>
    </>
  );
}
