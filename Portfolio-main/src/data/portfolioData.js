// ============================================================
// portfolioData.js — Centralized configuration for Abhishek Dongre's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Abhishek Dongre",
  firstName: "Abhishek",
  brandName: "Abhishek",
  title: "Full Stack Developer & AI / Data Enthusiast",
  location: "Chhindwara, Madhya Pradesh, India",
  phone: "+91-9755616198",
  emails: {
    primary: "abhsihekdongre2062@gmail.com",
    secondary: "abhishekdongre206@gmail.com",
  },
  summary:
    "Motivated B.Tech Computer Science and Engineering student at Lovely Professional University with a strong foundation in Full Stack Web Development, Agentic AI, and Data Analytics. Proficient in TypeScript, React, Python, Java, and modern AI architectures.",
  resumeUrl: "/Abhishek_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/4bhiigit",
  linkedin: "https://linkedin.com/in/abhishek2006/",
  instagram: "https://instagram.com/me.4mmu",
};

export const heroContent = {
  greeting: "Hi, I'm Abhishek Dongre",
  titleHighlight: "FULL STACK DEVELOPER & AI ENTHUSIAST",
  subtitle:
    "I build full-stack web applications, real-time systems, and intelligent AI-powered solutions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Abhishek_Resume_2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Abhishek Dongre</span>, a B.Tech Computer Science student based in Madhya Pradesh, India. I am passionate about full-stack web development, intelligent agentic AI systems, and scalable architectures. I enjoy developing robust web applications, building low-latency real-time collaboration tools, and crafting efficient, user-centric solutions that solve real-world problems.`,
  techStack: ["React.js", "TypeScript", "Python", "Node.js"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust applications and scalable systems.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and modular system designs that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks, type safety, and engineering best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, containerization with Docker, performance optimization, and seamless deployment to cloud infrastructure.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 82 },
        { name: "HTML & CSS", level: 90 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js & Express.js", level: 85 },
        { name: "Django & DRF", level: 80 },
        { name: "HTMX & Alpine.js", level: 82 },
        { name: "Scikit-learn", level: 78 },
        { name: "Pandas & NumPy", level: 88 },
        { name: "Matplotlib & Seaborn", level: 85 },
        { name: "Chart.js", level: 82 }
      ]
    },
    {
      title: "Tools, Platforms & Concepts",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git & GitHub", level: 90 },
        { name: "REST APIs", level: 90 },
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "OOPs & DBMS", level: 88 },
        { name: "Operating Systems", level: 82 },
        { name: "Tableau & Power BI", level: 85 },
        { name: "Excel & Data Analysis", level: 88 }
      ]
    }
  ]
};

// Content Creation Data (Placeholder/Empty, as it is removed from UI)
export const contentCreation = {
  badge: "",
  heading: "",
  description: "",
  categories: []
};

// Leadership & Activities Data
export const leadershipList = [
  {
    title: "Adobe University Hackathon",
    description: "Showcased innovation, rapid prototyping, and software problem-solving skills in high-intensity hackathon development.",
    role: "Participant & Innovator",
    badge: "Hackathon",
    date: "Aug '26"
  },
  {
    title: "Hack Quest – 24-Hours CTF Challenge",
    description: "Participated and competed in the 24-Hours CTF (Capture the Flag) Challenge during Concoction 2024, an intra-university tech fusion event at Lovely Professional University.",
    role: "Participant & Competitor",
    badge: "Cybersecurity",
    date: "Apr '24"
  },
  {
    title: "LPU Esports Championship – Call of Duty: Mobile (CODM)",
    description: "Secured 2nd Position (Runner-up) in the university-level Call of Duty: Mobile championship at Lovely Professional University. Led team tactics, map rotations, and quick in-game adaptations in high-pressure matches.",
    role: "Team Captain & Runner-up",
    badge: "Esports",
    date: "2024"
  }
];

// Internships / Training Data
export const internshipsList = [
  {
    organization: "Centre for Professional Enhancement, Lovely Professional University",
    role: "Summer Trainee (Full Stack Web Development)",
    duration: "Jun '25 – Jul '25",
    description: "Successfully completed summer training in Full Stack Web development, focusing on building responsive and interactive applications using React.js and creating server-side logic with Node.js. Developed and deployed RESTful APIs, integrated databases like MongoDB/MySQL, and worked on real world project modules following industry best practices. Strengthened skills in frontend UI design, backend logic, version control and end-to-end application development with a focus on clean, scalable code.",
    skills: ["Frontend UI Design", "Backend Logic", "RESTful APIs", "Database Integration (MongoDB/MySQL)", "Version Control & Git", "Clean & Scalable Architecture"],
    tech: ["React.js", "Node.js", "Express.js", "JavaScript", "REST APIs", "Git/GitHub", "Heroku", "MongoDB", "MySQL"],
    certificateUrl: "https://drive.google.com/file/d/1vCZw6v5cG4bcJ8aQXm4QNj0l5Bt_-ydK/view"
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem-Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Team Player", icon: "🤝", desc: "Collaborating effectively across cross-functional teams to build successful software projects." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks, AI architectures, tools, and technical environments." },
  { name: "Active Listener", icon: "👂", desc: "Listening attentively to team members and stakeholders to understand needs and execute projects precisely." },
  { name: "Communication", icon: "💬", desc: "Explaining technical ideas clearly, giving constructive feedback, and keeping stakeholders aligned." },
  { name: "Time Management", icon: "⏱️", desc: "Organizing tasks, meeting aggressive deadlines, and balancing multiple priorities effectively." },
  { name: "Creative Thinking", icon: "🎨", desc: "Finding innovative solutions to complex engineering challenges with fresh approaches." },
  { name: "Leadership", icon: "🏆", desc: "Motivating teams, guiding technical decisions, and taking full ownership of project outcomes." }
];

export const projects = [
  {
    id: "gka",
    number: "01",
    badge: "🤖 AI / RAG Platform",
    title: "GitHub Knowledge Assistant (GKA)",
    description:
      "A full-stack RAG platform that ingests any public GitHub repository and lets developers chat with the entire codebase in natural language, backed by strict file-and-line citations. Designed a code-aware semantic chunking pipeline with function/class-boundary splitting and exact line-span tracking, powering vector search over embeddings for accurate, context-grounded retrieval. Implemented real-time streaming chat (SSE) with an interactive file explorer, one-click AI-generated architecture summaries, and a zero-config SQLite/Prisma backend with optional Docker-based Postgres/Qdrant deployment.",
    techTags: [
      "TypeScript",
      "Node.js",
      "SQLite / PostgreSQL",
      "Groq API",
      "Gemini API",
      "Docker",
      "Prisma",
      "Qdrant",
      "LangChain.js"
    ],
    links: {
      github: "https://github.com/4bhiigit/GKA.git",
      demo: "https://gka-alpha.vercel.app",
    },
    isFlagship: true,
  },
  {
    id: "codemesh",
    number: "02",
    badge: "⚡ Real-Time Collaboration",
    title: "CodeMesh - Collaborative Code Editor",
    description:
      "A real-time collaborative code editor implementing a custom Operational Transformation (OT) algorithm (over CRDT/Yjs) for multi-user conflict resolution. Engineered a low-latency sync layer using Socket.io for real-time broadcast of edits, cursor positions, and presence indicators across connected users. Integrated Monaco Editor (VS Code's editor engine) for a full-featured in-browser coding experience with syntax highlighting and IntelliSense.",
    techTags: [
      "React",
      "Monaco Editor",
      "Socket.io",
      "Node.js",
      "JavaScript"
    ],
    links: {
      github: "https://github.com/4bhiigit/CodeMash.git",
      demo: "https://codemesh-indol.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "employee-management-system",
    number: "03",
    badge: "🏢 Enterprise Web App",
    title: "Employee Management System",
    description:
      "An enterprise-grade Employee Management System featuring role-based access control (RBAC) with granular permission tiers for admin, HR, and employee-level access. Built with HTMX + Alpine.js for a dynamic, reactive frontend without a heavy JS framework — enabling partial page updates and interactive UI with minimal client-side overhead. Integrated Chart.js for real-time dashboards visualizing employee data, attendance, and performance metrics, with automated Excel/PDF report generation.",
    techTags: [
      "Flask",
      "SQLAlchemy",
      "Pandas",
      "HTMX",
      "Alpine.js",
      "Chart.js",
      "Python",
      "RBAC"
    ],
    links: {
      github: "https://github.com/4bhiigit/Flask-Development.git",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "linkpulse",
    number: "04",
    badge: "🔗 Web Application",
    title: "LinkPulse (URL Shortener)",
    description:
      "A full-featured, modern URL shortener with custom short aliases, password-protected links, auto-expiration options, live click analytics, and instant QR code generation. Built with Next.js (App Router), Tailwind CSS, and Upstash Redis for fast, serverless link storage and real-time click tracking.",
    techTags: ["Next.js", "Tailwind CSS", "Upstash Redis", "TypeScript"],
    links: {
      github: "https://github.com/4bhiigit/shorturl.git",
      demo: "https://shorturl-nine-pi.vercel.app/",
    },
    isFlagship: false,
  }
];

export const certificates = {
  featured: [
    {
      name: "Build an AI Automated Ordering System with Python & AWS",
      issuer: "Infosys",
      icon: "⚡",
      credentialUrl: "https://drive.google.com/file/d/15V-CWwQBA6w6hvUXevuc5LB5MU5vAJRH/view?usp=sharing",
    },
    {
      name: "Agentic AI Development with Agent Framework, MCP and .NET",
      issuer: "Infosys",
      icon: "🤖",
      credentialUrl: "https://drive.google.com/file/d/15V-CWwQBA6w6hvUXevuc5LB5MU5vAJRH/view?usp=sharing",
    },
    {
      name: "Building AI Agents with MongoDB",
      issuer: "MongoDB University",
      icon: "🍃",
      credentialUrl: "https://www.credly.com/badges/09895b4e-bf0a-4dbd-ac9c-eadde0c1d5d6",
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      icon: "☁️",
      credentialUrl: "https://drive.google.com/file/d/15V-CWwQBA6w6hvUXevuc5LB5MU5vAJRH/view?usp=sharing",
    },
    {
      name: "Building RAG Apps Using MongoDB",
      issuer: "MongoDB",
      icon: "📚",
      credentialUrl: "https://www.credly.com/badges/8c8cabc1-51ed-425e-810c-c2c302a600ec",
    },
    {
      name: "Building AI-Powered Search with MongoDB Vector Search",
      issuer: "MongoDB",
      icon: "🔍",
      credentialUrl: "https://www.credly.com/badges/99acf2f5-8716-4d52-ab81-c83a1754a13d",
    },
  ],
  all: [
    {
      name: "Build an AI Automated Ordering System with Python & AWS",
      issuer: "Infosys",
      icon: "⚡",
      credentialUrl: "https://drive.google.com/file/d/15V-CWwQBA6w6hvUXevuc5LB5MU5vAJRH/view?usp=sharing",
    },
    {
      name: "Agentic AI Development with Agent Framework, MCP and .NET",
      issuer: "Infosys",
      icon: "🤖",
      credentialUrl: "https://drive.google.com/file/d/15V-CWwQBA6w6hvUXevuc5LB5MU5vAJRH/view?usp=sharing",
    },
    {
      name: "Building AI Agents with MongoDB",
      issuer: "MongoDB University",
      icon: "🍃",
      credentialUrl: "https://www.credly.com/badges/09895b4e-bf0a-4dbd-ac9c-eadde0c1d5d6",
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      icon: "☁️",
      credentialUrl: "https://drive.google.com/file/d/15V-CWwQBA6w6hvUXevuc5LB5MU5vAJRH/view?usp=sharing",
    },
    {
      name: "Building RAG Apps Using MongoDB",
      issuer: "MongoDB",
      icon: "📚",
      credentialUrl: "https://www.credly.com/badges/8c8cabc1-51ed-425e-810c-c2c302a600ec",
    },
    {
      name: "Building AI-Powered Search with MongoDB Vector Search",
      issuer: "MongoDB",
      icon: "🔍",
      credentialUrl: "https://www.credly.com/badges/99acf2f5-8716-4d52-ab81-c83a1754a13d",
    },
    {
      name: "AI and Innovation: How MongoDB Enables a Resilient AI Strategy",
      issuer: "MongoDB",
      icon: "💡",
      credentialUrl: "https://www.credly.com/go/jfF4lU7Z",
    },
    {
      name: "MongoDB Basics for Students",
      issuer: "MongoDB",
      icon: "🎓",
      credentialUrl: "https://www.credly.com/badges/b6b2eb85-d0ce-4895-a17a-0eaad91fb8ee",
    },
    {
      name: "Summer Trainee (Full Stack Web Development)",
      issuer: "Lovely Professional University (CPE)",
      icon: "💻",
      credentialUrl: "https://drive.google.com/file/d/1vCZw6v5cG4bcJ8aQXm4QNj0l5Bt_-ydK/view",
    },
    {
      name: "Software Development Processes and Methodologies",
      issuer: "Coursera",
      icon: "⚙️",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/EJL2LATCTYBT",
    },
    {
      name: "UAT For Interview",
      issuer: "Udemy",
      icon: "📋",
      credentialUrl: "https://www.udemy.com/certificate/UC-2e3b80b8-f4ec-446a-bd6d-819cf728c600/",
    },
    {
      name: "AI Tools & ChatGPT Workshop",
      issuer: "be10x",
      icon: "🤖",
      credentialUrl: "https://drive.google.com/file/d/1cKrlmfcgdvzGnCRJ2b7ByxB2_w0QQEXv/view?usp=sharing",
    },
    {
      name: "Internship Common Aptitude Test",
      issuer: "iCAT",
      icon: "📜",
      credentialUrl: "https://drive.google.com/file/d/1nqWdELNwAqoVLrvGd8u_99quKeM0RAWa/view?usp=sharing",
    },
    {
      name: "Teamwork Skills: Communicating Effectively in Groups",
      issuer: "Infosys Springboard",
      icon: "🤝",
      credentialUrl: "https://drive.google.com/file/d/1gHR_WWImvNbwAyyJiAmyHoJLq_KaZ7O3/view?usp=sharing",
    }
  ]
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Lovely Professional University (Phagwara, Punjab)",
  cgpa: "5.80",
  graduation: "Aug '23 – Present",
  twelfth: "Sanskar Srajan H.S. School (Intermediate | 74.4%)",
  tenth: "Sanskar Srajan H.S. School (Matriculation | 79.5%)",
};

export const footerContent = {
  taglines: [
    "Full Stack Development",
    "Agentic AI & RAG Systems",
    "Python · TypeScript · React",
  ],
  credential: "B.Tech CSE · Lovely Professional University",
  copyright: `© ${new Date().getFullYear()} Abhishek Dongre | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

