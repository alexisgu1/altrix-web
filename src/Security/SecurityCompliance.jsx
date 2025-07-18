import React from 'react';
import './SecurityCompliance.css';
import twiceIcon from '../components/security icons/twice.png';
import onceIcon from '../components/security icons/once.png';

export default function SecurityCompliance() {
  return (
    <section className="security-compliance">
      <div className="security-compliance-heading-group">
        <h2 className="security-compliance-heading">Compliant with World-Class Standards</h2>
      </div>
      <div className="security-compliance-cards">
        <div className="security-compliance-card">
          <div className="security-compliance-icon">
            <img src={twiceIcon} alt="SOC 2 Type I" width={40} height={40} />
          </div>
          <div className="security-compliance-card-title">SOC 2 Type I</div>
          <div className="security-compliance-card-desc">Independently audited controls certified for security and availability.</div>
        </div>
        <div className="security-compliance-card">
          <div className="security-compliance-icon">
            <img src={onceIcon} alt="HIPAA-Compliant" width={40} height={40} />
          </div>
          <div className="security-compliance-card-title">HIPAA-Compliant</div>
          <div className="security-compliance-card-desc">Meets U.S. healthcare privacy and security requirements for handling patient data.</div>
        </div>
        <div className="security-compliance-card">
          <div className="security-compliance-icon">
            <img src={twiceIcon} alt="SOC 2 Type II" width={40} height={40} />
          </div>
          <div className="security-compliance-card-title">SOC 2 Type II</div>
          <div className="security-compliance-card-desc">Independently audited controls certified for security.</div>
        </div>
      </div>
    </section>
  );
} 