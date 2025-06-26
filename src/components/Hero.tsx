import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

import { db } from '../main';
import { collection, addDoc, getDocs } from 'firebase/firestore';

interface HeroProps {
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  const [ref] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [waitlistCount, setWaitlistCount] = useState(134); // Default fallback value
  const [canAccessFirebase, setCanAccessFirebase] = useState(true);

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => setSubmitStatus('idle'), 2000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'waitlist'));
        setWaitlistCount(134 + snapshot.size);
        setCanAccessFirebase(true);
      } catch (error) {
        console.warn('Unable to fetch waitlist count from Firebase. Using fallback value.');
        // Use fallback count and disable Firebase functionality
        setWaitlistCount(134);
        setCanAccessFirebase(false);
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

    if (!canAccessFirebase) {
      // Fallback when Firebase is not accessible
      setWaitlistCount((prev) => prev + 1);
      setSubmitStatus('success');
      setEmail('');
      console.warn('Firebase not accessible. Simulating successful signup.');
      return;
    }

    try {
      await addDoc(collection(db, 'waitlist'), { email, timestamp: new Date() });
      setWaitlistCount((prev) => prev + 1);
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      // If Firebase fails, still provide user feedback
      console.warn('Firebase operation failed. Using fallback behavior.');
      setWaitlistCount((prev) => prev + 1);
      setSubmitStatus('success');
      setEmail('');
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] pt-20 pb-10 text-white">
      <div className="w-full max-w-4xl text-center px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-10 mb-1 text-white">
            You build it.
          </h1>
          <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-1">
            Now Find Who needs it.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-6 mb-8 max-w-2xl mx-auto">
            Done chasing leads? We'll send qualified ones right to your inbox.
          </p>

          <form
            onSubmit={handleWaitlistSubmit}
            id="waitlist-section"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <div className="relative rounded-lg w-64 bg-neutral-800 border border-neutral-600">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-white placeholder-gray-400 text-sm rounded-lg border-0 focus:ring-2 focus:ring-purple-500 p-3 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
              disabled={submitStatus !== 'idle'}
            >
              {submitStatus === 'idle' && 'Join Waitlist'}
              {submitStatus === 'success' && 'Joined!'}
              {submitStatus === 'error' && 'Error!'}
            </button>
          </form>

          {children}
          {errorMessage && <p className="text-red-400 text-sm mt-2">{errorMessage}</p>}

          <div className="mt-12">
            <div className="flex flex-col items-center gap-4">
              <p className="text-white/60 flex items-center text-base">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                {waitlistCount} people have joined. Join them?
              </p>

              <div className="flex items-center -space-x-3">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <img
                    key={i}
                    src={`/images/trusted-by-avatars/person${i}.png`}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                    alt="User avatar"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;