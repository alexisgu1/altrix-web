import Header from './components/Header';
import Hero from './components/Hero';
import VideoPlaceholder from './components/VideoPlaceholder';
import FeaturesTimeline from './components/FeaturesTimeline';
import PhotoCarousel from './components/PhotoCarousel';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import EnterpriseFeatures from './components/EnterpriseFeatures';
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
      <EnterpriseFeatures />
      <Footer />
    </div>
  );
}

export default App;
