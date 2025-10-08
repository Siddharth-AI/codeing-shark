"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Users,
  Star,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  SlidersHorizontal,
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  courses,
  getCoursesByCategory,
  searchCourses,
  getFeaturedCourses,
  getBestsellerCourses,
} from "@/lib/coursesData";

const categories = [
  { name: "All", icon: "🎯", color: "from-gray-500 to-gray-600" },
  { name: "Web Development", icon: "💻", color: "from-blue-500 to-cyan-500" },
  { name: "Full-Stack", icon: "🚀", color: "from-black to-gray-700" },
  { name: "Data Science", icon: "📊", color: "from-green-500 to-emerald-500" },
  { name: "Design", icon: "🎨", color: "from-pink-500 to-rose-500" },
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Highest Rated" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCourses, setVisibleCourses] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const coursesPerPage = 9;

  // Filter and sort courses
  const getFilteredCourses = () => {
    let filtered = search
      ? searchCourses(search)
      : getCoursesByCategory(selectedCategory);

    if (selectedLevel !== "All Levels") {
      filtered = filtered.filter((course) => course.level === selectedLevel);
    }

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
  const featuredCourses = getFeaturedCourses();
  const bestsellerCourses = getBestsellerCourses();

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  // Intersection Observer for hero section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for course cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCourses((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const courseElements = document.querySelectorAll(".course-card");
    courseElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentCourses]);

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.color || "from-gray-500 to-gray-600";
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.icon || "📚";
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="relative pt-20">
          {/* Hero Section */}
          <section
            ref={sectionRef}
            className="py-12 sm:py-16 relative overflow-hidden">
            {/* Floating background elements - similar to blog page */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl animate-float"></div>
            <div
              className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-float"
              style={{ animationDelay: "1s" }}></div>
            <div
              className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-float"
              style={{ animationDelay: "0.5s" }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <div
                  className={`inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-50 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Premium Online Courses
                </div>

                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 delay-200 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}>
                  <span>Learn From </span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-float-up">
                    Industry Experts
                  </span>
                </h1>

                <p
                  className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 blog-text-reveal ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}>
                  Join thousands of students mastering new skills with our
                  comprehensive online courses.
                </p>
              </div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="py-6 relative fade-in-up">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8 scale-in">
                <div className="relative bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/50 p-2 group transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="flex items-center">
                    <Search className="w-5 h-5 text-gray-400 ml-3 transition-all duration-300 group-hover:text-orange-500" />
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
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category, index) => (
                    <button
                      key={category.name}
                      onClick={() => {
                        setSelectedCategory(category.name);
                        setCurrentPage(1);
                      }}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                        selectedCategory === category.name
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg animate-badge-pulse`
                          : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}>
                      <span className="flex items-center space-x-1">
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </span>
                    </button>
                  ))}
                </div>

                {/* Level Filter */}
                <select
                  value={selectedLevel}
                  onChange={(e) => {
                    setSelectedLevel(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="px-4 py-2 rounded-xl bg-white/80 text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-xl bg-white/80 text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* View Mode */}
                <div className="flex bg-white/80 rounded-xl p-1 border border-gray-200 transition-all duration-300 hover:shadow-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-blue-500 text-white"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}>
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-blue-500 text-white"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}>
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Courses Grid/List */}
          <section className="pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8 slide-in-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {selectedCategory === "All"
                    ? "All Courses"
                    : `${selectedCategory} Courses`}
                </h2>
                <span className="text-gray-500">
                  {filteredCourses.length} course
                  {filteredCourses.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Grid View */}
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {currentCourses.map((course, index) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.id}`}
                      className="group block">
                      <article
                        data-index={index}
                        className={`course-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col ${
                          visibleCourses.has(index)
                            ? "animate-course-enter opacity-100"
                            : "opacity-0"
                        }`}
                        style={{ animationDelay: `${(index % 3) * 0.1}s` }}>
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />

                          {/* Hover overlay - like blog page */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          <div className="absolute top-4 left-4">
                            <div
                              className={`flex items-center bg-gradient-to-r ${getCategoryColor(
                                course.category
                              )} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-badge-pulse`}>
                              <span className="mr-1">
                                {getCategoryIcon(course.category)}
                              </span>
                              {course.category}
                            </div>
                          </div>

                          <div className="absolute top-4 right-4 flex flex-col space-y-1">
                            {course.bestseller && (
                              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg animate-badge-pulse">
                                🏆 Bestseller
                              </div>
                            )}
                            {course.newCourse && (
                              <div
                                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg animate-badge-pulse"
                                style={{ animationDelay: "0.2s" }}>
                                ✨ New
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                            {course.title}
                          </h3>

                          <div className="flex items-center mb-4 group-hover:translate-x-1 transition-transform duration-300">
                            <img
                              src={course.instructor.avatar}
                              alt={course.instructor.name}
                              className="w-8 h-8 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"
                            />
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {course.instructor.name}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-yellow-500 group-hover:scale-110 transition-transform duration-300">
                                <Star className="w-4 h-4 fill-current mr-1" />
                                <span className="text-sm font-semibold">
                                  {course.rating}
                                </span>
                              </div>
                              <div className="flex items-center text-gray-500 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-4 h-4 mr-1" />
                                <span className="text-sm">
                                  {course.studentsCount.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                                ${course.price.current}
                              </span>
                              {course.price.original && (
                                <span className="text-sm text-gray-500 line-through">
                                  ${course.price.original}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="space-y-6 mb-12">
                  {currentCourses.map((course, index) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.id}`}
                      className="group block">
                      <article
                        data-index={index}
                        className={`course-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 ${
                          visibleCourses.has(index)
                            ? "animate-course-enter opacity-100"
                            : "opacity-0"
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex flex-col md:flex-row">
                          <div className="relative w-full md:w-64 h-48 overflow-hidden">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>

                          <div className="flex-1 p-6">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div
                                  className={`inline-flex items-center bg-gradient-to-r ${getCategoryColor(
                                    course.category
                                  )} text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 shadow-lg animate-badge-pulse`}>
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

                                <div className="flex items-center mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                  <img
                                    src={course.instructor.avatar}
                                    alt={course.instructor.name}
                                    className="w-10 h-10 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"
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
                                  <div className="flex items-center text-yellow-500 group-hover:scale-110 transition-transform duration-300">
                                    <Star className="w-4 h-4 fill-current mr-1" />
                                    <span className="text-sm font-medium">
                                      {course.rating}
                                    </span>
                                  </div>
                                  <div className="flex items-center text-gray-500 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-4 h-4 mr-1" />
                                    <span className="text-sm">
                                      {course.studentsCount.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center text-gray-500 group-hover:scale-110 transition-transform duration-300">
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
                                  <div className="mt-2 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full font-bold inline-block animate-badge-pulse">
                                    🏆 Bestseller
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}

              {/* No Results */}
              {filteredCourses.length === 0 && (
                <div className="text-center py-16 fade-in-up">
                  <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4 animate-float" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      No courses found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your search or filters
                    </p>
                    <button
                      onClick={() => {
                        setSearch("");
                        setSelectedCategory("All");
                        setSelectedLevel("All Levels");
                        setCurrentPage(1);
                      }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl btn-course-enroll">
                      Clear Filters
                    </button>
                  </div>
                </div>
              )}

              {/* Pagination */}
              {filteredCourses.length > coursesPerPage && (
                <div className="flex items-center justify-center space-x-2 fade-in-up">
                  <button
                    onClick={() =>
                      currentPage > 1 && setCurrentPage(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                    className={`flex items-center px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg hover:shadow-xl"
                    }`}>
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </button>

                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-110 ${
                          currentPage === i + 1
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg animate-badge-pulse"
                            : "bg-white text-gray-700 hover:bg-blue-50 shadow-md"
                        }`}>
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      currentPage < totalPages &&
                      setCurrentPage(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                    className={`flex items-center px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg hover:shadow-xl"
                    }`}>
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
