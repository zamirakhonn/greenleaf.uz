import { Heart, Leaf, Globe, Sparkles, Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import buildingImage from "@/assets/greenleaf-building.png";
import GlobalMapSection from "./GlobalMapSection";

const AboutSection = () => {
  const whyChooseUs = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description: "All products made from pure natural ingredients"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Certified",
      description: "International quality standards and certifications"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Presence",
      description: "Operating in 30+ countries worldwide"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "300K+ Partners",
      description: "Trusted by partners globally"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "$10B Goal",
      description: "Annual sales target demonstrating our growth"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "6,000+ Products",
      description: "Diverse range across multiple categories"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Greenleaf
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An international brand founded on naturalness, healthy living, and environmental purity
          </p>
        </div>

        {/* Company Info with Building Image */}
        <div className="max-w-6xl mx-auto mb-16 animate-fade-in-up [animation-delay:200ms]">
          <Card className="overflow-hidden [background:var(--gradient-card)] border-border [box-shadow:var(--shadow-soft)]">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[400px] md:h-auto">
                <img
                  src={buildingImage}
                  alt="Greenleaf Industrial Park"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Company</h3>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Компания Сучжоу Дэйли Коммодити Ко. (Suzhou Greenleaf Daily Commodity Co. Ltd) 
                  расположена в индустриальном парке Шу Гуан в национальной высокотехнологичной зоне Сучжоу
                </p>
                <p className="text-foreground leading-relaxed">
                  Greenleaf produces a comprehensive range of eco-friendly products including cosmetics, 
                  perfumes, hygiene products, cleaning solutions, children's lines, clothing, and household goods. 
                  With over 6,000 products in our portfolio, we're committed to making sustainable living 
                  accessible to everyone.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up [animation-delay:300ms]">
          <Card className="[background:var(--gradient-card)] border-border [box-shadow:var(--shadow-soft)]">
            <CardContent className="p-8">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-2xl font-semibold text-primary mb-2">Our Mission</p>
                <p className="text-foreground text-lg italic">
                  "Inspired by nature, caring for life!"
                </p>
                <p className="text-muted-foreground mt-4">
                  We strive to create sustainable products that protect both people and the planet, 
                  making eco-friendly living accessible and affordable for everyone around the world.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in-up [animation-delay:400ms]">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={item.title}
                className="[background:var(--gradient-card)] border-border hover:[box-shadow:var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Map Animation */}
        <div className="animate-fade-in-up [animation-delay:600ms]">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Our Global Presence
          </h3>
          <GlobalMapSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
