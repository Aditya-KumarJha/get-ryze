import React from 'react';
import { motion } from 'framer-motion';
import AutonomousAI from './AutonomousAI';
import ChatGPTAds from './ChatGPTAds';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const AIShowcase = () => {
  return (
    <motion.section
      className="relative w-full z-10 bg-linear-to-b from-white to-zinc-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={containerVariants}
    >
      <div className="max-w-375 mx-auto px-3 md:px-5 lg:px-6">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <AutonomousAI />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ChatGPTAds />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AIShowcase;
