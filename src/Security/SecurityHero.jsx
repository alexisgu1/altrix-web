import './SecurityHero.css';

export default function SecurityHero() {
  return (
    <section className="security-hero">
      <h1 className="security-hero-title">
        For Nurses, AI,<br />
        and <span className="security-hero-highlight">Security</span>
      </h1>
      <p className="security-hero-subtitle">
        Altrix protects client data<br />
        with top-tier encryption.
      </p>
      <button className="security-hero-btn">Request a demo</button>
    </section>
  );
}