import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { VideoSection } from "@/components/VideoSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { SupervisionSection } from "@/components/SupervisionSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <ExperienceSection />
      <ResearchSection />
      <PublicationsSection />
      <SupervisionSection />
      <AchievementsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
