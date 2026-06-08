"use client";

import { motion } from "framer-motion";
import { cinematicEase, fadeInUp, staggerContainer } from "../lib/cinematicEase";

const pillars = [
  {
    num: "01",
    title: "The Build",
    description:
      "Capturing the complex mechanics of luxury engineering. Raw infrastructure framed with symmetrical, cinematic finality.",
  },
  {
    num: "02",
    title: "The Vision",
    description:
      "Translating purely conceptual blueprints into hyper-realistic, atmosphere-driven AI digital simulations.",
  },
  {
    num: "03",
    title: "The Proof",
    description:
      "Deploying optimized social engines engineered specifically to captivate high-net-worth real estate investors.",
  },
];

export default function Pillars() {
  return (
    <section
      id="services"
      className="bg-obsidian text-white py-32 px-6 md:p-12 border-t border-white/5 relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 grid grid-cols-4 h-full w-full px-6 md:p-12 pointer-events-none">
        <div className="border-l border-white/5 h-full w-full" />
        <div className="border-l border-white/5 h-full w-full" />
        <div className="border-l border-white/5 h-full w-full" />
        <div className="border-l border-r border-white/5 h-full w-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <span className="font-sans text-xs text-gold-accent uppercase tracking-cinematic block mb-4">
          [ Our solution ]
        </span>
        <h2 className="font-serif text-4xl md:text-6xl font-light mb-20 max-w-3xl leading-tight text-white">
          Three core content vectors. Engineered for conversion.
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-b border-white/10"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.num}
              variants={fadeInUp as any}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: cinematicEase as any }}
              className="py-12 md:py-16 md:px-8 md:first:pl-0 md:last:pr-0 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="font-serif text-lg text-gold-accent tracking-widest uppercase block mb-8 font-semibold animate-pulse">
                 {pillar.num}
                </span>
                <h3 className="font-serif text-3xl font-light tracking-wide mb-6 text-white group-hover:text-gold-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed tracking-wide font-light max-w-sm">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-12 h-0.5 bg-gold-accent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 max-w-[60px]" />
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
