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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="space-y-1">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Blog />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <ThemeToggle />
      </div>
    </QueryClientProvider>
  );
}

export default App;