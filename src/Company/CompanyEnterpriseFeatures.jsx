import React from 'react';
import './CompanyEnterpriseFeatures.css';
import image8 from './Company-photos/image 8.png';
import image9 from './Company-photos/image 9.png';
import image10 from './Company-photos/image 10.png';

export default function CompanyEnterpriseFeatures() {
  return (
    <section className="enterprise-features">
      <div className="enterprise-heading-group">
        <h2 className="enterprise-heading">Trusted by Industry Veterans</h2>
      </div>
      <div className="enterprise-cards">
        <div className="enterprise-card">
          <div className="enterprise-photo photo-fixed-width">
            <img src={image8} alt="Company photo 1" />
          </div>
        </div>
        <div className="enterprise-card">
          <div className="enterprise-photo photo-fixed-width-wide">
            <img src={image9} alt="Company photo 2" />
          </div>
        </div>
        <div className="enterprise-card">
          <div className="enterprise-photo photo-fixed-width">
            <img src={image10} alt="Company photo 3" />
          </div>
        </div>
      </div>
    </section>
  );
} 