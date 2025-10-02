import { ProjectCard } from "./ProjectCard";

export const PortfolioSection = () => {
  const projects = [
    {
      title: "AI Chat Platform",
      description: "Next-gen conversational AI platform with real-time responses and natural language understanding",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["AI", "React", "Node.js"],
    },
    {
      title: "E-Commerce Dashboard",
      description: "Modern analytics dashboard with real-time data visualization and inventory management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Dashboard", "Analytics", "TypeScript"],
    },
    {
      title: "Social Media App",
      description: "Engaging social platform built for Gen Z with stories, reels, and AR filters",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      tags: ["Mobile", "Social", "Flutter"],
    },
    {
      title: "NFT Marketplace",
      description: "Decentralized marketplace for digital art with crypto wallet integration",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      tags: ["Web3", "Blockchain", "Solidity"],
    },
    {
      title: "Fitness Tracker",
      description: "Smart fitness app with AI-powered workout plans and nutrition tracking",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      tags: ["Health", "AI", "Mobile"],
    },
    {
      title: "Music Streaming",
      description: "High-quality music streaming platform with personalized recommendations",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
      tags: ["Audio", "Streaming", "React"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of our latest and greatest work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
