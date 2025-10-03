import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SimpleFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  index?: number;
}

export const SimpleFeatureCard = ({
  title,
  description,
  icon: Icon,
  gradient,
  index = 0,
}: SimpleFeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="group"
    >
      <Card
        className={`relative overflow-hidden border-2 transition-all duration-300 ${gradient} backdrop-blur-sm min-h-[300px] hover:shadow-xl`}
      >
        <CardContent className="p-8 h-full flex flex-col">
          {/* Icon */}
          <motion.div
            className="mb-6 relative"
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
          >
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Icon className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center">
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-white/90 leading-relaxed text-sm">
              {description}
            </p>
          </div>

          {/* Bottom accent */}
          <motion.div
            className="mt-6 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};
