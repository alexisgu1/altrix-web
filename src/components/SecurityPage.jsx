import React from 'react';
import './SecurityPage.css';

const SecurityPage = () => {
  return (
    <div className="security-page">
      <div className="security-hero">
        <div className="security-hero-content">
          <h1>Security & Compliance</h1>
          <p className="security-subtitle">
            Enterprise-grade security built into every layer of our platform
          </p>
        </div>
      </div>
      
      <div className="security-content">
        <div className="security-section">
          <h2>Data Protection</h2>
          <p>
            Your data is protected with industry-leading encryption standards. We use 
            AES-256 encryption for data at rest and TLS 1.3 for data in transit, 
            ensuring your information remains secure at all times.
          </p>
        </div>
        
        <div className="security-section">
          <h2>Compliance Standards</h2>
          <p>
            Our platform meets the highest compliance standards including SOC 2 Type II, 
            GDPR, HIPAA, and ISO 27001. We regularly undergo third-party audits to 
            maintain these certifications and ensure continuous compliance.
          </p>
        </div>
        
        <div className="security-section">
          <h2>Security Features</h2>
          <div className="security-features-grid">
            <div className="security-feature">
              <h3>Multi-Factor Authentication</h3>
              <p>Advanced MFA with biometric options and hardware security keys</p>
            </div>
            <div className="security-feature">
              <h3>Role-Based Access Control</h3>
              <p>Granular permissions and access management for teams</p>
            </div>
            <div className="security-feature">
              <h3>Real-Time Monitoring</h3>
              <p>24/7 security monitoring with instant threat detection</p>
            </div>
            <div className="security-feature">
              <h3>Secure API</h3>
              <p>OAuth 2.0 and API key management with rate limiting</p>
            </div>
          </div>
        </div>
        
        <div className="security-section">
          <h2>Incident Response</h2>
          <p>
            Our dedicated security team is available 24/7 to respond to any security 
            incidents. We maintain detailed incident response procedures and regularly 
            conduct security drills to ensure rapid response times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage; 