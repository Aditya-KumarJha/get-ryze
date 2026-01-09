import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Ticker from './Ticker';
import HeroAuditForm from './HeroAuditForm';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const TickerSection = () => {
  const [scrollDir, setScrollDir] = useState('down'); // 'down' or 'up'
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const threshold = 5;

    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (Math.abs(delta) < threshold) return;
      if (delta > 0) setScrollDir('down');
      else setScrollDir('up');
      lastY.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topDirection = scrollDir === 'down' ? 'left' : 'right';
  const bottomDirection = scrollDir === 'down' ? 'right' : 'left';

  return (
    <motion.section
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Ticker direction={topDirection} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <HeroAuditForm />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Ticker direction={bottomDirection} />
      </motion.div>
    </motion.section>
  );
};

export default TickerSection;
