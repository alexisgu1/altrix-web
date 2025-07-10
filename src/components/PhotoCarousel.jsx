import './PhotoCarousel.css';
import { useRef, useEffect } from 'react';

// Import all images
import img1 from '../photos/image 1.png';
import img2 from '../photos/image 2.png';
import img3 from '../photos/image 3.png';
import img4 from '../photos/image 4.png';
import img5 from '../photos/image 5.png';
import img6 from '../photos/image 6.png';
import img7 from '../photos/image 7.png';

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function PhotoCarousel() {
  const trackRef = useRef(null);
  const setRef = useRef(null);
  const outerRef = useRef(null);
  const animationRef = useRef();
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);

  // Measure the width of one set (including gap)
  useEffect(() => {
    function updateSetWidth() {
      if (setRef.current) {
        setWidthRef.current = setRef.current.scrollWidth;
        if (outerRef.current) {
          console.log('carousel-outer width:', outerRef.current.offsetWidth);
        }
        console.log('carousel-set width:', setWidthRef.current);
      }
    }
    updateSetWidth();
    window.addEventListener('resize', updateSetWidth);
    return () => window.removeEventListener('resize', updateSetWidth);
  }, []);

  useEffect(() => {
    let lastTimestamp = null;
    const speed = 60; // px per second
    function animate(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;
      offsetRef.current -= speed * elapsed;
      // When we've scrolled the width of one set, reset to the beginning of the second set
      if (setWidthRef.current > 0 && Math.abs(offsetRef.current) >= setWidthRef.current) {
        console.log('RESET! offset:', offsetRef.current, 'setWidth:', setWidthRef.current);
        offsetRef.current = 0;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="photo-carousel-section section-spacing">
      <h2 className="photo-carousel-title">
      Co-Developed with Leading<br />
      RNs, CNOs, & Engineers
      </h2>
      <div className="carousel-outer" ref={outerRef}>
        <div className="carousel-track" ref={trackRef}>
          <div className="carousel-set" ref={setRef}>
            {images.map((img, i) => (
              <div className="carousel-img-wrapper" key={i}>
                <img src={img} alt={`carousel ${i}`} className="carousel-img" />
              </div>
            ))}
          </div>
          <div className="carousel-set">
            {images.map((img, i) => (
              <div className="carousel-img-wrapper" key={i+images.length}>
                <img src={img} alt={`carousel ${i+images.length}`} className="carousel-img" />
              </div>
            ))}
          </div>
          <div className="carousel-set">
            {images.map((img, i) => (
              <div className="carousel-img-wrapper" key={i+images.length*2}>
                <img src={img} alt={`carousel ${i+images.length*2}`} className="carousel-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
