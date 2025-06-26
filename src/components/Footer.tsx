import React, { FC } from 'react';
import { Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onShowPrivacy: () => void;
  onShowTerms: () => void;
}

const Footer: FC<FooterProps> = ({ onShowPrivacy, onShowTerms }) => {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="container">
        <div className="grid-12">
          {/* Company Info */}
          <div className="col-span-12 md:col-span-6 rhythm-32">
            <div className="flex items-center rhythm-16">
              <img
                src="/Untitled design.png"
                alt="Taggle Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="ml-2 text-xl font-bold text-white">aggle</span>
            </div>
            <p className="text-white/60 max-w-sm rhythm-24">
              Done chasing leads? We'll send qualified ones right to your inbox.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://x.com/Taggle003?t=Y22m6F_aT2Ndendy6ZHt8w&s=08"
                className="touch-target bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-white/70" />
              </a>
              <a
                href="https://www.linkedin.com/company/taggle003/"
                className="touch-target bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 md:col-span-6">
            <h3 className="font-semibold text-white rhythm-16">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              <a href="#features" className="link text-sm">Features</a>
              <a href="#pricing" className="link text-sm">Pricing</a>
              <a href="#testimonials" className="link text-sm">Testimonials</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p className="rhythm-16 md:rhythm-0">
            © 2025 Taggle. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button
              onClick={onShowPrivacy}
              className="link text-sm hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button
              onClick={onShowTerms}
              className="link text-sm hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;