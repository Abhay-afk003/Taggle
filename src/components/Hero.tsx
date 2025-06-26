import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight } from 'lucide-react';

import { db } from '../main';
import { collection, addDoc, getDocs } from 'firebase/firestore';

interface HeroProps {
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [waitlistCount, setWaitlistCount] = useState(134);

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => setSubmitStatus('idle'), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'waitlist'));
        setWaitlistCount(134 + snapshot.size);
      } catch (error) {
        console.error('Error fetching waitlist count:', error);
      }
    };
    fetchWaitlistCount();
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmitStatus('idle');

    if (!email.trim()) {
      setErrorMessage('Please enter your email.');
      return;
    }

    try {
      await addDoc(collection(db, 'waitlist'), { email, timestamp: new Date() });
      setWaitlistCount((prev) => prev + 1);
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to join waitlist. Please try again.');
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-20 text-white overflow-hidden">
      {/* Content */}
      <div className="w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Headline - Restructured as requested */}
          <div className="mb-8 sm:mb-12">
            <div className="text-container hero-text">
              {/* Line 1: "You built it" */}
              <h1 className="hero-line text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
                You Built It.
              </h1>
              
              {/* Line 2: "Now Find who needs it" */}
              <h1 className="hero-line text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="text-white">Now Find </span>
                <span className="gradient-text italic script-enhanced">Who</span>
                <span className="text-white"> Needs It.</span>
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Done chasing leads? We'll send qualified ones right to your inbox.
          </motion.p>

          {/* Waitlist Form */}
          <motion.form
            onSubmit={handleWaitlistSubmit}
            id="waitlist-section"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-lg mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full sm:flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitStatus !== 'idle'}
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base font-semibold"
              disabled={submitStatus !== 'idle'}
            >
              {submitStatus === 'idle' && (
                <>
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
              {submitStatus === 'success' && (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Joined!
                </>
              )}
              {submitStatus === 'error' && 'Try Again'}
            </button>
          </motion.form>

          {errorMessage && (
            <motion.p 
              className="text-red-400 text-sm mb-4 px-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errorMessage}
            </motion.p>
          )}

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <img 
                    key={num}
                    src={`/images/trusted-by-avatars/person${num}.png`} 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" 
                    alt="User" 
                  />
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white text-sm sm:text-base font-semibold">{waitlistCount}+ early adopters</p>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">already in the waitlist</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-2 text-green-400"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">No spam, just quality updates</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;