import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Asosiy", href: "#home" },
    { name: "Biz haqimizda", href: "#about" },
    { name: "Yangiliklar", href: "#newsletters", animated: true },
    { name: "Eko mahsulotlar", href: "#products", animated: true },
    { name: "Media", href: "#media" },
    { name: "Jamoa", href: "#team" },
    { name: "Bog'lanish", href: "#contact", animated: true },
    { name: ""}
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img src={logo} alt="Greenleaf Journal" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative inline-block px-4 py-2 font-medium transition-all duration-300 rounded-md ${
                  item.animated
                    ? "text-foreground group overflow-hidden hover:text-white hover:bg-primary hover:shadow-[0_0_15px_hsl(var(--primary))]"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.animated && (
                  <>
                    <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-primary animate-borderX" />
                    <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-primary animate-borderY_delay1" />
                    <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent to-primary animate-borderX_delay2" />
                    <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-primary animate-borderY_delay3" />
                  </>
                )}
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative block py-3 px-4 font-medium transition-all duration-300 rounded-md ${
                  item.animated
                    ? "text-foreground group overflow-hidden hover:text-white hover:bg-primary hover:shadow-[0_0_15px_hsl(var(--primary))]"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.animated && (
                  <>
                    <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-primary animate-borderX" />
                    <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-primary animate-borderY_delay1" />
                    <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent to-primary animate-borderX_delay2" />
                    <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-primary animate-borderY_delay3" />
                  </>
                )}
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
