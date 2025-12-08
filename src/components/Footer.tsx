import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <motion.footer 
      className="py-8 px-4 border-t border-border/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            © {new Date().getFullYear()} Dr. Jyoti Sekhar Banerjee. All rights reserved.
          </motion.div>
          <motion.div 
            className="flex items-center gap-1 text-sm text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>{" "}
            for Academia
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
