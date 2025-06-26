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
    <header className="w-full z-50 bg-transparent">
      <div className="w-full py-4 flex items-center justify-between px-2 sm:px-4 md:px-8">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img src="/Untitled design.png" alt="T Logo" className="h-8 w-8 object-contain" />
          <span className="text-white text-xl tracking-tight ml-0">aggle</span>
        </div>

        {/* Right - Nav (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-white/80 hover:text-white transition text-sm">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition text-sm">Pricing</a>
          <a href="#login" className="text-white/80 hover:text-white transition text-sm">Login</a>
          <a
            href="#get-started"
            className="ml-4 inline-block bg-white text-black text-sm px-4 py-2 rounded-full shadow hover:bg-gray-200 transition"
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
              className="bg-[#111] p-8 rounded-xl w-[90%] max-w-sm text-center relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <nav className="flex flex-col gap-6 text-white text-lg mt-4">
                <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
                <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                <a href="#login" onClick={() => setMenuOpen(false)}>Login</a>
                <a
                  href="#get-started"
                  className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200"
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