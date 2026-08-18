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
  {
    label: "React",
    style: {
      top: "7%",
      left: "-3%",
    },
    delay: 0,
  },
  {
    label: "Node.js",
    style: {
      top: "23%",
      right: "-3%",
    },
    delay: 0.2,
  },
  {
    label: "Flutter",
    style: {
      bottom: "24%",
      left: "-3%",
    },
    delay: 0.4,
  },
  {
    label: "MongoDB",
    style: {
      bottom: "7%",
      right: "-3%",
    },
    delay: 0.1,
  },
  {
    label: "Python",
    style: {
      top: "48%",
      right: "-4%",
    },
    delay: 0.3,
  },
];

/* =========================================================
   BUILD ITEMS
========================================================= */

const BUILD_ITEMS = [
  {
    n: "01",
    title: "Web Applications",
    description:
      "Modern, responsive interfaces built for real users.",
    icon: Globe2,
  },
  {
    n: "02",
    title: "Full-Stack Applications",
    description:
      "Complete frontend, backend and database solutions.",
    icon: Layers,
  },
  {
    n: "03",
    title: "E-Commerce Platforms",
    description:
      "Scalable shopping experiences with powerful dashboards.",
    icon: Sparkles,
  },
  {
    n: "04",
    title: "REST APIs",
    description:
      "Clean and scalable backend APIs for modern applications.",
    icon: Server,
  },
  {
    n: "05",
    title: "Responsive Websites",
    description:
      "Beautiful experiences across desktop, tablet and mobile.",
    icon: Code2,
  },
  {
    n: "06",
    title: "Flutter Applications",
    description:
      "Cross-platform mobile applications with smooth UI.",
    icon: Smartphone,
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

const PARTICLES = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() > 0.7 ? 3 : 2,
}));

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const heroRef = useRef(null);

  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

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

          wordIndex =
            (wordIndex + 1) % TYPE_WORDS.length;

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
     GSAP
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO INTRO */

      const tl = gsap.timeline({
        delay: 0.15,
      });

      tl.fromTo(
        labelRef.current,
        {
          opacity: 0,
          y: 35,
          filter: "blur(14px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
        }
      )
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
            rotateX: 20,
            filter: "blur(18px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.55"
        )
        .fromTo(
          descRef.current,
          {
            opacity: 0,
            y: 35,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .fromTo(
          btnRef.current?.children,
          {
            opacity: 0,
            y: 30,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "back.out(1.8)",
          },
          "-=0.45"
        )
        .fromTo(
          profileWrapRef.current,
          {
            opacity: 0,
            scale: 0.55,
            rotateY: -35,
            rotateX: 20,
            filter: "blur(20px)",
          },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "elastic.out(1,0.55)",
          },
          "-=0.9"
        );

      /* HERO PARALLAX */

      gsap.to(heroRef.current, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* PROFILE FLOAT */

      gsap.to(profileWrapRef.current, {
        y: -14,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* PROFILE GLOW */

      gsap.to(".profile-glow", {
        scale: 1.35,
        opacity: 0.75,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ENERGY */

      gsap.to(".energy-core", {
        scale: 1.15,
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* RINGS */

      gsap.to(".ring-one", {
        rotate: 360,
        duration: 14,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".ring-two", {
        rotate: -360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".ring-three", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".ring-four", {
        rotate: -360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      /* ORBITS */

      gsap.to(".orbit-dot-one", {
        rotate: 360,
        duration: 7,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-dot-two", {
        rotate: -360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      /* BADGES */

      gsap.utils
        .toArray(".profile-badge")
        .forEach((badge, index) => {
          gsap.to(badge, {
            y: index % 2 === 0 ? -14 : 14,
            x: index % 2 === 0 ? 7 : -7,
            rotate: index % 2 === 0 ? 2 : -2,
            duration: 2.2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.15,
          });
        });

      /* BACKGROUND */

      gsap.to(".bg-glow-one", {
        x: 150,
        y: 80,
        scale: 1.25,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".bg-glow-two", {
        x: -140,
        y: -90,
        scale: 1.2,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".bg-glow-three", {
        x: 100,
        y: -120,
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* PARTICLES */

      gsap.utils
        .toArray(".hero-particle")
        .forEach((particle, index) => {
          gsap.to(particle, {
            x: index % 2 === 0 ? 35 : -35,
            y: index % 3 === 0 ? -35 : 35,
            opacity: 0.25,
            duration: 2.5 + index * 0.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.08,
          });
        });

      /* TECHNOLOGY MARQUEE */

      const techMarquee = gsap.to(
        techRowRef.current,
        {
          xPercent: -50,
          duration: 18,
          repeat: -1,
          ease: "none",
        }
      );

      ScrollTrigger.create({
        trigger: techSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          techMarquee.timeScale(
            self.direction === 1 ? 1 : -1
          );
        },
      });

      /* SECTION HEADINGS */

      gsap.utils
        .toArray(".section-heading")
        .forEach((heading) => {
          gsap.fromTo(
            heading,
            {
              opacity: 0,
              y: 50,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power4.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        });

      /* BUILD CARDS */

      gsap.utils
        .toArray(".build-card")
        .forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 80,
              rotateX: 18,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.9,
              delay: index * 0.08,
              ease: "power4.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions:
                  "play none none reverse",
              },
            }
          );
        });

      /* STATS */

      gsap.fromTo(
        ".stats-box",
        {
          opacity: 0,
          y: 80,
          scale: 0.94,
          rotateX: 12,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".stats-box",
            start: "top 85%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /* FEATURED */

      gsap.fromTo(
        ".featured-project",
        {
          opacity: 0,
          y: 90,
          rotateX: 12,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".featured-project",
            start: "top 85%",
            toggleActions:
              "play none none reverse",
          },
        }
      );

      /* SCROLL LINE */

      gsap.fromTo(
        ".scroll-line",
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".scroll-line",
            start: "top 90%",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /* =======================================================
     MOUSE PROFILE EFFECT
  ======================================================= */

  useEffect(() => {
    const moveProfile = (e) => {
      if (window.innerWidth < 1024) return;

      const x =
        (e.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 2;

      if (profileRef.current) {
        gsap.to(profileRef.current, {
          rotateY: x * 13,
          rotateX: -y * 13,
          x: x * 10,
          y: y * 10,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      gsap.to(".ring-one", {
        x: x * 20,
        y: y * 20,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(".ring-two", {
        x: x * -15,
        y: y * -15,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(".ring-three", {
        x: x * 10,
        y: y * 10,
        duration: 1.4,
        ease: "power3.out",
      });

      gsap.to(".ring-four", {
        x: x * -7,
        y: y * -7,
        duration: 1.6,
        ease: "power3.out",
      });

      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.7,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener(
      "mousemove",
      moveProfile
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveProfile
      );
    };
  }, []);

  /* =======================================================
     CARD TILT
  ======================================================= */

  const handleCardMove = (e) => {
    if (window.innerWidth < 768) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -7;

    const rotateY =
      ((x - centerX) / centerX) * 7;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.025,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1,0.5)",
    });
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <main className="relative w-full min-w-0 overflow-x-hidden bg-ink">

      {/* =================================================
          SPOTLIGHT
      ================================================= */}

      <div
        ref={spotlightRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.035] blur-[90px] lg:block"
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
        "
      >

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

          <div className="
            bg-glow-one absolute
            left-[-35%] top-[8%]
            h-[300px] w-[300px]
            rounded-full bg-electric/10 blur-[100px]
            sm:left-[-20%] sm:h-[400px] sm:w-[400px]
            lg:left-[-15%] lg:h-[450px] lg:w-[450px]
          " />

          <div className="
            bg-glow-two absolute
            right-[-35%] top-[15%]
            h-[350px] w-[350px]
            rounded-full bg-cyan-500/10 blur-[120px]
            sm:right-[-20%] sm:h-[450px] sm:w-[450px]
            lg:right-[-15%] lg:h-[550px] lg:w-[550px]
          " />

          <div className="
            bg-glow-three absolute
            bottom-[-15%] left-[30%]
            h-[350px] w-[350px]
            rounded-full bg-purple-500/10 blur-[120px]
            lg:h-[500px] lg:w-[500px]
          " />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(0,255,255,0.055), transparent 38%)",
            }}
          />

          {PARTICLES.map((particle) => (
            <span
              key={particle.id}
              className="hero-particle absolute rounded-full bg-electric"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                boxShadow:
                  "0 0 12px rgba(0,255,255,.8)",
              }}
            />
          ))}
        </div>

        {/* CONTENT */}

        <div className="
          mx-auto flex w-full max-w-[1700px]
          flex-col items-center
          gap-20
          lg:flex-row lg:gap-12
          xl:gap-20
          2xl:gap-28
        ">

          {/* =================================================
              LEFT
          ================================================= */}

          <div className="
            relative z-10 w-full
            text-center
            lg:flex-1 lg:text-left
          ">

            <div className="
              mb-6 flex items-center justify-center gap-3
              lg:justify-start
            ">

              <span className="h-px w-8 bg-electric sm:w-10" />

              <p
                ref={labelRef}
                className="
                  font-mono text-[10px]
                  tracking-[0.2em]
                  text-electricGlow
                  sm:text-xs
                  sm:tracking-[0.25em]
                "
              >
                COMPUTER SCIENCE STUDENT
              </p>

            </div>

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
              "
            >

              <span className="block">
                I Build
              </span>

              <span className="
                relative mt-4 block
                min-h-[1.05em]
                sm:mt-5
              ">

                <span className="
                  relative z-10
                  text-electricGlow
                ">
                  {typedText}
                </span>

                <span className="ml-1 animate-pulse text-electric">
                  |
                </span>

                <span className="
                  absolute inset-0 -z-10
                  blur-3xl
                ">
                  <span className="text-electric/20">
                    {typedText}
                  </span>
                </span>

              </span>

            </h1>

            <p
              ref={descRef}
              className="
                mx-auto mt-7 max-w-2xl
                text-sm leading-relaxed
                text-mist
                sm:mt-9 sm:text-base
                md:text-lg
                lg:mx-0 lg:text-xl
              "
            >
              I'm a Computer Science student and full-stack
              developer focused on building modern web
              applications, solving real-world problems,
              and turning ideas into meaningful digital
              experiences.
            </p>

            {/* SKILLS */}

            <div className="
              mt-7 flex flex-wrap
              justify-center gap-2
              lg:justify-start
              sm:gap-3
            ">

              <div className="
                flex items-center gap-2
                rounded-full border border-white/10
                bg-white/[0.03]
                px-3 py-2
                backdrop-blur-xl
                sm:px-4
              ">
                <Zap
                  size={13}
                  className="text-electric"
                />

                <span className="font-mono text-[10px] text-white/60 sm:text-xs">
                  Full-Stack
                </span>
              </div>

              <div className="
                flex items-center gap-2
                rounded-full border border-white/10
                bg-white/[0.03]
                px-3 py-2
                backdrop-blur-xl
                sm:px-4
              ">
                <Terminal
                  size={13}
                  className="text-purple-400"
                />

                <span className="font-mono text-[10px] text-white/60 sm:text-xs">
                  Problem Solver
                </span>
              </div>

              <div className="
                flex items-center gap-2
                rounded-full border border-white/10
                bg-white/[0.03]
                px-3 py-2
                backdrop-blur-xl
                sm:px-4
              ">
                <Cpu
                  size={13}
                  className="text-cyan-300"
                />

                <span className="font-mono text-[10px] text-white/60 sm:text-xs">
                  Builder
                </span>
              </div>

            </div>

            {/* BUTTONS */}

            <div
              ref={btnRef}
              className="
                mt-8 flex flex-wrap
                justify-center gap-3
                sm:gap-4
                lg:justify-start
                lg:mt-10
              "
            >

              <MagneticButton
                as={Link}
                to="/projects"
                className="
                  group inline-flex
                  items-center justify-center gap-2
                  rounded-full bg-electric
                  px-5 py-3
                  text-xs font-medium text-white
                  transition-all duration-300
                  hover:scale-105 hover:shadow-glow
                  sm:px-7 sm:py-3.5 sm:text-sm
                "
              >
                View My Work

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </MagneticButton>

              <MagneticButton
                as="a"
                href={cv}
                download="Fahad-Ahmad-CV.pdf"
                className="
                  inline-flex
                  items-center justify-center gap-2
                  rounded-full
                  border border-white/15
                  bg-white/[0.02]
                  px-5 py-3
                  text-xs font-medium text-white
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:scale-105
                  hover:border-electric
                  hover:text-electricGlow
                  sm:px-7 sm:py-3.5 sm:text-sm
                "
              >
                Download CV
                <Download size={15} />
              </MagneticButton>

              <MagneticButton
                as={Link}
                to="/contact"
                className="
                  inline-flex
                  items-center justify-center
                  gap-2 rounded-full
                  border border-white/15
                  bg-white/[0.02]
                  px-5 py-3
                  text-xs font-medium text-white
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:scale-105
                  hover:border-electric
                  hover:text-electricGlow
                  sm:px-7 sm:py-3.5 sm:text-sm
                "
              >
                Let's Talk
              </MagneticButton>

            </div>

            {/* SCROLL */}

            <div className="
              mt-14 hidden
              items-center gap-4
              lg:flex
            ">

              <div className="
                relative h-12 w-px
                overflow-hidden bg-white/10
              ">
                <div className="
                  scroll-line absolute
                  left-0 top-0
                  h-full w-full bg-electric
                " />
              </div>

              <div>
                <p className="
                  font-mono text-[10px]
                  uppercase tracking-[0.3em]
                  text-white/30
                ">
                  Scroll to explore
                </p>

                <MousePointer2
                  size={14}
                  className="mt-2 text-electric/60"
                />
              </div>

            </div>

          </div>

          {/* =================================================
              PROFILE
          ================================================= */}

          <div className="
            relative z-10
            flex w-full
            flex-1
            items-center justify-center
            px-6
            sm:px-10
            lg:px-0
          ">

            <div
              ref={profileWrapRef}
              className="
                relative
                h-[250px] w-[250px]
                [perspective:1200px]
                sm:h-[310px] sm:w-[310px]
                md:h-[350px] md:w-[350px]
                lg:h-[390px] lg:w-[390px]
                xl:h-[440px] xl:w-[440px]
                2xl:h-[460px] 2xl:w-[460px]
              "
            >

              {/* GLOW */}

              <div className="
                profile-glow
                absolute
                -inset-12
                rounded-full
                bg-electric/20
                blur-[70px]
                sm:-inset-16
                lg:-inset-20
              " />

              {/* ENERGY */}

              <div className="
                energy-core absolute
                left-1/2 top-1/2
                h-[65%] w-[65%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-electric/[0.08]
                blur-[45px]
              " />

              {/* RINGS */}

              <div className="
                ring-four absolute
                -inset-10
                rounded-full
                border border-white/[0.04]
                [transform:rotateX(70deg)_rotateY(20deg)]
                sm:-inset-16
                lg:-inset-24
              " />

              <div className="
                ring-three absolute
                -inset-7
                rounded-full
                border border-purple-400/15
                [transform:rotateX(25deg)_rotateY(65deg)]
                sm:-inset-10
                lg:-inset-16
              " />

              <div className="
                ring-two absolute
                -inset-5
                rounded-full
                border border-dashed border-cyan-400/20
                [transform:rotateY(65deg)_rotateX(15deg)]
                sm:-inset-8
                lg:-inset-11
              " />

              <div className="
                ring-one absolute
                -inset-3
                rounded-full
                border border-electric/30
                [transform:rotateX(65deg)_rotateY(15deg)]
                sm:-inset-5
                lg:-inset-7
              " />

              {/* ORBIT DOTS */}

              <div className="
                orbit-dot-one
                absolute
                -right-2 top-1/2
                h-2.5 w-2.5
                -translate-y-1/2
                rounded-full bg-electric
                shadow-[0_0_25px_rgba(0,255,255,1)]
                sm:-right-5 sm:h-3 sm:w-3
                lg:-right-7 lg:h-3.5 lg:w-3.5
              " />

              <div className="
                orbit-dot-two
                absolute
                -left-2 top-1/2
                h-2.5 w-2.5
                -translate-y-1/2
                rounded-full bg-purple-400
                shadow-[0_0_25px_rgba(168,85,247,1)]
                sm:-left-5 sm:h-3 sm:w-3
                lg:-left-7
              " />

              {/* TOP LIGHT */}

              <div className="
                absolute
                left-1/2 top-[-5%]
                h-2 w-2
                -translate-x-1/2
                animate-pulse
                rounded-full bg-electric
                shadow-[0_0_20px_rgba(0,255,255,1)]
                sm:h-3 sm:w-3
              " />

              {/* IMAGE */}

              <div
                ref={profileRef}
                className="
                  relative
                  h-full w-full
                  overflow-hidden
                  rounded-full
                  border-2 border-electric/40
                  bg-black/40
                  shadow-[0_0_70px_rgba(0,255,255,0.15)]
                  [transform-style:preserve-3d]
                "
              >

                <img
                  src={profile}
                  alt="Fahad Ahmad"
                  className="
                    h-full w-full
                    object-cover
                    object-[center_18%]
                  "
                />

                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-transparent
                  to-electric/10
                " />

                <div className="
                  absolute inset-0
                  rounded-full
                  ring-1 ring-white/20
                " />

                <div className="
                  absolute inset-2
                  rounded-full
                  border border-white/10
                  sm:inset-3
                " />

                <div className="
                  absolute
                  -left-1/2 top-[-30%]
                  h-[170%] w-[32%]
                  rotate-[25deg]
                  bg-white/[0.09]
                  blur-xl
                " />

              </div>

              {/* BADGES */}

              {BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="
                    profile-badge
                    absolute
                    scale-[0.78]
                    sm:scale-90
                    lg:scale-100
                  "
                  style={badge.style}
                >
                  <FloatingBadge
                    label={badge.label}
                    style={{}}
                    delay={badge.delay}
                  />
                </div>
              ))}

              {/* DOTS */}

              <span className="
                absolute right-[4%] top-[18%]
                h-2.5 w-2.5
                animate-pulse rounded-full
                bg-electric
                shadow-[0_0_20px_rgba(0,255,255,1)]
                sm:h-3 sm:w-3
              " />

              <span className="
                absolute left-[4%] top-[54%]
                h-2 w-2
                animate-pulse rounded-full
                bg-cyan-300
                shadow-[0_0_18px_rgba(0,255,255,1)]
                sm:h-2.5 sm:w-2.5
              " />

              <span className="
                absolute bottom-[9%] right-[20%]
                h-2 w-2
                animate-ping rounded-full
                bg-purple-400
              " />

              {/* STATUS */}

              <div className="
                absolute
                -bottom-16
                left-1/2
                w-max
                max-w-[90vw]
                -translate-x-1/2
                sm:-bottom-20
              ">

                <div className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border border-electric/20
                  bg-black/60
                  px-3 py-2
                  shadow-glowSm
                  backdrop-blur-xl
                  sm:gap-3
                  sm:px-5 sm:py-2.5
                ">

                  <span className="
                    relative flex h-2 w-2 shrink-0
                  ">
                    <span className="
                      absolute inline-flex
                      h-full w-full
                      animate-ping rounded-full
                      bg-electric opacity-75
                    />

                    <span className="
                      relative inline-flex
                      h-2 w-2 rounded-full
                      bg-electric
                    />
                  </span>

                  <span className="
                    whitespace-nowrap
                    font-mono
                    text-[9px]
                    text-white/50
                    sm:text-xs
                  ">
                    Currently building
                  </span>

                  <span className="
                    max-w-[130px]
                    truncate
                    font-mono
                    text-[9px]
                    font-semibold
                    text-electricGlow
                    sm:max-w-none
                    sm:text-xs
                  ">
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
        className="
          relative w-full
          overflow-hidden
          border-y border-white/[0.04]
          py-14
          sm:py-16
          lg:py-20
        "
      >

        <div className="mb-8 px-5 text-center sm:mb-10">

          <p className="
            font-mono
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-electricGlow
            sm:text-xs
            sm:tracking-[0.35em]
          ">
            Technologies I Work With
          </p>

        </div>

        <div className="relative w-full overflow-hidden">

          <div
            ref={techRowRef}
            className="
              flex w-max
              gap-3
              whitespace-nowrap
              sm:gap-5
            "
          >

            {[
              ...TECHNOLOGIES,
              ...TECHNOLOGIES,
              ...TECHNOLOGIES,
            ].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="
                  group flex
                  items-center gap-2
                  rounded-full
                  border border-white/10
                  bg-panel/50
                  px-5 py-3
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-electric/50
                  hover:bg-electric/10
                  hover:shadow-glowSm
                  sm:gap-3
                  sm:px-7 sm:py-3.5
                "
              >

                <span className="
                  h-1.5 w-1.5
                  rounded-full
                  bg-electric
                  shadow-[0_0_12px_rgba(0,255,255,0.9)]
                  transition-transform
                  duration-300
                  group-hover:scale-150
                  sm:h-2 sm:w-2
                " />

                <span className="
                  font-mono
                  text-xs
                  text-white/70
                  transition-colors
                  group-hover:text-electricGlow
                  sm:text-sm
                ">
                  {tech}
                </span>

              </div>
            ))}

          </div>

          <div className="
            pointer-events-none
            absolute inset-y-0 left-0 z-10
            w-16
            bg-gradient-to-r
            from-ink via-ink/80 to-transparent
            sm:w-28
            lg:w-40
          " />

          <div className="
            pointer-events-none
            absolute inset-y-0 right-0 z-10
            w-16
            bg-gradient-to-l
            from-ink via-ink/80 to-transparent
            sm:w-28
            lg:w-40
          " />

        </div>
      </section>

      {/* =================================================
          WHAT I BUILD
      ================================================= */}

      <section className="
        mx-auto w-full
        max-w-[1700px]
        px-5 py-20
        sm:px-8 sm:py-24
        md:px-10
        lg:px-14 lg:py-28
        xl:px-20
        2xl:px-24
      ">

        <div className="
          section-heading mb-10
          sm:mb-14
        ">

          <p className="
            mb-3
            font-mono text-[10px]
            tracking-[0.25em]
            text-electricGlow
            sm:mb-4 sm:text-xs
          ">
            WHAT I DO
          </p>

          <div className="
            flex flex-col
            justify-between
            gap-4
            md:flex-row
            md:items-end
          ">

            <h2 className="
              font-display
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
              xl:text-6xl
            ">
              What I Build
            </h2>

            <p className="
              max-w-md
              text-xs
              leading-relaxed
              text-white/40
              sm:text-sm
            ">
              From frontend interfaces to backend architecture,
              I build complete digital experiences.
            </p>

          </div>

        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            sm:gap-5
          "
          style={{
            perspective: "1200px",
          }}
        >

          {BUILD_ITEMS.map((item) => (
            <div
              key={item.n}
              className="
                build-card
                group relative
                min-h-[215px]
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-panel/50
                p-6
                backdrop-blur-xl
                transition-colors duration-500
                hover:border-electric/40
                sm:min-h-[230px]
                sm:p-7
              "
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              style={{
                transformStyle: "preserve-3d",
              }}
            >

              <div className="
                pointer-events-none
                absolute -right-20 -top-20
                h-40 w-40
                rounded-full
                bg-electric/10
                opacity-0
                blur-3xl
                transition-opacity
                duration-500
                group-hover:opacity-100
              " />

              <div className="
                flex items-center justify-between
              ">

                <span className="
                  font-mono
                  text-xs
                  text-white/30
                ">
                  {item.n}
                </span>

                <div className="
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  p-3
                  transition-all
                  duration-500
                  group-hover:border-electric/30
                  group-hover:bg-electric/10
                ">

                  <item.icon
                    size={19}
                    className="
                      text-electric
                      transition-all
                      duration-500
                      group-hover:scale-125
                      group-hover:rotate-12
                    "
                  />

                </div>

              </div>

              <div className="
                relative z-10 mt-8
                sm:mt-10
              ">

                <h3 className="
                  font-display
                  text-lg
                  font-semibold
                  text-white
                  sm:text-xl
                ">
                  {item.title}
                </h3>

                <p className="
                  mt-3
                  max-w-sm
                  text-xs
                  leading-relaxed
                  text-white/40
                  sm:text-sm
                ">
                  {item.description}
                </p>

              </div>

              <div className="
                absolute
                bottom-0 left-0
                h-px w-0
                bg-electric
                shadow-[0_0_15px_rgba(0,255,255,1)]
                transition-all
                duration-700
                group-hover:w-full
              " />

              <ArrowUpRight
                size={18}
                className="
                  absolute
                  bottom-6 right-6
                  text-white/20
                  transition-all
                  duration-500
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-electric
                "
              />

            </div>
          ))}

        </div>
      </section>

      {/* =================================================
          STATS
      ================================================= */}

      <section className="
        mx-auto w-full
        max-w-[1700px]
        px-5 py-10
        sm:px-8 sm:py-16
        md:px-10
        lg:px-14 lg:py-20
        xl:px-20
        2xl:px-24
      ">

        <div className="
          stats-box
          relative overflow-hidden
          rounded-3xl
          border border-white/10
          bg-panel/40
          p-6
          backdrop-blur-xl
          sm:p-10
          lg:p-12
        ">

          <div className="
            pointer-events-none
            absolute left-1/2 top-0
            h-40 w-[70%]
            -translate-x-1/2
            rounded-full
            bg-electric/[0.05]
            blur-[80px]
          " />

          <div className="
            relative
            grid grid-cols-2
            gap-8
            sm:grid-cols-4
            sm:gap-10
          ">

            <AnimatedCounter
              value={10}
              suffix="+"
              label="Projects Built"
            />

            <AnimatedCounter
              value={14}
              suffix="+"
              label="Technologies"
            />

            <AnimatedCounter
              value={2}
              suffix="+"
              label="Years Learning & Building"
            />

            <AnimatedCounter
              value="∞"
              label="Curiosity"
            />

          </div>

        </div>
      </section>

      {/* =================================================
          FEATURED WORK
      ================================================= */}

      <section className="
        mx-auto w-full
        max-w-[1700px]
        px-5 py-20
        sm:px-8 sm:py-24
        md:px-10
        lg:px-14 lg:py-28
        xl:px-20
        2xl:px-24
      ">

        <div className="
          section-heading
          mb-9
          flex items-end
          justify-between
          sm:mb-12
        ">

          <div>

            <p className="
              mb-3
              font-mono
              text-[10px]
              tracking-[0.25em]
              text-electricGlow
              sm:mb-4 sm:text-xs
            ">
              SELECTED PROJECT
            </p>

            <h2 className="
              font-display
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
              xl:text-6xl
            ">
              Featured Work
            </h2>

          </div>

          <Link
            to="/projects"
            className="
              hidden
              items-center gap-1
              text-sm
              text-electricGlow
              transition-transform
              duration-300
              hover:translate-x-1
              hover:underline
              sm:inline-flex
            "
          >
            All projects
            <ArrowUpRight size={14} />
          </Link>

        </div>

        <ProjectCard
          featured
          title="PakCartify"
          image={pakCartifyImg}
          description="A modern full-stack e-commerce application designed to provide a complete online shopping experience — from browsing to checkout to admin management."
          tech={[
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Cloudinary",
          ]}
          github="https://github.com/FahadAhmad06/PakCartifyFrontend"
        />

        <div className="
          mt-8 text-center sm:hidden
        ">

          <Link
            to="/projects"
            className="
              inline-flex
              items-center gap-2
              text-sm
              text-electricGlow
            "
          >
            View all projects
            <ArrowUpRight size={14} />
          </Link>

        </div>

      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="
        mx-auto w-full
        max-w-[1700px]
        px-5 pb-20
        sm:px-8 sm:pb-24
        md:px-10
        lg:px-14 lg:pb-32
        xl:px-20
        2xl:px-24
      ">

        <div className="
          relative
          overflow-hidden
          rounded-[1.5rem]
          border border-electric/15
          bg-panel/40
          px-5 py-12
          text-center
          backdrop-blur-xl
          sm:rounded-[2rem]
          sm:px-10 sm:py-16
          lg:px-12
        ">

          <div className="
            pointer-events-none
            absolute left-1/2 top-1/2
            h-[250px] w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-electric/[0.06]
            blur-[100px]
            sm:h-[300px]
            sm:w-[500px]
          " />

          <div
            className="
              pointer-events-none
              absolute inset-0
              opacity-[0.035]
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="relative z-10">

            <p className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-electricGlow
              sm:text-xs
              sm:tracking-[0.3em]
            ">
              HAVE AN IDEA?
            </p>

            <h2 className="
              mx-auto mt-4
              max-w-3xl
              font-display
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:mt-5
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            ">

              Let's build something

              <span className="text-electricGlow">
                {" "}great.
              </span>

            </h2>

            <p className="
              mx-auto mt-5
              max-w-xl
              text-xs
              leading-relaxed
              text-white/40
              sm:mt-6
              sm:text-sm
              md:text-base
            ">
              Whether it's a web application, e-commerce
              platform, API or mobile experience — I'm always
              interested in building something meaningful.
            </p>

            <div className="mt-7 flex justify-center sm:mt-9">

              <MagneticButton
                as={Link}
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-electric
                  px-6 py-3.5
                  text-xs
                  font-semibold
                  text-white
                  shadow-glow
                  transition-all
                  duration-300
                  hover:scale-105
                  sm:px-8 sm:py-4
                  sm:text-sm
                "
              >

                Start a Conversation

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />

              </MagneticButton>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}