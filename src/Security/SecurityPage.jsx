import React from 'react';
import SecurityHero from './SecurityHero';
import Footer from '../components/Footer';
import SecurityFeatures from './SecurityFeatures';
import SecurityCompliance from './SecurityCompliance';
import SecurityCTA from './SecurityCTA';

const SecurityPage = () => {
  return (
    <>
      <SecurityHero />
      <SecurityFeatures />
      <SecurityCompliance />
      <SecurityCTA />
    </>
  );
};

export default SecurityPage;