'use client'

import { motion } from 'framer-motion'
import { cinematicEase, fadeInUp, lineReveal } from '../lib/cinematicEase'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-obsidian text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none">
      {/* Structural Architectural Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 h-full w-full px-6 md:p-12">
        <div className="border-l border-white/5 h-full w-full" />
        <div className="border-l border-white/5 h-full w-full" />
        <div className="border-l border-white/5 h-full w-full" />
        <div className="border-l border-r border-white/5 h-full w-full" />
      </div>

      {/* Navigation Top-Bar (Integrated for layout balance) */}
      <div className="z-10 flex justify-between items-baseline w-full font-sans tracking-architect uppercase text-xs text-smoke">
        <span className="font-serif text-white text-xl tracking-normal normal-case font-semibold">ASIL</span>
        <span>Architecture in Motion ©2026</span>
      </div>

      {/* Hero Core Content */}
      <div className="z-10 max-w-5xl my-auto pt-24 pb-12">
        <div className="overflow-hidden mb-4">
          <motion.h1 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, ease: cinematicEase as any }}
            className="font-serif text-5xl md:text-8xl font-light tracking-tight leading-[0.9]"
          >
            Architecture <br />
            <span className="italic text-stone font-normal">in Motion</span>
          </motion.h1>
        </div>

        <motion.div 
          variants={lineReveal as any }
          initial="initial"
          animate="animate"
          className="h-[1px] bg-gradient-to-r from-gold-accent/40 via-white/10 to-transparent w-full origin-left my-8"
        />

        <motion.p 
          variants={fadeInUp as any}
          initial="initial"
          animate="animate"
          className="font-sans text-stone/80 text-base md:text-xl max-w-2xl font-light leading-relaxed tracking-wide"
        >
          We create AI-powered construction content that transforms physical masterworks into unforgettable cinematic stories.
        </motion.p>

        {/* CTA Group */}
        <motion.div 
          variants={fadeInUp as any}
          initial="initial"
          animate="animate"
          className="flex flex-wrap gap-6 mt-12 font-sans text-xs uppercase tracking-cinematic"
        >
          <button className="relative group bg-white text-obsidian px-8 py-4 transition-colors duration-300 hover:bg-gold-accent hover:text-white">
            Start a Project
          </button>
          <button className="border border-white/20 px-8 py-4 bg-transparent transition-all duration-300 hover:border-white hover:bg-white/5">
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Footer Baseline Lat/Long Indicators */}
      <div className="z-10 flex justify-between items-end w-full text-[10px] font-mono text-graphite tracking-widest uppercase">
        <span>AI-Studio // [24.4539° N, 54.3773° E]</span>
        <span>Scroll to Explore</span>
      </div>
    </section>
  )
}