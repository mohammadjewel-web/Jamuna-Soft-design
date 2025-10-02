import { motion } from "framer-motion";
import { Users, Target, Zap, Award } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const timelineEvents = [
  { year: "2018", title: "Company Founded", description: "Started with a vision to revolutionize software development" },
  { year: "2019", title: "First AI Product", description: "Launched our first AI-powered solution for businesses" },
  { year: "2021", title: "Global Expansion", description: "Expanded operations to serve clients worldwide" },
  { year: "2023", title: "Industry Recognition", description: "Awarded 'Best Software Company' by Tech Innovation Awards" },
  { year: "2024", title: "100+ Projects", description: "Successfully delivered 100+ projects across 20+ countries" },
];

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sophia Martinez",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "David Kim",
    role: "Head of AI",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80",
  },
  {
    name: "Rachel Adams",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

const values = [
  { icon: Target, title: "Mission-Driven", description: "Empowering businesses through cutting-edge technology" },
  { icon: Zap, title: "Innovation First", description: "Constantly pushing boundaries with creative solutions" },
  { icon: Users, title: "Client-Centric", description: "Your success is our top priority" },
  { icon: Award, title: "Excellence", description: "Delivering quality that exceeds expectations" },
];

const About = () => {
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
                About Jamuna Soft
              </h1>
              <p className="text-xl text-muted-foreground">
                We're a team of passionate innovators building the future of software, one line of code at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="mb-4 inline-block p-4 bg-primary/10 rounded-lg glow-primary">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 gradient-text">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
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
