import { motion } from "framer-motion";
import { Brain, Cpu, Database, Network, Sparkles, Orbit, WandSparkles, Atom, Bot, Code, Globe, Shapes, } from "lucide-react";
import { getContent } from "@/data/content";
import { titleVariants } from "@/lib/animations";



const iconMap: Record<string, React.ElementType> = {
  "Artificial Intelligence": Brain,
  "Machine Learning": Cpu,
  "Cognitive Computing": Sparkles,
  "Brain Informatics": Network,
  "Data Science": Database,
  "Quantum Computing": Atom,
  "Generative AI": Bot,
  "Cybersecurity": Globe,
  "Software Engineering": Code,
  "Mathematics & Modeling": Shapes,
  "Embedded Systems": WandSparkles,

};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring" as const, 
      stiffness: 200, 
      damping: 15 
    }
  },
};

export const ResearchSection = () => {
  const content = getContent();

  return (
    <section id="research" className="py-24 px-4 relative overflow-hidden">
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-12 flex justify-center"
        >
          <div className="inline-block px-8 py-4 rounded-full border-2 border-primary/30 bg-transparent">
            <h2 className="section-title">Research Interests</h2>
            <p className="section-subtitle mt-1">Areas of Expertise & Focus</p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {content.researchInterests.map((interest, index) => {
            const Icon = iconMap[interest] || Brain;
            return (
              <motion.div
                key={interest}
                variants={pillVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 0 30px hsl(217 100% 65% / 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="glow-pill flex items-center gap-2 cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Icon className="w-4 h-4 text-primary" />
                </motion.div>
                <span>{interest}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
