import React from 'react';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta reveal">
      <div className="container">
        <div className="cta-card">
          <h2>Ready to grow with Salesforce?</h2>
          <p>
            Join hundreds of businesses that have scaled their operations with our custom CRM solutions. 
            Schedule your free consultation today.
          </p>
          <button className="btn btn-primary cta-btn">Book a Free Call</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
