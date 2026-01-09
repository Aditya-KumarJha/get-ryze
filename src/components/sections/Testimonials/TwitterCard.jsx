import React from 'react';
import { BadgeCheck, MessageCircle, Repeat, Heart, BarChart3, Share } from 'lucide-react';

const TwitterCard = ({ tweet }) => {
  const { name, handle, time, content, verified, stats } = tweet;

  return (
    <div className="bg-white rounded-lg border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 p-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-zinc-100 overflow-hidden relative shrink-0">
          <img
            alt={name}
            loading="lazy"
            className="object-cover w-full h-full"
            src="/wall/woman_face3.avif"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-1 truncate">
              <span className="font-bold text-[15px] text-[#0F1419] truncate">{name}</span>
              {verified && (
                <BadgeCheck className="w-4.5 h-4.5 text-[#1D9BF0] fill-[#1D9BF0]" />
              )}
              <span className="text-[12px] text-[#536471] truncate">
                @{handle} · {time}
              </span>
            </div>
            <img
              alt="X"
              loading="lazy"
              className="h-5 w-auto object-contain"
              src="/wall/X-Logo1.avif"
            />
          </div>
          <p className="text-[14px] text-[#0F1419] leading-normal mt-0.5 mb-3">{content}</p>
          <div className="flex items-center justify-between text-[#536471] max-w-75 -mt-2">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 -ml-2 rounded-full group-hover:bg-[#1D9BF0]/10 group-hover:text-[#1D9BF0] transition-colors">
                <MessageCircle className="w-4.5 h-4.5" />
              </div>
              <span className="text-[13px] group-hover:text-[#1D9BF0]">{stats.replies}</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 -ml-2 rounded-full group-hover:bg-[#00BA7C]/10 group-hover:text-[#00BA7C] transition-colors">
                <Repeat className="w-4.5 h-4.5" />
              </div>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 -ml-2 rounded-full group-hover:bg-[#F91880]/10 group-hover:text-[#F91880] transition-colors">
                <Heart className="w-4.5 h-4.5" />
              </div>
              <span className="text-[13px] group-hover:text-[#F91880]">{stats.likes}</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 -ml-2 rounded-full group-hover:bg-[#1D9BF0]/10 group-hover:text-[#1D9BF0] transition-colors">
                <BarChart3 className="w-4.5 h-4.5 rotate-90" />
              </div>
              <span className="text-[13px] group-hover:text-[#1D9BF0]">{stats.views}</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 -ml-2 rounded-full group-hover:bg-[#1D9BF0]/10 group-hover:text-[#1D9BF0] transition-colors">
                <Share className="w-4.5 h-4.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
