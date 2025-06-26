import React, { useRef, useEffect, useState } from 'react';
import { useScrollOptimization } from '../hooks/useScrollOptimization';

interface OptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
  rootMargin?: string;
  onVisible?: () => void;
  animationType?: 'fade' | 'slide' | 'scale' | 'none';
}

export const OptimizedSection: React.FC<OptimizedSectionProps> = ({
  children,
  className = '',
  id,
  threshold = 0.1,
  rootMargin = '0px 0px -10% 0px',
  onVisible,
  animationType = 'fade'
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleIntersection = React.useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
        onVisible?.();
      }
    });
  }, [hasAnimated, onVisible]);

  const { observe, unobserve } = useScrollOptimization(handleIntersection, {
    threshold,
    rootMargin,
    throttleMs: 100
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    observe(section);

    return () => {
      unobserve(section);
    };
  }, [observe, unobserve]);

  const getAnimationClasses = () => {
    if (animationType === 'none') return '';
    
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fade':
          return `${baseClasses} opacity-0`;
        case 'slide':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 scale-100`;
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`intersection-target ${getAnimationClasses()} ${className}`}
      style={{ willChange: isVisible ? 'auto' : 'transform, opacity' }}
    >
      {children}
    </section>
  );
};