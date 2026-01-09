import React from 'react';

const StatCard = ({ stat, description, logo }) => {
  return (
    <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 p-4 flex flex-col justify-start rounded-lg border border-zinc-100">
      {logo ? (
        <>
          <img
            alt={logo.alt}
            loading="lazy"
            className="h-9.5 w-auto object-contain object-left mb-2"
            src={logo.src}
          />
          <p className="text-xs font-medium text-zinc-600 leading-relaxed text-left">
            {description}
          </p>
        </>
      ) : (
        <>
          <h4 className="text-3xl font-bold text-black tracking-tighter mb-1">{stat}</h4>
          <p className="text-[18px] font-medium text-zinc-600 leading-tight">{description}</p>
        </>
      )}
    </div>
  );
};

export default StatCard;
