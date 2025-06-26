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
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-20 pb-20 text-white overflow-hidden">
      {/* Content */}
      <div className="w-full max-w-5xl mx-auto text-center px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Headline */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight mb-3">
              <span className="text-white">You Built It.</span>
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight flex flex-wrap items-center justify-center gap-2">
              <span className="text-white">Now Find</span>
              <span className="gradient-text italic">Who</span>
              <span className="text-white">Needs It.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Done chasing leads? We'll send qualified ones right to your inbox.
          </p>

          {/* Waitlist Form */}
          <form
            onSubmit={handleWaitlistSubmit}
            id="waitlist-section"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitStatus !== 'idle'}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-purple-500/25"
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
          </form>

          {errorMessage && (
            <p className="text-red-400 text-sm mb-4">{errorMessage}</p>
          )}

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                <img src="/images/trusted-by-avatars/person1.png" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                <img src="/images/trusted-by-avatars/person2.png" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                <img src="/images/trusted-by-avatars/person3.png" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                <img src="/images/trusted-by-avatars/person4.png" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                <img src="/images/trusted-by-avatars/person5.png" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
              </div>
              <div className="text-left">
                <p className="text-white text-sm">{waitlistCount}+ early adopters</p>
                <p className="text-gray-400 text-xs">already in the waitlist</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 text-green-400"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">No spam, just quality updates</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;