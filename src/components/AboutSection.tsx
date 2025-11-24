import { Heart, Leaf, Globe, Sparkles, Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import buildingImage from "@/assets/greenleaf-building.png";
import GlobalMapSection from "./GlobalMapSection";
import BrandsSlider from "./BrandSlider"; // <<--- ADDED

const AboutSection = () => {
  const whyChooseUs = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "🌿 100% Tabiiy Mahsulotlar",
      description: "Barcha mahsulotlar sof tabiiy ingredientlardan tayyorlangan"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "🏅 Sifatga Ishonch",
      description: "Xalqaro sertifikatlar va yuqori sifat standartlari bilan kafolatlangan mahsulotlar."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "🌍 Dunyo Bo‘ylab Faoliyat",
      description: "30+ mamlakatda faoliyat yuritamiz – siz bizning global oilamizning bir qismisiz!"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "🤝 300,000+ Hamkor",
      description: "Dunyo bo‘ylab millionlab mijozlar va hamkorlarimiz bizga ishonadi."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "💰 $10B Maqsad",
      description: "Yillik savdo o‘sishi bilan biz doimo rivojlanamiz va yangi imkoniyatlar yaratamiz."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "🛒 6,000+ Mahsulot",
      description: "Har xil ehtiyoj va did uchun keng assortiment – siz xohlaganingizni topasiz!"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Biz Kimmiz?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tabiiylik, sog‘lom hayot va atrof-muhit tozaligi asosida yaratilgan xalqaro brend.
          </p>
        </div>

        {/* Company Info */}
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Kompaniya haqida</h3>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Greenleaf (Suzhou Greenleaf Daily Commodity Co. Ltd) — tabiat bilan uyg‘unlikda yashash falsafasiga asoslangan xalqaro brend...
                </p>
                <p className="text-foreground leading-relaxed">
                  Bizning maqsadimiz — har bir oilaga sog‘lom, xavfsiz va ekologik toza mahsulotlar yetkazishdir...
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
                <p className="text-2xl font-semibold text-primary mb-2">Bizning Missiyamiz</p>
                <p className="text-foreground text-lg italic">
                  Tabiatdan ilhomlanib, hayotga g‘amxo‘rlik qilamiz!
                </p>
                <p className="text-muted-foreground mt-4">
                  Biz ekologik toza hayotni ommalashtirishga intilamiz...
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ⭐ ADDED BRANDS SLIDER HERE */}
        <BrandsSlider />

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in-up [animation-delay:400ms]">
            Nima Uchun Bizni Tanlashadi?
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

        {/* Global Map */}
        <div className="animate-fade-in-up [animation-delay:600ms]">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Dunyo Bo‘ylab Biz
          </h3>
          <GlobalMapSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
