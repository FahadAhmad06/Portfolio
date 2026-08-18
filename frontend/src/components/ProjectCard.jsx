import { Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ title, description, tech, github, demo, image, featured }) {
  return (
    <div
      data-cursor="view"
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-panel/50 transition-all duration-500 hover:border-electric/40 hover:shadow-glow ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative h-64 overflow-hidden md:h-80">
        <div
          className="h-full w-full scale-100 bg-gradient-to-br from-electricDeep/40 via-graphite to-ink transition-transform duration-700 ease-out group-hover:scale-110"
          style={image ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      </div>

      <div className="p-7 md:p-9">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{title}</h3>
          <ArrowUpRight className="mt-1 shrink-0 text-electric transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist md:text-base">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-medium text-electricGlow transition-colors group-hover:border-electric/50"
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
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-colors hover:border-electric hover:text-electricGlow"
            >
              <Github size={16} /> Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Live Demo <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
