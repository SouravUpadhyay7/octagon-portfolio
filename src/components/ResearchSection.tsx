import { motion } from "framer-motion";
import { Brain, Cpu, Database, Network, Sparkles } from "lucide-react";
import { getContent } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  "Artificial Intelligence": Brain,
  "Machine Learning": Cpu,
  "Cognitive Computing": Sparkles,
  "Brain Informatics": Network,
  "Data Science": Database,
};

export const ResearchSection = () => {
  const content = getContent();

  return (
    <section id="research" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Research Interests</h2>
          <p className="section-subtitle mt-2">Areas of Expertise & Focus</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {content.researchInterests.map((interest, index) => {
            const Icon = iconMap[interest] || Brain;
            return (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glow-pill flex items-center gap-2 cursor-pointer"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span>{interest}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
