import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8 inline-block p-4 bg-primary/10 rounded-full glow-primary">
            <MessageSquare className="w-16 h-16 text-primary" />
          </div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text">
            Let's Build Together
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's create
            something amazing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:info@jamunasoft.com">
              <Button
                size="lg"
                className="glow-primary text-lg px-8 py-6 group relative overflow-hidden"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span className="relative z-10">Email Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </a>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Send className="w-5 h-5 mr-2" />
                Start a Project
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 text-muted-foreground"
          >
            <p className="text-sm">Available for projects worldwide</p>
            <p className="text-sm">Response time: Usually within 24 hours</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
