export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  description: string;
  category: string;
  categoryColor: string;
  categoryIcon: string;
  readTime: string;
  views: number;
  likes: number;
  trending: boolean;
  featured: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    author: "Aman Verma",
    date: "Oct 5, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description: "Discover the key trends shaping web development in 2025, from AI-driven tools to advanced frameworks.",
    category: "Web Development",
    categoryColor: "from-blue-500 to-cyan-500",
    categoryIcon: "💻",
    trending: true,
    featured: true,
    views: 2450,
    likes: 189,
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-900">The Evolution of Web Development</h2>
      <p class="mb-6 text-gray-700 leading-relaxed">Web development has undergone massive changes in recent years, and 2025 promises to be a pivotal year for developers worldwide. From AI-powered development tools to revolutionary frameworks, the landscape is shifting rapidly.</p>
      
      <h3 class="text-xl font-bold mb-3 text-gray-900">AI-Driven Development Tools</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">Artificial Intelligence is no longer just a buzzword in web development. Tools like GitHub Copilot, ChatGPT, and specialized AI coding assistants are becoming integral parts of developers' workflows. These tools can:</p>
      <ul class="mb-6 ml-6 text-gray-700">
        <li class="mb-2">• Generate code snippets and complete functions</li>
        <li class="mb-2">• Debug complex issues automatically</li>
        <li class="mb-2">• Optimize performance bottlenecks</li>
        <li class="mb-2">• Create comprehensive documentation</li>
      </ul>

      <h3 class="text-xl font-bold mb-3 text-gray-900">Modern Framework Evolution</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">Frameworks like Next.js, Nuxt.js, and SvelteKit are pushing the boundaries of what's possible with server-side rendering, static site generation, and hybrid approaches. The focus is increasingly on:</p>
      <ul class="mb-6 ml-6 text-gray-700">
        <li class="mb-2">• Performance optimization</li>
        <li class="mb-2">• Developer experience</li>
        <li class="mb-2">• SEO-friendly solutions</li>
        <li class="mb-2">• Edge computing integration</li>
      </ul>

      <h3 class="text-xl font-bold mb-3 text-gray-900">The Rise of Web3 and Blockchain Integration</h3>
      <p class="mb-6 text-gray-700 leading-relaxed">While still emerging, Web3 technologies are beginning to influence traditional web development. Developers are learning to integrate blockchain functionality, cryptocurrency payments, and decentralized storage solutions.</p>

      <h3 class="text-xl font-bold mb-3 text-gray-900">Conclusion</h3>
      <p class="mb-6 text-gray-700 leading-relaxed">The future of web development is bright and full of exciting opportunities. Developers who stay current with these trends and continuously adapt their skills will be well-positioned for success in 2025 and beyond.</p>
    `
  },
  {
    id: 2,
    title: "Mastering React Hooks for Modern Apps",
    author: "Sara Khan",
    date: "Oct 3, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    description: "Learn advanced React Hooks patterns and build more efficient, maintainable components.",
    category: "React",
    categoryColor: "from-cyan-500 to-blue-500",
    categoryIcon: "⚛️",
    trending: false,
    featured: false,
    views: 1850,
    likes: 156,
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-900">Why React Hooks?</h2>
      <p class="mb-6 text-gray-700 leading-relaxed">React Hooks have revolutionized how we write React components. They provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.</p>
      
      <h3 class="text-xl font-bold mb-3 text-gray-900">Key Benefits</h3>
      <ul class="mb-6 ml-6 text-gray-700">
        <li class="mb-2">• Reuse stateful logic between components</li>
        <li class="mb-2">• Split components based on related functionality</li>
        <li class="mb-2">• Use state and other React features without classes</li>
        <li class="mb-2">• Easier testing and debugging</li>
      </ul>

      <h3 class="text-xl font-bold mb-3 text-gray-900">Advanced Hook Patterns</h3>
      <p class="mb-6 text-gray-700 leading-relaxed">Learn about custom hooks, useCallback optimization, and advanced patterns that will make your React code more efficient and maintainable.</p>
    `
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Large Projects",
    author: "Rohit Mehta",
    date: "Sep 28, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    description: "Essential TypeScript patterns and practices for building scalable, maintainable applications.",
    category: "TypeScript",
    categoryColor: "from-blue-600 to-indigo-600",
    categoryIcon: "🔷",
    trending: true,
    featured: true,
    views: 3200,
    likes: 245,
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-900">The Power of TypeScript in Large Projects</h2>
      <p class="mb-6 text-gray-700 leading-relaxed">TypeScript brings static typing to JavaScript, making large-scale application development more robust and maintainable. Here's how it transforms your development experience.</p>
      
      <h3 class="text-xl font-bold mb-3 text-gray-900">Type Safety Benefits</h3>
      <ul class="mb-6 ml-6 text-gray-700">
        <li class="mb-2">• Catch errors at compile time</li>
        <li class="mb-2">• Better IntelliSense and autocomplete</li>
        <li class="mb-2">• Improved refactoring capabilities</li>
        <li class="mb-2">• Enhanced team collaboration</li>
      </ul>

      <h3 class="text-xl font-bold mb-3 text-gray-900">Best Practices</h3>
      <p class="mb-6 text-gray-700 leading-relaxed">Learn essential patterns for interfaces, generics, and advanced type manipulation techniques that will make your TypeScript code more maintainable.</p>
    `
  },
  {
    id: 4,
    title: "Building Scalable Apps with Next.js 15",
    author: "Priya Nair",
    date: "Sep 25, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    description: "Next.js 15 takes scalability to the next level. Explore its new features for performance and server-side rendering efficiency.",
    category: "Next.js",
    categoryColor: "from-black to-gray-700",
    categoryIcon: "▲",
    trending: false,
    featured: false,
    views: 2890,
    likes: 198,
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-900">Next.js 15: The Future of React Development</h2>
      <p class="mb-6 text-gray-700 leading-relaxed">Next.js 15 introduces groundbreaking features that make building scalable React applications easier than ever before.</p>
      
      <h3 class="text-xl font-bold mb-3 text-gray-900">New Features</h3>
      <ul class="mb-6 ml-6 text-gray-700">
        <li class="mb-2">• Enhanced App Router performance</li>
        <li class="mb-2">• Improved Server Components</li>
        <li class="mb-2">• Better static generation</li>
        <li class="mb-2">• Advanced caching strategies</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "UX Design Trends Dominating 2025",
    author: "Ankit Sharma",
    date: "Sep 20, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    description: "From microinteractions to AI-powered personalization — discover the hottest UX design trends defining 2025.",
    category: "UX Design",
    categoryColor: "from-green-500 to-emerald-500",
    categoryIcon: "✨",
    trending: false,
    featured: false,
    views: 1990,
    likes: 167,
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-900">UX Design Evolution in 2025</h2>
      <p class="mb-6 text-gray-700 leading-relaxed">User experience design continues to evolve with new trends that prioritize accessibility, personalization, and innovative interactions.</p>
      
      <h3 class="text-xl font-bold mb-3 text-gray-900">Key Trends</h3>
      <ul class="mb-6 ml-6 text-gray-700">
        <li class="mb-2">• AI-powered personalization</li>
        <li class="mb-2">• Microinteractions and animations</li>
        <li class="mb-2">• Voice user interfaces</li>
        <li class="mb-2">• Inclusive design practices</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "AI in Software Engineering — Beyond Automation",
    author: "Neha Patel",
    date: "Sep 15, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1526378722431-3bdc7b1cbfbb?auto=format&fit=crop&w=800&q=80",
    description: "AI isn't just automating tasks — it's reshaping how software is written, tested, and optimized. Here's what developers should know.",
    category: "AI & Tech",
    categoryColor: "from-red-500 to-pink-500",
    categoryIcon: "🤖",
    trending: true,
    featured: true,
    views: 4100,
    likes: 312,
    content: `
      <h2 class="text-2xl font-bold mb-4 text-gray-900">AI Revolution in Software Engineering</h2>
      <p class="mb-6 text-gray-700 leading-relaxed">Artificial Intelligence is transforming every aspect of software engineering, from code generation to testing and deployment.</p>
      
      <h3 class="text-xl font-bold mb-3 text-gray-900">AI Applications</h3>
      <ul class="mb-6 ml-6 text-gray-700">
        <li class="mb-2">• Automated code generation and completion</li>
        <li class="mb-2">• Intelligent bug detection and fixing</li>
        <li class="mb-2">• Performance optimization recommendations</li>
        <li class="mb-2">• Automated testing and quality assurance</li>
      </ul>
    `
  }
];

// Controller Functions
export const getBlogPost = (id: string | number): BlogPost | undefined => {
  return blogPosts.find(blog => blog.id === parseInt(id.toString()));
};

export const getFeaturedBlogs = (): BlogPost[] => {
  return blogPosts.filter(blog => blog.featured);
};

export const getTrendingBlogs = (): BlogPost[] => {
  return blogPosts.filter(blog => blog.trending);
};

export const getBlogsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return blogPosts;
  return blogPosts.filter(blog => blog.category === category);
};

export const searchBlogs = (query: string): BlogPost[] => {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(blog =>
    blog.title.toLowerCase().includes(lowerQuery) ||
    blog.category.toLowerCase().includes(lowerQuery) ||
    blog.author.toLowerCase().includes(lowerQuery) ||
    blog.description.toLowerCase().includes(lowerQuery)
  );
};

export const getRecentBlogs = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};
