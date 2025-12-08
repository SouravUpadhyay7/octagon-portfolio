import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Fade up animation
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

// Fade in animation
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

// Scale up animation
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

// Slide from left
export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

// Slide from right
export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

// Stagger container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Stagger item
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

// Card hover animation
export const cardHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

// Glow pulse animation
export const glowPulseVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
  pulse: {
    boxShadow: [
      "0 0 20px hsl(217 100% 65% / 0.3)",
      "0 0 40px hsl(217 100% 65% / 0.5)",
      "0 0 20px hsl(217 100% 65% / 0.3)",
    ],
    transition: { duration: 2, repeat: Infinity }
  },
};

// Timeline reveal
export const timelineVariants: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

// Section title animation
export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

// Gallery item tilt animation
export const galleryItemVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotate: 0 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    rotate: i % 2 === 0 ? -2 : 2,
    transition: { 
      duration: 0.6, 
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }),
  hover: {
    rotate: 0,
    scale: 1.05,
    transition: { duration: 0.3 }
  },
};

// Animated section wrapper
export const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger container wrapper
export const StaggerContainer = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={staggerContainerVariants}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger item wrapper
export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div variants={staggerItemVariants} className={className}>
    {children}
  </motion.div>
);
