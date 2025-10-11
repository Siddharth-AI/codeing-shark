import Link from "next/link";
import { useRef, useState } from "react";
import { easeOut, motion, useInView } from "framer-motion";

// ✅ Separate CTA Button component with useState for hover control
export const CTAButton = (isInView: boolean, title: string) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        className="relative inline-block">
        <Link href="/courses">
          <motion.div
            className="relative bg-white text-orange-500 border-2 border-orange-500 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-lg overflow-hidden inline-flex items-center justify-center cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{
              backgroundColor: isHovered
                ? "rgb(249, 115, 22)"
                : "rgb(255, 255, 255)",
              color: isHovered ? "white" : "rgb(249, 115, 22)",
              boxShadow: isHovered
                ? "0 20px 25px -5px rgba(249, 115, 22, 0.4)"
                : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}>
            {/* Button shine effect - ✅ Controlled by parent hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              animate={{
                x: isHovered ? "100%" : "-100%",
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />

            <span className="relative z-10 flex items-center justify-center">
              Explore All Features
              {/* Arrow - ✅ Controlled by parent hover */}
              <motion.svg
                className="w-5 h-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{
                  x: isHovered ? 5 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};
