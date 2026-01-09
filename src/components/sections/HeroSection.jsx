import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import EmailInput from '../ui/EmailInput';
import FlipText from '../ui/FlipText';
import { Suspense } from 'react';
const ImageCursorTrail = React.lazy(() => import('../ui/ImageCursorTrail'));

const HeroSection = () => {
    // Images from public folder and subfolders for cursor trail
    const trailImages = [
      "/marquee/caleyx-logo.avif",
      "/marquee/directly_logo.avif",
      "/marquee/hg_logo.avif",
      "/marquee/mos_logo1.avif",
      "/marquee/motif_digital.avif",
      "/marquee/pupil_logo1.avif",
      "/marquee/ritma_logo1.avif",
      "/marquee/tetra-logo.avif",
      "/marquee/villlyx_logo.avif",
      "/wall/5-stars-g2.avif",
      "/wall/angrez_google.avif",
      "/wall/angrez_SR.avif",
      "/wall/clutch-stars.avif",
      "/wall/face4_man.avif",
      "/wall/face5_woman.avif",
      "/wall/man_face1.avif",
      "/wall/man-face2.avif",
      "/wall/Trustpilot_Logo.avif",
      "/wall/wall-3.avif",
      "/wall/woman_face3.avif",
      "/wall/X-Logo1.avif",
    ];
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
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-visible">
      {/* Animated image trail behind content, only on desktop/tablet */}
      <div
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ImageCursorTrail
            items={trailImages}
            maxNumberOfImages={7}
            imgClass="w-24 h-24 opacity-70 mix-blend-multiply"
            distance={18}
            fadeAnimation={true}
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Main HeroSection content, stays above animation */}
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Desktop & Tablet View - Hidden on Mobile */}
        <div className="hidden sm:block">
          {/* Hero Heading */}
          <div className="mt-22 text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="md:pr-4 lg:pr-0 md:font-extrabold lg:font-extrabold leading-none">
              <motion.div
                className="flex justify-center gap-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-1 sm:mb-2 md:mb-2"
                variants={headingVariants}
              >
                <FlipText className="text-black">LET</FlipText>
                <FlipText className="text-[#FF4801]">AI MANAGE</FlipText>
              </motion.div>
              <motion.div
                className="md:mt-8 lg:mt-12 flex justify-center gap-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                variants={headingVariants}
              >
                <FlipText className="text-black">YOUR</FlipText>
                <FlipText className="text-[#FF4801]">ADS</FlipText>
              </motion.div>
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
              <motion.div
                className="flex justify-center gap-3 text-5xl mb-1"
                variants={headingVariants}
              >
                <FlipText className="text-black">LET</FlipText>
                <FlipText className="text-[#FF4801]">AI</FlipText>
              </motion.div>
              <motion.div
                className="flex justify-center gap-3 text-5xl mb-1"
                variants={headingVariants}
              >
                <FlipText className="mt-1 mb-1 text-[#FF4801]">MANAGE</FlipText>
              </motion.div>
              <motion.div
                className="flex justify-center gap-3 text-5xl"
                variants={headingVariants}
              >
                <FlipText className="text-black">YOUR</FlipText>
                <FlipText className="text-[#FF4801]">ADS</FlipText>
              </motion.div>
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
