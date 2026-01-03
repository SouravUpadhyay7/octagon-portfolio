import { motion } from "framer-motion";
import { getContent } from "@/data/content";
import { titleVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import all from "@/assets/Gallery/all.jpeg";
import forum from "@/assets/Gallery/forum.jpeg";
import guest from "@/assets/Gallery/guest.jpeg";
import nit from "@/assets/Gallery/nit.jpeg";
import sabbit from "@/assets/Gallery/sabbit.jpeg";


const defaultImages = [all, forum, guest,nit,sabbit];

export const GallerySection = () => {
  const content = getContent();
  const galleryItems = content.gallery.map((item, index) => ({ ...item, image: item.image || defaultImages[index % defaultImages.length] }));

  return (
    <section id="gallery" className="py-24 px-4 relative overflow-hidden">
      <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
      
      <div className="container max-w-6xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={titleVariants} className="text-center mb-12 flex justify-center">
          <div className="inline-block px-8 py-4 rounded-full border-2 border-primary/30 bg-transparent">
            <h2 className="section-title">Gallery & Events</h2>
            <p className="section-subtitle mt-1">Moments from Academic Journey</p>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {galleryItems.map((item, index) => (
            <motion.div key={item.id} variants={staggerItemVariants} whileHover={{ scale: 1.05, rotate: 0 }} initial={{ rotate: index % 2 === 0 ? -2 : 2 }} className="gallery-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <motion.img src={item.image} alt={item.title} className="w-full h-64 object-cover" whileHover={{ scale: 1.15 }} transition={{ duration: 0.6 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <span className="text-xs font-mono text-primary">{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
