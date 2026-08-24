import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Layers3,
  MousePointer2,
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
import app from "../assets/projects/app.png";



gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PROJECT DATA
========================================================= */

const PROJECTS = [
  {
    title: "PakCartify-Frontend",
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
    description:
      "A responsive online store built with HTML and CSS, featuring a clean e-commerce interface, product showcase, modern layouts, and a user-friendly shopping experience.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/FahadAhmad06/RedStore",
    demo: "https://redstore006.netlify.app/",
    image: redstore,
  },
  {
    title: "Agency Ai",
    description:
      "AgencyAI is a modern one-page agency website built with HTML, CSS, and JavaScript, featuring a responsive design, smooth animations, and interactive sections.",
    tech: ["HML", "CSS","JavaScript"],
    github: "https://github.com/FahadAhmad06/AgencyAi",
    demo: "https://agencyai06.netlify.app/",
    image: agency,
  },
  {
    title: "DevNotes API",
    description:
      "Barber Website is a modern one-page barber shop website built with **HTML and CSS**, featuring a clean responsive design, service showcase, pricing, and a stylish professional layout.",
    tech: ["HTML","CSS"],
    github: "https://github.com/FahadAhmad06/Barber-shop",
    demo: "https://barber061.netlify.app/",
    image: barber,
  },
  {
    title: "Tomato.",
    description:
      "Tomato is a modern online food ordering website built for browsing meals, exploring menus, and ordering food through a clean and responsive interface.",
    tech: ["HTML","CSS","JavaScript"],
    github: "https://github.com/FahadAhmad06/Barber-shop",
    demo: "https://tomato06.vercel.app/",
    image: tomato,
  },
  {
    title: "Quick Stay",
    description:
      "QuickStay is a modern online hotel booking website designed to help users explore hotels, view available rooms, and make bookings through a clean and responsive interface.",
    tech: ["HTML","CSS","JavaScript"],
    github: "https://github.com/FahadAhmad06/Quick-Stay06",
    demo: "https://quickstay06.vercel.app/",
    image: quick,
  },
  {
    title: "UVAS GPA Calculator",
    description:
      "UVAS GPA Calculator is a simple web-based GPA calculator built with HTML, CSS, and JavaScript, allowing students to calculate their GPA quickly and easily.",
    tech: ["HTML","CSS","JavaScript"],
    github: "https://github.com/FahadAhmad06/GPA-Calculator",
    demo: "https://gpacal06.netlify.app/",
    image: uvas,
  },
  {
    title: "PakCartuify-App-Flutter",
    description:
      "PakCartuify-App-Flutter is a modern mobile application built with Flutter, designed for seamless shopping experiences and efficient product management.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/FahadAhmad06/PakCartifyApp",
    image: app,
  },
  {
    title: "Student Record Management System",
    description:
      "Student Record Management System is a C++ console-based application for managing student records, including adding, updating, searching, and displaying student information.",
    tech: ["C++"],
    github: "https://github.com/FahadAhmad06/Student-Record-Management-System",
    image: cp,
  },
];

/* =========================================================
   PROJECTS PAGE
========================================================= */

export default function Projects() {
  const ref = useRef(null);
  const spotlightRef = useRef(null);

  /* =======================================================
     GSAP ANIMATIONS
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ===================================================
         PAGE INTRO
      =================================================== */

      const intro = gsap.timeline({
        delay: 0.1,
      });

      intro
        .fromTo(
          ".projects-label",
          {
            opacity: 0,
            y: 25,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".projects-title",
          {
            opacity: 0,
            y: 70,
            scale: 0.92,
            rotateX: 20,
            filter: "blur(16px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .fromTo(
          ".projects-description",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .fromTo(
          ".projects-scroll",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35"
        );

      /* ===================================================
         BACKGROUND ORBS
      =================================================== */

      gsap.to(".projects-orb-one", {
        x: 180,
        y: 80,
        scale: 1.25,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".projects-orb-two", {
        x: -150,
        y: 100,
        scale: 1.2,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".projects-orb-three", {
        x: 100,
        y: -120,
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ===================================================
         FLOATING DECORATION
      =================================================== */

      gsap.to(".floating-icon-one", {
        y: -15,
        rotate: 8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-icon-two", {
        y: 18,
        rotate: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ===================================================
         PROJECT CARDS
      =================================================== */

      gsap.utils
        .toArray(".project-item")
        .forEach((el, i) => {
          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: 100,
              scale: 0.88,
              rotateX: 18,
              filter: "blur(8px)",
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
              duration: 1,
              delay: i * 0.08,
              ease: "power4.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

      /* ===================================================
         FEATURED PROJECT SPECIAL ANIMATION
      =================================================== */

      gsap.fromTo(
        ".featured-glow",
        {
          opacity: 0.2,
          scale: 0.8,
        },
        {
          opacity: 0.65,
          scale: 1.1,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

      /* ===================================================
         PROJECT NUMBER ANIMATION
      =================================================== */

      gsap.utils.toArray(".project-number").forEach((number, index) => {
        gsap.fromTo(
          number,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: number,
              start: "top 90%",
            },
          }
        );
      });

      /* ===================================================
         BOTTOM CTA
      =================================================== */

      gsap.fromTo(
        ".projects-cta",
        {
          opacity: 0,
          y: 80,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projects-cta",
            start: "top 88%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.025,
      duration: 0.35,
      ease: "power2.out",
    });

    const glow = card.querySelector(".card-mouse-glow");

    if (glow) {
      gsap.to(glow, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  /* =======================================================
     CARD LEAVE
  ======================================================= */

  const handleCardLeave = (e) => {
    const card = e.currentTarget;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.65,
      ease: "elastic.out(1,0.5)",
    });

    const glow = card.querySelector(".card-mouse-glow");

    if (glow) {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.4,
      });
    }
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-ink"
    >
      {/* =================================================
          MOUSE SPOTLIGHT
      ================================================= */}

      <div
        ref={spotlightRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.035] blur-[100px] lg:block"
      />

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* ORB 1 */}

        <div className="projects-orb-one absolute left-[-12%] top-[15%] h-[480px] w-[480px] rounded-full bg-electric/10 blur-[140px]" />

        {/* ORB 2 */}

        <div className="projects-orb-two absolute right-[-12%] top-[35%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* ORB 3 */}

        <div className="projects-orb-three absolute bottom-[-10%] left-[35%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]" />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* RADIAL */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(0,255,255,0.06), transparent 38%)",
          }}
        />
      </div>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="mx-auto max-w-[1700px] px-6 pb-28 pt-32 sm:px-10 lg:px-16 xl:px-24">
        {/* =================================================
            HEADER
        ================================================= */}

        <section className="relative min-h-[48vh]">
          {/* FLOATING ICON */}

          <div className="floating-icon-one absolute right-[8%] top-[5%] hidden rounded-2xl border border-electric/20 bg-white/[0.03] p-4 backdrop-blur-xl lg:block">
            <Layers3
              size={24}
              className="text-electric"
            />
          </div>

          <div className="floating-icon-two absolute bottom-[12%] right-[25%] hidden rounded-full border border-purple-400/20 bg-purple-500/[0.04] p-3 backdrop-blur-xl lg:block">
            <Sparkles
              size={18}
              className="text-purple-300"
            />
          </div>

          {/* SMALL LINE */}

          <div className="projects-label mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-electric shadow-[0_0_15px_rgba(0,255,255,.8)]" />

            <p className="font-mono text-xs tracking-[0.3em] text-electricGlow sm:text-sm">
              SELECTED WORK
            </p>
          </div>

          {/* TITLE */}

          <h1 className="projects-title max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
            Things I've
            <span className="relative ml-3 inline-block text-electricGlow">
              Built.
              <span className="absolute -bottom-3 left-0 h-1 w-full rounded-full bg-electric/30 blur-md" />
            </span>
          </h1>

          {/* DESCRIPTION */}

          <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <p className="projects-description max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg">
              A collection of applications, experiments and
              digital products I've built while learning,
              exploring and solving real-world problems.
            </p>

            {/* PROJECT COUNT */}

            <div className="projects-description flex items-center gap-4">
              <div className="h-10 w-px bg-electric/30" />

              <div>
                <p className="font-mono text-2xl font-bold text-electricGlow">
                  09
                </p>

                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Selected Projects
                </p>
              </div>
            </div>
          </div>

          {/* SCROLL */}

          <div className="projects-scroll absolute bottom-0 left-0 hidden items-center gap-3 lg:flex">
            <MousePointer2
              size={14}
              className="text-electric/60"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
              Explore Projects
            </span>

            <ArrowDown
              size={14}
              className="animate-bounce text-electric/50"
            />
          </div>
        </section>

        {/* =================================================
            PROJECT LIST
        ================================================= */}

        <section className="relative mt-10">
          {/* SECTION LINE */}

          <div className="mb-14 flex items-center gap-5">
            <span className="font-mono text-xs text-white/20">
              01
            </span>

            <div className="h-px flex-1 bg-white/[0.06]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
              Projects
            </span>
          </div>

          {/* PROJECT GRID */}

          <div
            className="grid grid-cols-1 gap-10 md:grid-cols-2"
            style={{
              perspective: "1600px",
            }}
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.title}
                className={`project-item group relative ${
                  project.featured
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                {/* PROJECT NUMBER */}

                <div className="project-number pointer-events-none absolute -left-3 -top-5 z-20 hidden font-display text-6xl font-bold text-white/[0.035] md:block">
                  0{index + 1}
                </div>

                {/* FEATURED GLOW */}

                {project.featured && (
                  <div className="featured-glow pointer-events-none absolute -inset-8 rounded-[3rem] bg-electric/10 blur-[70px]" />
                )}

                {/* 3D WRAPPER */}

                <div
                  className="relative [transform-style:preserve-3d]"
                  onMouseMove={handleCardMove}
                  onMouseLeave={handleCardLeave}
                >
                  {/* MOUSE GLOW */}

                  <div className="card-mouse-glow pointer-events-none absolute left-1/2 top-1/2 z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.08] opacity-0 blur-[80px]" />

                  {/* CARD BORDER GLOW */}

                  <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-electric/20 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* CARD */}

                  <div
                    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel/50 p-1 backdrop-blur-xl transition-all duration-500 group-hover:border-electric/25 group-hover:shadow-[0_30px_100px_rgba(0,255,255,0.08)]"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* INNER */}

                    <div className="relative overflow-hidden rounded-[1.85rem] bg-black/10">
                      {/* TOP DECORATION */}

                      <div className="pointer-events-none absolute left-7 right-7 top-5 z-20 flex items-center justify-between">
                        <div className="flex gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-electric/70 shadow-[0_0_10px_rgba(0,255,255,.8)]" />

                          <span className="h-2 w-2 rounded-full bg-white/15" />

                          <span className="h-2 w-2 rounded-full bg-white/10" />
                        </div>

                        {project.featured && (
                          <span className="rounded-full border border-electric/20 bg-electric/[0.06] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-electricGlow">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* PROJECT IMAGE */}

                      {project.image && (
                        <div className="relative mt-14 overflow-hidden px-5">
                          
                            

                            {/* IMAGE OVERLAY GRADIENT */}

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

                            {/* IMAGE SHEEN ON HOVER */}

                            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                          
                        </div>
                      )}

                      {/* PROJECT CARD */}

                      <div
                        className={`relative z-10 ${
                          project.image ? "pt-6" : "pt-7"
                        }`}
                      >
                        <ProjectCard {...project} />
                      </div>

                      {/* BOTTOM LIGHT */}

                      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-electric shadow-[0_0_20px_rgba(0,255,255,1)] transition-all duration-700 group-hover:w-[70%]" />

                      {/* CORNER GLOW */}

                      <div className="pointer-events-none absolute -bottom-24 -right-24 h-52 w-52 rounded-full bg-purple-500/[0.06] blur-[70px] transition-all duration-700 group-hover:scale-150" />
                    </div>
                  </div>

                  {/* FLOATING ARROW */}

                  <div className="pointer-events-none absolute -right-3 -top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 opacity-0 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:opacity-100">
                    <ArrowUpRight
                      size={16}
                      className="text-electric"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <section className="projects-cta relative mt-32 overflow-hidden rounded-[2rem] border border-white/10 bg-panel/40 px-7 py-16 text-center backdrop-blur-xl sm:px-12">
          {/* GLOW */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.06] blur-[100px]" />

          {/* GRID */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="relative z-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-electricGlow">
              MORE TO COME
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Always building.
              <span className="text-electricGlow">
                {" "}Always learning.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/35">
              These projects represent my journey so far.
              More experiments, applications and ideas are
              constantly in progress.
            </p>

            <div className="mt-8">
              <div className="mx-auto h-px w-20 bg-electric shadow-[0_0_20px_rgba(0,255,255,1)]" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}