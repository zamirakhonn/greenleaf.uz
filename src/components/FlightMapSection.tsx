import { useEffect, useRef } from "react";

const FlightMapSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Flight routes
    const routes = [
      { from: { x: 0.1, y: 0.3 }, to: { x: 0.5, y: 0.3 }, progress: 0 },
      { from: { x: 0.5, y: 0.3 }, to: { x: 0.8, y: 0.4 }, progress: 0 },
      { from: { x: 0.8, y: 0.4 }, to: { x: 0.15, y: 0.5 }, progress: 0 },
    ];

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      routes.forEach((route) => {
        const fromX = route.from.x * canvas.width;
        const fromY = route.from.y * canvas.height;
        const toX = route.to.x * canvas.width;
        const toY = route.to.y * canvas.height;

        // Draw route line
        ctx.strokeStyle = "rgba(59, 130, 246, 0.2)";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw moving plane
        const planeX = fromX + (toX - fromX) * route.progress;
        const planeY = fromY + (toY - fromY) * route.progress;

        // Draw plane (simple triangle)
        ctx.fillStyle = "#3b82f6";
        ctx.save();
        ctx.translate(planeX, planeY);
        const angle = Math.atan2(toY - fromY, toX - fromX);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(10, 0);
        ctx.lineTo(-5, -5);
        ctx.lineTo(-5, 5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Update progress
        route.progress += 0.005;
        if (route.progress > 1) {
          route.progress = 0;
        }
      });

      // Draw airport markers
      const airports = [
        ...routes.map(r => r.from),
        ...routes.map(r => r.to),
      ];

      airports.forEach((airport) => {
        const x = airport.x * canvas.width;
        const y = airport.y * canvas.height;

        ctx.fillStyle = "#3b82f6";
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.stroke();
      });

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
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
        <h3 className="text-xl font-bold text-foreground mb-1">Global Distribution Network</h3>
        <p className="text-sm text-muted-foreground">Delivering eco-friendly products worldwide</p>
      </div>
    </div>
  );
};

export default FlightMapSection;
