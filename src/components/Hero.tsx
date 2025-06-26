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
    <section className="hero-section">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Hero Heading - Exactly like the image */}
          <div className="hero-text-container">
            <h1 className="hero-line-1">You Built It.</h1>
            <h1 className="hero-line-2">
              Now Find <span className="hero-who">Who</span> Needs It.
            </h1>
          </div>
          
          {/* Subheading */}
          <p className="hero-subtitle">
            Done chasing leads? We'll send qualified ones right to your inbox.
          </p>

          {/* Waitlist Form */}
          <form
            onSubmit={handleWaitlistSubmit}
            id="waitlist-section"
            className="hero-form"
          >
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="hero-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="hero-button"
              disabled={submitStatus !== 'idle'}
            >
              {submitStatus === 'idle' && 'Join Waitlist'}
              {submitStatus === 'success' && 'Welcome aboard!'}
              {submitStatus === 'error' && 'Try again'}
            </button>
          </form>

          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}

          {/* Social Proof */}
          <div className="social-proof">
            <p className="social-proof-text">
              <CheckCircle className="social-proof-icon" />
              {waitlistCount} professionals have joined. Join them?
            </p>

            {/* Avatar Stack */}
            <div className="avatar-stack">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <img
                  key={i}
                  src={`/images/trusted-by-avatars/person${i}.png`}
                  className="avatar"
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