import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Zap,
  Shield,
  Rocket,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export const TechGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const techStacks = [
    {
      category: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-purple-600",
      technologies: [
        "React",
        "Vue.js",
        "Angular",
        "TypeScript",
        "Tailwind CSS",
      ],
      description:
        "Modern, responsive user interfaces that captivate and engage users.",
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "from-green-500 to-teal-600",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
      description:
        "Cross-platform mobile applications with native performance.",
    },
    {
      category: "Backend",
      icon: Database,
      color: "from-orange-500 to-red-600",
      technologies: ["Node.js", "Python", "Java", "Go", "PostgreSQL"],
      description:
        "Scalable server architectures that power your applications.",
    },
    {
      category: "Cloud",
      icon: Cloud,
      color: "from-cyan-500 to-blue-600",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
      description:
        "Cloud-native solutions for maximum scalability and reliability.",
    },
    {
      category: "AI/ML",
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Computer Vision",
        "NLP",
      ],
      description: "Intelligent systems that learn, adapt, and innovate.",
    },
    {
      category: "Security",
      icon: Shield,
      color: "from-emerald-500 to-green-600",
      technologies: [
        "OAuth",
        "JWT",
        "Encryption",
        "Penetration Testing",
        "GDPR",
      ],
      description: "Enterprise-grade security to protect your digital assets.",
    },
  ];

  // Auto-rotate functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techStacks.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [techStacks.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % techStacks.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + techStacks.length) % techStacks.length
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Tech Arsenal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies that bring your ideas to life
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-primary/30 hover:bg-primary/10"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex gap-2">
            {techStacks.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-primary/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-primary/30 hover:bg-primary/10"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Tech Stack Cards */}
        <div className="relative h-96 overflow-hidden perspective-1000">
          <AnimatePresence mode="wait">
            {techStacks.map((stack, index) => {
              const IconComponent = stack.icon;
              const isActive = index === activeIndex;
              const offset = index - activeIndex;

              return (
                <motion.div
                  key={index}
                  initial={{
                    x: offset * 400,
                    rotateY: offset * 25,
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    x: isActive ? 0 : offset * 400,
                    rotateY: isActive ? 0 : offset * 25,
                    opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.6 : 0,
                    scale: isActive ? 1 : 0.8,
                    zIndex: isActive ? 10 : Math.abs(offset) === 1 ? 5 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex items-center justify-center preserve-3d"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Card
                    className={`w-full max-w-2xl h-80 bg-gradient-to-br ${stack.color} border-0 shadow-2xl overflow-hidden`}
                  >
                    <CardContent className="p-8 h-full flex flex-col justify-between relative">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-8 gap-4 h-full">
                          {[...Array(32)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="bg-white rounded"
                              animate={{
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.1,
                                repeat: Infinity,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.div
                          className="flex items-center gap-4 mb-6"
                          animate={{
                            rotateY: isActive ? [0, 10, 0] : 0,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-white">
                            {stack.category}
                          </h3>
                        </motion.div>

                        <p className="text-white/90 text-lg mb-6 leading-relaxed">
                          {stack.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {stack.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: isActive ? techIndex * 0.1 : 0,
                                duration: 0.3,
                              }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>

                        <Button
                          variant="secondary"
                          className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>

                      {/* Decorative elements */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          animate={{
                            x: [0, Math.random() * 200 - 100],
                            y: [0, Math.random() * 200 - 100],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.5,
                            repeat: Infinity,
                          }}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        />
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Auto-rotate indicator */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Rocket className="w-4 h-4" />
            <span>Auto-rotating every 5 seconds</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
