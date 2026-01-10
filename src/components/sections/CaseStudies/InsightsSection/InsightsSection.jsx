import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import InsightCard from './InsightCard';
import { insights as allInsights } from './insightsData';

const PAGE_SIZE = 6;
const INITIAL_SIZE = 3;

const InsightsSection = () => {
  const [showInfinite, setShowInfinite] = React.useState(false);
  const [visibleInsights, setVisibleInsights] = React.useState(allInsights.slice(0, PAGE_SIZE));
  const [hasMore, setHasMore] = React.useState(allInsights.length > PAGE_SIZE);

  const fetchMoreData = () => {
    const next = visibleInsights.length + PAGE_SIZE;
    setVisibleInsights(allInsights.slice(0, next));
    if (next >= allInsights.length) setHasMore(false);
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-0">
      <div className="w-[90%] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">Insights</h2>
        {!showInfinite ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {allInsights.slice(0, INITIAL_SIZE).map((insight) => (
                <InsightCard key={insight.id} {...insight} />
              ))}
            </div>
            {allInsights.length > INITIAL_SIZE && (
              <div className="flex justify-center mt-8">
                <button
                  className="text-[#FF6A1A] font-medium text-base px-6 py-2 rounded transition hover:underline hover:text-[#FF6A1A]"
                  onClick={() => setShowInfinite(true)}
                >
                  See more &rarr;
                </button>
              </div>
            )}
          </>
        ) : (
          <InfiniteScroll
            dataLength={visibleInsights.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<div className="text-center py-4 text-gray-400">Loading...</div>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
          >
            {visibleInsights.map((insight) => (
              <InsightCard key={insight.id} {...insight} />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </section>
  );
};

export default InsightsSection;
