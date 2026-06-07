"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cinematicEase,
} from "../lib/cinematicEase";

interface Project {
  id: string;
  title: string;
  location: string;
  metric: string;
  label: string;
  image: string; // Wrap with next/image in production
}

const projects: Project[] = [
  {
    id: "01",
    title: "Villa Atlas",
    location: "High Atlas Mountain Range",
    metric: "4.2M+",
    label: "Cinematic Impressions Generated",
    image: "/assets/villa-atlas.jpg",
  },
  {
    id: "02",
    title: "Villa Nour",
    location: "Coastal Architecture Exploration",
    metric: "18%",
    label: "Direct Inbound Conversion Increase",
    image: "/assets/villa-nour.jpg",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-obsidian text-white py-32 px-6 md:p-12 border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-sans text-xs text-gold-accent uppercase tracking-cinematic block mb-3">
              Selected Folio
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light">
              Architectural Manifestations
            </h2>
          </div>
          <span className="font-sans text-xs text-smoke uppercase tracking-architect">
            [ Phase I - III Available ]
          </span>
        </header>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24"
        >
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              variants={fadeInUp as any}
              className={`flex flex-col ${idx % 2 === 1 ? "lg:translate-y-24" : ""}`}
            >
              {/* Media Container */}
              <div className="relative aspect-16/10 bg-graphite overflow-hidden group border border-white/5">
                <div className="absolute inset-0 bg-obsidian/20 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                {/* Fallback frame representing dynamic cinematic capture render */}
                <div className="w-full h-full transform scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 bg-linear-to-tr from-graphite to-charcoal" />

                <div className="absolute top-4 left-4 z-20 font-mono text-xs text-stone/60 bg-obsidian/60 backdrop-blur-md px-3 py-1 border border-white/5">
                  SYS_REF: {project.id} // LUXE_V
                </div>
              </div>

              {/* Metric Card Footer */}
              <div className="mt-6 flex justify-between items-start border-b border-white/5 pb-6">
                <div>
                  <h3 className="font-serif text-2xl font-light tracking-wide">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-smoke uppercase tracking-wider mt-1">
                    {project.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-light text-gold-accent block leading-none">
                    {project.metric}
                  </span>
                  <span className="font-sans text-[10px] text-stone uppercase tracking-wider mt-1 block">
                    {project.label}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
