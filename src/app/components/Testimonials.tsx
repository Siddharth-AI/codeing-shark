/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState } from "react";
import { Star, Quote, CheckCircle, Play } from "lucide-react";
import Link from "next/link";
import { easeIn, easeOut, motion, useInView } from "framer-motion";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, easeIn: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
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

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easeOut: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Adams",
      role: "Software Engineer at Google",
      company: "Google",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      content:
        "CodingSharks transformed my career completely. The instructors are world-class and the curriculum is exactly what the industry needs. I landed my dream job at Google within 6 months!",
      rating: 5,
      course: "Full Stack Development",
      achievement: "Career Switch Success",
      duration: "6 months",
      salaryIncrease: "150%",
    },
    {
      id: 2,
      name: "Marcus Thompson",
      role: "Data Scientist at Netflix",
      company: "Netflix",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content:
        "The machine learning course was incredibly comprehensive. The hands-on projects gave me the confidence to tackle real-world problems. Now I'm building recommendation systems at Netflix!",
      rating: 5,
      course: "Machine Learning Fundamentals",
      achievement: "ML Expert",
      duration: "8 months",
      salaryIncrease: "120%",
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Mobile Developer at Uber",
      company: "Uber",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      content:
        "As a complete beginner, I was nervous about learning to code. The supportive community and excellent instruction made all the difference. I now develop apps used by millions!",
      rating: 5,
      course: "iOS Development",
      achievement: "From Zero to Hero",
      duration: "10 months",
      salaryIncrease: "200%",
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      role: "Frontend Developer at Microsoft",
      company: "Microsoft",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      content:
        "The React masterclass was exactly what I needed to level up my skills. The projects were challenging but rewarding, and the instructor's feedback was invaluable.",
      rating: 5,
      course: "React.js Masterclass",
      achievement: "Senior Developer",
      duration: "4 months",
      salaryIncrease: "80%",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-32 w-72 h-72 bg-gradient-to-bl from-orange-200/20 to-red-200/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-200/15 to-purple-200/10 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-100/10 to-orange-100/10 rounded-full blur-3xl opacity-20"
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
            <span>Success </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Stories
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how CodingSharks students are making waves in tech
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
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
          Join our community of successful developers and transform your career
          with industry-leading instruction.
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            "100% Real Reviews",
            "Verified Students",
            "Career Success Tracked",
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center space-x-2 text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ✅ Separate TestimonialCard component with useState for hover control
interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
    rating: number;
    course: string;
    achievement: string;
    duration: string;
    salaryIncrease: string;
  };
  variants: any;
}

const TestimonialCard = ({ testimonial, variants }: TestimonialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={variants}>
      <motion.div
        className="relative bg-white rounded-3xl shadow-lg border border-gray-100/50 overflow-hidden h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          borderColor: isHovered
            ? "rgba(251, 146, 60, 0.5)"
            : "rgba(243, 244, 246, 0.5)",
        }}
        transition={{ duration: 0.3 }}>
        {/* Background Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-blue-50/30 rounded-3xl"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10 p-6 sm:p-8">
          {/* Quote Section */}
          <div className="flex items-start space-x-4 mb-8">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 flex-shrink-0 mt-1" />
            </motion.div>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg group-hover:text-gray-800 transition-colors duration-300">
              "{testimonial.content}"
            </p>
          </div>

          {/* User Info Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-white"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <div className="font-bold text-gray-900 text-lg sm:text-xl group-hover:text-orange-600 transition-colors duration-300">
                  {testimonial.name}
                </div>
                <div className="text-gray-600 mb-2 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {testimonial.role}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-700">
                    {testimonial.rating}.0
                  </span>
                </div>

                <div className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                  {testimonial.course}
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="hidden sm:block">
              <motion.div
                className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl px-4 py-2"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  y: isHovered ? -2 : 0,
                }}
                transition={{ duration: 0.3 }}>
                <div className="text-xs text-blue-800 font-semibold">
                  {testimonial.achievement}
                </div>
                <div className="text-xs text-blue-600">
                  +{testimonial.salaryIncrease} salary
                </div>
              </motion.div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-orange-100 transition-colors duration-300">
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>Completion Time: {testimonial.duration}</span>
              <div className="flex items-center space-x-1">
                <Play className="w-3 h-3" />
                <span>Success Story</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-y-12"
          animate={{
            top: isHovered ? "0%" : "-100%",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
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
        <Link href="/blog">
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
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              animate={{
                x: isHovered ? "100%" : "-100%",
              }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            />

            <span className="relative z-10 flex items-center justify-center">
              Read More Stories
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

export default Testimonials;
