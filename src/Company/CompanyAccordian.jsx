// src/components/CompanyAccordian.jsx
import { useState } from 'react';
import './CompanyAccordian.css';

const sections = [
  {
    title: 'Who We Are',
    content: 'Altrix is an applied research lab based at the University of Michigan. Our team blends frontline nurses, clinical leaders, and engineers from top health systems across the U.S.'
  },
  {
    title: 'Why We Exist',
    content: 'In a typical 12-hour shift, nurses spend 4+ hours on repetitive charting and coordination. We’re here to change that.'
  },
  {
    title: 'What We Do',
    content: 'We build smart, seamless tools for documentation, information retrieval, and task management—wrapped in one intuitive platform.'
  }
];

export default function CompanyAccordian() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="company-accordian">
      <h2 className="company-accordian-title">Why Altrix</h2>
      <div className="accordian-container">
        {sections.map((sec, i) => (
          <div key={sec.title} className={`accordian-item ${openIndex === i ? 'open' : ''}`}>
            <button className="accordian-header" onClick={() => toggle(i)}>
              <span className="accordian-icon">{openIndex === i ? '−' : '+'}</span>
              {sec.title}
            </button>
            <div className="accordian-content">
              <p>{sec.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
