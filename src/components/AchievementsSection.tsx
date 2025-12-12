import { motion } from "framer-motion";
import { Award, Users, Mic, Star, Handshake } from "lucide-react";
import { getContent } from "@/data/content";
import { titleVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const categoryIcons = { award: Award, grant: Star, talk: Mic, recognition: Award, collaboration: Handshake };
const categoryColors = { award: "text-yellow-400", grant: "text-green-400", talk: "text-blue-400", recognition: "text-purple-400", collaboration: "text-pink-400" };

export const AchievementsSection = () => {
  const content = getContent();

  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden">
      <motion.div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
      
      <div className="container max-w-6xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={titleVariants} className="text-center mb-12 flex justify-center">
          <div className="inline-block px-8 py-4 rounded-full border-2 border-primary/30 bg-transparent">
            <h2 className="section-title">Awards & Achievements</h2>
            <p className="section-subtitle mt-1">Recognition & Accomplishments</p>
          </div>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {content.achievements.map((achievement) => {
            const Icon = categoryIcons[achievement.category];
            const iconColor = categoryColors[achievement.category];
            return (
              <motion.div key={achievement.id} variants={staggerItemVariants} whileHover={{ y: -10 }} className="academic-card group">
                <div className="flex items-start gap-4">
                  <motion.div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0" whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </motion.div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">{achievement.year}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
