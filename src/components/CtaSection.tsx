import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

// Function to scroll to the waitlist section
const scrollToWaitlist = () => {
  const element = document.getElementById('waitlist-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-4 sm:mb-6" />
            
            <div className="text-container mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight">
                <span className="text-white">Ready to Transform Your </span>
                <span className="gradient-text italic">Lead Generation</span>
                <span className="text-white">?</span>
              </h2>
            </div>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of founders who've already discovered the power of qualified leads delivered to their inbox.
            </p>
            
            <button
              onClick={scrollToWaitlist}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base lg:text-lg"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
            
            <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
              ✨ No spam, no commitments, just results
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;