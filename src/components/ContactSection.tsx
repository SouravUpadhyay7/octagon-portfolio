import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Send, Twitter, Github,Globe} from "lucide-react";
import { getContent } from "@/data/content";
import { titleVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export const ContactSection = () => {
  const content = getContent();

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: content.contact.linkedin,
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      href: content.contact.twitter || "#",
    },
    {
      icon: Github,
      label: "GitHub",
      href: content.contact.github || "#",
    },
  ];

  // Fake logos for placeholder - add your actual links here
  const partnerLogos = [
    { name: "University 1", href: "#", placeholder: true },
    { name: "Research Lab", href: "#", placeholder: true },
    { name: "Tech Partner", href: "#", placeholder: true },
    { name: "Institute", href: "#", placeholder: true },
    { name: "Collaboration", href: "#", placeholder: true },
    { name: "Foundation", href: "#", placeholder: true },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 relative pb-20">
      <motion.div 
        className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container max-w-5xl relative z-10 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-12 flex justify-center"
        >
          <div className="inline-block px-8 py-4 rounded-full border-2 border-primary/30 bg-transparent">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle mt-1">Let's Connect & Collaborate</p>
          </div>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: "0 10px 30px hsl(185 80% 50% / 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center group hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              title={link.label}
            >
              <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {/* Contact Details */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            {/* Email */}
            <motion.a
              href={`mailto:${content.contact.email}`}
              variants={staggerItemVariants}
              whileHover={{ 
                x: 10, 
                boxShadow: "0 0 30px hsl(185 80% 50% / 0.2)",
              }}
              className="academic-card flex items-center gap-4 group cursor-pointer overflow-hidden"
            >
              <motion.div 
                className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors shrink-0"
                whileHover={{ rotate: 10 }}
              >
                <Mail className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                  {content.contact.email}
                </p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div
              variants={staggerItemVariants}
              whileHover={{ x: 10 }}
              className="academic-card overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0"
                  whileHover={{ rotate: 10 }}
                >
                  <MapPin className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">Office Address</p>
                  <p className="font-medium text-foreground text-sm leading-relaxed break-words">
                    {content.contact.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ boxShadow: "0 0 40px hsl(185 80% 50% / 0.15)" }}
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

        {/* Partner/Affiliation Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.h3
            className="text-xl font-semibold text-center mb-8 text-muted-foreground"
          >
            Affiliations & Collaborations
          </motion.h3>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partnerLogos.map((logo, index) => (
              <motion.a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-28 h-16 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center group hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <Globe className="w-6 h-6 text-muted-foreground/50 mx-auto mb-1 group-hover:text-primary/70 transition-colors" />
                  <span className="text-[10px] text-muted-foreground/50 font-medium group-hover:text-muted-foreground transition-colors">
                    {logo.name}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
          <p className="text-center text-sm text-muted-foreground/60 mt-4">
            Replace these placeholders with your actual partner logos
          </p>
        </motion.div>
      </div>
    </section>
  );
};
