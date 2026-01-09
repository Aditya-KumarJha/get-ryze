import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TextHover from '../../ui/TextHover';
import './Footer.css';

const Footer = () => {
  const creativeImages = [
    { src: '/footer/ads5-final.png', roas: '2.1x', cpa: '$25' },
    { src: '/footer/ad2-final.png', roas: '3.2x', cpa: '$12' },
    { src: '/footer/ad3-final.png', roas: '2.8x', cpa: '$18' },
    { src: '/footer/ads5-final.png', roas: '2.5x', cpa: '$20' },
  ];

  const [currentCreative, setCurrentCreative] = useState(0);
  const [exitLeft, setExitLeft] = useState(true); // toggle exit direction each cycle

  useEffect(() => {
    const id = setInterval(() => {
      setExitLeft((v) => !v);
      setCurrentCreative((p) => (p + 1) % creativeImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, [creativeImages.length]);

  // Accounts carousel (Manages all your accounts)
  const accounts = [
    { src: '/footer/meta-logo.png', alt: 'Meta' },
    { src: '/footer/shopify_logo_1.png', alt: 'Shopify' },
    { src: '/footer/ga4.png', alt: 'GA4' },
    { src: '/footer/amazon-logo.png', alt: 'Amazon' },
    { src: '/footer/Google_Ads.svg', alt: 'Google Ads' },
  ];

  // seamless infinite accounts carousel
  const [accountsPhase, setAccountsPhase] = useState('loading'); // loading -> connected -> shift

  const accountsDup = [...accounts, ...accounts];
  const cardWidth = 310; // px - spacing + width previously used
  const transitionDuration = 420; // ms

  const [pos, setPos] = useState(0); // index in duplicated track
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    let tLoad, tConnected, tShift;

    setAccountsPhase('loading');
    tLoad = setTimeout(() => setAccountsPhase('connected'), 900);
    tConnected = setTimeout(() => setAccountsPhase('shift'), 1700);

    tShift = setTimeout(() => {
      setTransitionEnabled(true);
      setPos((p) => p + 1);
    }, 2000);

    return () => {
      clearTimeout(tLoad);
      clearTimeout(tConnected);
      clearTimeout(tShift);
    };
  }, [pos]);

  // when pos reaches accounts.length (we've shown the duplicated boundary), reset immediately after transition ends
  useEffect(() => {
    if (pos === accounts.length) {
      const resetAfter = setTimeout(() => {
        setTransitionEnabled(false);
        setPos(0);
      }, transitionDuration);
      return () => clearTimeout(resetAfter);
    }
    // ensure transition is enabled for normal moves
    if (!transitionEnabled) setTransitionEnabled(true);
    return undefined;
  }, [pos, transitionDuration, accounts.length, transitionEnabled]);

  const roasItems = [
    { title: 'Add 85 Negative Keywords', subtitle: 'Block "free", "jobs"', value: '+$4.6k' },
    { title: 'Pause 27 Burning Queries', subtitle: '0 conversions (30d)', value: '+$1.8k' },
    { title: 'Split Brand from Non-Brand', subtitle: 'ROAS 8.2 vs 1.6', value: '+$3.7k' },
    { title: 'Isolate "Project Mgmt"', subtitle: 'Own ad group, bid down', value: '+$5.8k' },
  ];

  const [currentRoas, setCurrentRoas] = useState(0);
  const [roasApplied, setRoasApplied] = useState(false);
  const [roasExitLeft, setRoasExitLeft] = useState(true);

  useEffect(() => {
    let enterTimer = null;
    let advanceTimer = null;

    // when currentRoas changes, first show money, then change to applied
    setRoasApplied(false);
    enterTimer = setTimeout(() => setRoasApplied(true), 900);

    // after a short time, advance to next and toggle exit direction
    advanceTimer = setTimeout(() => {
      setRoasExitLeft((v) => !v);
      setCurrentRoas((p) => (p + 1) % roasItems.length);
    }, 2400);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(advanceTimer);
    };
  }, [currentRoas]);

  // For inView animation
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px', amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full min-h-screen lg:h-screen bg-[#FF4801] overflow-hidden flex flex-col items-center justify-center px-4 md:px-6 md:pt-6 pt-20 lg:pt-6"
    >
      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-center z-10 lg:-translate-y-4">
        <div className="lg:col-span-4 flex flex-col gap-6 relative z-20 items-center lg:items-start lg:translate-y-3.75 lg:-translate-x-17.5 lg:-ml-5">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2.5 flex flex-col gap-1.5 w-full max-w-[22.14rem] hover:bg-white/15 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <span className="text-[17px] font-semibold text-white">Manages all your accounts</span>
            </div>
            <div className="w-full aspect-[16/8.925] bg-transparent border border-white/20 rounded-lg overflow-hidden relative shadow-[0_0_15px_rgba(255,255,255,0.15)]">
              <div className="absolute inset-0">
                <div className="w-full h-full overflow-hidden">
                  <div style={{ transform: 'scale(0.412793)', transformOrigin: 'left top', width: '800px', height: '425px' }}>
                    <div className="w-200 h-106.25 bg-transparent">
                      <div className="w-full h-full px-15 py-2.5 flex flex-col justify-center overflow-visible">
                        <div className="relative w-full min-h-76 overflow-x-hidden overflow-y-visible mask-fade-right flex items-center py-5">
                          <div className="w-full h-full overflow-hidden accounts-mask">
                            <div
                              className="accounts-track"
                              style={{ display: 'flex', gap: '35px', transform: `translateX(-${pos * cardWidth}px)`, transition: transitionEnabled ? `transform ${transitionDuration}ms cubic-bezier(0.22,1,0.36,1)` : 'none' }}
                            >
                              {accountsDup.map((acc, idx) => {
                                // left visible card index in the duplicated track corresponds to `pos`
                                const isLeft = idx === pos;
                                const isSecond = idx === pos + 1;

                                return (
                                  <div
                                    key={`${acc.alt}-${idx}`}
                                    className="shrink-0 h-64.5 rounded-2xl border bg-white flex flex-col items-center justify-center gap-6 p-6 transition-all duration-300"
                                    style={{ width: '275px' }}
                                  >
                                    <div className="transition-transform duration-500">
                                      <img src={acc.src} alt={acc.alt} className="w-27.25 h-27.25 object-contain" />
                                    </div>
                                    <div className="w-full flex justify-center h-17.5 items-center">
                                      {isLeft ? (
                                        accountsPhase === 'loading' ? (
                                          <div className="status-loading-dot" aria-label="Connecting"></div>
                                        ) : (
                                          <div className="status-pill status-connected">Connected</div>
                                        )
                                      ) : isSecond ? (
                                        <span className="text-[#FF4801] font-semibold text-[33px]">Connect</span>
                                      ) : (
                                        <span className="invisible">Connect</span>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[22.14rem]">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2.5 flex flex-col gap-1.5 w-full max-w-[22.14rem] hover:bg-white/15 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <span className="text-[17px] font-semibold text-white">Creatives optimization</span>
              </div>
              <div className="w-full aspect-[16/8.925] bg-transparent border border-white/20 rounded-lg overflow-hidden relative shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                <div className="absolute inset-0">
                  <div className="w-full h-full overflow-hidden">
                    <div style={{ transform: 'scale(0.866757)', transformOrigin: 'left top', width: '381px', height: '202.406px' }}>
                      <div className="w-95.25 h-50.5 bg-transparent">
                        <div className="relative w-full h-full bg-transparent flex flex-col font-sans select-none overflow-hidden">
                          <div className="relative flex-1 mx-6 mt-4 mb-11 perspective-1000">
                            {creativeImages.map((img, idx) => {
                              const prevIdx = (currentCreative - 1 + creativeImages.length) % creativeImages.length;
                              const isActive = idx === currentCreative;
                              const isPrev = idx === prevIdx;

                              // determine animation classes depending on whether the exiting image should go left or right
                              const enterClass = exitLeft ? 'enter-from-right' : 'enter-from-left';
                              const exitClass = exitLeft ? 'exit-to-left' : 'exit-to-right';

                              const cls = isActive ? `carousel-item ${enterClass}` : isPrev ? `carousel-item ${exitClass}` : 'carousel-item hidden-item';

                              return (
                                <div
                                  key={idx}
                                  className={`absolute inset-0 bg-white rounded-lg shadow-[0_20px_40px_rgb(0,0,0,0.1)] border border-slate-100/50 overflow-hidden transition-all duration-500 ease-out origin-bottom group ${cls}`}
                                  style={{ zIndex: isActive ? 30 : isPrev ? 20 : 10 }}
                                >
                                  <div className="w-full h-full relative">
                                    <img alt={`Ad ${idx}`} className="w-full h-full object-cover rounded-lg" src={img.src} />
                                    <div className="absolute bottom-4 inset-x-4 flex justify-between items-end transition-opacity duration-300 opacity-100">
                                      <div className="bg-white/85 backdrop-blur-md px-3 py-0.5 rounded-lg border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col items-center min-w-16">
                                        <span className="text-[12px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-0.5 mb-px">ROAS</span>
                                        <span className="text-[12px] font-bold tracking-tight leading-none pb-0.5 text-amber-600">{img.roas}</span>
                                      </div>
                                      <div className="bg-white/85 backdrop-blur-md px-3 py-0.5 rounded-lg border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col items-center min-w-16">
                                        <span className="text-[12px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-0.5 mb-px">CPA</span>
                                        <span className="text-[12px] font-bold tracking-tight leading-none pb-0.5 text-slate-900">{img.cpa}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 px-8 flex justify-between items-center gap-4 z-30">
                            <button className="flex-1 h-8 rounded-xl font-semibold text-[12px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center border bg-white border-slate-200 text-slate-500 hover:border-rose-200 hover:text-rose-600 hover:bg-rose-50 shadow-sm">Stop</button>
                            <button className="flex-1 h-8 rounded-xl font-semibold text-[12px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center border border-transparent shadow-md bg-slate-900 text-white hover:bg-emerald-600 hover:shadow-emerald-200/50">Increase Budget</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2.5 flex flex-col gap-1.5 w-full max-w-[90vw] md:max-w-[22.14rem] hover:bg-white/15 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <span className="text-[17px] font-semibold text-white">24/7 ROAS improvements</span>
            </div>
            <div className="w-full aspect-[16/8.925] bg-transparent border border-white/20 rounded-lg relative overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.15)]">
              <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-full bg-transparent font-sans flex flex-col relative overflow-hidden select-none">
                  <div className="flex-1 relative flex items-center justify-center perspective-1000 -mt-0.75">
                    {roasItems.map((item, idx) => {
                      const len = roasItems.length;
                      const prevIdx = (currentRoas - 1 + len) % len;
                      const isActive = idx === currentRoas;
                      const isPrev = idx === prevIdx;
                      const position = (idx - currentRoas + len) % len; // 0 active, 1 next, 2 next2...

                      let baseStyle = 'absolute w-[288px] h-25.5 bg-white rounded-xl shadow-sm border-[0.5px] flex flex-col justify-center px-5 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden';
                      let posClass = '';
                      if (isActive) posClass = ' roas-active';
                      else if (position === 1) posClass = ' roas-next';
                      else if (position === 2) posClass = ' roas-next-2';
                      else posClass = ' roas-next-3';

                      // apply exit class to previous element to animate it out left/right
                      const exitClass = isPrev ? (roasExitLeft ? ' roas-exit-left' : ' roas-exit-right') : '';

                      return (
                        <div
                          key={idx}
                          className={baseStyle + posClass + exitClass + ' border-gray-200'}
                          style={{ zIndex: isActive ? 50 : isPrev ? 40 : 30 }}
                        >
                          <div className="flex justify-between items-center relative z-10">
                            <div className="flex-1 pr-16">
                              <div className="flex items-center gap-1.5 mb-1 -ml-1.25">
                                <span className="text-[12px] font-bold text-gray-800 truncate">{item.title}</span>
                              </div>
                              <div className="text-[12px] text-gray-400 -ml-1.25 truncate">{item.subtitle}</div>
                            </div>
                            <div className="relative h-6 w-17.5">
                              <div className="roas-money absolute right-0 top-0 transition-all duration-300 ease-in-out transform origin-right" style={{ opacity: isActive && !roasApplied ? 1 : 0, transform: isActive && !roasApplied ? 'scale(1)' : 'scale(0.9)' }}>
                                <div className="text-[12px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 whitespace-nowrap">{item.value}</div>
                              </div>
                              <div className="roas-applied absolute right-0 top-0 transition-all duration-300 ease-in-out transform origin-right" style={{ opacity: isActive && roasApplied ? 1 : 0, transform: isActive && roasApplied ? 'scale(1)' : 'scale(0.8)' }}>
                                <div className="flex items-center justify-center gap-1.5 text-[12px] font-bold text-white bg-[#FF4801] px-3 py-1 rounded-full shadow-sm">
                                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                  <span>Applied</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="h-8 flex items-center justify-between px-6 relative z-20 -translate-y-0.75">
                    <span className="text-[12px] font-semibold text-white uppercase tracking-wide">Monthly Impact</span>
                    <div className="flex items-baseline gap-0.5 px-3 py-1 rounded-full transition-all duration-300 -translate-y-0.75 bg-white text-gray-800">
                      <span className="text-[12px] font-bold tabular-nums">$2,631,200</span>
                      <span className="text-[9px] font-medium opacity-70">/ mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 items-center lg:items-start justify-center relative z-20 lg:-translate-x-2.5">
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 w-36 md:w-40 hover:bg-white/15 transition-colors duration-300">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[17px] font-semibold text-white/80 uppercase tracking-wider">ROAS</span>
              </div>
              <div className="text-2xl font-bold text-white mb-2">3.1x</div>
              <div className="h-6 w-full flex items-end gap-1 opacity-80">
                <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '20%' }}></div>
                <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '30%' }}></div>
                <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '25%' }}></div>
                <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '40%' }}></div>
                <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '35%' }}></div>
                <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '50%' }}></div>
                <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '45%' }}></div>
                <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '60%' }}></div>
              </div>
            </div>
            <div className="absolute left-1/2 top-full h-6 w-px bg-white/20 hidden lg:block"></div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 w-36 md:w-40 hover:bg-white/15 transition-colors duration-300">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[17px] font-semibold text-white/80 uppercase tracking-wider">CPA</span>
            </div>
            <div className="text-2xl font-bold text-white mb-2">$23.4</div>
            <div className="h-6 w-full flex items-end gap-1 opacity-80">
              <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '60%' }}></div>
              <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '50%' }}></div>
              <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '55%' }}></div>
              <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '40%' }}></div>
              <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '45%' }}></div>
              <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '30%' }}></div>
              <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '35%' }}></div>
              <div className="w-full bg-white/40 rounded-t-sm" style={{ height: '20%' }}></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col text-white relative z-20 pl-0 lg:pl-4 lg:-translate-x-7.5 items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-2 mb-4 opacity-80">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <span className="text-xs font-bold tracking-widest uppercase">Next Gen of Marketing</span>
          </div>
          <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9] mb-8">Let AI <span className="lg:hidden">Run Your Ads</span><span className="hidden lg:inline"><br />Run Your <br />Ads</span></h2>
          <form className="relative w-full max-w-md">
            <div className="bg-white rounded-full p-1.5 pl-6 flex items-center justify-between shadow-xl">
              <input type="email" placeholder="work@email.com" className="flex-1 bg-transparent text-zinc-900 outline-none placeholder:text-zinc-400 text-base" required />
              <button type="submit" className="bg-[#FF4801] text-white w-11 h-10 rounded-full flex items-center justify-center hover:bg-[#e64201] transition-colors disabled:opacity-70 overflow-hidden">
                <TextHover text="→" customClass="text-white !p-0 !m-0" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grow" />
        <div className="relative w-full flex flex-row items-center justify-between pb-6 pt-8 px-4 md:px-8">
          <div className="flex flex-wrap gap-6 text-white/60 text-2.5 font-bold uppercase tracking-widest z-20 mx-auto justify-center w-full max-w-4xl">
            <a href="https://www.linkedin.com/company/get-ryze-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linkedin</a>
            <span className="text-white/20">|</span>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/term-services" className="hover:text-white transition-colors">Terms</a>
            <span className="text-white/20">|</span>
            <span>Contact us: <a href="mailto:hello@get-ryze.ai" className="hover:text-white transition-colors">hello@get-ryze.ai</a></span>
          </div>
          <span className="text-white/60 text-sm font-semibold whitespace-nowrap ml-4">Crafted in San Francisco</span>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.path d="M 200 200 Q 500 200 600 400 T 900 300" fill="none" stroke="white" strokeWidth="0.75" opacity="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.5 }}
          />
          <motion.path d="M 200 500 Q 500 500 600 500 T 900 300" fill="none" stroke="white" strokeWidth="0.75" opacity="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1 }}
          />
          <motion.circle cx="700" cy="450" r="180" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="4 4" opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1.5 }}
          />
          <motion.path d="M 0 120 Q 350 80 600 180 T 1000 100 T 1400 200" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="8 6" opacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 2 }}
          />
          <motion.path d="M 0 700 Q 300 600 550 720 T 900 650 T 1400 750" fill="none" stroke="white" strokeWidth="0.6" strokeDasharray="5 8" opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 2.5 }}
          />
          <motion.path d="M -50 350 Q 200 280 450 400 T 800 320 T 1200 450" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 3 }}
          />
          <motion.path d="M 100 800 Q 400 750 700 850 T 1100 780 T 1500 900" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 3.5 }}
          />
          <motion.path d="M 800 50 Q 900 150 1000 80 T 1200 180 T 1400 100" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 4 }}
          />
        </motion.svg>
      </div>
    </motion.section>
  );
};

export default Footer;
