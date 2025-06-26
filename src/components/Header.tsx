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
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="w-full z-50 bg-transparent fixed top-0 left-0 right-0">
      <div className="w-full py-3 sm:py-4 flex items-center justify-between px-4 sm:px-6 md:px-8 bg-black/20 backdrop-blur-md border-b border-white/10">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img src="/Untitled design.png" alt="T Logo" className="h-6 w-6 sm:h-8 sm:w-8 object-contain" />
          <span className="text-white text-lg sm:text-xl tracking-tight ml-0">aggle</span>
        </div>

        {/* Right - Nav (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a href="#features" className="text-white/80 hover:text-white transition text-sm lg:text-base">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition text-sm lg:text-base">Pricing</a>
          <a href="#login" className="text-white/80 hover:text-white transition text-sm lg:text-base">Login</a>
          <a
            href="#get-started"
            className="gradient-button ml-4"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              ref={menuRef}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="bg-[#111] p-6 sm:p-8 rounded-xl w-[90%] max-w-sm text-center relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
              <nav className="flex flex-col gap-5 sm:gap-6 text-white text-base sm:text-lg mt-4">
                <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Features</a>
                <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Pricing</a>
                <a href="#login" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Login</a>
                <a
                  href="#get-started"
                  className="gradient-button mt-4"
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