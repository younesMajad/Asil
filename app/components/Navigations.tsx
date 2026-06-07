"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);



  const navLinks = [
    {name : "Home" , href: "#"},
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    {name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 py-8 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between border-b-2 border-slate-200/10 dark:border-white/10">
        <div
          ref={logoRef}
          className="text-3xl font-bold tracking-tighter cursor-pointer text-slate-900 dark:text-white"
        >
          YOUNES<span className="text-teal-400">.</span>
        </div>
        {/* Desktop Links */}
        <div ref={linksRef} className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="nav-link text-sm uppercase tracking-[3px] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-teal-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}

        <div className="flex items-center gap-4">


          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu with Animation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-200/10 dark:border-white/10">
          <div className="flex flex-col items-center py-12 gap-10 text-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-teal-400 transition-all"
              >
                {link.name}
              </a>
            ))}

            <button className="mt-6 px-12 py-5 border border-teal-400 rounded-full text-lg">
              LET'S TALK
            </button>
          </div>
      
        </div>
      )}
    </nav>
  );
};
export default Navigation;