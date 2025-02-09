import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { SiLeetcode, SiCodechef } from "react-icons/si";

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
              src="https://avatars.githubusercontent.com/gautamjag7"
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
              Jagmohan Gautam
            </h1>
            <div className="prose prose-sm dark:prose-invert mb-6">
              <p>
                I am a passionate and driven Computer Science and Engineering (CSE) student at SRM University, Andhra Pradesh, currently in my final year. My journey in academics has been fueled by perseverance and the desire to excel in a competitive environment.
              </p>
              <p>
                I was fortunate to receive a full scholarship at VidyaGyan School, Bulandshahr, covering both accommodation and academic expenses from grades 6 to 12. Continuing on this path, I earned a full scholarship at SRM University, where I am honing my skills in problem-solving and emerging technologies.
              </p>
              <p>
                With a strong foundation in Data Structures & Algorithms, C++, and Full-Stack Web Development, I actively engage in coding challenges, open-source contributions, and real-world projects. My enthusiasm lies in building efficient, scalable solutions while constantly learning and evolving.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="mailto:jagmohangautam7@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/gautamjag7" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/jagmohan-gautam-2b5b64249/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://leetcode.com/u/jagmohan_g/" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode className="mr-2 h-4 w-4" />
                  LeetCode
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.codechef.com/users/gautamjag777" target="_blank" rel="noopener noreferrer">
                  <SiCodechef className="mr-2 h-4 w-4" />
                  CodeChef
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}