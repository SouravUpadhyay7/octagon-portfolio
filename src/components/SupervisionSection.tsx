import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen } from "lucide-react";
import { getContent } from "@/data/content";

export const SupervisionSection = () => {
  const content = getContent();

  const categories = [
    { id: "phd", label: "PhD Supervision", icon: GraduationCap },
    { id: "mtech", label: "M.Tech Projects", icon: BookOpen },
    { id: "btech", label: "B.Tech Major Projects", icon: Users },
  ];

  return (
    <section id="supervision" className="py-24 px-4 relative">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="academic-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.label}</h3>
                </div>

                <div className="space-y-4">
                  {items.length > 0 ? (
                    items.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-lg bg-muted/50 border border-border/50"
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
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No entries yet
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
