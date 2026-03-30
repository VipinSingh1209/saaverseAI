import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <img src={logo} alt="SaaSverse" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* <button className="btn btn-primary nav-cta">Get Started</button> */}
        <button className="btn btn-primary nav-cta" onClick={() => window.open("https://crm.saasverse.ai/apps")}>
  Dashboard
</button>
      </div>
    </nav>
  );
};

export default Navbar;
