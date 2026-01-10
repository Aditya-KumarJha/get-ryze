import React, { useState, useEffect } from 'react';

const CreativeAnalysis = () => {
  const analysisItems = [
    {
      title: 'CTA',
      basePercentage: 44,
      minPercentage: 43,
      maxPercentage: 46,
      color: 'red',
      position: 'top-[12%] right-[2%]',
      delay: '100ms',
      feedback: [
        'Too generic—offers no benefit or reason to click',
        'Weak contrast against the dark overlay',
      ],
    },
    {
      title: 'Visual',
      basePercentage: 90,
      minPercentage: 87,
      maxPercentage: 90,
      color: 'green',
      position: 'top-[52%] left-[2%]',
      delay: '300ms',
      feedback: [
        'Eye-catching and on-brand',
        'Text contrast could be better',
      ],
    },
    {
      title: 'Copy',
      basePercentage: 68,
      minPercentage: 65,
      maxPercentage: 68,
      color: 'orange',
      position: 'bottom-[5%] right-[2%]',
      delay: '500ms',
      feedback: [
        'Lacks benefit-first phrasing',
        'Generic ("Shop Men\'s Running Shoes")',
      ],
    },
  ];

  const [percentages, setPercentages] = useState(
    analysisItems.map(item => item.basePercentage)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentages(prev =>
        prev.map((_, index) => {
          const item = analysisItems[index];
          const range = item.maxPercentage - item.minPercentage;
          const time = Date.now() / 1000;
          const offset = Math.sin(time * 2 + index) * (range / 2);
          return Math.round(item.minPercentage + range / 2 + offset);
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getColorClass = (color) => {
    const colors = {
      red: 'bg-red-500',
      green: 'bg-green-500',
      orange: 'bg-orange-500',
    };
    return colors[color] || 'bg-gray-500';
  };

  return (
    <div className="relative aspect-[9/18.4] bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm transform md:scale-95 lg:scale-100">
      <div className="w-full h-full overflow-hidden">
        <div className="relative w-full h-full overflow-hidden shadow-2xl bg-zinc-50 rounded-2xl">
          
          {/* Image (always visible) */}
          <div className="absolute inset-0 z-10">
            <img
              src="/base44.webp"
              alt="Running Shoes Ad"
              className="w-full h-full object-contain object-bottom transform scale-[1.28] translate-y-10 origin-bottom transition-transform duration-1000 ease-out saturate-[0.85] brightness-[1.02] hover:scale-[1.3] hover:translate-y-8"
            />
            <div className="absolute inset-0 bg-white/15 pointer-events-none" />
          </div>

          {/* Analyze Ad Button */}
          <div className="absolute top-[20%] left-[4%] z-30 animate-float">
            <div className="relative bg-gray-900 text-white text-[9px] font-semibold px-3 py-1.5 rounded-full shadow-[0_10px_20px_-5px_rgba(0,0,0,0.4)] border border-white/10 tracking-wide">
              Analyze Ad
              <div className="absolute -bottom-1 left-4 w-2 h-2 bg-gray-900 transform rotate-45 border-r border-b border-white/10" />
            </div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-full left-4 mt-2 w-5 h-5 text-white drop-shadow-lg"
            >
              <path
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                fill="currentColor"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Analysis Cards */}
          {analysisItems.map((item, index) => (
            <div
              key={index}
              className={`absolute bg-white p-2 rounded-xl shadow-xl w-40 z-20 transform transition-all duration-700 ease-out animate-float ${item.position}`}
              style={{ animationDelay: item.delay }}
            >
              <div className="flex justify-between items-end mb-1">
                <span className="font-bold text-gray-900 text-xs">{item.title}</span>
                <span className="font-bold text-gray-900 text-xs tabular-nums transition-all duration-100">
                  {percentages[index]}%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-0.5 mb-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full relative overflow-hidden transition-all duration-100 ease-in-out ${getColorClass(item.color)}`}
                  style={{ width: `${percentages[index]}%` }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent w-full h-full animate-shimmer" />
                </div>
              </div>

              <ul className="space-y-0.5">
                {item.feedback.map((feedback, idx) => (
                  <li key={idx} className="flex items-start text-[9px] leading-3 text-gray-700">
                    <span className="mr-1 text-gray-400">•</span>
                    {feedback}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[7%] bg-linear-to-b from-black/90 via-black/85 via-70% to-transparent z-10 pointer-events-none" />
      <div className="absolute top-1 left-4 right-4 text-center z-20 pointer-events-none">
        <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide leading-tight block drop-shadow-md">
          Creative analysis
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1.2px] bg-[#FF4801] z-20 pointer-events-none" />
    </div>
  );
};

export default CreativeAnalysis;
