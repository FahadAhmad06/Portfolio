import { useEffect, useRef, useState } from "react";
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
  Search,
  Copy,
  Check,
  ChevronDown,
  Volume2,
  VolumeX,
  Palette,
} from "lucide-react";

import MagneticButton from "../components/MagneticButton";
import boy from "../assets/projects/boy.png";
import cv from "../assets/CV/Fahad-Ahmad-CV.pdf";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   ACCENT COLOR MAP (Dynamic accent theme switcher support)
========================================================= */

const ACCENT_THEMES = {
  electric: {
    name: "Cyan",
    primary: "#00ffff",
    text: "text-electric",
    textGlow: "text-electricGlow",
    border: "border-electric/20",
    borderHover: "group-hover:border-electric/40",
    bg: "bg-electric/10",
    bgBtn: "bg-electric",
    glow: "bg-electric/10",
    line: "bg-electric",
    ring: "shadow-[0_0_15px_rgba(0,255,255,1)]",
  },
  purple: {
    name: "Purple",
    primary: "#a855f7",
    text: "text-purple-300",
    textGlow: "text-purple-300",
    border: "border-purple-400/20",
    borderHover: "group-hover:border-purple-400/40",
    bg: "bg-purple-400/10",
    bgBtn: "bg-purple-500",
    glow: "bg-purple-400/10",
    line: "bg-purple-400",
    ring: "shadow-[0_0_15px_rgba(168,85,247,0.8)]",
  },
  emerald: {
    name: "Emerald",
    primary: "#34d399",
    text: "text-emerald-300",
    textGlow: "text-emerald-300",
    border: "border-emerald-400/20",
    borderHover: "group-hover:border-emerald-400/40",
    bg: "bg-emerald-400/10",
    bgBtn: "bg-emerald-500",
    glow: "bg-emerald-400/10",
    line: "bg-emerald-400",
    ring: "shadow-[0_0_15px_rgba(52,211,153,0.8)]",
  },
  amber: {
    name: "Amber",
    primary: "#fbbf24",
    text: "text-amber-300",
    textGlow: "text-amber-300",
    border: "border-amber-400/20",
    borderHover: "group-hover:border-amber-400/40",
    bg: "bg-amber-400/10",
    bgBtn: "bg-amber-500",
    glow: "bg-amber-400/10",
    line: "bg-amber-400",
    ring: "shadow-[0_0_15px_rgba(251,191,36,0.8)]",
  },
  blue: {
    name: "Blue",
    primary: "#60a5fa",
    text: "text-blue-300",
    textGlow: "text-blue-300",
    border: "border-blue-400/20",
    borderHover: "group-hover:border-blue-400/40",
    bg: "bg-blue-400/10",
    bgBtn: "bg-blue-500",
    glow: "bg-blue-400/10",
    line: "bg-blue-400",
    ring: "shadow-[0_0_15px_rgba(96,165,250,0.8)]",
  },
};

/* =========================================================
   MILESTONES
========================================================= */

const MILESTONES = [
  {
    year: "01",
    val: 1,
    title: "Programming Fundamentals",
    desc: "Learned programming fundamentals, logical thinking and problem solving using C++.",
    details: "Mastered memory allocation, data structures, algorithms, and core computational thinking logic.",
    icon: Code2,
  },
  {
    year: "02",
    val: 2,
    title: "Web Development",
    desc: "Started building websites and understanding how modern web applications work.",
    details: "Explored responsive HTML5/CSS3 structures, modern JavaScript ES6+, and client-server architectures.",
    icon: Globe,
  },
  {
    year: "03",
    val: 3,
    title: "React",
    desc: "Started developing modern interactive interfaces using React.js.",
    details: "Built single-page applications (SPAs) leveraging hooks, context API, state management, and reusable components.",
    icon: Sparkles,
  },
  {
    year: "04",
    val: 4,
    title: "Node.js",
    desc: "Moved into backend development and started creating REST APIs.",
    details: "Created secure Express servers, structured RESTful API endpoints, and middleware authentication.",
    icon: Terminal,
  },
  {
    year: "05",
    val: 5,
    title: "Full-Stack Development",
    desc: "Started connecting frontend, backend and databases into complete applications.",
    details: "Architected end-to-end applications connecting React interfaces to Express backends and MongoDB databases.",
    icon: Layers,
  },
  {
    year: "06",
    val: 6,
    title: "Flutter",
    desc: "Expanded into mobile application development with Flutter and Dart.",
    details: "Developed cross-platform Android & iOS applications focusing on clean state architecture and custom UI designs.",
    icon: Smartphone,
  },
  {
    year: "07",
    val: 7,
    title: "Real Projects",
    desc: "Built and worked on complete applications including PakCartify.",
    details: "Shipped enterprise-grade projects with payment integration, dark/light dynamic styling, and robust cloud media handling.",
    icon: Database,
  },
  {
    year: "08",
    val: 8,
    title: "Continuous Learning",
    desc: "Continuously building, experimenting, learning and improving.",
    details: "Currently experimenting with AI workflows, n8n automation, cloud architecture, and microservices.",
    icon: Brain,
    current: true,
  },
];

/* =========================================================
   SKILLS
========================================================= */

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Terminal,
    accent: "electric",
    items: ["C++", "Python", "JavaScript", "HTML", "CSS", "Kotlin", "Dart"],
  },
  {
    title: "Frontend",
    icon: Code2,
    accent: "blue",
    items: ["React.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "purple",
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "emerald",
    items: ["MongoDB", "SQL", "MSSQL", "Cloudinary", "Firebase"],
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    accent: "amber",
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
  size: Math.random() > 0.85 ? 4 : Math.random() > 0.5 ? 3 : 2,
}));

/* =========================================================
   SECTIONS FOR STICKY INDICATOR
========================================================= */

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "cta", label: "CTA" },
];

export default function Resume() {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const mouseGlow = useRef(null);
  const developerCard = useRef(null);
  const developerImgRef = useRef(null);
  const codeWinRef = useRef(null);

  // States
  const [activeTheme, setActiveTheme] = useState("electric");
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [expandedMilestones, setExpandedMilestones] = useState({});
  const [activeSection, setActiveSection] = useState("hero");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeRipples, setActiveRipples] = useState([]);

  // Audio synthesis helper for subtle UI micro-feedback
  const playSound = (type = "hover") => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "hover") {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        gain.gain.setValueAtTime(0.015, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else if (type === "click") {
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      }
    } catch (e) {
      // Audio context fallbacks
    }
  };

  /* =======================================================
     GSAP ANIMATIONS
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO TIMELINE */
      const hero = gsap.timeline({ defaults: { ease: "power4.out" } });

      hero
        .fromTo(
          ".resume-label",
          { opacity: 0, y: 40, filter: "blur(15px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }
        )
        .fromTo(
          ".resume-title",
          { opacity: 0, y: 100, scale: 0.82, rotateX: 30, filter: "blur(20px)" },
          { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)", duration: 1.25 },
          "-=0.45"
        )
        .fromTo(
          ".resume-subtitle",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".resume-download",
          { opacity: 0, x: 70, scale: 0.7, rotateY: 30 },
          { opacity: 1, x: 0, scale: 1, rotateY: 0, duration: 0.9, ease: "back.out(1.7)" },
          "-=0.5"
        )
        .fromTo(
          ".developer-showcase",
          { opacity: 0, x: 100, scale: 0.75, rotateY: -30, rotateX: 10, filter: "blur(15px)" },
          { opacity: 1, x: 0, scale: 1, rotateY: 0, rotateX: 0, filter: "blur(0px)", duration: 1.2, ease: "power4.out" },
          "-=0.9"
        );

      /* MINI STAT CARDS REVEAL */
      gsap.fromTo(
        ".resume-stat-card",
        { opacity: 0, y: 25, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, delay: 1.1, ease: "back.out(1.6)" }
      );

      /* FLOATING ORBS */
      gsap.to(".orb-1", { x: 130, y: 80, scale: 1.25, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-2", { x: -130, y: -90, scale: 1.2, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-3", { x: 100, y: -100, scale: 1.2, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });

      /* 3D OBJECTS */
      gsap.to(".floating-ring", { rotation: 360, duration: 14, repeat: -1, ease: "none" });
      gsap.to(".floating-cube", { rotationX: 360, rotationY: 360, rotationZ: 180, duration: 18, repeat: -1, ease: "none" });
      gsap.to(".floating-code", { y: -15, rotation: 3, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".floating-monitor", { y: 12, rotateY: 8, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });

      /* BACKGROUND PARTICLES */
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

      /* SCROLL REVEALS */
      gsap.utils.toArray(".scroll-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 100, scale: 0.88, rotateX: 18, filter: "blur(12px)" },
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

      /* EDUCATION */
      gsap.fromTo(
        ".education-card",
        { opacity: 0, y: 120, rotateX: 25, rotateY: -15, scale: 0.82 },
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

      /* SKILLS STAGGERED REVEAL */
      gsap.utils.toArray(".resume-skill-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, rotateX: 30, rotateY: i % 2 === 0 ? -18 : 18, scale: 0.78 },
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

      /* TIMELINE LINE & TRAVELING PULSE DOT */
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
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

        gsap.to(".timeline-pulse-dot", {
          top: "100%",
          duration: 4,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

      /* TIMELINE STEP NUMBER COUNT-UP & ITEMS */
      gsap.utils.toArray(".timeline-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: i % 2 === 0 ? -120 : 120, rotateY: i % 2 === 0 ? -20 : 20, rotateX: 15, scale: 0.8 },
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
              onEnter: () => {
                const counter = item.querySelector(".step-counter");
                if (counter) {
                  const target = MILESTONES[i].val;
                  gsap.to(
                    { val: 0 },
                    {
                      val: target,
                      duration: 1.2,
                      ease: "power2.out",
                      onUpdate: function () {
                        counter.innerText = `STEP 0${Math.ceil(this.targets()[0].val)}`;
                      },
                    }
                  );
                }
              },
            },
          }
        );
      });

      /* TIMELINE DOTS */
      gsap.utils.toArray(".timeline-dot").forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
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

      /* CTA */
      gsap.fromTo(
        ".resume-cta",
        { opacity: 0, y: 120, rotateX: 20, scale: 0.82 },
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

      /* BACKGROUND PARALLAX */
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

      /* DEVELOPER IMAGE FLOAT */
      gsap.to(".developer-image", { y: -12, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".developer-glow", { scale: 1.15, opacity: 0.8, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });

      /* SCROLL PROGRESS BAR */
      gsap.to(".resume-progress-bar", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });

      /* SECTION INDICATOR TRACKER */
      SECTIONS.forEach((sec) => {
        ScrollTrigger.create({
          trigger: `#${sec.id}`,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveSection(sec.id),
          onEnterBack: () => setActiveSection(sec.id),
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  /* =======================================================
     MOUSE GLOW (Large ambient glow only)
  ======================================================= */

  useEffect(() => {
    const move = (e) => {
      if (mouseGlow.current) {
        gsap.to(mouseGlow.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* =======================================================
     DEVELOPER 3D PARALLAX MOVE
  ======================================================= */

  const handleDeveloperMove = (e) => {
    if (!developerCard.current) return;
    const card = developerCard.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 16;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -16;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.04,
      duration: 0.35,
      ease: "power2.out",
    });

    if (developerImgRef.current) {
      gsap.to(developerImgRef.current, {
        x: ((x - rect.width / 2) / (rect.width / 2)) * -18,
        y: ((y - rect.height / 2) / (rect.height / 2)) * -14,
        duration: 0.35,
        ease: "power2.out",
      });
    }

    if (codeWinRef.current) {
      gsap.to(codeWinRef.current, {
        x: ((x - rect.width / 2) / (rect.width / 2)) * 25,
        y: ((y - rect.height / 2) / (rect.height / 2)) * 20,
        duration: 0.35,
        ease: "power2.out",
      });
    }
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

    if (developerImgRef.current) {
      gsap.to(developerImgRef.current, { x: 0, y: 0, duration: 0.7, ease: "power2.out" });
    }

    if (codeWinRef.current) {
      gsap.to(codeWinRef.current, { x: 0, y: 0, duration: 0.7, ease: "power2.out" });
    }
  };

  /* =======================================================
     SKILL CARD 3D TILT
  ======================================================= */

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 14;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -14;

    gsap.to(card, {
      rotateX,
      rotateY,
      y: -12,
      scale: 1.035,
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
     SKILL TAG RIPPLE CLICK INTERACTION
  ======================================================= */

  const triggerSkillRipple = (e, item) => {
    playSound("click");
    const rect = e.currentTarget.getBoundingClientRect();
    const rippleId = Math.random();

    setActiveRipples((prev) => [
      ...prev,
      {
        id: rippleId,
        item,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    ]);

    setTimeout(() => {
      setActiveRipples((prev) => prev.filter((r) => r.id !== rippleId));
    }, 600);
  };

  /* =======================================================
     CV DOWNLOAD CLICK HANDLER
  ======================================================= */

  const handleCvDownload = () => {
    playSound("click");
  };

  /* =======================================================
     SKILLS UTILITIES
  ======================================================= */

  const copySkillsToClipboard = () => {
    playSound("click");
    const allSkills = SKILL_GROUPS.flatMap((g) => g.items).join(", ");
    navigator.clipboard.writeText(allSkills);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMilestone = (title) => {
    playSound("click");
    setExpandedMilestones((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const cycleTheme = () => {
    playSound("click");
    const keys = Object.keys(ACCENT_THEMES);
    const nextIndex = (keys.indexOf(activeTheme) + 1) % keys.length;
    setActiveTheme(keys[nextIndex]);
  };

  const theme = ACCENT_THEMES[activeTheme];

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-ink text-white">
      {/* ===================================================
          SCROLL PROGRESS BAR
      =================================================== */}
      <div className="fixed left-0 top-0 z-[200] h-[3px] w-full bg-white/[0.03]">
        <div
          className="resume-progress-bar h-full bg-gradient-to-r from-electric via-cyan-300 to-purple-500 shadow-[0_0_10px_rgba(0,255,255,0.6)]"
          style={{ width: "0%" }}
        />
      </div>

      {/* ===================================================
          STICKY SECTION INDICATOR (DOT NAV)
      =================================================== */}
      <div className="fixed right-6 top-1/2 z-[150] hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {SECTIONS.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={() => playSound("click")}
            className="group relative flex items-center justify-end"
          >
            <span className="absolute right-7 rounded-md bg-black/80 px-2 py-1 font-mono text-[10px] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              {sec.label}
            </span>
            <span
              className={`h-3 w-3 rounded-full border border-white/30 transition-all duration-300 ${
                activeSection === sec.id
                  ? `${theme.bgBtn} scale-125 ${theme.ring}`
                  : "bg-white/10 hover:bg-white/40"
              }`}
            />
          </a>
        ))}
      </div>

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
            background: "radial-gradient(circle at 55% 15%, rgba(0,180,255,.11), transparent 34%)",
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
          style={{ transformStyle: "preserve-3d", perspective: "800px" }}
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
      <section id="hero" className="relative mx-auto max-w-7xl px-6 pb-28 pt-32 lg:px-10 lg:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          {/* LEFT */}
          <div>
            <div className="resume-label flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-electric via-cyan-300 to-transparent shadow-[0_0_12px_rgba(0,255,255,.8)]" />
              <p className="font-mono text-xs tracking-[0.35em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-semibold">
                RESUME / JOURNEY
              </p>
            </div>

            <h1
              className="resume-title mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-7xl lg:text-[6.5rem]"
              style={{ perspective: "1200px" }}
            >
              My{" "}
              <span className="bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                Journey
              </span>
              <span className="block mt-2 bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,255,255,.35)]">
                So Far.
              </span>
            </h1>

            <p className="resume-subtitle mt-8 max-w-2xl text-base leading-relaxed text-mist/90 sm:text-lg">
              A continuous journey of learning, building and turning ideas into real digital experiences.
            </p>

            <div className="resume-download mt-9">
              <MagneticButton
                as="a"
                href={cv}
                download="Fahad-Ahmad-CV.pdf"
                onClick={handleCvDownload}
                onMouseEnter={() => playSound("hover")}
                className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full ${theme.bgBtn} px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 hover:scale-105`}
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative">Download CV</span>
                <Download size={17} className="relative transition-transform duration-500 group-hover:-translate-y-1" />
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
                  onMouseEnter={() => playSound("hover")}
                  className="resume-stat-card rounded-2xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-300 hover:border-electric/30 hover:bg-electric/[0.04]"
                >
                  <p className="font-mono text-[10px] bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent font-semibold">
                    {number}
                  </p>
                  <p className="mt-2 text-xs text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DEVELOPER 3D SHOWCASE */}
          <div className="developer-showcase relative mx-auto w-full max-w-[560px]" style={{ perspective: "1400px" }}>
            <div
              ref={developerCard}
              onMouseMove={handleDeveloperMove}
              onMouseLeave={handleDeveloperLeave}
              className="relative aspect-square overflow-hidden rounded-[3rem] border border-electric/20 bg-gradient-to-br from-blue-500/[0.08] via-panel/40 to-purple-500/[0.05] shadow-[0_0_80px_rgba(0,200,255,.08)] backdrop-blur-xl"
              style={{ transformStyle: "preserve-3d" }}
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

              {/* IMAGE */}
              <img
                ref={developerImgRef}
                src={boy}
                alt="3D developer working on laptop"
                className="developer-image absolute bottom-[-2%] left-1/2 z-20 h-[95%] w-[95%] -translate-x-1/2 object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,.5)] transition-transform ease-out"
                draggable="false"
              />

              {/* TOP LABEL */}
              <div className="absolute left-6 top-6 z-30 flex items-center gap-2 rounded-full border border-electric/20 bg-black/30 px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-electric shadow-[0_0_12px_rgba(0,255,255,1)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent font-semibold">
                  Developer Mode
                </span>
              </div>

              {/* CODE WINDOW */}
              <div
                ref={codeWinRef}
                className="absolute right-5 top-20 z-30 hidden w-40 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl transition-transform ease-out sm:block"
                style={{ transform: "translateZ(80px) rotateY(-8deg)" }}
              >
                <div className="mb-3 flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/50" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                  <span className="h-2 w-2 rounded-full bg-green-400/50" />
                </div>
                <div className="space-y-1.5 font-mono text-[8px]">
                  <p className="text-blue-300/70">const developer</p>
                  <p className="text-electric/70"> = "Fahad";</p>
                  <p className="text-purple-300/70">build();</p>
                  <p className="text-white/30">{"// keep learning"}</p>
                </div>
              </div>

              {/* FLOATING ICONS */}
              <div
                className="absolute bottom-12 left-6 z-30 rounded-2xl border border-electric/20 bg-black/30 p-3 backdrop-blur-xl"
                style={{ transform: "translateZ(90px) rotateY(10deg)" }}
              >
                <Braces size={24} className="text-electric" />
              </div>

              <div
                className="absolute bottom-8 right-7 z-30 rounded-2xl border border-blue-400/20 bg-black/30 p-3 backdrop-blur-xl"
                style={{ transform: "translateZ(100px) rotateY(-10deg)" }}
              >
                <Cpu size={25} className="text-blue-400" />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[3rem] border border-white/5" />
            </div>

            <div className="absolute -bottom-8 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-electric/10 blur-3xl" />
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-gradient-to-r from-electric/50 via-cyan-300/30 to-transparent" />
      </section>

      {/* ===================================================
          EDUCATION
      =================================================== */}
      <section id="education" className="scroll-reveal mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className="education-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel/40 p-8 backdrop-blur-xl sm:p-10"
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-electric/10 blur-[90px] transition-transform duration-1000 group-hover:scale-150" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-electric/[0.04] via-transparent to-blue-500/[0.03]" />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-electric/30 bg-electric/10 text-electricGlow shadow-glowSm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
              <GraduationCap size={35} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.25em] bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent font-semibold">
                  Education
                </p>
                <span className="rounded-full border border-electric/20 bg-electric/5 px-3 py-1 font-mono text-[10px] text-electricGlow">
                  CURRENT
                </span>
              </div>

              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">BS Computer Science</h2>
              <p className="mt-2 text-sm text-mist sm:text-base">University of Veterinary & Animal Sciences</p>
              <p className="mt-2 font-mono text-xs text-white/30">Computer Science • Undergraduate</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-electric via-cyan-300 to-transparent shadow-[0_0_20px_rgba(0,255,255,1)] transition-all duration-1000 group-hover:w-full" />
        </div>
      </section>

      {/* ===================================================
          SKILLS
      =================================================== */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="scroll-reveal">
          <p className="font-mono text-xs tracking-[0.3em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-semibold">
            TECHNICAL SKILLS
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Tools I Work{" "}
              <span className="bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                With.
              </span>
            </h2>

            {/* SEARCH AND COPY BUTTON CONTROLS */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex items-center">
                <Search size={16} className="absolute left-3.5 text-white/40" />
                <input
                  type="text"
                  placeholder="Filter skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-full border border-white/10 bg-white/[0.04] py-2.5 pl-9 pr-4 text-xs text-white outline-none backdrop-blur-md transition-all placeholder:text-white/30 focus:border-electric/50 focus:bg-white/[0.08]"
                />
              </div>

              <button
                onClick={copySkillsToClipboard}
                onMouseEnter={() => playSound("hover")}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 font-mono text-xs text-white/80 transition-all hover:border-electric/40 hover:bg-electric/10"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Copied!" : "Copy All"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1500px" }}>
          {SKILL_GROUPS.map((group, index) => {
            const Icon = group.icon;
            const groupAccent = ACCENT_THEMES[group.accent] || ACCENT_THEMES.electric;

            return (
              <div
                key={group.title}
                className={`resume-skill-card group relative min-h-[250px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-panel/40 p-7 backdrop-blur-xl transition-colors duration-500 ${groupAccent.borderHover}`}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                onMouseEnter={() => playSound("hover")}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full ${groupAccent.glow} opacity-0 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100`}
                />

                <div className="relative flex items-center justify-between">
                  <div className={`rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-500 ${groupAccent.borderHover} ${groupAccent.bgHover}`}>
                    <Icon size={22} className={`${groupAccent.text} transition-all duration-500 group-hover:rotate-12 group-hover:scale-125`} />
                  </div>
                  <span className="font-mono text-5xl font-bold text-white/[0.035]">0{index + 1}</span>
                </div>

                <h3 className="relative mt-8 font-display text-xl font-semibold text-white">{group.title}</h3>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const matchesSearch = searchQuery === "" || item.toLowerCase().includes(searchQuery.toLowerCase());
                    const ripplesForItem = activeRipples.filter((r) => r.item === item);

                    return (
                      <span
                        key={item}
                        onClick={(e) => triggerSkillRipple(e, item)}
                        onMouseEnter={() => playSound("hover")}
                        className={`relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none ${groupAccent.borderHover} ${groupAccent.bgHover} ${
                          matchesSearch
                            ? "opacity-100 scale-100 shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                            : "opacity-25 scale-95"
                        }`}
                      >
                        {item}

                        {/* RIPPLE EFFECT WAVE */}
                        {ripplesForItem.map((r) => (
                          <span
                            key={r.id}
                            className="pointer-events-none absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/40 animate-ping opacity-75"
                            style={{ left: r.x, top: r.y }}
                          />
                        ))}
                      </span>
                    );
                  })}
                </div>

                <div className={`absolute bottom-0 left-0 h-px w-0 ${groupAccent.line} ${groupAccent.ring} transition-all duration-700 group-hover:w-full`} />
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================
          JOURNEY
      =================================================== */}
      <section id="journey" className="mx-auto max-w-6xl px-6 pb-32 lg:px-10">
        <div className="scroll-reveal text-center">
          <p className="font-mono text-xs tracking-[0.3em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-semibold">
            DEVELOPER JOURNEY
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl">
            From Learning <span className="mx-2 bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent">→</span> Building.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/40">
            Every project, technology and challenge has been another step forward.
          </p>
        </div>

        <div className="timeline-wrap relative mt-24" style={{ perspective: "1500px" }}>
          <div className="absolute left-[18px] top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-gradient-to-b from-electric via-cyan-300 to-purple-500 shadow-[0_0_18px_rgba(0,255,255,.6)]"
            />
            {/* CONTINUOUS PULSE DOT */}
            <div className="timeline-pulse-dot absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-electric shadow-[0_0_15px_rgba(0,255,255,1)]" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {MILESTONES.map((milestone, index) => {
              const Icon = milestone.icon;
              const left = index % 2 === 0;
              const isExpanded = !!expandedMilestones[milestone.title];

              return (
                <div
                  key={milestone.title}
                  className={`timeline-item relative pl-14 md:flex md:w-full md:items-center ${
                    left ? "md:justify-start" : "md:justify-end"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={`timeline-dot absolute left-[11px] top-7 z-20 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-ink md:left-1/2 md:-translate-x-1/2 ${
                      milestone.current
                        ? "border-emerald-400 shadow-[0_0_25px_rgba(52,211,153,.9)]"
                        : "border-electric shadow-[0_0_25px_rgba(0,255,255,.9)]"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 animate-pulse rounded-full ${
                        milestone.current ? "bg-emerald-400" : "bg-electric"
                      }`}
                    />
                  </div>

                  <div
                    onClick={() => toggleMilestone(milestone.title)}
                    onMouseEnter={() => playSound("hover")}
                    className={`group relative w-full cursor-pointer overflow-hidden rounded-[1.7rem] border bg-panel/40 p-7 backdrop-blur-xl transition-all duration-500 md:w-[44%] ${
                      left ? "md:mr-auto" : "md:ml-auto"
                    } ${
                      milestone.current
                        ? "border-emerald-400/30 hover:border-emerald-400/50"
                        : "border-white/10 hover:border-electric/40"
                    }`}
                  >
                    {milestone.current && (
                      <span className="absolute right-6 top-6 z-20 flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        Now
                      </span>
                    )}

                    <div className="absolute right-6 top-3 font-mono text-6xl font-bold text-white/[0.025] transition-transform duration-700 group-hover:scale-110">
                      {milestone.year}
                    </div>

                    <div
                      className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100 ${
                        milestone.current ? "bg-emerald-400/10" : "bg-electric/10"
                      }`}
                    />

                    <div className="relative flex items-start gap-4">
                      <div
                        className={`shrink-0 rounded-xl border p-3 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                          milestone.current
                            ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                            : "border-electric/20 bg-electric/10 text-electric"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="pr-6">
                        {/* ANIMATED COUNT-UP TARGET */}
                        <p
                          className={`step-counter font-mono text-[10px] uppercase tracking-[0.25em] ${
                            milestone.current
                              ? "text-emerald-300"
                              : "bg-gradient-to-r from-electric to-cyan-300 bg-clip-text text-transparent font-semibold"
                          }`}
                        >
                          STEP 00
                        </p>

                        <h3 className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                          {milestone.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-white/40">{milestone.desc}</p>

                        {/* EXPANDABLE EXTRA DETAILS */}
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            isExpanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden border-t border-white/10 pt-3 text-xs leading-relaxed text-white/70">
                            {milestone.details}
                          </div>
                        </div>
                      </div>

                      <ChevronDown
                        size={16}
                        className={`absolute bottom-1 right-1 text-white/30 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-electric" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full ${
                        milestone.current
                          ? "bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)]"
                          : "bg-gradient-to-r from-electric via-cyan-300 to-transparent shadow-[0_0_15px_rgba(0,255,255,1)]"
                      }`}
                    />
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
      <section id="cta" className="mx-auto max-w-7xl px-6 pb-36 lg:px-10">
        <div className="resume-cta group relative overflow-hidden rounded-[2.5rem] border border-electric/15 bg-panel/40 px-7 py-20 text-center backdrop-blur-xl sm:px-12 transition-transform duration-500 hover:scale-[1.01]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.06] blur-[120px] transition-transform duration-700 group-hover:scale-125" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <Cpu className="pointer-events-none absolute left-[8%] top-[20%] hidden h-16 w-16 text-electric/10 lg:block animate-bounce" />
          <Zap className="pointer-events-none absolute bottom-[15%] right-[10%] hidden h-14 w-14 text-blue-400/10 lg:block animate-pulse" />

          <div className="relative z-10">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-2">
              <CircleDot size={13} className="animate-pulse text-electric" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] bg-gradient-to-r from-electric via-cyan-300 to-electric bg-clip-text text-transparent font-bold">
                Always Learning
              </span>
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The journey is{" "}
              <span className="bg-gradient-to-r from-electric via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                just beginning.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/40 sm:text-base">
              I'm always exploring new technologies, building better projects and looking for opportunities to turn ideas into meaningful products.
            </p>

            <div className="mt-10 flex justify-center">
              <MagneticButton
                as="a"
                href={cv}
                download="Fahad-Ahmad-CV.pdf"
                onClick={handleCvDownload}
                onMouseEnter={() => playSound("hover")}
                className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full ${theme.bgBtn} px-9 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 hover:scale-110`}
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative">Get My CV</span>
                <ArrowUpRight size={17} className="relative transition-transform duration-500 group-hover:rotate-45" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}