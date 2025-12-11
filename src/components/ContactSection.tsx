import { motion } from "framer-motion";
import { Mail, Linkedin, GraduationCap, MapPin, Send } from "lucide-react";
import { getContent } from "@/data/content";
import { titleVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export const ContactSection = () => {
  const content = getContent();

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: content.contact.email,
      href: `mailto:${content.contact.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: content.contact.linkedin,
    },
    {
      icon: GraduationCap,
      label: "Google Scholar",
      value: "View Publications",
      href: content.contact.googleScholar,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 relative overflow-x-hidden pb-20">
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mt-2">Let's Connect & Collaborate</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Links */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={staggerItemVariants}
                whileHover={{ 
                  x: 10, 
                  boxShadow: "0 0 30px hsl(217 100% 65% / 0.2)",
                }}
                className="academic-card flex items-center gap-4 group cursor-pointer"
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                  whileHover={{ rotate: 10 }}
                >
                  <link.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Address */}
            <motion.div
              variants={staggerItemVariants}
              whileHover={{ x: 10 }}
              className="academic-card"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0"
                  whileHover={{ rotate: 10 }}
                >
                  <MapPin className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">Office Address</p>
                  <p className="font-medium text-foreground text-sm leading-relaxed">
                    {content.contact.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ boxShadow: "0 0 40px hsl(217 100% 65% / 0.15)" }}
            className="academic-card"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Send className="w-5 h-5 text-primary" />
              </motion.div>
              Send a Message
            </h3>
            <form className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none placeholder:text-muted-foreground"
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
