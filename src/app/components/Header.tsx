"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/images/Coding.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "features", "courses", "testimonials"];
      const offset = 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          const scrollPosition = window.scrollY;

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
      <nav className="container mx-auto px-6 py-1 md:py-2 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center">
              <img src={logo.src} alt="Coding Sharks" className="h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link
              href="/"
              className={`px-4 py-2 rounded-full font-medium ${
                pathname === "/" &&
                (activeSection === "hero" || activeSection === "")
                  ? "text-orange-500 bg-orange-50"
                  : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              }`}>
              Home
            </Link>

            {/* Features */}
            {pathname === "/" ? (
              <button
                onClick={() => handleSmoothScroll("features")}
                className={`px-4 py-2 rounded-full font-medium ${
                  activeSection === "features"
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}>
                Features
              </button>
            ) : (
              <Link
                href="/#features"
                className="px-4 py-2 rounded-full font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50">
                Features
              </Link>
            )}

            {/* Courses */}
            <button
              onClick={() => {
                router.push("/courses");
              }}
              className={`px-4 py-2 rounded-full font-medium ${
                pathname.startsWith("/courses") ||
                (pathname === "/" && activeSection === "courses")
                  ? "text-orange-500 bg-orange-50"
                  : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              }`}>
              Courses
            </button>

            {/* Testimonials */}
            {pathname === "/" ? (
              <button
                onClick={() => handleSmoothScroll("testimonials")}
                className={`px-4 py-2 rounded-full font-medium ${
                  activeSection === "testimonials"
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}>
                Testimonials
              </button>
            ) : (
              <Link
                href="/#testimonials"
                className="px-4 py-2 rounded-full font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50">
                Testimonials
              </Link>
            )}

            {/* Blog */}
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-full font-medium ${
                pathname === "/blog"
                  ? "text-orange-500 bg-orange-50"
                  : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              }`}>
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/courses"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Get Started →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-gray-200/50">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}>
                  🏠 Home
                </Link>
                <Link
                  href="/courses"
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}>
                  🎯 All Courses
                </Link>
                <button
                  onClick={() => {
                    handleSmoothScroll("features");
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl text-left">
                  ✨ Features
                </button>
                <button
                  onClick={() => {
                    handleSmoothScroll("testimonials");
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl text-left">
                  💬 Testimonials
                </button>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}>
                  📝 Blog
                </Link>
                <Link
                  href="/courses"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold text-center mt-4 hover:from-orange-600 hover:to-red-600 shadow-lg"
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
