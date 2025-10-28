// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-red-500 text-white text-sm px-6 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 text-center sm:text-left">
        <span>Email: info@21towing.com</span>
        {/* <span>Andrea Richard</span> */}
        <span>Call: +1 (978) 672-6012</span>
      </div>

      {/* Main Nav */}
      <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        {/* Logo / Brand */}
        <a href="#" className="text-xl font-bold hover:text-red-500 transition">
          21 Towing Inc
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-red-400">
            Home
          </a>
          <a href="#services" className="hover:text-red-400">
            Towing Services
          </a>
          <a href="#accident" className="hover:text-red-400">
            Accident Towing
          </a>
          <a href="#about" className="hover:text-red-400">
            About Us
          </a>
          <a href="#reviews" className="hover:text-red-400">
            Our Reviews
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-blue-900 text-white flex flex-col space-y-4 px-6 py-4 md:hidden">
          <a href="#hero" className="hover:text-red-400">
            Home
          </a>
          <a href="#services" className="hover:text-yellow-400">
            Towing Services
          </a>
          <a href="#accident" className="hover:text-red-400">
            Accident Towing
          </a>
          <a href="#about" className="hover:text-red-400">
            About Us
          </a>
          <a href="#reviews" className="hover:text-red-400">
            Our Reviews
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
