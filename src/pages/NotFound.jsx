import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0f19] text-white">
      
      {/* Animated background glow */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-50 -right-50 w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* 404 */}
        <h1 className="text-[9rem] md:text-[11rem] font-extrabold tracking-tight leading-none bg-linear-to-b from-white to-white/30 bg-clip-text text-transparent animate-fade-up">
          404
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-white/80 animate-fade-up delay-200">
          You’ve wandered off the map.
        </p>

        <p className="mt-2 text-sm md:text-base text-white/50 animate-fade-up delay-300">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        {/* Actions */}
        <div className="mt-10 flex gap-4 animate-fade-up delay-500">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold shadow-lg shadow-blue-600/30 hover:scale-105"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Floating grid / noise effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] background-size:24px_24px" />
    </div>
  );
};

export default NotFound;
