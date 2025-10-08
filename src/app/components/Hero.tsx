"use client";

import { Play, Star, Users, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Animate progress bar
    const timer = setTimeout(() => {
      setProgressWidth(75);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="bg-gradient-to-br from-slate-50 to-orange-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      id="hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}>
            {/* Badge with animation */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-50 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <span className="animate-bounce mr-2">🦈</span>
              Dive Deep into Coding
            </div>

            {/* Main Heading with stagger animation */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span
                className={` transform transition-all duration-700 delay-200 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}>
                Master Coding with the{" "}
              </span>
              <span
                className={` bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform transition-all duration-700 delay-400 hover:scale-105 inline-block ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}>
                Sharks
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed transform transition-all duration-700 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}>
              Join thousands of students learning to code with our expert
              instructors. From beginner to advanced, we'll help you navigate
              the waters of programming.
            </p>

            {/* CTA Buttons with stagger animation */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start transform transition-all duration-700 delay-800 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}>
              <Link
                href="/courses"
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Start Free Trial
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </Link>

              <button className="group flex items-center justify-center bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>

            {/* Stats Grid with hover animations */}
            <div
              className={`grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-200 transform transition-all duration-700 delay-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}>
              <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center justify-center text-orange-500 mb-2 group-hover:animate-bounce">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 group-hover:text-orange-600 transition-colors duration-300" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  50K+
                </div>
                <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Active Students
                </div>
              </div>

              <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300 delay-100">
                <div className="flex items-center justify-center text-orange-500 mb-2 group-hover:animate-bounce">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 group-hover:text-orange-600 transition-colors duration-300" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  200+
                </div>
                <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Courses
                </div>
              </div>

              <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300 delay-200">
                <div className="flex items-center justify-center text-orange-500 mb-2 group-hover:animate-bounce">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 group-hover:text-yellow-500 transition-colors duration-300 fill-current" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  4.9
                </div>
                <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Course Card */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}>
            {/* Main Course Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 hover:shadow-3xl transition-all duration-500 group border border-gray-100/50">
              {/* Live Coding Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
                  Live Coding
                </span>
              </div>

              {/* Course Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Students learning to code"
                  className="rounded-xl w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  🔥 Trending
                </div>
              </div>

              {/* Course Details */}
              <div className="space-y-4">
                {/* Course Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 text-lg group-hover:text-orange-600 transition-colors duration-300">
                    Python Fundamentals
                  </h3>
                  <div className="flex items-center text-yellow-500 group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-4 w-4 fill-current animate-pulse" />
                    <span className="ml-1 text-sm font-medium">4.9</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${progressWidth}%` }}>
                      <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                {/* Progress Info */}
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium hover:text-orange-600 transition-colors duration-300 cursor-default">
                    Progress: 75%
                  </span>
                  <span className="hover:text-orange-600 transition-colors duration-300 cursor-default">
                    12 lessons remaining
                  </span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 animate-float delay-1000"></div>
            </div>

            {/* Students Online Badge */}
            <div
              className={`absolute -bottom-12 sm:-bottom-16 lg:-bottom-20 -left-4 sm:-left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl shadow-xl transform transition-all duration-700 delay-1200 hover:scale-105 hover:-translate-y-1 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-sm font-medium whitespace-nowrap">
                  2,847 students online
                </span>
              </div>
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute top-8 -right-8 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-bounce delay-500"></div>
            <div className="absolute bottom-16 -right-4 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-bounce delay-1500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
