import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './global.css';
import { useState } from 'react';

function App() {
  const termsAndConditionsText = `
Effective Date: June 25, 2025

Welcome to Taggle. By joining our waitlist, you agree to the following terms:

1. Waitlist Purpose
Taggle's waitlist allows users to express early interest in our upcoming SaaS platform. Joining the waitlist does not guarantee early access, availability, or pricing.

2. Communications
By submitting your email, you agree to receive updates from Taggle, including product announcements, launch notifications, and related updates. You may unsubscribe at any time.

3. Intellectual Property
All content on this site, including the Taggle name, logo, and visual assets, is owned by Taggle and protected under applicable intellectual property laws.

4. Limitation of Liability
Taggle is currently in its early access stage. We are not liable for any damages resulting from the use, access, or inability to access waitlist-related services.

5. Changes to Terms
We may update these Terms & Conditions at any time. Continued use of the site after any changes constitutes acceptance of the updated terms.
`;

  const privacyPolicyText = `
Effective Date: June 25, 2025

Your privacy is important to us. This Privacy Policy explains how Taggle collects, uses, and protects your information.

1. Information We Collect
Email address when you join the waitlist.

2. How We Use Your Information
We use your email to:

Share product updates and launch information
Understand demand for our product
Improve outreach and communication

3. Data Storage
Emails are securely stored using Google Firebase Firestore. Access is restricted to authorized personnel only.

4. Data Sharing
We do not sell, rent, or share your email address with any third party.

5. Your Rights
You may:

Access or request deletion of your personal data
Unsubscribe at any time via email or unsubscribe links

For data requests, contact taggle003@gmail.com.

6. Updates to This Policy
We may update this policy. Changes will be reflected on this page with a revised effective date.
`;

  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);

  const handleShowPrivacyPolicy = () => {
    setShowPrivacyPolicy(true);
    setShowTermsAndConditions(false);
  };

  const handleShowTermsAndConditions = () => {
    setShowTermsAndConditions(true);
    setShowPrivacyPolicy(false);
  };

  const handleGoBack = () => {
    setShowPrivacyPolicy(false);
    setShowTermsAndConditions(false);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Optimized Dynamic Background */}
      <div className="fixed inset-0 z-0 performance-optimized-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/20 via-transparent to-blue-950/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl opacity-40 animate-pulse-slow delay-3000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_70%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {showPrivacyPolicy || showTermsAndConditions ? (
          <div className="min-h-screen bg-slate-950/90 backdrop-blur-sm text-white p-4 md:p-8">
            <button
              onClick={handleGoBack}
              className="mb-6 text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium touch-target"
            >
              ← Back
            </button>
            {showPrivacyPolicy && (
              <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap text-white/80 leading-relaxed font-sans text-sm md:text-base">
                    {privacyPolicyText}
                  </pre>
                </div>
              </div>
            )}
            {showTermsAndConditions && (
              <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Terms and Conditions</h1>
                <div className="prose prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap text-white/80 leading-relaxed font-sans text-sm md:text-base">
                    {termsAndConditionsText}
                  </pre>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Header />
            <Hero />
            <main>
              <Features />
              <Pricing />
              <Testimonials />
            </main>
            <div className="flex flex-col gap-10">
              <CtaSection />
              <Footer onShowPrivacy={handleShowPrivacyPolicy} onShowTerms={handleShowTermsAndConditions} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;