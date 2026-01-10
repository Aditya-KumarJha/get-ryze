// About page Hero section
const AboutHero = () => (
  <div className="mb-20">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-black mb-12 leading-[0.95]">
      We built the ads manager we always wanted
    </h1>
    <div className="relative overflow-hidden bg-zinc-100 group cursor-crosshair aspect-[16/8.5] mb-24">
      <img
        alt="About Ryze"
        loading="lazy"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        src="/about/google4.avif"
        style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, objectPosition: 'center 10%', color: 'transparent' }}
      />
      <div className="absolute inset-0 border border-black/5 group-hover:border-black/10 transition-colors duration-500"></div>
    </div>
  </div>
);

export default AboutHero;
