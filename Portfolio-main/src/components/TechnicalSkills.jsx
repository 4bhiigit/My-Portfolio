import React, { useState } from 'react';
import { technicalSkills } from '../data/portfolioData';

const categoryIcons = {
  "Programming Languages": (
    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "Frameworks & Libraries": (
    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  "Tools, Platforms & Concepts": (
    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
};

const SkillProgress = ({ name, level }) => (
  <div className="group/item">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-slate-200 text-xs sm:text-sm font-medium group-hover/item:text-cyan-300 transition-colors">
        {name}
      </span>
      <span className="text-cyan-400/90 text-xs font-mono font-semibold">
        {level}%
      </span>
    </div>
    <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-white/5">
      <div 
        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(6,182,212,0.4)]"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const TechnicalSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = technicalSkills.categories;
  const filteredCategories = selectedCategory === 'All' 
    ? categories 
    : categories.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 bg-[#06080f] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
              <span>● 02</span>
              <span>TECHNICAL STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Tools & <span className="gradient-text-cyan">Technologies</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Hands-on technical proficiency across core programming languages, modern web frameworks, data analysis toolkits, and DevOps platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap items-center gap-2 mb-10">
          {['All', ...categories.map(c => c.title)].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedCategory(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === tab
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-[#0b0f19]/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <div 
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-6 rounded-2xl bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 shadow-xl hover:shadow-[0_15px_30px_rgba(6,182,212,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                      {categoryIcons[category.title] || categoryIcons["Programming Languages"]}
                    </div>
                    <h3 className="text-white font-heading font-bold text-base">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    {category.skills.length} SKILLS
                  </span>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillProgress key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              {/* Bottom Quick Chips */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {category.skills.slice(0, 4).map((s) => (
                  <span key={s.name} className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
