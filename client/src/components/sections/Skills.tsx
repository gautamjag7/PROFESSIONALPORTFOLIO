import { Progress } from "@/components/ui/progress";
import { SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
