import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import FeaturesShowcase from './components/sections/FeaturesShowcase';
import ClientMarquee from './components/sections/ClientMarquee';
import Testimonials from './components/sections/Testimonials';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesShowcase />
        <ClientMarquee />
        <Testimonials />
      </main>
    </div>
  );
};

export default App;