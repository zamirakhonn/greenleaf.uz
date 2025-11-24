import React from "react";

const BrandsSlider: React.FC = () => {
  const brandImages = [
    "/src/assets/brand1.png",
    "/src/assets/brand2.png",
    "/src/assets/brand3.png",
    "/src/assets/brand4.png",
    "/src/assets/brand5.png",
    "/src/assets/brand6.png",
    "/src/assets/brand7.png",
    "/src/assets/brand8.png",
     "/src/assets/brand3.png",
  
  ];

  return (
    <section className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Bizga Ishonadigan Brendlar
        </h2>
        <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
      </div>

      <div className="overflow-hidden w-full relative">
        <div
          className="flex items-center gap-12 animate-slide"
          style={{ width: `calc(200px * ${brandImages.length * 2})` }}
        >
          {brandImages.concat(brandImages).map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 flex items-center justify-center"
            >
              <img
                src={img}
                alt={`brand-${index}`}
                className="opacity-90 hover:opacity-100 transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandsSlider;