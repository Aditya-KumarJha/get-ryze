import React from 'react';

const ImageCard = ({ src, alt, aspectRatio = 'aspect-video' }) => {
  return (
    <div className={`bg-white rounded-lg border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative ${aspectRatio}`}>
      <div className="absolute inset-0 bg-zinc-200">
        <img
          alt={alt}
          loading="lazy"
          className="object-cover w-full h-full"
          src={src}
        />
      </div>
    </div>
  );
};

export default ImageCard;
