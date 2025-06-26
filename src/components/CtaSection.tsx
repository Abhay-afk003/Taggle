import React from 'react';

// Function to scroll to the waitlist section
const scrollToWaitlist = () => {
  const element = document.getElementById('waitlist-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const CtaSection: React.FC = () => {
  return (
    <div className="py-20 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Ready to Get Started?
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Join hundreds of businesses already using Taggle to find their perfect customers.
        </p>
        <button
          onClick={scrollToWaitlist}
          className="btn-primary text-lg px-8 py-4"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default CtaSection;