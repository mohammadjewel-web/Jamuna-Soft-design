import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatItem = ({ end, label, suffix = "", prefix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center stat-3d"
    >
      <div className="text-5xl md:text-6xl font-heading font-bold mb-3 gradient-text text-glow-primary">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section id="stats" className="py-24 bg-card relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-gradient-shift bg-[length:200%_100%]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text">
            By The Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our impact in the tech world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <StatItem end={150} label="Projects Completed" suffix="+" />
          <StatItem end={50} label="Happy Clients" suffix="+" />
          <StatItem end={99} label="Client Satisfaction" suffix="%" />
          <StatItem end={24} label="Support Available" suffix="/7" />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary/20 rounded-full animate-glow-pulse" />
      <div
        className="absolute bottom-10 left-10 w-24 h-24 border border-secondary/20 rounded-lg rotate-45 animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
};
