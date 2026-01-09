import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import FeaturesShowcase from './components/sections/FeaturesShowcase';
import ClientMarquee from './components/sections/ClientMarquee';
import Testimonials from './components/sections/Testimonials';
import AIShowcase from './components/sections/AIShowcase';
import TickerSection from './components/sections/TickerSection';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesShowcase />
        <ClientMarquee />
        <Testimonials />
        <AIShowcase />
        <TickerSection />
      </main>
    </div>
  );
};

export default App;