import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  Code2,
  Globe2,
  Layers,
  Server,
  Smartphone,
  Sparkles,
  Download,
  MousePointer2,
  Zap,
  Terminal,
  Cpu,
  Check,
} from "lucide-react";

import MagneticButton from "../components/MagneticButton";
import FloatingBadge from "../components/FloatingBadge";
import AnimatedCounter from "../components/AnimatedCounter";
import ProjectCard from "../components/ProjectCard";
import cv from "../assets/CV/Fahad-Ahmad-CV.pdf";

import profile from "../assets/profile/fahad.jpeg";
import pakCartifyImg from "../assets/projects/pak2.png";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TECHNOLOGIES
========================================================= */

const TECHNOLOGIES = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MSSQL Server",
  "Flutter",
  "Dart",
  "Python",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "Kotlin",
  "n8n",
];

/* =========================================================
   PROFILE BADGES
========================================================= */

const BADGES = [
  { label: "React", style: { top: "7%", left: "-3%" }, delay: 0 },
  { label: "Node.js", style: { top: "23%", right: "-3%" }, delay: 0.2 },
  { label: "Flutter", style: { bottom: "24%", left: "-3%" }, delay: 0.4 },
  { label: "MongoDB", style: { bottom: "28%", right: "-3%" }, delay: 0.1 },
  { label: "Python", style: { top: "48%", right: "-4%" }, delay: 0.3 },
];

/* =========================================================
   BUILD ITEMS
========================================================= */

const BUILD_ITEMS = [
  {
    n: "01",
    title: "Web Applications",
    description: "Modern, responsive interfaces built for real users.",
    icon: Globe2,
    highlights: ["Pixel-perfect UI", "Optimized performance"],
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    n: "02",
    title: "Full-Stack Applications",
    description: "Complete frontend, backend and database solutions.",
    icon: Layers,
    highlights: ["End-to-end ownership", "Clean architecture"],
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    n: "03",
    title: "E-Commerce Platforms",
    description: "Scalable shopping experiences with powerful dashboards.",
    icon: Sparkles,
    highlights: ["Secure checkout flows", "Admin dashboards"],
    gradient: "from-orange-500/20 to-red-500/10",
  },
  {
    n: "04",
    title: "REST APIs",
    description: "Clean and scalable backend APIs for modern applications.",
    icon: Server,
    highlights: ["Well-documented routes", "Auth & validation"],
    gradient: "from-green-500/20 to-emerald-500/10",
  },
  {
    n: "05",
    title: "Responsive Websites",
    description: "Beautiful experiences across desktop, tablet and mobile.",
    icon: Code2,
    highlights: ["Mobile-first design", "Cross-browser tested"],
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    n: "06",
    title: "Flutter Applications",
    description: "Cross-platform mobile applications with smooth UI.",
    icon: Smartphone,
    highlights: ["Single codebase", "Native-like feel"],
    gradient: "from-violet-500/20 to-purple-500/10",
  },
];

/* =========================================================
   TYPEWRITER
========================================================= */

const TYPE_WORDS = [
  "React Applications",
  "Node.js Backends",
  "Flutter Applications",
  "Python Solutions",
  "C++ Programs",
  "Full-Stack Experiences",
  "E-Commerce Platforms",
  "REST APIs",
  "Modern Websites",
];

/* =========================================================
   PARTICLES
========================================================= */

const PARTICLES = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() > 0.7 ? 4 : 2.5,
  opacity: Math.random() * 0.6 + 0.2,
}));

/* =========================================================
   FULL-PAGE 3D BACKGROUND
========================================================= */

const CUBES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: `${8 + i * 16 + (i % 2 === 0 ? 2 : -3)}%`,
  top: `${10 + ((i * 37) % 80)}%`,
  size: 26 + (i % 3) * 14,
  duration: 16 + i * 3,
  color: i % 2 === 0 ? "rgba(0,255,255,0.4)" : "rgba(168,85,247,0.35)",
}));

const ORBS = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  left: `${5 + i * 22}%`,
  top: `${20 + ((i * 53) % 70)}%`,
  size: 60 + (i % 3) * 40,
  duration: 20 + i * 4,
}));

function Scene3DBackground() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".bg-cube").forEach((cube, i) => {
        gsap.to(cube, {
          rotateX: 360,
          rotateY: 360,
          duration: 18 + i * 2.5,
          repeat: -1,
          ease: "none",
        });

        gsap.to(cube, {
          y: i % 2 === 0 ? -40 : 40,
          duration: 6 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.utils.toArray(".bg-orb").forEach((orb, i) => {
        gsap.to(orb, {
          x: i % 2 === 0 ? 80 : -80,
          y: i % 3 === 0 ? -50 : 50,
          scale: 1.2,
          duration: 11 + i * 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.to(wrapRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      gsap.to(wrapRef.current, {
        rotateY: 8,
        rotateX: -4,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      <div
        ref={wrapRef}
        className="absolute inset-0 [transform-style:preserve-3d]"
      >
        {ORBS.map((orb) => (
          <span
            key={orb.id}
            className="bg-orb absolute rounded-full blur-3xl opacity-[0.12]"
            style={{
              left: orb.left,
              top: orb.top,
              width: orb.size,
              height: orb.size,
              background:
                orb.id % 2 === 0
                  ? "radial-gradient(circle, rgba(0,255,255,1), transparent 70%)"
                  : "radial-gradient(circle, rgba(168,85,247,1), transparent 70%)",
            }}
          />
        ))}

        {CUBES.map((cube) => (
          <div
            key={cube.id}
            className="bg-cube absolute [transform-style:preserve-3d]"
            style={{
              left: cube.left,
              top: cube.top,
              width: cube.size,
              height: cube.size,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `translateZ(${cube.size / 2}px)`,
                border: `1px solid ${cube.color}`,
                background: `${cube.color.replace("0.4", "0.04").replace("0.35", "0.03")}`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                transform: `translateZ(-${cube.size / 2}px)`,
                border: `1px solid ${cube.color}`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                transform: `rotateY(90deg) translateZ(${cube.size / 2}px)`,
                border: `1px solid ${cube.color}`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                transform: `rotateY(-90deg) translateZ(${cube.size / 2}px)`,
                border: `1px solid ${cube.color}`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                transform: `rotateX(90deg) translateZ(${cube.size / 2}px)`,
                border: `1px solid ${cube.color}`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                transform: `rotateX(-90deg) translateZ(${cube.size / 2}px)`,
                border: `1px solid ${cube.color}`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const heroRef = useRef(null);

  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  const heroLeftRef = useRef(null);
  const profileWrapRef = useRef(null);
  const profileRef = useRef(null);

  const techSectionRef = useRef(null);
  const techRowRef = useRef(null);

  const spotlightRef = useRef(null);

  const [typedText, setTypedText] = useState("");

  /* =======================================================
     TYPEWRITER
  ======================================================= */

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const word = TYPE_WORDS[wordIndex];

      if (!deleting) {
        charIndex++;
        setTypedText(word.substring(0, charIndex));

        if (charIndex === word.length) {
          deleting = true;
          timeout = setTimeout(type, 1500);
          return;
        }
        timeout = setTimeout(type, 65);
      } else {
        charIndex--;
        setTypedText(word.substring(0, charIndex));

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % TYPE_WORDS.length;
          timeout = setTimeout(type, 400);
          return;
        }
        timeout = setTimeout(type, 35);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  /* =======================================================
     GSAP - ENHANCED ANIMATIONS
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO INTRO - SMOOTHER & MORE ELEGANT */

      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 40, filter: "blur(16px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power4.out" }
      )
        .fromTo(
          ".title-letter",
          {
            opacity: 0,
            y: 70,
            rotateX: -95,
            transformOrigin: "50% 100%",
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.05,
            ease: "back.out(1.8)",
          },
          "-=0.55"
        )
        .fromTo(
          titleLineRef.current,
          { opacity: 0, scale: 0.85, filter: "blur(16px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "elastic.out(1.2, 0.6)",
          },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 40, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          btnRef.current?.children,
          { opacity: 0, y: 35, scale: 0.75 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.13, ease: "back.out(1.9)" },
          "-=0.5"
        )
        // FIX: entrance for the profile photo is much less extreme now
        // (was scale 0.5, rotateY -40, rotateX 25 — felt like a violent flip on load)
        .fromTo(
          profileWrapRef.current,
          { opacity: 0, scale: 0.7, rotateY: -15, rotateX: 10, filter: "blur(24px)" },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "elastic.out(1.1, 0.6)",
          },
          "-=1"
        );

      /* HERO PARALLAX */

      gsap.to(heroRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* PROFILE 3D SCROLL ROTATION */
      // FIX: toned down from rotateY 20 / rotateX -10 — was spinning the photo
      // far too aggressively while scrolling past the hero.

      gsap.to(profileWrapRef.current, {
        rotateY: 10,
        rotateX: -5,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /* PROFILE FLOAT - ENHANCED WITH 3D */

      gsap.to(profileWrapRef.current, {
        y: -28,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(profileWrapRef.current, {
        rotateZ: 1.5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* PROFILE GLOW - ENHANCED & PULSING */

      gsap.to(".profile-glow", {
        scale: 1.5,
        opacity: 0.95,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".profile-glow", {
        filter: "blur(95px)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* AURORA RING */

      gsap.to(".aurora-ring", {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      /* ENERGY CORE - ENHANCED */

      gsap.to(".energy-core", {
        scale: 1.2,
        opacity: 0.9,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* RINGS - SMOOTHER ROTATIONS */

      gsap.to(".ring-one", { rotate: 360, duration: 16, repeat: -1, ease: "none" });
      gsap.to(".ring-two", { rotate: -360, duration: 22, repeat: -1, ease: "none" });
      gsap.to(".ring-three", { rotate: 360, duration: 30, repeat: -1, ease: "none" });
      gsap.to(".ring-four", { rotate: -360, duration: 38, repeat: -1, ease: "none" });

      /* ORBITS */

      gsap.to(".orbit-dot-one", { rotate: 360, duration: 8, repeat: -1, ease: "none" });
      gsap.to(".orbit-dot-two", { rotate: -360, duration: 12, repeat: -1, ease: "none" });

      /* BADGES - ENHANCED */

      gsap.utils.toArray(".profile-badge").forEach((badge, index) => {
        gsap.to(badge, {
          y: index % 2 === 0 ? -18 : 18,
          x: index % 2 === 0 ? 10 : -10,
          rotate: index % 2 === 0 ? 3 : -3,
          duration: 2.5 + index * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.18,
        });
      });

      /* BACKGROUND GLOWS - MORE DYNAMIC */

      gsap.to(".bg-glow-one", { x: 180, y: 100, scale: 1.3, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".bg-glow-two", { x: -160, y: -110, scale: 1.25, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".bg-glow-three", { x: 120, y: -140, scale: 1.2, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });

      /* PARTICLES - ENHANCED */

      gsap.utils.toArray(".hero-particle").forEach((particle, index) => {
        gsap.to(particle, {
          x: index % 2 === 0 ? 45 : -45,
          y: index % 3 === 0 ? -45 : 45,
          opacity: 0.35,
          duration: 2.8 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.1,
        });
      });

      /* TECHNOLOGY MARQUEE */

      const techMarquee = gsap.to(techRowRef.current, {
        xPercent: -50,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: techSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          techMarquee.timeScale(self.direction === 1 ? 1 : -1);
        },
      });

      /* SECTION HEADINGS */

      gsap.utils.toArray(".section-heading").forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 60, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: { trigger: heading, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });

      /* BUILD CARDS - ENHANCED 3D */

      gsap.utils.toArray(".build-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, rotateY: 40, scale: 0.85, rotateX: 20 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "power4.out",
            scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none reverse" },
          }
        );
      });

      /* STATS */

      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 50, rotateX: -70, transformOrigin: "50% 0%" },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: ".stats-box", start: "top 82%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        ".stats-box",
        { opacity: 0, y: 100, scale: 0.9, rotateX: 16 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".stats-box", start: "top 82%", toggleActions: "play none none reverse" },
        }
      );

      /* FEATURED */

      gsap.fromTo(
        ".featured-project",
        { opacity: 0, y: 110, rotateX: 15, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: { trigger: ".featured-project", start: "top 82%", toggleActions: "play none none reverse" },
        }
      );

      /* CTA HALO - single-color breathing glow (replaces the old spinning border) */

      gsap.to(".cta-halo", {
        opacity: 0.6,
        scale: 1.06,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* CTA BADGE - gentle continuous float + rotate for ambient movement */

      gsap.to(".cta-badge", {
        y: -8,
        rotate: 6,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* CTA CARD - SCROLL REVEAL (new) */
      // FIX: the final "Let's build something great" card previously had no
      // entrance animation at all — it just appeared. Now it fades/slides/scales
      // in like the other sections, matching the same easing language.

      gsap.fromTo(
        ".cta-card",
        { opacity: 0, y: 80, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".cta-card", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );

      /* SCROLL LINE */

      gsap.fromTo(
        ".scroll-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".scroll-line", start: "top 90%" },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /* =======================================================
     MOUSE PROFILE + PARALLAX DEPTH EFFECT
  ======================================================= */

  useEffect(() => {
    const moveProfile = (e) => {
      if (window.innerWidth < 1024) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // FIX: profile photo used to tilt up to 16deg / move 12px on every mouse
      // move, which read as excessive 3D wobble. Cut roughly in half.
      if (profileRef.current) {
        gsap.to(profileRef.current, {
          rotateY: x * 9,
          rotateX: -y * 9,
          x: x * 8,
          y: y * 8,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      if (heroLeftRef.current) {
        gsap.to(heroLeftRef.current, {
          rotateY: x * 3.5,
          rotateX: -y * 2.5,
          duration: 1.3,
          ease: "power3.out",
        });
      }

      gsap.to(".ring-one", { x: x * 25, y: y * 25, duration: 1.1, ease: "power3.out" });
      gsap.to(".ring-two", { x: x * -18, y: y * -18, duration: 1.3, ease: "power3.out" });
      gsap.to(".ring-three", { x: x * 12, y: y * 12, duration: 1.5, ease: "power3.out" });
      gsap.to(".ring-four", { x: x * -9, y: y * -9, duration: 1.7, ease: "power3.out" });
      gsap.to(".aurora-ring", { x: x * -30, y: y * -30, duration: 1.6, ease: "power3.out" });

      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", moveProfile);
    return () => window.removeEventListener("mousemove", moveProfile);
  }, []);

  /* =======================================================
     CARD TILT WITH ENHANCED EFFECT
  ======================================================= */

  const handleCardMove = (e) => {
    if (window.innerWidth < 768) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.025,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1, 0.55)",
    });
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <main className="relative w-full min-w-0 overflow-x-hidden bg-ink [perspective:1600px]">
      <Scene3DBackground />

      <div
        ref={spotlightRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-electric/[0.04] to-purple-500/[0.03] blur-[110px] lg:block"
      />

      {/* =================================================
          HERO
      ================================================= */}

      <section
        ref={heroRef}
        className="
          relative flex min-h-screen w-full items-center
          overflow-hidden
          px-5 pb-24 pt-28
          sm:px-8 sm:pb-28 sm:pt-32
          md:px-10
          lg:px-14
          xl:px-20
          2xl:px-24
          [transform-style:preserve-3d]
        "
      >
        {/* ENHANCED BACKGROUND GLOWS */}

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="bg-glow-one absolute left-[-40%] top-[5%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-electric/15 via-electric/8 to-transparent blur-[130px] sm:left-[-25%] sm:h-[450px] sm:w-[450px] lg:left-[-18%] lg:h-[550px] lg:w-[550px]" />
          <div className="bg-glow-two absolute right-[-40%] top-[10%] h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-cyan-500/12 via-purple-500/8 to-transparent blur-[140px] sm:right-[-25%] sm:h-[500px] sm:w-[500px] lg:right-[-18%] lg:h-[600px] lg:w-[600px]" />
          <div className="bg-glow-three absolute bottom-[-20%] left-[25%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-purple-500/12 to-transparent blur-[140px] lg:h-[550px] lg:w-[550px]" />

          {/* ENHANCED GRID */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "65px 65px",
            }}
          />

          {/* RADIAL GRADIENT GLOW */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 50% 45%, rgba(0,255,255,0.07), transparent 40%)",
            }}
          />

          {/* PARTICLES WITH ENHANCED GLOW */}
          {PARTICLES.map((particle) => (
            <span
              key={particle.id}
              className="hero-particle absolute rounded-full bg-electric"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                boxShadow: `0 0 ${particle.size * 3}px rgba(0,255,255,${0.8 + particle.opacity * 0.2}), inset 0 0 ${particle.size * 1.5}px rgba(255,255,255,0.3)`,
              }}
            />
          ))}
        </div>

        {/* CONTENT */}

        <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center gap-20 lg:flex-row lg:gap-12 xl:gap-20 2xl:gap-28 [transform-style:preserve-3d]">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            ref={heroLeftRef}
            className="relative z-10 w-full text-center lg:flex-1 lg:text-left [transform-style:preserve-3d] will-change-transform"
          >
            <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-8 bg-gradient-to-r from-electric to-transparent sm:w-12" />
              <p
                ref={labelRef}
                className="font-mono text-[10px] tracking-[0.2em] text-electricGlow sm:text-xs sm:tracking-[0.25em] bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent"
              >
                COMPUTER SCIENCE STUDENT
              </p>
            </div>

            {/* TITLE */}

            <h1
              ref={titleRef}
              className="
                font-display font-bold
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                text-[42px]
                sm:text-6xl
                md:text-7xl
                lg:text-7xl
                xl:text-[82px]
                2xl:text-[88px]
                [perspective:800px]
              "
            >
              <span className="block [transform-style:preserve-3d]">
  {"I Build".split("").map((char, i) => (
    <span
      key={i}
      className="title-letter inline-block text-5xl sm:text-7xl lg:text-8xl [transform-style:preserve-3d]"
      style={{ willChange: "transform, opacity" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</span>

<span
  ref={titleLineRef}
  className="relative mt-4 block min-h-[1.2em] sm:mt-6"
>
  <span className="text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-electricGlow via-cyan-300 to-electricGlow bg-clip-text text-transparent">{typedText}</span>
  <span className="ml-1 animate-pulse text-electric">|</span>
  <span className="absolute inset-0 -z-10 blur-3xl">
    <span className="text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-electric/40 to-purple-500/30 bg-clip-text text-transparent">{typedText}</span>
  </span>
</span>
            </h1>

            <p
              ref={descRef}
              className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-mist/90 sm:mt-9 sm:text-base md:text-lg lg:mx-0 lg:text-xl"
            >
              I'm a Computer Science student and full-stack developer focused on building modern
              web applications, solving real-world problems, and turning ideas into meaningful
              digital experiences.
            </p>

            {/* SKILLS */}

            <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start sm:gap-3">
              <div className="group flex items-center gap-2 rounded-full border border-electric/20 bg-electric/[0.05] px-3 py-2 backdrop-blur-xl transition-all duration-300 hover:border-electric/60 hover:bg-electric/[0.12] hover:-translate-y-1.5 sm:px-4">
                <Zap size={13} className="text-electric" />
                <span className="font-mono text-[10px] text-white/70 group-hover:text-white sm:text-xs">Full-Stack</span>
              </div>

              <div className="group flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/[0.05] px-3 py-2 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-400/[0.12] hover:-translate-y-1.5 sm:px-4">
                <Terminal size={13} className="text-purple-400" />
                <span className="font-mono text-[10px] text-white/70 group-hover:text-white sm:text-xs">Problem Solver</span>
              </div>

              <div className="group flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-3 py-2 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/[0.12] hover:-translate-y-1.5 sm:px-4">
                <Cpu size={13} className="text-cyan-300" />
                <span className="font-mono text-[10px] text-white/70 group-hover:text-white sm:text-xs">Builder</span>
              </div>
            </div>

            {/* BUTTONS */}

            <div ref={btnRef} className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start lg:mt-10">
              <MagneticButton
                as={Link}
                to="/projects"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan-400 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] sm:px-7 sm:py-3.5 sm:text-sm overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href={cv}
                download="Fahad-Ahmad-CV.pdf"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-electric/40 bg-gradient-to-r from-electric/[0.08] to-purple-500/[0.08] px-5 py-3 text-xs font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-electric/80 hover:bg-electric/[0.15] hover:text-electricGlow hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Download CV
                <Download size={15} />
              </MagneticButton>

              <MagneticButton
                as={Link}
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-gradient-to-r from-cyan-300/[0.08] to-purple-500/[0.08] px-5 py-3 text-xs font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-cyan-300/80 hover:bg-cyan-300/[0.15] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Let's Talk
              </MagneticButton>
            </div>

            {/* SCROLL */}

            <div className="mt-14 hidden items-center gap-4 lg:flex">
              <div className="relative h-12 w-px overflow-hidden bg-gradient-to-b from-electric/60 via-electric/40 to-transparent">
                <div className="scroll-line absolute left-0 top-0 h-full w-full bg-gradient-to-b from-electric via-cyan-300 to-transparent" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Scroll to explore
                </p>
                <MousePointer2 size={14} className="mt-2 text-electric/70" />
              </div>
            </div>
          </div>

          {/* =================================================
              PROFILE SECTION
          ================================================= */}

          <div className="relative z-10 flex w-full flex-1 items-center justify-center px-6 sm:px-10 lg:px-0">
            <div
              ref={profileWrapRef}
              className="relative h-[250px] w-[250px] [perspective:1400px] sm:h-[310px] sm:w-[310px] md:h-[350px] md:w-[350px] lg:h-[390px] lg:w-[390px] xl:h-[440px] xl:w-[440px] 2xl:h-[460px] 2xl:w-[460px]"
            >
              {/* OUTER GLOW - INTENSIFIED */}
              <div
                className="aurora-ring pointer-events-none absolute -inset-16 rounded-full opacity-60 blur-3xl sm:-inset-20 lg:-inset-24"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(0,255,255,0.8), rgba(168,85,247,0.6), rgba(0,255,255,0.3), rgba(168,85,247,0.6), rgba(0,255,255,0.8))",
                  boxShadow: "0 0 120px rgba(0,255,255,0.4), inset 0 0 80px rgba(168,85,247,0.2)"
                }}
              />

              {/* PRIMARY GLOW */}
              <div className="profile-glow absolute -inset-12 rounded-full bg-gradient-to-br from-electric/40 via-cyan-400/20 to-purple-500/25 blur-[90px] sm:-inset-16 lg:-inset-20 shadow-[0_0_100px_rgba(0,255,255,0.5)]" />

              {/* ENERGY CORE - MORE VIBRANT */}
              <div className="energy-core absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-electric/25 via-cyan-400/15 to-purple-500/15 blur-[60px] shadow-[inset_0_0_80px_rgba(0,255,255,0.3)]" />

              {/* ANIMATED RINGS - ENHANCED */}
              <div className="ring-four absolute -inset-10 rounded-full border border-white/[0.08] [transform:rotateX(70deg)_rotateY(20deg)] shadow-[0_0_30px_rgba(255,255,255,0.1),inset_0_0_30px_rgba(0,255,255,0.1)] sm:-inset-16 lg:-inset-24" />
              <div className="ring-three absolute -inset-7 rounded-full border border-cyan-400/30 [transform:rotateX(25deg)_rotateY(65deg)] shadow-[0_0_25px_rgba(0,255,255,0.2)] sm:-inset-10 lg:-inset-16" />
              <div className="ring-two absolute -inset-5 rounded-full border border-dashed border-electric/35 [transform:rotateY(65deg)_rotateX(15deg)] shadow-[0_0_20px_rgba(0,255,255,0.15)] sm:-inset-8 lg:-inset-11" />
              <div className="ring-one absolute -inset-3 rounded-full border-2 border-electric/50 [transform:rotateX(65deg)_rotateY(15deg)] shadow-[0_0_40px_rgba(0,255,255,0.4),inset_0_0_30px_rgba(0,255,255,0.15)] sm:-inset-5 lg:-inset-7" />

              {/* ORBIT DOTS - GLOWING */}
              <div className="orbit-dot-one absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gradient-to-br from-electric to-cyan-300 shadow-[0_0_40px_rgba(0,255,255,1.2),0_0_20px_rgba(0,255,255,0.6)] sm:-right-5 sm:h-4 sm:w-4 lg:-right-7 lg:h-5 lg:w-5" />
              <div className="orbit-dot-two absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 shadow-[0_0_40px_rgba(168,85,247,1.2),0_0_20px_rgba(168,85,247,0.6)] sm:-left-5 sm:h-4 sm:w-4 lg:-left-7" />

              {/* TOP LIGHT - ENHANCED */}
              <div className="absolute left-1/2 top-[-8%] h-3 w-3 -translate-x-1/2 animate-pulse rounded-full bg-gradient-to-b from-electric via-cyan-300 to-electric shadow-[0_0_35px_rgba(0,255,255,1.5),0_0_15px_rgba(0,255,255,0.8)] sm:h-4 sm:w-4" />

              {/* PROFILE IMAGE CONTAINER - ENHANCED 3D */}
              <div
                ref={profileRef}
                className="relative h-full w-full overflow-hidden rounded-full border-3 border-electric/60 bg-black/60 shadow-[0_0_100px_rgba(0,255,255,0.35),0_0_50px_rgba(168,85,247,0.2),inset_0_0_80px_rgba(0,255,255,0.12),inset_-20px_-20px_60px_rgba(0,0,0,0.5)] [transform-style:preserve-3d] backdrop-blur-sm"
              >
                <img
                  src={profile}
                  alt="Fahad Ahmad"
                  className="h-full w-full object-cover object-[center_18%] brightness-110 contrast-125"
                />

                {/* MULTI-LAYER GRADIENTS FOR DEPTH */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/[0.08] via-transparent to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-electric/[0.1] via-transparent to-purple-500/[0.1]" />
                <div className="absolute inset-0 rounded-full ring-1 ring-white/40" />
                <div className="absolute inset-1.5 rounded-full ring-1 ring-electric/50 sm:inset-2 lg:inset-3" />
                <div className="absolute inset-4 rounded-full border border-white/[0.08] sm:inset-5 lg:inset-6" />

                {/* SHINE/LIGHT EFFECT - LEFT SIDE */}
                <div className="absolute -left-1/2 top-[-35%] h-[200%] w-[40%] rotate-[28deg] bg-gradient-to-r from-white/[0.18] via-white/[0.08] to-transparent blur-3xl shadow-[0_0_60px_rgba(255,255,255,0.15)]" />

                {/* SECONDARY LIGHT - RIGHT SIDE */}
                <div className="absolute -right-1/3 bottom-[-20%] h-[140%] w-[35%] rotate-[-15deg] bg-gradient-to-l from-cyan-300/[0.12] via-transparent to-transparent blur-3xl" />

                {/* INNER GLOW EFFECT */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-electric/[0.15] via-transparent to-purple-500/[0.1] blur-2xl sm:inset-10 lg:inset-12" />
              </div>

              {BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="profile-badge absolute scale-[0.78] sm:scale-90 lg:scale-100"
                  style={badge.style}
                >
                  <FloatingBadge label={badge.label} style={{}} delay={badge.delay} />
                </div>
              ))}

              {/* ACCENT LIGHTS AROUND IMAGE */}
              <span className="absolute right-[2%] top-[15%] h-3 w-3 animate-pulse rounded-full bg-gradient-to-br from-electric to-cyan-300 shadow-[0_0_35px_rgba(0,255,255,1.2)] sm:h-4 sm:w-4" />
              <span className="absolute left-[3%] top-[58%] h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(0,255,255,1)] sm:h-3.5 sm:w-3.5" />
              <span className="absolute bottom-[8%] right-[18%] h-2.5 w-2.5 animate-ping rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-[0_0_25px_rgba(168,85,247,1)]" />

              <div className="absolute -bottom-16 left-1/2 w-max max-w-[90vw] -translate-x-1/2 sm:-bottom-20">
                <div className="flex items-center gap-2 rounded-full border border-electric/30 bg-black/70 px-3 py-2 shadow-[0_0_30px_rgba(0,255,255,0.2)] backdrop-blur-xl sm:gap-3 sm:px-5 sm:py-2.5">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
                  </span>
                  <span className="whitespace-nowrap font-mono text-[9px] text-white/60 sm:text-xs">
                    Currently building
                  </span>
                  <span className="max-w-[130px] truncate font-mono text-[9px] font-semibold bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent sm:max-w-none sm:text-xs">
                    {typedText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          TECHNOLOGIES
      ================================================= */}

      <section
        ref={techSectionRef}
        className="relative w-full overflow-hidden border-y border-white/[0.05] py-14 sm:py-16 lg:py-20 [perspective:900px]"
      >
        <div className="mb-8 px-5 text-center sm:mb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent sm:text-xs sm:tracking-[0.35em]">
            Technologies I Work With
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div ref={techRowRef} className="flex w-max gap-3 whitespace-nowrap sm:gap-5">
            {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="
                  group flex items-center gap-2 rounded-full border border-white/15
                  bg-gradient-to-r from-white/[0.05] to-electric/[0.05] px-5 py-3 backdrop-blur-xl
                  transition-all duration-300 [transform-style:preserve-3d]
                  hover:-translate-y-3
                  hover:[transform:rotateX(16deg)_translateY(-15px)]
                  hover:border-electric/60 hover:bg-gradient-to-r hover:from-electric/15 hover:to-purple-500/10 hover:shadow-[0_0_35px_rgba(0,255,255,0.3)]
                  sm:gap-3 sm:px-7 sm:py-3.5
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-electric to-cyan-300 shadow-[0_0_15px_rgba(0,255,255,1)] transition-transform duration-300 group-hover:scale-175 sm:h-2 sm:w-2" />
                <span className="font-mono text-xs text-white/75 transition-colors duration-300 group-hover:text-electricGlow sm:text-sm">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink via-ink/80 to-transparent sm:w-32 lg:w-48" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink via-ink/80 to-transparent sm:w-32 lg:w-48" />
        </div>
      </section>

      {/* =================================================
          WHAT I BUILD
      ================================================= */}

      <section className="mx-auto w-full max-w-[1700px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 lg:px-14 lg:py-28 xl:px-20 2xl:px-24">
        <div className="section-heading mb-10 sm:mb-14">
          <p className="mb-3 font-mono text-[10px] tracking-[0.25em] bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent sm:mb-4 sm:text-xs">
            WHAT I DO
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              What I Build
            </h2>
            <p className="max-w-md text-xs leading-relaxed text-white/50 sm:text-sm">
              From frontend interfaces to backend architecture, I build complete digital experiences.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
          style={{ perspective: "1400px" }}
        >
          {BUILD_ITEMS.map((item) => (
            <div key={item.n} className="build-card group relative min-h-[215px] sm:min-h-[230px] [transform-style:preserve-3d]">
              <div
                className="
                  relative h-full w-full
                  transition-transform duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >
                {/* FRONT */}
                <div
                  className="
                    absolute inset-0
                    overflow-hidden rounded-3xl
                    border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                    p-6 backdrop-blur-xl
                    transition-all duration-500
                    group-hover:border-electric/60 group-hover:bg-gradient-to-br group-hover:from-electric/[0.15] group-hover:to-purple-500/[0.08]
                    group-hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
                    sm:p-7
                    [backface-visibility:hidden]
                  "
                >
                  <div className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white/40 group-hover:text-electric/70 transition-colors">{item.n}</span>
                    <div className="rounded-xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-3 transition-all duration-500 group-hover:border-electric/50 group-hover:bg-gradient-to-br group-hover:from-electric/20 group-hover:to-purple-500/10 group-hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]">
                      <item.icon size={19} className="text-electric transition-all duration-500 group-hover:scale-130 group-hover:rotate-12" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 sm:mt-10">
                    <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                    <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/50 sm:text-sm">{item.description}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-electric to-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all duration-700 group-hover:w-full" />

                  <ArrowUpRight
                    size={18}
                    className="absolute bottom-6 right-6 text-white/30 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:text-electric group-hover:scale-125"
                  />
                </div>

                {/* BACK */}
                <div
                  className="
                    absolute inset-0
                    overflow-hidden rounded-3xl
                    border border-electric/40 bg-gradient-to-br from-electric/[0.12] to-purple-500/[0.08]
                    p-6 backdrop-blur-xl sm:p-7
                    flex flex-col justify-center
                    shadow-[0_0_35px_rgba(0,255,255,0.15)]
                    [backface-visibility:hidden]
                    [transform:rotateY(180deg)]
                  "
                >
                  <span className="font-mono text-xs bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent">{item.n} — HIGHLIGHTS</span>

                  <h3 className="mt-3 font-display text-lg font-semibold text-white sm:text-xl">{item.title}</h3>

                  <ul className="mt-4 space-y-3">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-white/75 sm:text-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-electric/30 to-electric/10 border border-electric/40">
                          <Check size={11} className="text-electric" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================
          STATS
      ================================================= */}

      <section className="mx-auto w-full max-w-[1700px] px-5 py-10 sm:px-8 sm:py-16 md:px-10 lg:px-14 lg:py-20 xl:px-20 2xl:px-24">
        <div
          className="stats-box relative overflow-hidden rounded-3xl border border-electric/20 bg-gradient-to-br from-electric/[0.08] to-purple-500/[0.06] p-6 backdrop-blur-xl sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(0,255,255,0.1)]"
          style={{ perspective: "900px" }}
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-b from-electric/[0.08] to-transparent blur-[100px]" />

          <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
            <div className="stat-item"><AnimatedCounter value={10} suffix="+" label="Projects Built" /></div>
            <div className="stat-item"><AnimatedCounter value={14} suffix="+" label="Technologies" /></div>
            <div className="stat-item"><AnimatedCounter value={2} suffix="+" label="Years Learning & Building" /></div>
            <div className="stat-item"><AnimatedCounter value="∞" label="Curiosity" /></div>
          </div>
        </div>
      </section>

      {/* =================================================
          FEATURED WORK
      ================================================= */}

      <section className="mx-auto w-full max-w-[1700px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 lg:px-14 lg:py-28 xl:px-20 2xl:px-24">
        <div className="section-heading mb-9 flex items-end justify-between sm:mb-12">
          <div>
            <p className="mb-3 font-mono text-[10px] tracking-[0.25em] bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent sm:mb-4 sm:text-xs">
              SELECTED PROJECT
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Featured Work
            </h2>
          </div>

          <Link
            to="/projects"
            className="hidden items-center gap-1 text-sm bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent transition-transform duration-300 hover:translate-x-1.5 hover:underline sm:inline-flex font-semibold"
          >
            All projects
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
          style={{ transformStyle: "preserve-3d", perspective: "1400px" }}
        >
          <ProjectCard
            featured
            title="PakCartify"
            image={pakCartifyImg}
            description="A modern full-stack e-commerce application designed to provide a complete online shopping experience — from browsing to checkout to admin management."
            tech={["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Cloudinary"]}
            github="https://github.com/FahadAhmad06/PakCartifyFrontend"
          />
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent font-semibold">
            View all projects
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="mx-auto w-full max-w-[1700px] px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 lg:px-14 lg:pb-32 xl:px-20 2xl:px-24">
        {/*
          FIX: rotating multi-color conic border removed per feedback — replaced
          with a calm single-color (electric/cyan) breathing halo, plus a badge
          icon, corner frame accents, and a secondary "or email me" line so the
          card has more going on than just the button.
        */}
        <div
          className="cta-card group relative"
          style={{ perspective: "1200px" }}
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
        >
          {/* AMBIENT HALO - single color, soft breathing glow instead of a spinning ring */}
          <div className="cta-halo pointer-events-none absolute -inset-8 rounded-[2rem] bg-electric/[0.10] blur-[70px] sm:-inset-12" />

          <div className="relative overflow-hidden rounded-[1.5rem] border border-electric/25 bg-gradient-to-b from-white/[0.04] to-white/[0.015] px-5 py-14 text-center backdrop-blur-xl sm:rounded-[2rem] sm:px-10 sm:py-20 lg:px-12 shadow-[0_0_50px_rgba(0,255,255,0.12)] transition-[border-color,box-shadow] duration-500 [transform-style:preserve-3d] will-change-transform group-hover:border-electric/55 group-hover:shadow-[0_0_80px_rgba(0,255,255,0.28)]">
            {/* CORNER FRAME ACCENTS */}
            <span className="pointer-events-none absolute left-5 top-5 h-6 w-6 border-l-2 border-t-2 border-electric/40 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-electric/80 sm:left-7 sm:top-7" />
            <span className="pointer-events-none absolute right-5 top-5 h-6 w-6 border-r-2 border-t-2 border-electric/40 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-electric/80 sm:right-7 sm:top-7" />
            <span className="pointer-events-none absolute bottom-5 left-5 h-6 w-6 border-b-2 border-l-2 border-electric/40 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-electric/80 sm:bottom-7 sm:left-7" />
            <span className="pointer-events-none absolute bottom-5 right-5 h-6 w-6 border-b-2 border-r-2 border-electric/40 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-electric/80 sm:bottom-7 sm:right-7" />

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            <div className="relative z-10 flex flex-col items-center [transform:translateZ(40px)]">
              {/* BADGE ICON */}
              <div className="cta-badge mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-electric/40 bg-electric/[0.08] shadow-[0_0_25px_rgba(0,255,255,0.25)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(0,255,255,0.4)]">
                <Sparkles size={20} className="text-electric" />
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-electric/80 sm:text-xs sm:tracking-[0.3em] font-semibold">
                Have an idea?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
                Let's build something
                <span className="bg-gradient-to-r from-electricGlow via-cyan-300 to-electricGlow bg-clip-text text-transparent"> great.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-white/60 sm:mt-6 sm:text-sm md:text-base">
                Whether it's a web application, e-commerce platform, API or mobile experience — I'm
                always interested in building something meaningful.
              </p>

              <div className="mt-8 flex justify-center sm:mt-10">
                <MagneticButton
                  as={Link}
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan-400 px-6 py-3.5 text-xs font-semibold text-white shadow-[0_0_50px_rgba(0,255,255,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_70px_rgba(0,255,255,0.8)] sm:px-8 sm:py-4 sm:text-sm overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Conversation
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </MagneticButton>
              </div>

              <a
                href="mailto:fahadahmad0621@gmail.com"
                className="mt-5 font-mono text-[11px] text-white/40 underline decoration-white/15 underline-offset-4 transition-colors duration-300 hover:text-electric hover:decoration-electric/50 sm:text-xs"
              >
                or email me directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}