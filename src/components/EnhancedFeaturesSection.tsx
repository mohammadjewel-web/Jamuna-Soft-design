import { motion } from "framer-motion";
import { SimpleFeatureCard } from "./SimpleFeatureCard";
import {
  Rocket,
  Zap,
  Shield,
  Globe,
  Code,
  Palette,
  Brain,
  Target,
  Users,
  Award,
} from "lucide-react";

export const EnhancedFeaturesSection = () => {
  const features = [
    {
      title: "Lightning Fast",
      description:
        "Optimized performance with cutting-edge technologies that deliver blazing-fast user experiences.",
      icon: Zap,
      gradient: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
    },
    {
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime guarantee. Your data is protected with military-grade encryption.",
      icon: Shield,
      gradient: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500",
    },
    {
      title: "Global Scale",
      description:
        "Built to scale globally with CDN distribution and cloud infrastructure that grows with your business.",
      icon: Globe,
      gradient: "bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-500",
    },
    {
      title: "Clean Code",
      description:
        "Maintainable, well-documented code following industry best practices and modern architectural patterns.",
      icon: Code,
      gradient:
        "bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600",
    },
    {
      title: "Beautiful Design",
      description:
        "Stunning UI/UX designs that not only look amazing but provide intuitive user experiences.",
      icon: Palette,
      gradient: "bg-gradient-to-br from-pink-400 via-rose-500 to-red-500",
    },
    {
      title: "AI-Powered",
      description:
        "Leverage artificial intelligence and machine learning to create intelligent, adaptive solutions.",
      icon: Brain,
      gradient: "bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-500",
    },
    {
      title: "Goal-Oriented",
      description:
        "Every solution is designed with your business goals in mind, delivering measurable results.",
      icon: Target,
      gradient: "bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500",
    },
    {
      title: "Team Collaboration",
      description:
        "Seamless collaboration tools and workflows that bring teams together for maximum productivity.",
      icon: Users,
      gradient: "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500",
    },
    {
      title: "Award-Winning",
      description:
        "Recognized excellence in design and development with multiple industry awards and certifications.",
      icon: Award,
      gradient: "bg-gradient-to-br from-rose-400 via-pink-500 to-purple-500",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 relative overflow-hidden bg-background"
    >
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

        {/* Simplified grid pattern for better performance */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-6 h-full">
            {[...Array(32)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-primary rounded-sm"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.05,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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
            className="inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text hero-text-3d">
              Why Choose Us?
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            animate={{
              rotateX: [0, 2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            We don't just build software - we craft digital experiences that
            transform businesses and delight users. Here's what makes us
            different.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="preserve-3d"
            >
              <SimpleFeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradient={feature.gradient}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Rocket className="w-5 h-5" />
                Start Your Project
                <Rocket className="w-5 h-5" />
              </span>

              {/* Simple hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
