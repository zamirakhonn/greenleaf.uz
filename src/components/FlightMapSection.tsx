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

        ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
        ctx.setLineDash([]);

        const planeX = fromX + (toX - fromX) * route.progress;
        const planeY = fromY + (toY - fromY) * route.progress;

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

        route.progress += 0.005;
        if (route.progress > 1) route.progress = 0;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Canvas – now transparent and above video */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default FlightMapSection;
