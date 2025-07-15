import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './Platform/Hero';
import VideoPlaceholder from './Platform/VideoPlaceholder';
import FeaturesTimeline from './Platform/FeaturesTimeline';
import PhotoCarousel from './Platform/PhotoCarousel';
import Testimonial from './Platform/Testimonial';
import Footer from './components/Footer';
import EnterpriseFeatures from './Platform/EnterpriseFeatures';
import CTASection from './Platform/CTASection';
import SecurityPage from './components/SecurityPage';
import './App.css';

// Home page component
const HomePage = () => {
  return (
    <>
      <Hero />
      <VideoPlaceholder />
      <FeaturesTimeline />
      <PhotoCarousel />
      <Testimonial />
      <EnterpriseFeatures />
      <CTASection />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;