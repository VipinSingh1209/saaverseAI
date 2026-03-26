import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'CEO, TechFlow',
      text: 'SaaSverse transformed our sales operations. The automation they implemented saved us 20+ hours a week.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, GrowFast',
      text: 'The most professional Salesforce team we’ve worked with. Their customization was exactly what we needed.',
      avatar: 'MC'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Sales, CloudScale',
      text: 'Exceptional integration service. They connected our entire ecosystem to Salesforce seamlessly.',
      avatar: 'ER'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header reveal">
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle">Hear from businesses that have scaled with SaaSverse.</p>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card reveal">
              <div className="quote-icon">“</div>
              <p className="review-text">{review.text}</p>
              <div className="client-info">
                <div className="avatar">{review.avatar}</div>
                <div>
                  <h4 className="client-name">{review.name}</h4>
                  <p className="client-role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
