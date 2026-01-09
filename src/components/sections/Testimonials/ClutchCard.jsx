import React from 'react';

const ClutchCard = ({ name, role, content, avatar }) => {
  return (
    <div className="bg-white rounded-lg border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-100 overflow-hidden relative">
            <img
              alt={name}
              loading="lazy"
              className="object-cover w-full h-full"
              src={avatar}
            />
          </div>
          <div>
            <h4 className="font-bold text-[15px] text-zinc-900">{name}</h4>
            <p className="text-[12px] text-zinc-500">{role}</p>
          </div>
        </div>
        <img
          alt="Clutch Stars"
          loading="lazy"
          className="h-16 w-auto object-contain self-start -translate-y-5"
          src="/wall/clutch-stars.avif"
        />
      </div>
      <p className="text-[14px] text-zinc-700 leading-relaxed -mt-6.25">{content}</p>
    </div>
  );
};

export default ClutchCard;
