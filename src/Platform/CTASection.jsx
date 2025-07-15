import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">
        Advancing the Future of<br />
        Nurse-Centric AI in Healthcare.
      </h2>
      <div className="cta-buttons">
        <button className="cta-demo-btn">Request a Demo</button>
        <button className="cta-research-btn">Request Research</button>
      </div>
    </section>
  );
};

export default CTASection;