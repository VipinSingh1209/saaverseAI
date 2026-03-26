import React from 'react';
import '../styles/About.css';

const About = () => {
  const highlights = [
    {
      title: 'Certified Salesforce Experts',
      description: 'Our team consists of certified architects and developers with years of experience.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    },
    {
      title: 'Custom CRM Solutions',
      description: 'We build tailor-made Salesforce environments that fit your specific business needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      )
    },
    {
      title: 'End-to-End Support',
      description: 'From implementation to maintenance, we are with you every step of the way.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      )
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header reveal">
          <h2 className="section-title">About SaaSverse</h2>
          <p className="section-subtitle">
            We are a premier Salesforce consulting partner dedicated to helping businesses leverage the power of cloud technology to drive growth and efficiency.
          </p>
        </div>
        
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card reveal">
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
