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
          <h2 className="section-title" style={{ marginBottom: '24px' }}>
            Ready to <span className="accent-text-purple">get started</span>?
          </h2>
          <p className="section-description" style={{ marginBottom: '32px' }}>
            Join hundreds of businesses already using Taggle to find their perfect customers.
          </p>
          <button onClick={scrollToWaitlist} className="btn btn-primary">
            Join Waitlist Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;