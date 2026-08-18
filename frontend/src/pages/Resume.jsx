import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Download,
  GraduationCap,
  Code2,
  Sparkles,
  Brain,
  Database,
  Smartphone,
  Terminal,
  CircleDot,
  Layers,
  ArrowUpRight,
  Cpu,
  Globe,
  Zap,
  Monitor,
  Braces,
  Server,
} from "lucide-react";

import MagneticButton from "../components/MagneticButton";
import boy from "../assets/projects/boy.png";
import cv from "../assets/CV/Fahad-Ahmad-CV.pdf";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   MILESTONES
========================================================= */

const MILESTONES = [
  {
    year: "01",
    title: "Programming Fundamentals",
    desc: "Learned programming fundamentals, logical thinking and problem solving.",
    icon: Code2,
  },
  {
    year: "02",
    title: "Web Development",
    desc: "Started building websites and understanding how modern web applications work.",
    icon: Globe,
  },
  {
    year: "03",
    title: "React",
    desc: "Started developing modern interactive interfaces using React.js.",
    icon: Sparkles,
  },
  {
    year: "04",
    title: "Node.js",
    desc: "Moved into backend development and started creating REST APIs.",
    icon: Terminal,
  },
  {
    year: "05",
    title: "Full-Stack Development",
    desc: "Started connecting frontend, backend and databases into complete applications.",
    icon: Layers,
  },
  {
    year: "06",
    title: "Flutter",
    desc: "Expanded into mobile application development with Flutter and Dart.",
    icon: Smartphone,
  },
  {
    year: "07",
    title: "Real Projects",
    desc: "Built and worked on complete applications including PakCartify.",
    icon: Database,
  },
  {
    year: "08",
    title: "Continuous Learning",
    desc: "Continuously building, experimenting, learning and improving.",
    icon: Brain,
  },
];

/* =========================================================
   SKILLS
========================================================= */

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Terminal,
    items: ["C++", "Python", "JavaScript", "HTML", "CSS", "Kotlin", "Dart"],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["React.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "SQL", "MSSQL", "Cloudinary", "FireBase"],
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    items: ["Flutter", "Git", "GitHub", "Android Studio", "VS Code"],
  },
];

/* =========================================================
   PARTICLES
========================================================= */

const PARTICLES = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size:
    Math.random() > 0.85
      ? 4
      : Math.random() > 0.5
        ? 3
        : 2,
}));

/* =========================================================
   RESUME
========================================================= */

export default function Resume() {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const mouseGlow = useRef(null);
  const developerCard = useRef(null);

  /* =======================================================
     GSAP
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ===================================================
         HERO
      =================================================== */

      const hero = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      hero
        .fromTo(
          ".resume-label",
          {
            opacity: 0,
            y: 40,
            filter: "blur(15px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
          }
        )
        .fromTo(
          ".resume-title",
          {
            opacity: 0,
            y: 100,
            scale: 0.82,
            rotateX: 30,
            filter: "blur(20px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.25,
          },
          "-=0.45"
        )
        .fromTo(
          ".resume-subtitle",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.65"
        )
        .fromTo(
          ".resume-download",
          {
            opacity: 0,
            x: 70,
            scale: 0.7,
            rotateY: 30,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.9,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
        .fromTo(
          ".developer-showcase",
          {
            opacity: 0,
            x: 100,
            scale: 0.75,
            rotateY: -30,
            rotateX: 10,
            filter: "blur(15px)",
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.9"
        );

      /* ===================================================
         FLOATING ORBS
      =================================================== */

      gsap.to(".orb-1", {
        x: 130,
        y: 80,
        scale: 1.25,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-2", {
        x: -130,
        y: -90,
        scale: 1.2,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-3", {
        x: 100,
        y: -100,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ===================================================
         3D OBJECTS
      =================================================== */

      gsap.to(".floating-ring", {
        rotation: 360,
        duration: 14,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".floating-cube", {
        rotationX: 360,
        rotationY: 360,
        rotationZ: 180,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".floating-code", {
        y: -15,
        rotation: 3,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-monitor", {
        y: 12,
        rotateY: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ===================================================
         PARTICLES
      =================================================== */

      gsap.utils.toArray(".resume-particle").forEach((particle, i) => {
        gsap.to(particle, {
          x: i % 2 === 0 ? 35 : -35,
          y: i % 3 === 0 ? -45 : 45,
          opacity: Math.random() * 0.55 + 0.15,
          duration: 2 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });
      });

      /* ===================================================
         SCROLL REVEALS
      =================================================== */

      gsap.utils.toArray(".scroll-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 100,
            scale: 0.88,
            rotateX: 18,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power4.out",

            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      /* ===================================================
         EDUCATION
      =================================================== */

      gsap.fromTo(
        ".education-card",
        {
          opacity: 0,
          y: 120,
          rotateX: 25,
          rotateY: -15,
          scale: 0.82,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".education-card",
            start: "top 88%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* ===================================================
         SKILLS
      =================================================== */

      gsap.utils.toArray(".resume-skill-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotateX: 30,
            rotateY: i % 2 === 0 ? -18 : 18,
            scale: 0.78,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.95,
            delay: i * 0.07,
            ease: "power4.out",

            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      /* ===================================================
         TIMELINE LINE
      =================================================== */

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            ease: "none",

            scrollTrigger: {
              trigger: ".timeline-wrap",
              start: "top 70%",
              end: "bottom 65%",
              scrub: 0.7,
            },
          }
        );
      }

      /* ===================================================
         TIMELINE ITEMS
      =================================================== */

      gsap.utils.toArray(".timeline-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: i % 2 === 0 ? -120 : 120,
            rotateY: i % 2 === 0 ? -20 : 20,
            rotateX: 15,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",

            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      /* ===================================================
         TIMELINE DOTS
      =================================================== */

      gsap.utils.toArray(".timeline-dot").forEach((dot) => {
        gsap.fromTo(
          dot,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(2.5)",

            scrollTrigger: {
              trigger: dot,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      /* ===================================================
         CTA
      =================================================== */

      gsap.fromTo(
        ".resume-cta",
        {
          opacity: 0,
          y: 120,
          rotateX: 20,
          scale: 0.82,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".resume-cta",
            start: "top 88%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* ===================================================
         BACKGROUND PARALLAX
      =================================================== */

      gsap.utils.toArray(".parallax-bg").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -180 : 180,

          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });
      });

      /* ===================================================
         DEVELOPER IMAGE FLOAT
      =================================================== */

      gsap.to(".developer-image", {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".developer-glow", {
        scale: 1.15,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  /* =======================================================
     MOUSE GLOW
  ======================================================= */

  useEffect(() => {
    const move = (e) => {
      if (!mouseGlow.current) return;

      gsap.to(mouseGlow.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  /* =======================================================
     DEVELOPER 3D TILT
  ======================================================= */

  const handleDeveloperMove = (e) => {
    if (!developerCard.current) return;

    const card = developerCard.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY =
      ((x - rect.width / 2) / (rect.width / 2)) * 8;

    const rotateX =
      ((y - rect.height / 2) / (rect.height / 2)) * -8;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.025,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleDeveloperLeave = () => {
    if (!developerCard.current) return;

    gsap.to(developerCard.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1,0.5)",
    });
  };

  /* =======================================================
     SKILL CARD 3D
  ======================================================= */

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY =
      ((x - rect.width / 2) / (rect.width / 2)) * 10;

    const rotateX =
      ((y - rect.height / 2) / (rect.height / 2)) * -10;

    gsap.to(card, {
      rotateX,
      rotateY,
      y: -10,
      scale: 1.025,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1,0.5)",
    });
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-ink text-white"
    >
      {/* ===================================================
          MOUSE GLOW
      =================================================== */}

      <div
        ref={mouseGlow}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.045] blur-[90px] lg:block"
      />

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="orb-1 parallax-bg absolute -left-[15%] top-[3%] h-[500px] w-[500px] rounded-full bg-electric/10 blur-[140px]" />

        <div className="orb-2 parallax-bg absolute -right-[15%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="orb-3 parallax-bg absolute bottom-[5%] left-[35%] h-[550px] w-[550px] rounded-full bg-indigo-600/10 blur-[150px]" />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* RADIAL LIGHT */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 55% 15%, rgba(0,180,255,.11), transparent 34%)",
          }}
        />

        {/* PARTICLES */}

        {PARTICLES.map((particle) => (
          <span
            key={particle.id}
            className="resume-particle absolute rounded-full bg-electric"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: 0.35,
              boxShadow: "0 0 12px rgba(0,255,255,.8)",
            }}
          />
        ))}

        {/* FLOATING RINGS */}

        <div className="floating-ring absolute right-[8%] top-[13%] hidden h-36 w-36 rounded-full border border-electric/20 shadow-[0_0_40px_rgba(0,255,255,.05)] lg:block" />

        <div className="floating-ring absolute right-[10%] top-[16%] hidden h-24 w-24 rounded-full border border-blue-500/10 lg:block" />

        {/* CUBE */}

        <div
          className="floating-cube absolute right-[18%] top-[30%] hidden h-16 w-16 border border-electric/20 bg-electric/[0.03] lg:block"
          style={{
            transformStyle: "preserve-3d",
            perspective: "800px",
          }}
        />

        {/* FLOATING CODE */}

        <div className="floating-code absolute left-[5%] top-[30%] hidden rounded-xl border border-electric/10 bg-electric/[0.025] px-5 py-4 font-mono text-xs text-electric/30 backdrop-blur-xl lg:block">
          {"<Code />"}
        </div>

        {/* FLOATING MONITOR */}

        <div className="floating-monitor absolute bottom-[18%] right-[7%] hidden rounded-xl border border-blue-400/10 bg-blue-500/[0.025] p-4 lg:block">
          <Monitor size={35} className="text-blue-400/20" />
        </div>

        <div className="absolute left-[8%] top-[55%] hidden h-20 w-20 rotate-45 rounded-2xl border border-blue-500/10 bg-blue-500/[0.02] lg:block" />
      </div>

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-32 lg:px-10 lg:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          {/* LEFT */}

          <div>
            <div className="resume-label flex items-center gap-3">
              <span className="h-px w-12 bg-electric shadow-[0_0_12px_rgba(0,255,255,.8)]" />

              <p className="font-mono text-xs tracking-[0.3em] text-electricGlow">
                RESUME / JOURNEY
              </p>
            </div>

            <h1
              className="resume-title mt-6 max-w-5xl font-display text-5xl font-bold leading-[0.9] tracking-[-0.05em] text-white sm:text-7xl lg:text-[7rem]"
              style={{
                perspective: "1200px",
              }}
            >
              My Journey

              <span className="block text-electricGlow drop-shadow-[0_0_30px_rgba(0,255,255,.25)]">
                So Far.
              </span>
            </h1>

            <p className="resume-subtitle mt-8 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              A continuous journey of learning, building and
              turning ideas into real digital experiences.
            </p>

            <div className="resume-download mt-9">
              <MagneticButton
                as="a"
                href={cv}
                download="Fahad-Ahmad-CV.pdf"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-electric px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 hover:scale-105"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

                <span className="relative">
                  Download CV
                </span>

                <Download
                  size={17}
                  className="relative transition-transform duration-500 group-hover:-translate-y-1"
                />
              </MagneticButton>
            </div>

            {/* MINI STATS */}

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["01", "Developer"],
                ["02", "Full Stack"],
                ["03", "Builder"],
              ].map(([number, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl"
                >
                  <p className="font-mono text-[10px] text-electricGlow">
                    {number}
                  </p>

                  <p className="mt-2 text-xs text-white/60">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              DEVELOPER 3D SHOWCASE
          ================================================= */}

          <div
            className="developer-showcase relative mx-auto w-full max-w-[560px]"
            style={{
              perspective: "1400px",
            }}
          >
            <div
              ref={developerCard}
              onMouseMove={handleDeveloperMove}
              onMouseLeave={handleDeveloperLeave}
              className="relative aspect-square overflow-hidden rounded-[3rem] border border-electric/20 bg-gradient-to-br from-blue-500/[0.08] via-panel/40 to-purple-500/[0.05] shadow-[0_0_80px_rgba(0,200,255,.08)] backdrop-blur-xl"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* GLOW */}

              <div className="developer-glow pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 blur-[90px]" />

              {/* GRID */}

              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              {/* IMAGE - FIXED */}

              <img
                src={boy}
                alt="3D developer working on laptop"
                className="developer-image absolute bottom-[-2%] left-1/2 z-20 h-[95%] w-[95%] -translate-x-1/2 object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,.5)]"
                draggable="false"
              />

              {/* TOP LABEL */}

              <div className="absolute left-6 top-6 z-30 flex items-center gap-2 rounded-full border border-electric/20 bg-black/30 px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-electric shadow-[0_0_12px_rgba(0,255,255,1)]" />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electricGlow">
                  Developer Mode
                </span>
              </div>

              {/* CODE WINDOW */}

              <div
                className="absolute right-5 top-20 z-30 hidden w-40 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl sm:block"
                style={{
                  transform:
                    "translateZ(80px) rotateY(-8deg)",
                }}
              >
                <div className="mb-3 flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/50" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                  <span className="h-2 w-2 rounded-full bg-green-400/50" />
                </div>

                <div className="space-y-1.5 font-mono text-[8px]">
                  <p className="text-blue-300/70">
                    const developer
                  </p>

                  <p className="text-electric/70">
                    {" "}
                    = "Fahad";
                  </p>

                  <p className="text-purple-300/70">
                    build();
                  </p>

                  <p className="text-white/30">
                    {"// keep learning"}
                  </p>
                </div>
              </div>

              {/* FLOATING ICON */}

              <div
                className="absolute bottom-12 left-6 z-30 rounded-2xl border border-electric/20 bg-black/30 p-3 backdrop-blur-xl"
                style={{
                  transform:
                    "translateZ(90px) rotateY(10deg)",
                }}
              >
                <Braces
                  size={24}
                  className="text-electric"
                />
              </div>

              <div
                className="absolute bottom-8 right-7 z-30 rounded-2xl border border-blue-400/20 bg-black/30 p-3 backdrop-blur-xl"
                style={{
                  transform:
                    "translateZ(100px) rotateY(-10deg)",
                }}
              >
                <Cpu
                  size={25}
                  className="text-blue-400"
                />
              </div>

              {/* BORDER */}

              <div className="pointer-events-none absolute inset-0 rounded-[3rem] border border-white/5" />
            </div>

            {/* SHADOW */}

            <div className="absolute -bottom-8 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-electric/10 blur-3xl" />
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-gradient-to-r from-electric/50 via-white/10 to-transparent" />
      </section>

      {/* ===================================================
          EDUCATION
      =================================================== */}

      <section className="scroll-reveal mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className="education-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel/40 p-8 backdrop-blur-xl sm:p-10"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-electric/10 blur-[90px] transition-transform duration-1000 group-hover:scale-150" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-electric/[0.04] via-transparent to-blue-500/[0.03]" />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-electric/30 bg-electric/10 text-electricGlow shadow-glowSm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
              <GraduationCap size={35} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-electricGlow">
                  Education
                </p>

                <span className="rounded-full border border-electric/20 bg-electric/5 px-3 py-1 font-mono text-[10px] text-electricGlow">
                  CURRENT
                </span>
              </div>

              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                BS Computer Science
              </h2>

              <p className="mt-2 text-sm text-mist sm:text-base">
                University of Veterinary & Animal Sciences
              </p>

              <p className="mt-2 font-mono text-xs text-white/30">
                Computer Science • Undergraduate
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-px w-0 bg-electric shadow-[0_0_20px_rgba(0,255,255,1)] transition-all duration-1000 group-hover:w-full" />
        </div>
      </section>

      {/* ===================================================
          SKILLS
      =================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="scroll-reveal">
          <p className="font-mono text-xs tracking-[0.3em] text-electricGlow">
            TECHNICAL SKILLS
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Tools I Work With.
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/40">
              A growing toolkit covering frontend, backend,
              databases, mobile development and developer tools.
            </p>
          </div>
        </div>

        <div
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            perspective: "1500px",
          }}
        >
          {SKILL_GROUPS.map((group, index) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="resume-skill-card group relative min-h-[250px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-panel/40 p-7 backdrop-blur-xl transition-colors duration-500 hover:border-electric/40"
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-electric/10 opacity-0 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-500 group-hover:border-electric/30 group-hover:bg-electric/10">
                    <Icon
                      size={22}
                      className="text-electric transition-all duration-500 group-hover:rotate-12 group-hover:scale-125"
                    />
                  </div>

                  <span className="font-mono text-5xl font-bold text-white/[0.035]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="relative mt-8 font-display text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-electric/30 hover:bg-electric/10 hover:text-electricGlow"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-electric shadow-[0_0_15px_rgba(0,255,255,1)] transition-all duration-700 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================
          JOURNEY
      =================================================== */}

      <section className="mx-auto max-w-6xl px-6 pb-32 lg:px-10">
        <div className="scroll-reveal text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-electricGlow">
            DEVELOPER JOURNEY
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl">
            From Learning
            <span className="mx-2 text-electricGlow">
              →
            </span>
            Building.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/40">
            Every project, technology and challenge has been
            another step forward.
          </p>
        </div>

        <div
          className="timeline-wrap relative mt-24"
          style={{
            perspective: "1500px",
          }}
        >
          <div className="absolute left-[18px] top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-gradient-to-b from-electric via-blue-400 to-purple-500 shadow-[0_0_18px_rgba(0,255,255,.6)]"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {MILESTONES.map((milestone, index) => {
              const Icon = milestone.icon;
              const left = index % 2 === 0;

              return (
                <div
                  key={milestone.title}
                  className={`timeline-item relative pl-14 md:flex md:w-full md:items-center ${left
                      ? "md:justify-start"
                      : "md:justify-end"
                    }`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="timeline-dot absolute left-[11px] top-7 z-20 flex h-4 w-4 items-center justify-center rounded-full border-2 border-electric bg-ink shadow-[0_0_25px_rgba(0,255,255,.9)] md:left-1/2 md:-translate-x-1/2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric" />
                  </div>

                  <div
                    className={`group relative w-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-panel/40 p-7 backdrop-blur-xl transition-all duration-500 hover:border-electric/40 md:w-[44%] ${left
                        ? "md:mr-auto"
                        : "md:ml-auto"
                      }`}
                  >
                    <div className="absolute right-6 top-3 font-mono text-6xl font-bold text-white/[0.025] transition-transform duration-700 group-hover:scale-110">
                      {milestone.year}
                    </div>

                    <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-electric/10 opacity-0 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

                    <div className="relative flex items-start gap-4">
                      <div className="shrink-0 rounded-xl border border-electric/20 bg-electric/10 p-3 text-electric transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-electricGlow">
                          STEP {milestone.year}
                        </p>

                        <h3 className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                          {milestone.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-white/40">
                          {milestone.desc}
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-px w-0 bg-electric shadow-[0_0_15px_rgba(0,255,255,1)] transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          CTA
      =================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-36 lg:px-10">
        <div className="resume-cta relative overflow-hidden rounded-[2.5rem] border border-electric/15 bg-panel/40 px-7 py-20 text-center backdrop-blur-xl sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.06] blur-[120px]" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <Cpu className="pointer-events-none absolute left-[8%] top-[20%] hidden h-16 w-16 text-electric/10 lg:block" />

          <Zap className="pointer-events-none absolute bottom-[15%] right-[10%] hidden h-14 w-14 text-blue-400/10 lg:block" />

          <div className="relative z-10">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-2">
              <CircleDot
                size={13}
                className="animate-pulse text-electric"
              />

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-electricGlow">
                Always Learning
              </span>
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The journey is
              <span className="text-electricGlow">
                {" "}just beginning.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/40 sm:text-base">
              I'm always exploring new technologies, building
              better projects and looking for opportunities to
              turn ideas into meaningful products.
            </p>

            <div className="mt-10 flex justify-center">
              <MagneticButton
                as="a"
                href="/Fahad-Ahmad-CV.pdf"
                download
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-electric px-9 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 hover:scale-110"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

                <span className="relative">
                  Get My CV
                </span>

                <ArrowUpRight
                  size={17}
                  className="relative transition-transform duration-500 group-hover:rotate-45"
                />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}