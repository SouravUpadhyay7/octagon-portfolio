import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import { getContent } from "@/data/content";
import { titleVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export const AboutSection = () => {
  const content = getContent();

  const stats = [
    { icon: BookOpen, value: "20+", label: "Years Experience" },
    { icon: GraduationCap, value: "100+", label: "Publications" },
    { icon: Users, value: "50+", label: "Students Guided" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <motion.div 
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        initial={{ opacity: 0, x: 100 }}
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
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mt-2">Academic Journey & Vision</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2"
          >
            <motion.div 
              className="academic-card h-full"
              whileHover={{ y: -5, boxShadow: "0 0 30px hsl(217 100% 65% / 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-foreground/90 leading-relaxed">
                {content.about}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItemVariants}
                whileHover={{ scale: 1.03, x: 10 }}
                transition={{ duration: 0.3 }}
                className="academic-card flex items-center gap-4"
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
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
