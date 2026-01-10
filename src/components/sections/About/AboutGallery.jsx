// AboutGallery.jsx - Modular gallery section for About page
import React from 'react';
import '../../../styles/about.css';

const images = [
  { src: '/about/stage-v2.avif', aspect: 'aspect-[3/4]' },
  { src: '/about/bridge.avif', aspect: 'aspect-[3/4]' },
  { src: '/about/dinner2.avif', aspect: 'aspect-[4/3]' },
  { src: '/about/whiteboard-v2.avif', aspect: 'aspect-[1/1]' },
  { src: '/about/farm-v2.avif', aspect: 'aspect-[1/1]' },
  { src: '/about/stage-v2.avif', aspect: 'aspect-[3/4]' },
  { src: '/about/bridge.avif', aspect: 'aspect-[3/4]' },
  { src: '/about/dinner2.avif', aspect: 'aspect-[4/3]' },
  { src: '/about/whiteboard-v2.avif', aspect: 'aspect-[1/1]' },
  { src: '/about/farm-v2.avif', aspect: 'aspect-[1/1]' },
];

const AboutGallery = () => (
  <div className="w-full overflow-hidden py-20">
    <div className="flex w-fit">
      <div className="flex gap-8 pr-8 items-center h-75 md:h-112.5 about-gallery-scroll">
        {images.map((img, idx) => (
          <div key={idx} className={`h-full shrink-0 ${img.aspect}`}>
            <div className="relative overflow-hidden bg-zinc-100 group cursor-crosshair h-full w-full">
              <img
                alt="About Ryze"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src={img.src}
                style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, objectPosition: 'center', color: 'transparent' }}
              />
              <div className="absolute inset-0 border border-black/5 group-hover:border-black/10 transition-colors duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutGallery;
