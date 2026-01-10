import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaRedditAlien, FaAmazon, FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { SiMeta, SiPerplexity } from 'react-icons/si';
import { SiOpenai } from 'react-icons/si';
import { FiRefreshCw } from 'react-icons/fi';
import '../../styles/animations.css';

const BudgetReallocation = () => {
  const platforms = [
    {
      name: 'LinkedIn',
      multiplier: 1.2,
      amount: 510,
      percentage: 12.75,
      isHighlighted: false,
      icon: 'linkedin',
    },
    {
      name: 'ChatGPT',
      multiplier: 2.1,
      amount: 883,
      percentage: 22.075,
      isHighlighted: false,
      icon: 'chatgpt',
    },
    {
      name: 'Meta',
      multiplier: 4.5,
      amount: 1877,
      percentage: 46.925,
      isHighlighted: true,
      icon: 'meta',
    },
    {
      name: 'Google',
      multiplier: 5.2,
      amount: 2167,
      percentage: 54.175,
      isHighlighted: true,
      icon: 'google',
    },
    {
      name: 'Reddit',
      multiplier: 0.8,
      amount: 344,
      percentage: 8.6,
      isHighlighted: false,
      icon: 'reddit',
    },
    {
      name: 'Perplexity',
      multiplier: 4.8,
      amount: 2000,
      percentage: 50,
      isHighlighted: true,
      icon: 'perplexity',
    },
    {
      name: 'Amazon',
      multiplier: 4.2,
      amount: 1752,
      percentage: 43.8,
      isHighlighted: true,
      icon: 'amazon',
    },
    {
      name: 'X',
      multiplier: 1.1,
      amount: 468,
      percentage: 11.7,
      isHighlighted: false,
      icon: 'x',
    },
  ];

  const getLogo = (iconName) => {
    switch (iconName) {
      case 'linkedin':
        return <FaLinkedin className="w-8 h-8 text-[#0077B5]" />;
      case 'google':
        return <FcGoogle className="w-8 h-8" />;
      case 'chatgpt':
        return <SiOpenai className="w-8 h-8 text-[#10a37f]" title="ChatGPT" />;
      case 'meta':
        return <SiMeta className="w-8 h-8 text-[#0866FF]" title="Meta" />;
      case 'reddit':
        return <FaRedditAlien className="w-8 h-8 text-[#FF4500]" title="Reddit" />;
      case 'perplexity':
        return <SiPerplexity className="w-8 h-8 text-[#5A57DD]" title="Perplexity" />;
      case 'amazon':
        return <FaAmazon className="w-8 h-8 text-[#FF9900]" title="Amazon" />;
      case 'x':
        return <FaXTwitter className="w-8 h-8 text-black" title="X" />;
      default:
        return null;
    }
  };

  const getMultiplierColor = (isHighlighted) => {
    return isHighlighted
      ? 'text-emerald-600 scale-110'
      : 'text-rose-500';
  };

  const getBarColor = (isHighlighted) => {
    return isHighlighted
      ? 'bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.5)]'
      : 'bg-slate-300';
  };

  // displayed state drives animated UI values and active state per-cycle
  const [displayed, setDisplayed] = useState(() => {
    return platforms.map(p => ({
      ...p,
      displayedMultiplier: p.multiplier,
      displayedAmount: p.amount,
      displayedPercentage: p.percentage,
      active: p.isHighlighted,
    }));
  });

  useEffect(() => {
    let mounted = true;
    const duration = 1800; // ms per transition
    const steps = 36;
    const interval = Math.max(8, Math.floor(duration / steps));

    const lerp = (a, b, t) => a + (b - a) * t;

    const animateTo = (targets) => {
      return new Promise((resolve) => {
        let step = 0;
        const timer = setInterval(() => {
          if (!mounted) {
            clearInterval(timer);
            resolve();
            return;
          }
          step += 1;
          const t = step / steps;
          setDisplayed(prev => prev.map((item, i) => {
            const tgt = targets[i];
            return {
              ...item,
              displayedMultiplier: +(lerp(item.displayedMultiplier, tgt.multiplier, t)).toFixed(1),
              displayedAmount: Math.round(lerp(item.displayedAmount, tgt.amount, t)),
              displayedPercentage: +(lerp(item.displayedPercentage, tgt.percentage, t)).toFixed(1),
              active: !!tgt.active,
            };
          }));

          if (step >= steps) {
            clearInterval(timer);
            resolve();
          }
        }, interval);
      });
    };

    const buildTargets = (activeGroupIndex) => {
      const groupA = [2, 3, 5, 6]; // Meta, Google, Perplexity, Amazon (indices in original order)
      return platforms.map((p, i) => {
        const inActive = (activeGroupIndex === 0 && groupA.includes(i)) || (activeGroupIndex === 1 && !groupA.includes(i));
        if (inActive) {
          return {
            multiplier: +(p.multiplier * 1.25).toFixed(1),
            amount: Math.round(p.amount * 1.25),
            percentage: +(Math.min(100, p.percentage * 1.15)).toFixed(1),
            active: true,
          };
        }
        return {
          multiplier: +(p.multiplier * 0.85).toFixed(1),
          amount: Math.round(p.amount * 0.85),
          percentage: +(Math.max(2, p.percentage * 0.85)).toFixed(1),
          active: false,
        };
      });
    };

    let running = true;
    (async function loop() {
      let group = 0;
      while (running && mounted) {
        const targets = buildTargets(group);
        await animateTo(targets);
        // brief pause
        await new Promise(r => setTimeout(r, 500));
        group = 1 - group;
      }
    })();

    return () => {
      mounted = false;
      running = false;
    };
  }, []);

  return (
    <div className="relative aspect-[9/18.4] bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm group cursor-pointer transform md:scale-95 lg:scale-100">
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full bg-white relative overflow-hidden font-sans rounded-2xl">
          <div className="w-full h-full px-8 pb-4 pt-6 flex flex-col font-sans">
            {/* removed top spacer so items start from the top */}
            <div className="flex flex-col justify-start gap-3">
              {displayed.map((platform, index) => (
                <div key={index} className="flex items-center h-14 relative group">
                  <div className="w-[15%] flex items-center justify-center">
                    <div className="shrink-0 transition-all duration-300 group-hover:scale-110 filter drop-shadow-sm">
                      {getLogo(platform.icon)}
                    </div>
                  </div>
                  <div className="w-[20%] flex justify-center">
                    <div
                      className={`px-2 py-1 rounded-xl text-sm font-black tracking-tight transition-all duration-500 w-full text-center ${getMultiplierColor(platform.active)}`}
                    >
                      {platform.displayedMultiplier}x
                    </div>
                  </div>
                  <div className="w-[40%] px-4 flex items-center">
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden relative shadow-inner">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ease-out relative ${getBarColor(platform.active)}`}
                        style={{ width: `${platform.displayedPercentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-[25%] flex justify-end">
                    <span className="text-sm text-gray-700 font-bold tabular-nums tracking-tight">
                      ${platform.displayedAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 min-h-0" />
            <div className="pt-3 pb-1 flex justify-center items-center">
              <span className="text-xs text-gray-500 font-black tracking-wide flex items-center gap-2 uppercase">
                <FiRefreshCw className="w-4 h-4 animate-spin" />
                Reallocating Budget...
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-[7%] bg-linear-to-b from-black/90 via-black/85 via-70% to-transparent z-10 pointer-events-none" />
      <div className="absolute top-1 left-4 right-4 text-center z-20 pointer-events-none">
        <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide leading-tight block drop-shadow-md">
          Budget reallocation
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1.2px] bg-[#FF4801] z-20 pointer-events-none" />
    </div>
  );
};

export default BudgetReallocation;

