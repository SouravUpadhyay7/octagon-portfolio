import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Calendar, ShoppingCart, Brain, Cpu, Database, Network, Sparkles, Atom, Bot, Code, Globe, Shapes, WandSparkles } from "lucide-react";
import { getContent } from "@/data/content";
import { titleVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

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

      {/* Research Interests Background Glow */}
      <motion.div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      
      <div className="container max-w-5xl relative z-10">
        {/* Main Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-16 flex justify-center"
        >
          <div className="inline-block px-8 py-4 rounded-full border-2 border-primary/30 bg-transparent">
            <h2 className="section-title">Research & Publications</h2>
            <p className="section-subtitle mt-1">Academic Contributions & Scholarly Works</p>
          </div>
        </motion.div>

        {/* Research Interests Subsection */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-foreground text-center mb-8"
          >
            Research Interests
          </motion.h3>

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

        {/* Books Subsection */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-3"
          >
            <BookOpen className="w-6 h-6 text-primary" />
            Books & Authored Works
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {content.books?.map((book) => (
              <motion.div
                key={book.id}
                variants={staggerItemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px hsl(165 100% 39% / 0.2)",
                }}
                className="academic-card group overflow-hidden"
              >
                <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-muted/50 relative">
                  <img 
                    src={book.coverImage || "/placeholder.svg"} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {book.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">{book.publisher}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{book.year}</span>
                </div>
                <motion.a
                  href={book.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Purchase
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Research Papers Subsection */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-3"
          >
            <ExternalLink className="w-6 h-6 text-primary" />
            Research Papers
          </motion.h3>

          <motion.div 
            className="space-y-4"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {content.publications.map((pub) => (
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
                    <motion.h4 
                      className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                    >
                      {pub.title}
                    </motion.h4>
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
      </div>
    </section>
  );
};
