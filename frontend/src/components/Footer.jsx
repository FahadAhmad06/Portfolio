import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://github.com/FahadAhmad06", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/fahad0621", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:fahadahmad8889@gmail.com", label: "Email", icon: Mail },
];

const MARQUEE_ITEMS = [
  "LET'S BUILD SOMETHING",
  "AVAILABLE FOR WORK",
  "FULL-STACK DEVELOPER",
  "OPEN TO OPPORTUNITIES",
];

const FOOTER_PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() > 0.7 ? 3 : 2,
  opacity: Math.random() * 0.5 + 0.15,
}));

export default function Footer() {
  const footerRef = useRef(null);
  const marqueeRef = useRef(null);
  const spotlightRef = useRef(null);
  const socialRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* TOP LINE DRAW-IN */
      gsap.fromTo(
        ".footer-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 95%" },
        }
      );

      /* CONTENT FADE-UP */
      gsap.fromTo(
        ".footer-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 88%" },
        }
      );

      /* MARQUEE STRIP REVEAL + INFINITE SCROLL */
      gsap.fromTo(
        ".footer-marquee-wrap",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 95%" },
        }
      );

      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      /* AMBIENT GLOW DRIFT */
      gsap.to(".footer-glow", {
        x: 60,
        y: -30,
        scale: 1.15,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* FLOATING PARTICLES */
      gsap.utils.toArray(".footer-particle").forEach((p, i) => {
        gsap.to(p, {
          x: i % 2 === 0 ? 30 : -30,
          y: i % 3 === 0 ? -25 : 25,
          opacity: 0.15,
          duration: 3 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15,
        });
      });

      /* AVAILABILITY DOT PULSE HALO */
      gsap.to(".status-halo", {
        scale: 2.4,
        opacity: 0,
        duration: 1.8,
        repeat: -1,
        ease: "power1.out",
      });

      /* BRAND SPARKLE - gentle float + rotate */
      gsap.to(".brand-sparkle", {
        y: -4,
        rotate: 20,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  /* MOUSE SPOTLIGHT WITHIN FOOTER */
  const handleFooterMove = (e) => {
    if (window.innerWidth < 768) return;
    const rect = footerRef.current.getBoundingClientRect();
    if (spotlightRef.current) {
      gsap.to(spotlightRef.current, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  /* MAGNETIC SOCIAL ICONS */
  const handleSocialMove = (e, index) => {
    if (window.innerWidth < 768) return;
    const el = socialRefs.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleSocialLeave = (index) => {
    const el = socialRefs.current[index];
    if (!el) return;
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleFooterMove}
      className="relative overflow-hidden border-t border-white/10 bg-obsidian/60 px-6 py-16 lg:px-10"
    >
      {/* MOUSE-FOLLOW SPOTLIGHT */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute left-0 top-0 z-0 hidden h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.05] blur-[100px] md:block"
      />

      {/* AMBIENT BACKGROUND GLOW + PARTICLES */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="footer-glow absolute -left-[10%] top-[-20%] h-[280px] w-[280px] rounded-full bg-electric/[0.08] blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {FOOTER_PARTICLES.map((p) => (
          <span
            key={p.id}
            className="footer-particle absolute rounded-full bg-electric"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 3}px rgba(0,255,255,0.6)`,
            }}
          />
        ))}
      </div>

      {/* TOP GLOWING LINE */}
      <div className="footer-line relative mx-auto h-px w-full max-w-7xl origin-left bg-gradient-to-r from-transparent via-electric/60 to-transparent" />

      {/* MARQUEE STRIP */}
      <div className="footer-marquee-wrap relative mx-auto mt-10 max-w-7xl overflow-hidden opacity-0">
        <div ref={marqueeRef} className="flex w-max items-center gap-6 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/25">{item}</span>
              <span className="h-1 w-1 rounded-full bg-electric/50" />
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-obsidian to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-obsidian to-transparent" />
      </div>

      <div className="relative mx-auto mt-12 flex max-w-7xl flex-col gap-12 md:flex-row md:justify-between">
        {/* BRAND + STATUS */}
        <div className="footer-reveal">
          <p className="flex items-center gap-2 font-display text-2xl font-semibold text-white">
            Fahad Ahmad<span className="text-electric">.</span>
            <Sparkles size={16} className="brand-sparkle text-electric/70" />
          </p>
          <p className="mt-2 text-sm text-mist">Computer Science Student • Full-Stack Developer</p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/[0.06] px-3 py-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="status-halo absolute inline-block h-2 w-2 rounded-full bg-electric" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-electric" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
              Available for opportunities
            </span>
          </div>
        </div>

        {/* NAV LINKS */}
        <ul className="footer-reveal flex flex-wrap gap-x-8 gap-y-3 text-sm text-mist">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className="group relative inline-block py-1 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-electric shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* SOCIALS - magnetic hover */}
        <div className="footer-reveal flex gap-4">
          {SOCIALS.map(({ href, label, icon: Icon }, index) => (
            <a
              key={label}
              ref={(el) => (socialRefs.current[index] = el)}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              data-cursor="link"
              aria-label={label}
              onMouseMove={(e) => handleSocialMove(e, index)}
              onMouseLeave={() => handleSocialLeave(index)}
              className="group relative rounded-full border border-white/10 p-3 text-mist transition-colors duration-300 hover:border-electric hover:text-white hover:shadow-[0_0_25px_rgba(0,255,255,0.35)]"
            >
              <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="footer-reveal relative mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
        <p className="text-xs text-mist/70">
          © 2026 Fahad Ahmad. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          data-cursor="link"
          className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-mist/70 transition-all duration-300 hover:border-electric/60 hover:text-electric hover:shadow-[0_0_20px_rgba(0,255,255,0.25)]"
        >
          Back to top
          <ArrowUp size={13} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}