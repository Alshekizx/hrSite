export interface BlogSubtopic {
  heading: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  datePosted: string;
  readTime: string;
  whatsInside?:string[];
  subtopics: { heading: string; content: string }[];
  topCategory: string;
  sideCategory: string;
  downloadLink?: string;
  author: {
    name: string;
    position: string;
    profilePicture: string;
  };
}

export const blogData: BlogPost[] = [
  {
    slug: "eefmfm",
    image: "/images/default.jpg",
    title: "The Future of Fintech in Africa",
    summary: "Explore the rapid growth of financial technology across the African continent and what it means for the future.",
    category: "Fintech",
    readTime: "5 min read",
    datePosted: "2025-05-10",
    topCategory: "Case Study",
    sideCategory: "Leadership and Management",
    subtopics: [
      { heading: "Rise of Mobile Banking", content: "With mobile phone penetration on the rise, more Africans are accessing banking services through mobile apps." },
      { heading: "Fintech Startups and Investment", content: "Investors are turning their attention to African fintech startups, with funding growing every year." },
      { heading: "Challenges in Regulation", content: "Despite growth, regulatory frameworks still lag behind in many countries." }
    ],
    author: {
      name: "Adaeze Nwosu",
      position: "Fintech Analyst",
      profilePicture: "/images/default.jpg"
    }
  },
  {
    slug: "fvdmm",
    image: "/images/default.jpg",
    title: "Building Scalable Web Apps with Next.js",
    summary: "Learn why Next.js is a preferred framework for building fast, scalable web applications.",
    category: "Web Development",
    readTime: "4 min read",
    datePosted: "2025-04-28",
    topCategory: "Management Guide",
    sideCategory: "Performance Management",
    subtopics: [
      { heading: "What is Next.js?", content: "Next.js is a React-based framework that supports server-side rendering and static site generation." },
      { heading: "Performance Benefits", content: "Thanks to its optimized loading and SSR, Next.js apps load faster and provide better SEO." }
    ],
    author: {
      name: "Daniel Obi",
      position: "Full-Stack Developer",
      profilePicture: "/images/default.jpg"
    }
  },
  {
    slug: "fnfjgkrm",
    image: "/images/default.jpg",
    title: "Design Tips for Modern UI in 2025",
    summary: "Discover essential UI design trends that can help keep your web interfaces modern and user-friendly.",
    category: "Design",
    readTime: "6 min read",
    datePosted: "2025-03-15",
    topCategory: "Free Download",
    whatsInside: [
      "Minimalist UI Templates",
      "Typography Guides",
      "Color Palette Examples",
      "Animation Best Practices",
      "Accessibility Checklist"
    ],
    sideCategory: "Workplace Culture",
    downloadLink: "/downloads/design-tips-modern-ui-2025.pdf",
    subtopics: [
      { heading: "Minimalism is Still In", content: "Simple, content-focused designs with lots of white space dominate current design trends." },
     
      
    ],
    author: {
      name: "Lara Okonkwo",
      position: "UI/UX Designer",
      profilePicture: "/images/default.jpg"
    }
  },
  {
    slug: "mcngk",
    image: "/images/default.jpg",
    title: "Understanding the Role of AI in Customer Experience",
    summary: "Discover how artificial intelligence is reshaping customer interactions, personalization, and support in digital platforms.",
    category: "Artificial Intelligence",
    readTime: "5 min read",
    datePosted: "2025-05-01",
    topCategory: "Case Study",
    sideCategory: "Product Management",
    subtopics: [
      { heading: "AI-Powered Chatbots", content: "Businesses use AI-driven bots to provide 24/7 support, reducing response time and improving satisfaction." },
      { heading: "Personalized Recommendations", content: "AI helps tailor product suggestions based on user behavior and preferences, increasing engagement." },
      { heading: "Data-Driven Insights", content: "AI analyzes user data to provide actionable insights for better customer targeting and retention." }
    ],
    author: {
      name: "Tunde Bakare",
      position: "AI Product Manager",
      profilePicture: "/images/default.jpg"
    }
  },
  {
    slug: "lkbjggjj",
    image: "/images/default.jpg",
    title: "Why Your Startup Needs a Strong Brand Identity",
    summary: "Learn the essentials of building a memorable and trustworthy brand for your startup from day one.",
    category: "Branding",
    readTime: "4 min read",
    datePosted: "2025-04-10",
    topCategory: "Management Guide",
    sideCategory: "Conducts",
    subtopics: [
      { heading: "Consistency is Key", content: "Using consistent visual elements and tone helps establish brand recognition and trust." },
      { heading: "Defining Your Brand Voice", content: "Your brand should speak in a way that resonates with your audience and reflects your values." },
      { heading: "Visual Identity Matters", content: "Logos, colors, and typography play a major role in how people perceive your business." }
    ],
    author: {
      name: "Chiamaka Eze",
      position: "Brand Strategist",
      profilePicture: "/images/default.jpg"
    }
  },
  {
    slug: "bnguuti",
    image: "/images/default.jpg",
    title: "Top Security Practices for Modern Web Applications",
    summary: "Stay ahead of security threats by implementing best practices in web app development.",
    category: "Cybersecurity",
    readTime: "6 min read",
    datePosted: "2025-03-22",
    topCategory: "Free Download",
    whatsInside: [
      "Secure Authentication Methods",
      "Input Validation Techniques",
      "Regular Security Audits",
      "Dependency Management",
      "Incident Response Plans"
    ],
    sideCategory: "Health and Safety",
    downloadLink: "/downloads/security-practices-web-apps.pdf",
    subtopics: [
      { heading: "Secure Authentication", content: "Use modern authentication methods like OAuth, 2FA, and secure password hashing." },
     
    ],
    author: {
      name: "Ibrahim Sule",
      position: "Cybersecurity Engineer",
      profilePicture: "/images/default.jpg"
    }
  }
];