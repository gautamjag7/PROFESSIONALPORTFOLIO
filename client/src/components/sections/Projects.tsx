import { ProjectCard } from "../ProjectCard";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
