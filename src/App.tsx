import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
// import { Projects } from "./components/Projects"; // HIDDEN
import { SideProjects } from "@/components/SideProjects";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Passions } from "@/components/Passions";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-neutral-200 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-neutral-900 font-semibold">Prabhanjan Kulkarni</a>
          <div className="flex gap-8">
            <a href="#about" className="text-neutral-600 hover:text-neutral-900 transition-colors">About</a>
            <a href="#experience" className="text-neutral-600 hover:text-neutral-900 transition-colors">Experience</a>
            <a href="#side-projects" className="text-neutral-600 hover:text-neutral-900 transition-colors">Projects</a>
            <a href="#certifications" className="text-neutral-600 hover:text-neutral-900 transition-colors">Certifications</a>
            <a href="#passions" className="text-neutral-600 hover:text-neutral-900 transition-colors">Passions</a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        {/* <Projects /> */}
        <SideProjects />
        <Certifications />
        <Skills />
        <Passions />
        <Contact />
      </main>

      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-neutral-600">
          <p>© 2025 Prabhanjan Kulkarni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}