"use client";

import { motion } from "framer-motion";
import { cinematicEase, fadeInUp, lineReveal } from "../lib/cinematicEase";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-obsidian text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none pt-24 md:pt-32">
      {/* Structural Architectural Grid Overlay with Draw-in Animations */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 h-full w-full px-6 md:p-12">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.8, ease: cinematicEase as any }}
          className="border-l border-white/5 h-full w-full origin-top"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.8, delay: 0.15, ease: cinematicEase as any }}
          className="border-l border-white/5 h-full w-full origin-top"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: cinematicEase as any }}
          className="border-l border-white/5 h-full w-full origin-top"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.8, delay: 0.45, ease: cinematicEase as any }}
          className="border-l border-r border-white/5 h-full w-full origin-top"
        />
      </div>

      {/* Top Navigation Label (Subtle) */}
      <div className="z-10 hidden md:flex justify-between items-baseline w-full font-sans tracking-architect uppercase text-xs text-smoke">
        <span className="font-serif text-white text-lg tracking-normal normal-case font-semibold">
          ASIL
        </span>
        <span>Architecture in Motion ©2026</span>
      </div>

      {/* Hero Core Content */}
      <div className="z-10 max-w-5xl my-auto pt-12 pb-12">
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, ease: cinematicEase as any }}
            className="font-serif text-4xl sm:text-6xl md:text-8xl font-light tracking-tight leading-[0.95] md:leading-[0.9]"
          >
            Architecture <br />
            <span className="italic text-gold-accent font-normal">
              in Motion
            </span>
          </motion.h1>
        </div>

        <motion.div
          variants={lineReveal as any}
          initial="initial"
          animate="animate"
          className="h-px bg-linear-to-r from-gold-accent/40 via-white/10 to-transparent w-full origin-left my-8"
        />

        <motion.p
          variants={fadeInUp as any}
          initial="initial"
          animate="animate"
          className="font-sans text-stone/80 text-base md:text-xl max-w-2xl font-light leading-relaxed tracking-wide"
        >
          We create AI-powered construction content that transforms physical
          masterworks into unforgettable cinematic stories. From concept to
          completion, we elevate your architectural vision.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          variants={fadeInUp as any}
          initial="initial"
          animate="animate"
          className="flex flex-wrap gap-4 md:gap-6 mt-12 font-sans text-xs uppercase tracking-cinematic"
        >
          <a href="#contact" className="button-primary text-center">Start a Project</a>
          <a href="#portfolio" className="button-secondary text-center">View Our Work</a>
        </motion.div>
      </div>

      {/* Footer Baseline Lat/Long Indicators */}
      <div className="z-10 flex justify-between items-end w-full text-[10px] md:text-xs font-mono text-graphite tracking-widest uppercase">
        <span className="hidden md:block">
          AI-Studio // [24.4539° N, 54.3773° E]
        </span>
        <span className="ml-auto">Scroll to Explore</span>
      </div>
    </section>
  );
}
