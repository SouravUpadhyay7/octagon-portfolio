import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
import { getContent } from "@/data/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: "easeOut" as const } },
};

export const HeroSection = () => {
  const content = getContent();
  const image = content.profileImage || profileImage;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      <motion.div className="absolute inset-0 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
      </motion.div>

      <div className="container max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="glow-pill inline-block mb-4">Academic Portfolio</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins">
              Dr. Jyoti Sekhar <span className="gradient-text">Banerjee</span>
            </motion.h1>
            <motion.div variants={itemVariants} className="space-y-2 mb-6">
              <p className="text-lg md:text-xl text-foreground font-medium">Associate Professor & Head, CSE (AI & ML)</p>
              <p className="text-muted-foreground">Techno Bengal Institute of Technology, India</p>
              <p className="text-sm text-muted-foreground">Former Post-Doctoral Fellow, Nottingham Trent University, UK</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Kolkata, West Bengal, India</span>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a href="#about" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                Learn More <ArrowDown className="w-4 h-4" />
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground rounded-lg font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300">
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={imageVariants} initial="hidden" animate="visible" className="flex justify-center lg:justify-end">
            <div className="relative">
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl rounded-full transform scale-110" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
              <motion.img src={image} alt="Dr. Jyoti Sekhar Banerjee" className="profile-octagon relative z-10" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
              <motion.div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary/50 rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
