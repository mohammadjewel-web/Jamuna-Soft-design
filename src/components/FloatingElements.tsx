import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Code,
  Zap,
  Palette,
  Globe,
  Rocket,
  Star,
  Heart,
  Sparkles,
  Diamond,
  Hexagon,
  Triangle,
  Circle,
} from "lucide-react";

export const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: Code, color: "text-primary", size: "w-8 h-8", delay: 0 },
    { icon: Zap, color: "text-secondary", size: "w-6 h-6", delay: 0.5 },
    { icon: Palette, color: "text-accent", size: "w-7 h-7", delay: 1 },
    { icon: Globe, color: "text-primary", size: "w-5 h-5", delay: 1.5 },
    { icon: Rocket, color: "text-secondary", size: "w-9 h-9", delay: 2 },
    { icon: Star, color: "text-accent", size: "w-4 h-4", delay: 2.5 },
    { icon: Heart, color: "text-primary", size: "w-6 h-6", delay: 3 },
    { icon: Sparkles, color: "text-secondary", size: "w-7 h-7", delay: 3.5 },
    { icon: Diamond, color: "text-accent", size: "w-5 h-5", delay: 4 },
    { icon: Hexagon, color: "text-primary", size: "w-6 h-6", delay: 4.5 },
    { icon: Triangle, color: "text-secondary", size: "w-8 h-8", delay: 5 },
    { icon: Circle, color: "text-accent", size: "w-4 h-4", delay: 5.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Mouse-following orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
          mass: 0.5,
        }}
      />

      {/* Floating icons */}
      {floatingElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${element.color} ${element.size} opacity-30`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotateZ: Math.random() * 360,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              rotateZ: [0, 360],
              rotateY: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: element.delay,
              ease: "linear",
            }}
            whileHover={{
              scale: 2,
              opacity: 0.8,
              rotateZ: 180,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <IconComponent className="w-full h-full drop-shadow-lg" />
          </motion.div>
        );
      })}

      {/* Geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute border-2 border-primary/20"
          style={{
            width: 20 + Math.random() * 40,
            height: 20 + Math.random() * 40,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            transformStyle: "preserve-3d",
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotateX: Math.random() * 360,
            rotateY: Math.random() * 360,
            rotateZ: Math.random() * 360,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Particle trails */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 10,
            opacity: 0,
          }}
          animate={{
            y: -10,
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};
