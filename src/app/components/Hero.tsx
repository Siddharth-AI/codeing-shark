"use client";

import { Play, Star, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";

const Hero = () => {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        easeIn: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        easeIn: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        easeIn: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100, rotateY: -20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        easeIn: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section
      className="bg-gradient-to-br from-slate-50 to-orange-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      id="hero">
      {/* Background Elements with Framer Motion */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <motion.div
          className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content with Framer Motion */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            {/* Badge */}
            <motion.div
              variants={badgeVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-50 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-200/50 shadow-sm cursor-pointer">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mr-2">
                🦈
              </motion.span>
              Dive Deep into Coding
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span>Master Coding with the </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Sharks
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join thousands of students learning to code with our expert
              instructors. From beginner to advanced, we'll help you navigate
              the waters of programming.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Link
                  href="/courses"
                  className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 shadow-lg block">
                  <span className="flex items-center justify-center">
                    Start Free Trial
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}>
                      →
                    </motion.span>
                  </span>
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={statsVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-200">
              <motion.div
                variants={statItemVariants}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}>
                <div className="flex items-center justify-center text-orange-500 mb-2">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  50K+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Active Students
                </div>
              </motion.div>

              <motion.div
                variants={statItemVariants}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}>
                <div className="flex items-center justify-center text-orange-500 mb-2">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  200+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Courses
                </div>
              </motion.div>

              <motion.div
                variants={statItemVariants}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}>
                <div className="flex items-center justify-center text-orange-500 mb-2">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 fill-current" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  4.9
                </div>
                <div className="text-sm sm:text-base text-gray-600">Rating</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Course Card */}
          <motion.div
            className="relative"
            variants={cardVariants}
            initial="hidden"
            animate="visible">
            {/* Main Course Card */}
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100/50"
              animate={{
                y: [-10, 0, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}>
              {/* Live Coding Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}>
                <span className="flex items-center">
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full mr-2"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                  Live Coding
                </span>
              </motion.div>

              {/* Course Image */}
              <motion.div className="relative overflow-hidden rounded-2xl mb-6">
                <Image
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Students learning to code"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-48 sm:h-64 object-cover"
                />
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity }}>
                  🔥 Trending
                </motion.div>
              </motion.div>

              {/* Course Details */}
              <div className="space-y-4">
                {/* Course Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Python Fundamentals
                  </h3>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">4.9</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 1.2,
                      }}
                    />
                  </div>
                </div>

                {/* Progress Info */}
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">Progress: 75%</span>
                  <span>12 lessons remaining</span>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
                animate={{
                  y: [-20, 20, -20],
                  x: [-20, 20, -20],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20"
                animate={{
                  y: [20, -20, 20],
                  x: [20, -20, 20],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Students Online Badge */}
            <motion.div
              className="absolute -bottom-12 sm:-bottom-16 lg:-bottom-20 -left-4 sm:-left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}>
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium whitespace-nowrap">
                  2,847 students online
                </span>
              </div>
            </motion.div>

            {/* Additional Floating Elements */}
            <motion.div
              className="absolute top-8 -right-8 w-6 h-6 bg-yellow-400 rounded-full opacity-60"
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-16 -right-4 w-4 h-4 bg-green-400 rounded-full opacity-60"
              animate={{
                y: [15, -15, 15],
                x: [10, -10, 10],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
