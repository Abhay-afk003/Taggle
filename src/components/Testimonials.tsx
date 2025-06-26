import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, company, image, rating }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 rounded-2xl border border-zinc-700/50 backdrop-blur-sm shadow-xl"
    >
      {/* Header with rating */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
            />
          ))}
        </div>
        <Quote className="w-10 h-10 text-purple-400/40" />
      </div>

      {/* Quote */}
      <p className="text-white/90 text-lg leading-relaxed mb-8 italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-500/30"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-zinc-900"></div>
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-white text-lg">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
          <p className="text-purple-400 text-sm font-medium">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const testimonials: TestimonialProps[] = [
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
  {
    quote: "The quality of leads from Taggle is unmatched. Every prospect we receive is perfectly aligned with our ICP and ready to engage.",
    name: "David Kim",
    role: "CEO",
    company: "StartupFlow",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 5,
  },
  {
    quote: "Taggle's automation features have revolutionized our lead nurturing process. We're seeing 60% better engagement rates.",
    name: "Lisa Zhang",
    role: "Sales Manager",
    company: "CloudTech Pro",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5,
  },
  {
    quote: "The ROI on Taggle is incredible. We've cut our prospecting time in half while tripling our qualified pipeline.",
    name: "Alex Thompson",
    role: "Business Development",
    company: "Growth Labs",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.2,
  });

  // Auto-cycle through testimonials
  useEffect(() => {
    if (!isAutoPlaying || !inView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds for comfortable reading

    return () => clearInterval(interval);
  }, [isAutoPlaying, inView]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-white/70 text-lg">
            See how companies are scaling their outreach with Taggle.
          </p>
        </motion.div>

        {/* Testimonial Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-zinc-800/80 border border-zinc-700 hover:bg-zinc-700/80 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-zinc-800/80 border border-zinc-700 hover:bg-zinc-700/80 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Testimonial Content */}
          <div className="px-16 py-8">
            <AnimatePresence mode="wait">
              <TestimonialCard key={currentIndex} {...testimonials[currentIndex]} />
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-purple-500 w-6' 
                    : 'bg-zinc-600 hover:bg-zinc-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-500'}`} />
            <span className="text-xs text-gray-400">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mt-8">
          <div className="w-full bg-zinc-800 rounded-full h-1">
            <motion.div
              className="bg-purple-500 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>{currentIndex + 1} of {testimonials.length}</span>
            <span>Next in 5s</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;