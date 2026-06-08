"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, cinematicEase } from "../lib/cinematicEase";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { PiMicrophoneSlashFill } from "react-icons/pi";
import { Mail, MapIcon } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.", {
        position: "bottom-right",
        autoClose: 4000,
        theme: "dark",
      });
      return;
    }

    toast.success("Thank you! Your inquiry has been sent.", {
      position: "bottom-right",
      autoClose: 5000,
      theme: "dark",
    });

    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
    });
  };

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
            [ Start Your Project ]
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
            initial={{ opacity: 0, x: -20 }}
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
                <PiMicrophoneSlashFill size={20} className="text-gold-accent" />
                <span className="font-sans text-xs uppercase tracking-cinematic text-gold-accent">
                  Phone
                </span>
              </div>
              <a
                href="tel:+212 000 00 00 00"
                className="font-serif text-2xl font-light hover:text-gold-accent transition-colors"
              >
                +212 000 00 00 00 
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                <MapIcon size={20} className="text-gold-accent" />
                <span className="font-sans text-xs uppercase tracking-cinematic text-gold-accent">
                  Location
                </span>
              </div>
              <p className="font-serif text-2xl font-light">
                Marrakech 
                <br />
                <span className="text-sm text-stone font-sans">
                   [add your address]
                </span>
              </p>
            </div>

            <div className="flex gap-4 pt-8">
              <a
                href="#"
                className="p-3 border border-white/20 hover:border-gold-accent hover:bg-gold-accent/10 hover:text-gold-accent transition-all duration-300 rounded"
                aria-label="Instagram"
              >
                <BsInstagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 border border-white/20 hover:border-gold-accent hover:bg-gold-accent/10 hover:text-gold-accent transition-all duration-300 rounded"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 border border-white/20 hover:border-gold-accent hover:bg-gold-accent/10 hover:text-gold-accent transition-all duration-300 rounded"
                aria-label="Twitter"
              >
                <BsTwitterX size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: cinematicEase as any }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 font-serif text-lg placeholder-stone/50 focus:outline-none focus:border-gold-accent transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 font-serif text-lg placeholder-stone/50 focus:outline-none focus:border-gold-accent transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Project Type"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 font-serif text-lg placeholder-stone/50 focus:outline-none focus:border-gold-accent transition-colors"
              />
            </div>

            <div>
              <textarea
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 font-serif text-lg placeholder-stone/50 focus:outline-none focus:border-gold-accent transition-colors resize-none"
                required
              />
            </div>

            <button type="submit" className="button-primary w-full mt-8">
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
