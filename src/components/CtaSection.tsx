import React from 'react';
import { PulseBeamsFirstDemo } from '@/components/ui/demo';

// Function to scroll to the waitlist section
const scrollToWaitlist = () => {
  const element = document.getElementById('waitlist-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const CtaSection: React.FC = () => {
  return (
    <div className="my-12">
      {/* Pass the scrollToWaitlist function as a prop to PulseBeamsFirstDemo if it accepts an onClick handler */}
      {/* Or, if the button is rendered directly in PulseBeamsFirstDemo, modify that component */}
      <PulseBeamsFirstDemo onButtonClick={scrollToWaitlist} /> {/* Assuming onButtonClick is the prop name */}
    </div>
  );
};

export default CtaSection;