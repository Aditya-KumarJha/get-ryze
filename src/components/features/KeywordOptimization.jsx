import React, { useState, useEffect } from 'react';

const KeywordOptimization = () => {
  const baseKeywords = [
    { term: 'bmw x5 lease special', conv: 12, cpa: 43 },
    { term: 'cheap bmw parts ebay', conv: 0, cpa: 150 },
    { term: '2025 bmw i4 price', conv: 8, cpa: 35 },
    { term: 'audi q7 vs bmw x5', conv: 1, cpa: 85 },
    { term: 'bmw service near me', conv: 15, cpa: 28 },
    { term: 'free bmw wallpapers', conv: 0, cpa: 0 },
    { term: 'bmw m3 test drive', conv: 6, cpa: 55 },
    { term: 'how to fix bmw engine', conv: 0, cpa: 0 },
    { term: 'certified pre-owned x3', conv: 9, cpa: 49 },
    { term: 'mercedes dealership', conv: 0, cpa: 92 },
  ];

  const [scanningIndex, setScanningIndex] = useState(0);
  const [isScanningComplete, setIsScanningComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanningIndex(prev => {
        if (prev >= baseKeywords.length - 1) {
          setIsScanningComplete(true);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [baseKeywords.length]);

  useEffect(() => {
    if (!isScanningComplete) return;

    const restartTimer = setTimeout(() => {
      setScanningIndex(0);
      setIsScanningComplete(false);
    }, 3000);

    return () => clearTimeout(restartTimer);
  }, [isScanningComplete]);

  const keywords = baseKeywords.map((kw, idx) => {
    let status = 'PENDING';

    if (isScanningComplete) {
      status = idx % 2 === 0 ? 'KEYWORD' : 'NEGATIVE';
    } else if (idx === scanningIndex) {
      status = 'SCANNING';
    } else if (idx < scanningIndex) {
      status = idx % 2 === 0 ? 'KEYWORD' : 'NEGATIVE';
    }

    return {
      ...kw,
      status,
    };
  });

  const getStatusBadge = (status) => {
    if (status === 'KEYWORD') {
      return (
        <div className="w-20 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm animate-pop-in">
          <span className="text-[9px] font-black tracking-wide">KEYWORD</span>
        </div>
      );
    }
    if (status === 'NEGATIVE') {
      return (
        <div className="w-20 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center shadow-sm animate-pop-in">
          <span className="text-[9px] font-black tracking-wide">NEGATIVE</span>
        </div>
      );
    }
    if (status === 'SCANNING') {
      return (
        <div className="w-20 h-6 bg-blue-100 rounded-full flex items-center justify-center gap-1">
          <svg
            className="w-3 h-3 text-blue-500 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span className="text-blue-500 font-bold text-[9px]">Scanning</span>
        </div>
      );
    }
    return (
      <div className="w-20 h-6 bg-gray-100 rounded-full flex items-center justify-center">
        <span className="text-[9px] text-gray-400 font-bold">Pending</span>
      </div>
    );
  };

  const getConvColor = (conv) =>
    conv > 0 ? 'text-green-600' : 'text-gray-400';

  const getCPAColor = (cpa) => {
    if (cpa === 0) return 'text-gray-600';
    if (cpa > 80) return 'text-red-500';
    return 'text-gray-600';
  };

  return (
    <div className="relative aspect-[9/18.4] bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
      <div className="w-full h-full bg-white rounded-2xl p-6 pb-4 flex flex-col">
        <div className="flex-1 flex flex-col gap-3 overflow-hidden pt-4">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className={`flex items-center h-12 border-b border-gray-50 transition-all duration-500 ${
                keyword.status === 'SCANNING'
                  ? 'bg-blue-50/80 px-2 rounded-xl shadow-sm'
                  : 'px-0'
              }`}
            >
              <div className="w-[40%] pr-1">
                <div className="font-medium text-gray-800 text-xs truncate">
                  {keyword.term}
                </div>
              </div>
              <div className="w-[15%] text-right pr-1">
                <div className={`font-medium text-xs ${getConvColor(keyword.conv)}`}>
                  {keyword.conv}
                </div>
              </div>
              <div className="w-[15%] text-right pr-2">
                <div className={`font-medium text-xs ${getCPAColor(keyword.cpa)}`}>
                  ${keyword.cpa}
                </div>
              </div>
              <div className="w-[30%] flex justify-center">
                {getStatusBadge(keyword.status)}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center h-16 border-t border-gray-100 mt-4 text-xs font-bold text-gray-400 tracking-widest">
          <div className="w-[40%]">Search term</div>
          <div className="w-[15%] text-right pr-1">Conv</div>
          <div className="w-[15%] text-right pr-4">CPA</div>
          <div className="w-[30%] text-center">Action</div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[7%] bg-linear-to-b from-black/90 via-black/85 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-1 left-4 right-4 text-center z-20 pointer-events-none">
        <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide drop-shadow-md">
          Keyword optimization
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1.2px] bg-[#FF4801] z-20 pointer-events-none" />
    </div>
  );
};

export default KeywordOptimization;
