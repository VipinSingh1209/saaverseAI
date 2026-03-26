import React from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const points = [
    { title: 'Fast Delivery', desc: 'Agile methodology for quick turnaround times.' },
    { title: 'Scalable Systems', desc: 'Built-to-last architecture that grows with you.' },
    { title: 'Affordable Pricing', desc: 'Premium solutions at competitive rates.' },
    { title: 'Expert Team', desc: 'Vetted professionals with years of experience.' }
  ];

  return (
    <section className="why-us">
      <div className="container why-container">
        <div className="why-content reveal">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            Partner with experts who understand your business as much as they understand Salesforce.
          </p>
          
          <ul className="points-list">
            {points.map((point, index) => (
              <li key={index} className="point-item">
                <div className="check-icon">✓</div>
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="why-visual reveal">
          <div className="abstract-shape"></div>
          <div className="stat-card">
            <h3>95%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
