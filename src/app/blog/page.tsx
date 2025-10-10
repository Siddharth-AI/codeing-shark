"use client";

import React, { useState, useRef } from "react";
import {
  Search,
  BookOpen,
  ArrowRight,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  getBlogsByCategory,
  searchBlogs,
  getFeaturedBlogs,
} from "@/lib/blogData";
import { easeIn, motion, useInView } from "framer-motion";

const categories = [
  { name: "All", icon: "🎯", color: "from-gray-500 to-gray-600" },
  { name: "Web Development", icon: "💻", color: "from-blue-500 to-cyan-500" },
  { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-600 to-indigo-600" },
  { name: "Next.js", icon: "▲", color: "from-black to-gray-700" },
  { name: "UX Design", icon: "✨", color: "from-green-500 to-emerald-500" },
  { name: "AI & Tech", icon: "🤖", color: "from-red-500 to-pink-500" },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [likedBlogs, setLikedBlogs] = useState<Set<number>>(new Set());
  const blogsPerPage = 6;

  const heroRef = useRef(null);
  const blogsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isBlogsInView = useInView(blogsRef, { once: true, amount: 0.1 });

  // Get filtered blogs
  const filteredBlogs = search
    ? searchBlogs(search)
    : getBlogsByCategory(selectedCategory);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.color || "from-gray-500 to-gray-600";
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.icon || "📝";
  };

  const toggleLike = (blogId: number) => {
    setLikedBlogs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(blogId)) {
        newSet.delete(blogId);
      } else {
        newSet.add(blogId);
      }
      return newSet;
    });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, easeIn: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        easeIn: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="relative pt-20">
          {/* Hero Section */}
          <motion.section
            ref={heroRef}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="py-12 sm:py-16 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-50 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Latest Insights & Tutorials
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span>Explore Creative </span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Blogs ✨
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Discover the latest insights on design, development, and
                  innovation from bright minds around the world.
                </motion.p>
              </div>
            </div>
          </motion.section>

          {/* Search and Filter */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="max-w-2xl mx-auto mb-8">
                <div className="relative bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/50 p-2 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <Search className="w-5 h-5 text-gray-400 ml-3" />
                    <input
                      type="text"
                      placeholder="Search blogs..."
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="flex-grow outline-none text-gray-700 placeholder-gray-400 p-3 bg-transparent"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setCurrentPage(1);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category.name
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg"
                    }`}>
                    <span className="flex items-center space-x-1">
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Blog Grid */}
          <section ref={blogsRef} className="pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {selectedCategory === "All"
                    ? "All Articles"
                    : `${selectedCategory} Articles`}
                </h2>
                <span className="text-gray-500">
                  {filteredBlogs.length} article
                  {filteredBlogs.length !== 1 ? "s" : ""}
                </span>
              </motion.div>

              <motion.div
                key={currentPage}
                variants={staggerContainer}
                initial="hidden"
                animate={isBlogsInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentBlogs.map((blog) => (
                  <motion.div key={blog.id} variants={cardVariants}>
                    <Link href={`/blog/${blog.id}`} className="group block">
                      <motion.article
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden h-full flex flex-col">
                        <div className="relative h-40 sm:h-48 overflow-hidden">
                          <motion.img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />

                          <div className="absolute top-3 left-3">
                            <div
                              className={`flex items-center bg-gradient-to-r ${getCategoryColor(
                                blog.category
                              )} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                              <span className="mr-1">
                                {getCategoryIcon(blog.category)}
                              </span>
                              {blog.category}
                            </div>
                          </div>

                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute top-3 right-3 flex space-x-1">
                            <motion.button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleLike(blog.id);
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-300 ${
                                likedBlogs.has(blog.id)
                                  ? "bg-red-500 text-white"
                                  : "bg-white/80 text-gray-600 hover:bg-white"
                              }`}>
                              <Heart className="w-3 h-3" />
                            </motion.button>
                          </motion.div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                            {blog.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                            {blog.description}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center space-x-3">
                              <span className="font-medium">{blog.author}</span>
                              <span>{blog.date}</span>
                            </div>
                            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                              {blog.readTime}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                <span>{blog.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center">
                                <Heart className="w-3 h-3 mr-1" />
                                <span>{blog.likes}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-blue-600 font-semibold group">
                              <motion.span
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="mr-2">
                                Read
                              </motion.span>
                              <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}>
                                <ArrowRight className="w-4 h-4" />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {filteredBlogs.length > blogsPerPage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-center justify-center space-x-2">
                  <motion.button
                    onClick={() =>
                      currentPage > 1 && setCurrentPage(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                    whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                    whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                    className={`flex items-center px-4 py-2 rounded-xl font-semibold transition-colors duration-300 ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg"
                    }`}>
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </motion.button>

                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <motion.button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`px-3 py-2 rounded-xl font-semibold transition-colors duration-300 ${
                          currentPage === i + 1
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                            : "bg-white text-gray-700 hover:bg-blue-50"
                        }`}>
                        {i + 1}
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    onClick={() =>
                      currentPage < totalPages &&
                      setCurrentPage(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                    whileHover={
                      currentPage !== totalPages ? { scale: 1.05 } : {}
                    }
                    whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
                    className={`flex items-center px-4 py-2 rounded-xl font-semibold transition-colors duration-300 ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg"
                    }`}>
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </motion.div>
              )}

              {/* No Results */}
              {filteredBlogs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    No blogs found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search or filters
                  </p>
                  <motion.button
                    onClick={() => {
                      setSearch("");
                      setSelectedCategory("All");
                      setCurrentPage(1);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors duration-300">
                    Clear Filters
                  </motion.button>
                </motion.div>
              )}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
