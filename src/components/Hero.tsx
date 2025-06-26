import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { db } from '../main';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [waitlistCount, setWaitlistCount] = useState(134);
  const [canAccessFirebase, setCanAccessFirebase] = useState(true);

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
        setCanAccessFirebase(true);
      } catch (error) {
        console.warn('Unable to fetch waitlist count from Firebase. Using fallback value.');
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
      setWaitlistCount((prev) => prev + 1);
      setSubmitStatus('success');
      setEmail('');
      return;
    }

    try {
      await addDoc(collection(db, 'waitlist'), { email, timestamp: new Date() });
      setWaitlistCount((prev) => prev + 1);
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setWaitlistCount((prev) => prev + 1);
      setSubmitStatus('success');
      setEmail('');
    }
  };

  return (
    <section className="section flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
      <div className="container">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Hero Heading */}
          <h1 className="hero-text rhythm-24">
            You Built It.
          </h1>
          <h1 className="hero-text rhythm-32">
            Now Find <span className="hero-magic">Who</span> Needs It.
          </h1>
          
          {/* Subheading */}
          <p className="body-text text-white/80 max-w-2xl mx-auto rhythm-48 animate-fade-up-delay-1">
            Done chasing leads? We'll send qualified ones right to your inbox.
          </p>

          {/* Waitlist Form */}
          <form
            onSubmit={handleWaitlistSubmit}
            id="waitlist-section"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up-delay-2"
          >
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-64 bg-white/5 text-white placeholder-white/60 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={submitStatus !== 'idle'}
            >
              {submitStatus === 'idle' && 'Join Waitlist'}
              {submitStatus === 'success' && 'Welcome aboard!'}
              {submitStatus === 'error' && 'Try again'}
            </button>
          </form>

          {errorMessage && (
            <p className="text-red-400 text-sm mb-4">{errorMessage}</p>
          )}

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-6 animate-fade-up-delay-3">
            <p className="text-white/60 flex items-center body-text">
              <CheckCircle className="w-5 h-5 mr-2 text-purple-400" />
              {waitlistCount} professionals have joined. Join them?
            </p>

            {/* Avatar Stack */}
            <div className="flex items-center -space-x-3">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <img
                  key={i}
                  src={`/images/trusted-by-avatars/person${i}.png`}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white transition-transform duration-300 hover:scale-110 hover:z-10 relative"
                  alt={`Professional ${i}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}