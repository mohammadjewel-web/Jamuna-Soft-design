import { motion } from "framer-motion";
import { Brain, Code, Globe, Server, Smartphone, Palette, Shield, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI and machine learning solutions tailored to your business needs. From chatbots to predictive analytics, we build intelligent systems that drive results.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "End-to-end software development services using cutting-edge technologies. We build scalable, maintainable applications that grow with your business.",
    features: ["Custom Software", "API Development", "System Integration", "Legacy Modernization"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications that deliver exceptional user experiences across all devices and platforms.",
    features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
  },
  {
    icon: Server,
    title: "Domain & Hosting",
    description: "Reliable domain registration and hosting services with 99.9% uptime guarantee. Secure, fast, and scalable infrastructure for your digital presence.",
    features: ["Domain Registration", "Cloud Hosting", "SSL Certificates", "Email Hosting"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that engage users and drive business growth on iOS and Android platforms.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the forefront. We create designs that users love and businesses trust.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets from threats. Regular audits, penetration testing, and security implementation.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Data Protection"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Make your applications lightning-fast with our performance optimization services. Speed matters for user experience and SEO.",
    features: ["Code Optimization", "Database Tuning", "CDN Setup", "Caching Strategies"],
  },
];

const Services = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 gradient-text">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive technology solutions to power your digital transformation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
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
