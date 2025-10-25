import { Card, CardContent } from "@/components/ui/card";
import FlightMapSection from "./FlightMapSection";

const MediaSection = () => {
  const mediaItems = [
    {
      title: "Greenleaf Expands to New Markets",
      date: "March 2024",
      description: "Our eco-friendly products are now available in 5 new countries across Asia and Europe.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500"
    },
    {
      title: "Sustainability Award 2024",
      date: "February 2024",
      description: "Greenleaf receives international recognition for environmental innovation.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500"
    },
    {
      title: "New Product Line Launch",
      date: "January 2024",
      description: "Introducing our latest eco-friendly cosmetics collection.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500"
    }
  ];

  return (
    <section id="media" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Media & News
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest news and global activities
          </p>
        </div>

        {/* Flight Map Animation */}
        <div className="mb-16 animate-fade-in-up [animation-delay:200ms]">
          <FlightMapSection />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <Card
              key={item.title}
              className="overflow-hidden hover:[box-shadow:var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
