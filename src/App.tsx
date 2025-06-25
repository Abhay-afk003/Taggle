import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Aurora from './backgrounds/Aurora/Aurora';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './global.css';
import { useState } from 'react';

function App() {
  const termsAndConditionsText = `
Effective Date: June 25, 2025

Welcome to Taggle. By joining our waitlist, you agree to the following terms:

1. Waitlist Purpose
Taggle’s waitlist allows users to express early interest in our upcoming SaaS platform. Joining the waitlist does not guarantee early access, availability, or pricing.

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
    console.log("Showing Privacy Policy");
    setShowPrivacyPolicy(true);
    setShowTermsAndConditions(false); // Ensure only one is shown at a time
  };

  const handleShowTermsAndConditions = () => {
    console.log("Showing Terms and Conditions");
    setShowTermsAndConditions(true);
    setShowPrivacyPolicy(false); // Ensure only one is shown at a time
  };

  const handleGoBack = () => {
    setShowPrivacyPolicy(false);
    setShowTermsAndConditions(false);
  };

  return (
    <div className="relative w-full">
      {showPrivacyPolicy || showTermsAndConditions ? (
        <div className="p-8"> {/* Reverted styling, added basic padding */}
          <button
            onClick={handleGoBack}
            className="mb-4 text-blue-500 hover:underline" // Basic back button styling
          >
            Back
          </button>
          {showPrivacyPolicy && <p className="whitespace-pre-wrap">{privacyPolicyText}</p>} {/* Reverted styling, added whitespace pre-wrap */}
          {showTermsAndConditions && <p className="whitespace-pre-wrap">{termsAndConditionsText}</p>} {/* Reverted styling, added whitespace pre-wrap */}
        </div>
      ) : (
        <>
          {/* Background Aurora */}
          <Aurora
            className="absolute top-0 left-0 w-full h-[100vh] -z-10"
            colorStops={["#6366F1", "#8B5CF6", "#6366F1"]}
          />
          
          {/* Header */}
          <Header />

          {/* Hero Section with Background Particles */}
          <Hero>

          </Hero>

          <main>
            <Features />
            <Pricing />
            <Testimonials />
          </main>

          <div className="flex flex-col gap-10">
            {/* CTA Section (Optional: move it above or below depending on flow) */}
            <CtaSection />

            {/* Footer */}
            <Footer onShowPrivacy={handleShowPrivacyPolicy} onShowTerms={handleShowTermsAndConditions} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;