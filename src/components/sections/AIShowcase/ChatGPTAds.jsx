import React, { useState, useEffect, useRef } from 'react';

const messages = [
  {
    id: 1,
    type: 'user',
    text: 'Why did ROAS drop?'
  },
  {
    id: 2,
    type: 'ai',
    text: 'Add 1% purchaser lookalikes and high-intent retargeting. Exclude employees and store visitors.'
  },
  {
    id: 3,
    type: 'user',
    text: 'Where is budget wasted?'
  },
  {
    id: 4,
    type: 'ai',
    text: 'CPMs rose 22% and CVR fell in prospecting; top videos show clear fatigue.'
  },
  {
    id: 5,
    type: 'user',
    text: 'Which campaigns should scale?'
  },
  {
    id: 6,
    type: 'ai',
    text: 'Retargeting and branded search have the strongest CPA. Increase budgets slowly, ~10% daily.'
  },
  {
    id: 7,
    type: 'user',
    text: 'Is targetting too broad?'
  },
  {
    id: 8,
    type: 'ai',
    text: 'Yes—audience overlap is high. Tighten interest stacks and exclude recent purchasers.'
  },
];

const ChatGPTAds = () => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const typingSpeed = 50; 
    const messageDelay = 1500; 
    const typingDelay = 800;
    const aiThinkingDelay = 1000; // Time AI shows "thinking" dots
    let timeouts = [];

    const runAnimation = () => {
      // Clear existing timeouts
      timeouts.forEach(timeout => clearTimeout(timeout));
      timeouts = [];
      
      let currentTime = 0;

      messages.forEach((message, index) => {
        if (message.type === 'user') {
          // Show typing animation for user messages
          const userText = message.text;
          
          // Start typing
          const startTypingTimeout = setTimeout(() => {
            setIsTyping(true);
            setTypingText('');
            
            // Type character by character
            for (let i = 0; i <= userText.length; i++) {
              const charTimeout = setTimeout(() => {
                setTypingText(userText.slice(0, i));
              }, typingSpeed * i);
              timeouts.push(charTimeout);
            }
            
            // After typing is complete, send the message
            const sendTimeout = setTimeout(() => {
              setIsTyping(false);
              setTypingText('');
              setVisibleMessages(prev => [...prev, message]);
              
              // Auto-scroll
              setTimeout(() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
                }
              }, 50);
            }, typingSpeed * userText.length + 300);
            timeouts.push(sendTimeout);
          }, currentTime);
          timeouts.push(startTypingTimeout);
          
          currentTime += typingDelay + (typingSpeed * userText.length) + 300;
        } else {
          // AI messages - show thinking dots immediately after user message
          const thinkingTimeout = setTimeout(() => {
            setIsAiThinking(true);
            
            // Auto-scroll when thinking starts
            setTimeout(() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
              }
            }, 50);
          }, currentTime + 200); // Small 200ms delay after user message sends
          timeouts.push(thinkingTimeout);
          
          // Then show the actual message
          const timeout = setTimeout(() => {
            setIsAiThinking(false);
            setVisibleMessages(prev => [...prev, message]);
            
            // Auto-scroll
            setTimeout(() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
              }
            }, 50);
          }, currentTime + 200 + aiThinkingDelay);
          timeouts.push(timeout);
          
          currentTime += 200 + aiThinkingDelay + messageDelay;
        }
      });

      // Reset for next loop - but don't clear, just restart
      const resetTimeout = setTimeout(() => {
        setVisibleMessages([]);
        setTypingText('');
        setIsTyping(false);
        setIsAiThinking(false);
      }, currentTime + 500);
      timeouts.push(resetTimeout);
    };

    // Initial run
    runAnimation();

    // Calculate total animation time
    const totalTime = messages.reduce((acc, msg) => {
      if (msg.type === 'user') {
        return acc + typingDelay + (typingSpeed * msg.text.length) + 300;
      }
      return acc + 200 + aiThinkingDelay + messageDelay;
    }, 0) + 500;

    // Loop animation
    const interval = setInterval(() => {
      runAnimation();
    }, totalTime);

    return () => {
      clearInterval(interval);
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="relative px-4 md:px-12 py-12 md:py-24 flex flex-col gap-10 group hover:bg-white/50 transition-colors duration-500 lg:-translate-x-0.5 items-center lg:items-start text-center lg:text-left">
      <div className="space-y-10">
        <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-black leading-tight">
          ChatGPT for <br />
          <span className="text-zinc-400">paid ads</span>
        </h3>
        <ul className="space-y-6 mt-6 text-left">
          <li className="flex items-start gap-4 text-xl text-zinc-700">
            <div className="mt-2 w-2 h-2 bg-black shrink-0"></div>
            <span className="font-medium">"How can I improve ROAS?"</span>
          </li>
          <li className="flex items-start gap-4 text-xl text-zinc-700">
            <div className="mt-2 w-2 h-2 bg-black shrink-0"></div>
            <span className="font-medium">"What are my best-performing assets?"</span>
          </li>
          <li className="flex items-start gap-4 text-xl text-zinc-700">
            <div className="mt-2 w-2 h-2 bg-black shrink-0"></div>
            <span className="font-medium">"Which campaigns are wasting spend?"</span>
          </li>
        </ul>
      </div>

      <div className="mt-6 relative h-75 w-full max-w-md lg:max-w-full overflow-hidden rounded-2xl bg-white border border-zinc-100/50 shadow-sm">
        <div className="w-full h-full bg-white relative overflow-hidden font-sans">
          <div className="w-full h-full">
            <div className="w-full h-full flex flex-col font-sans bg-gray-50/50 text-sm overflow-hidden">
              <div 
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth hide-scrollbar"
              >
                {visibleMessages.map((message, index) => (
                  <div
                    key={`${message.id}-${index}`}
                    className={`flex w-full items-end gap-3 ${
                      message.type === 'ai' ? 'justify-start' : 'justify-end'
                    } animate-fade-up`}
                  >
                    {message.type === 'ai' && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>
                    )}
                    <div
                      className={`
                        max-w-[70%] px-4 py-3 rounded-2xl text-sm shadow-sm leading-relaxed
                        ${
                          message.type === 'ai'
                            ? 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                            : 'bg-[#FF4801] text-white rounded-br-none'
                        }
                      `}
                    >
                      {message.text}
                    </div>
                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-[#FF4801] shrink-0"></div>
                    )}
                  </div>
                ))}
                
                {/* AI Thinking Indicator */}
                {isAiThinking && (
                  <div className="flex w-full items-end gap-3 justify-start animate-fade-up">
                    <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0"></div>
                    <div className="px-4 py-3 rounded-2xl text-sm shadow-sm leading-relaxed bg-white text-gray-800 border border-gray-200 rounded-bl-none">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="h-2"></div>
              </div>

              <div className="bg-white p-3 border-t border-gray-100 shrink-0 flex justify-center">
                <div className="w-2/3 h-10 bg-gray-100 rounded-full flex items-center px-4 text-gray-800 text-sm relative overflow-hidden">
                  {isTyping && typingText ? (
                    <span className="text-gray-800">{typingText}<span className="animate-pulse">|</span></span>
                  ) : (
                    <span className="opacity-40 text-gray-400">Ask AI Analyst...</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTAds;
