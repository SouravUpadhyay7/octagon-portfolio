import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import { getContent } from "@/data/content";

export const AboutSection = () => {
  const content = getContent();

  const stats = [
    { icon: BookOpen, value: "20+", label: "Years Experience" },
    { icon: GraduationCap, value: "100+", label: "Publications" },
    { icon: Users, value: "50+", label: "Students Guided" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mt-2">Academic Journey & Vision</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="academic-card h-full">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {content.about}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="academic-card flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="stat-value text-2xl">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
