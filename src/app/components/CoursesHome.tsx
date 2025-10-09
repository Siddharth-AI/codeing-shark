"use client";

import React, { useState } from "react";
import { Users, Star, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { getPopularCourses } from "@/lib/coursesData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CoursesHome = () => {
  const courses = getPopularCourses(3);
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 200, damping: 15 },
    },
  };

  return (
    <section
      id="courses"
      ref={sectionRef}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Featured Courses</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span>Master New </span>
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Skills Today
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students learning cutting-edge technologies from
            industry experts.
          </motion.p>
        </div>

        {/* Course Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {courses.map((course) => (
            <motion.div key={course.id} variants={cardVariants}>
              <Link href={`/courses/${course.id}`} className="group block">
                <motion.article
                  className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100/50 hover:border-orange-300/50 transition-all duration-300 h-full flex flex-col"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                  {/* Course Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                    <motion.img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <motion.div
                        className={`flex items-center bg-gradient-to-r ${course.categoryColor} text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm`}
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <span className="mr-1">{course.categoryIcon}</span>
                        {course.category}
                      </motion.div>
                    </div>

                    {/* Course Badges */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2">
                      {course.bestseller && (
                        <motion.div
                          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg"
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}>
                          Bestseller
                        </motion.div>
                      )}
                      {course.newCourse && (
                        <motion.div
                          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg"
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}>
                          New
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
                        {course.title}
                      </h3>

                      {/* Instructor */}
                      <div className="flex items-center mb-4">
                        <motion.img
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          className="w-8 h-8 rounded-full mr-3 ring-2 ring-orange-200 group-hover:ring-orange-400 transition-all"
                          whileHover={{ scale: 1.1 }}
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {course.instructor.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {course.instructor.title}
                          </div>
                        </div>
                      </div>

                      {/* Course Stats */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className="flex items-center text-yellow-500"
                            whileHover={{ scale: 1.1 }}>
                            <Star className="w-4 h-4 fill-current mr-1" />
                            <span className="text-sm font-medium text-gray-700">
                              {course.rating}
                            </span>
                          </motion.div>
                          <motion.div
                            className="flex items-center text-gray-500"
                            whileHover={{ scale: 1.1 }}>
                            <Users className="w-4 h-4 mr-1" />
                            <span className="text-sm">
                              {course.studentsCount.toLocaleString()}
                            </span>
                          </motion.div>
                        </div>
                        <motion.div
                          className="flex items-center text-gray-500"
                          whileHover={{ scale: 1.1 }}>
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{course.duration}</span>
                        </motion.div>
                      </div>

                      {/* Level Badge */}
                      <div className="mb-4">
                        <motion.span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            course.level === "Beginner"
                              ? "bg-green-100 text-green-800"
                              : course.level === "Intermediate"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                          whileHover={{ scale: 1.05 }}>
                          {course.level}
                        </motion.span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2">
                        <motion.span
                          className="text-2xl font-bold text-gray-900"
                          whileHover={{ scale: 1.05 }}>
                          ${course.price.current}
                        </motion.span>
                        {course.price.original && (
                          <>
                            <span className="text-lg text-gray-500 line-through">
                              ${course.price.original}
                            </span>
                            <motion.span
                              className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded"
                              whileHover={{ scale: 1.1 }}>
                              {course.price.discount}% OFF
                            </motion.span>
                          </>
                        )}
                      </div>
                      <motion.div
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <CTAButton isInView={isInView} />
        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-gray-500 text-center text-sm sm:text-base max-w-2xl mx-auto">
          Join thousands of developers who have transformed their careers with
          our comprehensive learning platform.
        </motion.p>
      </div>
    </section>
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
              Explore All Courses
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

export default CoursesHome;
