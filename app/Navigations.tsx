"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "./lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "About us", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Inside Header — track active section
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const updateActiveSection = (entries: IntersectionObserverEntry[]) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length) {
        setActiveSection(visible[0].target.id);
      }
    };

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: "-35% 0px -55% 0px",
      threshold: [0.2, 0.45, 0.7],
    });

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl  border-b border-white/10",
        scrolled
          ? "bg-charcoal/10 backdrop-blur-lg border-b border-graphite/10 py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-2xl tracking-[0.3em] text-white uppercase"
          aria-label="ASIL — Home"
        >
          <span className="font-serif text-white text-[30px] tracking-normal normal-case font-semibold">
            ASIL
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-[0.18em] text-stone transition-all duration-300 border-b-2 border-transparent hover:text-white hover:border-gold-accent",
                activeSection === link.href.slice(1) &&
                  "text-white border-gold-accent",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="button-primary py-2.5 px-6 text-xs">
            Start a Project
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden relative z-50 flex flex-col gap-1.5 rounded-lg bg-white/10 p-3 ring-1 ring-white/10 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-gold-accent"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={cn(
              "block h-px w-6 bg-white transition-all duration-300",
              menuOpen && "translate-y-1.5 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-white transition-all duration-300",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-white transition-all duration-300",
              menuOpen && "-translate-y-1.5 -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={cn(
          "md:hidden z-40 fixed flex flex-col justify-center items-center gap-8 bg-black px-70 py-24 text-center backdrop-blur-xl transition-all duration-500",
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4",
        )}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-heading text-3xl uppercase tracking-[0.25em] text-white transition hover:text-amber-200 "
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Link
          href="#contact"
          className="button-primary mt-4 px-8 py-3 text-sm"
          onClick={() => setMenuOpen(false)}
        >
          Start a Project
        </Link>
      </nav>
    </header>
  );
}
