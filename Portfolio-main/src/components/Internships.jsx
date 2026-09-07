import React from 'react';
import { internshipsList } from '../data/portfolioData';

const Internships = () => {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 bg-[#06080f] overflow-hidden">
      {/* Background Subtle Gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
              <span>● 05</span>
              <span>PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Work Experience & <span className="gradient-text-cyan">Training</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Rigorous hands-on full-stack development, server-side REST API architecture, and database integrations.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {internshipsList.map((intern, index) => (
            <div
              key={intern.organization}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="p-8 sm:p-10 rounded-3xl bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-2xl transition-all duration-300 relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Organization & Role */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      SUMMER TRAINING
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {intern.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                    {intern.role}
                  </h3>

                  <p className="text-sm font-mono text-cyan-400 font-medium">
                    {intern.organization}
                  </p>

                  {/* Certificate Link */}
                  {intern.certificateUrl && (
                    <div className="pt-2">
                      <a
                        href={intern.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/15 hover:border-cyan-500/40 text-xs font-mono text-slate-200 hover:text-white transition-all group/btn"
                      >
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>View Verified Certificate</span>
                        <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Key Deliverables & Skills */}
                <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Overview & Deliverables</h4>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                      {intern.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Core Competencies Developed</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {intern.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/5 p-2 rounded-lg border border-white/5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">Technology Ecosystem</h4>
                    <div className="flex flex-wrap gap-2">
                      {intern.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-white/5 rounded-md border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Internships;
