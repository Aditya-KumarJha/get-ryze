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

                    {/* Instagram icon for winning ad */}
                    <span className="w-5 h-5 flex items-center justify-center">
                      <svg viewBox="0 0 448 512" fill="#E4405F" width="20" height="20" aria-label="Instagram">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9S388.6 7.6 353.3 5.9C317.7 4.2 284.3 0 224.1 0S130.5 4.2 94.9 5.9C59.6 7.6 28.2 15.8 2 41.9S7.6 123.4 5.9 158.7C4.2 194.3 0 227.7 0 287.9s4.2 93.6 5.9 129.2c1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.6 1.7 69 5.9 129.2 5.9s93.6-4.2 129.2-5.9c35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.6 5.9-69 5.9-129.2s-4.2-93.6-5.9-129.2zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.2 9s-102.8 2.7-132.2-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.2s-2.7-102.8 9-132.2c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.2-9s102.8-2.7 132.2 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.2s2.7 102.8-9 132.2z" />
                      </svg>
                    </span>
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
