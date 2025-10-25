import { Heart, Leaf, Globe, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Naturalness",
      description: "Products made from the purest natural ingredients"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Promoting healthy living and environmental purity"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving 30+ countries with eco-friendly solutions"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation",
      description: "Over 6,000 products across multiple categories"
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

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up [animation-delay:200ms]">
          <Card className="[background:var(--gradient-card)] border-border [box-shadow:var(--shadow-soft)]">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Greenleaf produces a comprehensive range of eco-friendly products including cosmetics, 
                perfumes, hygiene products, cleaning solutions, children's lines, clothing, and household goods. 
                With over 6,000 products in our portfolio, we're committed to making sustainable living 
                accessible to everyone.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-2xl font-semibold text-primary mb-2">Our Mission</p>
                <p className="text-foreground text-lg italic">
                  "Inspired by nature, caring for life!"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="[background:var(--gradient-card)] border-border hover:[box-shadow:var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
