import { motion } from "framer-motion";

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
        <div className="flex items-center justify-center">
          <motion.div 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            © {new Date().getFullYear()} Dr. Jyoti Sekhar Banerjee. All rights reserved.
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
