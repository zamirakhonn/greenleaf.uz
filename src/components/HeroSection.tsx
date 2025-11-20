// import { Button } from "@/components/ui/button";
// import { ArrowRight, ShoppingBag, BookOpen } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Modern Gradient Background */}
//       <div className="absolute inset-0 [background:linear-gradient(135deg,hsl(var(--primary)/0.05),hsl(var(--secondary)/0.1))]" />
      
//       {/* Animated Gradient Orbs */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 text-center">
//         <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
//           Welcome to Greenleaf Journal
//         </h1>
//         <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
//           Immerse yourself in the harmony of nature, health, and beauty
//         </p>
//         <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
//           Inspired by nature, caring for life!
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:600ms]">
//           <Button 
//             size="lg" 
//             className="group"
//             asChild
//           >
//             <a href="#newsletters">
//               <BookOpen className="mr-2 h-5 w-5" />
//               Explore Articles
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </a>
//           </Button>
//           <Button 
//             size="lg" 
//             variant="secondary"
//             className="group"
//             asChild
//           >
//             <a href="#products">
//               <ShoppingBag className="mr-2 h-5 w-5" />
//               Shop Now
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </a>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-nature.jpg";

const HeroSection = () => {
  return (
   <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24"
>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Animated Gradient Orbs (from your modern version) */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
       <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
           Greenleaf - tabiatdan ilhom, 
            <span className="text-primary block mt-2">hayot uchun g‘amxo‘rlik!</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            <b>Greenleaf </b>– bu 6000 dan ortiq ekologik toza, xavfsiz va zamonaviy mahsulotlar jamlanmasi. Siz va oilangiz uchun sog‘lom tanlov!
          </p>
        </motion.div>

         {/* Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 5, duration: 0.6 }}
  className="flex flex-col sm:flex-row gap-4 justify-center"
>
  {/* Explore Articles */}
  <motion.div
    animate={{
      scale: [1, 1.02, 1],
      boxShadow: [
        "0 0 20px rgba(34,197,94,0.4)",
        "0 0 30px rgba(34,197,94,0.7)",
        "0 0 20px rgba(34,197,94,0.4)",
      ],
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <Button
      size="lg"
      className="group relative overflow-hidden text-white font-semibold rounded-xl
                 bg-gradient-to-r from-green-700 via-emerald-600 to-lime-600
                 shadow-[0_0_25px_rgba(16,185,129,0.6)]
                 transition-all duration-700 hover:scale-[1.05]"
      asChild
    >
      <a href="#newsletters" className="relative z-10 flex items-center">
        <BookOpen className="mr-2 h-5 w-5" />
       Eco Jurnalda ilhom oling
        <ArrowRight className="ml-2 h-5 w-5 transition-transform" />

        {/* Continuous shine beam */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
          animate={{ x: ["-200%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </a>
    </Button>
  </motion.div>

  {/* Shop Now */}
  <motion.div
    animate={{
      scale: [1, 1.02, 1],
      boxShadow: [
        "0 0 20px rgba(132,204,22,0.4)",
        "0 0 30px rgba(132,204,22,0.7)",
        "0 0 20px rgba(132,204,22,0.4)",
      ],
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <Button
      size="lg"
      variant="secondary"
      className="group relative overflow-hidden font-semibold rounded-xl text-white
                 bg-gradient-to-r from-lime-700 via-green-700 to-emerald-700
                 shadow-[0_0_25px_rgba(101,163,13,0.6)]
                 transition-all duration-700 hover:scale-[1.05]"
      asChild
    >
      <a href="#products" className="relative z-10 flex items-center">
        <ShoppingBag className="mr-2 h-5 w-5" />
       Mahsulotlar xaridiga o‘ting
        <ArrowRight className="ml-2 h-5 w-5 transition-transform" />

        {/* Continuous shine beam */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
          animate={{ x: ["-200%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </a>
    </Button>
  </motion.div>
</motion.div>

{/* Scroll Indicator */}
<motion.div
  className="absolute -bottom-24 left-1/2 -translate-x-1/2 z-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 5.5, duration: 1 }}
>
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="w-7 h-12 border-2 border-primary/80 rounded-full flex items-start justify-center p-2 bg-white/20 backdrop-blur-md shadow-md"
  >
    <motion.div
      animate={{ y: [0, 14, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-1.5 h-1.5 bg-primary rounded-full"
    />
  </motion.div>
</motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
