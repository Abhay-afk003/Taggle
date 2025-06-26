import { useEffect, useRef, useCallback } from 'react';

interface ScrollOptimizationOptions {
  throttleMs?: number;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useScrollOptimization = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: ScrollOptimizationOptions = {}
) => {
  const {
    throttleMs = 150,
    rootMargin = '0px',
    threshold = 0.1
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const elementsRef = useRef<Set<Element>>(new Set());

  const throttledCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(entries);
    }, throttleMs);
  }, [callback, throttleMs]);

  const observe = useCallback((element: Element) => {
    if (!element || elementsRef.current.has(element)) return;

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(throttledCallback, {
        rootMargin,
        threshold,
      });
    }

    observerRef.current.observe(element);
    elementsRef.current.add(element);
  }, [throttledCallback, rootMargin, threshold]);

  const unobserve = useCallback((element: Element) => {
    if (!element || !observerRef.current) return;

    observerRef.current.unobserve(element);
    elementsRef.current.delete(element);
  }, []);

  const disconnect = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    elementsRef.current.clear();
  }, []);

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  return { observe, unobserve, disconnect };
};

// Optimized scroll position hook
export const useOptimizedScrollPosition = (throttleMs = 100) => {
  const scrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const callbacksRef = useRef<Set<(scrollY: number) => void>>(new Set());

  const handleScroll = useCallback(() => {
    if (timeoutRef.current) return;

    timeoutRef.current = setTimeout(() => {
      scrollY.current = window.scrollY;
      callbacksRef.current.forEach(callback => callback(scrollY.current));
      timeoutRef.current = null;
    }, throttleMs);
  }, [throttleMs]);

  const subscribe = useCallback((callback: (scrollY: number) => void) => {
    callbacksRef.current.add(callback);

    if (callbacksRef.current.size === 1) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      callbacksRef.current.delete(callback);
      if (callbacksRef.current.size === 0) {
        window.removeEventListener('scroll', handleScroll);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
    };
  }, [handleScroll]);

  return { subscribe, getCurrentScrollY: () => scrollY.current };
};