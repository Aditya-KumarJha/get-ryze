import React from "react";
import { motion } from 'framer-motion';
import { Heart } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import TwitterCard from "./TwitterCard";
import ImageCard from "./ImageCard";
import QuoteCard from "./QuoteCard";
import StatCard from "./StatCard";
import ClutchCard from "./ClutchCard";

const Testimonials = () => {
  const testimonials = {
    rogerDunn: {
      name: "Roger Dunn",
      role: "Global Performance Lead - Rivert",
      platform: "G2",
      content: "We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy",
      logo: "/wall/g2-logo.png",
      avatar: "/wall/man_face1.avif",
      engagement: {
        type: "g2"
      }
    },
    danielAmezquita: {
      name: "Daniel Amezquita",
      role: "Global Ads Strategy - Glava",
      platform: "LinkedIn",
      content: "Broke down performance by asset—thumbnails, headlines, everything. Suggested swaps based on real data. Our CTR basically doubled.",
      logo: "/wall/linkedin (1).avif",
      avatar: "/wall/man-face2.avif",
      engagement: {
        type: "linkedin",
        likes: 245,
        comments: 42
      }
    },
    danielRoser: {
      name: "Daniel Roser",
      role: "GB • 7 reviews",
      platform: "Trustpilot",
      content: "Found wasted spend in search terms we'd never have caught manually. Cut those, reallocated budget. ROAS up 45%",
      logo: "/wall/Trustpilot_Logo.avif",
      avatar: "/wall/face4_man.avif",
      engagement: {
        type: "trustpilot"
      }
    }
  };

  const twitterData = {
    name: "Gabriela K.",
    handle: "gabri_isleia",
    time: "3h",
    content: "Our agency does audits for potential clients 5x faster now. Used to take days, now it's like an hour. Way easier to win new business",
    verified: true,
    stats: {
      replies: 2,
      likes: 2,
      views: 102
    }
  };

  const clutchData = {
    name: "Elena M.",
    role: "CMO @ TechFlow",
    content: "Caught that our conversion tracking was double-counting. We had no idea for like 3 months. Fixed it and everything made way more sense",
    avatar: "/wall/face5_woman.avif"
  };

  return (
    <motion.section 
      className="py-16 bg-[#FAFAFA]" 
      initial="hidden" 
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ 
        hidden: { opacity: 0 }, 
        visible: { 
          opacity: 1, 
          transition: { 
            staggerChildren: 0.15, 
            delayChildren: 0.2 
          } 
        } 
      }}
    >
      <div className="max-w-350 mx-auto px-3 md:px-5 lg:px-6">
        {/* Header */}
        <motion.div className="text-center mb-10" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-black mb-6">
            Wall of <span className="text-[#FF4801]">Love</span>
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#FF4801] fill-[#FF4801] inline-block ml-2 align-middle" />
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Column 1 */}
          <motion.div className="flex flex-col gap-4" variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
            <ImageCard 
              src="/wall/angrez_SR.avif" 
              alt="Featured Testimonial" 
              aspectRatio="aspect-[5/4.5]"
            />
            <TestimonialCard testimonial={testimonials.rogerDunn} />
            <TwitterCard tweet={twitterData} />
          </motion.div>

          {/* Column 2 */}
          <motion.div className="flex flex-col gap-4" variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
            <div className="flex flex-col gap-4">
              <QuoteCard 
                quote="Ryze's AI-driven ads outperform human optimization by a huge margin."
                author="Mathilde Biggs"
                role="CEO MotifDigital Agence"
              />
              <div className="grid grid-cols-2 gap-4 items-stretch">
                <StatCard 
                  stat="+63%" 
                  description="better ROAS after switching to AI agents"
                />
                <StatCard 
                  description="Got the whole team up and running in a day. Super easy to pick up"
                  logo={{
                    alt: 'Speedy',
                    src: '/wall/speedy-logo.svg'
                  }}
                />
              </div>
            </div>
            <TestimonialCard testimonial={testimonials.danielAmezquita} />
            <ImageCard 
              src="/wall/wall-3.avif" 
              alt="Featured Testimonial" 
              aspectRatio="aspect-video"
            />
          </motion.div>

          {/* Column 3 */}
          <motion.div className="flex flex-col gap-4" variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
            <ImageCard 
              src="/wall/angrez_google.avif" 
              alt="Featured Testimonial" 
              aspectRatio="aspect-[1/0.97]"
            />
            <TestimonialCard testimonial={testimonials.danielRoser} />
            <ClutchCard {...clutchData} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
