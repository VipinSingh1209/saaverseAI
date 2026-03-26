import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: 'Salesforce Implementation',
      description: 'Systematic setup and deployment matched to your business workflows.',
      icon: '🚀'
    },
    {
      title: 'CRM Customization',
      description: 'Creating custom objects, fields, and layouts to fit your unique data needs.',
      icon: '🛠️'
    },
    {
      title: 'Automation & Workflows',
      description: 'Automate repetitive tasks using Flow and Apex for maximum efficiency.',
      icon: '⚡'
    },
    {
      title: 'Integration Services',
      description: 'Connect Salesforce with ERP, Marketing, and other business apps.',
      icon: '🔗'
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support to ensure your system evolves with your business.',
      icon: '🎧'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header reveal">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive Salesforce solutions designed to streamline your operations and drive revenue.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
