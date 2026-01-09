import React from 'react';

const rows = [
  ["Brand Search - US", "980", "9.4x", "Raise budget cap (+12%)", "green"],
  ["Brand Search - UK", "410", "8.7x", "Expand exact coverage (+8 kws)", "green"],
  ["Brand Search - EU", "520", "8.9x", "Add negatives (23 terms)", "green"],
  ["Non-Brand Search - Running", "260", "3.2x", "Split ad groups (5 themes)", "gray"],
  ["Non-Brand Search - Trainers", "210", "2.9x", "Bid down (-10%)", "gray"],
  ["Non-Brand Search - Basketball", "140", "2.6x", "Tighten match types (14)", "gray"],
  ["Non-Brand Search - Football", "110", "2.4x", "Add negatives (31 terms)", "orange"],
  ["Non-Brand Search - Gym Wear", "95", "2.1x", "Refresh RSAs (3 new)", "orange"],
  ["Non-Brand Search - Kids", "120", "2.3x", "Fix landing page (2 issues)", "orange"],
  ["PMax - Best Sellers", "340", "4.6x", "Increase budget (+15%)", "green"],
  ["PMax - New Arrivals", "190", "3.7x", "Add assets (6 images)", "gray"],
  ["PMax - Clearance", "220", "5.1x", "Expand feed coverage (+18 SKUs)", "green"],
];

const Badge = ({ children, variant }) => {
  const base =
    "px-1.5 py-0.5 rounded text-[9px] font-bold tabular-nums w-[34px] text-center";

  const colors =
    variant === 'green'
      ? 'bg-green-100 text-green-700'
      : variant === 'orange'
      ? 'bg-orange-50 text-orange-600'
      : 'bg-gray-100 text-gray-700';

  return <div className={`${base} ${colors}`}>{children}</div>;
};

const SuggestionsList = () => {
  return (
    <div className="bg-[#F5F5F7] rounded-lg p-6 flex flex-col gap-6 hover:bg-[#F0F0F2] transition-colors duration-500">
      <h3 className="text-lg font-medium text-black pl-2">
        Suggest what to fix and optimize
      </h3>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden aspect-[1/0.72]">
        <div className="w-full h-full bg-white relative overflow-hidden font-sans">
          <div className="w-full h-full bg-white font-sans flex flex-col relative overflow-hidden select-none text-[10px]">
            <div className="flex items-center px-4 py-3 bg-gray-50 border-b border-gray-200 z-20 relative shadow-sm">
              <div className="w-[35%] font-bold text-gray-500 uppercase tracking-wide">
                Campaign Name
              </div>
              <div className="w-[15%] font-bold text-gray-500 uppercase tracking-wide text-right pr-1.5">
                Conv.
              </div>
              <div className="w-[15%] font-bold text-gray-500 uppercase tracking-wide text-right pr-2">
                ROAS
              </div>
              <div className="w-[35%] font-bold text-gray-500 uppercase tracking-wide pl-2">
                Suggestion
              </div>
            </div>

            <div className="flex-1 relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 w-full animate-scroll-vertical pause-animation">
                {rows.concat(rows).map((r, idx) => (
                  <div
                    key={`${r[0]}-${idx}`}
                    className="flex items-center px-4 py-2 border-b border-gray-50 hover:bg-blue-50/30 transition-colors h-8"
                  >
                    <div
                      className="w-[35%] font-medium text-gray-800 truncate pr-2"
                      title={r[0]}
                    >
                      {r[0]}
                    </div>

                    <div className="w-[15%] text-gray-600 text-right font-mono tracking-tight pr-1.5">
                      {r[1]}
                    </div>

                    <div className="w-[15%] flex justify-end pr-2">
                      <Badge variant={r[4]}>{r[2]}</Badge>
                    </div>

                    <div
                      className="w-[35%] text-gray-500 truncate pl-2 flex items-center gap-1.5"
                      title={r[3]}
                    >
                      {r[3]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute top-0 left-0 w-full h-4 bg-linear-to-b from-white to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-white to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsList;
