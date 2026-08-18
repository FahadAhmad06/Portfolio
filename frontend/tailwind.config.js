/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070C",
        obsidian: "#0A0E17",
        panel: "#0F1420",
        graphite: "#1B2130",
        mist: "#8A93A6",
        paper: "#F5F7FB",
        electric: "#3B82F6",
        electricDeep: "#1D4ED8",
        electricGlow: "#60A5FA",
      },
      fontFamily: {
        display: ["'Clash Display'", "'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(59,130,246,0.55)",
        glowSm: "0 0 25px -5px rgba(59,130,246,0.5)",
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.35 },
          "50%": { opacity: 0.7 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
