import React, { useState, useEffect } from 'react';

const initialTasks = [
  {
    id: 1,
    text: "Pause 27 queries burning $1.8k with 0 conversions (30d)",
    impact: "+$2.5k/mo",
    applied: false
  },
  {
    id: 2,
    text: "Split Brand (ROAS 8.2) from Non-Brand (ROAS 1.6); separate budgets",
    impact: "+$3.7k/mo",
    applied: false
  },
  {
    id: 3,
    text: 'Isolate "project management software" ($3.4k, ROAS 0.9); own ad group, bid down',
    impact: "+$5.8k/mo",
    applied: false
  },
  {
    id: 4,
    text: "Raise cap on Brand US (Lost IS Budget 62%, ROAS 9.1)",
    impact: "+$3.2k/mo",
    applied: false
  },
  {
    id: 5,
    text: 'Add 85 negatives ("jobs", "free", "tutorial") to block waste terms',
    impact: "+$4.6k/mo",
    applied: false
  },
  {
    id: 6,
    text: "Fix tracking: use one conversion set per campaign; dedupe reported events",
    impact: "+$5.9k/mo",
    applied: false
  }
];

const AutonomousAI = () => {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    const animationDuration = 12000; // 12 seconds
    const delayPerTask = 2000; // 2 seconds per task (12s / 6 tasks)
    let timeouts = [];
    
    const runAnimation = () => {
      // Clear any existing timeouts
      timeouts.forEach(timeout => clearTimeout(timeout));
      timeouts = [];
      
      // Reset first
      setTasks(initialTasks);
      
      // Apply each task sequentially with precise timing
      initialTasks.forEach((task, index) => {
        const timeout = setTimeout(() => {
          setTasks(prevTasks => 
            prevTasks.map(t => 
              t.id === task.id ? { ...t, applied: true } : t
            )
          );
        }, delayPerTask * index + 800); // Start at 800ms
        timeouts.push(timeout);
      });
    };

    // Run initial animation
    runAnimation();

    // Set up interval to loop - matches animation exactly
    const interval = setInterval(() => {
      runAnimation();
    }, animationDuration);

    return () => {
      clearInterval(interval);
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const handleHover = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, applied: true } : task
      )
    );
  };

  return (
    <div className="relative lg:border-r border-[#FF4801]/10 px-4 md:px-12 py-12 md:py-24 flex flex-col gap-10 group hover:bg-white/50 transition-colors duration-500 items-center lg:items-start text-center lg:text-left">
      <div className="space-y-10">
        <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-black leading-tight">
          <span className="text-[#FF4801]">Autonomous</span> AI marketer
        </h3>
        <ul className="space-y-6 mt-6 text-left">
          <li className="flex items-start gap-4 text-xl text-zinc-700">
            <div className="mt-2 w-2 h-2 bg-black shrink-0"></div>
            <span className="font-medium">24/7 performance audits</span>
          </li>
          <li className="flex items-start gap-4 text-xl text-zinc-700">
            <div className="mt-2 w-2 h-2 bg-black shrink-0"></div>
            <span className="font-medium">AI creative generation</span>
          </li>
          <li className="flex items-start gap-4 text-xl text-zinc-700">
            <div className="mt-2 w-2 h-2 bg-black shrink-0"></div>
            <span className="font-medium">Suggests tweaks to improve ROAS</span>
          </li>
        </ul>
      </div>

      <div className="mt-6 relative h-fit w-full max-w-2xl overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100/50 shadow-sm flex items-center justify-center">
        <div className="w-full h-fit flex items-center justify-center bg-zinc-50">
          <div className="w-full min-w-0 max-h-fit">
            <div className="w-full h-full bg-white font-sans flex flex-col relative overflow-hidden text-sm select-none">
              <div className="flex-1 overflow-hidden p-3 flex flex-col justify-center">
                {tasks.map((task, index) => (
                  <div
                    key={task.id}
                    onMouseEnter={() => !task.applied && handleHover(task.id)}
                    className={`
                      group flex min-w-0 items-center justify-between px-5 py-3 rounded-lg transition-colors duration-300
                      ${task.applied ? 'bg-[#FF4801]/5' : 'hover:bg-gray-50'}
                    `}
                    style={{ height: '49px' }}
                  >
                    <div className="flex flex-row items-center gap-5 flex-1 min-w-0">
                      <div
                        className={`
                          w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors duration-300
                          ${task.applied ? 'border-[#FF4801] bg-[#FF4801]' : 'border-[#FF4801]/20'}
                        `}
                      >
                        {task.applied && (
                          <svg
                            className="w-2.5 h-2.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-gray-700 truncate w-full text-left transition-colors ${
                          task.applied ? 'text-gray-400' : ''
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span
                        className={`font-medium tabular-nums text-right min-w-17.5 transition-colors ${
                          task.applied ? 'text-green-600' : 'text-gray-400'
                        }`}
                      >
                        {task.impact}
                      </span>
                      <button
                        className={`
                          px-4 py-1.5 rounded-full breakat_530px:block font-medium transition-all duration-300 w-18.5 text-center outline-none focus:outline-none flex items-center justify-center
                          ${
                            task.applied
                              ? 'bg-[#FF4801] text-white shadow-sm'
                              : 'bg-white border border-[#FF4801]/20 text-[#FF4801]'
                          }
                          scale-100
                        `}
                      >
                        {task.applied ? 'Applied' : 'Apply'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cursor Animation */}
              <div
                className="absolute pointer-events-none z-50 top-0 left-7.5 breakat_530px:left-[90%] will-change-transform animate-cursor-move"
              >
                <div className="transition-transform duration-100 origin-top-left">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="drop-shadow-xl"
                  >
                    <path
                      d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19177L17.9141 12.3673H5.65376Z"
                      fill="black"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousAI;
