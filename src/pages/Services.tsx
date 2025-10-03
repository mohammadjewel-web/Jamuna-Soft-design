import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Globe,
  Server,
  Smartphone,
  Palette,
  Shield,
  Zap,
  Sparkles,
  Star,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ServiceCard } from "@/components/ServiceCard";
import { FloatingElements } from "@/components/FloatingElements";
import { SimpleFeatureCard } from "@/components/SimpleFeatureCard";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Custom AI and machine learning solutions tailored to your business needs. From chatbots to predictive analytics, we build intelligent systems that drive results.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
    gradient: "bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "End-to-end software development services using cutting-edge technologies. We build scalable, maintainable applications that grow with your business.",
    features: [
      "Custom Software",
      "API Development",
      "System Integration",
      "Legacy Modernization",
    ],
    gradient: "bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications that deliver exceptional user experiences across all devices and platforms.",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "CMS Development",
    ],
    gradient: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500",
  },
  {
    icon: Server,
    title: "Domain & Hosting",
    description:
      "Reliable domain registration and hosting services with 99.9% uptime guarantee. Secure, fast, and scalable infrastructure for your digital presence.",
    features: [
      "Domain Registration",
      "Cloud Hosting",
      "SSL Certificates",
      "Email Hosting",
    ],
    gradient: "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that engage users and drive business growth on iOS and Android platforms.",
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Flutter Apps",
    ],
    gradient: "bg-gradient-to-br from-pink-400 via-rose-500 to-red-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user experience at the forefront. We create designs that users love and businesses trust.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    gradient: "bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets from threats. Regular audits, penetration testing, and security implementation.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance",
      "Data Protection",
    ],
    gradient: "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Make your applications lightning-fast with our performance optimization services. Speed matters for user experience and SEO.",
    features: [
      "Code Optimization",
      "Database Tuning",
      "CDN Setup",
      "Caching Strategies",
    ],
    gradient: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
  },
];

const Services = () => {
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
                  Our Services
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
                Comprehensive technology solutions to power your digital
                transformation and drive business growth
              </motion.p>

              {/* Floating sparkles */}
              {[...Array(5)].map((_, i) => (
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
                  <Star className="w-4 h-4 text-primary/60" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
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
                What We Offer
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert solutions tailored to your unique business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.slice(0, 6).map((service, index) => (
                <SimpleFeatureCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  gradient={service.gradient}
                  index={index}
                />
              ))}
            </div>

            {/* Additional services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.slice(6).map((service, index) => (
                <SimpleFeatureCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  gradient={service.gradient}
                  index={index + 6}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center mb-24 last:mb-0`}
              >
                <div className="flex-1">
                  <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg glow-primary">
                    <service.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-4xl font-heading font-bold mb-4 gradient-text">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary glow-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative h-80 rounded-xl overflow-hidden border border-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-primary/30" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Services;
