import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Send,
  Globe2,
} from "lucide-react";

import ContactForm from "../components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  {
    icon: Github,
    title: "GitHub",
    text: "https://github.com/FahadAhmad06",
    href: "https://github.com/FahadAhmad06",
    accent: "group-hover:text-white",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    text: "https://www.linkedin.com/in/fahad0621",
    href: "https://www.linkedin.com/in/fahad0621",
    accent: "group-hover:text-blue-400",
  },
  {
    icon: Mail,
    title: "Email",
    text: "fahadahmad0621@gmail.com",
    href: "mailto:fahadahmad0621@gmail.com",
    accent: "group-hover:text-electricGlow",
  },
];

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() > 0.75 ? 3 : 2,
  delay: Math.random() * 2,
}));

export default function Contact() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const orbRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         PAGE INTRO
      ========================================= */

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .fromTo(
          ".contact-label",
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
          ".contact-title",
          {
            opacity: 0,
            y: 70,
            scale: 0.92,
            filter: "blur(16px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
          },
          "-=0.45"
        )
        .fromTo(
          ".contact-description",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .fromTo(
          ".contact-status",
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.45"
        )
        .fromTo(
          ".contact-orb",
          {
            opacity: 0,
            scale: 0.4,
            rotateY: -40,
            rotateX: 20,
          },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            duration: 1.5,
            ease: "elastic.out(1,0.6)",
          },
          "-=0.9"
        );

      /* =========================================
         SOCIAL CARDS
      ========================================= */

      gsap.fromTo(
        ".social-card",
        {
          opacity: 0,
          x: -40,
          rotateY: -15,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".social-list",
            start: "top 82%",
          },
        }
      );

      /* =========================================
         FORM
      ========================================= */

      gsap.fromTo(
        ".contact-form-wrap",
        {
          opacity: 0,
          y: 70,
          scale: 0.95,
          rotateX: 8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".contact-form-wrap",
            start: "top 85%",
          },
        }
      );

      /* =========================================
         FLOATING ORB
      ========================================= */

      gsap.to(orbRef.current, {
        y: -18,
        rotateZ: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         ORBIT RINGS
      ========================================= */

      gsap.to(".contact-ring-one", {
        rotate: 360,
        duration: 14,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".contact-ring-two", {
        rotate: -360,
        duration: 19,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".contact-ring-three", {
        rotate: 360,
        duration: 27,
        repeat: -1,
        ease: "none",
      });

      /* =========================================
         CORE
      ========================================= */

      gsap.to(".contact-core", {
        scale: 1.18,
        opacity: 0.8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         PARTICLES
      ========================================= */

      gsap.utils.toArray(".contact-particle").forEach((particle, i) => {
        gsap.to(particle, {
          x: i % 2 === 0 ? 30 : -30,
          y: i % 3 === 0 ? -35 : 35,
          opacity: 0.25,
          duration: 2.5 + (i % 5) * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.05,
        });
      });

      /* =========================================
         BACKGROUND GLOWS
      ========================================= */

      gsap.to(".contact-glow-one", {
        x: 120,
        y: 60,
        scale: 1.2,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-glow-two", {
        x: -100,
        y: -80,
        scale: 1.15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         MAGNETIC ICON
      ========================================= */

      gsap.to(".send-icon", {
        x: 4,
        y: -4,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* =========================================
     MOUSE 3D
  ========================================= */

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x =
        (e.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 2;

      /* ORB */

      gsap.to(orbRef.current, {
        rotateY: x * 14,
        rotateX: -y * 14,
        x: x * 15,
        y: y * 15,
        duration: 0.8,
        ease: "power3.out",
      });

      /* RINGS */

      gsap.to(".contact-ring-one", {
        x: x * 18,
        y: y * 18,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(".contact-ring-two", {
        x: x * -13,
        y: y * -13,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(".contact-ring-three", {
        x: x * 8,
        y: y * 8,
        duration: 1.4,
        ease: "power3.out",
      });

      /* SPOTLIGHT */

      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.7,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  /* =========================================
     SOCIAL 3D TILT
  ========================================= */

  const handleSocialMove = (e) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY =
      ((x - rect.width / 2) / (rect.width / 2)) * 7;

    const rotateX =
      ((y - rect.height / 2) / (rect.height / 2)) * -7;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.025,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleSocialLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1,0.5)",
    });
  };

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen w-full overflow-hidden bg-ink"
    >
      {/* =========================================
          MOUSE SPOTLIGHT
      ========================================= */}

      <div
        ref={spotlightRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.035] blur-[100px] lg:block"
      />

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="contact-glow-one absolute left-[-15%] top-[10%] h-[450px] w-[450px] rounded-full bg-electric/10 blur-[140px]" />

        <div className="contact-glow-two absolute right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]" />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.035]"
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
              "radial-gradient(circle at 50% 30%, rgba(0,255,255,.06), transparent 38%)",
          }}
        />

        {/* PARTICLES */}

        {PARTICLES.map((particle) => (
          <span
            key={particle.id}
            className="contact-particle absolute rounded-full bg-electric"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: 0.5,
              boxShadow:
                "0 0 12px rgba(0,255,255,.8)",
            }}
          />
        ))}
      </div>

      {/* =========================================
          MAIN
      ========================================= */}

      <main className="relative z-10 mx-auto max-w-[1700px] px-6 pb-32 pt-32 sm:px-10 lg:px-16 xl:px-24">
        {/* =========================================
            HERO
        ========================================= */}

        <section
          ref={heroRef}
          className="grid min-h-[650px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_.95fr]"
        >
          {/* LEFT */}

          <div>
            {/* LABEL */}

            <div className="contact-label mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-electric shadow-[0_0_12px_rgba(0,255,255,.8)]" />

              <p className="font-mono text-xs tracking-[0.3em] text-electricGlow">
                GET IN TOUCH
              </p>
            </div>

            {/* TITLE */}

            <h1 className="contact-title max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[90px]">
              Let's Build
              <span className="mt-3 block text-electricGlow">
                Something Great.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="contact-description mt-8 max-w-2xl text-base leading-relaxed text-mist sm:text-lg lg:text-xl">
              Have an idea, project, internship opportunity,
              or something interesting to build? Send me a
              message and let's turn the idea into something
              real.
            </p>

            {/* STATUS */}

            <div className="contact-status mt-8 inline-flex items-center gap-3 rounded-full border border-electric/20 bg-electric/[0.04] px-5 py-3 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-electric shadow-[0_0_15px_rgba(0,255,255,1)]" />
              </span>

              <span className="font-mono text-xs text-white/60">
                Available for exciting projects
              </span>
            </div>

            {/* SMALL INFO */}

            <div className="mt-10 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 backdrop-blur-xl">
                <MessageCircle
                  size={14}
                  className="text-electric"
                />

                <span className="font-mono text-xs text-white/50">
                  Let's Talk
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 backdrop-blur-xl">
                <Globe2
                  size={14}
                  className="text-purple-400"
                />

                <span className="font-mono text-xs text-white/50">
                  Remote Friendly
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 backdrop-blur-xl">
                <Sparkles
                  size={14}
                  className="text-cyan-300"
                />

                <span className="font-mono text-xs text-white/50">
                  Open to Ideas
                </span>
              </div>
            </div>
          </div>

          {/* =========================================
              3D ORB
          ========================================= */}

          <div className="contact-orb relative flex h-[430px] items-center justify-center [perspective:1200px] sm:h-[520px]">
            {/* BIG GLOW */}

            <div className="absolute h-[65%] w-[65%] rounded-full bg-electric/10 blur-[100px]" />

            {/* CORE */}

            <div className="contact-core absolute h-[45%] w-[45%] rounded-full bg-electric/[0.08] blur-[60px]" />

            {/* OUTER RING */}

            <div className="contact-ring-three absolute h-[85%] w-[85%] rounded-full border border-white/[0.04] [transform:rotateX(65deg)_rotateY(20deg)]" />

            {/* PURPLE RING */}

            <div className="contact-ring-two absolute h-[72%] w-[72%] rounded-full border border-purple-400/15 [transform:rotateX(30deg)_rotateY(65deg)]" />

            {/* DASHED RING */}

            <div className="contact-ring-one absolute h-[60%] w-[60%] rounded-full border border-dashed border-cyan-400/20 [transform:rotateY(65deg)_rotateX(15deg)]" />

            {/* INNER RING */}

            <div className="absolute h-[48%] w-[48%] rounded-full border border-electric/30 shadow-[0_0_50px_rgba(0,255,255,.08)]" />

            {/* ORB */}

            <div
              ref={orbRef}
              className="relative flex h-48 w-48 items-center justify-center rounded-full border border-electric/40 bg-black/50 shadow-[0_0_100px_rgba(0,255,255,.18)] [transform-style:preserve-3d] sm:h-60 sm:w-60"
            >
              {/* INNER */}

              <div className="absolute inset-5 rounded-full border border-white/10 bg-electric/[0.025] backdrop-blur-xl" />

              <div className="absolute inset-10 rounded-full border border-electric/20" />

              {/* ICON */}

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-electric/30 bg-electric/10 shadow-[0_0_40px_rgba(0,255,255,.15)]">
                <Send
                  size={34}
                  className="send-icon text-electricGlow"
                />
              </div>

              {/* SHINE */}

              <div className="absolute left-[15%] top-[10%] h-[25%] w-[35%] rotate-[-35deg] rounded-full bg-white/10 blur-xl" />
            </div>

            {/* ORBIT DOTS */}

            <span className="absolute right-[10%] top-[25%] h-3 w-3 rounded-full bg-electric shadow-[0_0_25px_rgba(0,255,255,1)] animate-pulse" />

            <span className="absolute bottom-[18%] left-[12%] h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,1)] animate-pulse" />

            <span className="absolute left-[18%] top-[20%] h-2 w-2 rounded-full bg-cyan-300 animate-ping" />

            <span className="absolute bottom-[28%] right-[18%] h-2 w-2 rounded-full bg-electric animate-ping" />

            {/* ORB LABEL */}

            <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-5 py-2.5 backdrop-blur-xl">
                <Sparkles
                  size={13}
                  className="text-electric"
                />

                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Let's create something
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CONTACT CONTENT
        ========================================= */}

        <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[.8fr_1.2fr]">
          {/* =========================================
              LEFT CONTACT
          ========================================= */}

          <div>
            <div className="mb-7">
              <p className="font-mono text-xs tracking-[0.3em] text-electricGlow">
                CONNECT
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                Find Me Online.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-white/40 sm:text-base">
              Whether you want to discuss a project,
              collaborate on an idea, or simply say hello,
              you can reach me through any of these channels.
            </p>

            {/* SOCIAL LIST */}

            <div className="social-list mt-8 space-y-4 [perspective:1200px]">
              {SOCIALS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.title}
                    href={social.href}
                    target={
                      social.title === "Email"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.title === "Email"
                        ? undefined
                        : "noreferrer"
                    }
                    onMouseMove={handleSocialMove}
                    onMouseLeave={handleSocialLeave}
                    className="social-card group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-panel/40 p-5 backdrop-blur-xl transition-colors duration-500 hover:border-electric/30"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* GLOW */}

                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-electric/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex items-center gap-4">
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-500 group-hover:scale-110 group-hover:border-electric/30 group-hover:bg-electric/10">
                        <Icon
                          size={20}
                          className={`text-white/60 transition-colors duration-300 ${social.accent}`}
                        />
                      </div>

                      <div>
                        <p className="font-display text-sm font-semibold text-white">
                          {social.title}
                        </p>

                        <p className="mt-1 font-mono text-xs text-white/35">
                          {social.text}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="relative z-10 text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric"
                    />

                    {/* BOTTOM LINE */}

                    <div className="absolute bottom-0 left-0 h-px w-0 bg-electric shadow-[0_0_15px_rgba(0,255,255,1)] transition-all duration-700 group-hover:w-full" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =========================================
              FORM
          ========================================= */}

          <div
            className="contact-form-wrap relative"
            style={{
              perspective: "1200px",
            }}
          >
            {/* FORM GLOW */}

            <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-electric/[0.045] blur-[70px]" />

            {/* FORM BORDER */}

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel/50 p-1 backdrop-blur-2xl">
              {/* TOP GLOW */}

              <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-electric to-transparent opacity-60" />

              {/* FORM HEADER */}

              <div className="relative px-6 pb-3 pt-7 sm:px-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-electricGlow">
                      MESSAGE
                    </p>

                    <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                      Start a Conversation
                    </h2>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-electric/20 bg-electric/5 sm:flex">
                    <Mail
                      size={18}
                      className="text-electric"
                    />
                  </div>
                </div>
              </div>

              {/* EXISTING FORM */}

              <div className="relative p-4 sm:p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <section className="mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-electric/15 bg-panel/30 px-6 py-14 text-center backdrop-blur-xl sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.05] blur-[90px]" />

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />

            <div className="relative z-10">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-electricGlow">
                ONE MESSAGE AWAY
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Have something interesting
                <span className="text-electricGlow">
                  {" "}in mind?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/40">
                Don't overthink it. Send the message and
                let's see what we can build together.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}