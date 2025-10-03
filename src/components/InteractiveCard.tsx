import { motion, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InteractiveCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  index?: number;
}

export const InteractiveCard = ({
  title,
  description,
  icon: Icon,
  gradient,
  index = 0,
}: InteractiveCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    try {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    } catch (error) {
      console.warn("Mouse tracking error:", error);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05, translateZ: 50 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      <Card
        className={`relative overflow-hidden border-2 transition-all duration-500 ${gradient} backdrop-blur-sm min-h-[300px]`}
      >
        {/* 3D Glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${
              mousePosition.x + 150
            }px ${
              mousePosition.y + 150
            }px, rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />

        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                initial={{
                  x: mousePosition.x,
                  y: mousePosition.y,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  x: mousePosition.x + (Math.random() - 0.5) * 100,
                  y: mousePosition.y + (Math.random() - 0.5) * 100,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}

        <CardContent className="p-8 relative z-10">
          {/* 3D Icon */}
          <motion.div
            className="mb-6 relative"
            animate={{
              rotateY: isHovered ? [0, 360] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 relative">
              <Icon className="w-8 h-8 text-white drop-shadow-lg" />

              {/* Icon glow */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-xl"
                animate={{
                  scale: isHovered ? [1, 1.3, 1] : 1,
                  opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                }}
              />
            </div>
          </motion.div>

          {/* 3D Text */}
          <motion.div
            animate={{
              rotateX: isHovered ? [0, 5, 0] : 0,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              {title}
            </h3>
            <p className="text-white/80 text-center leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Corner decorations */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 border-2 border-white/30"
              style={{
                top: i < 2 ? "20px" : "auto",
                bottom: i >= 2 ? "20px" : "auto",
                left: i % 2 === 0 ? "20px" : "auto",
                right: i % 2 === 1 ? "20px" : "auto",
                borderRadius: i % 2 === 0 ? "50%" : "0%",
              }}
              animate={{
                rotate: isHovered ? [0, 180, 360] : 0,
                scale: isHovered ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Bottom highlight */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};
