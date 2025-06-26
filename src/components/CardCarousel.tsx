import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CardCarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  animationSpeed?: number;
  cardsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gap?: number;
  className?: string;
  onCardChange?: (index: number) => void;
}

const CardCarousel: React.FC<CardCarouselProps> = ({
  children,
  autoPlay = false,
  autoPlayInterval = 4000,
  showArrows = true,
  showDots = true,
  animationSpeed = 300,
  cardsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 24,
  className = '',
  onCardChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(cardsPerView.mobile);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

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

  // Update max index when cards visible changes
  useEffect(() => {
    const newMaxIndex = Math.max(0, totalCards - cardsVisible);
    if (currentIndex > newMaxIndex) {
      setCurrentIndex(newMaxIndex);
    }
  }, [cardsVisible, totalCards, currentIndex]);

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
    onCardChange?.(clampedIndex);
  }, [isTransitioning, maxIndex, onCardChange]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && totalCards > cardsVisible) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const nextIndex = prev + 1;
          return nextIndex > maxIndex ? 0 : nextIndex;
        });
      }, autoPlayInterval);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [autoPlay, autoPlayInterval, totalCards, cardsVisible, maxIndex]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      goToNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      goToPrev();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        goToPrev();
        break;
      case 'ArrowRight':
        e.preventDefault();
        goToNext();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(maxIndex);
        break;
    }
  };

  // Handle transition events
  const handleTransitionStart = () => {
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Calculate transform for smooth sliding
  const cardWidth = `calc((100% - ${gap * (cardsVisible - 1)}px) / ${cardsVisible})`;
  const translateX = `calc(-${currentIndex} * (${cardWidth} + ${gap}px))`;

  return (
    <div 
      className={`carousel-container ${className}`}
      role="region"
      aria-label="Card carousel"
      aria-live="polite"
    >
      {/* Main carousel wrapper */}
      <div
        ref={containerRef}
        className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="group"
        aria-label={`Showing ${cardsVisible} of ${totalCards} cards`}
      >
        {/* Navigation arrows */}
        {showArrows && (
          <>
            <button
              className={`carousel-arrow carousel-arrow-prev ${currentIndex === 0 ? 'carousel-arrow-disabled' : ''}`}
              onClick={goToPrev}
              disabled={currentIndex === 0}
              aria-label="Previous cards"
              tabIndex={currentIndex === 0 ? -1 : 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              className={`carousel-arrow carousel-arrow-next ${currentIndex >= maxIndex ? 'carousel-arrow-disabled' : ''}`}
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next cards"
              tabIndex={currentIndex >= maxIndex ? -1 : 0}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Cards container */}
        <div
          ref={carouselRef}
          className="carousel-track"
          style={{
            transform: translateX,
            transitionDuration: `${animationSpeed}ms`,
            gap: `${gap}px`,
          }}
          onTransitionStart={handleTransitionStart}
          onTransitionEnd={handleTransitionEnd}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="carousel-card"
              style={{ 
                minWidth: cardWidth,
                flexShrink: 0,
              }}
              role="group"
              aria-label={`Card ${index + 1} of ${totalCards}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      {showDots && maxIndex > 0 && (
        <div className="carousel-dots" role="tablist">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'carousel-dot-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              role="tab"
              aria-selected={index === currentIndex}
              tabIndex={index === currentIndex ? 0 : -1}
            />
          ))}
        </div>
      )}

      {/* Progress bar alternative */}
      <div className="carousel-progress" aria-hidden="true">
        <div 
          className="carousel-progress-bar"
          style={{
            width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default CardCarousel;