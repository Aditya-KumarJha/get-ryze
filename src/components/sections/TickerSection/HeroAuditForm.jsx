import React, { useState } from 'react';
import TextHover from '../../ui/TextHover';

const HeroAuditForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Audit submitted for:', email);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-r from-[#FF4801]/5 to-purple-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute top-0 right-0 w-150 h-150 opacity-30" style={{ transform: 'rotate(182.974deg)' }}>
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#FF4801]/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-350 mx-auto px-3 md:px-5 lg:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div style={{ opacity: 1, transform: 'none' }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black mb-2">
              Audit your <span className="text-[#FF4801]">ad account</span> instantly.
            </h2>
          </div>

          <div className="relative max-w-xl mx-auto" style={{ opacity: 1, transform: 'none' }}>
            <form onSubmit={handleSubmit} className="bg-white p-1.5 rounded-4xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 flex items-center gap-2 transform-gpu transition-transform duration-300 ease-out hover:scale-105 md:hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30">
              <div className="pl-2 md:pl-6 pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-5 h-5 text-zinc-400" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </div>

              <input
                type="email"
                placeholder="name@company.com"
                className="flex-1 bg-transparent text-[1rem] md:text-lg text-black placeholder:text-zinc-300 outline-none border-none md:py-3 min-w-0"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                className="bg-[#FF4801] hover:bg-[#ff5d1f] text-white px-4 md:px-8 py-3 rounded-3xl font-bold text-base transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 whitespace-nowrap disabled:opacity-70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scan-line w-4 h-4" aria-hidden="true">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                  <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                  <path d="M7 12h10"></path>
                </svg>
                <TextHover text="Audit Account" customClass="text-white !p-0 !m-0" />
              </button>
            </form>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-zinc-500 text-sm font-medium"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroAuditForm;
