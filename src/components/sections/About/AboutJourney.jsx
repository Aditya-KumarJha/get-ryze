// About Journey section (second grid)
const AboutJourney = () => (
  <div className="flex flex-col md:flex-row-reverse gap-12 mb-16 items-center">
    <div className="md:w-1/2">
      <div className="text-xl md:text-2xl text-zinc-600 leading-relaxed">
        <p>So we moved to San Francisco and built Ryze.</p>
        <p>Worked with the best agencies. Learned what actually moves the needle. Then built AI to do exactly that.</p>
      </div>
    </div>
    <div className="md:w-1/2 w-full">
      <div className="relative overflow-hidden bg-zinc-100 group cursor-crosshair aspect-4/5">
        <img
          alt="About Ryze"
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          src="/about/hike.avif"
          style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, objectPosition: 'center', color: 'transparent' }}
        />
        <div className="absolute inset-0 border border-black/5 group-hover:border-black/10 transition-colors duration-500"></div>
      </div>
    </div>
  </div>
);

export default AboutJourney;
