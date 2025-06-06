import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/95 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/Untitled design.png" alt="logo" className="h-8" />
              <span className="brand-text">aggle</span>
            </div>
            <p className="text-white/70 mb-6">Revolutionizing B2B lead generation with AI-powered insights and automation.</p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 glass-card hover:bg-white/10 transition-all duration-300">
                <Facebook className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
              <a href="#" className="p-2 glass-card hover:bg-white/10 transition-all duration-300">
                <Twitter className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
              <a href="#" className="p-2 glass-card hover:bg-white/10 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
              <a href="#" className="p-2 glass-card hover:bg-white/10 transition-all duration-300">
                <Instagram className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">API Reference</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Community</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Webinars</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-light mr-3 mt-0.5" />
                <span className="text-white/70">support@aileadfinder.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-light mr-3 mt-0.5" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-light mr-3 mt-0.5" />
                <span className="text-white/70">123 Innovation Drive<br />San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">© 2025 AI Lead Finder. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;