/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef } from "react";
import {
  Search,
  BookOpen,
  Users,
  Star,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Grid,
  List,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getCoursesByCategory, searchCourses } from "@/lib/coursesData";
import { motion, useInView, AnimatePresence, easeIn } from "framer-motion";

const categories = [
  { name: "All", icon: "🎯", color: "from-gray-500 to-gray-600" },
  { name: "Web Development", icon: "💻", color: "from-blue-500 to-cyan-500" },
  { name: "Full-Stack", icon: "🚀", color: "from-black to-gray-700" },
  { name: "Data Science", icon: "📊", color: "from-green-500 to-emerald-500" },
  { name: "Design", icon: "🎨", color: "from-pink-500 to-rose-500" },
];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Highest Rated" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

// Custom Dropdown Component
const CustomDropdown = ({
  value,
  options,
  onChange,
  placeholder = "Select",
}: {
  value: string;
  options: { value: string; label: string }[] | string[];
  onChange: (value: string) => void;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getLabel = (val: string) => {
    if (typeof options[0] === "string") {
      return val;
    }
    const option = options.find((opt: any) => opt.value === val);
    return option ? (option as any).label : val;
  };

  const optionsList = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-4 py-2 rounded-xl bg-gray-800 text-white border-none focus:outline-none transition-all duration-300 hover:bg-gray-700 flex items-center justify-between min-w-[200px] shadow-lg">
        <span className="font-medium">{getLabel(value)}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 ml-2" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-700">
            <div className="max-h-60 overflow-hidden">
              {optionsList.map((option, index) => (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  whileHover={{ backgroundColor: "rgba(249, 115, 22, 0.9)" }}
                  className={`w-full text-left px-4 py-3 transition-colors duration-100 ${
                    value === option.value
                      ? "bg-[rgba(249,115,22,0.9)] text-white"
                      : "text-gray-200 hover:text-white"
                  }`}>
                  {option.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isCoursesInView = useInView(coursesRef, { once: true, amount: 0.1 });

  // Filter and sort courses
  const getFilteredCourses = () => {
    const filtered = search
      ? searchCourses(search)
      : getCoursesByCategory(selectedCategory);

    // Sort courses
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
          );
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.price.current - b.price.current;
        case "price-high":
          return b.price.current - a.price.current;
        case "popular":
        default:
          return b.studentsCount - a.studentsCount;
      }
    });
  };

  const filteredCourses = getFilteredCourses();
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.color || "from-gray-500 to-gray-600";
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.icon || "📚";
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
            className="py-12 sm:py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-50 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Premium Online Courses
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span>Learn From </span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Industry Experts
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of students mastering new skills with our
                  comprehensive online courses.
                </motion.p>
              </div>
            </div>
          </motion.section>

          {/* Search and Filters */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="py-6 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="max-w-2xl mx-auto mb-8">
                <div className="relative bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/50 p-2 group transition-shadow duration-300 hover:shadow-xl">
                  <div className="flex items-center">
                    <Search className="w-5 h-5 text-gray-400 ml-3 transition-colors duration-300 group-hover:text-orange-500" />
                    <input
                      type="text"
                      placeholder="Search courses, instructors, or topics..."
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

              {/* Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2">
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
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
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
                </div>

                {/* Custom Dropdowns */}
                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}>
                  <CustomDropdown
                    value={selectedLevel}
                    options={levels}
                    onChange={(value) => {
                      setSelectedLevel(value);
                      setCurrentPage(1);
                    }}
                  />
                </motion.div> */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.3 }}>
                  <CustomDropdown
                    value={sortBy}
                    options={sortOptions}
                    onChange={(value) => setSortBy(value)}
                  />
                </motion.div>

                {/* View Mode */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.3 }}
                  className="flex bg-white/80 rounded-xl p-1 border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      viewMode === "grid"
                        ? "bg-blue-500 text-white"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}>
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      viewMode === "list"
                        ? "bg-blue-500 text-white"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}>
                    <List className="w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Courses Grid/List */}
          <section ref={coursesRef} className="pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {selectedCategory === "All"
                    ? "All Courses"
                    : `${selectedCategory} Courses`}
                </h2>
                <span className="text-gray-500">
                  {filteredCourses.length} course
                  {filteredCourses.length !== 1 ? "s" : ""}
                </span>
              </motion.div>

              {/* Grid View */}
              {viewMode === "grid" ? (
                <motion.div
                  key="grid-view"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isCoursesInView ? "visible" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {currentCourses.map((course) => (
                    <motion.div key={course.id} variants={cardVariants}>
                      <Link
                        href={`/courses/${course.id}`}
                        className="group block">
                        <motion.article
                          className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
                          whileHover={{
                            y: -8,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                          }}
                          transition={{ duration: 0.3 }}>
                          <div className="relative h-48 overflow-hidden">
                            <motion.img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            />

                            <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />

                            <div className="absolute top-4 left-4">
                              <div
                                className={`flex items-center bg-gradient-to-r ${getCategoryColor(
                                  course.category
                                )} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                                <span className="mr-1">
                                  {getCategoryIcon(course.category)}
                                </span>
                                {course.category}
                              </div>
                            </div>

                            <div className="absolute top-4 right-4 flex flex-col space-y-1">
                              {course.bestseller && (
                                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                                  🏆 Bestseller
                                </div>
                              )}
                              {course.newCourse && (
                                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                                  ✨ New
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                              {course.title}
                            </h3>

                            <div className="flex items-center mb-4">
                              <img
                                src={course.instructor.avatar}
                                alt={course.instructor.name}
                                className="w-8 h-8 rounded-full mr-3"
                              />
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {course.instructor.name}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center text-yellow-500">
                                  <Star className="w-4 h-4 fill-current mr-1" />
                                  <span className="text-sm font-semibold">
                                    {course.rating}
                                  </span>
                                </div>
                                <div className="flex items-center text-gray-500">
                                  <Users className="w-4 h-4 mr-1" />
                                  <span className="text-sm">
                                    {course.studentsCount.toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                                  {/* ${course.price.current} */} Enroll Now
                                </span>
                                {/* {course.price.original && (
                                  <span className="text-sm text-gray-500 line-through">
                                    ${course.price.original}
                                  </span>
                                )} */}
                              </div>
                              <motion.div
                                className="flex items-center text-blue-600 font-semibold"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}>
                                <ArrowRight className="w-4 h-4" />
                              </motion.div>
                            </div>
                          </div>
                        </motion.article>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                /* List View */
                <motion.div
                  key="list-view"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isCoursesInView ? "visible" : "hidden"}
                  className="space-y-6 mb-12">
                  {currentCourses.map((course) => (
                    <motion.div key={course.id} variants={cardVariants}>
                      <Link
                        href={`/courses/${course.id}`}
                        className="group block">
                        <motion.article
                          className="bg-white rounded-2xl shadow-lg overflow-hidden"
                          whileHover={{
                            y: -4,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                          }}
                          transition={{ duration: 0.3 }}>
                          <div className="flex flex-col md:flex-row">
                            <div className="relative w-full md:w-64 h-48 overflow-hidden">
                              <motion.img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              />
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/0 to-black/0"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            </div>

                            <div className="flex-1 p-6">
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <div
                                    className={`inline-flex items-center bg-gradient-to-r ${getCategoryColor(
                                      course.category
                                    )} text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 shadow-lg`}>
                                    <span className="mr-1">
                                      {getCategoryIcon(course.category)}
                                    </span>
                                    {course.category}
                                  </div>

                                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {course.title}
                                  </h3>

                                  <p className="text-gray-600 mb-4 line-clamp-2">
                                    {course.subtitle}
                                  </p>

                                  <div className="flex items-center mb-4">
                                    <img
                                      src={course.instructor.avatar}
                                      alt={course.instructor.name}
                                      className="w-10 h-10 rounded-full mr-3"
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

                                  <div className="flex items-center space-x-6">
                                    <div className="flex items-center text-yellow-500">
                                      <Star className="w-4 h-4 fill-current mr-1" />
                                      <span className="text-sm font-medium">
                                        {course.rating}
                                      </span>
                                    </div>
                                    <div className="flex items-center text-gray-500">
                                      <Users className="w-4 h-4 mr-1" />
                                      <span className="text-sm">
                                        {course.studentsCount.toLocaleString()}
                                      </span>
                                    </div>
                                    <div className="flex items-center text-gray-500">
                                      <Clock className="w-4 h-4 mr-1" />
                                      <span className="text-sm">
                                        {course.duration}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="text-right ml-4">
                                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                                    ${course.price.current}
                                  </div>
                                  {course.price.original && (
                                    <div className="text-lg text-gray-500 line-through">
                                      ${course.price.original}
                                    </div>
                                  )}
                                  {course.bestseller && (
                                    <div className="mt-2 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full font-bold inline-block">
                                      🏆 Bestseller
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* No Results */}
              {filteredCourses.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-16">
                  <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      No courses found
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
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 hover:from-blue-600 hover:to-purple-600">
                      Clear Filters
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Pagination */}
              {filteredCourses.length > coursesPerPage && (
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
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                            : "bg-white text-gray-700 hover:bg-blue-50 shadow-md"
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
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
