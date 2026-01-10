import React from 'react';
import { motion } from 'framer-motion';
import FlipText from '../../ui/FlipText';
import TextHover from '../../ui/TextHover';
import EmailInput from '../../ui/EmailInput';

const CaseStudiesHero = () => {
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

  return (
    <section className="w-full mt-30 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 relative bg-white">
      <motion.div 
        className="max-w-8xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="font-extrabold leading-none">
            {/* Desktop & Large screens: original layout */}
            <div className="hidden lg:block">
              <motion.div
                className="flex flex-wrap justify-center gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-8"
                variants={headingVariants}
              >
                <FlipText className="text-[#FF4801]">TOP BRANDS</FlipText>
                <FlipText className="text-black">IMPROVE</FlipText>
              </motion.div>
              <motion.div
                className="flex flex-wrap justify-center gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
                variants={headingVariants}
              >
                <FlipText className="text-black">ROAS WITH</FlipText>
                <FlipText className="text-[#FF4801]">RYZE</FlipText>
              </motion.div>
            </div>
            {/* Tablet: stacked layout, Mobile: custom layout */}
            <div className="block lg:hidden">
              {/* Mobile: custom 3-line layout */}
              <div className="block md:hidden">
                <motion.div
                  className="flex flex-wrap justify-center gap-2 text-5xl font-extrabold mb-3"
                  variants={headingVariants}
                >
                  <FlipText className="text-[#FF4801]">TOP BRANDS</FlipText>
                </motion.div>
                <motion.div
                  className="flex flex-wrap justify-center gap-2 text-5xl font-extrabold mb-3"
                  variants={headingVariants}
                >
                  <FlipText className="text-black">IMPROVE ROA</FlipText>
                </motion.div>
                <motion.div
                  className="flex flex-wrap justify-center gap-2 text-5xl font-extrabold"
                  variants={headingVariants}
                >
                  <FlipText className="text-black">WITH</FlipText>
                  <FlipText className="text-[#FF4801]">RYZE</FlipText>
                </motion.div>
              </div>
              {/* Tablet: previous stacked layout */}
              <div className="hidden md:block">
                <motion.div
                  className="flex flex-wrap justify-center gap-2 text-4xl md:text-7xl font-extrabold mb-4"
                  variants={headingVariants}
                >
                  <FlipText className="text-[#FF4801]">TOP BRANDS</FlipText>
                </motion.div>
                <motion.div
                  className="flex flex-wrap justify-center gap-2 text-4xl md:text-7xl font-extrabold mb-4"
                  variants={headingVariants}
                >
                  <FlipText className="text-black">IMPROVE</FlipText>
                </motion.div>
                <motion.div
                  className="flex flex-wrap justify-center gap-2 text-4xl md:text-7xl font-extrabold"
                  variants={headingVariants}
                >
                  <FlipText className="text-black">ROAS WITH</FlipText>
                  <FlipText className="text-[#FF4801]">RYZE</FlipText>
                </motion.div>
              </div>
            </div>
          </h2>
          <div className="mt-12 text-center text-2xl text-gray-500 mb-2">
            <p className="font-medium">Join thousands of brands simplifying ad management with AI</p>
          </div>
        </div>
        <motion.div 
          className="flex justify-center"
          variants={inputVariants}
        >
          <EmailInput />
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default CaseStudiesHero;
