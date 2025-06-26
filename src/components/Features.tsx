import React, { useState, useEffect } from 'react';
import { UserCheck, FileSearch, Zap, Database, ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <UserCheck className="feature-icon" />,
    title: 'Verified Leads',
    description: 'Receive laser-targeted leads, fully verified and aligned to your ideal customer profile (ICP), right in your inbox.',
  },
  {
    icon: <FileSearch className="feature-icon" />,
    title: 'Prospect Intelligence',
    description: "Gain insight into each lead's buying signals, firmographics, and intent, all enriched automatically.",
  },
  {
    icon: <Zap className="feature-icon" />,
    title: 'Smart Automations',
    description: 'Enable intelligent automation to save hours every week and nurture leads without manual intervention.',
  },
  {
    icon: <Database className="feature-icon" />,
    title: 'CRM Integrations',
    description: 'Seamlessly integrate with Salesforce, HubSpot, and more. Handled separately to keep your pipeline fresh.',
  },
];

const Features: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const currentFeature = features[currentIndex];

  return (
    <section id="features" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: '48px' }}>
          <h2 className="section-title">
            Features that <span className="accent-text-blue">convert</span>
          </h2>
          <p className="section-description">
            Everything you need to find, verify, and convert your ideal customers.
          </p>
        </div>

        {/* Feature Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="carousel-btn carousel-btn-left"
            aria-label="Previous feature"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="carousel-btn carousel-btn-right"
            aria-label="Next feature"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Feature Card */}
          <div style={{ padding: '0 64px 48px 64px' }}>
            <div 
              key={currentIndex}
              className="feature-card animate-fade-up"
            >
              {/* Icon */}
              <div className="feature-icon-container">
                {currentFeature.icon}
              </div>

              {/* Content */}
              <h3 className="feature-title">
                {currentFeature.title}
              </h3>
              
              <p className="feature-description">
                {currentFeature.description}
              </p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="text-center">
            <div className="progress-indicator">
              <div className={`status-dot ${isAutoPlaying ? 'active' : ''}`} />
              <span className="status-text">{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
              <span className="separator">•</span>
              <span className="counter-text">{currentIndex + 1} of {features.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;