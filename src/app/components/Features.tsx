/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Code, Users, Trophy, Clock, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { easeOut, motion, useInView } from "framer-motion";

const Features = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, easeOut: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const features = [
    {
      icon: Code,
      title: "Interactive Coding Environment",
      description:
        "Practice coding directly in your browser with our advanced IDE that supports multiple programming languages.",
      color: "from-blue-500 to-blue-600",
      gradient: "from-blue-400/20 to-cyan-400/20",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of experience at top tech companies like Google, Microsoft, and Apple.",
      color: "from-green-500 to-green-600",
      gradient: "from-green-400/20 to-emerald-400/20",
    },
    {
      icon: Trophy,
      title: "Project-Based Learning",
      description:
        "Build real-world projects that you can showcase in your portfolio and impress potential employers.",
      color: "from-purple-500 to-purple-600",
      gradient: "from-purple-400/20 to-pink-400/20",
    },
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description:
        "Flexible scheduling allows you to learn whenever convenient. Access courses 24/7 from anywhere.",
      color: "from-orange-500 to-orange-600",
      gradient: "from-orange-400/20 to-yellow-400/20",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description:
        "Get immediate feedback on your code with our AI-powered assessment system and automated testing.",
      color: "from-red-500 to-red-600",
      gradient: "from-red-400/20 to-pink-400/20",
    },
    {
      icon: Shield,
      title: "Career Support",
      description:
        "Receive job placement assistance, resume reviews, and interview preparation to land your dream job.",
      color: "from-indigo-500 to-indigo-600",
      gradient: "from-indigo-400/20 to-purple-400/20",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-red-200/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-100/20 to-orange-100/20 rounded-full blur-3xl opacity-30"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span>Why Choose </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              CodingSharks?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide everything you need to master programming and launch your
            tech career, with cutting-edge tools and expert guidance every step
            of the way.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              variants={cardVariants}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <CTAButton isInView={isInView} />

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto text-center">
          Join thousands of developers who have transformed their careers with
          our comprehensive learning platform.
        </motion.p>
      </div>
    </section>
  );
};

// ✅ Separate FeatureCard component with useState for hover control
interface FeatureCardProps {
  feature: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    color: string;
    gradient: string;
  };
  variants: any;
}

const FeatureCard = ({ feature, variants }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={variants}>
      <motion.div
        className="group relative p-6 sm:p-8 bg-white rounded-3xl border border-gray-100/50 hover:border-orange-200/50 transition-all duration-300 cursor-pointer overflow-hidden h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}>
        {/* Background Gradient Overlay - ✅ Controlled by parent hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl`}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon - ✅ Controlled by parent hover */}
          <div className="relative mb-6">
            <motion.div
              className={`w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-2 shadow-lg`}
              animate={{
                scale: isHovered ? 1.05 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <feature.icon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-all duration-300 leading-tight">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base">
            {feature.description}
          </p>

          {/* Interactive Arrow - ✅ Controlled by parent hover */}
          <motion.div
            className="mt-6 flex items-center text-orange-500"
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10,
            }}
            transition={{ duration: 0.3 }}>
            <span className="text-sm font-medium mr-2">Learn more</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ✅ Separate CTA Button component with useState for hover control
const CTAButton = ({ isInView }: { isInView: boolean }) => {
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

export default Features;
