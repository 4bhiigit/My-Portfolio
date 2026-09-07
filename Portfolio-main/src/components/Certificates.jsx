import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, index, isExpanded }) => (
  <a 
    href={cert.credentialUrl}
    target="_blank"
    rel="noopener noreferrer"
    data-aos={index < 6 ? "fade-up" : undefined}
    data-aos-delay={index < 6 ? index * 50 : undefined}
    className={`p-5 rounded-2xl bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 hover:bg-[#0f172a]/90 shadow-xl hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 ${
      index >= 6 ? 'animate-fade-in-up' : ''
    }`}
  >
    <div className="flex items-start gap-3.5 mb-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
        {cert.icon}
      </div>
      <div>
        <h4 className="text-sm font-heading font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-1">
          {cert.name}
        </h4>
        <span className="text-[11px] font-mono text-slate-400 block">
          {cert.issuer}
        </span>
      </div>
    </div>

    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-cyan-400/90">
      <span className="flex items-center gap-1 group-hover:underline">
        Verify Credential
        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </span>
      <span className="text-slate-600">ID VERIFIED</span>
    </div>
  </a>
);

const Certificates = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, [isExpanded]);

  const displayedCerts = isExpanded ? certificates.all : certificates.featured;

  return (
    <section id="certificates" className="relative py-28 px-6 md:px-12 bg-[#06080f] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
              <span>● 07</span>
              <span>VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Industry <span className="gradient-text-cyan">Certifications</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Accredited badges from Infosys Springboard, MongoDB University, NPTEL, and Coursera validating specialized skills.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {displayedCerts.map((cert, index) => (
            <CertificateCard 
              key={cert.name + index} 
              cert={cert} 
              index={index}
            />
          ))}
        </div>

        {/* Toggle Expansion CTA */}
        <div data-aos="fade-up" className="flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0b0f19] border border-white/15 hover:border-cyan-500/50 text-white text-xs font-mono font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all cursor-pointer"
          >
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{isExpanded ? "Collapse Certifications" : `View All Certifications (${certificates.all.length})`}</span>
            <svg className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
