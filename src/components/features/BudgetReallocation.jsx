 import React, { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiRefreshCw } from 'react-icons/fi';
import '../../styles/animations.css';

const BudgetReallocation = () => {
  const platforms = [
    { name: 'LinkedIn', multiplier: 1.2, amount: 510, percentage: 12.75, isHighlighted: false, icon: 'linkedin' },
    { name: 'ChatGPT', multiplier: 2.1, amount: 883, percentage: 22.075, isHighlighted: false, icon: 'chatgpt' },
    { name: 'Meta', multiplier: 4.5, amount: 1877, percentage: 46.925, isHighlighted: true, icon: 'meta' },
    { name: 'Google', multiplier: 5.2, amount: 2167, percentage: 54.175, isHighlighted: true, icon: 'google' },
    { name: 'Reddit', multiplier: 0.8, amount: 344, percentage: 8.6, isHighlighted: false, icon: 'reddit' },
    { name: 'Perplexity', multiplier: 4.8, amount: 2000, percentage: 50, isHighlighted: true, icon: 'perplexity' },
    { name: 'Amazon', multiplier: 4.2, amount: 1752, percentage: 43.8, isHighlighted: true, icon: 'amazon' },
    { name: 'X', multiplier: 1.1, amount: 468, percentage: 11.7, isHighlighted: false, icon: 'x' },
  ];

  const getLogo = (iconName) => {
    switch (iconName) {
      case 'linkedin': return <FaLinkedin className="w-8 h-8 text-[#0077B5]" />;
      case 'google': return <FcGoogle className="w-8 h-8" />;
      case 'chatgpt': return <img src="/logo/chatgpt-logo.png" alt="ChatGPT" className="w-8 h-8 object-contain" />;
      case 'meta': return <img src="/logo/meta-logo.png" alt="Meta" className="w-8 h-8 object-contain" />;
      case 'reddit': return <img src="/logo/reddit-logo.png" alt="Reddit" className="w-8 h-8 object-contain" />;
      case 'perplexity': return <img src="/logo/perplexity-color.png" alt="Perplexity" className="w-8 h-8 object-contain" />;
      case 'amazon': return <img src="/logo/amazon-logo.png" alt="Amazon" className="w-8 h-8 object-contain" />;
      case 'x': return <img src="/logo/X-Logo.png" alt="X" className="w-8 h-8 object-contain" />;
      default: return null;
    }
  };

  const getMultiplierColor = (active) =>
    active ? 'text-emerald-600 scale-110' : 'text-rose-500';

  const getBarColor = (active) =>
    active
      ? 'bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.5)]'
      : 'bg-slate-300';

  const [displayed, setDisplayed] = useState(() =>
    platforms.map(p => ({
      ...p,
      displayedMultiplier: p.multiplier,
      displayedAmount: p.amount,
      displayedPercentage: p.percentage,
      active: p.isHighlighted,
    }))
  );

  useEffect(() => {
    let mounted = true;
    const duration = 1800;
    const steps = 36;
    const interval = Math.max(8, Math.floor(duration / steps));
    const lerp = (a, b, t) => a + (b - a) * t;

    const animateTo = (targets) =>
      new Promise(resolve => {
        let step = 0;
        const timer = setInterval(() => {
          if (!mounted) {
            clearInterval(timer);
            resolve();
            return;
          }
          step += 1;
          const t = step / steps;
          setDisplayed(prev =>
            prev.map((item, i) => {
              const tgt = targets[i];
              return {
                ...item,
                displayedMultiplier: +(lerp(item.displayedMultiplier, tgt.multiplier, t)).toFixed(1),
                displayedAmount: Math.round(lerp(item.displayedAmount, tgt.amount, t)),
                displayedPercentage: +(lerp(item.displayedPercentage, tgt.percentage, t)).toFixed(1),
                active: tgt.active,
              };
            })
          );
          if (step >= steps) {
            clearInterval(timer);
            resolve();
          }
        }, interval);
      });

    const groupA = [2, 3, 5, 6];

    const buildTargets = (group) =>
      platforms.map((p, i) => {
        const active = (group === 0 && groupA.includes(i)) || (group === 1 && !groupA.includes(i));
        return active
          ? {
              multiplier: +(p.multiplier * 1.25).toFixed(1),
              amount: Math.round(p.amount * 1.25),
              percentage: +(Math.min(100, p.percentage * 1.15)).toFixed(1),
              active: true,
            }
          : {
              multiplier: +(p.multiplier * 0.85).toFixed(1),
              amount: Math.round(p.amount * 0.85),
              percentage: +(Math.max(2, p.percentage * 0.85)).toFixed(1),
              active: false,
            };
      });

    let running = true;
    (async function loop() {
      let group = 0;
      while (running && mounted) {
        await animateTo(buildTargets(group));
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
    <div className="relative aspect-[9/18.4] bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
      <div className="w-full h-full px-8 pb-4 pt-6 flex flex-col">
        <div className="flex flex-col gap-3">
          {displayed.map((platform, index) => (
            <div key={index} className="flex items-center h-14">
              <div className="w-[15%] flex justify-center">{getLogo(platform.icon)}</div>
              <div className="w-[20%] flex justify-center">
                <div className={`px-2 py-1 rounded-xl text-sm font-black w-full text-center ${getMultiplierColor(platform.active)}`}>
                  {platform.displayedMultiplier}x
                </div>
              </div>
              <div className="w-[40%] px-4">
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${getBarColor(platform.active)}`}
                    style={{ width: `${platform.displayedPercentage}%` }}
                  />
                </div>
              </div>
              <div className="w-[25%] text-right">
                <span className="text-sm text-gray-700 font-bold tabular-nums">
                  ${platform.displayedAmount.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 flex justify-center">
          <span className="text-xs text-gray-500 font-black tracking-wide flex items-center gap-2 uppercase">
            <FiRefreshCw className="w-4 h-4 animate-spin" />
            Reallocating Budget...
          </span>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[7%] bg-linear-to-b from-black/90 via-black/85 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-1 left-4 right-4 text-center z-20 pointer-events-none">
        <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide drop-shadow-md">
          Budget reallocation
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1.2px] bg-[#FF4801] z-20 pointer-events-none" />
    </div>
  );
};

export default BudgetReallocation;
