import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'activities', 'certificates', 'softskills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Workflow', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Activities', target: 'activities' },
    { label: 'Certs', target: 'certificates' },
    { label: 'Contact', target: 'contact' },
  ];

  const hireMeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.emails.primary}&su=${encodeURIComponent('Hiring Inquiry – Portfolio')}&body=${encodeURIComponent('Hello Abhishek,\n\nI came across your portfolio and would like to discuss an opportunity with you.\n\nLooking forward to hearing from you.\n\nBest Regards,')}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4">
      <div 
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-8 py-3 flex items-center justify-between ${
          isScrolled 
            ? 'bg-[#06080f]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-[#0b0f19]/60 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group text-white font-heading font-extrabold text-xl tracking-tight"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-sm font-black shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform">
            A
          </span>
          <span className="tracking-wide text-slate-100 group-hover:text-cyan-400 transition-colors">
            {personalInfo.brandName}
            <span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target;
            return (
              <a
                key={link.target}
                href={`#${link.target}`}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={hireMeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-5 py-2 rounded-full text-xs font-semibold text-white overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 group-hover:opacity-90 transition-opacity"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-md bg-gradient-to-r from-cyan-400 to-indigo-500"></span>
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Hire Me</span>
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 mt-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto rounded-2xl bg-[#06080f]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl flex flex-col space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target;
            return (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-white/10">
            <a
              href={hireMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20"
            >
              <span>Hire Me</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
