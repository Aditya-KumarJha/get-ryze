import React from 'react';

const Ticker = ({ direction = 'left' }) => {
  const animClass = direction === 'left' ? 'animate-ticker-left' : 'animate-ticker-right';

  return (
    <div className="w-full border-t border-[#FF4801]/10 py-4 overflow-hidden bg-[#FF4801] text-white">
      <div className="max-w-350 mx-auto px-3 md:px-5 lg:px-6">
        <div className={`flex whitespace-nowrap ${animClass} w-max`}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div className="flex items-center gap-8 mx-8" key={i}>
              <span className="text-xl font-bold uppercase tracking-tight">2000+ CLIENTS</span>
              <span className="text-xl">•</span>
              <span className="text-xl font-bold uppercase tracking-tight">700+ AGENCIES</span>
              <span className="text-xl">•</span>
              <span className="text-xl font-bold uppercase tracking-tight">23+ COUNTRIES</span>
              <span className="text-xl">•</span>
              <span className="text-xl font-bold uppercase tracking-tight">$500M+ AD SPEND MANAGED</span>
              <span className="text-xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
