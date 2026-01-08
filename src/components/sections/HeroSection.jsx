import React from 'react';
import { motion } from 'framer-motion';
import EmailInput from '../ui/EmailInput';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 0.6,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Desktop & Tablet View - Hidden on Mobile */}
        <div className="hidden sm:block">
          {/* Hero Heading */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="md:pr-4 lg:pr-0 md:font-extrabold lg:font-extrabold leading-none">
              <motion.span 
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black mb-1 sm:mb-2 md:mb-2"
                variants={headingVariants}
              >
                LET{' '}
                <span className="text-[#FF4801]">AI MANAGE</span>
              </motion.span>
              <motion.span 
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                variants={headingVariants}
              >
                <span className="text-black">YOUR </span>
                <span className="text-[#FF4801]">ADS</span>
              </motion.span>
            </h2>
          </div>

          {/* Email Input Section */}
          <motion.div 
            className="flex justify-center mb-12 md:mb-16"
            variants={inputVariants}
          >
            <EmailInput />
          </motion.div>

          {/* Partner Logos */}
          <motion.div 
            className="flex items-center justify-center gap-12 md:gap-16 lg:gap-20 xl:gap-24"
            variants={containerVariants}
          >
            <motion.img 
              src="/google-ads.avif" 
              alt="Google Ads" 
              className="h-8 md:h-10 lg:h-12 grayscale opacity-60 hover:opacity-80 transition-opacity"
              variants={logoVariants}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            />
            <motion.img 
              src="/meta.avif" 
              alt="Meta" 
              className="h-8 md:h-10 lg:h-12 grayscale opacity-60 hover:opacity-80 transition-opacity"
              variants={logoVariants}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            />
            <motion.img 
              src="/chatgpt.avif" 
              alt="ChatGPT" 
              className="h-8 md:h-10 lg:h-12 grayscale brightness-90 contrast-75 opacity-60 hover:opacity-80 transition-opacity"
              variants={logoVariants}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            />
            <motion.img 
              src="/perplexity.avif" 
              alt="Perplexity" 
              className="h-8 md:h-10 lg:h-12 grayscale opacity-60 hover:opacity-80 transition-opacity"
              variants={logoVariants}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            />
            <motion.img 
              src="/linkedin.avif" 
              alt="LinkedIn" 
              className="h-8 md:h-10 lg:h-12 grayscale opacity-60 hover:opacity-80 transition-opacity"
              variants={logoVariants}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            />
          </motion.div>
        </div>

        {/* Mobile View - Hidden on Desktop & Tablet */}
        <div className="block sm:hidden">
          {/* Hero Heading - Mobile */}
          <div className="mt-5 text-center mb-8">
            <h2 className="-tracking-widest font-extrabold leading-none">
              <motion.span 
                className="block text-6xl text-black mb-1"
                variants={headingVariants}
              >
                LET{' '}
                <span className="text-[#FF4801]">AI MANAGE</span>
              </motion.span>
              <motion.span 
                className="block text-6xl"
                variants={headingVariants}
              >
                <span className="text-black">YOUR </span>
                <span className="text-[#FF4801]">ADS</span>
              </motion.span>
            </h2>
          </div>

          {/* Email Input Section - Mobile */}
          <motion.div 
            className="flex justify-center px-2 mb-10"
            variants={inputVariants}
          >
            <EmailInput />
          </motion.div>

          {/* Partner Logos - Mobile */}
          <motion.div 
            className="flex items-center justify-center gap-6"
            variants={containerVariants}
          >
            <motion.img 
              src="/google-ads.avif" 
              alt="Google Ads" 
              className="h-7 grayscale opacity-60"
              variants={logoVariants}
            />
            <motion.img 
              src="/meta.avif" 
              alt="Meta" 
              className="h-7 grayscale opacity-60"
              variants={logoVariants}
            />
            <motion.img 
              src="/chatgpt.avif" 
              alt="ChatGPT" 
              className="h-7 grayscale brightness-90 contrast-75 opacity-60"
              variants={logoVariants}
            />
            <motion.img 
              src="/perplexity.avif" 
              alt="Perplexity" 
              className="h-7 grayscale opacity-60"
              variants={logoVariants}
            />
            <motion.img 
              src="/linkedin.avif" 
              alt="LinkedIn" 
              className="h-7 grayscale opacity-60"
              variants={logoVariants}
            />
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
