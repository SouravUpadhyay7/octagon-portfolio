import { motion } from "framer-motion";
import { Award, Users, Mic, Star, Handshake } from "lucide-react";
import { getContent } from "@/data/content";

const categoryIcons = {
  award: Award,
  grant: Star,
  talk: Mic,
  recognition: Award,
  collaboration: Handshake,
};

const categoryColors = {
  award: "text-yellow-400",
  grant: "text-green-400",
  talk: "text-blue-400",
  recognition: "text-purple-400",
  collaboration: "text-pink-400",
};

export const AchievementsSection = () => {
  const content = getContent();

  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Awards & Achievements</h2>
          <p className="section-subtitle mt-2">Recognition & Accomplishments</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.achievements.map((achievement, index) => {
            const Icon = categoryIcons[achievement.category];
            const iconColor = categoryColors[achievement.category];
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="academic-card group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">
                      {achievement.year}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
