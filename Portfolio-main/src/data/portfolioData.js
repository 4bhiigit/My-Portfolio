// ============================================================
// portfolioData.js — Centralized configuration for Abhishek Dongre's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Abhishek Dongre",
  firstName: "Abhishek",
  brandName: "Abhishek",
  title: "Full Stack Developer & Data Analyst",
  location: "Chhindwara, Madhya Pradesh, India",
  phone: "+91-9755616198",
  emails: {
    primary: "abhishekdongre206@gmail.com",
    secondary: "",
  },
  summary:
    "Motivated B.Tech Computer Science and Engineering student at Lovely Professional University with a strong foundation in Full Stack Web Development and Data Analysis. Proficient in Java, Python, React.js, and Power BI.",
  resumeUrl: "/Abhishek_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/4bhiigit",
  linkedin: "https://linkedin.com/in/abhishek2006/",
  instagram: "https://instagram.com/me.4mmu",
};

export const heroContent = {
  greeting: "Hi, I'm Abhishek Dongre",
  titleHighlight: "FULL STACK DEVELOPER & DATA ANALYST",
  subtitle:
    "I build clean, responsive web applications and interactive data dashboards.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Abhishek_Resume_2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Abhishek Dongre</span>, a B.Tech Computer Science student based in Madhya Pradesh, India. I am passionate about full-stack development, data analytics, and building scalable visual dashboards. I enjoy developing robust web applications, analyzing data to generate meaningful insights, and creating efficient, user-friendly solutions that solve real-world problems.`,
  techStack: ["React.js", "Node.js", "Python", "Power BI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust applications and dashboards.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
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
        { name: "Python", level: 85 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
        { name: "Java", level: 90 },
        { name: "SQL", level: 80 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "Django", level: 78 },
        { name: "Django REST Framework", level: 75 },
        { name: "Pandas & NumPy", level: 85 },
        { name: "Matplotlib & Seaborn", level: 82 },
        { name: "Scikit-learn", level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Git & GitHub", level: 88 },
        { name: "Docker", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "Tableau", level: 80 },
        { name: "Excel", level: 85 },
        { name: "REST APIs", level: 85 }
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

// Leadership Data
export const leadershipList = [
  {
    title: "Hack Quest – 24-Hours CTF Challenge",
    description: "Participated in the 24-Hours CTF (Capture the Flag) Challenge during Concoction 2024, an intra-university tech fusion event at Lovely Professional University.",
    role: "Participant & Competitor",
    badge: "Cybersecurity"
  },
  {
    title: "LPU Esports Championship – Call of Duty: Mobile (CODM)",
    description: "Secured 2nd Position (Runner-up) in the university-level Call of Duty: Mobile championship at Lovely Professional University. Led team tactics, map rotations, and quick in-game adaptations in high-pressure matches.",
    role: "Team Captain & Runner-up",
    badge: "Esports"
  }
];

// Internships / Training Data
export const internshipsList = [
  {
    organization: "Lovely Professional University (Centre for Professional Enhancement)",
    role: "Summer Trainee (Full Stack Web Development)",
    duration: "June 2025 - July 2025",
    description: "Designed and developed responsive full-stack web applications. Built intuitive frontend interfaces, implemented secure RESTful API endpoints, integrated robust SQL/NoSQL databases, and utilized version control systems for clean deployment workflows.",
    skills: ["Frontend UI Design", "Backend Logic", "RESTful APIs", "Database Integration", "Version Control"],
    tech: ["React.js", "Node.js", "Express.js", "JavaScript", "MongoDB", "MySQL", "Git/GitHub", "Heroku"],
    certificateUrl: "https://drive.google.com/file/d/1vCZw6v5cG4bcJ8aQXm4QNj0l5Bt_-ydK/view"
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem-Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Team Player", icon: "🤝", desc: "Collaborating effectively across teams to build successful full-stack projects." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks, tools, and technical environments." },
  { name: "Active Listener", icon: "👂", desc: "Listening attentively to team members and stakeholders to understand needs and execute projects precisely." },
  { name: "Communication", icon: "💬", desc: "Explaining ideas clearly, giving feedback, and keeping stakeholders aligned." },
  { name: "Time Management", icon: "⏱️", desc: "Organizing tasks, meeting deadlines, and balancing multiple priorities effectively." },
  { name: "Creative Thinking", icon: "🎨", desc: "Finding innovative solutions to problems and improving user experiences with fresh ideas." },
  { name: "Leadership", icon: "🏆", desc: "Motivating teams, guiding decisions, and taking ownership of project outcomes." }
];

export const projects = [
  {
    id: "gka",
    number: "01",
    badge: "🤖 AI / RAG Platform",
    title: "GKA (GitHub Knowledge Assistant)",
    description:
      "A RAG-based codebase chat platform that lets developers ask natural-language questions about any GitHub repo and get contextual answers with code citations. Built on a free-tier stack: Groq API (llama-3.3-70b-versatile) for inference, Qdrant (via Docker) as the vector store, sentence-transformers/Gemini for embeddings, PostgreSQL + Prisma for data, Redis + BullMQ for background jobs, and LangChain.js for orchestration.",
    techTags: [
      "Next.js",
      "TypeScript",
      "LangChain.js",
      "Groq",
      "Qdrant",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
    ],
    links: {
      github: "https://github.com/4bhiigit/GKA.git",
      demo: "https://gka-alpha.vercel.app",
    },
    isFlagship: true,
  },
  {
    id: "linkpulse",
    number: "02",
    badge: "🔗 Web Application",
    title: "LinkPulse (URL Shortener)",
    description:
      "A full-featured, modern URL shortener with custom short aliases, password-protected links, auto-expiration options, live click analytics, and instant QR code generation. Built with Next.js (App Router), Tailwind CSS, and Upstash Redis for fast, serverless link storage and real-time click tracking.",
    techTags: ["Next.js", "Tailwind CSS", "Upstash Redis"],
    links: {
      github: "https://github.com/4bhiigit/shorturl.git",
      demo: "https://shorturl-nine-pi.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "retail-sales-dashboard",
    number: "03",
    badge: "📊 BI Dashboard",
    title: "Retail Sales Performance Dashboard",
    description:
      "An interactive Power BI dashboard analyzing multi-year retail sales trends across ~293K transactions and ~87K customer records. Built Power Query and DAX transformation pipelines to compute key business KPIs from over ₹410M in revenue, identifying critical growth patterns. Engineered a scalable data model enabling efficient performance tracking and faster data-driven business decision-making.",
    techTags: ["Power BI", "Power Query", "DAX", "Data Modeling", "Excel"],
    links: {
      github: "https://github.com/4bhiigit/PBI",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "tax-data-analysis",
    number: "04",
    badge: "🐍 Python Analytics",
    title: "TAX Data Analysis",
    description:
      "Analyzed taxable sales distribution and multi-year trends using Python, deriving meaningful patterns and growth insights from large datasets. Compared taxable sales with computed tax values and highlighted the top five tax-contributing countries through precise analytical methods. Computed total taxable sales per country and developed clear, insightful visualizations using Pandas, Matplotlib, and Seaborn to support data-driven decision-making.",
    techTags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    links: {
      github: "https://github.com/4bhiigit/py-pro/blob/main/Abhishek_Dongre_12308486_RK23EDB41.zip",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Building AI Agents with MongoDB",
      issuer: "MongoDB",
      icon: "🤖",
      credentialUrl: "https://www.credly.com/badges/09895b4e-bf0a-4dbd-ac9c-eadde0c1d5d6",
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
      icon: "🍃",
      credentialUrl: "https://www.credly.com/go/jfF4lU7Z",
    },
    {
      name: "MongoDB Basics for Students",
      issuer: "MongoDB",
      icon: "🎓",
      credentialUrl: "https://www.credly.com/badges/b6b2eb85-d0ce-4895-a17a-0eaad91fb8ee",
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      icon: "☁️",
      credentialUrl: "https://drive.google.com/file/d/15V-CWwQBA6w6hvUXevuc5LB5MU5vAJRH/view?usp=sharing",
    },
  ],
  all: [
    {
      name: "Building AI Agents with MongoDB",
      issuer: "MongoDB",
      icon: "🤖",
      credentialUrl: "https://www.credly.com/badges/09895b4e-bf0a-4dbd-ac9c-eadde0c1d5d6",
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
      icon: "🍃",
      credentialUrl: "https://www.credly.com/go/jfF4lU7Z",
    },
    {
      name: "MongoDB Basics for Students",
      issuer: "MongoDB",
      icon: "🎓",
      credentialUrl: "https://www.credly.com/badges/b6b2eb85-d0ce-4895-a17a-0eaad91fb8ee",
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      icon: "☁️",
      credentialUrl: "https://drive.google.com/file/d/15V-CWwQBA6w6hvUXevuc5LB5MU5vAJRH/view?usp=sharing",
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
  institution: "Lovely Professional University",
  cgpa: "5.63",
  graduation: "Present",
  twelfth: "12th (Intermediate) – 74.4%",
  tenth: "10th (Matriculation) – 79.5%",
};

export const footerContent = {
  taglines: [
    "Data Analytics & Web Dev",
    "Java · Python · React",
    "Full Stack Applications",
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
