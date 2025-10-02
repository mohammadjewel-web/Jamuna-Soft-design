import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 animate-gradient-shift bg-[length:200%_200%]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-8 inline-block p-4 bg-primary/10 rounded-full glow-primary">
            <Mail className="w-12 h-12 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            Stay Updated
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest tech insights, project updates, and exclusive offers
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
            <motion.div
              animate={{
                scale: isFocused ? 1.02 : 1,
                boxShadow: isFocused
                  ? "0 0 30px rgba(0, 175, 242, 0.3)"
                  : "0 0 0px rgba(0, 175, 242, 0)",
              }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 pr-32 bg-card border-2 border-border rounded-full text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-all"
              />
              
              <Button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 glow-primary rounded-full"
              >
                Subscribe <Send className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
