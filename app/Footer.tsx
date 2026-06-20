
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SocialLinks from './components/socialLinks';
const navLinks = [
    { name: 'Home',      href: '#home' },
    { name: 'Profile',   href: '#profile' },
    { name: 'About us ', href: '#portfolio' },
    { name: 'Contact',   href: '#contact' },
];


const Footer = () => {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) { setSent(true); }
    };

    return (
      <footer className="w-full bg-[#0A0A0A] text-white font-sans overflow-hidden">

        {/* ── MAIN FOOTER GRID ── */}
        <div className="px-8 md:px-16 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-serif font-bold mb-3">Asil</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                ASIL is a creative studio specializing in architectural storytelling through motion design and visual content.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-white/70 hover:text-white text-sm font-medium transition-colors hover:pl-2 inline-block duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors hover:pl-2 inline-block duration-300"
                >
                  All Projects
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:asilstudio@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  asilstudio@gmail.com
                </a>
              </li>
              <li className="text-white/50 hover:text-white cursor-pointer">
                {" "}
                <a
                  href="#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +212 7 68 60 00 21
                </a>
              </li>
              
              <li>
                <a
                  href="https://maps.google.com/?q=Marrakech,+Morocco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Marrakech, Morocco
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-5">
              Stay in touch
            </h4>
            <p className="text-sm text-white/50 mb-4 leading-relaxed">
              Drop your email and I`ll reach out about new projects or
              opportunities.
            </p>
            {sent ? (
              <p className="text-lg text-center text-emerald-400/70 font-medium">
                ✓ Got it — I`ll be in touch !
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white text-black font-semibold text-sm rounded-lg px-4 py-3 hover:bg-white/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
          <SocialLinks/>
        </div>
                 
      </footer>
    );
};

export default Footer;



{/* <p>&copy; {new Date().getFullYear()} Asil Company. All rights reserved.</p> */}