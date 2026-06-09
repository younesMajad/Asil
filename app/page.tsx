import Hero from "./components/Hero";
import About from "./components/About";
import Pillars from "./components/Pillars";
import Portfolio from "./components/portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-stretch justify-start bg-obsidian text-white font-sans overflow-x-hidden w-full">
      <Hero />
      <About />
      <Pillars />
      <Portfolio />
      <Contact />

 
    </div>
  );
}
