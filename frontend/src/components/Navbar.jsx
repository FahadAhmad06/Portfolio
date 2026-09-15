import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navRef = useRef(null);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const iconRef = useRef(null);
  const logoRef = useRef(null);

  const location = useLocation();

  /* =========================================================
     SCROLL - bar state + progress bar
  ========================================================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================================================
     NAVBAR INTRO
  ========================================================= */

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
      }
    );
  }, []);

  /* =========================================================
     MENU ICON MORPH (menu <-> close)
  ========================================================= */

  useEffect(() => {
    if (!iconRef.current) return;
    gsap.fromTo(
      iconRef.current,
      { rotate: -90, opacity: 0, scale: 0.6 },
      { rotate: 0, opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" }
    );
  }, [open]);

  /* =========================================================
     MENU OPEN / CLOSE ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!menuRef.current) return;

    const menu = menuRef.current;

    // Kill previous animations so fast clicking doesn't break it
    gsap.killTweensOf(menu);
    gsap.killTweensOf(itemsRef.current);

    if (open) {
      // Lock page scroll
      document.body.style.overflow = "hidden";

      // Enable menu interaction
      menu.style.pointerEvents = "auto";

      // Starting state
      gsap.set(menu, {
        clipPath: "circle(0% at 100% 0%)",
        opacity: 1,
      });

      gsap.set(itemsRef.current, {
        y: 60,
        opacity: 0,
      });

      // Open menu
      const tl = gsap.timeline();

      tl.to(menu, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });

      // Menu links
      tl.to(
        itemsRef.current,
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.35"
      );

      // Ambient glow drift while open
      gsap.to(".mobile-menu-glow", {
        x: 30,
        y: -20,
        scale: 1.1,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    } else {
      // CLOSE MENU
      gsap.killTweensOf(".mobile-menu-glow");

      const tl = gsap.timeline({
        onComplete: () => {
          // Disable interaction only after animation finishes
          menu.style.pointerEvents = "none";

          // Reset menu
          gsap.set(menu, {
            clipPath: "circle(0% at 100% 0%)",
            opacity: 0,
          });

          // Restore body scroll
          document.body.style.overflow = "";
        },
      });

      // Hide links first
      tl.to(itemsRef.current, {
        y: 30,
        opacity: 0,
        stagger: 0.04,
        duration: 0.25,
        ease: "power2.in",
      });

      // Close circular menu
      tl.to(
        menu,
        {
          clipPath: "circle(0% at 100% 0%)",
          duration: 0.65,
          ease: "power4.inOut",
        },
        "-=0.05"
      );
    }

    return () => {
      gsap.killTweensOf(menu);
      gsap.killTweensOf(itemsRef.current);
      gsap.killTweensOf(".mobile-menu-glow");
    };
  }, [open]);

  /* =========================================================
     ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    // If user clicks a menu link,
    // close the mobile menu.
    if (open) {
      setOpen(false);
    }
  }, [location.pathname]);

  /* =========================================================
     CLEANUP BODY SCROLL
  ========================================================= */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* =========================================================
     LOGO HOVER TILT
  ========================================================= */

  const handleLogoMove = (e) => {
    if (window.innerWidth < 768) return;
    const rect = logoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(logoRef.current, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLogoLeave = () => {
    gsap.to(logoRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
  };

  /* =========================================================
     HANDLE MENU LINK
  ========================================================= */

  const handleMenuLinkClick = () => {
    setOpen(false);
  };

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        ref={navRef}
        className={`
          fixed
          left-0
          right-0
          top-0
          z-[60]
          transition-all
          duration-500
          ${scrolled
            ? "glass py-3"
            : "bg-transparent py-6"
          }
        `}
      >
        <nav
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-6
            lg:px-10
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center transition-opacity duration-300 hover:opacity-90"
          >
            <img
              ref={logoRef}
              onMouseMove={handleLogoMove}
              onMouseLeave={handleLogoLeave}
              src="/logo.png"
              alt="Fahad Ahmad"
              className="h-12 w-auto object-contain will-change-transform"
            />
          </NavLink>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <li
                key={link.to}
                className="relative"
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `
                    group
                    relative
                    inline-block
                    text-sm
                    font-medium
                    tracking-wide
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    ${isActive
                      ? "text-white"
                      : "text-mist hover:text-white"
                    }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}

                      <span
                        className={`
                          absolute
                          -bottom-1.5
                          left-0
                          h-px
                          bg-gradient-to-r
                          from-electric
                          to-cyan-300
                          shadow-[0_0_8px_rgba(0,255,255,0.7)]
                          transition-all
                          duration-300
                          ${isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <NavLink
            to="/contact"
            className="
              group
              hidden
              items-center
              gap-1.5
              rounded-full
              border
              border-electric/40
              bg-electric/10
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-electric
              hover:shadow-glowSm
              md:inline-flex
            "
          >
            Let's Talk

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            />
          </NavLink>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="
              relative
              z-[70]
              flex
              items-center
              justify-center
              rounded-full
              p-2
              text-white
              transition-all
              duration-300
              hover:bg-white/10
              md:hidden
            "
          >
            <span ref={iconRef} className="block">
              {open ? (
                <X size={27} />
              ) : (
                <Menu size={27} />
              )}
            </span>
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE FULLSCREEN MENU
      ===================================================== */}

      <div
        ref={menuRef}
        className="
          fixed
          inset-0
          z-[50]
          overflow-hidden
          bg-ink
          md:hidden
        "
        style={{
          clipPath: "circle(0% at 100% 0%)",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        {/* =================================================
            BACKGROUND GRID
        ================================================= */}

        <div
          className="
            grid-bg
            pointer-events-none
            absolute
            inset-0
            opacity-40
          "
        />

        {/* =================================================
            AMBIENT GLOWS - single color, drifting
        ================================================= */}

        <div
          className="
            mobile-menu-glow
            pointer-events-none
            absolute
            -right-32
            top-10
            h-80
            w-80
            rounded-full
            bg-electric/10
            blur-[100px]
          "
        />

        <div
          className="
            mobile-menu-glow
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-80
            w-80
            rounded-full
            bg-electric/[0.07]
            blur-[100px]
          "
        />

        {/* =================================================
            MENU CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            h-full
            w-full
            flex-col
            justify-center
            px-10
          "
        >
          {/* Small heading */}

          <div className="mb-8">
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-electricGlow
              "
            >
              Navigation
            </span>

            <div
              className="
                mt-3
                h-px
                w-12
                bg-electric
              "
            />
          </div>

          {/* =================================================
              LINKS
          ================================================= */}

          <ul className="flex flex-col gap-5">
            {LINKS.map((link, i) => (
              <li
                key={link.to}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                className="overflow-hidden"
              >
                <NavLink
                  to={link.to}
                  onClick={handleMenuLinkClick}
                  className={({ isActive }) =>
                    `
                    group
                    inline-flex
                    items-center
                    gap-3
                    font-display
                    text-4xl
                    font-semibold
                    transition-all
                    duration-300
                    sm:text-5xl
                    ${isActive
                      ? "text-electricGlow"
                      : "text-white hover:text-electric hover:translate-x-1.5"
                    }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`
                          h-2
                          w-2
                          rounded-full
                          transition-all
                          duration-300
                          ${isActive
                            ? "scale-100 bg-electric shadow-[0_0_15px_rgba(0,255,255,1)]"
                            : "scale-0 bg-electric group-hover:scale-100"
                          }
                        `}
                      />

                      {link.label}

                      <ArrowUpRight
                        size={22}
                        className="
                          opacity-0
                          -translate-x-2
                          transition-all
                          duration-300
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* =================================================
              BOTTOM INFO
          ================================================= */}

          <div
            className="
              absolute
              bottom-8
              left-10
              right-10
              flex
              items-center
              justify-between
              border-t
              border-white/10
              pt-5
            "
          >
            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/30
              "
            >
              Fahad Ahmad
            </span>

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-electric/60
              "
            >
              Full-Stack Developer
            </span>
          </div>
        </div>
      </div>
    </>
  );
}