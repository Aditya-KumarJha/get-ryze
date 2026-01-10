// About Automation section (AI watches campaigns)
const AboutAutomation = () => (
  <div className="mb-16">
    <div className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-2xl">
      <p>It watches your campaigns, fixes what's broken, scales what's working. Every day. Without you.</p>
      <div className="relative overflow-hidden bg-zinc-100 group cursor-crosshair aspect-video my-12">
        <img
          alt="About Ryze"
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          src="/about/ecomorders.avif"
          style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, objectPosition: 'center', color: 'transparent' }}
        />
        <div className="absolute inset-0 border border-black/5 group-hover:border-black/10 transition-colors duration-500"></div>
      </div>
      <p className="text-sm text-zinc-400 -mt-8 mb-12">One of our co-founders previously ran an ecomm brand.</p>
      <p>Not magic. Just the boring stuff done faster and better than any human can.</p>
    </div>
  </div>
);

export default AboutAutomation;
