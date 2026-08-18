import { NavLink } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-obsidian/60 px-6 py-16 lg:px-10">
      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-electric/60 to-transparent" />
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-white">
            Fahad Ahmad<span className="text-electric">.</span>
          </p>
          <p className="mt-2 text-sm text-mist">Computer Science Student • Full-Stack Developer</p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-mist">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className="hover:text-electric transition-colors">
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a href="https://github.com/FahadAhmad06" target="_blank" rel="noreferrer" data-cursor="link" className="rounded-full border border-white/10 p-3 text-mist transition-all hover:border-electric hover:text-white hover:shadow-glowSm">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/fahad0621" target="_blank" rel="noreferrer" data-cursor="link" className="rounded-full border border-white/10 p-3 text-mist transition-all hover:border-electric hover:text-white hover:shadow-glowSm">
            <Linkedin size={18} />
          </a>
          <a href="mailto:fahadahmad8889@gmail.com" data-cursor="link" className="rounded-full border border-white/10 p-3 text-mist transition-all hover:border-electric hover:text-white hover:shadow-glowSm">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-7xl text-xs text-mist/70">
        © 2026 Fahad Ahmad. All rights reserved.
      </p>
    </footer>
  );
}
