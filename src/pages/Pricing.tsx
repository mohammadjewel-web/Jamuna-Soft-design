import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Zap, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FloatingElements } from "@/components/FloatingElements";

const pricingPlans = [
  {
    name: "Starter",
    monthlyPrice: 499,
    yearlyPrice: 4990,
    description: "Perfect for small projects and startups",
    features: [
      "Basic Website (5 pages)",
      "Responsive Design",
      "1 Month Support",
      "Basic SEO",
      "Domain Setup",
    ],
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 1499,
    yearlyPrice: 14990,
    description: "Ideal for growing businesses",
    features: [
      "Advanced Website (15 pages)",
      "Custom Design",
      "3 Months Support",
      "Advanced SEO",
      "CMS Integration",
      "Analytics Dashboard",
      "API Integration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 3999,
    yearlyPrice: 39990,
    description: "For large-scale operations",
    features: [
      "Unlimited Pages",
      "Fully Custom Design",
      "12 Months Support",
      "Enterprise SEO",
      "Advanced CMS",
      "Multi-Platform Apps",
      "AI Integration",
      "Priority Support",
      "Dedicated Account Manager",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative">
        <FloatingElements />
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 gradient-text">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose the perfect plan for your business needs
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 bg-card border border-border rounded-full p-2">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    !isYearly
                      ? "bg-primary text-primary-foreground glow-primary"
                      : "text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    isYearly
                      ? "bg-primary text-primary-foreground glow-primary"
                      : "text-foreground"
                  }`}
                >
                  Yearly
                  <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative group ${
                    plan.popular ? "md:-mt-4 md:mb-0" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 glow-accent">
                        <Zap className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div
                    className={`relative bg-card border rounded-2xl p-8 h-full flex flex-col ${
                      plan.popular
                        ? "border-primary glow-primary scale-105"
                        : "border-border hover:border-primary/50"
                    } transition-all duration-300`}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold mb-2 gradient-text">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <motion.div
                        key={isYearly ? "yearly" : "monthly"}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-baseline gap-2"
                      >
                        <span className="text-5xl font-heading font-bold gradient-text">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground">
                          /{isYearly ? "year" : "month"}
                        </span>
                      </motion.div>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button
                        className={`w-full ${
                          plan.popular ? "glow-primary" : ""
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
                    </Link>
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

export default Pricing;
