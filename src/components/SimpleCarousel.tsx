import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SimpleCarouselProps {
  children: React.ReactNode[];
  cardsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gap?: number;
  className?: string;
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({
  children,
  cardsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 24,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(cardsPerView.mobile);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const totalCards = children.length;
  const maxIndex = Math.max(0, totalCards - cardsVisible);

  // Handle responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsVisible(cardsPerView.desktop);
      } else if (width >= 768) {
        setCardsVisible(cardsPerView.tablet);
      } else {
        setCardsVisible(cardsPerView.mobile);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, [cardsPerView]);

  // Update current index when cards visible changes
  useEffect(() => {
    const newMaxIndex = Math.max(0, totalCards - cardsVisible);
    if (currentIndex > newMaxIndex) {
      setCurrentIndex(newMaxIndex);
    }
  }, [cardsVisible, totalCards, currentIndex]);

  // Navigation functions
  const goToNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Calculate transform for smooth sliding
  const cardWidth = `calc((100% - ${gap * (cardsVisible - 1)}px) / ${cardsVisible})`;
  const translateX = `calc(-${currentIndex} * (${cardWidth} + ${gap}px))`;

  return (
    <div className={`simple-carousel ${className}`}>
      {/* Main carousel wrapper */}
      <div className="simple-carousel-wrapper">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            className="simple-carousel-arrow simple-carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right Arrow */}
        {currentIndex < maxIndex && (
          <button
            className="simple-carousel-arrow simple-carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Cards container */}
        <div className="simple-carousel-overflow">
          <div
            ref={containerRef}
            className="simple-carousel-track"
            style={{
              transform: translateX,
              gap: `${gap}px`,
            }}
          >
            {children.map((child, index) => (
              <div
                key={index}
                className="simple-carousel-card"
                style={{ 
                  minWidth: cardWidth,
                  flexShrink: 0,
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCarousel;