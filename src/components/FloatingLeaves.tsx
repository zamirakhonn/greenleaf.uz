import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import local images
import leaf1 from '@/assets/leaf-1.png';
import leaf2 from '@/assets/leaf-2.png';

interface Leaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  duration: number;
  delay: number;
  src: string;
}

// Use your imported images
const leafImages = [leaf1, leaf2];

const FloatingLeaves = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generatedLeaves: Leaf[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: 0.3 + Math.random() * 0.5,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
      src: leafImages[Math.floor(Math.random() * leafImages.length)]
    }));
    setLeaves(generatedLeaves);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => {
        const distanceX = (mousePosition.x - window.innerWidth / 2) / 50;
        const distanceY = (mousePosition.y - window.innerHeight / 2) / 50;

        return (
          <motion.img
            key={leaf.id}
            src={leaf.src}
            alt=""
            className="absolute opacity-20"
            initial={{
              left: `${leaf.x}%`,
              top: `${leaf.y}%`,
              rotate: leaf.rotation,
              scale: leaf.scale,
            }}
            animate={{
              y: [0, -30, 0, -20, 0],
              x: [0, 15, -15, 10, 0],
              rotate: [leaf.rotation, leaf.rotation + 10, leaf.rotation - 10, leaf.rotation + 5, leaf.rotation],
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transform: `translate(${distanceX}px, ${distanceY}px)`,
              width: '80px',
              height: '80px',
              filter: 'blur(0.5px)',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingLeaves;
