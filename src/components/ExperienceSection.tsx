import { motion } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { getContent } from "@/data/content";
import { titleVariants, timelineVariants } from "@/lib/animations";

export const ExperienceSection = () => {
  const content = getContent();

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
      
      <div className="container max-w-4xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={titleVariants} className="text-center mb-16 flex justify-center">
          <div className="inline-block px-8 py-4 rounded-full border-2 border-primary/30 bg-transparent">
            <h2 className="section-title">Experience & Appointments</h2>
            <p className="section-subtitle mt-1">Academic and Research Positions</p>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.2, ease: "easeOut" }} style={{ originY: 0 }} />

          <div className="space-y-8 pl-12">
            {content.experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={timelineVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.15 }} className="relative">
                <motion.div className="absolute left-[-36px] w-5 h-5 rounded-full border-2 border-primary bg-background" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }} style={{ boxShadow: "0 0 10px hsl(217 100% 65% / 0.5)" }}>
                  {exp.current && <motion.span className="absolute inset-0 rounded-full bg-primary/50" animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} />}
                </motion.div>

                <motion.div className="academic-card ml-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.organization}</span>
                      </div>
                    </div>
                    {exp.current && <motion.span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>Current</motion.span>}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>{exp.location}</span></div>
                    <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{exp.period}</span></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
