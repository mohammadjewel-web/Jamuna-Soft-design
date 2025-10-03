import { motion } from "framer-motion";
import { Users, Target, Zap, Award, Star, Sparkles, Heart } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingElements } from "@/components/FloatingElements";
import { SimpleFeatureCard } from "@/components/SimpleFeatureCard";

const timelineEvents = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started with a vision to revolutionize software development",
  },
  {
    year: "2019",
    title: "First AI Product",
    description: "Launched our first AI-powered solution for businesses",
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Expanded operations to serve clients worldwide",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Awarded 'Best Software Company' by Tech Innovation Awards",
  },
  {
    year: "2024",
    title: "100+ Projects",
    description: "Successfully delivered 100+ projects across 20+ countries",
  },
];

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sophia Martinez",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "David Kim",
    role: "Head of AI",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80",
  },
  {
    name: "Rachel Adams",
    role: "Lead Designer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Empowering businesses through cutting-edge technology and innovative solutions",
    gradient: "bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "Constantly pushing boundaries with creative solutions and emerging technologies",
    gradient: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our top priority with personalized attention and support",
    gradient: "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering quality that exceeds expectations through rigorous standards",
    gradient: "bg-gradient-to-br from-rose-400 via-pink-500 to-purple-500",
  },
];

const About = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative">
        <FloatingElements />
        <Navigation />

        {/* Enhanced Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden hero-3d">
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

          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg preserve-3d"
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

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: -30, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto space-y-8 preserve-3d"
            >
              <motion.div
                animate={{
                  rotateY: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="preserve-3d"
              >
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 gradient-text hero-text-3d">
                  About Jamuna Soft
                </h1>
              </motion.div>

              <motion.p
                className="text-xl text-muted-foreground leading-relaxed"
                animate={{
                  rotateX: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                We're a team of passionate innovators building the future of
                software, one line of code at a time. Our mission is to
                transform ideas into reality through cutting-edge technology and
                creative solutions.
              </motion.p>

              {/* Floating sparkles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  animate={{
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20],
                    opacity: [0, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-primary/60" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Values Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <SimpleFeatureCard
                  key={value.title}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  gradient={value.gradient}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text">
                Our Journey
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary glow-primary" />
                  <div className="text-primary font-heading font-bold text-xl mb-2">
                    {event.year}
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The brilliant minds behind Jamuna Soft
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group perspective-1000"
                >
                  <div className="preserve-3d transition-transform duration-300 group-hover:scale-105">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <h3 className="text-xl font-heading font-bold gradient-text mb-1">
                          {member.name}
                        </h3>
                        <p className="text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;
