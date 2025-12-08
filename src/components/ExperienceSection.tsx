import { motion } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { getContent } from "@/data/content";

export const ExperienceSection = () => {
  const content = getContent();

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Appointments</h2>
          <p className="section-subtitle mt-2">Academic and Research Positions</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line" />

          <div className="space-y-8 pl-12">
            {content.experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="timeline-dot">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                  )}
                </div>

                <div className="academic-card ml-4">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.organization}</span>
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
