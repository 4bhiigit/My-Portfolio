import React from 'react';
import { internshipsList } from '../data/portfolioData';

const InternshipCard = ({ intern, index, isSingle }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className={`bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.01] hover:bg-black/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between ${
      isSingle ? 'w-full' : ''
    }`}
  >
    <div className={isSingle ? 'grid grid-cols-1 lg:grid-cols-3 gap-8' : ''}>
      
      {/* Left & Middle wrapper for single layout, otherwise single column stack */}
      <div className={isSingle ? 'lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8' : ''}>
        {/* Info Column */}
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase">
              {intern.duration}
            </span>
            <div className="flex gap-2">
              {intern.certificateUrl && (
                <a 
                  href={intern.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-black/40 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/15 transition-all flex items-center gap-1 hover:border-white/40"
                >
                  Certificate
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <span className="bg-white/10 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/15">
                Internship
              </span>
            </div>
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-black mb-1 tracking-tight">
            {intern.role}
          </h3>
          <p className={`text-red-200 text-sm font-black tracking-wide uppercase ${!isSingle && intern.description ? 'mb-4' : 'mb-6'}`}>
            {intern.organization}
          </p>
          {!isSingle && intern.description && (
            <p className="text-white/70 text-sm font-medium leading-relaxed mb-6">
              {intern.description}
            </p>
          )}
        </div>

        {/* Overview Column (for single layout) */}
        {isSingle && intern.description && (
          <div className="md:border-l md:border-white/10 md:pl-8">
            <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Overview:</h4>
            <p className="text-white/80 text-sm font-semibold leading-relaxed">
              {intern.description}
            </p>
          </div>
        )}
      </div>

      {/* Right Column: Skills Gained */}
      <div className={`mb-6 ${isSingle ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''}`}>
        <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Skills Gained:</h4>
        <ul className="text-white/90 text-sm font-medium space-y-1.5 pl-4 list-disc">
          {intern.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Technologies used */}
    <div className="pt-4 mt-6 border-t border-white/10">
      <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {intern.tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 text-xs font-mono font-bold text-white bg-white/10 rounded-full border border-white/10 hover:bg-white/20 transition-all"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Internships = () => {
  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Practical internships where I applied engineering principles and built real-world assets.
          </p>
        </div>

        {/* Internship Cards Grid */}
        <div className={`grid grid-cols-1 ${
          internshipsList.length === 1 
            ? 'lg:grid-cols-1' 
            : internshipsList.length === 2 
            ? 'lg:grid-cols-2' 
            : 'lg:grid-cols-3'
        } gap-6 md:gap-8`}>
          {internshipsList.map((intern, index) => (
            <InternshipCard 
              key={intern.organization} 
              intern={intern} 
              index={index} 
              isSingle={internshipsList.length === 1}
            />
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Internships;
