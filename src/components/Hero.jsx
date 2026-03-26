import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fadeInUp">
          <h1 className="hero-title">
            Transform Your Business with <span>Salesforce CRM</span>
          </h1>
          <p className="hero-subtitle">
            SaaSverse helps businesses automate and scale using next-generation Salesforce solutions. 
            Empower your team with data-driven insights and seamless customer experiences.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Get Free Consultation</button>
            <button className="btn btn-secondary">View Services</button>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="gradient-sphere"></div>
          <div className="hero-card">
            <div className="card-header">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="card-body">
              <div className="bar small"></div>
              <div className="bar medium"></div>
              <div className="bar large"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
