import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";
import { Logo } from "./Logo";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/", icon: Star },
    { label: "About", href: "/about", icon: Sparkles },
    { label: "Services", href: "/services", icon: Zap },
    { label: "Portfolio", href: "/portfolio", icon: Star },
    { label: "Pricing", href: "/pricing", icon: Sparkles },
    { label: "Blog", href: "/blog", icon: Zap },
    { label: "Contact", href: "/contact", icon: Star },
  ];

  const navVariants = {
    default: {
      background: "rgba(var(--background-rgb), 0.8)",
      borderRadius: "0px",
      backdropFilter: "blur(20px)",
    },
    scrolled: {
      background: "rgba(var(--background-rgb), 0.95)",
      borderRadius: "20px",
      backdropFilter: "blur(30px)",
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 nav-3d header-3d-float mx-4 mt-4"
      animate={isScrolled ? "scrolled" : "default"}
      variants={navVariants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="preserve-3d"
        >
          <Logo />
        </motion.div>

        {/* Enhanced Desktop Navigation with 3D Magic */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link key={item.label} to={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 8,
                    rotateX: -8,
                    translateZ: 20,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredItem(item.label)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-500 relative group preserve-3d cursor-pointer ${
                    isActive
                      ? "text-primary bg-primary/10 border border-primary/30"
                      : "text-foreground hover:text-primary"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "500px",
                  }}
                >
                  {/* 3D Background Layer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={{
                      opacity: hoveredItem === item.label ? 1 : 0,
                      scale: hoveredItem === item.label ? 1 : 0.8,
                      rotateY: hoveredItem === item.label ? 0 : -15,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating Icon */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                    animate={{
                      opacity: hoveredItem === item.label ? 1 : 0,
                      scale: hoveredItem === item.label ? 1 : 0,
                      rotateZ: hoveredItem === item.label ? 0 : -180,
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <IconComponent className="w-3 h-3 text-primary-foreground" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-2">
                    <motion.span
                      animate={{
                        rotateX: hoveredItem === item.label ? [0, 5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.label}
                    </motion.span>
                  </div>

                  {/* 3D Underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                    initial={{ width: 0, rotateX: -90 }}
                    animate={{
                      width: isActive
                        ? "100%"
                        : hoveredItem === item.label
                        ? "100%"
                        : 0,
                      rotateX: isActive || hoveredItem === item.label ? 0 : -90,
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Particle Effects */}
                  {hoveredItem === item.label && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full"
                          initial={{
                            x: "50%",
                            y: "50%",
                            opacity: 0,
                          }}
                          animate={{
                            x: `${50 + (Math.random() - 0.5) * 100}%`,
                            y: `${50 + (Math.random() - 0.5) * 100}%`,
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1,
                            delay: i * 0.1,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </Link>
            );
          })}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
            className="preserve-3d"
          >
            <DarkModeToggle />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateY: 8, translateZ: 15 }}
            whileTap={{ scale: 0.95 }}
            className="preserve-3d relative"
          >
            <Link to="/contact">
              <Button
                variant="default"
                className="glow-primary btn-3d relative overflow-hidden group bg-gradient-to-r from-primary via-secondary to-accent"
              >
                <motion.span
                  className="relative z-10"
                  animate={{
                    rotateY: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Get Started
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Sparkle Effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    animate={{
                      x: [0, Math.random() * 100],
                      y: [0, Math.random() * 30],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
            className="preserve-3d"
          >
            <DarkModeToggle />
          </motion.div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative text-foreground hover:text-primary transition-colors preserve-3d p-2 rounded-xl border border-border/50"
            whileHover={{
              scale: 1.1,
              rotateY: 10,
              translateZ: 15,
              borderColor: "hsl(var(--primary) / 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotateY: 15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div
              animate={{
                rotate: isOpen ? 180 : 0,
                rotateY: isOpen ? 10 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>

            {/* Floating indicator */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
              animate={{
                scale: isOpen ? [1, 1.3, 1] : [0, 1, 0],
                opacity: isOpen ? 1 : [0, 1, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: isOpen ? 0 : Infinity,
                repeatDelay: 2,
              }}
            />
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu with 3D Magic */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              rotateX: -25,
              y: -20,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              rotateX: -25,
              y: -20,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:hidden mx-4 mb-4 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden shadow-2xl card-3d preserve-3d"
            style={{
              transformStyle: "preserve-3d",
              perspective: "800px",
            }}
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: -30,
                      rotateY: -15,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      scale: 1,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      translateZ: 10,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="preserve-3d relative"
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 text-lg font-medium transition-all duration-300 py-4 px-4 rounded-xl relative group ${
                        isActive
                          ? "text-primary bg-primary/10 border border-primary/30"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {/* Icon */}
                      <motion.div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                        animate={{
                          rotateY: isActive ? [0, 360] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                          ease: "linear",
                        }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </motion.div>

                      {/* Label */}
                      <motion.span
                        animate={{
                          rotateX: [0, 2, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {item.label}
                      </motion.span>

                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute right-4 w-2 h-2 bg-primary rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  delay: navItems.length * 0.1 + 0.2,
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 8,
                  translateZ: 15,
                }}
                whileTap={{ scale: 0.95 }}
                className="preserve-3d relative mt-4"
              >
                <Link to="/contact">
                  <Button
                    variant="default"
                    className="glow-primary w-full btn-3d relative overflow-hidden group bg-gradient-to-r from-primary via-secondary to-accent"
                  >
                    <motion.span
                      className="relative z-10 flex items-center justify-center gap-2"
                      animate={{
                        rotateY: [0, 3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Sparkles className="w-4 h-4" />
                      Get Started
                      <Sparkles className="w-4 h-4" />
                    </motion.span>

                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Corner sparkles */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          top: i < 2 ? "10%" : "90%",
                          left: i % 2 === 0 ? "10%" : "90%",
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.5,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
