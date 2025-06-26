import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  UserCheck,
  FileSearch,
  Zap,
  Database,
  Clock,
  DollarSign,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 rounded-2xl border border-zinc-700/50 backdrop-blur-sm shadow-xl"
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border border-purple-500/10 animate-pulse delay-500"></div>
          <div className="p-6 rounded-full border border-purple-500/20 bg-black/40">
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 bg-clip-text text-transparent mb-4">
          {title}
        </h3>
        
        <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const features: FeatureProps[] = [
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
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
  });

  const stats = [
    { icon: Clock, text: 'Save 25+ hours weekly' },
    { icon: DollarSign, text: 'Cut CAC by up to 60%' },
    { icon: BarChart3, text: '3x higher conversions' }
  ];

  // Auto-cycle through features
  useEffect(() => {
    if (!isAutoPlaying || !inView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000); // 4 seconds per feature

    return () => clearInterval(interval);
  }, [isAutoPlaying, inView]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8s
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8s
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8s
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Taggle Delivers the <span className="gradient-text">Leads That Convert</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8">
            Verified contacts. Real-time insights. Automations. Integrations ready.
          </p>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {stats.map(({ icon: Icon, text }, idx) => (
              <motion.div
                key={idx}
                className="bg-black/30 border border-white/10 p-4 flex items-center justify-center rounded-xl hover:border-purple-500/40 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                <Icon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="font-medium text-white text-sm sm:text-base">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Feature Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-zinc-800/80 border border-zinc-700 hover:bg-zinc-700/80 transition-colors duration-200"
            aria-label="Previous feature"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-zinc-800/80 border border-zinc-700 hover:bg-zinc-700/80 transition-colors duration-200"
            aria-label="Next feature"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Feature Content */}
          <div className="px-16 py-8">
            <AnimatePresence mode="wait">
              <FeatureCard key={currentIndex} {...features[currentIndex]} />
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-purple-500 w-6' 
                    : 'bg-zinc-600 hover:bg-zinc-500'
                }`}
                aria-label={`Go to feature ${index + 1}`}
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
              animate={{ width: `${((currentIndex + 1) / features.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>{currentIndex + 1} of {features.length}</span>
            <span>Next in 4s</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;