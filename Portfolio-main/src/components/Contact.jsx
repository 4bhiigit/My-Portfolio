import React, { useRef, useState } from 'react';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    const firstName = form.querySelector('#firstName')?.value || '';
    const lastName = form.querySelector('#lastName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      form.reportValidity?.();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const triggerMailtoFallback = () => {
      const mailtoSubject = encodeURIComponent(`Portfolio Contact from ${firstName} ${lastName}`);
      const mailtoBody = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:${personalInfo.emails.primary}?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      const tempLink = document.createElement('a');
      tempLink.href = mailtoLink;
      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);

      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 4000);
    };

    const isConfigured = 
      emailjsConfig.serviceId && 
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId && 
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey && 
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      triggerMailtoFallback();
      return;
    }

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.warn('EmailJS delivery failed, falling back to mail client:', error);
      triggerMailtoFallback();
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 bg-[#06080f] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <span>● 09</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Let's Engineer Something <span className="gradient-text-cyan">Remarkable</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project, role opening, or question? Send a message directly or connect across professional channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & Status */}
          <div data-aos="fade-right" data-aos-delay="100" className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 shadow-xl space-y-6">
              
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Primary Inbox
                </span>
                <a 
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="text-white hover:text-cyan-400 font-mono text-sm sm:text-base font-semibold transition-colors flex items-center gap-2"
                >
                  <span>{personalInfo.emails.primary}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Location
                </span>
                <p className="text-slate-200 text-sm font-medium">
                  {personalInfo.location}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Response Window
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Direct Connections
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2"
                  >
                    <span>LinkedIn</span>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2"
                  >
                    <span>GitHub</span>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2"
                  >
                    <span>Instagram</span>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Glass Console Form */}
          <div data-aos="fade-left" data-aos-delay="200" className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-mono text-slate-300 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="first_name" 
                      required
                      placeholder="e.g. Alex"
                      className="w-full px-4 py-3 rounded-xl bg-[#06080f]/90 border border-white/10 text-white placeholder-slate-500 text-sm font-normal focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-xs font-mono text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="last_name" 
                      placeholder="e.g. Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-[#06080f]/90 border border-white/10 text-white placeholder-slate-500 text-sm font-normal focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email" 
                    required
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#06080f]/90 border border-white/10 text-white placeholder-slate-500 text-sm font-normal focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2">
                    Project Brief or Inquiry *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required
                    placeholder="Tell me about your project, timeline, or open opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-[#06080f]/90 border border-white/10 text-white placeholder-slate-500 text-sm font-normal focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Consent & Submit */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-normal">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      defaultChecked 
                      className="rounded border-white/20 bg-transparent text-cyan-500 focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="consent" className="cursor-pointer">
                      Allow direct contact regarding this inquiry
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`px-7 py-3.5 rounded-xl font-semibold text-xs tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                      status === 'sending'
                        ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                        : status === 'success'
                        ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                        : status === 'error'
                        ? 'bg-rose-600 text-white'
                        : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    {status === 'sending' && (
                      <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    )}
                    <span>
                      {status === 'sending'
                        ? 'Dispatching...'
                        : status === 'success'
                        ? 'Message Dispatched ✓'
                        : status === 'error'
                        ? 'Submission Failed — Try Again'
                        : 'Dispatch Message'}
                    </span>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
