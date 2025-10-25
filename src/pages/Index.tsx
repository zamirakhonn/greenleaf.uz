import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatisticsSection from "@/components/StatisticsSection";
import NewslettersSection from "@/components/NewslettersSection";
import ProductsSection from "@/components/ProductsSection";
import MediaSection from "@/components/MediaSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StatisticsSection />
      <NewslettersSection />
      <ProductsSection />
      <MediaSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Index;
