import Header from './components/Header';
import Hero from './components/Hero';
import VideoPlaceholder from './components/VideoPlaceholder';
import FeaturesTimeline from './components/FeaturesTimeline';
import PhotoCarousel from './components/PhotoCarousel';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import EnterpriseFeatures from './components/EnterpriseFeatures';
import CTASection from './components/CTASection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <VideoPlaceholder />
      <FeaturesTimeline />
      <PhotoCarousel />
      <Testimonial />
      <EnterpriseFeatures />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;