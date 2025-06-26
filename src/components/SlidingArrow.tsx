import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface SlidingArrowProps {
  isVisible: boolean;
  delay?: number;
  className?: string;
}

const SlidingArrow: React.FC<SlidingArrowProps> = ({ 
  isVisible, 
  delay = 0,
  className = ""
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isVisible && !animationTriggered && arrowRef.current) {
      setAnimationTriggered(true);
      
      const triggerAnimation = () => {
        requestAnimationFrame(() => {
          if (arrowRef.current) {
            arrowRef.current.classList.add('arrow-slide-visible');
          }
        });
      };

      // Apply delay for staggered effect
      if (delay > 0) {
        setTimeout(triggerAnimation, delay);
      } else {
        triggerAnimation();
      }
    }
  }, [isVisible, animationTriggered, delay]);

  return (
    <div 
      ref={arrowRef}
      className={`sliding-arrow ${className}`}
      aria-hidden="true"
    >
      <ArrowRight className="w-6 h-6 text-purple-400" />
    </div>
  );
};

export default SlidingArrow;