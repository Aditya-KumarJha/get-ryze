import React from 'react';
import { motion } from 'framer-motion';
import CampaignCard from './CampaignCard';
import SuggestionsList from './SuggestionsList';
import ReportsPanel from './ReportsPanel';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const MarketerSection = () => {
  return (
    <motion.section
      className="py-32 bg-white relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={containerVariants}
    >
      <div className="max-w-350 mx-auto px-3 md:px-5 lg:px-6">
        <div className="text-center mb-24" style={{ opacity: 1, transform: 'none' }}>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6">An <span className="text-[#FF4801]">AI marketer</span> that does it all for you</h2>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
          <motion.div variants={itemVariants}><CampaignCard /></motion.div>
          <motion.div variants={itemVariants}><SuggestionsList /></motion.div>
          <motion.div variants={itemVariants}><ReportsPanel /></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MarketerSection;
