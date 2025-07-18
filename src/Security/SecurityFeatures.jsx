import React from 'react';
import './SecurityFeatures.css';

export default function SecurityFeatures() {
  const features = [
    {
      title: "Dedicated Security Team",
      description: "Our in-house engineers, trained in secure development, maintain and monitor infrastructure around the clock."
    },
    {
      title: "Independent Testing", 
      description: "We partner with industry-leading auditors for regular penetration testing and risk assessments."
    },
    {
      title: "No Training on Your Data",
      description: "Altrix never trains on hospital or patient data. Your workflows stay private."
    },
    {
      title: "Custom Governance",
      description: "From SSO and audit logs to role-based access and IP allow-listing, our platform adapts to your enterprise compliance needs."
    },
    {
      title: "Data Residency Controls", 
      description: "Deploy with confidence. Our platform supports regional data storage controls to align with your internal policies."
    },
    {
      title: "Security Advisory Board",
      description: "We consult with senior security leaders across cloud, health, and finance to ensure ongoing resilience and compliance."
    }
  ];

  return (
    <section className="security-features-section">
      <div className="security-features-heading-group">
        <h2 className="security-features-heading">Enterprise-Grade Protection</h2>
        <p className="security-features-subheading">
          Altrix is HIPAA- and SOC 2-compliant by design, with<br />
          encryption in transit.
        </p>
      </div>
      <div className="security-features-cards">
        {features.map((feature, index) => (
          <div key={index} className="security-feature-card">
            <div className="security-feature-title">{feature.title}</div>
            <div className="security-feature-desc">{feature.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}