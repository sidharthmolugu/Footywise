import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import './styles/main.css';

function App() {
  return (
    <div className="atlassian-theme">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}

export default App;
