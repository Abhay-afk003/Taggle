import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside, { passive: true });
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/Untitled design.png" alt="Taggle Logo" className="h-8 w-8 object-contain" />
            <span className="ml-2 text-xl font-bold tracking-tight text-white">aggle</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="link text-sm">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="link text-sm">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="link text-sm">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('waitlist-section')} className="btn btn-primary ml-4">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden touch-target text-white hover:text-gradient-1 transition-colors duration-300"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          <div ref={menuRef} className="bg-black/90 p-8 rounded-lg w-[90%] max-w-sm text-center relative border border-white/10">
            <button
              className="absolute top-4 right-4 touch-target text-white hover:text-gradient-1 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            
            <nav className="flex flex-col gap-6 text-white text-lg mt-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="link text-left hover:text-gradient-1 transition-colors duration-300"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="link text-left hover:text-gradient-1 transition-colors duration-300"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="link text-left hover:text-gradient-1 transition-colors duration-300"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('waitlist-section')}
                className="btn btn-primary mt-4"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;