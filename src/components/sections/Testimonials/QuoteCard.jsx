import React from 'react';

const QuoteCard = ({ quote, author, role }) => {
  return (
    <div className="bg-black rounded-lg p-5 md:p-6 relative overflow-hidden min-h-37.5 flex flex-col justify-center">
      <div className="absolute bottom-0 left-0 w-32 h-12 bg-linear-to-tr from-zinc-800 to-zinc-900 rounded-tr-[3rem] opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-32 h-12 bg-linear-to-tl from-zinc-800 to-zinc-900 rounded-tl-[3rem] opacity-80"></div>
      <h3 className="relative z-10 text-lg md:text-xl font-black tracking-tighter text-white leading-[1.1] uppercase text-center">
        "{quote}"
      </h3>
      <p className="relative z-10 text-zinc-500 text-center text-xs font-bold tracking-widest mt-4 uppercase">
        {author}, {role}
      </p>
    </div>
  );
};

export default QuoteCard;
