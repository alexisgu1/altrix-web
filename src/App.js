import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SecurityPage from './Security/SecurityPage';
import CompanyPage from './Company/CompanyPage';
import './App.css';

// Platform components
import Hero from './Platform/Hero';
import VideoPlaceholder from './Platform/VideoPlaceholder';
import FeaturesTimeline from './Platform/FeaturesTimeline';
import PhotoCarousel from './Platform/PhotoCarousel';
import Testimonial from './Platform/Testimonial';
import EnterpriseFeatures from './Platform/EnterpriseFeatures';
import CTASection from './Platform/CTASection';

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
    <Router basename="/altrix-web">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/company" element={<CompanyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;