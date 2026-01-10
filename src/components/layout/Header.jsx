import React, { useState, useEffect } from "react";
import Button from "../ui/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2 sm:py-3" 
          : "bg-white py-3 sm:py-5"
      } px-8 sm:px-8 md:px-14`}
    >
      <nav className="relative flex items-center justify-between w-full">
        
        {/* Logo — LEFT CORNER */}
        <a href="/" className="shrink-0 -ml-2 sm:ml-0">
          <h1 
            className={`font-extrabold text-black cursor-pointer hover:opacity-80 transition-all duration-300 ${
              isScrolled ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
            }`}
          >
            Ryze
          </h1>
        </a>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-14 absolute left-1/2 -translate-x-1/2">
          <a
            href="/case-studies"
            className={`tracking-wide text-zinc-600 hover:text-black transition-all duration-300 font-medium ${
              isScrolled ? "text-[15px]" : "text-[17.3px]"
            }`}
          >
            Case Studies
          </a>
          {/* About Us Dropdown */}
          <div className="relative group">
            <a
              href="/about"
              className={`tracking-wide text-zinc-600 hover:text-black transition-all duration-300 font-medium ${
                isScrolled ? "text-[15px]" : "text-[17.3px]"
              }`}
            >
              About Us
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white rounded-xl shadow-lg border border-zinc-100 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all duration-200 z-50">
              <a href="#our-story" className="block px-5 py-3 text-zinc-700 hover:bg-zinc-50 rounded-t-xl transition-colors">Our Story</a>
              <a href="#community" className="block px-5 py-3 text-zinc-700 hover:bg-zinc-50 rounded-b-xl transition-colors">Community</a>
            </div>
          </div>
        </div>

        {/* CTA — RIGHT CORNER */}
        <div className="shrink-0 -mr-2 sm:mr-0">
          <Button
            variant="primary"
            size="md"
            className={`hidden sm:block transition-all duration-300 ${
              isScrolled ? "text-sm px-4 py-2" : "text-base px-5 py-3"
            }`}
          >
            Get started
          </Button>

          <Button
            variant="primary"
            size="sm"
            className={`block sm:hidden transition-all duration-300 ${
              isScrolled ? "px-4 py-2" : "px-5 py-2.75"
            }`}
          >
            Get started
          </Button>
        </div>

      </nav>
    </header>
  );
};

export default Header;
