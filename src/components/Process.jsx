import React from 'react';
import '../styles/Process.css';

const Process = () => {
  const steps = [
    { title: 'Requirement Analysis', desc: 'Understanding your business goals and current CRM state.' },
    { title: 'Planning', desc: 'Designing a roadmap for custom Salesforce transformation.' },
    { title: 'Implementation', desc: 'Development, configuration, and migration processes.' },
    { title: 'Testing', desc: 'Rigorous QA to ensure seamless integration and functionality.' },
    { title: 'Support', desc: 'Deployment and ongoing optimization of your new system.' }
  ];

  return (
    <section className="process">
      <div className="container">
        <div className="process-header reveal">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">A proven 5-step methodology to ensure your project успех.</p>
        </div>
        
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step reveal">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
