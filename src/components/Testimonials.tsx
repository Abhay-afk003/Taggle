import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Taggle has transformed our B2B outreach completely. We've seen a 43% increase in qualified leads and our sales team is closing deals 30% faster than before.",
    name: "Sarah Johnson",
    role: "VP of Sales",
    company: "TechGrowth Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5,
  },
  {
    quote: "Thanks to Taggle, we're focusing only on leads that are 5x more likely to convert. It's saved our team countless hours every week.",
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Innovate Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
  },
  {
    quote: "Since switching to Taggle, our cost per acquisition dropped by 35% and our conversion rate doubled. It's honestly a no-brainer for any B2B company.",
    name: "Emma Rodriguez",
    role: "Growth Lead",
    company: "Scale Ventures",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto rhythm-48">
          <h2 className="section-title">
            Trusted by <span className="accent-text-orange">industry leaders</span>
          </h2>
          <p className="section-description">
            See how companies are scaling their outreach with Taggle.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="carousel-btn carousel-btn-left"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="carousel-btn carousel-btn-right"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <div className="px-16 py-12">
            <div 
              key={currentIndex}
              className="testimonial-card animate-fade-up"
            >
              {/* Header with Rating and Quote Icon */}
              <div className="testimonial-header">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`star ${i < currentTestimonial.rating ? 'filled' : ''}`}
                      fill={i < currentTestimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <Quote className="quote-icon" />
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="testimonial-author">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="author-avatar"
                  loading="lazy"
                />
                <div className="author-info">
                  <div className="author-name">{currentTestimonial.name}</div>
                  <div className="author-role">{currentTestimonial.role}</div>
                  <div className="author-company">{currentTestimonial.company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="text-center">
            <div className="progress-indicator">
              <div className={`status-dot ${isAutoPlaying ? 'active' : ''}`} />
              <span className="status-text">{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
              <span className="separator">•</span>
              <span className="counter-text">{currentIndex + 1} of {testimonials.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;