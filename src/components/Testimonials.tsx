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
          <h2 className="section-heading rhythm-24">
            Trusted by <span className="gradient-text-2">industry leaders</span>
          </h2>
          <p className="body-text text-white/80">
            See how companies are scaling their outreach with Taggle.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 touch-target bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 touch-target bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Testimonial Card */}
          <div className="px-16 py-12">
            <div 
              key={currentIndex}
              className="card text-center max-w-2xl mx-auto p-12 animate-fade-up"
            >
              {/* Header with Rating and Quote Icon */}
              <div className="flex items-center justify-between rhythm-24">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-white/20'}`}
                      fill={i < currentTestimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-white/20" />
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-white/90 leading-relaxed rhythm-32 italic">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 mr-4"
                  loading="lazy"
                />
                <div className="text-left">
                  <div className="font-semibold text-white">{currentTestimonial.name}</div>
                  <div className="text-sm text-white/60">{currentTestimonial.role}</div>
                  <div className="text-sm gradient-text-1 font-medium">{currentTestimonial.company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 rhythm-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-xs text-white/40">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-white/40'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
              <span>•</span>
              <span>{currentIndex + 1} of {testimonials.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;