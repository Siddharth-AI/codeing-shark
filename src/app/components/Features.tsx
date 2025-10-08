"use client";

import { Code, Users, Trophy, Clock, Zap, Shield } from "lucide-react";
import Link from "next/link";

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Interactive Coding Environment",
      description:
        "Practice coding directly in your browser with our advanced IDE that supports multiple programming languages.",
      color: "from-blue-500 to-blue-600",
      gradient: "from-blue-400/20 to-cyan-400/20",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of experience at top tech companies like Google, Microsoft, and Apple.",
      color: "from-green-500 to-green-600",
      gradient: "from-green-400/20 to-emerald-400/20",
    },
    {
      icon: Trophy,
      title: "Project-Based Learning",
      description:
        "Build real-world projects that you can showcase in your portfolio and impress potential employers.",
      color: "from-purple-500 to-purple-600",
      gradient: "from-purple-400/20 to-pink-400/20",
    },
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description:
        "Flexible scheduling allows you to learn whenever convenient. Access courses 24/7 from anywhere.",
      color: "from-orange-500 to-orange-600",
      gradient: "from-orange-400/20 to-yellow-400/20",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description:
        "Get immediate feedback on your code with our AI-powered assessment system and automated testing.",
      color: "from-red-500 to-red-600",
      gradient: "from-red-400/20 to-pink-400/20",
    },
    {
      icon: Shield,
      title: "Career Support",
      description:
        "Receive job placement assistance, resume reviews, and interview preparation to land your dream job.",
      color: "from-indigo-500 to-indigo-600",
      gradient: "from-indigo-400/20 to-purple-400/20",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-100/20 to-orange-100/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span>Why Choose </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              CodingSharks?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide everything you need to master programming and launch your
            tech career, with cutting-edge tools and expert guidance every step
            of the way.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 bg-white rounded-3xl border border-gray-100/50 hover:border-orange-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden">
              {/* Background Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-2 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <feature.icon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-all duration-300 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base">
                  {feature.description}
                </p>

                {/* Interactive Arrow */}
                <div className="mt-6 flex items-center text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  <span className="text-sm font-medium mr-2">Learn more</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
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
              href="/courses"
              className="relative bg-white text-orange-500 border-2 border-orange-500 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:bg-orange-500 hover:text-orange-900 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Explore All Features
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
            Join thousands of developers who have transformed their careers with
            our comprehensive learning platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
