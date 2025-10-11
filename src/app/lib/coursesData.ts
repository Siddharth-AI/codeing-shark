// coursesData.ts

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
    studentsCount: 1000,
    duration: "42 hours",
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
    studentsCount: 900,
    duration: "56 hours",
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
    title: "UI/UX Design Masterclass",
    subtitle: "Create Beautiful and User-Friendly Interfaces",
    description: "Master UI/UX design principles, tools, and techniques. Learn Figma, user research, prototyping, and create stunning digital experiences.",
    instructor: {
      id: 3,
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
    studentsCount: 700,
    duration: "32 hours",
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
  },
  // NEW COURSE 1: Python Programming
  {
    id: 4,
    title: "Fundamentals of Programming using Python",
    subtitle: "Build Your Career Using Python - Complete 6-Week Bootcamp",
    description: "Master Python programming from scratch with this comprehensive course. Learn data types, control statements, OOP concepts, data structures, and build real-world projects with hands-on lab sessions.",
    instructor: {
      id: 4,
      name: "Dr. Rajesh Kumar",
      title: "Senior Python Developer & Instructor",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150",
      rating: 4.9,
      students: 18500,
      bio: "Dr. Rajesh Kumar is a Senior Python Developer with 12+ years of experience in software development and teaching programming fundamentals."
    },
    price: {
      current: 69,
      original: 149,
      discount: 54
    },
    rating: 4.8,
    studentsCount: 1500,
    duration: "48 hours",
    category: "Programming",
    categoryColor: "from-yellow-500 to-orange-500",
    categoryIcon: "🐍",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Programming", "OOP", "Data Structures", "Beginner-Friendly"],
    featured: true,
    bestseller: true,
    newCourse: true,
    language: "English",
    lastUpdated: "October 2025",
    certificate: true,
    lifetimeAccess: true,
    modules: [
      { id: 1, title: "Python Fundamentals & Data Types", duration: "12 hours", lessons: 20 },
      { id: 2, title: "Control Statements & Functions", duration: "10 hours", lessons: 18 },
      { id: 3, title: "Data Structures in Python", duration: "14 hours", lessons: 22 },
      { id: 4, title: "Object-Oriented Programming", duration: "12 hours", lessons: 16 }
    ],
    reviews: [
      {
        id: 4,
        studentName: "Priya Sharma",
        rating: 5,
        comment: "Perfect course for beginners! Dr. Kumar explains everything clearly with practical examples.",
        date: "1 week ago",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50"
      },
      {
        id: 5,
        studentName: "Amit Patel",
        rating: 5,
        comment: "Excellent hands-on approach. The projects helped me understand Python deeply.",
        date: "2 weeks ago",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50"
      }
    ],
    whatYouLearn: [
      "Master Python data types and operations (Numbers, Strings, Floats)",
      "Implement decision-making with control statements and loops",
      "Work with Python data structures (Lists, Tuples, Sets, Dictionaries)",
      "Build applications using functions and lambda expressions",
      "Understand Object-Oriented Programming concepts (Classes, Inheritance)",
      "Handle exceptions and work with file operations",
      "Create and use modules & packages effectively",
      "Build two complete real-world projects"
    ],
    prerequisites: [
      "Basic computer knowledge",
      "No prior programming experience required",
      "Enthusiasm to learn coding"
    ],
    curriculum: {
      totalLessons: 76,
      totalDuration: "48 hours",
      sections: [
        {
          id: 1,
          title: "Getting Started with Python",
          lessons: [
            { id: 1, title: "Introduction to Python Programming", duration: "8:30", type: "video", preview: true },
            { id: 2, title: "Installing Python & Setting Up IDE", duration: "12:45", type: "video", preview: true },
            { id: 3, title: "Your First Python Program", duration: "10:20", type: "video", preview: true }
          ]
        },
        {
          id: 2,
          title: "Data Types & Operations",
          lessons: [
            { id: 4, title: "Data Types in Python", duration: "15:30", type: "video" },
            { id: 5, title: "Numbers & Floating Point Operations", duration: "18:20", type: "video" },
            { id: 6, title: "Working with Strings", duration: "22:40", type: "video" },
            { id: 7, title: "Data Types Quiz", duration: "15:00", type: "quiz" }
          ]
        },
        {
          id: 3,
          title: "Control Flow",
          lessons: [
            { id: 8, title: "Decision Making in Python", duration: "16:45", type: "video" },
            { id: 9, title: "Loops and Iterations", duration: "20:30", type: "video" },
            { id: 10, title: "Control Statements Practice", duration: "25:00", type: "assignment" }
          ]
        },
        {
          id: 4,
          title: "Functions & Advanced Concepts",
          lessons: [
            { id: 11, title: "Functions in Python", duration: "18:50", type: "video" },
            { id: 12, title: "Lambda Expressions", duration: "14:30", type: "video" },
            { id: 13, title: "Scopes and Namespaces", duration: "16:20", type: "video" }
          ]
        },
        {
          id: 5,
          title: "Data Structures",
          lessons: [
            { id: 14, title: "Lists and List Operations", duration: "22:45", type: "video" },
            { id: 15, title: "Tuples in Python", duration: "15:30", type: "video" },
            { id: 16, title: "Sets and Set Operations", duration: "18:20", type: "video" },
            { id: 17, title: "Dictionaries Deep Dive", duration: "24:40", type: "video" },
            { id: 18, title: "Data Structures Quiz", duration: "20:00", type: "quiz" }
          ]
        },
        {
          id: 6,
          title: "File Handling & Exception Management",
          lessons: [
            { id: 19, title: "Exception Handling in Python", duration: "19:30", type: "video" },
            { id: 20, title: "File Handling Operations", duration: "21:45", type: "video" },
            { id: 21, title: "Working with Different File Types", duration: "17:20", type: "video" }
          ]
        },
        {
          id: 7,
          title: "Modules & Packages",
          lessons: [
            { id: 22, title: "Creating and Using Modules", duration: "16:40", type: "video" },
            { id: 23, title: "Python Packages", duration: "18:50", type: "video" },
            { id: 24, title: "Project 01: Building a Console Application", duration: "45:00", type: "assignment" }
          ]
        },
        {
          id: 8,
          title: "Object-Oriented Programming",
          lessons: [
            { id: 25, title: "Objects and Classes", duration: "20:30", type: "video" },
            { id: 26, title: "Class Attributes and Methods", duration: "22:15", type: "video" },
            { id: 27, title: "Inheritance in Python", duration: "24:45", type: "video" },
            { id: 28, title: "Iterators and Generators", duration: "19:30", type: "video" },
            { id: 29, title: "OOP Concepts Quiz", duration: "18:00", type: "quiz" },
            { id: 30, title: "Project 02: Object-Oriented Application", duration: "60:00", type: "assignment" }
          ]
        }
      ]
    }
  },
  // NEW COURSE 2: Data Science (AI, ML, DL)
  {
    id: 5,
    title: "Complete Data Science, AI, ML & Deep Learning",
    subtitle: "Master Data Analytics, Machine Learning & Deep Learning with Python",
    description: "Comprehensive guide to becoming a Data Scientist. Learn data analytics, advanced machine learning, and deep learning with Python. Build real-world AI projects using popular libraries like Pandas, NumPy, TensorFlow, and scikit-learn.",
    instructor: {
      id: 5,
      name: "Dr. Ananya Reddy",
      title: "AI Research Scientist & ML Expert",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      rating: 4.9,
      students: 35600,
      bio: "Dr. Ananya Reddy is an AI Research Scientist with a PhD in Machine Learning and 15+ years of experience in data science and AI development."
    },
    price: {
      current: 149,
      original: 349,
      discount: 57
    },
    rating: 4.9,
    studentsCount: 2500,
    duration: "120 hours",
    category: "Data Science",
    categoryColor: "from-purple-500 to-indigo-600",
    categoryIcon: "🤖",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["Data Science", "Machine Learning", "Deep Learning", "AI", "Python", "TensorFlow", "Neural Networks"],
    featured: true,
    bestseller: true,
    newCourse: true,
    language: "English",
    lastUpdated: "October 2025",
    certificate: true,
    lifetimeAccess: true,
    modules: [
      { id: 1, title: "Data Analytics with Python", duration: "30 hours", lessons: 35 },
      { id: 2, title: "Advanced Machine Learning", duration: "40 hours", lessons: 45 },
      { id: 3, title: "Deep Learning & Neural Networks", duration: "35 hours", lessons: 38 },
      { id: 4, title: "Real-World AI Projects", duration: "15 hours", lessons: 12 }
    ],
    reviews: [
      {
        id: 6,
        studentName: "Rahul Verma",
        rating: 5,
        comment: "This is the most comprehensive ML course I've ever taken. Dr. Reddy's expertise shines through!",
        date: "3 days ago",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50"
      },
      {
        id: 7,
        studentName: "Sneha Gupta",
        rating: 5,
        comment: "Amazing course! The projects are industry-relevant and helped me land a data science job.",
        date: "1 week ago",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50"
      },
      {
        id: 8,
        studentName: "Vikram Singh",
        rating: 5,
        comment: "Deep learning section is exceptional. Clear explanations of complex neural network concepts.",
        date: "2 weeks ago",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50"
      }
    ],
    whatYouLearn: [
      "Master data analytics with Pandas, NumPy, and SciPy",
      "Perform statistical analysis and data visualization",
      "Build machine learning models (supervised & unsupervised)",
      "Implement advanced ML algorithms (SVM, Random Forests, Ensembles)",
      "Create deep learning models with TensorFlow and Keras",
      "Work with CNNs, RNNs, LSTMs, and Transformers",
      "Understand reinforcement learning and GANs",
      "Deploy AI models in production environments",
      "Work with image, text, and numerical data",
      "Build 3+ industry-level AI projects"
    ],
    prerequisites: [
      "Basics of Python programming",
      "Understanding of mathematics (linear algebra, calculus)",
      "Basic statistics knowledge helpful but not required"
    ],
    curriculum: {
      totalLessons: 130,
      totalDuration: "120 hours",
      sections: [
        {
          id: 1,
          title: "Data Analytics Fundamentals",
          lessons: [
            { id: 1, title: "Introduction to Data Science", duration: "12:30", type: "video", preview: true },
            { id: 2, title: "Setting Up Python Environment", duration: "15:20", type: "video", preview: true },
            { id: 3, title: "Overview of Data Science Libraries", duration: "18:40", type: "video", preview: true }
          ]
        },
        {
          id: 2,
          title: "Working with Numerical Data",
          lessons: [
            { id: 4, title: "Introduction to Pandas", duration: "20:45", type: "video" },
            { id: 5, title: "Data Loading and Inspection", duration: "22:30", type: "video" },
            { id: 6, title: "Data Assessment Techniques", duration: "19:50", type: "video" },
            { id: 7, title: "Data Cleansing Methods", duration: "24:15", type: "video" },
            { id: 8, title: "Data Transformation", duration: "21:40", type: "video" },
            { id: 9, title: "Statistical Analysis with Pandas", duration: "26:30", type: "video" }
          ]
        },
        {
          id: 3,
          title: "NumPy & Scientific Computing",
          lessons: [
            { id: 10, title: "N-dimensional Arrays with NumPy", duration: "23:20", type: "video" },
            { id: 11, title: "Matrix Operations", duration: "25:45", type: "video" },
            { id: 12, title: "Introduction to SciPy", duration: "18:30", type: "video" },
            { id: 13, title: "Distance Measures & Similarity", duration: "20:15", type: "video" }
          ]
        },
        {
          id: 4,
          title: "Data Visualization",
          lessons: [
            { id: 14, title: "Data Visualization Principles", duration: "16:40", type: "video" },
            { id: 15, title: "Matplotlib for Plotting", duration: "22:50", type: "video" },
            { id: 16, title: "Advanced Visualizations with Seaborn", duration: "24:30", type: "video" },
            { id: 17, title: "Interactive Dashboards", duration: "20:00", type: "video" }
          ]
        },
        {
          id: 5,
          title: "Working with Different Data Types",
          lessons: [
            { id: 18, title: "Working with Categorical Data", duration: "19:45", type: "video" },
            { id: 19, title: "Data Parsing: JSON & APIs", duration: "21:30", type: "video" },
            { id: 20, title: "Basic Image Processing", duration: "23:40", type: "video" },
            { id: 21, title: "Working with Images", duration: "25:20", type: "video" },
            { id: 22, title: "Text Processing & RegEx", duration: "22:15", type: "video" },
            { id: 23, title: "Working with Text Data", duration: "24:50", type: "video" },
            { id: 24, title: "Text Pre-processing Techniques", duration: "20:30", type: "video" }
          ]
        },
        {
          id: 6,
          title: "Dimensionality Reduction",
          lessons: [
            { id: 25, title: "PCA and Feature Selection", duration: "26:40", type: "video" },
            { id: 26, title: "t-SNE and UMAP", duration: "22:20", type: "video" },
            { id: 27, title: "Data Analytics Quiz", duration: "20:00", type: "quiz" },
            { id: 28, title: "Project 01: Complete Data Analysis Pipeline", duration: "90:00", type: "assignment" }
          ]
        },
        {
          id: 7,
          title: "Machine Learning Foundations",
          lessons: [
            { id: 29, title: "Introduction to Machine Learning", duration: "18:30", type: "video" },
            { id: 30, title: "Types of Machine Learning", duration: "16:45", type: "video" },
            { id: 31, title: "Linear Regression", duration: "28:40", type: "video" },
            { id: 32, title: "Logistic Regression", duration: "26:30", type: "video" },
            { id: 33, title: "Evaluating ML Models", duration: "24:50", type: "video" }
          ]
        },
        {
          id: 8,
          title: "Advanced Supervised Learning",
          lessons: [
            { id: 34, title: "Decision Trees", duration: "25:20", type: "video" },
            { id: 35, title: "Random Forests", duration: "27:45", type: "video" },
            { id: 36, title: "Support Vector Machines (SVM)", duration: "29:30", type: "video" },
            { id: 37, title: "Nearest Neighbors Models", duration: "22:40", type: "video" },
            { id: 38, title: "Ensemble Methods", duration: "28:15", type: "video" },
            { id: 39, title: "Gradient-based Optimization", duration: "26:50", type: "video" },
            { id: 40, title: "Bayesian Statistics in ML", duration: "24:30", type: "video" }
          ]
        },
        {
          id: 9,
          title: "Working with Different Datasets",
          lessons: [
            { id: 41, title: "Examples on Text Data", duration: "32:20", type: "video" },
            { id: 42, title: "Examples on Image Datasets", duration: "35:45", type: "video" },
            { id: 43, title: "Time Series Analysis", duration: "28:30", type: "video" },
            { id: 44, title: "ML Project 01: Predictive Modeling", duration: "120:00", type: "assignment" }
          ]
        },
        {
          id: 10,
          title: "Unsupervised Learning",
          lessons: [
            { id: 45, title: "Introduction to Unsupervised Learning", duration: "19:40", type: "video" },
            { id: 46, title: "K-Means Clustering", duration: "24:30", type: "video" },
            { id: 47, title: "Agglomerative Clustering", duration: "26:20", type: "video" },
            { id: 48, title: "DBSCAN Algorithm", duration: "23:50", type: "video" },
            { id: 49, title: "Graph-based Clustering", duration: "25:40", type: "video" },
            { id: 50, title: "Curse of Dimensionality", duration: "22:15", type: "video" }
          ]
        },
        {
          id: 11,
          title: "Reinforcement Learning",
          lessons: [
            { id: 51, title: "Introduction to Reinforcement Learning", duration: "21:30", type: "video" },
            { id: 52, title: "Q-Learning and Value Functions", duration: "27:45", type: "video" },
            { id: 53, title: "Policy Gradients", duration: "26:20", type: "video" },
            { id: 54, title: "RL Applications", duration: "24:50", type: "video" },
            { id: 55, title: "ML Project 02: Clustering Analysis", duration: "90:00", type: "assignment" }
          ]
        },
        {
          id: 12,
          title: "Deep Learning Fundamentals",
          lessons: [
            { id: 56, title: "Introduction to Neural Networks", duration: "23:40", type: "video" },
            { id: 57, title: "Activation Functions", duration: "20:30", type: "video" },
            { id: 58, title: "Backpropagation Algorithm", duration: "28:50", type: "video" },
            { id: 59, title: "Training Neural Networks", duration: "26:20", type: "video" },
            { id: 60, title: "Optimization Techniques", duration: "24:45", type: "video" }
          ]
        },
        {
          id: 13,
          title: "Convolutional Neural Networks",
          lessons: [
            { id: 61, title: "Introduction to CNNs", duration: "22:30", type: "video" },
            { id: 62, title: "CNN Architectures", duration: "29:40", type: "video" },
            { id: 63, title: "CNN Models in Practice", duration: "32:20", type: "video" },
            { id: 64, title: "ResNet Architecture", duration: "27:50", type: "video" },
            { id: 65, title: "Transfer Learning", duration: "30:15", type: "video" }
          ]
        },
        {
          id: 14,
          title: "Sequence Modeling & RNNs",
          lessons: [
            { id: 66, title: "Recurrent Neural Networks", duration: "26:40", type: "video" },
            { id: 67, title: "LSTM Networks", duration: "31:30", type: "video" },
            { id: 68, title: "Sequence Modeling Applications", duration: "28:20", type: "video" },
            { id: 69, title: "Attention Mechanisms", duration: "29:45", type: "video" }
          ]
        },
        {
          id: 15,
          title: "Generative AI & Advanced Topics",
          lessons: [
            { id: 70, title: "Autoencoders", duration: "27:50", type: "video" },
            { id: 71, title: "Variational Autoencoders (VAE)", duration: "30:20", type: "video" },
            { id: 72, title: "Generative Adversarial Networks (GANs)", duration: "33:40", type: "video" },
            { id: 73, title: "Generative AI Applications", duration: "28:30", type: "video" },
            { id: 74, title: "Advanced Deep Learning Quiz", duration: "25:00", type: "quiz" },
            { id: 75, title: "Project 03: End-to-End AI Application", duration: "180:00", type: "assignment" }
          ]
        }
      ]
    }
  },
  // NEW COURSE 3: Full Stack Development
  {
    id: 6,
    title: "Complete Full Stack Web Development",
    subtitle: "Master Frontend, Backend, Databases & Deployment - MERN Stack",
    description: "Become a professional full-stack developer by mastering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and modern deployment strategies. Build production-ready web applications from scratch.",
    instructor: {
      id: 6,
      name: "Arjun Mehta",
      title: "Senior Full-Stack Engineer at Microsoft",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      rating: 4.9,
      students: 42300,
      bio: "Arjun Mehta is a Senior Full-Stack Engineer at Microsoft with 10+ years of experience building scalable web applications and mentoring developers."
    },
    price: {
      current: 139,
      original: 319,
      discount: 56
    },
    rating: 4.9,
    studentsCount: 1800,
    duration: "95 hours",
    category: "Web Development",
    categoryColor: "from-cyan-500 to-blue-600",
    categoryIcon: "⚡",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    tags: ["Full-Stack", "MERN", "React", "Node.js", "MongoDB", "JavaScript", "REST API"],
    featured: true,
    bestseller: true,
    newCourse: true,
    language: "English",
    lastUpdated: "October 2025",
    certificate: true,
    lifetimeAccess: true,
    modules: [
      { id: 1, title: "Frontend Development (HTML, CSS, JS)", duration: "25 hours", lessons: 32 },
      { id: 2, title: "React.js & Modern Frontend", duration: "22 hours", lessons: 28 },
      { id: 3, title: "Backend Development (Node.js & Express)", duration: "24 hours", lessons: 30 },
      { id: 4, title: "Databases & Deployment", duration: "18 hours", lessons: 22 },
      { id: 5, title: "Full-Stack Projects", duration: "6 hours", lessons: 8 }
    ],
    reviews: [
      {
        id: 9,
        studentName: "Karthik Iyer",
        rating: 5,
        comment: "Best full-stack course! Arjun's teaching style is clear and the projects are industry-level.",
        date: "2 days ago",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50"
      },
      {
        id: 10,
        studentName: "Neha Kapoor",
        rating: 5,
        comment: "Comprehensive curriculum! Got my first full-stack developer job after completing this course.",
        date: "1 week ago",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50"
      },
      {
        id: 11,
        studentName: "Rohan Das",
        rating: 5,
        comment: "Perfect blend of theory and practical projects. The MERN stack explanation is excellent!",
        date: "2 weeks ago",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50"
      }
    ],
    whatYouLearn: [
      "Master HTML5, CSS3, and modern JavaScript (ES6+)",
      "Build responsive websites with Flexbox and Grid",
      "Create dynamic UIs with React.js and state management",
      "Develop RESTful APIs with Node.js and Express",
      "Work with MongoDB and database design",
      "Implement authentication and authorization",
      "Deploy applications to cloud platforms (AWS, Heroku, Vercel)",
      "Use Git and GitHub for version control",
      "Build 5+ full-stack projects including e-commerce and social media apps",
      "Understand Agile development and best practices"
    ],
    prerequisites: [
      "Basic computer skills",
      "No programming experience required (beginners welcome)",
      "Passion for web development"
    ],
    curriculum: {
      totalLessons: 120,
      totalDuration: "95 hours",
      sections: [
        {
          id: 1,
          title: "Web Development Fundamentals",
          lessons: [
            { id: 1, title: "Introduction to Full-Stack Development", duration: "10:30", type: "video", preview: true },
            { id: 2, title: "How the Web Works", duration: "14:20", type: "video", preview: true },
            { id: 3, title: "Setting Up Development Environment", duration: "16:45", type: "video", preview: true }
          ]
        },
        {
          id: 2,
          title: "HTML5 Mastery",
          lessons: [
            { id: 4, title: "HTML Basics and Structure", duration: "18:30", type: "video" },
            { id: 5, title: "Semantic HTML Elements", duration: "20:15", type: "video" },
            { id: 6, title: "Forms and Input Elements", duration: "22:40", type: "video" },
            { id: 7, title: "HTML5 APIs", duration: "19:50", type: "video" },
            { id: 8, title: "HTML Quiz", duration: "15:00", type: "quiz" }
          ]
        },
        {
          id: 3,
          title: "CSS3 & Responsive Design",
          lessons: [
            { id: 9, title: "CSS Fundamentals", duration: "21:30", type: "video" },
            { id: 10, title: "CSS Flexbox Layout", duration: "26:45", type: "video" },
            { id: 11, title: "CSS Grid System", duration: "28:20", type: "video" },
            { id: 12, title: "Responsive Web Design", duration: "24:50", type: "video" },
            { id: 13, title: "CSS Animations and Transitions", duration: "22:30", type: "video" },
            { id: 14, title: "Sass/SCSS Preprocessing", duration: "20:15", type: "video" },
            { id: 15, title: "Building Responsive Layouts", duration: "60:00", type: "assignment" }
          ]
        },
        {
          id: 4,
          title: "JavaScript Fundamentals",
          lessons: [
            { id: 16, title: "JavaScript Basics", duration: "20:40", type: "video" },
            { id: 17, title: "Variables and Data Types", duration: "18:30", type: "video" },
            { id: 18, title: "Functions and Scope", duration: "24:20", type: "video" },
            { id: 19, title: "Arrays and Objects", duration: "26:45", type: "video" },
            { id: 20, title: "DOM Manipulation", duration: "28:30", type: "video" },
            { id: 21, title: "Event Handling", duration: "22:15", type: "video" }
          ]
        },
        {
          id: 5,
          title: "Modern JavaScript (ES6+)",
          lessons: [
            { id: 22, title: "Arrow Functions", duration: "16:40", type: "video" },
            { id: 23, title: "Destructuring and Spread Operator", duration: "20:30", type: "video" },
            { id: 24, title: "Promises and Async/Await", duration: "28:50", type: "video" },
            { id: 25, title: "Modules and Imports", duration: "19:20", type: "video" },
            { id: 26, title: "Fetch API and HTTP Requests", duration: "26:40", type: "video" },
            { id: 27, title: "JavaScript Quiz", duration: "20:00", type: "quiz" },
            { id: 28, title: "Project 01: Interactive Web Application", duration: "90:00", type: "assignment" }
          ]
        },
        {
          id: 6,
          title: "React.js Fundamentals",
          lessons: [
            { id: 29, title: "Introduction to React", duration: "18:30", type: "video" },
            { id: 30, title: "JSX and Components", duration: "22:45", type: "video" },
            { id: 31, title: "Props and State", duration: "26:20", type: "video" },
            { id: 32, title: "React Hooks (useState, useEffect)", duration: "30:40", type: "video" },
            { id: 33, title: "Event Handling in React", duration: "20:15", type: "video" },
            { id: 34, title: "Conditional Rendering", duration: "18:50", type: "video" }
          ]
        },
        {
          id: 7,
          title: "Advanced React",
          lessons: [
            { id: 35, title: "React Router for Navigation", duration: "28:30", type: "video" },
            { id: 36, title: "Context API", duration: "26:45", type: "video" },
            { id: 37, title: "Redux State Management", duration: "32:20", type: "video" },
            { id: 38, title: "Custom Hooks", duration: "24:50", type: "video" },
            { id: 39, title: "Performance Optimization", duration: "27:15", type: "video" },
            { id: 40, title: "React Quiz", duration: "18:00", type: "quiz" },
            { id: 41, title: "Project 02: React Dashboard Application", duration: "120:00", type: "assignment" }
          ]
        },
        {
          id: 8,
          title: "Node.js & Backend Basics",
          lessons: [
            { id: 42, title: "Introduction to Node.js", duration: "19:40", type: "video" },
            { id: 43, title: "Node.js Modules and NPM", duration: "22:30", type: "video" },
            { id: 44, title: "File System Operations", duration: "24:20", type: "video" },
            { id: 45, title: "Async Programming in Node", duration: "26:50", type: "video" },
            { id: 46, title: "Building CLI Applications", duration: "20:15", type: "video" }
          ]
        },
        {
          id: 9,
          title: "Express.js Framework",
          lessons: [
            { id: 47, title: "Introduction to Express.js", duration: "18:30", type: "video" },
            { id: 48, title: "Routing and Middleware", duration: "26:40", type: "video" },
            { id: 49, title: "Building REST APIs", duration: "32:20", type: "video" },
            { id: 50, title: "Request and Response Handling", duration: "24:50", type: "video" },
            { id: 51, title: "Error Handling", duration: "22:15", type: "video" },
            { id: 52, title: "API Validation", duration: "20:30", type: "video" }
          ]
        },
        {
          id: 10,
          title: "Databases & MongoDB",
          lessons: [
            { id: 53, title: "Introduction to Databases", duration: "16:45", type: "video" },
            { id: 54, title: "SQL vs NoSQL", duration: "19:30", type: "video" },
            { id: 55, title: "MongoDB Fundamentals", duration: "28:40", type: "video" },
            { id: 56, title: "Mongoose ODM", duration: "26:20", type: "video" },
            { id: 57, title: "Database Schema Design", duration: "24:50", type: "video" },
            { id: 58, title: "CRUD Operations", duration: "30:15", type: "video" },
            { id: 59, title: "Database Relationships", duration: "27:40", type: "video" }
          ]
        },
        {
          id: 11,
          title: "Authentication & Security",
          lessons: [
            { id: 60, title: "User Authentication Basics", duration: "22:30", type: "video" },
            { id: 61, title: "JWT Tokens", duration: "28:45", type: "video" },
            { id: 62, title: "Password Hashing with bcrypt", duration: "24:20", type: "video" },
            { id: 63, title: "Authorization and Role-Based Access", duration: "26:50", type: "video" },
            { id: 64, title: "Security Best Practices", duration: "23:15", type: "video" },
            { id: 65, title: "Backend Quiz", duration: "20:00", type: "quiz" }
          ]
        },
        {
          id: 12,
          title: "Full-Stack Integration",
          lessons: [
            { id: 66, title: "Connecting Frontend to Backend", duration: "30:40", type: "video" },
            { id: 67, title: "API Integration in React", duration: "28:30", type: "video" },
            { id: 68, title: "State Management with APIs", duration: "26:20", type: "video" },
            { id: 69, title: "File Upload Handling", duration: "24:50", type: "video" },
            { id: 70, title: "Real-time Communication with WebSockets", duration: "32:15", type: "video" }
          ]
        },
        {
          id: 13,
          title: "Testing & Quality Assurance",
          lessons: [
            { id: 71, title: "Introduction to Testing", duration: "18:30", type: "video" },
            { id: 72, title: "Unit Testing with Jest", duration: "26:40", type: "video" },
            { id: 73, title: "React Testing Library", duration: "28:20", type: "video" },
            { id: 74, title: "API Testing with Postman", duration: "22:50", type: "video" },
            { id: 75, title: "Integration Testing", duration: "24:30", type: "video" }
          ]
        },
        {
          id: 14,
          title: "Deployment & DevOps",
          lessons: [
            { id: 76, title: "Git and GitHub Basics", duration: "22:40", type: "video" },
            { id: 77, title: "Version Control Best Practices", duration: "20:15", type: "video" },
            { id: 78, title: "Deploying to Heroku", duration: "28:30", type: "video" },
            { id: 79, title: "Deploying Frontend to Vercel/Netlify", duration: "24:50", type: "video" },
            { id: 80, title: "AWS Deployment Basics", duration: "32:20", type: "video" },
            { id: 81, title: "Environment Variables and Configuration", duration: "19:40", type: "video" },
            { id: 82, title: "CI/CD Pipelines", duration: "26:30", type: "video" }
          ]
        },
        {
          id: 15,
          title: "Capstone Projects",
          lessons: [
            { id: 83, title: "Project 03: E-Commerce Platform", duration: "180:00", type: "assignment" },
            { id: 84, title: "Project 04: Social Media Application", duration: "180:00", type: "assignment" },
            { id: 85, title: "Project 05: Task Management System", duration: "150:00", type: "assignment" },
            { id: 86, title: "Portfolio Development", duration: "60:00", type: "assignment" },
            { id: 87, title: "Final Assessment", duration: "30:00", type: "quiz" }
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

// export const getCoursesByLevel = (level: string): Course[] => {
//   return courses.filter(course => course.level === level);
// };
