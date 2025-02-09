import { Navigation } from "./components/Navigation";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
