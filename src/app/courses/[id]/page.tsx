"use client";

import React, { useState, useRef } from "react";

import {
  ArrowLeft,
  Star,
  Users,
  Clock,
  Award,
  Play,
  BookOpen,
  CheckCircle,
  Download,
  Monitor,
  FileText,
  User,
  Trophy,
  Zap,
  Target,
  ChevronDown,
  ChevronUp,
  Lock, // NEW ICON
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getCourse } from "@/lib/coursesData";
import { motion, useInView, AnimatePresence } from "framer-motion";
import LeadInlineCard from "@/components/LeadInlinePanel";
import { courseTestimonialImages } from "@/lib/Images";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params?.id as string;
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for managing which curriculum sections are open
  const [openSections, setOpenSections] = useState<number[]>([1]); // First section open by default

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  });
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 });

  // Toggle section open/close
  const toggleSection = (sectionId: number) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  if (!courseId) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Course Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              Please check the URL and try again.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  const course = getCourse(courseId);

  if (!course) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Course Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The course you're looking for doesn't exist.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  const testimonials = [
    {
      id: 1,
      name: "Atharva Mehta",
      role: "Software Engineer at Google",
      comment:
        "This course transformed my career! The projects were incredibly practical and the instructor's teaching style made complex topics easy to understand.",
      rating: 5,
      avatar: courseTestimonialImages.testimonial1.src,
    },
    {
      id: 2,
      name: "Mukund Gupta",
      role: "Full-Stack Developer",
      comment:
        "Best investment I've made in my education. The curriculum is up-to-date and the community support is outstanding.",
      rating: 5,
      avatar: courseTestimonialImages.testimonial2.src,
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "How long do I have access to the course?",
      answer:
        "You have lifetime access to the course content, including all future updates and additions.",
    },
    {
      id: 2,
      question: "What if I'm not satisfied with the course?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
    },
    {
      id: 3,
      question: "Do I get a certificate upon completion?",
      answer:
        "Yes! You'll receive a certificate of completion that you can share on LinkedIn and your resume.",
    },
    {
      id: 4,
      question: "Are there any prerequisites?",
      answer: `Prerequisites vary by course. Check the "Requirements" section above for specific details.`,
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "projects", label: "Projects" },
    { id: "instructor", label: "Instructor" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, easeIn: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <motion.div variants={fadeInUp} className="inline-block">
                    {/* Back Button */}
                    <motion.button
                      onClick={() => router.back()}
                      whileHover={{ x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </motion.button>
                  </motion.div>
                </div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  {course.title}
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  {course.subtitle}
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-gray-400 leading-relaxed">
                  {course.description}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span className="text-sm font-medium">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-400" />
                    <span className="text-sm font-medium">
                      {course.studentsCount.toLocaleString()} students
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {course.rating} ({course.reviews.length + 2847} reviews)
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 pt-6">
                  {/* <motion.button
                    onClick={() => setIsModalOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg">
                    <Play className="w-5 h-5 inline mr-2" />
                    Book Free Demo Class
                  </motion.button> */}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                    <Play className="w-5 h-5 inline mr-2" />
                    Watch Preview
                  </motion.button>
                </motion.div>
              </div>

              {/* Right Content - Price Card */}

              <LeadInlineCard
                courseTitle={
                  course?.title ??
                  "Complete Data Science, AI, ML & Deep Learning"
                }
              />
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex gap-8 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`py-4 px-2 font-medium text-sm whitespace-nowrap border-b-2 transition-all ${
                    activeTab === tab.id
                      ? "border-orange-500 text-orange-500"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  }`}>
                  {tab.label}
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Tab Content */}
        <div
          ref={contentRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-12">
              <AnimatePresence mode="wait">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-12">
                    {/* What You'll Learn */}
                    <motion.section
                      variants={staggerContainer}
                      initial="hidden"
                      animate={isContentInView ? "visible" : "hidden"}
                      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Trophy className="w-7 h-7 text-orange-500" />
                        What You'll Learn
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.whatYouLearn.map((item, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.section>

                    {/* Skills */}
                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Skills You'll Gain
                      </h2>
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isContentInView ? "visible" : "hidden"}
                        className="flex flex-wrap gap-3">
                        {course.tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium border border-orange-200 hover:bg-orange-100 transition-colors cursor-pointer">
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    </section>

                    {/* Requirements */}
                    <motion.section
                      variants={staggerContainer}
                      initial="hidden"
                      animate={isContentInView ? "visible" : "hidden"}
                      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Requirements
                      </h2>
                      <ul className="space-y-3">
                        {course.prerequisites.map((req, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex items-start gap-3 text-gray-700">
                            <ArrowLeft className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 rotate-180" />
                            <span>{req}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.section>
                  </motion.div>
                )}

                {/* Curriculum Tab - CORRECT: Show 3 COLLAPSED Sections */}
                {activeTab === "curriculum" && (
                  <motion.div
                    key="curriculum"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Course Curriculum
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {course.curriculum.totalLessons} lessons •{" "}
                        {course.curriculum.totalDuration}
                      </p>

                      {/* Container with Blur Effect */}
                      <div className="relative min-h-[400px]">
                        {/* First 3 Sections - WITH WORKING DROPDOWN - Blurred */}
                        <div className="space-y-4">
                          {course.curriculum.sections
                            .slice(0, 3)
                            .map((section, index) => (
                              <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`border border-gray-200 rounded-xl overflow-hidden ${
                                  section.id === 3
                                    ? "blur-[2px] opacity-70 pointer-events-none"
                                    : ""
                                }`}>
                                {/* Section Header - CLICKABLE */}
                                <motion.button
                                  onClick={() => toggleSection(section.id)}
                                  whileHover={{
                                    backgroundColor: "rgba(249, 250, 251, 1)",
                                  }}
                                  className="w-full bg-gray-50 p-4 font-semibold text-gray-900 flex items-center justify-between transition-colors cursor-pointer">
                                  <span className="text-left">
                                    Section {index + 1}: {section.title}
                                  </span>
                                  <div className="flex items-center gap-3">
                                    <span className="text-sm text-gray-600 font-normal">
                                      {section.lessons.length} lessons
                                    </span>
                                    <motion.div
                                      animate={{
                                        rotate: openSections.includes(
                                          section.id
                                        )
                                          ? 180
                                          : 0,
                                      }}
                                      transition={{ duration: 0.3 }}>
                                      <ChevronDown className="w-5 h-5 text-gray-500" />
                                    </motion.div>
                                  </div>
                                </motion.button>

                                {/* Section Content - EXPANDABLE */}
                                <AnimatePresence>
                                  {openSections.includes(section.id) && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                      }}
                                      className="overflow-hidden">
                                      <div className="divide-y divide-gray-100">
                                        {section.lessons.map((lesson) => (
                                          <motion.div
                                            key={lesson.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            whileHover={{
                                              backgroundColor:
                                                "rgba(249, 250, 251, 1)",
                                            }}
                                            className="p-4 flex items-center justify-between transition-colors">
                                            <div className="flex items-center gap-3">
                                              {lesson.type === "video" && (
                                                <Play className="w-4 h-4 text-gray-400" />
                                              )}
                                              {lesson.type === "quiz" && (
                                                <FileText className="w-4 h-4 text-gray-400" />
                                              )}
                                              {lesson.type === "assignment" && (
                                                <BookOpen className="w-4 h-4 text-gray-400" />
                                              )}
                                              <span className="text-gray-700">
                                                {lesson.title}
                                              </span>
                                              {lesson.preview && (
                                                <span className="text-xs text-orange-500 font-medium">
                                                  Preview
                                                </span>
                                              )}
                                            </div>
                                            <span className="text-sm text-gray-500">
                                              {lesson.duration}
                                            </span>
                                          </motion.div>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            ))}
                        </div>

                        {/* Center Overlay with Download CTA */}
                        <div className="mt-3 flex items-center justify-center pointer-events-none">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-center space-y-4 z-10 px-8 py-10 border max-w-lg pointer-events-auto">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-2">
                              <Lock className="w-10 h-10 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              Want to see the full curriculum?
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              Download our detailed course brochure to explore
                              all {course.curriculum.totalLessons} lessons
                            </p>
                            <motion.button
                              onClick={() => setIsModalOpen(true)}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all shadow-lg">
                              <Download className="w-5 h-5" />
                              Download Course Brochure
                            </motion.button>
                            <p className="text-sm text-gray-500">
                              No credit card required • Free download
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Projects Tab */}
                {activeTab === "projects" && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Target className="w-7 h-7 text-orange-500" />
                        Real-World Projects
                      </h2>
                      <div className="space-y-6">
                        {course.modules.map((module, index) => (
                          <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                              scale: 1.02,
                              borderColor: "rgba(251, 146, 60, 1)",
                            }}
                            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-lg font-semibold text-gray-900">
                                Project {index + 1}: {module.title}
                              </h3>
                              {module.completed && (
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                  Completed
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {module.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                {module.lessons} lessons
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Instructor Tab */}
                {activeTab === "instructor" && (
                  <motion.div
                    key="instructor"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Your Instructor
                      </h2>
                      <div className="flex items-start gap-6">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {course.instructor.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {course.instructor.title}
                          </p>
                          <div className="flex items-center gap-6 mb-4">
                            <div className="flex items-center gap-2">
                              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">
                                {course.instructor.rating}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-5 h-5 text-gray-400" />
                              <span>
                                {course.instructor.students.toLocaleString()}{" "}
                                students
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {course.instructor.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="sticky top-24 space-y-6">
                {/* Course Includes */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    This course includes:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { icon: Clock, text: `${course.duration} of content` },
                      { icon: Download, text: "Downloadable resources" },
                      { icon: Monitor, text: "Access on mobile and TV" },
                      { icon: Award, text: "Certificate of completion" },
                      { icon: User, text: "Direct instructor support" },
                      { icon: Trophy, text: "Lifetime access" },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-gray-700 transition-transform">
                        <item.icon className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Share Course */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Share this course
                  </h3>
                  <div className="flex gap-3">
                    {[
                      {
                        name: "Facebook",
                        color: "bg-blue-600 hover:bg-blue-700",
                      },
                      { name: "Twitter", color: "bg-sky-500 hover:bg-sky-600" },
                      {
                        name: "LinkedIn",
                        color: "bg-blue-700 hover:bg-blue-800",
                      },
                    ].map((platform, index) => (
                      <motion.button
                        key={platform.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 px-4 py-2 ${platform.color} text-white rounded-lg transition-colors text-sm font-medium`}>
                        {platform.name}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          ref={testimonialsRef}
          initial="hidden"
          animate={isTestimonialsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Our Students Say
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={fadeInUp}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.comment}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          ref={faqRef}
          initial="hidden"
          animate={isFaqInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <motion.button
                    onClick={() =>
                      setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                    }
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                    className="w-full p-6 text-left flex items-center justify-between transition-colors">
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden">
                        <div className="px-6 pb-6 text-gray-700">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join thousands of students who have already transformed their
              careers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/90 text-lg mb-8">
              30-day money-back guarantee
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-orange-500 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-xl">
              Enroll Now - ${course.price.current}
            </motion.button>
          </div>
        </motion.div>
      </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle={course?.title || ""}
      />

      <Footer />
    </>
  );
}
