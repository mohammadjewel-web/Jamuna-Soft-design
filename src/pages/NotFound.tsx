import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative">
        <Navigation />

        {/* 3D Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-lg animate-levitate" />
          <div className="absolute bottom-20 right-16 w-24 h-24 border-2 border-secondary/20 rotate-45 animate-float" />
          <div className="absolute top-1/3 right-20 w-16 h-16 border-2 border-accent/20 rounded-full animate-pulse-glow" />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <section className="pt-32 pb-16 flex items-center justify-center min-h-screen relative z-10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 preserve-3d"
            >
              {/* 3D 404 Text */}
              <motion.div
                animate={{
                  rotateY: [0, 5, 0],
                  rotateX: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="preserve-3d"
              >
                <h1 className="text-9xl md:text-[12rem] font-heading font-black gradient-text hero-text-3d">
                  404
                </h1>
              </motion.div>

              {/* Floating Sparkles around 404 */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  animate={{
                    x: [0, Math.random() * 60 - 30],
                    y: [0, Math.random() * 60 - 30],
                    opacity: [0, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                  style={{
                    left: `${45 + Math.random() * 10}%`,
                    top: `${30 + Math.random() * 20}%`,
                  }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-4"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Oops! Page Not Found
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The page you're looking for doesn't exist. It might have been
                  moved, deleted, or you entered the wrong URL.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5, translateZ: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="preserve-3d"
                >
                  <Link to="/">
                    <Button
                      size="lg"
                      className="glow-primary text-lg px-8 py-6 font-semibold relative overflow-hidden group bg-gradient-to-r from-primary via-secondary to-accent"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Home className="w-5 h-5" />
                        Back to Home
                      </span>

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
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, rotateY: -5, translateZ: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="preserve-3d"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.history.back()}
                    className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hero-btn-3d"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Go Back
                  </Button>
                </motion.div>
              </motion.div>

              {/* Fun Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-muted-foreground text-sm"
              >
                <motion.p
                  animate={{
                    rotateX: [0, 2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Lost in the digital void? Let's get you back on track! 🚀
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default NotFound;
