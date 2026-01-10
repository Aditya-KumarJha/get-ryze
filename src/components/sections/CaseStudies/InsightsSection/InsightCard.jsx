import React from 'react';


const InsightCard = ({ category, title, description, author, date }) => {
  return (
    <div
      className="flex flex-col justify-between border-t-2 pt-6 pb-8 px-4 md:px-6 border-[#FF4801] min-h-45 transition-shadow duration-200 bg-white hover:shadow-lg group"
    >
      <div>
        <div className="text-xs tracking-widest text-gray-400 mb-2 uppercase group-hover:text-[#FF4801] transition-colors">{category}</div>
        <div className="text-lg md:text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#FF4801] transition-colors">{title}</div>
        <div className="text-sm text-gray-600 mb-4">{description}</div>
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">R</div>
        <div className="text-xs text-gray-700 font-medium">{author}</div>
        <span className="mx-2 text-gray-300">|</span>
        <div className="text-xs text-gray-400">{date}</div>
      </div>
    </div>
  );
};

export default InsightCard;
