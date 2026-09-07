import React from 'react';
import { skillsContent } from '../data/portfolioData';

const stepIcons = [
  (
    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  (
    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 13l4 4L19 7" />
    </svg>
  )
];

const stepPillars = [
  "Requirements · Constraints · Target Persona",
  "Modular APIs · DB Schemas · Component Hierarchy",
  "Clean Code · Type Safety · Unit Testing",
  "Docker · Vector Indexing · Production Readiness"
];

const Services = () => {
  return (
    <section id="services" className="relative py-28 px-6 md:px-12 bg-[#06080f] overflow-hidden">
      {/* Background Decorative Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span>● 03</span>
            <span>ENGINEERING PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            How Ideas Become <span className="gradient-text-cyan">Shippable Software</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A structured, repeatable engineering workflow designed for maintainability, speed, and architectural robustness.
          </p>
        </div>

        {/* 4-Stage Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {skillsContent.cards.map((card, index) => (
            <div
              key={card.number}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative group p-6 rounded-2xl bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Top Row: Index Badge & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {card.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                    {stepIcons[index]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {card.text}
                </p>
              </div>

              {/* Step Sub-deliverables */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-cyan-400/80 block">
                  {stepPillars[index]}
                </span>
              </div>

              {/* Active Indicator dot */}
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#06b6d4]" />
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="400"
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <p className="text-sm text-slate-200 font-mono">
              Ready to construct end-to-end applications from scratch or refactor legacy codebases.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-xs font-mono font-semibold px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
          >
            Start a Conversation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
