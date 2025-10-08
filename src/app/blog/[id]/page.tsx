"use client";

import React from "react";
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
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors duration-300">
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
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors duration-300">
              Back to Blog
            </Link>
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
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span
                className={`flex items-center bg-gradient-to-r ${blog.categoryColor} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                <span className="mr-2">{blog.categoryIcon}</span>
                {blog.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 hover:shadow-2xl transition-shadow duration-300">
                {/* Article Header */}
                <header className="mb-8">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {blog.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 mb-6">
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

                  <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-300">
                        <span>{blog.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center text-gray-500 hover:text-red-500 transition-colors duration-300">
                        <Heart className="w-4 h-4 mr-1" />
                        <span>{blog.likes} likes</span>
                      </div>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-purple-600 transition-colors duration-300 group">
                      <Share2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Share
                    </button>
                  </div>
                </header>

                {/* Article Description */}
                <div className="mb-8">
                  <p className="text-xl text-gray-700 leading-relaxed font-medium hover:text-gray-900 transition-colors duration-300">
                    {blog.description}
                  </p>
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Article Footer */}
                <footer className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-xl hover:bg-red-100 transition-colors duration-300">
                        <Heart className="w-4 h-4 mr-2" />
                        Like ({blog.likes})
                      </button>
                      <button className="flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors duration-300 group">
                        <Share2 className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Share
                      </button>
                    </div>
                    <Link
                      href="/blog"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors duration-300 hover:shadow-lg">
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
