"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Users,
  Star,
  Clock,
  Award,
  ArrowRight,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Play,
  CheckCircle,
  Calendar,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { getPopularCourses } from "@/lib/coursesData";

const CoursesHome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Get popular courses for home section
  const courses = getPopularCourses(3);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate cards on scroll
  useEffect(() => {
    if (isVisible) {
      courses.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedCards((prev) => new Set(prev).add(index));
        }, index * 200);
      });
    }
  }, [isVisible, courses]);

  return (
    <section
      ref={sectionRef}
      id="courses"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-bl from-blue-200/20 to-purple-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-cyan-200/15 to-indigo-200/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div
          className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="">Master New </span>
            <span
              className={` bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform transition-all duration-700 delay-400 hover:scale-105 inline-block ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}>
              Skills Today
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students learning cutting-edge technologies from
            industry experts.
          </p>
        </div>

        {/* Stats Section */}
        {/* <div
          className={`flex flex-wrap justify-center gap-8 mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              50K+
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Active Students
            </div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              100+
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Expert Instructors
            </div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              4.8★
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Average Rating
            </div>
          </div>
        </div> */}

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {courses.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className={`group block transform transition-all duration-500 hover:-translate-y-3 ${
                animatedCards.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${800 + index * 200}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}>
              <article className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 hover:border-blue-200/50 h-full flex flex-col">
                {/* Course Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`flex items-center bg-gradient-to-r ${course.categoryColor} text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg`}>
                      <span className="mr-1">{course.categoryIcon}</span>
                      {course.category}
                    </div>
                  </div>

                  {/* Course Badges */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    {course.bestseller && (
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Bestseller
                      </div>
                    )}
                    {course.newCourse && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        New
                      </div>
                    )}
                  </div>

                  {/* Floating Particles */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-8 right-12 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                      <div className="absolute top-16 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-300"></div>
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {course.title}
                    </h3>

                    {/* Instructor */}
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
                        <div className="text-xs text-gray-500">
                          {course.instructor.title}
                        </div>
                      </div>
                    </div>

                    {/* Course Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current mr-1" />
                          <span className="text-sm font-medium text-gray-700">
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
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="mb-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          course.level === "Beginner"
                            ? "bg-green-100 text-green-800"
                            : course.level === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}>
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${course.price.current}
                      </span>
                      {course.price.original && (
                        <>
                          <span className="text-lg text-gray-500 line-through">
                            ${course.price.original}
                          </span>
                          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                            {course.price.discount}% OFF
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All CTA
        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Explore All Courses
            <ChevronRight className="w-5 h-5 ml-3" />
          </Link>
        </div> */}

        {/* Enhanced CTA Section */}
        <div
          className={`text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <div className="relative inline-block group">
            <Link
              href="/courses"
              className="relative bg-white text-orange-500 border-2 border-orange-500 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Explore All Courses
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>

              {/* Button shine effect */}
              <div className="absolute inset-0 -left-full group-hover:left-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-700 ease-out"></div>
            </Link>

            {/* Floating Elements around CTA */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-bounce delay-300 group-hover:animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce delay-700 group-hover:animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHome;
