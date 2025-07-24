import './CompanyPage.css';
import CompanyEnterpriseFeatures from './CompanyEnterpriseFeatures';
import CompanyAccordian from './CompanyAccordian';
import CompanyCTA from './CompanyCTA';

export default function CompanyPage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">
          Easing the<br />Burden of
          <span className="hero-highlight"> Care</span>
        </h1>
        <p className="hero-subtitle">
        Altrix charts for you, so you<br />can stress less.
        </p>
        <button className="hero-demo-btn">Request a demo</button>
      </section>
      <CompanyAccordian />
      <CompanyEnterpriseFeatures />
      <CompanyCTA />
      
    </>
  );
} 