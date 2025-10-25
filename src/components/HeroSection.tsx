import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 [background:linear-gradient(135deg,hsl(var(--primary)/0.05),hsl(var(--secondary)/0.1))]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
          Welcome to Greenleaf Journal
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
          Immerse yourself in the harmony of nature, health, and beauty
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
          Inspired by nature, caring for life!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:600ms]">
          <Button 
            size="lg" 
            className="group"
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
            className="group"
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
