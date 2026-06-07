import Hero from "./components/Hero";
import About from "./components/About";
import Pillars from "./components/Pillars";
import Portfolio from "./components/proflolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-stretch justify-start bg-obsidian text-white font-sans">
      <Hero />
      <About />
      <Pillars />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="bg-obsidian border-t border-white/5 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-cinematic text-stone">
          <span>© 2026 ASIL. Architecture in Motion.</span>
          <span>AI-Studio // [24.4539° N, 54.3773° E]</span>
        </div>
      </footer>
    </div>
  );
}
