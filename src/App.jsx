import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default App;