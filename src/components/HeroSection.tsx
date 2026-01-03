import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import profileImage from "@/assets/hod-profile.jpeg";
import { getContent } from "@/data/content";

/* ✅ Import logos */
import GoogleScholar from "@/assets/logos/icons8-google-scholar.svg";
import ResearchGate from "@/assets/logos/Researchgate--Streamline-Simple-Icons.svg";
import Orcid from "@/assets/logos/orcid.svg";
import webofscience from "@/assets/logos/webofscience.jpg";
import scopus from "@/assets/logos/scopus-logo-png_seeklogo-335404.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

export const HeroSection = () => {
  const content = getContent();
  const image = content.profileImage || profileImage;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      <div className="container max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins"
            >
              Dr. Jyoti Sekhar <span className="gradient-text">Banerjee</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-2 mb-6">
              <p className="text-lg md:text-xl font-medium">
                Associate Professor & Head, CSE (AI & ML)
              </p>
              <p className="text-muted-foreground">
                Techno Bengal Institute of Technology, India
              </p>
              <p className="text-sm text-muted-foreground">
                Former Post-Doctoral Fellow, Nottingham Trent University, UK
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>Kolkata, West Bengal, India</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
              >
                Learn More <ArrowDown className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-lg font-medium"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* ✅ Affiliation Logo Boxes (ONLY PART CHANGED) */}
            <motion.div variants={itemVariants} className="mt-6 flex gap-3 justify-center lg:justify-start">
              {[
                {
                  name: "Google Schlor",
                  href: "https://scholar.google.com/citations?user=yMbHYgoAAAAJ&hl=en",
                  logo: GoogleScholar,
                },
                {
                  name: "Research Gate",
                  href: "https://www.researchgate.net/profile/Jyoti-Sekhar-Banerjee",
                  logo: ResearchGate,
                },
                {
                  name: "orcid",
                  href: "https://orcid.org/0000-0001-7896-5206",
                  logo: Orcid,
                },
                {
                  name: "web of science",
                  href: "https://www.webofscience.com/wos/author/record/E-7218-2018",
                  logo: webofscience,
                },
                {
                  name: "scopus",
                  href: "https://www.scopus.com/authid/detail.uri?authorId=56016851400",
                  logo: scopus,
                },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  title={item.name}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-7 h-7 object-contain"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <img
              src={image}
              alt="Dr. Jyoti Sekhar Banerjee"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
