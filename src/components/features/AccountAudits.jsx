import React from 'react';

const AccountAudits = () => {
  const auditItems = [
    { category: 'Keywords', score: 90, color: 'emerald-500', feedback: ['In 2 sharp, short sentences, summarize the key issues.', 'Summarize the key issues in sharp, short sentences.'] },
    { category: 'Ad quality', score: 85, color: 'emerald-400', feedback: ['Ads are relevant but could use more emotional hooks.', 'Click-through rates are slightly below industry average.'] },
    { category: 'Conversions', score: 95, color: 'emerald-500', feedback: ['Tracking pixel is firing correctly on all landing pages.', 'Attribution model is set to Data-driven.'] },
    { category: 'Budget', score: 70, color: 'yellow-500', feedback: ['High spend on underperforming display placements.', 'Reallocate 15% of budget to top search terms.'] },
    { category: 'Structure', score: 88, color: 'emerald-400', feedback: ['Well-organized ad groups with tight relevance.', 'Naming conventions are consistent.'] },
    { category: 'Targeting', score: 92, color: 'emerald-500', feedback: ['Audience segments are well-defined and exclusive.', 'Negative keyword lists are actively maintained.'] },
    { category: 'Bidding', score: 78, color: 'yellow-500', feedback: ['Target CPA is set too low, restricting volume.', 'Test Maximize Conversions for new campaigns.'] },
    { category: 'Landing Page', score: 82, color: 'emerald-400', feedback: ['Page load speed is optimal on mobile devices.', 'Call-to-action is clear above the fold.'] },
    { category: 'Conversion', score: 74, color: 'yellow-500', feedback: ['Secondary conversion actions are inflating reported value.', 'Offline conversion import is failing frequently.'] },
    { category: 'Audience', score: 81, color: 'emerald-400', feedback: ['Customer match lists haven’t been updated in 90 days.', 'Remarketing lists for cart abandoners are too small.'] },
    { category: 'Schedule', score: 63, color: 'red-500', feedback: ['Ads run 24/7 despite zero leads generated overnight.', 'Weekend bid adjustments are missing completely.'] },
    { category: 'Placement', score: 55, color: 'red-500', feedback: ['Display ads are appearing on low-quality mobile game apps.', 'Exclude sensitive content categories immediately.'] },
    { category: 'Creatives', score: 89, color: 'emerald-400', feedback: ['Video assets are not optimized for vertical mobile screens.', 'Testing only one image variation per ad group.'] },
    { category: 'Attribution', score: 91, color: 'emerald-500', feedback: ['Data-driven model correctly values upper-funnel clicks.', 'Cross-device conversion tracking is fully active.'] },
    { category: 'Negativs', score: 68, color: 'red-500', feedback: ['Broad match modifiers are capturing irrelevant queries.', 'Competitor brand terms need to be negated globally.'] },
  ];

  const duplicatedItems = [...auditItems, ...auditItems];

  return (
    <div className="relative aspect-[9/18.4] bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
      <div className="w-full h-full overflow-hidden">
        <div className="relative bg-white overflow-hidden shadow-2xl mx-auto w-90 md:w-xl h-175 md:h-281.5">
          <div className="w-full h-full bg-[#F8FAFC] flex flex-col">
            <div className="flex-1 overflow-hidden bg-white">
              <div className="w-full will-change-transform" style={{ animation: 'scroll 30s linear infinite' }}>
                <table className="w-full text-left border-collapse table-fixed">
                  <colgroup>
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '85%' }} />
                  </colgroup>
                  <tbody>
                    {duplicatedItems.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-2 px-2 align-top">
                          <div className="flex flex-col gap-1">
                            <span className="text-gray-900 text-sm font-semibold leading-tight">
                              {item.category}
                            </span>
                            <div className="flex items-baseline">
                              <span
                                className="text-2xl font-semibold leading-none"
                                style={{
                                  color: item.color.includes('emerald-500')
                                    ? '#10b981'
                                    : item.color.includes('emerald-400')
                                    ? '#34d399'
                                    : item.color.includes('yellow-500')
                                    ? '#eab308'
                                    : '#ef4444',
                                }}
                              >
                                {item.score}
                              </span>
                              <span className="text-xs text-gray-400 ml-0.5">%</span>
                            </div>
                          </div>
                        </td>

                        <td className="py-2 px-2 align-top">
                          <ul className="space-y-1">
                            {item.feedback.map((feedback, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-gray-700 text-xs">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />
                                <span className="flex-1 max-w-45 leading-snug wrap-break-word line-clamp-2">
                                  {feedback}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[7%] bg-linear-to-b from-black/90 via-black/85 via-70% to-transparent z-10 pointer-events-none" />
      <div className="absolute top-1 left-4 right-4 text-center z-20 pointer-events-none">
        <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide leading-tight block drop-shadow-md">
          Account audits
        </span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1.2px] bg-[#FF4801] z-20 pointer-events-none" />
    </div>
  );
};

export default AccountAudits;
