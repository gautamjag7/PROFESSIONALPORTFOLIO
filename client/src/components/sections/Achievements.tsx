import { Card, CardContent } from "@/components/ui/card";
import { ACHIEVEMENTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Trophy className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-sm">{achievement}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
