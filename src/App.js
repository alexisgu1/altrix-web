import Header from './components/Header';
import Hero from './components/Hero';
import VideoPlaceholder from './components/VideoPlaceholder';
import FeaturesTimeline from './components/FeaturesTimeline';
import PhotoCarousel from './components/PhotoCarousel';
import Testimonial from './components/Testimonial';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="section-spacing">
        <VideoPlaceholder />
      </div>
      <div className="section-spacing">
        <FeaturesTimeline />
      </div>
      <div className="section-spacing">
        <PhotoCarousel />
      </div>
      <div className="section-spacing">
        <Testimonial />
      </div>
    </div>
  );
}

export default App;
