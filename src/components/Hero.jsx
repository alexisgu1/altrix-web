import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Nurse Workflows <br />
        <span className="hero-highlight">Re-engineered</span>
      </h1>
      <p className="hero-subtitle">
        Save nurses 3 hours a day <br /> on administrative work.
      </p>
      <button className="hero-demo-btn">Request a demo</button>
    </section>
  );
}