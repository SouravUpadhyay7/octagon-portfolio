import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { titleVariants } from "@/lib/animations";

// Placeholder video URL - replace with Cloudinary video URL
const VIDEO_URL = "https://res.cloudinary.com/dyqfbq6kf/video/upload/v1755247875/11548675-uhd_3840_2160_1_b7lwvn.mp4";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <motion.div 
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-12 flex justify-center"
        >
          <div className="inline-block px-8 py-4 rounded-full border-2 border-primary/30 bg-transparent">
            <h2 className="section-title">Introduction</h2>
            <p className="section-subtitle mt-1">Meet Dr. Jyoti Sekhar Banerjee</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 bg-card"
        >
          {!isPlaying ? (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              {/* Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-muted to-card" />
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-2xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
              
              {/* Play Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-300"
              >
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </motion.div>
              
              {/* Ripple Effect */}
              <motion.div
                className="absolute w-20 h-20 rounded-full border-2 border-primary/50"
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-20 h-20 rounded-full border-2 border-primary/30"
                animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
              
              {/* Text Overlay */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-muted-foreground text-sm">Click to play introduction video</p>
              </div>
            </div>
          ) : (
            <video
              className="w-full h-full object-cover"
              src={VIDEO_URL}
              controls
              autoPlay
              onEnded={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </motion.div>
      </div>
    </section>
  );
};
