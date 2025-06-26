import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onShowPrivacy: () => void;
  onShowTerms: () => void;
}

const Footer: FC<FooterProps> = ({ onShowPrivacy, onShowTerms }) => {
  return (
    <footer className="relative bg-background text-white font-sans pt-20 pb-10">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/95 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/Untitled design.png"
                alt="logo"
                className="h-8 w-8 object-contain"
              />
              <span className="ml-0 text-xl font-heading font-semibold text-white">
                aggle
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Done chasing leads? We'll send qualified ones right to your inbox.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://x.com/Taggle003?t=Y22m6F_aT2Ndendy6ZHt8w&s=08"
                className="p-2 rounded-md bg-surface-medium hover:bg-surface-dark transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/taggle003/"
                className="p-2 rounded-md bg-surface-medium hover:bg-surface-dark transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4">
              {['Home', 'Features', 'Pricing', 'Blog', 'About Us', 'Careers'].map(
                (link, i) => (link === 'Blog' || link === 'About Us' || link === 'Careers' ? null : (
                  <a
                    key={i}
                    href="#"
                    className="text-white/70 hover:text-primary-light transition duration-300"
                  >
                    {link}
                  </a>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p className="text-white/50 mb-4 md:mb-0">
            © 2025 Taggle. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service'].map(
              (text) => {
                const isPrivacy = text === 'Privacy Policy';
                return (
                  <a
                    key={text}
                    onClick={() => {
                      if (isPrivacy) {
                        console.log("Privacy Policy clicked");
                        onShowPrivacy();
                      } else {
                        console.log("Terms of Service clicked");
                        onShowTerms();
                      }
                    }}
                    className="text-white/50 hover:text-white transition duration-300"
                  >
                    {text}
                  </a>
                );
              }
            )}
          </div>
        </div>
      </motion.div>
    </footer> // Corrected closing tag for footer
  );
};

export default Footer;