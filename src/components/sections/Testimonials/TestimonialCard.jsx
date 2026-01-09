import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, platform, content, logo, avatar, engagement } = testimonial;

  return (
    <div className="bg-white rounded-lg border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-100 overflow-hidden relative">
            <img
              alt={name}
              loading="lazy"
              className="object-cover w-full h-full"
              src={avatar}
            />
          </div>
          <div>
            <h4 className="font-bold text-[15px] text-zinc-900">{name}</h4>
            <p className="text-[12px] text-zinc-500">{role}</p>
          </div>
        </div>
        <img
          alt={platform}
          loading="lazy"
          className="h-6 w-auto object-contain"
          src={logo}
        />
      </div>
      <p className="text-[14px] text-zinc-700 leading-relaxed">{content}</p>
      {engagement && (
        <div className="flex items-center gap-4 pt-2 border-t border-zinc-50 mt-auto">
          {engagement.type === 'linkedin' && (
            <>
              <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                <Heart className="w-3 h-3" />
                {engagement.likes}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                <MessageCircle className="w-3 h-3" />
                {engagement.comments}
              </div>
            </>
          )}
            {engagement.type === 'g2' && (
              <img
                alt="G2 Stars"
                loading="lazy"
                className="h-8.5 w-auto object-contain"
                src="/wall/5-stars-g2.avif"
              />
            )}
            {engagement.type === 'trustpilot' && (
              <img
                alt="Trustpilot Stars"
                loading="lazy"
                className="h-5 w-auto object-contain"
                src="/wall/stars-trustpilot.svg"
              />
            )}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
