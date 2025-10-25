import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import airplane from "@/assets/airplane.png";
import leaf from "@/assets/leaf.png";

const HeroSection = () => {
  const [showPlane, setShowPlane] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPlane(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 [background:var(--gradient-overlay)]" />
      </div>

      {/* Floating Leaves */}
      <img 
        src={leaf} 
        alt="" 
        className="absolute top-20 left-10 w-16 h-16 opacity-60 animate-float pointer-events-none"
      />
      <img 
        src={leaf} 
        alt="" 
        className="absolute top-40 right-20 w-20 h-20 opacity-50 animate-float-delayed pointer-events-none"
      />
      <img 
        src={leaf} 
        alt="" 
        className="absolute bottom-32 left-1/4 w-14 h-14 opacity-70 animate-float pointer-events-none"
      />
      <img 
        src={leaf} 
        alt="" 
        className="absolute top-1/3 right-1/4 w-12 h-12 opacity-40 animate-float-delayed pointer-events-none"
      />

      {/* Flying Airplane */}
      {showPlane && (
        <img 
          src={airplane} 
          alt="" 
          className="absolute w-32 h-32 animate-fly-plane pointer-events-none"
          style={{ bottom: "10%", left: "-100px" }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Welcome to Greenleaf Journal
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
          Immerse yourself in the harmony of nature, health, and beauty
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
          Inspired by nature, caring for life!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:600ms]">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            asChild
          >
            <a href="#newsletters">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Articles
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group"
            asChild
          >
            <a href="#products">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
