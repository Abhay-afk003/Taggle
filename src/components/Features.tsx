import React, { useState, useEffect } from 'react';
import { UserCheck, FileSearch, Zap, Database, ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <UserCheck className="w-8 h-8 text-white" />,
    title: 'Verified Leads',
    description: 'Receive laser-targeted leads, fully verified and aligned to your ideal customer profile (ICP), right in your inbox.',
  },
  {
    icon: <FileSearch className="w-8 h-8 text-white" />,
    title: 'Prospect Intelligence',
    description: "Gain insight into each lead's buying signals, firmographics, and intent, all enriched automatically.",
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: 'Smart Automations',
    description: 'Enable intelligent automation to save hours every week and nurture leads without manual intervention.',
  },
  {
    icon: <Database className="w-8 h-8 text-white" />,
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
        <div className="text-center max-w-3xl mx-auto rhythm-48">
          <h2 className="section-heading rhythm-24">
            Features that <span className="gradient-text-1">convert</span>
          </h2>
          <p className="body-text text-white/80">
            Everything you need to find, verify, and convert your ideal customers.
          </p>
        </div>

        {/* Feature Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 touch-target bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
            aria-label="Previous feature"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 touch-target bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
            aria-label="Next feature"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Feature Card */}
          <div className="px-16 py-12">
            <div 
              key={currentIndex}
              className="card text-center max-w-2xl mx-auto p-12 animate-fade-up"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white/5 border border-white/20 rounded-full flex items-center justify-center mx-auto rhythm-24">
                {currentFeature.icon}
              </div>

              {/* Content */}
              <h3 className="section-heading gradient-text-1 rhythm-16">
                {currentFeature.title}
              </h3>
              
              <p className="body-text text-white/80 max-w-lg mx-auto">
                {currentFeature.description}
              </p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 rhythm-16">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-xs text-white/40">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-white/40'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
              <span>•</span>
              <span>{currentIndex + 1} of {features.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;