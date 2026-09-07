import React from 'react';
import { leadershipList } from '../data/portfolioData';

const badgeStyles = {
  Hackathon: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  Cybersecurity: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  Esports: "bg-amber-500/15 text-amber-300 border-amber-500/30"
};

const Leadership = () => {
  return (
    <section id="activities" className="relative py-28 px-6 md:px-12 bg-[#06080f] overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span>● 06</span>
            <span>ACTIVITIES & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Competitive & <span className="gradient-text-cyan">Leadership Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hackathons, cybersecurity Capture-The-Flag challenges, and competitive team captaincy under pressure.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipList.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="p-6 rounded-2xl bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${badgeStyles[item.badge] || 'bg-white/10 text-slate-300 border-white/20'}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400 mb-4">
                  {item.role}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VERIFIED RECORD</span>
                <span className="text-cyan-400/80">LPU Campus</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
