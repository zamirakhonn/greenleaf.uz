import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NewslettersSection = () => {
  const newsletters = [
    {
      title: "Eco Lifestyle: Living in Harmony with Nature",
      description: "Discover practical tips for sustainable living and reducing your environmental footprint in everyday life.",
      date: "March 15, 2025",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop"
    },
    {
      title: "Health & Wellness: Natural Remedies",
      description: "Explore the power of natural ingredients and their benefits for your health and wellbeing.",
      date: "March 10, 2025",
      category: "Health",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop"
    },
    {
      title: "Beauty Innovations: Clean Cosmetics Revolution",
      description: "Learn about the latest trends in eco-friendly beauty products and sustainable cosmetics.",
      date: "March 5, 2025",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop"
    },
    {
      title: "Home & Garden: Creating Green Spaces",
      description: "Transform your living space with eco-friendly home products and indoor plants.",
      date: "February 28, 2025",
      category: "Home",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="newsletters" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Newsletters
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our latest articles on eco-living, health, beauty, and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsletters.map((newsletter, index) => (
            <Card 
              key={newsletter.title}
              className="overflow-hidden [background:var(--gradient-card)] border-border hover:[box-shadow:var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={newsletter.image} 
                  alt={newsletter.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {newsletter.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {newsletter.date}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                  {newsletter.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  {newsletter.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="ghost" className="w-full group/btn">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View All Newsletters
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewslettersSection;
