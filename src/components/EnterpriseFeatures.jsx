import React from 'react';
import './EnterpriseFeatures.css';
import handIcon from './icons/hand.png';
import lockIcon from './icons/lock.png';
import signalIcon from './icons/signal.png';

export default function EnterpriseFeatures() {
  return (
    <section className="enterprise-features">
      <div className="enterprise-heading-group">
        <h2 className="enterprise-heading">Built for Enterprise.</h2>
        <p className="enterprise-subheading">Scalable, Secure, and Deeply Integrated</p>
      </div>
      <div className="enterprise-cards">
        <div className="enterprise-card">
          <div className="enterprise-icon">
            <img src={handIcon} alt="Integrated into your EHR" width={40} height={40} />
          </div>
          <div className="enterprise-card-title">Integrated into your EHR</div>
          <div className="enterprise-card-desc">Our middleware drives deep integration with major EHRs like Epic, Cerner, & Athena.</div>
        </div>
        <div className="enterprise-card">
          <div className="enterprise-icon">
            <img src={lockIcon} alt="Onsite support" width={40} height={40} />
          </div>
          <div className="enterprise-card-title">Onsite support</div>
          <div className="enterprise-card-desc">Through the support of our engineers, we’re on call 24/7 for both nurse managers and IT teams.</div>
        </div>
        <div className="enterprise-card">
          <div className="enterprise-icon">
            <img src={signalIcon} alt="HIPAA & Encryption" width={40} height={40} />
          </div>
          <div className="enterprise-card-title">HIPAA & Encryption</div>
          <div className="enterprise-card-desc">Altrix is fully HIPAA compliant. Built on a secure U.S.-based cloud infrastructure.</div>
        </div>
      </div>
    </section>
  );
} 