import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Layers3,
  MousePointer2,
  FolderGit2,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Smartphone,
  CheckCircle2,
  Boxes,
} from "lucide-react";

import ProjectCard from "../components/ProjectCard";
import redstore from "../assets/projects/redstore.png";
import barber from "../assets/projects/barber.png";
import agency from "../assets/projects/agency.png";
import tomato from "../assets/projects/tomato.png";
import quick from "../assets/projects/quickstay.png";
import uvas from "../assets/projects/uvas.png";
import pak from "../assets/projects/pak.png";
import pak1 from "../assets/projects/pak1.png";
import cp from "../assets/projects/c.png";
import app from "../assets/projects/app.jpeg";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PROJECT DATA
========================================================= */

const PROJECTS = [
  {
    title: "PakCartify-Frontend",
    category: "Full Stack",
    description:
      "A modern full-stack e-commerce application designed to provide a complete online shopping experience — product management, shopping cart, favorites, orders, authentication and an admin dashboard, all wired to a REST API backend.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Authentication",
      "REST APIs",
      "Responsive UI",
      "Cloudinary",
    ],
    github: "https://github.com/FahadAhmad06/PakCartifyFrontend",
    featured: true,
    image: pak,
  },
  {
    title: "PakCartify-Backend",
    category: "Full Stack",
    description:
      "A modern full-stack e-commerce application designed to provide a complete online shopping experience — product management, shopping cart, favorites, orders, authentication and an admin dashboard, all wired to a REST API backend.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Authentication",
      "REST APIs",
      "Responsive UI",
      "Cloudinary",
    ],
    github: "https://github.com/FahadAhmad06/PakCartifyBackend",
    featured: true,
    image: pak1,
  },
  {
    title: "Red Store",
    category: "Frontend",
    description:
      "A responsive online store built with HTML and CSS, featuring a clean e-commerce interface, product showcase, modern layouts, and a user-friendly shopping experience.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/FahadAhmad06/RedStore",
    demo: "https://redstore006.netlify.app/",
    image: redstore,
  },
  {
    title: "Agency Ai",
    category: "Frontend",
    description:
      "AgencyAI is a modern one-page agency website built with HTML, CSS, and JavaScript, featuring a responsive design, smooth animations, and interactive sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/FahadAhmad06/AgencyAi",
    demo: "https://agencyai06.netlify.app/",
    image: agency,
  },
  {
    title: "DevNotes API",
    category: "Frontend",
    description:
      "Barber Website is a modern one-page barber shop website built with HTML and CSS, featuring a clean responsive design, service showcase, pricing, and a stylish professional layout.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/FahadAhmad06/Barber-shop",
    demo: "https://barber061.netlify.app/",
    image: barber,
  },
  {
    title: "Tomato.",
    category: "Frontend",
    description:
      "Tomato is a modern online food ordering website built for browsing meals, exploring menus, and ordering food through a clean and responsive interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/FahadAhmad06/Barber-shop",
    demo: "https://tomato06.vercel.app/",
    image: tomato,
  },
  {
    title: "Quick Stay",
    category: "Frontend",
    description:
      "QuickStay is a modern online hotel booking website designed to help users explore hotels, view available rooms, and make bookings through a clean and responsive interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/FahadAhmad06/Quick-Stay06",
    demo: "https://quickstay06.vercel.app/",
    image: quick,
  },
  {
    title: "UVAS GPA Calculator",
    category: "Frontend",
    description:
      "UVAS GPA Calculator is a simple web-based GPA calculator built with HTML, CSS, and JavaScript, allowing students to calculate their GPA quickly and easily.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/FahadAhmad06/GPA-Calculator",
    demo: "https://gpacal06.netlify.app/",
    image: uvas,
  },
  {
    title: "PakCartuify-App-Flutter",
    category: "Mobile",
    description:
      "PakCartuify-App-Flutter is a modern mobile application built with Flutter, designed for seamless shopping experiences and efficient product management.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/FahadAhmad06/PakCartifyApp",
    image: app,
  },
  {
    title: "Student Record Management System",
    category: "Systems / C++",
    description:
      "Student Record Management System is a C++ console-based application for managing student records, including adding, updating, searching, and displaying student information.",
    tech: ["C++"],
    github: "https://github.com/FahadAhmad06/Student-Record-Management-System",
    image: cp,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const spotlightRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeFilter));

  /* =========================================================
      CANVAS DYNAMIC PARTICLES SYSTEM
  ========================================================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const numParticles = Math.min(Math.floor(width / 20), 75);
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0, 255, 255, 0.8)";
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  /* =======================================================
      GSAP ADVANCED TIMELINES
  ======================================================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ delay: 0.1 });

      intro
        .fromTo(
          ".projects-label",
          { opacity: 0, y: 25, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }
        )
        .fromTo(
          ".projects-title",
          { opacity: 0, y: 70, scale: 0.92, rotateX: 20, filter: "blur(16px)" },
          { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)", duration: 1, ease: "power4.out" },
          "-=0.35"
        )
        .fromTo(
          ".hero-metrics-grid",
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".projects-description",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.55"
        )
        .fromTo(
          ".projects-scroll",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.35"
        );

      // FLOATING BADGES IN HERO
      gsap.to(".hero-float-badge-1", { y: -18, rotate: 6, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-float-badge-2", { y: 15, rotate: -6, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-float-badge-3", { y: -12, rotate: 4, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut" });

      // PROJECT CARDS REVEAL
      gsap.utils.toArray(".project-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 120, scale: 0.85, rotateX: 25, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.1,
            delay: (i % 2) * 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // CODE TERMINAL SECTION REVEAL
      gsap.fromTo(
        ".terminal-section",
        { opacity: 0, y: 90, scale: 0.92, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: { trigger: ".terminal-section", start: "top 85%" },
        }
      );

      // SCROLL PROGRESS BAR
      gsap.to(".projects-progress-bar", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [activeFilter]);

  /* =======================================================
      MOUSE SPOTLIGHT
  ======================================================= */
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return;
      gsap.to(spotlightRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* =======================================================
      3D CARD TILT EFFECT
  ======================================================= */
  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, { rotateX, rotateY, scale: 1.03, duration: 0.35, ease: "power2.out" });

    const glow = card.querySelector(".card-mouse-glow");
    if (glow) {
      gsap.to(glow, { x: x - rect.width / 2, y: y - rect.height / 2, opacity: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleCardLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.65, ease: "elastic.out(1, 0.4)" });

    const glow = card.querySelector(".card-mouse-glow");
    if (glow) {
      gsap.to(glow, { opacity: 0, duration: 0.4 });
    }
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-ink text-white selection:bg-electric selection:text-black"
    >
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed left-0 top-0 z-[200] h-[3px] w-full bg-white/[0.03]">
        <div
          className="projects-progress-bar h-full bg-gradient-to-r from-electric via-cyan-300 to-purple-500 shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          style={{ width: "0%" }}
        />
      </div>

      {/* DYNAMIC CANVAS BACKGROUND */}
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 opacity-60" />

      {/* MOUSE SPOTLIGHT */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.035] blur-[100px] lg:block"
      />

      {/* MAIN CONTENT */}
      <main className="relative z-10 mx-auto max-w-[1700px] px-6 pb-28 pt-32 sm:px-10 lg:px-16 xl:px-24">
        {/* =========================================================
            1. EXTENDED HERO SECTION WITH FLOATING BADGES & METRICS
        ========================================================= */}
        <section className="relative min-h-[60vh] pb-12">
          {/* FLOATING TECH BADGES */}
          <div className="hero-float-badge-1 absolute right-[5%] top-[8%] hidden rounded-2xl border border-electric/30 bg-black/60 px-4 py-2.5 backdrop-blur-xl lg:flex items-center gap-3 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
            <Globe size={18} className="text-electric" />
            <span className="font-mono text-xs font-semibold text-white">Full-Stack MERN</span>
          </div>

          <div className="hero-float-badge-2 absolute right-[22%] top-[45%] hidden rounded-2xl border border-purple-400/30 bg-black/60 px-4 py-2.5 backdrop-blur-xl lg:flex items-center gap-3 shadow-[0_0_25px_rgba(168,85,247,0.15)]">
            <Smartphone size={18} className="text-purple-400" />
            <span className="font-mono text-xs font-semibold text-white">Flutter & Dart</span>
          </div>

          <div className="hero-float-badge-3 absolute right-[10%] bottom-[12%] hidden rounded-2xl border border-cyan-400/30 bg-black/60 px-4 py-2.5 backdrop-blur-xl lg:flex items-center gap-3 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
            <Cpu size={18} className="text-cyan-300" />
            <span className="font-mono text-xs font-semibold text-white">C++ Systems</span>
          </div>

          {/* LABEL BADGE */}
          <div className="projects-label mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-electric via-cyan-300 to-transparent shadow-[0_0_15px_rgba(0,255,255,.8)]" />
            <p className="font-mono text-xs tracking-[0.3em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-semibold sm:text-sm">
              ENGINEERING & PORTFOLIO
            </p>
          </div>

          {/* MAIN TITLE */}
          <h1 className="projects-title max-w-5xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
            Things I've{" "}
            <span className="relative inline-block bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,255,255,.35)]">
              Built.
              <span className="absolute -bottom-3 left-0 h-1.5 w-full rounded-full bg-electric/40 blur-md" />
            </span>
          </h1>

          <p className="projects-description mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            A comprehensive showcase of Web Applications, Mobile Platforms, RESTful Services, and native software engineered with precision.
          </p>

          {/* HERO METRICS CARDS */}
          <div className="hero-metrics-grid mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-3xl">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
              <p className="font-mono text-2xl font-bold bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent">
                {PROJECTS.length}+
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Projects Built</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
              <p className="font-mono text-2xl font-bold text-purple-300">100%</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Responsive UI</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
              <p className="font-mono text-2xl font-bold text-cyan-300">03+</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Platforms</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
              <p className="font-mono text-2xl font-bold text-emerald-300">Active</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Open Source</p>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. PROJECT FILTER TABS & SHOWCASE GRID
        ========================================================= */}
        <section className="relative mt-12">
          {/* FILTER CONTROLS */}
          <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              {["All", "Full Stack", "Frontend", "Mobile", "Systems"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`rounded-full px-5 py-2 font-mono text-xs transition-all duration-300 cursor-pointer ${
                    activeFilter === tab
                      ? "border border-electric bg-electric/15 text-electric shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                      : "border border-white/10 bg-white/[0.02] text-white/50 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <span className="font-mono text-xs text-white/40">
              Showing {filteredProjects.length} of {PROJECTS.length} Works
            </span>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2" style={{ perspective: "1600px" }}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`project-item group relative ${project.featured ? "md:col-span-2" : ""}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* NUMBER WATERMARK */}
                <div className="project-number pointer-events-none absolute -left-4 -top-8 z-20 hidden font-display text-7xl font-extrabold text-white/[0.035] group-hover:text-electric/[0.1] md:block">
                  0{index + 1}
                </div>

                {/* 3D TILT CONTAINER */}
                <div
                  className="relative transition-all duration-500 [transform-style:preserve-3d]"
                  onMouseMove={handleCardMove}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="card-mouse-glow pointer-events-none absolute left-1/2 top-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.12] opacity-0 blur-[90px]" />

                  {/* MAIN CARD CONTAINER */}
                  <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-panel/50 p-1 backdrop-blur-2xl transition-all duration-500 group-hover:border-electric/30 shadow-xl">
                    <div className="relative overflow-hidden rounded-[2rem] bg-black/30">
                      
                      {/* CARD TOP DECORATION */}
                      <div className="pointer-events-none absolute left-7 right-7 top-5 z-30 flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-electric shadow-[0_0_12px_rgba(0,255,255,1)]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                        </div>

                        {project.featured && (
                          <span className="flex items-center gap-2 rounded-full border border-electric/40 bg-electric/[0.1] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-bold backdrop-blur-xl">
                            <Sparkles size={12} className="text-electric animate-spin" /> Featured
                          </span>
                        )}
                      </div>

                      {/* PROJECT CARD COMPONENT */}
                      <div className={`relative z-20 ${project.image ? "pt-6" : "pt-7"}`}>
                        <ProjectCard {...project} />
                      </div>
                    </div>
                  </div>

                  {/* FLOATING ARROW */}
                  <div className="pointer-events-none absolute -right-3 -top-3 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/80 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:opacity-100">
                    <ArrowUpRight size={18} className="text-electric" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            3. NEW AFTER-PROJECTS SECTION: INTERACTIVE CODE TERMINAL
        ========================================================= */}
        <section className="terminal-section mt-32">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-panel/40 p-8 backdrop-blur-2xl lg:p-12 shadow-2xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              
              {/* TERMINAL HEADER & INFO */}
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <Terminal size={22} className="text-electric" />
                  <span className="font-mono text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-bold">
                    WORKFLOW & ARCHITECTURE
                  </span>
                </div>

                <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                  Engineered with{" "}
                  <span className="bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                    Clean Architecture.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
                  Every project is crafted using modular components, RESTful standards, responsive design principles, and optimized database schemas.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                    <CheckCircle2 size={16} className="text-electric" /> REST API Standards
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                    <CheckCircle2 size={16} className="text-purple-400" /> State Management
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                    <CheckCircle2 size={16} className="text-cyan-300" /> Database Normalization
                  </div>
                </div>
              </div>

              {/* TERMINAL MOCKUP WINDOW */}
              <div className="w-full lg:w-[480px]">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/80 font-mono text-xs shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] text-white/30">developer-environment.js</span>
                  </div>

                  <div className="p-5 space-y-3 text-white/70">
                    <p className="text-purple-400">
                      <span className="text-electric">const</span> developer = {"{"}
                    </p>
                    <p className="pl-4 text-cyan-300">
                      name: <span className="text-amber-300">'Fahad Ahmad'</span>,
                    </p>
                    <p className="pl-4 text-cyan-300">
                      stack: [<span className="text-amber-300">'MERN'</span>, <span className="text-amber-300">'Flutter'</span>, <span className="text-amber-300">'C++'</span>],
                    </p>
                    <p className="pl-4 text-cyan-300">
                      status: <span className="text-emerald-400">'Building Next-Gen Apps'</span>
                    </p>
                    <p className="text-purple-400">{"};"}</p>
                    <div className="pt-2 flex items-center gap-2 text-electric animate-pulse">
                      <span>$</span>
                      <span>npm run deploy:future</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            4. BOTTOM CTA
        ========================================================= */}
        <section className="projects-cta relative mt-32 overflow-hidden rounded-[2.5rem] border border-electric/20 bg-panel/40 px-7 py-16 text-center backdrop-blur-xl sm:px-12 shadow-2xl">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.06] blur-[100px]" />

          <div className="relative z-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-bold">
              MORE TO COME
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Always building.{" "}
              <span className="bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                Always learning.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/50">
              These projects represent my journey so far. More experiments, applications and ideas are constantly in progress.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-3 rounded-full border border-electric/30 bg-electric/[0.05] px-6 py-2.5 backdrop-blur-xl">
                <FolderGit2 size={16} className="text-electric" />
                <span className="font-mono text-xs bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent font-semibold">
                  Continuously Shipping Code
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}