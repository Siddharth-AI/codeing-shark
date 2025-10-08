export interface CourseModule {
  id: number;
  title: string;
  duration: string;
  lessons: number;
  completed?: boolean;
}

export interface CourseInstructor {
  id: number;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  students: number;
  bio: string;
}

export interface CourseReview {
  id: number;
  studentName: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  instructor: CourseInstructor;
  price: {
    current: number;
    original?: number;
    discount?: number;
  };
  rating: number;
  studentsCount: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  categoryColor: string;
  categoryIcon: string;
  image: string;
  tags: string[];
  featured: boolean;
  bestseller: boolean;
  newCourse: boolean;
  language: string;
  lastUpdated: string;
  certificate: boolean;
  lifetimeAccess: boolean;
  modules: CourseModule[];
  reviews: CourseReview[];
  whatYouLearn: string[];
  prerequisites: string[];
  curriculum: {
    totalLessons: number;
    totalDuration: string;
    sections: {
      id: number;
      title: string;
      lessons: {
        id: number;
        title: string;
        duration: string;
        type: 'video' | 'quiz' | 'assignment';
        preview?: boolean;
      }[];
    }[];
  };
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Complete React.js Mastery Course",
    subtitle: "Build Modern Web Applications with React, Hooks, Context API & More",
    description: "Master React.js from scratch and build amazing web applications. Learn hooks, context API, routing, state management, and deploy production-ready apps.",
    instructor: {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior React Developer at Google",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b48c?w=150",
      rating: 4.9,
      students: 45230,
      bio: "Sarah is a Senior React Developer at Google with 8+ years of experience building large-scale web applications."
    },
    price: {
      current: 89,
      original: 199,
      discount: 55
    },
    rating: 4.8,
    studentsCount: 12450,
    duration: "42 hours",
    level: "Intermediate",
    category: "Web Development",
    categoryColor: "from-blue-500 to-cyan-500",
    categoryIcon: "💻",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "JavaScript", "Hooks", "Context API", "Frontend"],
    featured: true,
    bestseller: true,
    newCourse: false,
    language: "English",
    lastUpdated: "October 2025",
    certificate: true,
    lifetimeAccess: true,
    modules: [
      { id: 1, title: "React Fundamentals", duration: "8 hours", lessons: 15 },
      { id: 2, title: "Advanced React Patterns", duration: "12 hours", lessons: 20 },
      { id: 3, title: "State Management", duration: "10 hours", lessons: 18 },
      { id: 4, title: "Real-world Projects", duration: "12 hours", lessons: 12 }
    ],
    reviews: [
      {
        id: 1,
        studentName: "Alex Chen",
        rating: 5,
        comment: "Excellent course! Sarah explains complex concepts very clearly.",
        date: "2 days ago",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50"
      },
      {
        id: 2,
        studentName: "Maria Rodriguez",
        rating: 5,
        comment: "Best React course I've taken. Practical examples and great projects.",
        date: "1 week ago",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50"
      }
    ],
    whatYouLearn: [
      "Build modern React applications from scratch",
      "Master React Hooks and functional components",
      "Implement state management with Context API and Redux",
      "Create responsive and interactive user interfaces",
      "Deploy React apps to production",
      "Understand advanced React patterns and best practices"
    ],
    prerequisites: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with ES6+ features",
      "Understanding of web development concepts"
    ],
    curriculum: {
      totalLessons: 65,
      totalDuration: "42 hours",
      sections: [
        {
          id: 1,
          title: "Introduction & Setup",
          lessons: [
            { id: 1, title: "Course Introduction", duration: "5:30", type: "video", preview: true },
            { id: 2, title: "Development Environment Setup", duration: "10:15", type: "video", preview: true },
            { id: 3, title: "Your First React App", duration: "15:20", type: "video" }
          ]
        },
        {
          id: 2,
          title: "React Fundamentals",
          lessons: [
            { id: 4, title: "Components and JSX", duration: "12:45", type: "video" },
            { id: 5, title: "Props and State", duration: "18:30", type: "video" },
            { id: 6, title: "Event Handling", duration: "14:20", type: "video" },
            { id: 7, title: "Practice Quiz", duration: "10:00", type: "quiz" }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "Next.js Full-Stack Development",
    subtitle: "Build Production-Ready Applications with Next.js 15",
    description: "Learn Next.js from beginner to advanced level. Build full-stack applications with server-side rendering, API routes, and modern deployment strategies.",
    instructor: {
      id: 2,
      name: "Mike Chen",
      title: "Full-Stack Developer at Vercel",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      rating: 4.9,
      students: 32180,
      bio: "Mike is a Full-Stack Developer at Vercel with expertise in Next.js and modern web technologies."
    },
    price: {
      current: 129,
      original: 299,
      discount: 57
    },
    rating: 4.9,
    studentsCount: 8920,
    duration: "56 hours",
    level: "Advanced",
    category: "Full-Stack",
    categoryColor: "from-black to-gray-700",
    categoryIcon: "🚀",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "React", "Node.js", "Full-Stack", "SSR"],
    featured: true,
    bestseller: false,
    newCourse: true,
    language: "English",
    lastUpdated: "September 2025",
    certificate: true,
    lifetimeAccess: true,
    modules: [
      { id: 1, title: "Next.js Fundamentals", duration: "14 hours", lessons: 22 },
      { id: 2, title: "Server-Side Rendering", duration: "12 hours", lessons: 18 },
      { id: 3, title: "API Development", duration: "16 hours", lessons: 25 },
      { id: 4, title: "Deployment & Optimization", duration: "14 hours", lessons: 20 }
    ],
    reviews: [
      {
        id: 3,
        studentName: "David Kim",
        rating: 5,
        comment: "Incredibly comprehensive course. Mike's teaching style is perfect!",
        date: "3 days ago",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50"
      }
    ],
    whatYouLearn: [
      "Master Next.js 15 features and capabilities",
      "Build full-stack applications with API routes",
      "Implement server-side rendering and static generation",
      "Deploy applications to Vercel and other platforms",
      "Optimize performance and SEO",
      "Work with databases and authentication"
    ],
    prerequisites: [
      "Solid understanding of React.js",
      "JavaScript ES6+ knowledge",
      "Basic understanding of Node.js",
      "Familiarity with web APIs"
    ],
    curriculum: {
      totalLessons: 85,
      totalDuration: "56 hours",
      sections: [
        {
          id: 1,
          title: "Getting Started with Next.js",
          lessons: [
            { id: 1, title: "What is Next.js?", duration: "8:45", type: "video", preview: true },
            { id: 2, title: "Project Setup", duration: "12:30", type: "video", preview: true }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Python for Data Science",
    subtitle: "Complete Guide to Data Analysis and Machine Learning",
    description: "Learn Python programming for data science. Master pandas, numpy, matplotlib, scikit-learn and build real-world data science projects.",
    instructor: {
      id: 3,
      name: "Dr. Lisa Wang",
      title: "Data Scientist at Tesla",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
      rating: 4.8,
      students: 28750,
      bio: "Dr. Lisa Wang is a Senior Data Scientist at Tesla with a PhD in Computer Science and 10+ years in data science."
    },
    price: {
      current: 79,
      original: 179,
      discount: 56
    },
    rating: 4.7,
    studentsCount: 15680,
    duration: "38 hours",
    level: "Beginner",
    category: "Data Science",
    categoryColor: "from-green-500 to-emerald-500",
    categoryIcon: "📊",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Data Science", "Machine Learning", "Pandas", "NumPy"],
    featured: false,
    bestseller: true,
    newCourse: false,
    language: "English",
    lastUpdated: "August 2025",
    certificate: true,
    lifetimeAccess: true,
    modules: [
      { id: 1, title: "Python Basics", duration: "10 hours", lessons: 18 },
      { id: 2, title: "Data Analysis with Pandas", duration: "12 hours", lessons: 20 },
      { id: 3, title: "Data Visualization", duration: "8 hours", lessons: 15 },
      { id: 4, title: "Machine Learning", duration: "8 hours", lessons: 12 }
    ],
    reviews: [],
    whatYouLearn: [
      "Master Python programming fundamentals",
      "Analyze data with pandas and numpy",
      "Create stunning visualizations",
      "Build machine learning models",
      "Work with real-world datasets",
      "Deploy data science projects"
    ],
    prerequisites: [
      "No programming experience required",
      "Basic computer skills",
      "Willingness to learn"
    ],
    curriculum: {
      totalLessons: 65,
      totalDuration: "38 hours",
      sections: [
        {
          id: 1,
          title: "Python Fundamentals",
          lessons: [
            { id: 1, title: "Introduction to Python", duration: "10:30", type: "video", preview: true }
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass",
    subtitle: "Create Beautiful and User-Friendly Interfaces",
    description: "Master UI/UX design principles, tools, and techniques. Learn Figma, user research, prototyping, and create stunning digital experiences.",
    instructor: {
      id: 4,
      name: "Emma Thompson",
      title: "Design Lead at Adobe",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
      rating: 4.9,
      students: 22340,
      bio: "Emma is a Design Lead at Adobe with 12+ years of experience in UI/UX design and product strategy."
    },
    price: {
      current: 99,
      original: 229,
      discount: 57
    },
    rating: 4.8,
    studentsCount: 9840,
    duration: "32 hours",
    level: "Intermediate",
    category: "Design",
    categoryColor: "from-pink-500 to-rose-500",
    categoryIcon: "🎨",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    tags: ["UI/UX", "Figma", "Design Systems", "Prototyping", "User Research"],
    featured: false,
    bestseller: false,
    newCourse: true,
    language: "English",
    lastUpdated: "October 2025",
    certificate: true,
    lifetimeAccess: true,
    modules: [
      { id: 1, title: "Design Fundamentals", duration: "8 hours", lessons: 16 },
      { id: 2, title: "User Research", duration: "6 hours", lessons: 12 },
      { id: 3, title: "Figma Mastery", duration: "10 hours", lessons: 18 },
      { id: 4, title: "Portfolio Building", duration: "8 hours", lessons: 14 }
    ],
    reviews: [],
    whatYouLearn: [
      "Master UI/UX design principles",
      "Create professional designs in Figma",
      "Conduct user research and testing",
      "Build design systems and components",
      "Prototype interactive experiences",
      "Present designs to stakeholders"
    ],
    prerequisites: [
      "Basic computer skills",
      "Interest in design",
      "No prior design experience needed"
    ],
    curriculum: {
      totalLessons: 60,
      totalDuration: "32 hours",
      sections: [
        {
          id: 1,
          title: "Introduction to UI/UX",
          lessons: [
            { id: 1, title: "What is UI/UX Design?", duration: "12:15", type: "video", preview: true }
          ]
        }
      ]
    }
  }
];

// Controller Functions
export const getCourse = (id: string | number): Course | undefined => {
  if (!id) return undefined;
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
  if (isNaN(numericId)) return undefined;
  return courses.find(course => course.id === numericId);
};

export const getFeaturedCourses = (): Course[] => {
  return courses.filter(course => course.featured);
};

export const getBestsellerCourses = (): Course[] => {
  return courses.filter(course => course.bestseller);
};

export const getNewCourses = (): Course[] => {
  return courses.filter(course => course.newCourse);
};

export const getCoursesByCategory = (category: string): Course[] => {
  if (category === "All") return courses;
  return courses.filter(course => course.category === category);
};

export const searchCourses = (query: string): Course[] => {
  const lowerQuery = query.toLowerCase();
  return courses.filter(course =>
    course.title.toLowerCase().includes(lowerQuery) ||
    course.category.toLowerCase().includes(lowerQuery) ||
    course.instructor.name.toLowerCase().includes(lowerQuery) ||
    course.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export const getPopularCourses = (limit: number = 3): Course[] => {
  return courses
    .sort((a, b) => b.studentsCount - a.studentsCount)
    .slice(0, limit);
};

export const getCoursesByLevel = (level: string): Course[] => {
  return courses.filter(course => course.level === level);
};
