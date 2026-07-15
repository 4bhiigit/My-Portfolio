# 🎓 B.Tech CSE Academic Project: Developer Portfolio & Showcase Application

**Submitted By:** Abhishek Dongre  
**Course:** B.Tech - Computer Science & Engineering  
**Institution:** Lovely Professional University (LPU), Phagwara, Punjab  

---

## 📝 Project Overview

This project is a web-based **Developer Portfolio & Showcase Application** designed to demonstrate advanced frontend engineering principles, responsive UI architectures, and third-party API integrations. The application serves as a dynamic, interactive digital curriculum vitae (CV) displaying professional training, technical projects, certifications, and leadership activities.

The primary objective is to implement a **Data-Driven UI architecture** (Separation of Concerns) where the entire website's content, media, and state parameters are decoupled from the rendering components.

---

## 🛠️ Technology Stack & Software Requirements

### 1. Frontend Technologies
- **Library**: React.js (v19) - Component-based UI rendering.
- **Styling**: Tailwind CSS (v4) - Utility-first styling for responsive layouts.
- **Animations**: Framer Motion (v12) & Animate On Scroll (AOS) - Scroll-based and state-based micro-interactions.

### 2. Runtime & Bundling
- **Runtime Environment**: Node.js (v18+)
- **Build Tool / Bundler**: Vite (v8) - Optimized HMR (Hot Module Replacement) and tree-shaking compiler.
- **Package Manager**: npm (Node Package Manager)

### 3. Hardware Requirements (Minimum)
- **Processor**: Intel Core i3 / AMD Ryzen 3 or higher.
- **Memory**: 4 GB RAM.
- **OS**: Windows 10/11, macOS, or Linux.
- **Browser**: Modern web browser (Chrome, Firefox, Edge, Safari).

---

## 🏛️ System Architecture & Data Flow

The project follows a modular React component architecture. The data flows unidirectionally from the central data store to individual presentation components:

```
                  ┌──────────────────────────────┐
                  │      portfolioData.js        │
                  │ (Centralized Content Store)  │
                  └──────────────┬───────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────┐
                  │           App.jsx            │
                  │ (Main Application Container) │
                  └──────────────┬───────────────┘
                                 │
         ┌───────────────┬───────┴───────┬───────────────┐
         ▼               ▼               ▼               ▼
  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
  │  Hero.jsx   │ │  About.jsx  │ │ Internships │ │Certificates │
  │(Intro/Video)│ │ (Bio/Skills)│ │(Work Exp.)  │ │(Credential) │
  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
```

### Key Architectural Modules:
1. **Dynamic Layout Module (`Internships.jsx`)**: Implements an elastic grid calculation algorithm. The grid dynamically adjusts columns based on the dataset length (`length = 1` ➔ 1 Column Wide, `length = 2` ➔ 2 Columns, `length >= 3` ➔ 3 Columns Grid).
2. **Interactive Animation Module (`Certificates.jsx`)**: Manages the expansion states. When expanding to "View All", the component injects supplementary cards into the DOM and triggers a custom `@keyframes fadeInUp` transition directly through CSS properties.
3. **Form handling & Redirection Module (`Contact.jsx`)**: Manages state-based async form submissions. Attempts transmission via **EmailJS API**; falls back to an encoded `mailto:` protocol if API credentials are not found.

---

## 📂 Project Directory Structure

```
Portfolio-main/
├── public/                 # Static assets (Resume PDF, Favicons)
├── src/
│   ├── assets/             # Media and graphics resources
│   │   ├── about/          # Avatar images & tech stack icons
│   │   └── hero video/     # Video background clips
│   ├── components/         # Reusable React components
│   │   ├── Hero.jsx        # Top section with video background
│   │   ├── About.jsx       # Bio and core competencies
│   │   ├── Internships.jsx # Work experience responsive layout
│   │   ├── Certificates.jsx# Interactive certification cards list
│   │   └── Contact.jsx     # Form submission with EmailJS integration
│   ├── data/
│   │   └── portfolioData.js # Central store for all text contents
│   ├── App.jsx             # Main layout entry point
│   ├── index.css           # Custom styles and animation keyframes
│   └── main.jsx            # DOM mounting script
├── .env                    # System environment keys template
├── package.json            # Dependencies and build scripts
└── vite.config.js          # Vite compilation config
```

---

## 🚀 Setup & Execution Guide

### 1. Extract and Install
Extract the project archive and install the required modules:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory to store your EmailJS API keys:
```env
VITE_EMAILJS_SERVICE_ID=YOUR_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY=YOUR_EMAILJS_PUBLIC_KEY
```

### 3. Run Development Server
Start the local server with hot reloading enabled:
```bash
npm run dev
```
Open a browser and navigate to `http://localhost:5173`.

### 4. Build & Compile for Deployment
Build the optimized static assets for evaluation:
```bash
npm run build
npm run preview
```

---

## 🎯 Engineering Outcomes & Learning Objectives

- **Component Lifecycle Management**: Utilizing React Hooks (`useState`, `useEffect`, `useRef`) for DOM manipulation, viewport tracking, and dynamic states.
- **Dynamic CSS Formatting**: Constructing fluid page layouts using CSS Flexbox/Grid and responsive viewport design (`sm`, `md`, `lg` breakpoints).
- **Asynchronous Operations**: Handling form events, fetching bundle split components dynamically (e.g., importing `@emailjs/browser` dynamically upon submit), and API calls.
- **Performance Optimizations**: Utilizing Vite to tree-shake unused packages, compile JSX, bundle CSS, and auto-minimize static assets.
