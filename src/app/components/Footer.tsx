"use client";

import React, { useRef } from "react";
import {
  Code2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const quickLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Courses", href: "/courses" },
    { name: "Instructors", href: "/#instructors" },
    { name: "Success Stories", href: "/#testimonials" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/#contact" },
  ];

  const courses = [
    { name: "Python Programming", href: "/courses/python-bootcamp" },
    { name: "Web Development", href: "/courses/fullstack-web" },
    { name: "Data Science", href: "/courses/data-science-r" },
    { name: "Machine Learning", href: "/courses#ml" },
    { name: "Mobile Development", href: "/courses#mobile" },
    { name: "Game Development", href: "/courses#gamedev" },
  ];

  const support = [
    { name: "Help Center", href: "/#help" },
    { name: "Student Portal", href: "/#portal" },
    { name: "Community Forum", href: "/#community" },
    { name: "Technical Support", href: "/#support" },
    { name: "Privacy Policy", href: "/#privacy" },
    { name: "Terms of Service", href: "/#terms" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        easeIn: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
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
    <footer ref={footerRef} className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold">CodingSharks</span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation of developers with cutting-edge
              programming education and real-world skills.
            </p>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors inline-block">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}>
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Courses */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <motion.li
                  key={course.name}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}>
                  <Link
                    href={course.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors inline-block">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}>
                      {course.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Support & Contact</h3>

            <div className="space-y-4 mb-6">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}>
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:support@codingsharks.com"
                  className="text-gray-400 hover:text-orange-400 transition-colors">
                  support@codingsharks.com
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}>
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-orange-400 transition-colors">
                  +1 (234) 567-8900
                </a>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}>
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Tech Street, Innovation City, IC 12345
                </span>
              </motion.div>
            </div>

            <ul className="space-y-3">
              {support.map((item, index) => (
                <motion.li
                  key={item.name}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm inline-block">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}>
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Get the latest courses, tips, and coding resources delivered to
              your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-r-lg hover:from-orange-600 hover:to-red-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 CodingSharks. All rights reserved.
          </div>

          <div className="flex space-x-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (text, index) => (
                <motion.div
                  key={text}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}>
                  <Link
                    href={`/#${text.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-gray-400 hover:text-orange-400 transition-colors">
                    {text}
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
