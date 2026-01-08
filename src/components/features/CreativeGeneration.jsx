import React from 'react';

const CreativeGeneration = () => {
  return (
    <div className="relative aspect-[9/18.4] bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm group cursor-pointer transform md:scale-95 lg:scale-100">
      <video
        src="/video.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 right-0 h-[7%] bg-linear-to-b from-black/90 via-black/85 via-70% to-transparent z-10 pointer-events-none" />
      <div className="absolute top-1 left-4 right-4 text-center z-20 pointer-events-none">
        <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide leading-tight block drop-shadow-md">
          Creative generation
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1.2px] bg-[#FF4801] z-20 pointer-events-none" />
    </div>
  );
};

export default CreativeGeneration;

