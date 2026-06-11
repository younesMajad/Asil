"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (hash: string) => {
    const target = document.querySelector(hash);
    if (target) {
      (target as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", hash);
    }
  };

  const handleMobileNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setIsOpen(false);
    scrollToSection(href);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 py-6 md:py-8 transition-all duration-300 ${scrollY > 50 || isOpen
          ? "bg-obsidian/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-white/5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="h-10 w-10 rounded"
              loading="lazy"
            />
            <a
              href="/"
              className="font-serif text-xl font-semibold tracking-tight hidden sm:inline"
            >
              ASIL
            </a>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="nav-link text-sm uppercase tracking-[2px] text-stone hover:text-gold-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-accent group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* CTA & Mobile Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:block button-primary text-xs px-6 py-2"
          >
            Start Your Project
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-gold  transition-all"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Accordion Animation */}
      <nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-obsidian/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6 py-6">
                {navLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link.href)}
                    className="text-lg uppercase tracking-[2px] text-stone hover:text-gold-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleMobileNavClick(e, "#contact")}
                  className="button-primary text-sm px-6 py-2 mt-4"
                >
                  Start Your Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </nav>
  );
};

export default Navigation;
