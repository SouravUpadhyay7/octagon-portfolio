import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Calendar } from "lucide-react";
import { getContent } from "@/data/content";
import { titleVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export const PublicationsSection = () => {
  const content = getContent();

  return (
    <section id="publications" className="py-24 px-4 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle mt-2">Selected Research Publications</p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {content.publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              variants={staggerItemVariants}
              whileHover={{ 
                x: 10, 
                boxShadow: "0 0 30px hsl(165 100% 39% / 0.2)",
              }}
              transition={{ duration: 0.3 }}
              className="academic-card group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <motion.h3 
                    className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {pub.title}
                  </motion.h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{pub.journal}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{pub.year}</span>
                    </div>
                  </div>
                </div>
                <motion.a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-all duration-300 shrink-0"
                >
                  <span className="font-mono text-xs">{pub.doi}</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
