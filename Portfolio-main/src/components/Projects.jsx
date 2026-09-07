import React, { useState } from 'react';
import { projects, socialLinks } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const flagship = projects.find(p => p.isFlagship) || projects[0];
  const secondary = projects.filter(p => p.id !== flagship.id);

  const filterProject = (p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & RAG') return p.badge.includes('AI') || p.techTags.some(t => t.includes('LangChain') || t.includes('API'));
    if (activeFilter === 'Real-Time & Full-Stack') return p.techTags.includes('React') || p.techTags.includes('Socket.io') || p.techTags.includes('Next.js');
    if (activeFilter === 'Enterprise') return p.badge.includes('Enterprise') || p.techTags.includes('Flask') || p.techTags.includes('SQLAlchemy');
    return true;
  };

  const filteredSecondary = secondary.filter(filterProject);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 bg-[#06080f] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
              <span>● 04</span>
              <span>ENGINEERING PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Featured <span className="gradient-text-cyan">Projects</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Real-world systems spanning code-aware RAG search engines, multi-user collaboration editors, and analytics architectures.
          </p>
        </div>

        {/* Filter Navigation */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap items-center gap-2 mb-12">
          {['All', 'AI & RAG', 'Real-Time & Full-Stack', 'Enterprise'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeFilter === tab
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-[#0b0f19]/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FLAGSHIP SPOTLIGHT CARD: GitHub Knowledge Assistant */}
        {(activeFilter === 'All' || activeFilter === 'AI & RAG') && (
          <div 
            data-aos="fade-up"
            data-aos-delay="150"
            className="mb-12 relative group rounded-3xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-indigo-500/30 to-cyan-500/20 shadow-2xl hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)] transition-all duration-500"
          >
            <div className="relative rounded-3xl bg-[#0b0f19]/90 backdrop-blur-2xl p-6 sm:p-10 overflow-hidden">
              {/* Background ambient glow inside card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Spotlight Details */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                      ⭐ FLAGSHIP SYSTEM
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20">
                      {flagship.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      ID: GKA-RAG-2026
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
                    {flagship.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {flagship.description}
                  </p>

                  {/* Architecture Feature Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="block text-cyan-400 font-mono text-xs font-semibold mb-0.5">Semantic Splitting</span>
                      <span className="text-[11px] text-slate-400">Function & class-boundary code chunking</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="block text-indigo-400 font-mono text-xs font-semibold mb-0.5">Line-Span Citations</span>
                      <span className="text-[11px] text-slate-400">Strict file-and-line evidence tracking</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="block text-emerald-400 font-mono text-xs font-semibold mb-0.5">SSE Real-Time</span>
                      <span className="text-[11px] text-slate-400">Low-latency token stream with explorer</span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {flagship.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-white/5 rounded-lg border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Quick Action Terminal Card */}
                <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
                  <div className="p-6 rounded-2xl bg-[#06080f]/90 border border-white/10 backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        DEPLOYMENT STATUS
                      </span>
                      <span className="text-cyan-400">LIVE</span>
                    </div>

                    <p className="text-xs text-slate-300 mb-6 font-mono leading-relaxed">
                      Chat with any public GitHub repo instantly. Tested with complex Next.js, FastAPI, and LangChain repositories.
                    </p>

                    <div className="space-y-3">
                      {flagship.links.demo && (
                        <a
                          href={flagship.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                          <ExternalLinkIcon />
                          <span>Launch Live Platform</span>
                        </a>
                      )}

                      {flagship.links.github && (
                        <a
                          href={flagship.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-cyan-500/40 text-xs font-mono font-medium transition-all"
                        >
                          <GitHubIcon />
                          <span>View Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECONDARY PROJECTS BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSecondary.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-6 rounded-2xl bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-xl hover:shadow-[0_15px_30px_rgba(6,182,212,0.1)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xl font-mono font-bold text-slate-600">
                    {project.number}
                  </span>
                </div>

                {/* Project Title */}
                <h4 className="text-xl font-heading font-bold text-white mb-3">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                  >
                    <GitHubIcon />
                    <span>Code</span>
                  </a>
                )}

                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium transition-colors"
                  >
                    <ExternalLinkIcon />
                    <span>Demo</span>
                  </a>
                ) : (
                  <span className="flex-1 flex items-center justify-center py-2 text-[10px] font-mono text-slate-500 bg-white/5 rounded">
                    Internal System
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom GitHub CTA Banner */}
        <div data-aos="fade-up" data-aos-delay="300" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0b0f19] border border-white/15 hover:border-cyan-500/50 text-white font-mono text-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300"
          >
            <GitHubIcon />
            <span>Explore All Repositories on GitHub</span>
            <svg className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
