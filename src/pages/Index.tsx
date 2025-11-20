import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatisticsSection from "@/components/StatisticsSection";

// Your custom content sections
import NewslettersSection from "@/components/NewslettersSection"; 
import ProductSection from "@/components/ProductsSection"; // Your shop component

import MediaSection from "@/components/MediaSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection"; // This acts as your footer

const Index = () => {
  return (
    // min-h-screen with flex-col is often used when there is a dedicated header/footer, 
    // but since ContactSection is at the bottom, this structure is fine.
    <div className="min-h-screen"> 
      
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <StatisticsSection />
        
        {/* Your new flow */}
        <NewslettersSection />
        <ProductSection />
        
        <MediaSection />
        <TeamSection />
        
        {/* The final section, which contains the contact info and footer content */}
        <ContactSection />
      </main>
      
      {/* The error-causing <Footer /> has been removed! */}
    </div>
  );
};

export default Index;