
"use client";
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../app/styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-brand">Asad Iqbal</div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          
          <li className="navbar-Link">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className="navbar-Link">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className="navbar-Link">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="navbar-Link">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="navbar-Link">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

