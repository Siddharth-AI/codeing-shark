"use client";

import { Code, Users, Trophy, Clock, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Code,
      title: "Interactive Coding Environment",
      description:
        "Practice coding directly in your browser with our advanced IDE that supports multiple programming languages.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      shadowColor: "shadow-blue-100",
      gradient: "from-blue-400/20 to-cyan-400/20",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of experience at top tech companies like Google, Microsoft, and Apple.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      shadowColor: "shadow-green-100",
      gradient: "from-green-400/20 to-emerald-400/20",
    },
    {
      icon: Trophy,
      title: "Project-Based Learning",
      description:
        "Build real-world projects that you can showcase in your portfolio and impress potential employers.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      shadowColor: "shadow-purple-100",
      gradient: "from-purple-400/20 to-pink-400/20",
    },
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description:
        "Flexible scheduling allows you to learn whenever convenient. Access courses 24/7 from anywhere.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      shadowColor: "shadow-orange-100",
      gradient: "from-orange-400/20 to-yellow-400/20",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description:
        "Get immediate feedback on your code with our AI-powered assessment system and automated testing.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      shadowColor: "shadow-red-100",
      gradient: "from-red-400/20 to-pink-400/20",
    },
    {
      icon: Shield,
      title: "Career Support",
      description:
        "Receive job placement assistance, resume reviews, and interview preparation to land your dream job.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      shadowColor: "shadow-indigo-100",
      gradient: "from-indigo-400/20 to-purple-400/20",
    },
  ];

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

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50  relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-red-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-100/20 to-orange-100/20 rounded-full blur-3xl animate-ping opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section with Animation */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span
              className={` transform transition-all duration-700 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}>
              Why Choose{" "}
            </span>
            <span
              className={` bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform transition-all duration-700 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}>
              CodingSharks?
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transform transition-all duration-700 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}>
            We provide everything you need to master programming and launch your
            tech career, with cutting-edge tools and expert guidance every step
            of the way.
          </p>
        </div>

        {/* Features Grid with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 sm:p-8 bg-white rounded-3xl border border-gray-100/50 hover:border-orange-200/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl cursor-pointer overflow-hidden ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${800 + index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}>
              {/* Background Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}></div>

              {/* Floating Background Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-tl from-blue-200/20 to-purple-200/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-pulse"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with Enhanced Animation */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <feature.icon className="w-8 h-8 sm:w-9 sm:h-9 text-white group-hover:scale-110 transition-transform duration-300" />

                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-300/50 group-hover:scale-125 transition-all duration-500"></div>
                  </div>

                  {/* Floating Particles */}
                  {hoveredCard === index && (
                    <>
                      <div className="absolute -top-2 -right-2 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100"></div>
                      <div className="absolute -bottom-1 -left-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                      <div className="absolute top-2 -left-3 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-500"></div>
                    </>
                  )}
                </div>

                {/* Title with Animation */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-all duration-300 leading-tight">
                  {feature.title}
                </h3>

                {/* Description with Improved Typography */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base">
                  {feature.description}
                </p>

                {/* Interactive Arrow */}
                <div className="mt-6 flex items-center text-orange-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
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

            {/* Floating Elements around CTA */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-bounce delay-300 group-hover:animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce delay-700 group-hover:animate-ping"></div>
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
