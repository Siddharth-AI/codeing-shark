"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCourse } from "@/lib/coursesData";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.id as string;
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!courseId) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
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
          </div>
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
          <div className="text-center">
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
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      comment:
        "This course transformed my career! The projects were incredibly practical and the instructor's teaching style made complex topics easy to understand.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b48c?w=100",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Full-Stack Developer",
      comment:
        "Best investment I've made in my education. The curriculum is up-to-date and the community support is outstanding.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
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

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                {/* Level Badge */}
                <div className="inline-block">
                  <span className="px-4 py-1.5 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                    {course.level} Level
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  {course.title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  {course.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {course.description}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-6 pt-4">
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
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg">
                    <Play className="w-5 h-5 inline mr-2" />
                    Book Free Demo Class
                  </button>

                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                    <Play className="w-5 h-5 inline mr-2" />
                    Watch Preview
                  </button>
                </div>
              </div>

              {/* Right Content - Price Card */}
              <div className="lg:flex lg:justify-end">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full hover:shadow-3xl transition-shadow duration-300">
                  {/* Course Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-lg">
                        40% OFF
                      </span>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="p-6 space-y-6">
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-bold text-gray-900">
                          ${course.price.current}
                        </span>
                        <span className="text-2xl text-gray-400 line-through">
                          ${course.price.original}
                        </span>
                      </div>
                      <p className="text-sm text-red-500 font-medium mt-2 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Limited Time Offer
                      </p>
                    </div>

                    <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-colors shadow-lg">
                      Enroll Now
                    </button>

                    <p className="text-center text-sm text-gray-600">
                      30-day money-back guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex gap-8 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 font-medium text-sm whitespace-nowrap border-b-2 transition-all ${
                    activeTab === tab.id
                      ? "border-orange-500 text-orange-500"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  }`}>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-12">
                  {/* What You'll Learn */}
                  <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Trophy className="w-7 h-7 text-orange-500" />
                      What You'll Learn
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.whatYouLearn.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Skills You'll Gain */}
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Skills You'll Gain
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {course.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium border border-orange-200 hover:bg-orange-100 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Requirements */}
                  <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Requirements
                    </h2>
                    <ul className="space-y-3">
                      {course.prerequisites.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-700">
                          <ArrowLeft className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 rotate-180" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              )}

              {/* Curriculum Tab */}
              {activeTab === "curriculum" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Course Curriculum
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {course.curriculum.totalLessons} lessons •{" "}
                      {course.curriculum.totalDuration}
                    </p>

                    <div className="space-y-4">
                      {course.curriculum.sections.map((section, index) => (
                        <div
                          key={section.id}
                          className="border border-gray-200 rounded-xl overflow-hidden">
                          <div className="bg-gray-50 p-4 font-semibold text-gray-900 flex items-center justify-between">
                            <span>
                              Section {index + 1}: {section.title}
                            </span>
                            <span className="text-sm text-gray-600 font-normal">
                              {section.lessons.length} lessons
                            </span>
                          </div>
                          <div className="divide-y divide-gray-100">
                            {section.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
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
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === "projects" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Target className="w-7 h-7 text-orange-500" />
                      Real-World Projects
                    </h2>
                    <div className="space-y-6">
                      {course.modules.map((module, index) => (
                        <div
                          key={module.id}
                          className="border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all">
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
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Instructor Tab */}
              {activeTab === "instructor" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Your Instructor
                    </h2>
                    <div className="flex items-start gap-6">
                      <img
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
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Course Includes Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    This course includes:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span>{course.duration} of content</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Download className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span>Downloadable resources</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Monitor className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span>Access on mobile and TV</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Award className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <User className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span>Direct instructor support</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Trophy className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span>Lifetime access</span>
                    </li>
                  </ul>
                </div>

                {/* Share Course Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Share this course
                  </h3>
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Facebook
                    </button>
                    <button className="flex-1 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm font-medium">
                      Twitter
                    </button>
                    <button className="flex-1 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium">
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Our Students Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                    }
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-6 text-gray-700">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join thousands of students who have already transformed their
              careers
            </h2>
            <p className="text-white/90 text-lg mb-8">
              30-day money-back guarantee
            </p>
            <button className="px-8 py-4 bg-white text-orange-500 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-xl">
              Enroll Now - ${course.price.current}
            </button>
          </div>
        </div>
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
