import { Navigation } from "./components/Navigation";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";
import { Blog } from "./components/sections/Blog";
import { ThemeToggle } from "./components/ThemeToggle";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "about";
      setActiveSection(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial section

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground relative">
        <Navigation setActiveSection={setActiveSection} />
        <main>
          {activeSection === "about" && <Hero />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "experience" && <Experience />}
          {activeSection === "skills" && <Skills />}
          {activeSection === "blog" && <Blog />}
          {activeSection === "education" && <Education />}
          {activeSection === "achievements" && <Achievements />}
          {activeSection === "contact" && <Contact />}
        </main>
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;