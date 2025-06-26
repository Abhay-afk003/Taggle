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
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            
            <h2 className="text-2xl md:text-3xl text-white mb-4">
              Ready to Transform Your Lead Generation?
            </h2>
            
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of founders who've already discovered the power of qualified leads delivered to their inbox.
            </p>
            
            <button
              onClick={scrollToWaitlist}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center gap-3 mx-auto"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
            
            <p className="text-gray-400 text-xs mt-4">
              ✨ No spam, no commitments, just results
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;