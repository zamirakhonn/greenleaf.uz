"use client";

import { Calendar } from "lucide-react";
import HTMLFlipBook from "react-pageflip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const NewslettersSection = () => {
  const baseNewsletters = [
    {
      title: "Eco Lifestyle: Living in Harmony with Nature",
      description:
        "",
      date: "March 15, 2025",
      category: "Lifestyle",
      image:
        "/images/team/oblojka.png",
    },
    {
      title: "Health & Wellness: Natural Remedies",
      description:
        "",
      date: "March 10, 2025",
      category: "Health",
      image:
        "/images/team/oblojka.png",
    },
    {
      title: "Beauty Innovations: Clean Cosmetics Revolution",
      description:
        "",
      date: "March 5, 2025",
      category: "Beauty",
      image:
        "/images/team/oblojka.png",
    },
    {
      title: "Home & Garden: Creating Green Spaces",
      description:
        "",
      date: "February 28, 2025",
      category: "Home",
      image:
        "/images/team/oblojka.png",
    },
    {
      title: "Sustainable Travel: Explore Responsibly",
      description:
        "",
      date: "February 20, 2025",
      category: "Travel",
      image:
        "/images/team/oblojka.png",
    },
    {
      title: "Green Technology: Innovations for a Cleaner Planet",
      description:
        "",
      date: "February 15, 2025",
      category: "Tech",
      image:
        "/images/team/oblojka.png",
    },
    {
      title: "Plant-Based Living: Delicious Recipes",
      description:
        "",
      date: "February 10, 2025",
      category: "Food",
      image:
        "/images/team/oblojka.png",
    },
    {
      title: "Eco Fashion: Sustainable Style",
      description:
        "",
      date: "February 5, 2025",
      category: "Fashion",
      image:
        "/images/team/oblojka.png",
    },
  ];

  // Duplicate pages to make 18 total pages
  const newsletters = [...baseNewsletters, ...baseNewsletters.slice(0, 10)];

  return (
    <section
      id="newsletters"
      // Use the new warm background colors (background & muted)
      className="py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Text color is now dark brown/black (foreground) */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            So‘nggi nashr etilgan jurnallar
          </h2>
          {/* Accent line using primary color (rich brown) */}
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          {/* Text color is now a muted version of foreground */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ekologik hayot, sog‘lom turmush, go‘zallik va barqarorlik bo‘yicha
            so‘nggi maqolalarimizdan xabardor bo‘ling.
          </p>
        </div>

        {/* Flipbook */}
        <div className="flex justify-center items-center">
          <HTMLFlipBook
            // DECREASED SIZE
            width={380} 
            height={820}
            minWidth={240}
            maxWidth={600}
            minHeight={320}
            maxHeight={650}
            drawShadow={true}
            flippingTime={900}
            useMouseEvents={true}
            autoSize={true}
            size="stretch"
            // Border and background to match paper look
            className="rounded-xl shadow-xl overflow-hidden border border-border bg-white"
            maxShadowOpacity={0.4}
            showCover={true}
            mobileScrollSupport={true}
          >
            {newsletters.map((newsletter, index) => (
              <div
                key={`${newsletter.title}-${index}`}
                // Page background uses card/muted colors for a subtle gradient
                className="page bg-gradient-to-b from-card to-muted p-5 md:p-8 flex flex-col justify-between rounded-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg shadow-sm mb-4">
                  <img
                    src={newsletter.image}
                    alt={newsletter.title}
                    className="w-full h-100 md:h-206 object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                  />
                  {/* Badge using accent color (vibrant orange/terracotta) */}
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground shadow-md">
                    {newsletter.category}
                  </Badge>
                </div>

                {/* Text */}
                <div>
                  {/* Date using muted-foreground color */}
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {newsletter.date}
                  </div>
                  {/* Title using foreground color (dark brown/black) */}
                  <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-2 leading-tight">
                    {newsletter.title}
                  </h3>
                  {/* Description using muted-foreground color */}
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {newsletter.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-4 text-right">
                  {/* Button using secondary color (rich blue) */}
                  <Button
                    variant="ghost"
                    className="text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>

        {/* CTA - LINKS TO #products SECTION */}
        <div className="text-center mt-14">
          <a href="#products"> 
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 rounded-full shadow-md transition-all"
            >
              Do you want to buy our eco journals?
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewslettersSection;