import React from 'react';
import stackImage from '../assets/about/abhishek-avatar.png';
import { aboutContent, personalInfo } from '../data/portfolioData';

const About = () => {
  const pillars = [
    {
      title: "Full-Stack Web Engineering",
      desc: "Architecting responsive, high-performance web applications using React, TypeScript, Node.js, and modern CSS systems.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tag: "React · Node · TS"
    },
    {
      title: "Agentic AI & RAG Pipelines",
      desc: "Building context-grounded retrieval systems, LLM agents, and semantic code-search tools with LangChain, Groq, and Vector DBs.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      tag: "LangChain · Qdrant · LLMs"
    },
    {
      title: "Data Analytics & Insights",
      desc: "Transforming raw data into actionable dashboards and predictive models using Python, Pandas, SQL, and Power BI.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      tag: "Python · Pandas · Power BI"
    }
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-[#06080f] overflow-hidden">
      {/* Background Subtle Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span>● 01</span>
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Engineering with Purpose & <span className="gradient-text-cyan">Precision</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Biometric Profile Card */}
          <div data-aos="fade-right" data-aos-delay="100" className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/30 to-indigo-600/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              
              {/* Profile Card Container */}
              <div className="relative rounded-3xl bg-[#0b0f19]/90 border border-white/10 p-4 shadow-2xl backdrop-blur-xl">
                {/* Top Corner Accents */}
                <div className="flex items-center justify-between px-2 pt-1 pb-3 text-[10px] font-mono text-cyan-400/80">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    ID: AD-2026-DEV
                  </span>
                  <span className="text-slate-500">SYS: ACTIVE</span>
                </div>

                {/* Avatar Image Frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
                  <img 
                    src={stackImage} 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay on Photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />
                  
                  {/* Live Badge in Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#06080f]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-white text-xs font-semibold">{personalInfo.name}</p>
                      <p className="text-cyan-400 text-[10px] font-mono">B.Tech CSE · LPU</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      India
                    </span>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-around text-center">
                  <div>
                    <span className="block text-white text-base font-bold font-heading">4+</span>
                    <span className="text-[11px] text-slate-400 font-mono">Projects</span>
                  </div>
                  <div className="w-px h-6 bg-white/10" />
                  <div>
                    <span className="block text-cyan-400 text-base font-bold font-heading">16+</span>
                    <span className="text-[11px] text-slate-400 font-mono">Certs</span>
                  </div>
                  <div className="w-px h-6 bg-white/10" />
                  <div>
                    <span className="block text-indigo-400 text-base font-bold font-heading">2026</span>
                    <span className="text-[11px] text-slate-400 font-mono">Batch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Pillars */}
          <div data-aos="fade-left" data-aos-delay="200" className="lg:col-span-7 space-y-6">
            {/* Bio Paragraph */}
            <div className="p-6 rounded-2xl bg-[#0b0f19]/60 border border-white/10 backdrop-blur-md">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-4 font-normal">
                Hello! I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, a Computer Science student based in Madhya Pradesh, India. I specialize in bridging the gap between <strong className="text-cyan-300 font-medium">full-stack web applications</strong>, <strong className="text-indigo-300 font-medium">agentic AI systems</strong>, and <strong className="text-cyan-300 font-medium">data analytics</strong>.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether constructing code-aware RAG search tools with strict file-level citations, building low-latency real-time collaborative editors, or developing automated data visualization pipelines, I strive to write clean, type-safe, and production-ready code.
              </p>
            </div>

            {/* 3 Core Architecture Pillars */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Engineering Pillars</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pillars.map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#0b0f19]/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">{pillar.desc}</p>
                    <span className="inline-block text-[10px] font-mono text-cyan-400/90 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {pillar.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex items-center gap-4">
              <a 
                href="#skills" 
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 group"
              >
                <span>Explore Technical Stack</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <span className="text-slate-600">·</span>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white group"
              >
                <span>View Flagship Projects</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
