"use client";

import { motion } from "framer-motion";
import { fadeInUp, cinematicEase, slideInLeft } from "../lib/cinematicEase";

export default function About() {
  return (
    <section id="about" className="bg-obsidian text-white py-32 px-6 md:p-12 border-t border-white/5 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column: Direct Intent Statement */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: cinematicEase as any }}
          className="lg:col-span-5 sticky top-32"
        >
          <span className="font-sans text-xs text-gold-accent uppercase tracking-cinematic block mb-4">
            [ Manifesto ]
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight tracking-wide text-stone">
            We render the unseen discipline of luxury construction.
          </h2>
        </motion.div>

        {/* Right Column: Deep Architectural Narratives */}
        <div className="lg:col-span-7 flex flex-col gap-12 font-sans text-base md:text-lg text-smoke font-light leading-relaxed tracking-wide">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: cinematicEase  as any }}
          >
            ASIL is an artificial-intelligence augmented content studio
            dedicated exclusively to the architectural and premium building
            arts. We bridge the gap between structural engineering precision and
            cinematic artistry.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: cinematicEase  as any }}
            className="text-white"
          >
            By deploying cutting-edge AI neural rendering alongside custom
            high-dynamic-range cinematography, we capture the transformation of
            raw stone and steel into luxury masterworks. This is not simple
            documentation; it is high-end brand storytelling engineered for
            elite property developers and global estate investors.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/5 font-sans text-xs uppercase tracking-architect">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: cinematicEase as any }}
            >
              <span className="text-gold-accent block mb-2">
                // Digital Spatial Optimization
              </span>
              <p className="text-stone normal-case font-light text-sm tracking-normal leading-relaxed">
                Instagram-first frameworks configured specifically to match the
                aesthetic standards of luxury architects and top-tier design
                houses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: cinematicEase as any }}
            >
              <span className="text-gold-accent block mb-2">
                // Kinetic Preservation
              </span>
              <p className="text-stone normal-case font-light text-sm tracking-normal leading-relaxed">
                Preserving structural timelines through hyper-stabilized,
                atmosphere-driven construction timelapses.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
              
