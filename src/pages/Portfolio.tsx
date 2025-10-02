import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "AI Chat Platform",
    description: "Next-gen conversational AI platform with real-time responses",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["AI", "React", "Node.js"],
    category: "ai",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Modern analytics dashboard with real-time data visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Dashboard", "Analytics", "TypeScript"],
    category: "web",
  },
  {
    title: "Social Media App",
    description: "Engaging social platform for Gen Z with AR filters",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["Mobile", "Social", "Flutter"],
    category: "mobile",
  },
  {
    title: "NFT Marketplace",
    description: "Decentralized marketplace for digital art",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["Web3", "Blockchain", "Solidity"],
    category: "web",
  },
  {
    title: "Fitness Tracker",
    description: "Smart fitness app with AI-powered workout plans",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    tags: ["Health", "AI", "Mobile"],
    category: "mobile",
  },
  {
    title: "Music Streaming",
    description: "High-quality music streaming with personalized recommendations",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    tags: ["Audio", "Streaming", "React"],
    category: "web",
  },
  {
    title: "Smart Home System",
    description: "IoT-powered home automation with voice control",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    tags: ["IoT", "AI", "React Native"],
    category: "ai",
  },
  {
    title: "Financial Analytics",
    description: "AI-driven financial forecasting and analysis platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["FinTech", "AI", "Python"],
    category: "ai",
  },
  {
    title: "Learning Management",
    description: "Interactive e-learning platform with live classes",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    tags: ["Education", "Video", "React"],
    category: "web",
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "AI Solutions", value: "ai" },
  { label: "Web Development", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 gradient-text">
                Our Portfolio
              </h1>
              <p className="text-xl text-muted-foreground">
                Showcasing our latest projects and client success stories
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category.value
                      ? "bg-primary text-primary-foreground glow-primary"
                      : "bg-background border border-border hover:border-primary"
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;
