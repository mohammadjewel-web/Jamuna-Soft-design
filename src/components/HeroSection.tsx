import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "./ParticleBackground";
import { ChevronDown, Play, Code, Rocket, Zap } from "lucide-react";

export const HeroSection = () => {
  const [glitchText, setGlitchText] = useState("JAMUNA SOFT");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const fullText = "JAMUNA SOFT";
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let iteration = 0;

    const interval = setInterval(() => {
      setGlitchText(
        fullText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return fullText[index];
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("")
      );

      if (iteration >= fullText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 hero-3d"
      style={{ y, opacity }}
    >
      {/* Enhanced 3D gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-90" />

      {/* 3D Layered backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-primary/5" />

      {/* Radial glow effect */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-glow)" }}
      />

      {/* 3D Depth layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent" />

      {/* Interactive mouse spotlight */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particle background */}
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4 text-center hero-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -30, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8 preserve-3d"
        >
          {/* Enhanced 3D Glitch text effect */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="preserve-3d"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-glow-primary hero-text-3d">
              <motion.span
                className="gradient-text inline-block"
                animate={{
                  rotateY: [0, 5, 0],
                  rotateX: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {glitchText}
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body preserve-3d"
          >
            Next-gen software solutions for Gen Z creators. Building the future,
            one line of code at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center preserve-3d"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 8, translateZ: 15 }}
              whileTap={{ scale: 0.95 }}
              className="preserve-3d relative"
            >
              <a href="#portfolio">
                <Button
                  size="lg"
                  className="glow-primary text-lg px-8 py-6 font-semibold group relative overflow-hidden hero-btn-3d bg-gradient-to-r from-primary via-secondary to-accent"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Explore Projects
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary bg-[length:200%_100%] animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Floating particles on hover */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        x: [0, Math.random() * 40 - 20],
                        y: [0, Math.random() * 40 - 20],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </Button>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: -8, translateZ: 15 }}
              whileTap={{ scale: 0.95 }}
              className="preserve-3d relative"
            >
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hero-btn-3d relative group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Contact Us
                  </span>

                  {/* Border glow effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 group-hover:opacity-100"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 8px rgba(59, 130, 246, 0)",
                      ],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                </Button>
              </a>
            </motion.div>

            {/* Demo video button */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5, translateZ: 15 }}
              whileTap={{ scale: 0.95 }}
              className="preserve-3d relative"
            >
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="text-lg px-8 py-6 hero-btn-3d relative group bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </span>

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotateY: 10 }}
            className="pt-12 preserve-3d"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotateX: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="preserve-3d"
            >
              <ChevronDown className="w-8 h-8 mx-auto text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced 3D Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg preserve-3d hero-float-3d"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 border-2 border-secondary/30 rotate-45 preserve-3d"
        animate={{
          rotateZ: [0, 360],
          rotateY: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-12 h-12 border-2 border-accent/30 rounded-full preserve-3d"
        animate={{
          scale: [1, 1.2, 1],
          rotateX: [0, 180, 360],
          rotateY: [0, 90, 180],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-primary/20 rounded-lg preserve-3d"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 180, 360],
          rotateZ: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-6 h-6 border-2 border-secondary/20 rounded-full preserve-3d"
        animate={{
          y: [0, -15, 0],
          rotateY: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Additional 3D elements */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-4 h-4 border-2 border-primary/15 rounded-full preserve-3d"
        animate={{
          rotateX: [0, 360],
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-10 h-10 border-2 border-accent/25 rounded-lg preserve-3d"
        animate={{
          rotateY: [0, 180, 360],
          rotateX: [0, 15, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      <motion.div
        className="absolute top-2/3 left-1/5 w-14 h-14 border-2 border-secondary/20 rounded-lg preserve-3d"
        animate={{
          rotateZ: [0, 45, 90, 135, 180],
          scale: [1, 1.05, 1],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </motion.section>
  );
};
