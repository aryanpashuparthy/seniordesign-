import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">🏠 WiseShare</span>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search houses..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <div className="navbar-right">
        <Link to="#" className="icon-button">?</Link>
        <div className="dropdown">
          <button onClick={toggleUserDropdown} className="icon-button">🙎🏼</button>
          {isUserDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={toggleLanguageDropdown} className="icon-button">🌐 English ▼</button>
          {isLanguageDropdownOpen && (
            <div className="dropdown-content">
              <Link to="#">English</Link>
              <Link to="#">Spanish</Link>
              <Link to="#">French</Link>
              {/* Add more languages as needed */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
