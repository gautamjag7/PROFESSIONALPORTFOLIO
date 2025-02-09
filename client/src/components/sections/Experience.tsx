import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Code, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Problem Setter Intern",
    company: "Kalvium",
    period: "Nov 2024 - Jan 2025",
    type: "Internship",
    points: [
      "Created and tested coding problems focusing on Data Structures and Algorithms",
      "Explored and implemented both brute force and optimal solutions",
      "Enhanced existing problem sets by maintaining quality and expanding test cases",
      "Building coding courses and lessons for Kalvium's learners"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          {exp.title}
                          <Badge variant="secondary" className="ml-2">
                            {exp.type}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * pointIndex }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="mt-1 flex-shrink-0">
                          {pointIndex % 2 === 0 ? (
                            <Code className="h-4 w-4 text-primary" />
                          ) : (
                            <BookOpen className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
