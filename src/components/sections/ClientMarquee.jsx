import React, { useEffect, useRef, useState } from 'react';
import '../../styles/marquee.css';

const defaultImages = [
  '/marquee/caleyx-logo.avif',
  '/marquee/directly_logo.avif',
  '/marquee/hg_logo.avif',
  '/marquee/mos_logo1.avif',
  '/marquee/motif_digital.avif',
  '/marquee/pupil_logo1.avif',
  '/marquee/ritma_logo1.avif',
  '/marquee/tetra-logo.avif',
  '/marquee/villlyx_logo.avif',
];

const ClientMarquee = ({ imagePaths = defaultImages, speed = 120 /* px/sec */ }) => {
  // Duplicate the images so the marquee appears infinite
  const images = [...imagePaths];

  const [direction, setDirection] = useState(1); // 1 = left, -1 = right
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const ticking = useRef(false);

  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const groupBRef = useRef(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  // scroll listener sets direction based on vertical scroll
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (current > lastScrollY.current) setDirection(1);
          else if (current < lastScrollY.current) setDirection(-1);
          lastScrollY.current = current;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // animation loop
  useEffect(() => {
    const measureAndSet = () => {
      const measuredGroup = groupRef.current ? groupRef.current.offsetWidth : 0;
      const containerWidth = trackRef.current && trackRef.current.parentElement
        ? trackRef.current.parentElement.offsetWidth
        : window.innerWidth || 0;

      // Gap between groups in rem (4.5rem = 72px at default 16px font size)
      const gapInPx = parseFloat(getComputedStyle(document.documentElement).fontSize) * 4.5;

      // ensure group covers at least the viewport/container width to avoid visible shrink
      const groupWidth = Math.max(measuredGroup, containerWidth);
      if (groupWidth > 0 && trackRef.current) {
        // Don't set explicit width - let flex handle it
        if (groupRef.current) groupRef.current.style.minWidth = `${groupWidth}px`;
        if (groupBRef.current) groupBRef.current.style.minWidth = `${groupWidth}px`;
      }
      return { groupWidth, gapInPx };
    };

    let { groupWidth, gapInPx } = measureAndSet();

    const step = (t) => {
      if (!lastTimeRef.current) lastTimeRef.current = t;
      const dt = (t - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = t;

      if (!groupWidth) {
        const measured = measureAndSet();
        groupWidth = measured.groupWidth;
        gapInPx = measured.gapInPx;
      }
      if (groupWidth > 0) {
        // The full loop distance includes one group width + the gap
        const loopDistance = groupWidth + gapInPx;
        // advance offset
        offsetRef.current = (offsetRef.current + direction * speed * dt) % loopDistance;
        // keep positive
        if (offsetRef.current < 0) offsetRef.current += loopDistance;
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    const onResize = () => {
      const measured = measureAndSet();
      groupWidth = measured.groupWidth;
      gapInPx = measured.gapInPx;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
      window.removeEventListener('resize', onResize);
    };
  }, [direction, speed]);

  return (
    <section className="marquee-section" aria-label="Client logos">
      <div className="marquee-viewport">
        <div className="marquee-track" ref={trackRef}>
          <div className="marquee-group" ref={groupRef}>
            {images.map((src, i) => (
              <div className="marquee-item" key={`a-${i}`}>
                <img src={src} alt={`Client ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="marquee-group" aria-hidden ref={groupBRef}>
            {images.map((src, i) => (
              <div className="marquee-item" key={`b-${i}`}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
