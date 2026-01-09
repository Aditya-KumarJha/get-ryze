import React from 'react';

const SmallCard = ({ title, value, hint }) => (
  <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 relative group">
    <div className="flex justify-between items-start">
      <span className="text-lg font-bold text-slate-800 tracking-tight">
        {value}
      </span>

      <div className="flex flex-col items-center">
        <svg
          className="w-3 h-3 text-red-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[8px] font-bold text-red-500">10%</span>
      </div>
    </div>

    <p className="text-[9px] font-medium text-slate-500 mt-0.5">
      {title}
    </p>

    <p className="text-[7px] text-slate-400 mt-1 leading-tight">
      {hint}
    </p>
  </div>
);

const ReportsPanel = () => {
  return (
    <div className="bg-[#F5F5F7] rounded-lg p-6 flex flex-col gap-6 hover:bg-[#F0F0F2] transition-colors duration-500">
      <h3 className="text-lg font-medium text-black pl-2">
        Reports that build themselves
      </h3>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center relative aspect-[1/0.72] overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-white p-4">
          <div className="h-full w-full relative">
            <div className="absolute top-0 left-0 w-full h-4 bg-linear-to-b from-white to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 w-full h-4 bg-linear-to-t from-white to-transparent pointer-events-none z-10" />

            <div className="animate-auto-scroll">
              <div className="p-4 space-y-6">
                <div>
                  <h1 className="text-xl font-bold text-slate-900 leading-tight">
                    Advertising Performance Report
                  </h1>
                  <p className="text-xs font-medium text-[#FF4801] mt-1">
                    Top Spending Static Ad Performance Review
                  </p>
                  <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                    Your Meta advertising portfolio shows mixed performance across
                    accounts, with total spend of $17,796 generated $22,748 in
                    revenue, resulting in an overall ROAS of 1.28x.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <SmallCard
                    title="Total Ad Spend"
                    value="$17K"
                    hint="Seasonal drop"
                  />
                  <SmallCard
                    title="ROAS"
                    value="3.2"
                    hint="Improving perf."
                  />
                  <SmallCard
                    title="AOV"
                    value="$105"
                    hint="Budget adjust"
                  />
                </div>

                <div className="bg-[#FF4801]/5 p-3 rounded-lg border border-[#FF4801]/10">
                  <h3 className="text-xs font-semibold text-slate-900 mb-2">
                    Meta Ads Analysis
                  </h3>

                  <div className="h-24 flex items-end justify-between gap-1 px-1 relative">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 10 70 L 60 50 L 110 60 L 160 30 L 210 50 L 260 20 L 310 60 L 350 10"
                        fill="none"
                        stroke="#FF4801"
                        strokeWidth="2"
                        strokeOpacity="1"
                      />
                    </svg>

                    <div className="w-full bg-[#FF4801] rounded-t-sm opacity-60" style={{ height: '20%' }} />
                    <div className="w-full bg-[#FF4801] rounded-t-sm opacity-60" style={{ height: '45%' }} />
                    <div className="w-full bg-[#FF4801] rounded-t-sm opacity-60" style={{ height: '25%' }} />
                    <div className="w-full bg-[#FF4801] rounded-t-sm opacity-60" style={{ height: '60%' }} />
                    <div className="w-full bg-[#FF4801] rounded-t-sm opacity-60" style={{ height: '45%' }} />
                    <div className="w-full bg-[#FF4801] rounded-t-sm opacity-60" style={{ height: '85%' }} />
                    <div className="w-full bg-[#FF4801] rounded-t-sm opacity-60" style={{ height: '85%' }} />
                    <div className="w-full bg-[#FF4801] rounded-t-sm opacity-60" style={{ height: '90%' }} />
                  </div>

                  <div className="flex justify-between text-[7px] text-slate-400 mt-1 px-1">
                    <span>2012</span>
                    <span>2013</span>
                    <span>2014</span>
                    <span>2015</span>
                    <span>2016</span>
                    <span>2017</span>
                    <span>2018</span>
                    <span>2019</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-2">
                    Current Creative Analysis
                  </h3>

                  <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm text-[10px] p-2">
                    <table className="w-full text-left table-fixed text-[8px]">
                      <thead className="bg-[#FF4801]">
                        <tr>
                          <th className="px-2 py-1.5 text-[7px] font-semibold text-white w-[25%]">
                            Campaign Name
                          </th>
                          <th className="px-1 py-1.5 text-[7px] font-semibold text-white w-[12%]">
                            ROAS
                          </th>
                          <th className="px-1 py-1.5 text-[7px] font-semibold text-white w-[12%]">
                            CPA
                          </th>
                          <th className="px-2 py-1.5 text-[7px] font-semibold text-white w-[30%]">
                            Strategic Insight
                          </th>
                          <th className="px-1 py-1.5 text-[7px] font-semibold text-white w-[21%]">
                            Action Plan
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-[#FF4801]/10">
                        <tr className="bg-[#FF4801]/5">
                          <td className="px-2 py-2 text-[7px] text-slate-700 font-medium leading-tight">
                            Monthly Sales Report
                          </td>
                          <td className="px-1 py-2 text-[7px] text-slate-700 font-medium">
                            3.2
                          </td>
                          <td className="px-1 py-2 text-[7px] text-slate-700 font-medium">
                            $23
                          </td>
                          <td className="px-2 py-2 text-[7px] text-slate-700 leading-tight">
                            Sales Campaign is doing well
                          </td>
                          <td className="px-1 py-2 text-[7px] text-slate-700 font-medium">
                            Scale all Ads
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPanel;
