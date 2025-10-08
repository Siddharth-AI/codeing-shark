"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Track scroll position for background change
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Track sections
      const sections = [
        "hero",
        "features",
        "courses",
        "testimonials",
        // "pricing",
      ];
      const offset = 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition + offset >= offsetTop &&
            scrollPosition + offset < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    } else {
      setIsScrolled(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
      <nav className="container mx-auto px-6 py-1 md:py-2 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with hover animation */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className=" flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <img
                src="/coding.png"
                alt="Coding Sharks"
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link
              href="/"
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 relative group ${
                pathname === "/" &&
                (activeSection === "hero" || activeSection === "")
                  ? "text-orange-500 bg-orange-50"
                  : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              }`}>
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </Link>

            {/* Features with animation */}
            {pathname === "/" ? (
              <button
                onClick={() => handleSmoothScroll("features")}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 relative group ${
                  activeSection === "features"
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}>
                Features
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
              </button>
            ) : (
              <Link
                href="/#features"
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 relative group text-gray-700 hover:text-orange-500 hover:bg-orange-50`}>
                Features
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
              </Link>
            )}

            {/* Courses Dropdown with animation */}
            <div className="relative group">
              <button
                onClick={() => {
                  router.push("/courses");
                }}
                className={`flex items-center space-x-1 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  pathname.startsWith("/courses") ||
                  (pathname === "/" && activeSection === "courses")
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}>
                <span>Courses</span>
                {/* <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" /> */}
              </button>

              {/* <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 transform translate-y-0 border border-gray-100">
                <div className="absolute -top-1 left-6 w-2 h-2 bg-white rotate-45 border-l border-t border-gray-100"></div>
                <Link
                  href="/courses"
                  className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-600 transition-all duration-200 hover:translate-x-1 font-medium">
                  🎯 All Courses
                </Link>
                <Link
                  href="/courses/python-bootcamp"
                  className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-600 transition-all duration-200 hover:translate-x-1">
                  🐍 Python Bootcamp
                </Link>
                <Link
                  href="/courses/react-masterclass"
                  className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-600 transition-all duration-200 hover:translate-x-1">
                  ⚛️ React Masterclass
                </Link>
                <Link
                  href="/courses/fullstack-web"
                  className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-600 transition-all duration-200 hover:translate-x-1">
                  🚀 Full Stack Web
                </Link>
              </div> */}
            </div>

            {/* Testimonials */}
            {pathname === "/" ? (
              <button
                onClick={() => handleSmoothScroll("testimonials")}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 relative group ${
                  activeSection === "testimonials"
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}>
                Testimonials
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
              </button>
            ) : (
              <Link
                href="/#testimonials"
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 relative group text-gray-700 hover:text-orange-500 hover:bg-orange-50
                  `}>
                Testimonials
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
              </Link>
            )}

            {/* Pricing */}
            {/* {pathname === "/" ? (
              <button
                onClick={() => handleSmoothScroll("pricing")}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 relative group ${
                  activeSection === "pricing"
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}>
                Pricing
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
              </button>
            ) : (
              <Link
                href="/pricing"
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 relative group ${
                  pathname === "/pricing"
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}>
                Pricing
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
              </Link>
            )} */}

            {/* Blog */}
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 relative group ${
                pathname === "/blog"
                  ? "text-orange-500 bg-orange-50"
                  : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              }`}>
              Blog
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button with animation */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/courses"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform shadow-lg">
              <span className="flex items-center space-x-2">
                <span>Get Started</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden transition-all duration-300 hover:scale-110 text-gray-700`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 transform rotate-180 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300 hover:rotate-12" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slideDown">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-gray-200/50">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl transition-all duration-200 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}>
                  🏠 Home
                </Link>
                <Link
                  href="/courses"
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl transition-all duration-200 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}>
                  🎯 All Courses
                </Link>
                <button
                  onClick={() => {
                    handleSmoothScroll("features");
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl transition-all duration-200 hover:translate-x-2 text-left">
                  ✨ Features
                </button>
                <button
                  onClick={() => {
                    handleSmoothScroll("testimonials");
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl transition-all duration-200 hover:translate-x-2 text-left">
                  💬 Testimonials
                </button>
                {/* <button
                  onClick={() => {
                    handleSmoothScroll("pricing");
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl transition-all duration-200 hover:translate-x-2 text-left">
                  💰 Pricing
                </button> */}
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl transition-all duration-200 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}>
                  📝 Blog
                </Link>
                <Link
                  href="/courses"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold text-center mt-4 hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}>
                  🚀 Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
