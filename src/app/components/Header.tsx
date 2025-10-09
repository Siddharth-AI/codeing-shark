"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/images/Coding.png";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Lock/unlock body scroll when mobile menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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

  // Handle scroll with route navigation
  const handleNavigation = (sectionId: string) => {
    if (pathname === "/") {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page first, then scroll after navigation
      router.push(`/#${sectionId}`);
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        easeIn: "easeOut",
      },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        easeIn: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        easeIn: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
        <nav className="container mx-auto px-6 py-1 md:py-2 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                variants={logoVariants}
                whileHover="hover"
                className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt="Coding Sharks"
                  className="h-12 w-auto"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Home */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Link
                  href="/"
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    pathname === "/" &&
                    (activeSection === "hero" || activeSection === "")
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }`}>
                  Home
                </Link>
              </motion.div>

              {/* Features */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => handleNavigation("features")}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeSection === "features"
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }`}>
                  Features
                </button>
              </motion.div>

              {/* Courses */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => {
                    router.push("/courses");
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    pathname.startsWith("/courses") ||
                    (pathname === "/" && activeSection === "courses")
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }`}>
                  Courses
                </button>
              </motion.div>

              {/* Testimonials */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => handleNavigation("testimonials")}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeSection === "testimonials"
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }`}>
                  Testimonials
                </button>
              </motion.div>

              {/* Blog */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Link
                  href="/blog"
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    pathname === "/blog"
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }`}>
                  Blog
                </Link>
              </motion.div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Link
                  href="/courses"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                  Get Started →
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden text-gray-700 relative z-[60]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Full Screen Mobile Navigation with Scroll */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden fixed inset-0 z-40 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-y-auto">
            <div className="min-h-full flex flex-col pt-24 pb-8 px-6">
              <div className="flex-1 flex flex-col justify-center space-y-4 py-8">
                <motion.div
                  custom={0}
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-6 py-4 rounded-2xl transition-all duration-300 block text-xl font-semibold"
                    onClick={() => setIsMenuOpen(false)}>
                    🏠 Home
                  </Link>
                </motion.div>

                <motion.div
                  custom={1}
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible">
                  <Link
                    href="/courses"
                    className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-6 py-4 rounded-2xl transition-all duration-300 block text-xl font-semibold"
                    onClick={() => setIsMenuOpen(false)}>
                    🎯 All Courses
                  </Link>
                </motion.div>

                <motion.div
                  custom={2}
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible">
                  <button
                    onClick={() => {
                      handleNavigation("features");
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-6 py-4 rounded-2xl text-left transition-all duration-300 w-full text-xl font-semibold">
                    ✨ Features
                  </button>
                </motion.div>

                <motion.div
                  custom={3}
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible">
                  <button
                    onClick={() => {
                      handleNavigation("testimonials");
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-6 py-4 rounded-2xl text-left transition-all duration-300 w-full text-xl font-semibold">
                    💬 Testimonials
                  </button>
                </motion.div>

                <motion.div
                  custom={4}
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible">
                  <Link
                    href="/blog"
                    className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-6 py-4 rounded-2xl transition-all duration-300 block text-xl font-semibold"
                    onClick={() => setIsMenuOpen(false)}>
                    📝 Blog
                  </Link>
                </motion.div>

                <motion.div
                  custom={5}
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="pt-4">
                  <Link
                    href="/courses"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-5 rounded-2xl font-bold text-center hover:from-orange-600 hover:to-red-600 shadow-lg transition-all duration-300 block text-xl"
                    onClick={() => setIsMenuOpen(false)}>
                    🚀 Get Started
                  </Link>
                </motion.div>
              </div>

              {/* Footer text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center text-gray-500 text-sm mt-8">
                © 2025 Coding Sharks. All rights reserved.
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
