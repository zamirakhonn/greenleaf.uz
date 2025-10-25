import { useEffect, useRef } from "react";

const GlobalMapSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Countries/regions where Greenleaf operates
    const locations = [
      { x: 0.2, y: 0.3, label: "Europe" },
      { x: 0.5, y: 0.3, label: "Asia" },
      { x: 0.15, y: 0.5, label: "Africa" },
      { x: 0.75, y: 0.4, label: "Oceania" },
      { x: 0.8, y: 0.3, label: "North America" },
      { x: 0.82, y: 0.6, label: "South America" },
    ];

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between locations
      ctx.strokeStyle = "rgba(59, 130, 246, 0.2)";
      ctx.lineWidth = 1;

      for (let i = 0; i < locations.length; i++) {
        for (let j = i + 1; j < locations.length; j++) {
          const from = locations[i];
          const to = locations[j];
          
          ctx.beginPath();
          ctx.moveTo(from.x * canvas.width, from.y * canvas.height);
          ctx.lineTo(to.x * canvas.width, to.y * canvas.height);
          ctx.stroke();
        }
      }

      // Draw pulsing circles at each location
      locations.forEach((loc, index) => {
        const x = loc.x * canvas.width;
        const y = loc.y * canvas.height;
        const pulse = Math.sin(time + index * 0.5) * 0.5 + 0.5;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20 + pulse * 10);
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 20 + pulse * 10, 0, Math.PI * 2);
        ctx.fill();

        // Inner dot
        ctx.fillStyle = "#3b82f6";
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      time += 0.02;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-2">30+ Countries</h3>
          <p className="text-muted-foreground">Global Reach & Impact</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalMapSection;
