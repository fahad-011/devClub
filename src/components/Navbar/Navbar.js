import React, { useState } from 'react';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import logo from "../../assests/devlogo.png";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add your logic to toggle dark mode here
  };

  return (
    <nav className={`flex justify-between items-center text-gray-500 p-4 fixed top-0 w-full z-50 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center pl-14 space-x-4"> {/* Add 'pl-4' for left padding and 'space-x-4' for horizontal spacing */}
        <div className="mr-6">
          {isDarkMode ? (
            <FaMoon className="text-xl cursor-pointer" onClick={toggleDarkMode} />
          ) : (
            <FaSun className="text-xl cursor-pointer" onClick={toggleDarkMode} />
          )}
        </div>
        <button className="bg-transparent border-none cursor-pointer p-0 m-0">
          <FaSearch className="text-xl cursor-pointer" />
        </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center w-full">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
        </div>
        <div className="flex pr-4 pr-12 space-x-4"> {/* Add 'pr-4' and 'pl-4' for right and left padding, 'space-x-4' for horizontal spacing */}
        <a href="/" className="font-bold text-black no-underline hover:underline hover:text-[#AF7AF2] transition-all duration-200">Home</a>
<a href="/events" className="ml-4 font-bold text-black no-underline hover:underline hover:text-[#AF7AF2] transition-all duration-200">Events</a>
<a href="/about" className="ml-4 font-bold text-black no-underline hover:underline hover:text-[#AF7AF2] transition-all duration-200">About</a>

        </div>
    </nav>

  );
}

export default Navbar;
