import { useRef } from "react";
import gsap from "gsap";
import { Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ title, description, tech, github, demo, image, featured }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  const handleMove = (e) => {
    if (window.innerWidth < 768) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      x: (x - centerX) * 0.03,
      y: (y - centerY) * 0.03,
      duration: 0.6,
      ease: "power2.out",
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 1,
        x: x - 120,
        y: y - 120,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.6)",
    });
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
    });
    if (glowRef.current) {
      gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
    }
  };

  return (
    <div
      ref={cardRef}
      data-cursor="view"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-panel/50 transition-[border-color,box-shadow] duration-500 hover:border-electric/40 hover:shadow-glow will-change-transform ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* CURSOR-FOLLOW GLOW */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute z-10 h-60 w-60 rounded-full bg-electric/[0.12] opacity-0 blur-3xl"
      />

      <div className="relative h-64 overflow-hidden md:h-80" style={{ transform: "translateZ(20px)" }}>
        <div
          ref={imageRef}
          className="h-[108%] w-[108%] -translate-x-[4%] -translate-y-[4%] scale-100 bg-gradient-to-br from-electricDeep/40 via-graphite to-ink transition-transform duration-700 ease-out group-hover:scale-110"
          style={image ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

        {/* CORNER ACCENTS ON THE IMAGE */}
        <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-electric/0 transition-all duration-500 group-hover:border-electric/70" />
        <span className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-electric/0 transition-all duration-500 group-hover:border-electric/70" />
      </div>

      <div className="relative p-7 md:p-9" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{title}</h3>
          <ArrowUpRight
            className="mt-1 shrink-0 text-electric transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45"
            size={22}
          />
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist md:text-base">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={t}
              style={{ transitionDelay: `${i * 40}ms` }}
              className="translate-y-0 rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-medium text-electricGlow transition-all duration-300 group-hover:border-electric/50 group-hover:-translate-y-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-electric hover:text-electricGlow hover:shadow-glowSm"
            >
              <Github size={16} /> Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-glow"
            >
              Live Demo <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>

      {/* SUBTLE BORDER GLOW SWEEP ON HOVER */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 shadow-[inset_0_0_60px_rgba(0,255,255,0.08)] transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}