import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Atom,
  Braces,
  Database,
  GitBranch,
  Github as GithubIcon,
  Layers,
  Server,
  Smartphone,
  SquareCode,
  Zap,
  FileCode2,
  Table2,
  Code2,
  Sparkles,
  Cpu,
  Flame
} from "lucide-react";


import SkillCard from "../components/SkillCard";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   SKILL GROUPS
========================================================= */

const GROUPS = [
  {
    title: "Frontend",
    subtitle: "Interfaces & Experiences",
    number: "01",
    icon: Code2,
    skills: [
      {
        icon: Atom,
        name: "React.js",
        desc: "Component-driven interfaces and SPAs",
      },
      {
        icon: Braces,
        name: "JavaScript",
        desc: "Modern ES6+ for the web",
      },
      {
        icon: SquareCode,
        name: "HTML",
        desc: "Semantic, accessible markup",
      },
      {
        icon: FileCode2,
        name: "CSS",
        desc: "Layout, animation & responsive design",
      },
      {
        icon: Zap,
        name: "Tailwind CSS",
        desc: "Utility-first styling at speed",
      },

    ],
  },

  {
    title: "Backend",
    subtitle: "Logic & APIs",
    number: "02",
    icon: Server,
    skills: [
      {
        icon: Server,
        name: "Node.js",
        desc: "Scalable JS runtime for servers",
      },
      {
        icon: Layers,
        name: "Express.js",
        desc: "REST APIs and middleware",
      },
    ],
  },

  {
    title: "Databases",
    subtitle: "Data & Architecture",
    number: "03",
    icon: Database,
    skills: [
      {
        icon: Database,
        name: "MongoDB",
        desc: "Flexible NoSQL data modeling",
      },
      {
        icon: Table2,
        name: "SQL",
        desc: "Relational schemas & queries",
      },
      {
        icon: Database,
        name: "MSSQL",
        desc: "Microsoft SQL Server",
      },
    ],
  },

  {
    title: "Mobile",
    subtitle: "Cross Platform",
    number: "04",
    icon: Smartphone,
    skills: [
      {
        icon: Smartphone,
        name: "Flutter",
        desc: "Cross-platform mobile applications",
      },
      {
        icon: Code2,
        name: "Dart",
        desc: "Modern language for Flutter development",
      },
      {
        icon: Smartphone,
        name: "Flutter",
        desc: "Cross-platform mobile app development",
      },
      {
        icon: Flame,
        name: "Firebase",
        desc: "Backend services, authentication & database",
      },
    ],
  },

  {
    title: "Tools",
    subtitle: "Development Workflow",
    number: "05",
    icon: Cpu,
    skills: [
      {
        icon: GitBranch,
        name: "Git",
        desc: "Version control workflows",
      },
      {
        icon: GithubIcon,
        name: "GitHub",
        desc: "Collaboration & CI",
      },
      {
        icon: Zap,
        name: "Vite",
        desc: "Fast dev tooling & builds",
      },
      {
        icon: Smartphone,
        name: "Android Studio",
        desc: "Android development & app testing",
      },
      {
        icon: Code2,
        name: "VS Code",
        desc: "Fast code editing & development",
      },
    ],
  },
];

/* =========================================================
   FLOATING PARTICLES
========================================================= */

const PARTICLES = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() > 0.8 ? 4 : 2,
  delay: Math.random() * 3,
}));

/* =========================================================
   SKILLS PAGE
========================================================= */

export default function Skills() {
  const ref = useRef(null);
  const spotlightRef = useRef(null);

  /* =======================================================
     MAIN GSAP
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ===================================================
         PAGE INTRO
      =================================================== */

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .fromTo(
          ".skills-eyebrow",
          {
            opacity: 0,
            y: 30,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
          }
        )
        .fromTo(
          ".skills-title",
          {
            opacity: 0,
            y: 70,
            scale: 0.92,
            filter: "blur(18px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
          },
          "-=0.4"
        )
        .fromTo(
          ".skills-description",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.6"
        )
        .fromTo(
          ".skills-orbit",
          {
            opacity: 0,
            scale: 0.5,
            rotate: -30,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1.3,
            ease: "elastic.out(1,0.6)",
          },
          "-=0.8"
        );

      /* ===================================================
         BACKGROUND GLOWS
      =================================================== */

      gsap.to(".skills-glow-one", {
        x: 140,
        y: 100,
        scale: 1.2,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".skills-glow-two", {
        x: -120,
        y: -80,
        scale: 1.25,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".skills-glow-three", {
        x: 80,
        y: -100,
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ===================================================
         FLOATING PARTICLES
      =================================================== */

      gsap.utils
        .toArray(".skills-particle")
        .forEach((particle, index) => {
          gsap.to(particle, {
            x: index % 2 === 0 ? 35 : -35,
            y: index % 3 === 0 ? -40 : 40,
            opacity: index % 2 === 0 ? 0.2 : 0.65,
            duration: 2.5 + (index % 5) * 0.5,
            delay: index * 0.06,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      /* ===================================================
         ORBIT
      =================================================== */

      gsap.to(".skills-orbit-ring-one", {
        rotate: 360,
        duration: 16,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".skills-orbit-ring-two", {
        rotate: -360,
        duration: 23,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".skills-orbit-ring-three", {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".skills-orbit-dot-one", {
        rotate: 360,
        duration: 7,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".skills-orbit-dot-two", {
        rotate: -360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      /* ===================================================
         CENTER CORE
      =================================================== */

      gsap.to(".skills-core", {
        scale: 1.12,
        opacity: 0.85,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ===================================================
         GROUP REVEAL
      =================================================== */

      gsap.utils.toArray(".skill-group").forEach((group, index) => {
        gsap.fromTo(
          group,
          {
            opacity: 0,
            y: 100,
            rotateX: 15,
            scale: 0.94,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.05,
            ease: "power4.out",
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* ===================================================
         SKILL CARDS
      =================================================== */

      gsap.utils.toArray(".skill-card-wrapper").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.92,
            rotateX: 12,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.75,
            delay: (index % 5) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* ===================================================
         SECTION LINES
      =================================================== */

      gsap.utils.toArray(".skill-line").forEach((line) => {
        gsap.fromTo(
          line,
          {
            scaleX: 0,
            transformOrigin: "left",
          },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
            },
          }
        );
      });

      /* ===================================================
         PARALLAX BACKGROUND
      =================================================== */

      gsap.to(".skills-background-grid", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  /* =======================================================
     MOUSE SPOTLIGHT
  ======================================================= */

  useEffect(() => {
    const moveSpotlight = (e) => {
      if (!spotlightRef.current) return;

      gsap.to(spotlightRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.65,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveSpotlight);

    return () => {
      window.removeEventListener("mousemove", moveSpotlight);
    };
  }, []);

  /* =======================================================
     3D CARD TILT
  ======================================================= */

  const handleCardMove = (e) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.035,
      duration: 0.35,
      ease: "power2.out",
    });

    const glow = card.querySelector(".card-hover-glow");

    if (glow) {
      gsap.to(glow, {
        opacity: 1,
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.25,
        ease: "power2.out",
      });
    }

    const icon = card.querySelector(".skill-icon");

    if (icon) {
      gsap.to(icon, {
        rotateY: 180,
        scale: 1.12,
        duration: 0.45,
        ease: "power3.out",
      });
    }
  };

  const handleCardLeave = (e) => {
    const card = e.currentTarget;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1,0.5)",
    });

    const glow = card.querySelector(".card-hover-glow");

    if (glow) {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.4,
      });
    }

    const icon = card.querySelector(".skill-icon");

    if (icon) {
      gsap.to(icon, {
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-ink px-6 pb-28 pt-32 sm:px-10 lg:px-16 xl:px-24"
    >
      {/* ===================================================
          MOUSE SPOTLIGHT
      =================================================== */}

      <div
        ref={spotlightRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.035] blur-[100px] lg:block"
      />

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* GLOW ONE */}

        <div className="skills-glow-one absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-electric/10 blur-[140px]" />

        {/* GLOW TWO */}

        <div className="skills-glow-two absolute right-[-15%] top-[20%] h-[550px] w-[550px] rounded-full bg-purple-500/10 blur-[150px]" />

        {/* GLOW THREE */}

        <div className="skills-glow-three absolute bottom-[5%] left-[35%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* GRID */}

        <div
          className="skills-background-grid absolute inset-[-10%] opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* RADIAL */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 15%, rgba(0,255,255,0.07), transparent 35%)",
          }}
        />

        {/* PARTICLES */}

        {PARTICLES.map((particle) => (
          <span
            key={particle.id}
            className="skills-particle absolute rounded-full bg-electric"
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
      </div>

      {/* ===================================================
          HERO / HEADER
      =================================================== */}

      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row">
        {/* LEFT */}

        <div className="relative z-10 w-full lg:w-[60%]">
          <div className="skills-eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-electric" />

            <p className="font-mono text-xs tracking-[0.3em] text-electricGlow sm:text-sm">
              SKILLS & TECHNOLOGIES
            </p>
          </div>

          <h1 className="skills-title mt-5 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[88px]">
            My Tech
            <span className="text-electricGlow"> Stack.</span>
          </h1>

          <p className="skills-description mt-8 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg">
            Technologies and tools I use to transform ideas into modern,
            responsive and scalable digital experiences.
          </p>

          {/* MINI STATS */}

          <div className="mt-9 flex flex-wrap gap-3">
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 backdrop-blur-xl">
              <span className="font-mono text-xs text-white/50">
                14+ Technologies
              </span>
            </div>

            <div className="rounded-full border border-electric/20 bg-electric/[0.04] px-5 py-2.5 backdrop-blur-xl">
              <span className="font-mono text-xs text-electricGlow">
                Full-Stack
              </span>
            </div>

            <div className="rounded-full border border-purple-400/20 bg-purple-400/[0.04] px-5 py-2.5 backdrop-blur-xl">
              <span className="font-mono text-xs text-purple-300">
                Mobile + Web
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            3D ORBIT
        ================================================= */}

        <div className="skills-orbit relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          {/* BIG GLOW */}

          <div className="absolute inset-[-50px] rounded-full bg-electric/[0.08] blur-[80px]" />

          {/* CORE */}

          <div className="skills-core absolute h-32 w-32 rounded-full bg-electric/[0.07] blur-[45px]" />

          {/* RING ONE */}

          <div className="skills-orbit-ring-one absolute inset-5 rounded-full border border-electric/25 [transform:rotateX(65deg)_rotateY(15deg)]" />

          {/* RING TWO */}

          <div className="skills-orbit-ring-two absolute inset-[-5px] rounded-full border border-dashed border-purple-400/20 [transform:rotateY(65deg)_rotateX(20deg)]" />

          {/* RING THREE */}

          <div className="skills-orbit-ring-three absolute inset-[-30px] rounded-full border border-white/[0.05] [transform:rotateX(70deg)_rotateY(25deg)]" />

          {/* CENTER */}

          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-electric/30 bg-black/40 shadow-[0_0_80px_rgba(0,255,255,0.15)] backdrop-blur-xl">
            <Sparkles
              size={38}
              className="text-electric drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"
            />

            <div className="absolute inset-3 rounded-full border border-white/10" />
          </div>

          {/* ORBIT DOT */}

          <div className="skills-orbit-dot-one absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-electric shadow-[0_0_25px_rgba(0,255,255,1)]" />

          <div className="skills-orbit-dot-two absolute -left-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,1)]" />

          <div className="absolute left-1/2 top-[-12px] h-2.5 w-2.5 -translate-x-1/2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,1)]" />
        </div>
      </section>

      {/* ===================================================
          DIVIDER
      =================================================== */}

      <div className="skill-line mx-auto mt-24 h-px max-w-7xl bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      {/* ===================================================
          SKILL GROUPS
      =================================================== */}

      <section className="mx-auto mt-24 w-full max-w-7xl">
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-electricGlow">
            DEVELOPMENT TOOLKIT
          </p>

          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Technologies behind
            <span className="text-electricGlow"> my work.</span>
          </h2>
        </div>

        <div className="space-y-24">
          {GROUPS.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div
                key={group.title}
                className="skill-group"
                style={{
                  perspective: "1200px",
                }}
              >
                {/* GROUP HEADER */}

                <div className="mb-8 flex items-end justify-between gap-5">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/20 bg-electric/[0.05]">
                        <GroupIcon
                          size={18}
                          className="text-electric"
                        />
                      </div>

                      <span className="font-mono text-[10px] tracking-[0.3em] text-white/25">
                        {group.number}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {group.title}
                    </h2>

                    <p className="mt-1 font-mono text-xs text-white/30">
                      {group.subtitle}
                    </p>
                  </div>

                  <span className="hidden font-mono text-xs text-white/20 sm:block">
                    {String(group.skills.length).padStart(2, "0")} SKILLS
                  </span>
                </div>

                {/* CARDS */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-card-wrapper"
                      style={{
                        perspective: "1200px",
                      }}
                    >
                      <div
                        className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-panel/40 p-[1px] backdrop-blur-xl"
                        onMouseMove={handleCardMove}
                        onMouseLeave={handleCardLeave}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        {/* INNER CARD */}

                        <div className="relative h-full overflow-hidden rounded-[23px] bg-panel/70 p-6">
                          {/* HOVER GLOW */}

                          <div className="card-hover-glow pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 opacity-0 blur-[50px]" />

                          {/* TOP LINE */}

                          <div className="absolute left-0 top-0 h-px w-0 bg-electric shadow-[0_0_20px_rgba(0,255,255,1)] transition-all duration-700 group-hover:w-full" />

                          {/* ICON */}

                          <div className="relative z-10 flex items-start justify-between">
                            <div className="skill-icon flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-electric/30 group-hover:bg-electric/[0.07]">
                              <skill.icon
                                size={25}
                                className="text-electric transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
                              />
                            </div>

                            <span className="font-mono text-[10px] text-white/20 transition-colors group-hover:text-electric/60">
                              DEV
                            </span>
                          </div>

                          {/* CONTENT */}

                          <div className="relative z-10 mt-8">
                            <h3 className="font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-electricGlow">
                              {skill.name}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-white/35">
                              {skill.desc}
                            </p>
                          </div>

                          {/* BOTTOM ARROW */}

                          <div className="relative z-10 mt-7 flex items-center justify-between">
                            <span className="h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-electric" />

                            <span className="font-mono text-[10px] text-white/20 transition-colors group-hover:text-electric/60">
                              0{group.skills.indexOf(skill) + 1}
                            </span>
                          </div>

                          {/* CORNER GLOW */}

                          <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-electric/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================
          BOTTOM CTA
      =================================================== */}

      <section className="mx-auto mt-32 max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-electric/15 bg-panel/40 px-7 py-16 text-center backdrop-blur-xl sm:px-12">
          {/* GLOW */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.05] blur-[100px]" />

          {/* GRID */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="relative z-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-electricGlow">
              ALWAYS LEARNING
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              The stack keeps
              <span className="text-electricGlow"> evolving.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/35 sm:text-base">
              I continuously explore new technologies, tools and better ways
              to build digital experiences.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-3 rounded-full border border-electric/20 bg-electric/[0.04] px-6 py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-70" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-electric" />
                </span>

                <span className="font-mono text-xs text-electricGlow">
                  Learning • Building • Improving
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}