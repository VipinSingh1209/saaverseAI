import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="logo footer-logo">
              <img src={logo} alt="SaaSverse" />
            </div>
            <p className="footer-desc">
              Your trusted partner for Salesforce CRM solutions. We help businesses automate, scale, and succeed.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact" id="contact">
            <h4>Contact Info</h4>
            <ul>
              {/* <li>📧 info@saasverse.com</li> */}
              <li>+91-9001622254</li>
              {/* <li>📍 123 Salesforce Way, Suite 100, San Francisco, CA</li> */}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Saasverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
