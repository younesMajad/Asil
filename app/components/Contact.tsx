"use client";

import { motion } from "framer-motion";
import { fadeInUp, cinematicEase } from "../lib/cinematicEase";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-obsidian text-white flex flex-col justify-center items-center px-6 md:px-12 py-20 md:py-32 relative overflow-hidden border-t border-white/5 scroll-mt-20"
    >
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 grid grid-cols-4 h-full w-full px-6 md:p-12 pointer-events-none">
        <div className="border-l border-white/5 h-full w-full" />
        <div className="border-l border-white/5 h-full w-full" />
        <div className="border-l border-white/5 h-full w-full" />
        <div className="border-l border-r border-white/5 h-full w-full" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: cinematicEase as any }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs text-gold-accent uppercase tracking-cinematic block mb-4">
            [ Get In Touch ]
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-6">
            Let's Create
            <br />
            <span className="text-gold-accent italic">
              Architectural Stories
            </span>
          </h2>
          <p className="font-sans text-stone text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your architectural vision into cinematic content?
            Reach out to our team.
          </p>
        </motion.div>

        {/* Contact Form & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: cinematicEase as any }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={20} className="text-gold-accent" />
                <span className="font-sans text-xs uppercase tracking-cinematic text-gold-accent">
                  Email
                </span>
              </div>
              <a
                href="mailto:hello@asil.studio"
                className="font-serif text-2xl font-light hover:text-gold-accent transition-colors"
              >
                hello@asil.studio
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                <Phone size={20} className="text-gold-accent" />
                <span className="font-sans text-xs uppercase tracking-cinematic text-gold-accent">
                  Phone
                </span>
              </div>
              <a
                href="tel:+971544000123"
                className="font-serif text-2xl font-light hover:text-gold-accent transition-colors"
              >
                +971 54 400 0123
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={20} className="text-gold-accent" />
                <span className="font-sans text-xs uppercase tracking-cinematic text-gold-accent">
                  Location
                </span>
              </div>
              <p className="font-serif text-2xl font-light">
                Abu Dhabi, UAE
                <br />
                <span className="text-sm text-stone font-sans">
                  [24.4539° N, 54.3773° E]
                </span>
              </p>
            </div>

            <div className="flex gap-4 pt-8">
              <a
                href="#"
                className="p-3 border border-white/20 hover:border-gold-accent hover:bg-gold-accent/10 transition-all"
              >
            
              </a>
              <a
                href="#"
                className="p-3 border border-white/20 hover:border-gold-accent hover:bg-gold-accent/10 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: cinematicEase as any }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-white/20 py-3 font-serif text-lg placeholder-stone/50 focus:outline-none focus:border-gold-accent transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-3 font-serif text-lg placeholder-stone/50 focus:outline-none focus:border-gold-accent transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Project Type"
                className="w-full bg-transparent border-b border-white/20 py-3 font-serif text-lg placeholder-stone/50 focus:outline-none focus:border-gold-accent transition-colors"
              />
            </div>

            <div>
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 font-serif text-lg placeholder-stone/50 focus:outline-none focus:border-gold-accent transition-colors resize-none"
              />
            </div>

            <button type="submit" className="button-primary w-full mt-8">
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
