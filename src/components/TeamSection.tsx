import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Movluda Asqarxo‘jayeva",
      role: "Ijrochi direktor",
      image: "https://uzreport.news/fotobank/image/f2bf5f1d9f1dc66073e3e2eb79b0aba9.jpeg",
      bio: "Barqaror hayot va atrof-muhitni muhofaza qilishga ishtiyoqli yetakchi"
    },
    {
      name: "Mohibonu Xudaynazarova ",
      role: "Marketolog, biznes mentor",
      image: "/images/team/mohibonu.png",
      bio: "Liderlik — bu biznesning yuragi. Maqsadim — har bir insonni o‘z liderlik cho‘qqisiga olib chiqish"
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
      bio: "Leading our mission for a greener, healthier planet"
    },
    {
      name: "Michael Park",
      role: "Global Operations Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
      bio: "Ensuring quality and sustainability across all operations"
    }
  ];

  return (
    <section id="team" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
           Bizning Jamoamiz
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Greenleaf’ning barqaror kelajagi uchun ishlaydigan ishtiyoqli jamoa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={member.name}
              className="overflow-hidden [background:var(--gradient-card)] border-border hover:[box-shadow:var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
