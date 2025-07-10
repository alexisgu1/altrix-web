import './Testimonial.css';

export default function Testimonial({
  image = null, // not used for gray frame
  alt = "Portrait of a nurse",
  label = "WHAT NURSES ARE SAYING",
  quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name = "Jane Doe",
  title = "Nurse at Some Hospital"
}) {
  return (
    <section className="testimonial-section" aria-label="Testimonial">
      <div className="testimonial-image-col">
        <div className="testimonial-img-frame">
          {/* Gray frame only, no image */}
        </div>
      </div>
      <figure className="testimonial-content-col">
        {label && <div className="testimonial-label">{label}</div>}
        <blockquote className="testimonial-quote">
          {quote}
        </blockquote>
        <figcaption className="testimonial-author">
          <span className="testimonial-author-name">{name}</span>
          <span className="testimonial-author-title">{title}</span>
        </figcaption>
      </figure>
    </section>
  );
} 