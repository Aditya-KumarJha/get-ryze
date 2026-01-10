// About Experience section (first grid)
const AboutExperience = () => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-center">
    <div className="md:col-span-7">
      <div className="text-xl md:text-2xl text-zinc-600 leading-relaxed">
        <p>We've run ads at Google, DTC brands, big companies, small agencies. Late nights. Tight budgets. Impossible targets.</p>
        <p>We know the truth: most ads lose money. Not because people are bad at marketing. Because the work is too manual, too slow, too scattered.</p>
      </div>
    </div>
    <div className="md:col-span-5">
      <div className="relative overflow-hidden bg-zinc-100 group cursor-crosshair aspect-square">
        <img
          alt="About Ryze"
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          src="/about/gathering2.avif"
          style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, objectPosition: 'center', color: 'transparent' }}
        />
        <div className="absolute inset-0 border border-black/5 group-hover:border-black/10 transition-colors duration-500"></div>
      </div>
    </div>
  </div>
);

export default AboutExperience;
