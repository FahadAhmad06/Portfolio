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
  },
  {
    icon: Lightbulb,
    label: "Full-Stack Developer",
  },
  {
    icon: Compass,
    label: "Problem Solver",
  },
  {
    icon: RefreshCcw,
    label: "Continuous Learner",
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
         PROFILE FLOAT
      ===================================================== */

      gsap.to(scene, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         GLOW BREATHING
      ===================================================== */

      gsap.to(glow, {
        scale: 1.18,
        opacity: 0.6,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         IMAGE BREATHING
      ===================================================== */

      gsap.to(image, {
        scale: 1.035,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         ROTATING 3D RINGS
      ===================================================== */

      gsap.to(ring1, {
        rotation: 360,
        duration: 16,
        repeat: -1,
        ease: "none",
      });

      gsap.to(ring2, {
        rotation: -360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      gsap.to(ring3, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      /* =====================================================
         IMAGE LIGHT SWEEP
      ===================================================== */

      const lightSweep = gsap.timeline({
        repeat: -1,
        repeatDelay: 3,
      });

      lightSweep
        .set(shine, {
          x: "-150%",
          opacity: 0,
        })
        .to(shine, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.in",
        })
        .to(shine, {
          x: "350%",
          duration: 1.4,
          ease: "power2.inOut",
        })
        .to(shine, {
          opacity: 0,
          duration: 0.25,
        });

      /* =====================================================
         FLOATING PARTICLES
      ===================================================== */

      gsap.utils.toArray(".floating-particle").forEach((particle, index) => {
        gsap.to(particle, {
          x: index % 2 === 0 ? 10 : -12,
          y: index % 2 === 0 ? -20 : 20,
          duration: 2.2 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
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

        /* Card tilt */

        rotateY(percentX * 12);
        rotateX(-percentY * 12);

        /* Image depth */

        imageX(percentX * 12);
        imageY(percentY * 9);
        imageScale(1.07);

        /* Cursor spotlight */

        spotlightX(x - 100);
        spotlightY(y - 100);

        gsap.to(glow, {
          x: percentX * 20,
          y: percentY * 20,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.025,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(spotlight, {
          opacity: 1,
          duration: 0.3,
        });
      };

      const handleMouseLeave = () => {
        rotateX(0);
        rotateY(0);

        imageX(0);
        imageY(0);
        imageScale(1.035);

        gsap.to(card, {
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(glow, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        });

        gsap.to(spotlight, {
          opacity: 0,
          duration: 0.4,
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      /* =====================================================
         CARD 3D HOVER
      ===================================================== */

      const cards = gsap.utils.toArray(".about-card");

      cards.forEach((item) => {
        const icon = item.querySelector(".card-icon");
        const shineCard = item.querySelector(".card-shine");

        const rx = gsap.quickTo(item, "rotationX", {
          duration: 0.3,
          ease: "power2.out",
        });

        const ry = gsap.quickTo(item, "rotationY", {
          duration: 0.3,
          ease: "power2.out",
        });

        const ix = gsap.quickTo(icon, "x", {
          duration: 0.3,
          ease: "power2.out",
        });

        const iy = gsap.quickTo(icon, "y", {
          duration: 0.3,
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

          ry(px * 8);
          rx(-py * 8);

          ix(px * 6);
          iy(py * 6);

          shineX(x - rect.width / 2);
        };

        const handleLeave = () => {
          rx(0);
          ry(0);
          ix(0);
          iy(0);
          shineX(-300);
        };

        item.addEventListener("mousemove", handleMove);
        item.addEventListener("mouseleave", handleLeave);

        item._cleanup = () => {
          item.removeEventListener("mousemove", handleMove);
          item.removeEventListener("mouseleave", handleLeave);
        };
      });

      /* =====================================================
         SCROLL PARALLAX
      ===================================================== */

      gsap.to(".about-orb-one", {
        y: -160,
        x: 60,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".about-orb-two", {
        y: 160,
        x: -70,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".about-grid", {
        y: 70,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
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
      className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-24 pt-36 lg:px-10"
      style={{
        perspective: "1600px",
      }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="about-orb-one pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-electric/10 blur-[130px]" />

      <div className="about-orb-two pointer-events-none absolute -right-40 top-[50%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="about-grid pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="relative z-10">
        <div className="about-title-line flex items-center gap-3">
          <span className="h-px w-12 bg-electric" />

          <p className="font-mono text-xs tracking-[0.3em] text-electricGlow">
            ABOUT ME
          </p>

          <Sparkles
            size={14}
            className="animate-pulse text-electricGlow"
          />
        </div>

        <h1 className="about-title-line mt-5 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          More Than{" "}
          <span className="text-electric">
            Just Code.
          </span>
        </h1>

        <p className="about-description mt-5 max-w-2xl text-sm leading-relaxed text-mist/70 md:text-base">
          I build digital experiences where clean code, thoughtful design,
          and meaningful interactions come together.
        </p>
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative z-10 mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        {/* =====================================================
            PROFILE
        ===================================================== */}

        <div
          ref={profileSceneRef}
          className="relative mx-auto h-[320px] w-[320px] sm:h-[370px] sm:w-[370px] lg:mx-0"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* GLOW */}

          <div
            ref={glowRef}
            className="absolute -inset-16 rounded-full bg-electric/20 blur-[90px]"
          />

          {/* RING 1 */}

          <div
            ref={ring1Ref}
            className="absolute -inset-5 rounded-[42px] border border-electric/30"
            style={{
              transform: "rotateX(60deg) rotateZ(20deg)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* RING 2 */}

          <div
            ref={ring2Ref}
            className="absolute -inset-9 rounded-[48px] border border-cyan-400/20"
            style={{
              transform: "rotateX(65deg) rotateZ(-25deg)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* RING 3 */}

          <div
            ref={ring3Ref}
            className="absolute -inset-14 rounded-[55px] border border-white/10"
            style={{
              transform: "rotateX(70deg) rotateZ(40deg)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* PARTICLES */}

          <div className="floating-particle absolute -right-5 top-8 z-30 h-3 w-3 rounded-full bg-electric shadow-[0_0_25px_rgba(0,255,255,0.9)]" />

          <div className="floating-particle absolute -bottom-4 left-12 z-30 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.8)]" />

          <div className="floating-particle absolute -left-5 top-1/2 z-30 h-2.5 w-2.5 rounded-full bg-electric shadow-[0_0_20px_rgba(0,255,255,0.8)]" />

          <div className="floating-particle absolute right-10 bottom-10 z-30 h-1.5 w-1.5 rounded-full bg-white/80" />

          {/* =====================================================
              IMAGE CARD
          ===================================================== */}

          <div
            ref={profileCardRef}
            className="glass group relative h-full w-full overflow-hidden rounded-[32px] border border-electric/30 shadow-[0_30px_80px_rgba(0,0,0,0.45),0_0_60px_rgba(0,255,255,0.14)]"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            {/* MOUSE SPOTLIGHT */}

            <div
              ref={spotlightRef}
              className="pointer-events-none absolute left-0 top-0 z-30 h-[200px] w-[200px] rounded-full bg-electric/20 opacity-0 blur-[55px]"
            />

            {/* IMAGE */}

            <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-graphite via-panel to-ink">
              <img
                ref={imageRef}
                src={profile}
                alt="Fahad Ahmad"
                className="h-full w-full object-cover object-[50%_12%]"
                style={{
                  willChange: "transform",
                  transformOrigin: "center center",
                }}
              />

              {/* DARK GRADIENT */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

              {/* ELECTRIC COLOR */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* =================================================
                  MOVING LIGHT
              ================================================= */}

              <div
                ref={shineRef}
                className="pointer-events-none absolute left-0 top-[-30%] z-40 h-[160%] w-[25%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent blur-[2px]"
              />

              {/* =================================================
                  TOP CORNER STATUS
              ================================================= */}

              <div
                className="absolute right-4 top-4 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-xl"
                style={{
                  transform: "translateZ(35px)",
                }}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric shadow-[0_0_10px_rgba(0,255,255,1)]" />

                <span className="font-mono text-[9px] tracking-widest text-white/70">
                  ONLINE
                </span>
              </div>

              {/* =================================================
                  BOTTOM INFO
              ================================================= */}

              <div
                className="absolute bottom-5 left-5 right-5 z-40"
                style={{
                  transform: "translateZ(45px)",
                }}
              >
                <div className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl transition-all duration-500 group-hover:border-electric/40 group-hover:bg-black/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.3em] text-electricGlow">
                        FAHAD AHMAD
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Full-Stack Developer
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-electric/20 bg-electric/5">
                      <ArrowDownRight
                        size={16}
                        className="text-electric transition-transform duration-500 group-hover:rotate-45"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* BORDER */}

              <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover:border-electric/50" />
            </div>
          </div>
        </div>

        {/* =====================================================
            TEXT
        ===================================================== */}

        <div className="relative space-y-5">
          <p className="about-paragraph text-base leading-relaxed text-mist md:text-lg">
            I'm Fahad Ahmad, a Computer Science student who treats every
            project like a small product, not just an assignment. My journey
            started with curiosity about how websites actually work under the
            hood, and it's grown into a genuine passion for building
            full-stack applications end to end.
          </p>

          <p className="about-paragraph text-base leading-relaxed text-mist md:text-lg">
            I enjoy the entire process — designing clean interfaces,
            structuring reliable backends, modeling data, and wiring it all
            together into something people can actually use. React, Node.js and
            modern databases are where I spend most of my time, alongside
            Flutter for mobile.
          </p>

          <p className="about-paragraph text-base leading-relaxed text-mist md:text-lg">
            I approach problems methodically: break them down, research,
            prototype, and refine. Looking ahead, my goal is to keep deepening
            my full-stack skills, contribute to meaningful products, and
            eventually build things that scale to real users.
          </p>

          {/* =====================================================
              CARDS
          ===================================================== */}

          <div className="grid grid-cols-2 gap-4 pt-6">
            {CARDS.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="about-card group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/50 px-4 py-4 backdrop-blur-xl transition-colors duration-300 hover:border-electric/40"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "900px",
                    willChange: "transform",
                  }}
                >
                  <div
                    className="card-shine pointer-events-none absolute -left-24 top-0 h-full w-16 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    style={{
                      transform: "translateX(-300px)",
                    }}
                  />

                  <span className="absolute right-3 top-2 font-mono text-[9px] text-white/10">
                    0{index + 1}
                  </span>

                  <div
                    className="card-icon relative z-10 flex items-center gap-3"
                    style={{
                      transform: "translateZ(25px)",
                    }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-electric/20 bg-electric/5 transition-all duration-300 group-hover:border-electric/50 group-hover:bg-electric/10 group-hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]">
                      <Icon
                        size={18}
                        className="text-electric transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <span className="text-xs font-medium leading-snug text-white sm:text-sm">
                      {item.label}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-electric transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <div className="about-title-line relative z-10 mt-24 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric shadow-[0_0_12px_rgba(0,255,255,0.9)]" />

          <span className="font-mono text-[9px] tracking-[0.3em] text-mist/40">
            ALWAYS LEARNING
          </span>

          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric shadow-[0_0_12px_rgba(0,255,255,0.9)]" />
        </div>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-electric/20 to-transparent" />
      </div>
    </section>
  );
}