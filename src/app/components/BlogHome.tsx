// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import {
//   Calendar,
//   User,
//   Clock,
//   BookOpen,
//   ArrowRight,
//   Sparkles,
//   TrendingUp,
//   ChevronRight,
//   Eye,
//   Heart,
// } from "lucide-react";
// import Link from "next/link";
// import { getRecentBlogs } from "@/lib/blogData";

// const BlogHome = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set());
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   // Get the most recent 3 blog posts
//   const blogPosts = getRecentBlogs(3);

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Animate cards on scroll
//   useEffect(() => {
//     if (isVisible) {
//       blogPosts.forEach((_, index) => {
//         setTimeout(() => {
//           setAnimatedCards((prev) => new Set(prev).add(index));
//         }, index * 200);
//       });
//     }
//   }, [isVisible, blogPosts]);

//   return (
//     <section
//       ref={sectionRef}
//       id="blog"
//       className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
//       {/* Background Animated Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-bl from-blue-200/20 to-purple-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-cyan-200/15 to-indigo-200/10 rounded-full blur-3xl animate-pulse"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header Section */}
//         <div
//           className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             <span className="">Latest </span>
//             <span
//               className={` bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform transition-all duration-700 delay-400 ${
//                 isVisible
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-5 opacity-0"
//               }`}>
//               Insights
//             </span>
//           </h2>

//           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Stay updated with the latest trends, tutorials, and insights from
//             our expert developers and designers.
//           </p>
//         </div>

//         {/* Blog Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 sm:mb-16">
//           {blogPosts.map((post, index) => (
//             <Link
//               key={post.id}
//               href={`/blog/${post.id}`}
//               className={`group block transform transition-all duration-500 hover:-translate-y-3 ${
//                 animatedCards.has(index)
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-10 opacity-0"
//               }`}
//               style={{
//                 transitionDelay: `${800 + index * 200}ms`,
//               }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}>
//               <article className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 hover:border-blue-200/50 h-full flex flex-col">
//                 {/* Blog Image */}
//                 <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />

//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4">
//                     <div
//                       className={`flex items-center bg-gradient-to-r ${post.categoryColor} text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg`}>
//                       <span className="mr-1">{post.categoryIcon}</span>
//                       {post.category}
//                     </div>
//                   </div>

//                   {/* Trending Badge */}
//                   {post.trending && (
//                     <div className="absolute top-4 right-4">
//                       <div className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
//                         <TrendingUp className="w-3 h-3 mr-1" />
//                         Trending
//                       </div>
//                     </div>
//                   )}

//                   {/* Floating Particles */}
//                   {hoveredCard === index && (
//                     <div className="absolute inset-0 pointer-events-none">
//                       <div className="absolute top-8 right-12 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
//                       <div className="absolute top-16 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-300"></div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Blog Content */}
//                 <div className="p-6 flex-1 flex flex-col">
//                   <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
//                     {post.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
//                     {post.description}
//                   </p>

//                   {/* Meta Info */}
//                   <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                     <div className="flex items-center space-x-3">
//                       <div className="flex items-center">
//                         <User className="w-4 h-4 mr-1" />
//                         <span>{post.author}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <Calendar className="w-4 h-4 mr-1" />
//                         <span>{post.date}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="w-4 h-4 mr-1" />
//                       <span>{post.readTime}</span>
//                     </div>
//                   </div>

//                   {/* Stats and CTA */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3 text-sm text-gray-500">
//                       <div className="flex items-center">
//                         <Eye className="w-4 h-4 mr-1" />
//                         <span>{post.views.toLocaleString()}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <Heart className="w-4 h-4 mr-1" />
//                         <span>{post.likes}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center text-blue-600 font-semibold">
//                       <span className="mr-2">Read More</span>
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             </Link>
//           ))}
//         </div>

//         {/* Enhanced CTA Section */}
//         <div
//           className={`text-center transform transition-all duration-1000 delay-1000 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}>
//           <div className="relative inline-block group">
//             <Link
//               href="/blog"
//               className="relative bg-white text-orange-500 border-2 border-orange-500 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
//               <span className="relative z-10 flex items-center justify-center">
//                 Explore All Articles
//                 <svg
//                   className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7l5 5m0 0l-5 5m5-5H6"
//                   />
//                 </svg>
//               </span>

//               {/* Button shine effect */}
//               <div className="absolute inset-0 -left-full group-hover:left-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-700 ease-out"></div>
//             </Link>

//             {/* Floating Elements around CTA */}
//             <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-bounce delay-300 group-hover:animate-ping"></div>
//             <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce delay-700 group-hover:animate-ping"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogHome;

"use client";

import React from "react";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  TrendingUp,
  Eye,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { getRecentBlogs } from "@/lib/blogData";

const BlogHome = () => {
  // Get the most recent 3 blog posts
  const blogPosts = getRecentBlogs(3);

  return (
    <section
      id="blog"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-bl from-blue-200/20 to-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-cyan-200/15 to-indigo-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span>Latest </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tutorials, and insights from
            our expert developers and designers.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 sm:mb-16">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block transition-all duration-300 hover:-translate-y-2">
              <article className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100/50 hover:border-blue-200/50 h-full flex flex-col">
                {/* Blog Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`flex items-center bg-gradient-to-r ${post.categoryColor} text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg`}>
                      <span className="mr-1">{post.categoryIcon}</span>
                      {post.category}
                    </div>
                  </div>

                  {/* Trending Badge */}
                  {post.trending && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </div>
                    </div>
                  )}
                </div>

                {/* Blog Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {post.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Stats and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold">
                      <span className="mr-2">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-10 sm:pt-3">
          <div className="relative inline-block group">
            <Link
              href="/blog"
              className="relative bg-white text-orange-500 border-2 border-orange-500 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:bg-orange-500 hover:text-orange-900 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Explore All Articles
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
