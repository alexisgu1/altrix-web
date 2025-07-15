import { useRef, useEffect, useState } from 'react';
import './FeaturesTimeline.css';

const modules = [
  {
    name: "Altrix Flow™",
    features: [
      { title: "Built For Nurses", desc: "AI scribe designed for nursing documentation" },
      { title: "Smart Capture", desc: "Flowsheets, MARs, and handoffs recorded automatically" },
      { title: "Time Savings", desc: "Cuts charting time by up to 3 hours per shift" }
    ]
  },
  {
    name: "Altrix Synapse™",
    features: [
      { title: "Instant Access", desc: "Retrieve policies, labs, and clinical references in seconds" },
      { title: "Natural Language Search", desc: "Ask questions like a human, get answers like an expert" },
      { title: "Trusted Sources", desc: "Linked citations ensure quick and reliable verification" }
    ]
  },
  {
    name: "Altrix Cascade™",
    features: [
      { title: "All-in-One Hub", desc: "Submit, track, and close tasks from a single interface" },
      { title: "Cross-Team Coordination", desc: "Route requests to lab techs, clerks, and clinicians" },
      { title: "Smart Prioritization", desc: "Charge nurses can flag urgent tasks for faster action" }
    ]
  }
];

export default function FeaturesTimeline() {
  const cardRefs = useRef([]);
  const [lineHeights, setLineHeights] = useState([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    function updateHeights() {
      setLineHeights(
        cardRefs.current.map(ref => {
          if (!ref) return 0;
          const cardHeight = ref.offsetHeight;
          const dot = ref.closest('.timeline-item').querySelector('.timeline-dot');
          const dotRect = dot.getBoundingClientRect();
          const cardRect = ref.getBoundingClientRect();
          const lineHeight = cardRect.bottom - dotRect.top - dot.offsetHeight / 2;
          return lineHeight;
        })
      );
    }
    updateHeights();
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  // Intersection Observer for fade-in
  useEffect(() => {
    const obs = new window.IntersectionObserver(
      entries => {
        setVisible(prev => {
          const updated = [...prev];
          entries.forEach(entry => {
            const idx = Number(entry.target.dataset.idx);
            updated[idx] = entry.isIntersecting;
          });
          return updated;
        });
      },
      { threshold: 0.3 }
    );
    cardRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.dataset.idx = idx;
        obs.observe(ref);
      }
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="features-timeline section-spacing">
      <h2 className="features-timeline-title">
        Empower Nurses with a Complete<br />
        Suite of Synergistic Modules.
      </h2>
      <div className="timeline-list">
        {modules.map((mod, idx) => (
          <div className="timeline-item" key={mod.name}>
            <div className="timeline-left-col">
              <div className="timeline-dot-label-row">
                <div className="timeline-dot" />
                <div className="timeline-label">{mod.name}</div>
              </div>
              <div
                className={`timeline-vert-line${visible[idx] ? ' filled' : ''}`}
                style={{
                  height: lineHeights[idx] ? `${lineHeights[idx] - 16 - 8}px` : undefined
                }}
              />
            </div>
            <div
              className={`timeline-content-card${visible[idx] ? ' visible' : ''}`}
              ref={el => (cardRefs.current[idx] = el)}
            >
              {/* Show label above card on small screens */}
              <div className="timeline-label mobile">{mod.name}</div>
              <div className="timeline-card-row">
                <div className="timeline-card-img-placeholder" />
                <ul className="timeline-features">
                  {mod.features.map(f => (
                    <li key={f.title} className="timeline-feature">
                      <div className="timeline-feature-title">{f.title}</div>
                      <div className="timeline-feature-desc">{f.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
