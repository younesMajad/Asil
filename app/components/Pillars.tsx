"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/cinematicEase";

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
    <section className="bg-parchment text-obsidian py-32 px-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <span className="font-sans text-xs text-smoke uppercase tracking-cinematic block mb-4">
          Strategic Framework
        </span>
        <h2 className="font-serif text-4xl md:text-6xl font-light mb-20 max-w-3xl leading-tight">
          Three core content vectors. Engineered for conversion.
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone/40 border-t border-b border-stone/40"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.num}
              variants={fadeInUp as any }
              className="py-12 md:py-16 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between group"
            >
              <div>
                <span className="font-serif text-xs text-gold-accent tracking-widest uppercase block mb-8 font-semibold">
                  Pillar // {pillar.num}
                </span>
                <h3 className="font-serif text-3xl font-light tracking-wide mb-6">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-graphite leading-relaxed tracking-wide font-light max-w-sm">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-12 h-[2px] bg-obsidian origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 max-w-[60px]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
