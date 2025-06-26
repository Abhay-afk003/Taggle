import React from 'react';

const CtaSection: React.FC = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-heading rhythm-24">
            Ready to <span className="gradient-text-1">get started</span>?
          </h2>
          <p className="body-text text-white/80 rhythm-32">
            Join hundreds of businesses already using Taggle to find their perfect customers.
          </p>
          <button onClick={scrollToWaitlist} className="btn btn-primary">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;