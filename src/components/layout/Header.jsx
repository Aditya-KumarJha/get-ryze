import React from "react";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="w-full px-8 sm:px-8 md:px-14 py-3 sm:py-5">
      <nav className="relative flex items-center justify-between w-full">
        
        {/* Logo — LEFT CORNER */}
        <a href="/" className="shrink-0 -ml-2 sm:ml-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black cursor-pointer hover:opacity-80 transition-opacity">
            Ryze
          </h1>
        </a>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-14 absolute left-1/2 -translate-x-1/2">
          <a
            href="#case-studies"
            className="text-[17.3px] tracking-wide text-zinc-600 hover:text-black transition-colors font-medium"
          >
            Case Studies
          </a>
          <a
            href="#about"
            className="text-[17.3px] tracking-wide text-zinc-600 hover:text-black transition-colors font-medium"
          >
            About Us
          </a>
        </div>

        {/* CTA — RIGHT CORNER */}
        <div className="shrink-0 -mr-2 sm:mr-0">
          <Button
            variant="primary"
            size="md"
            className="hidden sm:block text-base px-5 py-3"
          >
            Get started
          </Button>

          <Button
            variant="primary"
            size="sm"
            className="block sm:hidden px-5 py-2.75"
          >
            Get started
          </Button>
        </div>

      </nav>
    </header>
  );
};

export default Header;
