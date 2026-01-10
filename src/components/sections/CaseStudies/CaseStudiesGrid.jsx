import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    href: '/case-studies/motif',
    img: '/CaseStudies/case-cover4.avif',
    alt: 'Motif used Ryze audits to win new retainers',
    title: 'Motif used Ryze audits to win new retainers',
    desc: 'Turned audits into a repeatable sales asset—faster audits, clearer proof, and stronger sales conversations.'
  },
  {
    href: '/case-studies/sanar-ai',
    img: '/CaseStudies/case-cover2.avif',
    alt: 'Sanar AI increased Google Search ROAS to 4.3x in 8 weeks',
    title: 'Sanar AI increased Google Search ROAS to 4.3x in 8 weeks',
    desc: 'Turned category momentum into predictable growth—without adding headcount or slowing product velocity.'
  },
  {
    href: '/case-studies/ashley-furniture',
    img: '/CaseStudies/case-cover3.avif',
    alt: 'Ashley Furniture improved ROAS by running Google + Meta on autopilot',
    title: 'Ashley Furniture improved ROAS by running Google + Meta on autopilot',
    desc: 'E-commerce performance across Search, Shopping/PMax, and Meta with weekly automated optimization cycles.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const CaseStudiesGrid = () => {
  return (
    <section className="pt-24 pb-8 px-20">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.a
              href={study.href}
              key={study.title}
              className="group cursor-pointer h-full flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="mb-6 aspect-4/3 rounded overflow-hidden group-hover:scale-105 transition-transform duration-300 relative bg-zinc-100">
                <img
                  alt={study.alt}
                  loading="lazy"
                  className="object-cover object-right"
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                  src={study.img}
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#FF4801] transition-colors">
                {study.title}
              </h3>
              <p className="text-md text-zinc-600 line-clamp-3">
                {study.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
