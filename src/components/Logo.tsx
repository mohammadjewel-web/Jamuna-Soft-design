import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({
  className = "",
  showTagline = false,
  size = "md",
}: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  const iconSizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <Link to="/" className={`flex items-center gap-3 logo-3d ${className}`}>
      {/* Logo Icon */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className={`${iconSizeClasses[size]} relative`}
      >
        {/* Light blue square outline */}
        <div className="absolute inset-0 border-2 border-primary rounded-lg bg-primary/5" />

        {/* JS Letters */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Large J */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-foreground font-bold text-lg"
            >
              J
            </motion.div>

            {/* Small S with line */}
            <div className="absolute -top-1 -right-1 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-foreground font-bold text-xs"
              >
                S
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="h-0.5 bg-foreground mt-0.5"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Company Name */}
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`font-heading font-bold ${sizeClasses[size]}`}
        >
          <span className="text-primary">JAMUNA</span>
          <span className="text-foreground ml-2">Soft</span>
        </motion.div>

        {/* {showTagline && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xs text-muted-foreground mt-1"
          >
            <div>IT Solution Next to You</div>
            <div className="text-xs opacity-75">
              (Your Gateway to Innovation, Powered by AARISH ENTERPRISE)
            </div>
          </motion.div>
        )} */}
      </div>
    </Link>
  );
};
