import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#06080f]">
      {/* Dynamic Futuristic Canvas & Cyber Grids */}
      <div className="absolute inset-0 bg-[#06080f]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06080f]/60 to-[#06080f] z-10 pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-25 z-10 pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-dots opacity-20 z-10 pointer-events-none" />

      {/* Ambient Glowing Orbs */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Left Floating Social Dock (Desktop) */}
      <aside aria-label="Social Profiles" className="hidden lg:flex flex-col gap-4 fixed left-6 top-1/2 -translate-y-1/2 z-40 p-2.5 rounded-2xl bg-[#0b0f19]/70 backdrop-blur-xl border border-white/10 shadow-2xl">
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2.5 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
          aria-label="GitHub Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2.5 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
          aria-label="LinkedIn Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2.5 rounded-xl text-slate-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-200"
          aria-label="Instagram Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
      </aside>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
        
        {/* Left Side: Headline & CTAs */}
        <div className="max-w-2xl">
          {/* Status Badge */}
          <div 
            data-aos="fade-down"
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono tracking-wide mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>Available for Full-Stack & AI Roles</span>
          </div>

          {/* Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-5"
          >
            Hi, I'm <span className="text-white">{personalInfo.firstName}</span> <br />
            <span className="gradient-text-cyan">
              {personalInfo.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal"
          >
            {heroContent.subtitle}
          </p>

          {/* Tech Tag Pills */}
          <div 
            data-aos="fade-up"
            data-aos-delay="250"
            className="flex flex-wrap items-center gap-2 mb-8"
          >
            {['Agentic AI & RAG', 'Full Stack React / Node', 'Python & Data Analytics', 'System Architecture'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-white/5 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary Button */}
            <a 
              href={heroContent.ctaPrimary.href}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
            >
              <span>{heroContent.ctaPrimary.text}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Secondary Button */}
            <a 
              href={heroContent.ctaSecondary.href}
              className="px-6 py-3 rounded-xl bg-[#0b0f19]/80 border border-white/15 text-slate-200 font-semibold text-sm hover:text-white hover:border-cyan-500/50 hover:bg-[#0f172a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 backdrop-blur-md"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume Button */}
            <a 
              href={heroContent.ctaResume.href}
              download
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 text-sm font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Developer Telemetry Card */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-full lg:w-auto flex justify-center lg:justify-end"
        >
          <div className="relative group w-full max-w-md">
            {/* Outer Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-indigo-500/25 to-purple-500/25 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            
            {/* Console Frame */}
            <div className="relative rounded-3xl bg-[#0b0f19]/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl space-y-4">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-400 ml-1">system_node.tsx</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Code Snippet / Spec Card */}
              <div className="font-mono text-xs space-y-2 py-1">
                <p className="text-slate-500">// Core Candidate Specifications</p>
                <div className="p-3 rounded-xl bg-[#06080f]/80 border border-white/5 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">candidate:</span>
                    <span className="text-cyan-300 font-semibold">"{personalInfo.name}"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">role:</span>
                    <span className="text-indigo-300">"Full Stack & AI Engineer"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">education:</span>
                    <span className="text-slate-200">"B.Tech CSE · 2026 Batch"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">focus:</span>
                    <span className="text-emerald-300">"Agentic AI · RAG · Web Apps"</span>
                  </div>
                </div>
              </div>

              {/* Live Metric Badges */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono">
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="block text-base font-bold font-heading text-white">4+</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Projects</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="block text-base font-bold font-heading text-cyan-400">16+</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Certs</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="block text-base font-bold font-heading text-indigo-400">LPU</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Campus</span>
                </div>
              </div>

              {/* Quick Action Footer */}
              <a 
                href="#contact"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-600/10 hover:from-cyan-500/20 hover:to-indigo-600/20 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium flex items-center justify-between transition-all duration-200 group/btn"
              >
                <span className="flex items-center gap-2">
                  <span className="text-cyan-400">❯</span> Initiate Connection
                </span>
                <span className="text-slate-400 group-hover/btn:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden md:flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-slate-500/60 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
