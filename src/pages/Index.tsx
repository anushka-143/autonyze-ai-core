import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

const Index = () => {
  useScrollAnimations();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <div className="animate-on-scroll">
        <AboutSection />
      </div>
      <div className="animate-on-scroll">
        <ServicesSection />
      </div>
      <div className="animate-on-scroll">
        <SolutionsSection />
      </div>
      <div className="animate-on-scroll">
        <TechStackSection />
      </div>
      <div className="animate-on-scroll">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
