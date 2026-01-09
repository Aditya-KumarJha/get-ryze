import React from 'react';
import { motion } from 'framer-motion';
import KeywordOptimization from '../features/KeywordOptimization';
import CreativeGeneration from '../features/CreativeGeneration';
import CreativeAnalysis from '../features/CreativeAnalysis';
import AccountAudits from '../features/AccountAudits';
import BudgetReallocation from '../features/BudgetReallocation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const FeaturesShowcase = () => {
  return (
    <motion.div 
      className="w-full overflow-hidden relative" 
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-white to-transparent z-10" />
      <div className="max-w-400 mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Keyword Optimization - Hidden on mobile */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <KeywordOptimization />
          </motion.div>

          {/* Creative Generation */}
          <motion.div className="md:mt-12" variants={itemVariants}>
            <CreativeGeneration />
          </motion.div>

          {/* Creative Analysis - Hidden on mobile */}
          <motion.div className="hidden md:block mt-6" variants={itemVariants}>
            <CreativeAnalysis />
          </motion.div>

          {/* Account Audits */}
          <motion.div className="lg:mt-16" variants={itemVariants}>
            <AccountAudits />
          </motion.div>

          {/* Budget Reallocation - Hidden on mobile */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <BudgetReallocation />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default FeaturesShowcase;

