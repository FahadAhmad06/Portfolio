import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Compass,
  Lightbulb,
  RefreshCcw,
  Sparkles,
  ArrowDownRight,
} from "lucide-react";
import profile from "../assets/profile/fahad.jpeg";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    icon: Code2,
    label: "Computer Science Student",
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    icon: Lightbulb,
    label: "Full-Stack Developer",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: Compass,
    label: "Problem Solver",
    gradient: "from-orange-500/20 to-red-500/10",
  },
  {
    icon: RefreshCcw,
    label: "Continuous Learner",
    gradient: "from-green-500/20 to-emerald-500/10",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  const profileSceneRef = useRef(null);
  const profileCardRef = useRef(null);
  const imageRef = useRef(null);

  const glowRef = useRef(null);
  const spotlightRef = useRef(null);

  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);

  const shineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scene = profileSceneRef.current;
    const card = profileCardRef.current;
    const image = imageRef.current;

    const glow = glowRef.current;
    const spotlight = spotlightRef.current;

    const ring1 = ring1Ref.current;
    const ring2 = ring2Ref.current;
    const ring3 = ring3Ref.current;

    const shine = shineRef.current;

    if (!section || !scene || !card || !image) return;

    const ctx = gsap.context(() => {
      /* =====================================================
         INITIAL
      ===================================================== */

      gsap.set(".about-title-line", {
        opacity: 0,
        y: 40,
      });

      gsap.set(".about-description", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".about-paragraph", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".about-card", {
        opacity: 0,
        y: 35,
        rotateX: 12,
      });

      gsap.set(scene, {
        opacity: 0,
        scale: 0.82,
        rotateY: -18,
        rotateX: 8,
      });

      gsap.set(".floating-particle", {
        scale: 0,
        opacity: 0,
      });

      /* =====================================================
         SECTION ENTRANCE
      ===================================================== */

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      intro
        .to(".about-title-line", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
        })
        .to(
          ".about-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .to(
          scene,
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            duration: 1.3,
            ease: "expo.out",
          },
          "-=0.5"
        )
        .to(
          ".about-paragraph",
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          ".about-card",
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "back.out(1.6)",
          },
          "-=0.45"
        )
        .to(
          ".floating-particle",
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(2)",
          },
          "-=0.5"
        );

      /* =====================================================
         PROFILE FLOAT - SUPER ENHANCED
      ===================================================== */

      gsap.to(scene, {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(scene, {
        rotateZ: 2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         GLOW BREATHING - SUPER ENHANCED
      ===================================================== */

      gsap.to(glow, {
        scale: 1.4,
        opacity: 0.9,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glow, {
        filter: "blur(110px)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         IMAGE BREATHING - SUPER ENHANCED
      ===================================================== */

      gsap.to(image, {
        scale: 1.05,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         ROTATING 3D RINGS - SUPER ENHANCED
      ===================================================== */

      gsap.to(ring1, {
        rotation: 360,
        duration: 16,
        repeat: -1,
        ease: "none",
      });

      gsap.to(ring1, {
        boxShadow: "0 0 40px rgba(0,255,255,0.8), inset 0 0 30px rgba(0,255,255,0.2)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(ring2, {
        rotation: -360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      gsap.to(ring2, {
        boxShadow: "0 0 35px rgba(0,255,255,0.6), inset 0 0 20px rgba(0,255,255,0.15)",
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(ring3, {
        rotation: 360,
        duration: 32,
        repeat: -1,
        ease: "none",
      });

      gsap.to(ring3, {
        boxShadow: "0 0 30px rgba(255,255,255,0.2), inset 0 0 15px rgba(0,255,255,0.1)",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      /* =====================================================
         IMAGE LIGHT SWEEP - SUPER ENHANCED
      ===================================================== */

      const lightSweep = gsap.timeline({
        repeat: -1,
        repeatDelay: 4,
      });

      lightSweep
        .set(shine, {
          x: "-150%",
          opacity: 0,
        })
        .to(shine, {
          opacity: 1,
          duration: 0.5,
          ease: "power1.in",
        })
        .to(shine, {
          x: "400%",
          duration: 1.8,
          ease: "power2.inOut",
        })
        .to(shine, {
          opacity: 0,
          duration: 0.4,
        });

      /* =====================================================
         FLOATING PARTICLES - SUPER ENHANCED
      ===================================================== */

      gsap.utils.toArray(".floating-particle").forEach((particle, index) => {
        gsap.to(particle, {
          x: index % 2 === 0 ? 20 : -20,
          y: index % 2 === 0 ? -30 : 30,
          duration: 3 + index * 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(particle, {
          scale: 1.3,
          opacity: 0.8,
          duration: 2.5 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.15
        });
      });

      /* =====================================================
         MOUSE 3D EFFECT
      ===================================================== */

      const rotateX = gsap.quickTo(card, "rotationX", {
        duration: 0.5,
        ease: "power3.out",
      });

      const rotateY = gsap.quickTo(card, "rotationY", {
        duration: 0.5,
        ease: "power3.out",
      });

      const imageX = gsap.quickTo(image, "x", {
        duration: 0.55,
        ease: "power3.out",
      });

      const imageY = gsap.quickTo(image, "y", {
        duration: 0.55,
        ease: "power3.out",
      });

      const imageScale = gsap.quickTo(image, "scale", {
        duration: 0.5,
        ease: "power3.out",
      });

      const spotlightX = gsap.quickTo(spotlight, "x", {
        duration: 0.35,
        ease: "power2.out",
      });

      const spotlightY = gsap.quickTo(spotlight, "y", {
        duration: 0.35,
        ease: "power2.out",
      });

      const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        rotateY(percentX * 18);
        rotateX(-percentY * 18);

        imageX(percentX * 12);
        imageY(percentY * 10);
        imageScale(1.08);

        spotlightX(x - 120);
        spotlightY(y - 120);

        gsap.to(glow, {
          x: percentX * 35,
          y: percentY * 35,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.03,
          duration: 0.4,
          ease: "back.out(1.8)",
        });

        gsap.to(spotlight, {
          opacity: 1,
          duration: 0.3,
        });

        gsap.to(glow, {
          scale: 1.5,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        rotateX(0);
        rotateY(0);

        imageX(0);
        imageY(0);
        imageScale(1);

        gsap.to(card, {
          scale: 1,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
        });

        gsap.to(glow, {
          x: 0,
          y: 0,
          scale: 1.4,
          opacity: 0.9,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(spotlight, {
          opacity: 0,
          duration: 0.5,
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      /* =====================================================
         CARD 3D HOVER - ENHANCED
      ===================================================== */

      const cards = gsap.utils.toArray(".about-card");

      cards.forEach((item) => {
        const icon = item.querySelector(".card-icon");
        const shineCard = item.querySelector(".card-shine");
        const bgGradient = item.querySelector(".card-bg-gradient");

        const rx = gsap.quickTo(item, "rotationX", {
          duration: 0.35,
          ease: "power2.out",
        });

        const ry = gsap.quickTo(item, "rotationY", {
          duration: 0.35,
          ease: "power2.out",
        });

        const ix = gsap.quickTo(icon, "x", {
          duration: 0.35,
          ease: "power2.out",
        });

        const iy = gsap.quickTo(icon, "y", {
          duration: 0.35,
          ease: "power2.out",
        });

        const shineX = gsap.quickTo(shineCard, "x", {
          duration: 0.5,
          ease: "power2.out",
        });

        const handleMove = (e) => {
          if (window.innerWidth < 768) return;

          const rect = item.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const px = (x - rect.width / 2) / (rect.width / 2);
          const py = (y - rect.height / 2) / (rect.height / 2);

          ry(px * 12);
          rx(-py * 12);

          ix(px * 10);
          iy(py * 10);

          shineX(x - rect.width / 2);

          gsap.to(bgGradient, {
            opacity: 1.2,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          rx(0);
          ry(0);
          ix(0);
          iy(0);
          shineX(-300);

          gsap.to(bgGradient, {
            opacity: 0,
            duration: 0.5,
          });
        };

        item.addEventListener("mousemove", handleMove);
        item.addEventListener("mouseleave", handleLeave);

        item._cleanup = () => {
          item.removeEventListener("mousemove", handleMove);
          item.removeEventListener("mouseleave", handleLeave);
        };
      });

      /* =====================================================
         SCROLL PARALLAX - SUPER ENHANCED
      ===================================================== */

      gsap.to(".about-orb-one", {
        y: -220,
        x: 120,
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".about-orb-two", {
        y: 220,
        x: -130,
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      gsap.to(".about-grid", {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to(scene, {
        y: -30,
        scale: 1.05,
        rotateX: 8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
        },
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);

        cards.forEach((item) => {
          if (item._cleanup) item._cleanup();
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-24 pt-36 lg:px-10 [background:radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.04)_0%,transparent_50%)]"
      style={{
        perspective: "1600px",
      }}
    >
      {/* =====================================================
          BACKGROUND - MASSIVELY ENHANCED
      ===================================================== */}

      {/* PRIMARY GLOW */}
      <div className="about-orb-one pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-electric/30 via-cyan-500/20 to-cyan-500/10 blur-[150px] shadow-[0_0_150px_rgba(0,255,255,0.5),0_0_80px_rgba(0,255,255,0.3)]" />

      {/* SECONDARY GLOW */}
      <div className="about-orb-two pointer-events-none absolute -right-40 top-[50%] h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-purple-500/25 via-purple-500/15 to-cyan-500/10 blur-[170px] shadow-[0_0_180px_rgba(168,85,247,0.4),0_0_100px_rgba(168,85,247,0.2)]" />

      {/* ACCENT LIGHT */}
      <div className="pointer-events-none absolute left-1/2 -top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-electric/15 via-transparent to-transparent blur-[140px]" />

      {/* ENHANCED GRID */}
      <div className="about-grid pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* RADIAL GLOW CENTER */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: "radial-gradient(circle at 50% 30%, rgba(0,255,255,0.08), transparent 50%)"
      }} />

      {/* =====================================================
          HEADER - MASSIVELY ENHANCED
      ===================================================== */}

      <div className="relative z-10">
        <div className="about-title-line flex items-center gap-3 group">
          <span className="h-px w-12 bg-gradient-to-r from-electric via-cyan-300 to-transparent group-hover:w-16 transition-all duration-500" />

          <p className="font-mono text-xs tracking-[0.35em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-semibold animate-pulse">
            ABOUT ME
          </p>

          <Sparkles
            size={16}
            className="animate-pulse text-electricGlow drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          />
        </div>

        <h1 className="about-title-line mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-7xl drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          More Than{" "}
          <span className="relative">
            <span className="absolute inset-0 bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent blur-xl opacity-50 animate-pulse">
              Just Code.
            </span>
            <span className="bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Just Code.
            </span>
          </span>
        </h1>

        <p className="about-description mt-6 max-w-2xl text-sm leading-relaxed text-mist/90 md:text-base lg:text-lg drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          I build digital experiences where clean code, thoughtful design,
          and meaningful interactions come together. Every pixel, every function,
          every moment crafted with intention.
        </p>
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative z-10 mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        {/* =====================================================
            PROFILE - PERFECTLY DISPLAYED & STYLED
        ===================================================== */}

        <div
          ref={profileSceneRef}
          className="relative mx-auto h-[340px] w-[340px] sm:h-[390px] sm:w-[390px] lg:mx-0"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* GLOW - ENHANCED */}

          <div
            ref={glowRef}
            className="absolute -inset-16 rounded-full bg-gradient-to-br from-electric/35 via-cyan-400/20 to-purple-500/25 blur-[100px] shadow-[0_0_120px_rgba(0,255,255,0.5)]"
          />

          {/* RING 1 - ENHANCED */}

          <div
            ref={ring1Ref}
            className="absolute -inset-5 rounded-[42px] border-2 border-electric/40 shadow-[0_0_30px_rgba(0,255,255,0.4),inset_0_0_20px_rgba(0,255,255,0.15)]"
            style={{
              transform: "rotateX(60deg) rotateZ(20deg)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* RING 2 - ENHANCED */}

          <div
            ref={ring2Ref}
            className="absolute -inset-9 rounded-[48px] border border-cyan-400/30 shadow-[0_0_25px_rgba(0,255,255,0.25)]"
            style={{
              transform: "rotateX(65deg) rotateZ(-25deg)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* RING 3 - ENHANCED */}

          <div
            ref={ring3Ref}
            className="absolute -inset-14 rounded-[55px] border border-white/15 shadow-[0_0_20px_rgba(255,255,255,0.1),inset_0_0_15px_rgba(0,255,255,0.08)]"
            style={{
              transform: "rotateX(70deg) rotateZ(40deg)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* PARTICLES - MASSIVELY ENHANCED */}

          <div className="floating-particle absolute -right-5 top-8 z-30 h-5 w-5 rounded-full bg-gradient-to-br from-electric to-cyan-300 shadow-[0_0_40px_rgba(0,255,255,1.3),0_0_20px_rgba(0,255,255,0.8)]" />

          <div className="floating-particle absolute -bottom-4 left-12 z-30 h-3 w-3 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 shadow-[0_0_35px_rgba(0,255,255,1)]" />

          <div className="floating-particle absolute -left-5 top-1/2 z-30 h-4 w-4 rounded-full bg-gradient-to-br from-electric to-purple-400 shadow-[0_0_38px_rgba(0,255,255,1)]" />

          <div className="floating-particle absolute right-10 bottom-10 z-30 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-white/90 to-cyan-200 shadow-[0_0_30px_rgba(255,255,255,1)]" />

          {/* =====================================================
              IMAGE CARD CONTAINER
          ===================================================== */}

          <div
            ref={profileCardRef}
            className="group relative h-full w-full overflow-hidden rounded-[32px] border-2 border-electric/50 bg-black/60 shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_80px_rgba(0,255,255,0.3)] backdrop-blur-md"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            {/* MOUSE SPOTLIGHT */}

            <div
              ref={spotlightRef}
              className="pointer-events-none absolute left-0 top-0 z-30 h-[240px] w-[240px] rounded-full bg-gradient-to-r from-electric/25 to-cyan-400/15 opacity-0 blur-[70px]"
            />

            {/* IMAGE WRAPPER */}

            <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-gradient-to-br from-graphite via-panel to-ink">
              <img
                ref={imageRef}
                src={profile}
                alt="Fahad Ahmad"
                className="h-full w-full object-cover object-[center_18%] brightness-110 contrast-125 transition-transform duration-500"
                style={{
                  willChange: "transform",
                }}
              />

              {/* MULTI-LAYER OVERLAYS FOR 3D DEPTH */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/[0.08] via-transparent to-cyan-400/[0.08]" />

              <div className="card-bg-gradient pointer-events-none absolute inset-0 bg-gradient-to-br from-electric/15 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500" />

              {/* LIGHT SWEEP */}

              <div
                ref={shineRef}
                className="pointer-events-none absolute left-0 top-[-30%] z-40 h-[160%] w-[28%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[1px]"
              />

              {/* TOP CORNER STATUS */}

              <div
                className="absolute right-4 top-4 z-40 flex items-center gap-2 rounded-full border border-electric/40 bg-black/60 px-3 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.2)]"
                style={{
                  transform: "translateZ(30px)",
                }}
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-electric shadow-[0_0_12px_rgba(0,255,255,1)]" />

                <span className="font-mono text-[9px] tracking-widest text-white/90 font-bold">
                  ONLINE
                </span>
              </div>

              {/* BOTTOM INFO CARD */}

              <div
                className="absolute bottom-4 left-4 right-4 z-40"
                style={{
                  transform: "translateZ(40px)",
                }}
              >
                <div className="rounded-2xl border border-electric/40 bg-black/75 px-4 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover:border-electric/80 group-hover:bg-black/90">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.3em] bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent font-bold">
                        FAHAD AHMAD
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-white/90">
                        Full-Stack Developer
                      </p>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-electric/40 bg-electric/20 text-electric transition-all duration-300 group-hover:scale-110 group-hover:border-electric">
                      <ArrowDownRight size={15} className="transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </div>

              {/* BORDER INNER RINGS */}

              <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-white/20" />
              <div className="pointer-events-none absolute inset-1 rounded-[28px] ring-1 ring-electric/30" />
            </div>
          </div>
        </div>

        {/* =====================================================
            TEXT - MASSIVELY ENHANCED
        ===================================================== */}

        <div className="relative space-y-7">
          {/* DECORATIVE BACKGROUND */}
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-electric/10 to-transparent blur-[100px] pointer-events-none" />
          
          <p className="about-paragraph text-base leading-relaxed text-mist/95 md:text-lg lg:text-xl bg-gradient-to-r from-white via-mist/90 to-mist/80 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] relative">
            I'm <span className="font-semibold bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent">Fahad Ahmad</span>, a Computer Science student who treats every
            project like a small product, not just an assignment. My journey
            started with curiosity about how websites actually work under the
            hood, and it's grown into a genuine passion for building
            full-stack applications end to end.
          </p>

          <p className="about-paragraph text-base leading-relaxed text-mist/95 md:text-lg lg:text-xl bg-gradient-to-r from-white via-mist/90 to-mist/80 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] relative">
            I enjoy the entire process — designing clean interfaces,
            structuring reliable backends, modeling data, and wiring it all
            together into something people can actually use. <span className="bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-semibold">React, Node.js</span> and
            modern databases are where I spend most of my time, alongside
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"> Flutter</span> for mobile.
          </p>

          <p className="about-paragraph text-base leading-relaxed text-mist/95 md:text-lg lg:text-xl bg-gradient-to-r from-white via-mist/90 to-mist/80 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] relative">
            I approach problems methodically: break them down, research,
            prototype, and refine. Looking ahead, my goal is to keep deepening
            my full-stack skills, contribute to meaningful products, and
            eventually build things that <span className="bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent font-semibold">scale to real users</span>.
          </p>

          {/* =====================================================
              CARDS - MASSIVELY ENHANCED
          ===================================================== */}

          <div className="grid grid-cols-2 gap-4 pt-8">
            {CARDS.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="about-card group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent px-4 py-4 backdrop-blur-2xl transition-all duration-500 hover:border-electric/80 hover:bg-gradient-to-br hover:from-electric/[0.2] hover:via-purple-500/[0.1] hover:to-cyan-400/[0.05] hover:shadow-[0_0_60px_rgba(0,255,255,0.35),inset_0_0_40px_rgba(0,255,255,0.1)]"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    willChange: "transform",
                  }}
                >
                  {/* CARD GLOW BG */}
                  <div className="pointer-events-none absolute -inset-12 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${item.gradient})`,
                      filter: "blur(40px)",
                      zIndex: -1
                    }}
                  />

                  {/* SHINE EFFECT */}
                  <div
                    className="card-shine pointer-events-none absolute -left-24 top-0 h-full w-16 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{
                      transform: "translateX(-300px)",
                    }}
                  />

                  {/* GRADIENT OVERLAY */}
                  <div
                    className="card-bg-gradient pointer-events-none absolute inset-0 opacity-0 rounded-2xl transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${item.gradient})`,
                    }}
                  />

                  {/* NUMBER LABEL */}
                  <span className="absolute right-3 top-2 font-mono text-[9px] text-white/20 font-semibold group-hover:text-electric/60 transition-colors duration-300">
                    0{index + 1}
                  </span>

                  {/* CONTENT */}
                  <div
                    className="card-icon relative z-10 flex items-center gap-3"
                    style={{
                      transform: "translateZ(25px)",
                    }}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-electric/35 bg-gradient-to-br from-electric/20 to-electric/8 shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover:border-electric/70 group-hover:bg-gradient-to-br group-hover:from-electric/35 group-hover:to-cyan-400/15 group-hover:shadow-[0_0_50px_rgba(0,255,255,0.4),inset_0_0_20px_rgba(0,255,255,0.1)]">
                      <Icon
                        size={20}
                        className="text-electric transition-all duration-500 group-hover:scale-140 group-hover:rotate-12 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]"
                      />
                    </div>

                    <span className="text-xs font-semibold leading-snug text-white/95 sm:text-sm transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                      {item.label}
                    </span>
                  </div>

                  {/* BOTTOM BORDER */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-electric via-cyan-300 to-transparent shadow-[0_0_20px_rgba(0,255,255,1),0_0_40px_rgba(0,255,255,0.6)] transition-all duration-700 group-hover:w-full" />

                  {/* CORNER ACCENT */}
                  <div className="absolute top-0 right-0 h-8 w-8 rounded-bl-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
                    background: "radial-gradient(circle at top right, rgba(0,255,255,0.3), transparent 70%)"
                  }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM - MASSIVELY ENHANCED
      ===================================================== */}

      <div className="about-title-line relative z-10 mt-32">
        <div className="relative flex items-center gap-4 group">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-electric/40 to-transparent group-hover:via-electric/60 transition-all duration-500" />

          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-electric/40 bg-gradient-to-r from-electric/[0.12] via-purple-500/[0.08] to-cyan-400/[0.08] backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.2)] hover:shadow-[0_0_60px_rgba(0,255,255,0.35)] transition-all duration-500 group-hover:border-electric/70 group-hover:bg-gradient-to-r group-hover:from-electric/[0.2] group-hover:via-purple-500/[0.12] group-hover:to-cyan-400/[0.12]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-br from-electric to-cyan-300 shadow-[0_0_20px_rgba(0,255,255,1.2),0_0_10px_rgba(0,255,255,0.6)]" />

            <span className="font-mono text-[10px] tracking-[0.35em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-bold drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
              ALWAYS LEARNING
            </span>

            <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-br from-cyan-300 to-electric shadow-[0_0_20px_rgba(0,255,255,1.2),0_0_10px_rgba(0,255,255,0.6)]" />
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-electric/40 to-transparent group-hover:via-electric/60 transition-all duration-500" />
        </div>

        {/* DECORATIVE BOTTOM GLOW */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-gradient-to-t from-electric/20 to-transparent blur-[120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </section>
  );
}