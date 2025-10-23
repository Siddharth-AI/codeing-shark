"use client";

import React, { useState } from "react";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  BookOpen,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getBlogPost } from "@/lib/blogData";
import { motion } from "framer-motion";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const blogId = params?.id as string;
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  if (!blogId) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-white flex items-center justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Invalid blog URL
            </h1>
            <p className="text-gray-600 mb-8">
              Please check the URL and try again.
            </p>
            <Link
              href="/blog"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Back to Blog
            </Link>
          </motion.div>
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
        <div className="min-h-screen bg-white flex items-center justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Blog post not found
            </h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Back to Blog
            </Link>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      color: "hover:bg-sky-500 hover:text-white",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        blog.title
      )}`,
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "hover:bg-blue-600 hover:text-white",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "hover:bg-blue-700 hover:text-white",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}`,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, easeIn: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <>
      <Header />

      <article className="min-h-screen bg-white">
        <div className="relative pt-20">
          {/* Top Bar with Back Button */}
          <div className="sticky top-[56px] md:top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <motion.button
                  onClick={() => router.back()}
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </motion.button>

                <div className="flex items-center gap-3">
                  <motion.button
                    onClick={() => setIsLiked(!isLiked)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      isLiked
                        ? "bg-red-50 text-red-500"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}>
                    <Heart
                      className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                    />
                    <span className="text-sm font-medium">{blog.likes}</span>
                  </motion.button>

                  <div className="relative">
                    <motion.button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </motion.button>

                    {showShareMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[180px]">
                        {shareLinks.map((social) => (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${social.color}`}>
                            <social.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {social.name}
                            </span>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.article
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-6xl mx-auto">
              {/* Category Badge */}
              <motion.div variants={fadeInUp} className="mb-6">
                <span
                  className={`inline-flex items-center bg-gradient-to-r ${blog.categoryColor} text-white px-4 py-1.5 rounded-full text-sm font-semibold`}>
                  <span className="mr-2">{blog.categoryIcon}</span>
                  {blog.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-8 leading-relaxed">
                {blog.description}
              </motion.p>

              {/* Author Info */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center text-gray-900 font-medium">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      {blog.author}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {blog.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {blog.readTime}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1.5" />
                      {blog.views.toLocaleString()} views
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Featured Image */}
              <motion.div
                variants={fadeInUp}
                className="mb-12 rounded-2xl overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Article Content */}
              <motion.div
                variants={fadeInUp}
                className="prose prose-lg prose-gray max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
                  prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10
                  prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-orange-500 prose-a:no-underline hover:prose-a:text-orange-600
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-code:text-orange-500 prose-code:bg-orange-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-gray-900 prose-pre:text-gray-100
                  prose-img:rounded-xl prose-img:shadow-lg
                  prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
                  prose-ul:my-6 prose-ol:my-6
                  prose-li:text-gray-700 prose-li:my-2"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Article Footer */}
              <motion.footer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={() => setIsLiked(!isLiked)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                        isLiked
                          ? "bg-red-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}>
                      <Heart
                        className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                      />
                      {isLiked ? "Liked" : "Like"}
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-all">
                      <MessageCircle className="w-5 h-5" />
                      Comment
                    </motion.button>
                  </div>

                  <Link href="/blog">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
                      More Articles
                    </motion.button>
                  </Link>
                </div>
              </motion.footer>
            </motion.article>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
