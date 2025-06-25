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
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [waitlistCount, setWaitlistCount] = useState(10);

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
      setWaitlistCount((prev) => prev + 1); // Increase count live
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to join waitlist. Please try again.');
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] pt-20 pb-10 text-white overflow-hidden">
      <div className="w-full max-w-4xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-10 mb-1 text-white">
            You build it.
          </h1>
          <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-1">
            Now Find Who needs it.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mt-6 mb-8 max-w-2xl mx-auto">
          Done chasing leads? We’ll send qualified ones right to your inbox.
          </p>

          <form
            onSubmit={handleWaitlistSubmit}
            id="waitlist-section"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 relative"
          >
            <div className="relative group rounded-lg w-64 bg-neutral-700 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9] hover:before:bg-purple-700">
              <input
                type="email"
                name="email"
                placeholder="enter your email here"
                className="appearance-none relative bg-transparent ring-0 outline-none border border-neutral-500 text-purple-400 placeholder-purple-400 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 group-hover:placeholder-purple-300 group-hover:bg-purple-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-purple-800 text-white font-mono ring-1 ring-purple-600 focus:ring-2 focus:ring-purple-400 outline-none duration-300 placeholder:text-white/70 px-4 py-2 shadow-md focus:shadow-lg focus:shadow-purple-400 dark:shadow-md dark:shadow-purple-500 ml-2"
              disabled={submitStatus !== 'idle'}
            >
              {submitStatus === 'idle' && 'Join Waitlist'}
              {submitStatus === 'success' && 'Joined!'}
              {submitStatus === 'error' && 'Error!'} 🚀
            </button>
          </form>

          {children}
          {errorMessage && <p className="text-error text-sm mt-2">{errorMessage}</p>}

          {/* AVATAR + TRUST BLOCK */}
          <div className="mt-12">
            <div className="flex flex-col items-center gap-4">
              <p className="text-white/60 flex items-center text-base">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                {waitlistCount} sharp minds already in. You in?
              </p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center -space-x-3"
              >
                <img src="/images/trusted-by-avatars/person1.png" className="avatar-ring" alt="Founder avatar" />
                <img src="/images/trusted-by-avatars/person2.png" className="avatar-ring" alt="Founder avatar" />
                <img src="/images/trusted-by-avatars/person3.png" className="avatar-ring" alt="Founder avatar" />
                <img src="/images/trusted-by-avatars/person4.png" className="avatar-ring" alt="Founder avatar" />
                <img src="/images/trusted-by-avatars/person5.png" className="avatar-ring" alt="Founder avatar" />
                <img src="/images/trusted-by-avatars/person6.png" className="avatar-ring" alt="Founder avatar" />
                <img src="/images/trusted-by-avatars/person7.png" className="avatar-ring" alt="Founder avatar" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;