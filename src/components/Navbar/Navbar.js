import React, { useState } from 'react';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import logo from "../../assests/devlogo.png"
import './Navbar.css';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add your logic to toggle dark mode here
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-left">
        <div className="mode-container">
          {isDarkMode ? (
            <FaMoon className="mode-icon" onClick={toggleDarkMode} />
          ) : (
            <FaSun className="mode-icon" onClick={toggleDarkMode} />
          )}
        </div>
        <button className="search-button">
          <FaSearch className="search-icon" />
        </button>
      </div>
      <div className="navbar-middle">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="navbar-right">
        <a href="/" className="nav-link">Home</a>
        <a href="/events" className="nav-link">Events</a>
        <a href="/about" className="nav-link">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
