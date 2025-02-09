import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EDUCATION } from "@/lib/constants";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-16 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-muted">
                <CardHeader className="flex flex-row items-center gap-4">
                  <GraduationCap className="h-6 w-6 text-primary/80" />
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    {edu.institution && (
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{edu.period}</span>
                    <span className="font-medium text-primary/80">{edu.score}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}