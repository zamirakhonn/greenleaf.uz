import { useEffect, useRef, useState } from "react";
import { TrendingUp, Globe, Building2, Users } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const StatisticsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: Stat[] = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 10,
      suffix: "B ",
      prefix: "$",
      label: "Yillik savdo maqsadimiz bilan o‘sishimizni ko‘rsatamiz"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: 30,
      suffix: "+",
      label: "Dunyo bo‘ylab xizmat qilinadigan mamlakatlar"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      value: 68,
      suffix: "M",
      prefix: "$",
      label: "Sanoat parklariga sarmoya, kelajak uchun barqaror infratuzilma yaratamiz"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 300000,
      suffix: "",
      label: "Dunyo bo‘ylab ishonchli hamkorlarimiz"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [inView, value]);

    return (
      <span className="text-5xl md:text-6xl font-bold text-primary">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Bizning Natijalarimiz
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-card rounded-lg border border-border [box-shadow:var(--shadow-soft)] hover:[box-shadow:var(--shadow-hover)] transition-all duration-300 animate-counter"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-4">
                {stat.icon}
              </div>
              <div className="mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                />
              </div>
              <p className="text-muted-foreground text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
