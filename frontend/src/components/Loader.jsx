import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Sparkles, Terminal } from "lucide-react";

export default function Loader({ onDone }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const subtextRef = useRef(null);
  const counterRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // INITIAL SETUPS
      gsap.set(".loader-char", {
        opacity: 0,
        y: 40,
        rotateX: -90,
        filter: "blur(10px)",
      });
      gsap.set(subtextRef.current, { opacity: 0, y: 15 });
      gsap.set(counterRef.current, { opacity: 0, scale: 0.8 });

      // RINGS ROTATION CONTINUOUS
      gsap.to(ring1Ref.current, { rotation: 360, duration: 8, repeat: -1, ease: "none" });
      gsap.to(ring2Ref.current, { rotation: -360, duration: 12, repeat: -1, ease: "none" });

      // COUNTER NUMERICAL ANIMATION
      const counterObj = { value: 0 };
      gsap.to(counterObj, {
        value: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          setCounter(Math.floor(counterObj.value));
        },
      });

      // MAIN INTRO AND EXIT TIMELINE
      const tl = gsap.timeline({ onComplete: onDone });

      tl.to(".loader-char", {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: 0.04,
        ease: "back.out(1.8)",
      })
        .to(
          subtextRef.current,
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .to(
          counterRef.current,
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
          "-=0.5"
        )
        .to(containerRef.current, {
          scale: 0.9,
          opacity: 0,
          filter: "blur(12px)",
          duration: 0.6,
          delay: 0.8,
          ease: "power3.in",
        })
        .to(
          ref.current,
          {
            yPercent: -100,
            duration: 0.85,
            ease: "power4.inOut",
          },
          "-=0.2"
        );
    }, ref);

    return () => ctx.revert();
  }, [onDone]);

  const nameLetters = "Fahad Ahmad".split("");

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-ink overflow-hidden selection:bg-electric selection:text-black"
      style={{ perspective: "1200px" }}
    >
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="pointer-events-none absolute h-[450px] w-[450px] rounded-full bg-electric/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute h-[350px] w-[350px] rounded-full bg-purple-500/[0.08] blur-[130px]" />

      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* MAIN LOADER CONTENT CONTAINER */}
      <div
        ref={containerRef}
        className="relative flex flex-col items-center justify-center text-center px-6"
      >
        {/* HOLOGRAPHIC NEON RINGS */}
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          <div
            ref={ring1Ref}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-electric border-r-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.6)]"
          />
          <div
            ref={ring2Ref}
            className="absolute -inset-2 rounded-full border border-transparent border-b-purple-400 border-l-electric opacity-60"
          />
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-electric/30 bg-electric/10 text-electric shadow-lg">
            <Sparkles size={20} className="animate-pulse text-electric" />
          </div>
        </div>

        {/* ANIMATED NAME TITLE */}
        <h1
          ref={nameRef}
          className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl [transform-style:preserve-3d]"
        >
          {nameLetters.map((char, index) => (
            <span
              key={index}
              className="loader-char inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <span className="text-electric shadow-[0_0_15px_rgba(0,255,255,1)]">.</span>
        </h1>

        {/* SUBTEXT & STATUS */}
        <div
          ref={subtextRef}
          className="mt-4 flex items-center gap-2 rounded-full border border-electric/30 bg-black/60 px-4 py-1.5 backdrop-blur-xl shadow-lg"
        >
          <Terminal size={14} className="text-electric" />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] bg-gradient-to-r from-electric via-cyan-300 to-purple-400 bg-clip-text text-transparent font-bold">
            INITIALIZING PORTFOLIO
          </p>
        </div>

        {/* PERCENTAGE COUNTER */}
        <div ref={counterRef} className="mt-7">
          <p className="font-mono text-3xl font-extrabold text-white">
            <span className="bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent">
              {counter}
            </span>
            <span className="text-xs text-electric/70">%</span>
          </p>

          {/* PROGRESS LINE */}
          <div className="mt-3 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-electric via-cyan-300 to-purple-500 shadow-[0_0_12px_rgba(0,255,255,1)] transition-all duration-100 ease-out"
              style={{ width: `${counter}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}