import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <header className="w-full z-50 bg-transparent">
      <div className="w-full py-4 flex items-center justify-between px-2 sm:px-4 md:px-8">
        <div className="flex items-center">
          <img src="/Untitled design.png" alt="T Logo" className="h-8 w-8 object-contain" />
          <span className="text-white text-xl font-bold tracking-tight ml-0">aggle</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">Pricing</a>
          <a href="#login" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">Login</a>
          <a
            href="#get-started"
            className="ml-4 inline-block bg-white text-black text-sm font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-white transition-transform duration-200 hover:scale-110"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'ease-out' }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            style={{ willChange: 'opacity' }}
          >
            <motion.div
              ref={menuRef}
              initial={{ y: -30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'ease-out' }}
              className="bg-[#111] p-8 rounded-xl w-[90%] max-w-sm text-center relative"
              style={{ willChange: 'transform, opacity' }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <nav className="flex flex-col gap-6 text-white text-lg mt-4">
                <a 
                  href="#features" 
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors duration-200 hover:text-purple-400"
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors duration-200 hover:text-purple-400"
                >
                  Pricing
                </a>
                <a 
                  href="#login" 
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors duration-200 hover:text-purple-400"
                >
                  Login
                </a>
                <a
                  href="#get-started"
                  className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;