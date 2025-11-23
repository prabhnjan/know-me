import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
// import { Projects } from "./components/Projects"; // HIDDEN
import { SideProjects } from "@/components/SideProjects";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Contact } from "./components/Contact";
import { Passions } from "@/components/Passions";
import { LinkedInPosts } from "@/components/LinkedInPosts";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <Experience />
        <LinkedInPosts />
        {/* <Projects /> */}
        <SideProjects />
        <Certifications />
        <Skills />
        <Passions />
        <Contact />
      </main>

      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-neutral-600">
          <p>© 2025 .Prabhanjan Kulkarni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}