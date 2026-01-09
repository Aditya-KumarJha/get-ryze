import React from 'react';

const CampaignCard = () => {
  return (
    <div className="bg-[#F5F5F7] rounded-lg p-6 flex flex-col gap-6 hover:bg-[#F0F0F2] transition-colors duration-500">
      <h3 className="text-lg font-medium text-black pl-2">
        Set up and launch campaigns
      </h3>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden aspect-[1/0.72]">
        <div className="w-full h-full bg-white relative overflow-hidden font-sans rounded-2xl p-4">
          <div className="w-full h-full bg-white flex items-center justify-center">
            <div className="flex items-center gap-1 scale-[0.7] origin-center">
              {/* Left Card */}
              <div className="relative z-10">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col w-60">
                  <div className="flex items-center justify-between px-3 py-2.5 bg-white">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="w-6 h-6 rounded-full bg-[#06373A] flex items-center justify-center shrink-0">
                        <span className="text-[8px] font-bold text-white tracking-tighter">
                          AG
                        </span>
                      </div>
                      <span className="font-medium text-gray-800 truncate text-sm">
                        Winning Ad
                      </span>
                    </div>

                    <svg
                      className="w-5 h-5 text-[#E4405F]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                  </div>

                  <div className="relative group cursor-pointer bg-gray-100 aspect-[4/2.5] overflow-hidden">
                    <img
                      src="/marketer/agi1_1.png"
                      alt="Winning Ad"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 text-gray-900 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-4 right-4 pointer-events-none">
                      <span className="text-4xl font-black text-white/90 drop-shadow-md tracking-tighter">
                        AG
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="w-24 h-64 flex items-center justify-center relative">
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  viewBox="0 0 100 300"
                >
                  <defs>
                    <marker
                      id="arrow"
                      markerWidth="6"
                      markerHeight="6"
                      refX="5"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <path d="M0,0 L0,6 L6,3 z" fill="#9CA3AF" />
                    </marker>

                    <marker
                      id="arrow-mid"
                      markerWidth="6"
                      markerHeight="6"
                      refX="3"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <path d="M0,0 L6,3 L0,6 z" fill="#9CA3AF" />
                    </marker>
                  </defs>

                  <path
                    d="M -10,150 L 20,150"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrow-mid)"
                  />
                  <path
                    d="M 50,75 L 50,225"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 26,150 L 50,150"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 50,75 L 85,75"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    d="M 50,225 L 85,225"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrow)"
                  />
                </svg>
              </div>

              {/* Right Variants */}
              <div className="flex flex-col gap-6">
                {['Hook Variant 1', 'Hook Variant 2'].map((title, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col w-48"
                  >
                    <div className="flex items-center justify-between px-3 py-2.5 bg-white">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <div className="w-6 h-6 rounded-full bg-[#06373A] flex items-center justify-center shrink-0">
                          <span className="text-[8px] font-bold text-white tracking-tighter">
                            AG
                          </span>
                        </div>
                        <span className="font-medium text-gray-800 truncate text-xs">
                          {title}
                        </span>
                      </div>
                    </div>

                    <div className="relative group cursor-pointer bg-gray-100 aspect-2/1 overflow-hidden">
                      <img
                        src={`/marketer/ag1_${idx + 2}.png`}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors duration-300">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-5 h-5 text-gray-900 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
