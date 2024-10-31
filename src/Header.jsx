import React, { useState } from 'react';

const SimpleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the menu if it's open
  };

  return (
    <nav className="text-black font-sans p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-lg">
          <img src="../public/LOGO.png" alt="Logo" className="h-10" />
        </a>
        <div className="hidden md:flex space-x-4 font-bold">
          <a
            href="#"
            onClick={() => handleScrollToSection('hero')}
            className="before:w-0 hover:before:w-full before:bg-[#2ECC40] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#2ECC40] transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => handleScrollToSection('about')}
            className="before:w-0 hover:before:w-full before:bg-[#2ECC40] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#2ECC40] transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => handleScrollToSection('experience')}
            className="before:w-0 hover:before:w-full before:bg-[#2ECC40] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#2ECC40] transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            Experience
          </a>
          <a
            href="#"
            onClick={() => handleScrollToSection('portfolio')}
            className="before:w-0 hover:before:w-full before:bg-[#2ECC40] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#2ECC40] transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            Portfolio
          </a>
          <a
            href="#"
            onClick={() => handleScrollToSection('skills')}
            className="before:w-0 hover:before:w-full before:bg-[#2ECC40] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#2ECC40] transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            Skills
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col bg-black space-y-2 mt-2 p-4 rounded-lg shadow-lg">
          <a href="#" onClick={() => handleScrollToSection('hero')} className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#" onClick={() => handleScrollToSection('about')} className="text-white hover:text-gray-200">
            About
          </a>
          <a href="#" onClick={() => handleScrollToSection('experience')} className="text-white hover:text-gray-200">
            Experience
          </a>
          <a href="#" onClick={() => handleScrollToSection('portfolio')} className="text-white hover:text-gray-200">
            Portfolio
          </a>
          <a href="#" onClick={() => handleScrollToSection('skills')} className="text-white hover:text-gray-200">
            Skills
          </a>
        </div>
      )}
    </nav>
  );
};

export default SimpleNavbar;
