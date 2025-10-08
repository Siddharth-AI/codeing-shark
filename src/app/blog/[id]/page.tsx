"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  BookOpen,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getBlogPost } from "@/lib/blogData";

export default function BlogPostPage() {
  const params = useParams();
  const blogId = params?.id as string;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Longer delay so you can see the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Trigger animations after content is ready
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!blogId) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center pt-20">
          <div className="text-center">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Invalid blog URL
            </h1>
            <p className="text-gray-600 mb-8">
              Please check the URL and try again.
            </p>
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const blog = getBlogPost(blogId);

  if (!blog) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center pt-20">
          <div className="text-center">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Blog post not found
            </h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
          <div className="pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="animate-pulse">
                  <div className="h-8 w-32 bg-gray-300 rounded mb-8"></div>
                  <div className="h-96 w-full bg-gray-300 rounded-3xl mb-8"></div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <div className="h-12 w-3/4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-6 w-1/2 bg-gray-300 rounded mb-8"></div>
                    <div className="space-y-4">
                      <div className="h-4 w-full bg-gray-300 rounded"></div>
                      <div className="h-4 w-full bg-gray-300 rounded"></div>
                      <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <article className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="relative pt-20">
          {/* Back Button */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              href="/blog"
              className={`inline-flex items-center text-gray-600 hover:text-blue-600 transition-all duration-500 group transform ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}>
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </div>

          {/* Hero Image */}
          <div
            className={`relative h-64 sm:h-80 lg:h-96 overflow-hidden transform transition-all duration-1000 ${
              isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
            }`}>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span
                className={`flex items-center bg-gradient-to-r ${
                  blog.categoryColor
                } text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-all duration-700 ${
                  isLoaded
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-4 opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "0.2s" }}>
                <span className="mr-2">{blog.categoryIcon}</span>
                {blog.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div
                className={`bg-white rounded-3xl shadow-xl p-8 sm:p-12 hover:shadow-2xl transition-all duration-700 transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "0.3s" }}>
                {/* Article Header */}
                <header className="mb-8">
                  <h1
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight transform transition-all duration-800 ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: "0.5s" }}>
                    {blog.title}
                  </h1>

                  <div
                    className={`flex flex-wrap items-center gap-6 mb-6 transform transition-all duration-700 ${
                      isLoaded
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-6 opacity-0"
                    }`}
                    style={{ transitionDelay: "0.7s" }}>
                    <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <User className="w-5 h-5 mr-2" />
                      <span className="font-medium">{blog.author}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <div
                    className={`flex items-center justify-between pb-6 border-b border-gray-200 transform transition-all duration-600 ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "0.9s" }}>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-300">
                        <span>{blog.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center text-gray-500 hover:text-red-500 transition-colors duration-300">
                        <Heart className="w-4 h-4 mr-1 hover:scale-125 transition-transform duration-300" />
                        <span>{blog.likes} likes</span>
                      </div>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-purple-600 transition-all duration-300 hover:scale-105 group">
                      <Share2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Share
                    </button>
                  </div>
                </header>

                {/* Article Description */}
                <div
                  className={`mb-8 transform transition-all duration-700 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "1.1s" }}>
                  <p className="text-xl text-gray-700 leading-relaxed font-medium hover:text-gray-900 transition-colors duration-300">
                    {blog.description}
                  </p>
                </div>

                {/* Article Content */}
                <div
                  className={`prose prose-lg max-w-none transform transition-all duration-800 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "1.3s" }}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Article Footer */}
                <footer
                  className={`mt-12 pt-8 border-t border-gray-200 transform transition-all duration-700 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "1.5s" }}>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-xl hover:bg-red-100 transition-all duration-300 hover:scale-105 group">
                        <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        Like ({blog.likes})
                      </button>
                      <button className="flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-xl hover:bg-blue-100 transition-all duration-300 hover:scale-105 group">
                        <Share2 className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Share
                      </button>
                    </div>
                    <Link
                      href="/blog"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      More Articles
                    </Link>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
