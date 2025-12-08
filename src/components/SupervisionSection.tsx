import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen } from "lucide-react";
import { getContent } from "@/data/content";
import { titleVariants } from "@/lib/animations";

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { 
      duration: 0.6, 
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }),
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  },
};

export const SupervisionSection = () => {
  const content = getContent();

  const categories = [
    { id: "phd", label: "PhD Supervision", icon: GraduationCap },
    { id: "mtech", label: "M.Tech Projects", icon: BookOpen },
    { id: "btech", label: "B.Tech Major Projects", icon: Users },
  ];

  return (
    <section id="supervision" className="py-24 px-4 relative overflow-hidden">
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Academic Supervision</h2>
          <p className="section-subtitle mt-2">Guiding Future Researchers</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => {
            const items = content.supervisions.filter(
              (s) => s.category === category.id
            );
            
            return (
              <motion.div
                key={category.id}
                custom={catIndex}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, boxShadow: "0 0 40px hsl(217 100% 65% / 0.2)" }}
                className="academic-card"
                style={{ perspective: "1000px" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold">{category.label}</h3>
                </div>

                <motion.div 
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1, delayChildren: catIndex * 0.2 }}
                >
                  {items.length > 0 ? (
                    items.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        whileHover={{ x: 5, backgroundColor: "hsl(var(--muted))" }}
                        className="p-3 rounded-lg bg-muted/50 border border-border/50 transition-colors"
                      >
                        <p className="text-sm font-medium text-foreground mb-1">
                          {item.title}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{item.student}</span>
                          <span className={item.status === "ongoing" ? "text-accent" : ""}>
                            {item.year}
                          </span>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No entries yet
                    </p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
