import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="min-h-screen pt-16 flex items-center">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
              alt="Profile"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto md:mx-0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Problem Solver & Developer
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Passionate about creating impactful solutions through code. Experienced in full-stack development,
              machine learning, and algorithmic problem-solving.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="default">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}