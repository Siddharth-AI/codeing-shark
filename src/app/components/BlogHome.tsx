/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState } from "react";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  TrendingUp,
  Eye,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { getRecentBlogs } from "@/lib/blogData";
import { motion, useInView } from "framer-motion";

const BlogHome = () => {
  // Get the most recent 3 blog posts
  const blogPosts = getRecentBlogs(3);
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
        staggerChildren: 0.15,
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

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-bl from-blue-200/20 to-purple-200/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-cyan-200/15 to-indigo-200/10 rounded-full blur-3xl"
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span>Latest </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Insights
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tutorials, and insights from
            our expert developers and designers.
          </motion.p>
        </div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 sm:mb-16">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} variants={cardVariants} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <CTAButton isInView={isInView} />
      </div>
    </section>
  );
};

// ✅ Separate BlogCard component with useState for hover control
interface BlogCardProps {
  post: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    categoryColor: string;
    categoryIcon: string;
    author: string;
    date: string;
    readTime: string;
    views: number;
    likes: number;
    trending?: boolean;
  };
  variants: any;
}

const BlogCard = ({ post, variants }: BlogCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={variants}>
      <Link href={`/blog/${post.id}`}>
        <motion.article
          className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100/50 h-full flex flex-col cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            boxShadow: isHovered
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            borderColor: isHovered
              ? "rgba(147, 197, 253, 0.5)"
              : "rgba(243, 244, 246, 0.5)",
          }}
          transition={{ duration: 0.3 }}>
          {/* Blog Image */}
          <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <motion.div
                className={`flex items-center bg-gradient-to-r ${post.categoryColor} text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg`}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  rotate: isHovered ? 3 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <span className="mr-1">{post.categoryIcon}</span>
                {post.category}
              </motion.div>
            </div>

            {/* Trending Badge */}
            {post.trending && (
              <div className="absolute top-4 right-4">
                <motion.div
                  className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    rotate: isHovered ? 3 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </motion.div>
              </div>
            )}
          </div>

          {/* Blog Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
              {post.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Stats and CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{post.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-1" />
                  <span>{post.likes}</span>
                </div>
              </div>
              <div className="flex items-center text-blue-600 font-semibold">
                <span className="mr-2">Read More</span>
                <motion.div
                  animate={{
                    x: isHovered ? 5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
};

// ✅ Separate CTA Button component with useState for hover control
const CTAButton = ({ isInView }: { isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center pt-10 sm:pt-3">
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
              transition={{ duration: 0.7, ease: "easeOut" }}
            />

            <span className="relative z-10 flex items-center justify-center">
              Explore All Articles
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

export default BlogHome;
