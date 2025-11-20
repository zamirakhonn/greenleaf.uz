import { useEffect, useRef } from "react";

const GlobalMapSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const locations = [
      { x: 0.5, y: 0.3, flag: "🇨🇳" },
      { x: 0.6, y: 0.35, flag: "🇺🇿" },
      { x: 0.3, y: 0.4, flag: "🇩🇪" },
      { x: 0.75, y: 0.4, flag: "🇦🇺" },
      { x: 0.15, y: 0.5, flag: "🇿🇦" },
      { x: 0.82, y: 0.6, flag: "🇧🇷" },
    ];

    let animationFrame: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const animate = () => {
      resizeCanvas();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw glowing lines between countries
      for (let i = 0; i < locations.length; i++) {
        for (let j = i + 1; j < locations.length; j++) {
          const from = locations[i];
          const to = locations[j];

          const progress = (Math.sin(time * 2 + i + j) + 1) / 2; // animate glow along line

          // Base line
          ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(from.x * canvas.width, from.y * canvas.height);
          ctx.lineTo(to.x * canvas.width, to.y * canvas.height);
          ctx.stroke();

          // Shining moving glow
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.8 * progress})`;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(
            from.x * canvas.width + (to.x * canvas.width - from.x * canvas.width) * progress,
            from.y * canvas.height + (to.y * canvas.height - from.y * canvas.height) * progress
          );
          ctx.lineTo(
            from.x * canvas.width + (to.x * canvas.width - from.x * canvas.width) * Math.min(progress + 0.05, 1),
            from.y * canvas.height + (to.y * canvas.height - from.y * canvas.height) * Math.min(progress + 0.05, 1)
          );
          ctx.stroke();
        }
      }

      // Draw pulsing glow + emoji flags
      locations.forEach((loc, index) => {
        const x = loc.x * canvas.width;
        const y = loc.y * canvas.height;
        const pulse = Math.sin(time + index * 0.5) * 0.5 + 0.5;

        // Outer pulsing glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 25 + pulse * 15);
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.9)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 25 + pulse * 15, 0, Math.PI * 2);
        ctx.fill();

        // Draw emoji flag
        const fontSize = Math.max(canvas.width, canvas.height) * 0.04;
        ctx.font = `${fontSize}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(loc.flag, x, y);
      });

      time += 0.02;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[300px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center px-4">
          <p className="text-muted-foreground text-sm sm:text-base font-medium">
            🌍 30+ mamlakatda faoliyat yuritamiz – dunyo bo‘ylab yetib boramiz va ta’sir ko‘rsatamiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalMapSection;
