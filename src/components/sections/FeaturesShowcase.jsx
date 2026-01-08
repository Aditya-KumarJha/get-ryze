import React from 'react';
import KeywordOptimization from '../features/KeywordOptimization';
import CreativeGeneration from '../features/CreativeGeneration';
import CreativeAnalysis from '../features/CreativeAnalysis';
import AccountAudits from '../features/AccountAudits';
import BudgetReallocation from '../features/BudgetReallocation';

const FeaturesShowcase = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-white to-transparent z-10" />
      <div className="max-w-400 mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Keyword Optimization - Hidden on mobile */}
          <div className="hidden md:block">
            <KeywordOptimization />
          </div>

          {/* Creative Generation */}
          <div className="md:mt-12">
            <CreativeGeneration />
          </div>

          {/* Creative Analysis - Hidden on mobile */}
          <div className="hidden md:block mt-6">
            <CreativeAnalysis />
          </div>

          {/* Account Audits */}
          <div className="lg:mt-16">
            <AccountAudits />
          </div>

          {/* Budget Reallocation - Hidden on mobile */}
          <div className="hidden md:block">
            <BudgetReallocation />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default FeaturesShowcase;

