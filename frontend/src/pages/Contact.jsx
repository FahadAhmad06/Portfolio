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
  Box,
  Layers,
  Cpu,
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

export default function Contact() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const orbRef = useRef(null);
  const crystalRef = useRef(null);
  const spotlightRef = useRef(null);
  const canvasRef = useRef(null);

  /* =========================================
      CANVAS DYNAMIC PARTICLES SYSTEM
  ========================================= */
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

    let mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

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

        // Draw connections
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
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  /* =========================================
      GSAP ADVANCED TIMELINES
  ========================================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // INTRO ANIMATIONS
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

      intro
        .fromTo(
          ".contact-label",
          { opacity: 0, y: 30, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }
        )
        .fromTo(
          ".contact-title",
          { opacity: 0, y: 80, scale: 0.88, filter: "blur(20px)", rotateX: 25 },
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", rotateX: 0, duration: 1.3 },
          "-=0.4"
        )
        .fromTo(
          ".contact-description",
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".contact-status",
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(2)" },
          "-=0.4"
        )
        .fromTo(
          ".contact-orb",
          { opacity: 0, scale: 0.3, rotateY: -60, rotateX: 30 },
          { opacity: 1, scale: 1, rotateY: 0, rotateX: 0, duration: 1.6, ease: "elastic.out(1, 0.5)" },
          "-=1"
        );

      // CONTINUOUS 3D GEOMETRY ROTATION
      gsap.to(crystalRef.current, {
        rotateX: 360,
        rotateY: 720,
        rotateZ: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // REVEALS ON SCROLL
      gsap.fromTo(
        ".social-card",
        { opacity: 0, x: -60, rotateY: -25, scale: 0.85 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".social-list",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".contact-form-wrap",
        { opacity: 0, y: 90, scale: 0.9, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".contact-form-wrap",
            start: "top 85%",
          },
        }
      );

      // FLOATING SINE MOTION
      gsap.to(orbRef.current, {
        y: -24,
        rotateZ: 8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-ring-one", { rotate: 360, duration: 12, repeat: -1, ease: "none" });
      gsap.to(".contact-ring-two", { rotate: -360, duration: 18, repeat: -1, ease: "none" });
      gsap.to(".contact-ring-three", { rotate: 360, duration: 26, repeat: -1, ease: "none" });

      // PROGRESS BAR SCROLL
      gsap.to(".contact-progress-bar", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* =========================================
      MOUSE 3D PARALLAX EFFECT
  ========================================= */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(orbRef.current, {
        rotateY: x * 20,
        rotateX: -y * 20,
        x: x * 22,
        y: y * 22,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(".contact-ring-one", { x: x * 25, y: y * 25, duration: 1, ease: "power3.out" });
      gsap.to(".contact-ring-two", { x: x * -20, y: y * -20, duration: 1.2, ease: "power3.out" });
      gsap.to(".contact-ring-three", { x: x * 15, y: y * 15, duration: 1.4, ease: "power3.out" });

      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* =========================================
      CARD 3D TILT EFFECT
  ========================================= */
  const handleSocialMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -12;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.04,
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
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen w-full overflow-hidden bg-ink text-white selection:bg-electric selection:text-black"
    >
      {/* SCROLL PROGRESS */}
      <div className="fixed left-0 top-0 z-[200] h-[3px] w-full bg-white/[0.03]">
        <div
          className="contact-progress-bar h-full bg-gradient-to-r from-electric via-cyan-300 to-purple-500 shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          style={{ width: "0%" }}
        />
      </div>

      {/* DYNAMIC CANVAS BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
      />

      {/* MOUSE SPOTLIGHT */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.04] blur-[110px] lg:block"
      />

      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="contact-glow-one absolute left-[-15%] top-[10%] h-[550px] w-[550px] rounded-full bg-electric/10 blur-[160px]" />
        <div className="contact-glow-two absolute right-[-15%] top-[25%] h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <main className="relative z-10 mx-auto max-w-[1700px] px-6 pb-32 pt-32 sm:px-10 lg:px-16 xl:px-24">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="grid min-h-[680px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_.95fr]"
        >
          {/* LEFT CONTENT */}
          <div>
            <div className="contact-label mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-electric via-cyan-300 to-transparent shadow-[0_0_12px_rgba(0,255,255,.8)]" />
              <p className="font-mono text-xs tracking-[0.35em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-bold">
                GET IN TOUCH
              </p>
            </div>

            <h1 className="contact-title max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[92px]">
              Let's Build{" "}
              <span className="mt-3 block bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,255,255,.4)]">
                Something Great.
              </span>
            </h1>

            <p className="contact-description mt-8 max-w-2xl text-base leading-relaxed text-mist sm:text-lg lg:text-xl">
              Have an idea, project, internship opportunity, or something
              extraordinary to build? Send me a message and let's transform it
              into a high-performance digital experience.
            </p>

            <div className="contact-status mt-8 inline-flex items-center gap-3 rounded-full border border-electric/30 bg-electric/[0.05] px-5 py-3 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.1)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-electric shadow-[0_0_15px_rgba(0,255,255,1)]" />
              </span>
              <span className="font-mono text-xs bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent font-semibold">
                Available for exciting projects & roles
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl hover:border-electric/30 transition-colors">
                <MessageCircle size={14} className="text-electric" />
                <span className="font-mono text-xs text-white/70">Let's Talk</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl hover:border-purple-400/30 transition-colors">
                <Globe2 size={14} className="text-purple-400" />
                <span className="font-mono text-xs text-white/70">Remote Friendly</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl hover:border-cyan-300/30 transition-colors">
                <Sparkles size={14} className="text-cyan-300" />
                <span className="font-mono text-xs text-white/70">Open to Ideas</span>
              </div>
            </div>
          </div>

          {/* 3D HOLOGRAPHIC ORB & GEOMETRY */}
          <div className="contact-orb relative flex h-[450px] items-center justify-center [perspective:1200px] sm:h-[540px]">
            <div className="absolute h-[68%] w-[68%] rounded-full bg-electric/10 blur-[110px]" />
            <div className="contact-core absolute h-[48%] w-[48%] rounded-full bg-electric/[0.08] blur-[70px]" />

            <div className="contact-ring-three absolute h-[88%] w-[88%] rounded-full border border-white/[0.05] [transform:rotateX(65deg)_rotateY(20deg)]" />
            <div className="contact-ring-two absolute h-[75%] w-[75%] rounded-full border border-purple-400/20 [transform:rotateX(30deg)_rotateY(65deg)]" />
            <div className="contact-ring-one absolute h-[62%] w-[62%] rounded-full border border-dashed border-cyan-400/25 [transform:rotateY(65deg)_rotateX(15deg)]" />

            {/* CONTINUOUS 3D GEOMETRIC CRYSTAL */}
            <div
              ref={crystalRef}
              className="pointer-events-none absolute h-80 w-80 rounded-[3rem] border border-electric/30 bg-electric/[0.02] backdrop-blur-[2px] shadow-[0_0_80px_rgba(0,255,255,0.08)]"
              style={{ transformStyle: "preserve-3d" }}
            />

            {/* CENTER ORB */}
            <div
              ref={orbRef}
              className="relative flex h-52 w-52 items-center justify-center rounded-full border border-electric/50 bg-black/60 shadow-[0_0_120px_rgba(0,255,255,.25)] [transform-style:preserve-3d] sm:h-64 sm:w-64"
            >
              <div className="absolute inset-5 rounded-full border border-white/10 bg-electric/[0.03] backdrop-blur-xl" />
              <div className="absolute inset-10 rounded-full border border-electric/30" />

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-electric/40 bg-electric/15 shadow-[0_0_50px_rgba(0,255,255,.25)]">
                <Send size={36} className="send-icon text-electricGlow" />
              </div>

              <div className="absolute left-[15%] top-[10%] h-[25%] w-[35%] rotate-[-35deg] rounded-full bg-white/15 blur-xl" />
            </div>

            {/* ORBIT DOTS */}
            <span className="absolute right-[8%] top-[22%] h-3.5 w-3.5 rounded-full bg-electric shadow-[0_0_30px_rgba(0,255,255,1)] animate-pulse" />
            <span className="absolute bottom-[16%] left-[10%] h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_30px_rgba(168,85,247,1)] animate-pulse" />
            <span className="absolute left-[16%] top-[18%] h-2.5 w-2.5 rounded-full bg-cyan-300 animate-ping" />
            <span className="absolute bottom-[26%] right-[16%] h-2.5 w-2.5 rounded-full bg-electric animate-ping" />

            {/* ORB LABEL */}
            <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-5 py-2.5 backdrop-blur-xl shadow-lg">
                <Sparkles size={14} className="text-electric" />
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-bold">
                  Let's create something
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS & FORM SECTION */}
        <section className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[.8fr_1.2fr]">
          {/* SOCIAL LINKS */}
          <div>
            <div className="mb-7">
              <p className="font-mono text-xs tracking-[0.3em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-bold">
                CONNECT
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                Find Me{" "}
                <span className="bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                  Online.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
              Whether you want to discuss a project, collaborate on an idea, or
              simply say hello, feel free to reach out across any platform.
            </p>

            <div className="social-list mt-8 space-y-4 [perspective:1200px]">
              {SOCIALS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.title}
                    href={social.href}
                    target={social.title === "Email" ? undefined : "_blank"}
                    rel={social.title === "Email" ? undefined : "noreferrer"}
                    onMouseMove={handleSocialMove}
                    onMouseLeave={handleSocialLeave}
                    className="social-card group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-panel/40 p-5 backdrop-blur-xl transition-all duration-500 hover:border-electric/40 shadow-lg"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-electric/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex items-center gap-4">
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition-all duration-500 group-hover:scale-110 group-hover:border-electric/40 group-hover:bg-electric/15">
                        <Icon
                          size={22}
                          className={`text-white/70 transition-colors duration-300 ${social.accent}`}
                        />
                      </div>

                      <div>
                        <p className="font-display text-sm font-bold text-white">
                          {social.title}
                        </p>
                        <p className="mt-1 font-mono text-xs text-white/40">
                          {social.text}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="relative z-10 text-white/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric"
                    />

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-electric via-cyan-300 to-purple-500 shadow-[0_0_15px_rgba(0,255,255,1)] transition-all duration-700 group-hover:w-full" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* CONTACT FORM CONTAINER */}
          <div
            className="contact-form-wrap relative"
            style={{ perspective: "1200px" }}
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-electric/[0.05] blur-[80px]" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-panel/50 p-1 backdrop-blur-2xl shadow-2xl">
              <div className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-electric via-cyan-300 to-transparent opacity-80" />

              <div className="relative px-6 pb-3 pt-7 sm:px-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-bold">
                      MESSAGE
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold text-white">
                      Start a Conversation
                    </h2>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 sm:flex">
                    <Mail size={20} className="text-electric" />
                  </div>
                </div>
              </div>

              <div className="relative p-4 sm:p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="mt-28">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-electric/20 bg-panel/30 px-6 py-16 text-center backdrop-blur-xl sm:px-10 shadow-2xl">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.06] blur-[100px]" />

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />

            <div className="relative z-10">
              <p className="font-mono text-xs uppercase tracking-[0.35em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-bold">
                ONE MESSAGE AWAY
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Have something interesting{" "}
                <span className="bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                  in mind?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/50">
                Don't overthink it. Send the message and let's see what we can build together.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}