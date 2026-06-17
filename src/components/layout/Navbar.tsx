"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);

  // Hide/show navbar on scroll direction
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setHasScrolled(currentScrollY > 20);

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      // Scrolling down – hide
      setIsVisible(false);
    } else {
      // Scrolling up – show
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            hasScrolled
              ? "bg-[rgba(124,58,237,0.75)] backdrop-blur-2xl shadow-lg shadow-black/20"
              : "bg-[rgba(124,58,237,0.15)] backdrop-blur-2xl"
          }
        `}
        style={{
          borderBottom: "1px solid rgba(34, 211, 238, 0.15)",
          boxShadow: hasScrolled
            ? "0 1px 20px rgba(34, 211, 238, 0.08), 0 4px 24px rgba(0,0,0,0.2)"
            : "0 1px 12px rgba(34, 211, 238, 0.05)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="relative text-xl font-bold tracking-tight text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-white to-[#888888] bg-clip-text text-transparent font-extrabold">
              algorithm
            </span>
            <span className="text-white/85 font-light">
              {' '}cities
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {item.label}

                  {/* Hover underline – scales from center */}
                  <span
                    className="absolute bottom-0 left-1/2 h-[2px] w-3/4 -translate-x-1/2 origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#38BDF8] transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />

                  {/* Active indicator */}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#38BDF8]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <motion.button
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden overflow-hidden"
          >
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-[rgba(124,58,237,0.95)] backdrop-blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/60 via-transparent to-[#22D3EE]/10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,211,238,0.12)_0%,_transparent_60%)] pointer-events-none" />

            <motion.ul
              className="relative flex h-full flex-col items-center justify-center gap-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.4 },
                    },
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group relative text-3xl font-semibold transition-colors ${
                      activeSection === item.href
                        ? "bg-gradient-to-r from-white to-[#22D3EE] bg-clip-text text-transparent"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {/* Mobile hover underline */}
                    <span className="absolute -bottom-1 left-1/2 h-[2px] w-3/4 -translate-x-1/2 origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#38BDF8] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
