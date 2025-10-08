"use client";

import React from "react";
import { Star, Quote, CheckCircle, Play } from "lucide-react";
import Link from "next/link";

const Testimonials = () => {
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

  const getCompanyColor = (company: string) => {
    switch (company) {
      case "Google":
        return "from-blue-500 to-green-500";
      case "Netflix":
        return "from-red-500 to-black";
      case "Uber":
        return "from-black to-gray-700";
      case "Microsoft":
        return "from-blue-600 to-cyan-500";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-72 h-72 bg-gradient-to-bl from-orange-200/20 to-red-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-200/15 to-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-100/10 to-orange-100/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span>Success </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how CodingSharks students are making waves in tech
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50 hover:border-orange-200/50 overflow-hidden">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

              <div className="relative z-10 p-6 sm:p-8">
                {/* Quote Section */}
                <div className="flex items-start space-x-4 mb-8">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* User Info Section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-white group-hover:ring-orange-200 transition-colors duration-300"
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
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl px-4 py-2">
                      <div className="text-xs text-blue-800 font-semibold">
                        {testimonial.achievement}
                      </div>
                      <div className="text-xs text-blue-600">
                        +{testimonial.salaryIncrease} salary
                      </div>
                    </div>
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
              <div className="absolute inset-0 -top-full group-hover:top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-y-12 transition-all duration-700 ease-out"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block group">
            <Link
              href="/blog"
              className="relative bg-white text-orange-500 border-2 border-orange-500 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:bg-orange-500 hover:text-orange-900 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Read More Stories
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
          </div>

          {/* Additional Info */}
          <p className="mt-6 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Join our community of successful developers and transform your
            career with industry-leading instruction.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>100% Real Reviews</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Verified Students</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Career Success Tracked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
