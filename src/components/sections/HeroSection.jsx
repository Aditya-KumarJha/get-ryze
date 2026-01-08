import React from 'react';
import EmailInput from '../ui/EmailInput';

const HeroSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Desktop & Tablet View - Hidden on Mobile */}
        <div className="hidden sm:block">
          {/* Hero Heading */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="md:pr-4 lg:pr-0 md:font-extrabold lg:font-extrabold leading-none">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black mb-1 sm:mb-2 md:mb-2">
                LET{' '}
                <span className="text-[#FF4801]">AI MANAGE</span>
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                <span className="text-black">YOUR </span>
                <span className="text-[#FF4801]">ADS</span>
              </span>
            </h2>
          </div>

          {/* Email Input Section */}
          <div className="flex justify-center">
            <EmailInput />
          </div>
        </div>

        {/* Mobile View - Hidden on Desktop & Tablet */}
        <div className="block sm:hidden">
          {/* Hero Heading - Mobile */}
          <div className="mt-5 text-center mb-8">
            <h2 className="-tracking-widest font-extrabold leading-none">
              <span className="block text-6xl text-black mb-1">
                LET{' '}
                <span className="text-[#FF4801]">AI MANAGE</span>
              </span>
              <span className="block text-6xl">
                <span className="text-black">YOUR </span>
                <span className="text-[#FF4801]">ADS</span>
              </span>
            </h2>
          </div>

          {/* Email Input Section - Mobile */}
          <div className="flex justify-center px-2">
            <EmailInput />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
