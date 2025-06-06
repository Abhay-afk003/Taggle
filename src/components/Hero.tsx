import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, BarChart2, Users, Building } from 'lucide-react';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pt-36 pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              You build it.{" "}
              <span className="gradient-text">Now find who needs it.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl">
              Our AI-powered platform identifies and connects you with high-value leads that are most likely to convert into customers.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#trial" className="btn-primary">
                Start Your Free 14-Day Trial
              </a>
              <a href="#demo" className="btn-ghost">
                Watch Demo
              </a>
            </div>
            
            <div>
              <p className="text-white/60 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-2" />
                Trusted by 10,000+ companies worldwide
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Company logo" 
                  className="h-6 opacity-40"
                />
                <img 
                  src="https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Company logo" 
                  className="h-6 opacity-40"
                />
                <img 
                  src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Company logo" 
                  className="h-6 opacity-40"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary-light/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary-dark/20 rounded-full filter blur-3xl"></div>
              
              <div className="glass-card p-5 relative z-10">
                <div className="bg-background/70 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-heading font-semibold">Lead Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-error"></div>
                      <div className="w-3 h-3 rounded-full bg-warning"></div>
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="glass-card p-3">
                      <div className="text-xs text-white/60 mb-1">New Leads</div>
                      <div className="text-xl font-semibold">243</div>
                      <div className="text-xs text-success mt-1">+18% ↑</div>
                    </div>
                    <div className="glass-card p-3">
                      <div className="text-xs text-white/60 mb-1">Conversion</div>
                      <div className="text-xl font-semibold">38%</div>
                      <div className="text-xs text-success mt-1">+5% ↑</div>
                    </div>
                    <div className="glass-card p-3">
                      <div className="text-xs text-white/60 mb-1">Revenue</div>
                      <div className="text-xl font-semibold">$42K</div>
                      <div className="text-xs text-success mt-1">+22% ↑</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-medium">Lead Quality</h4>
                      <span className="text-xs text-white/60">This Week</span>
                    </div>
                    <div className="h-20 flex items-end space-x-2">
                      <div className="w-1/7 h-[30%] bg-gradient-to-t from-primary-light to-primary-dark rounded-t-sm"></div>
                      <div className="w-1/7 h-[45%] bg-gradient-to-t from-primary-light to-primary-dark rounded-t-sm"></div>
                      <div className="w-1/7 h-[60%] bg-gradient-to-t from-primary-light to-primary-dark rounded-t-sm"></div>
                      <div className="w-1/7 h-[75%] bg-gradient-to-t from-primary-light to-primary-dark rounded-t-sm"></div>
                      <div className="w-1/7 h-[90%] bg-gradient-to-t from-primary-light to-primary-dark rounded-t-sm"></div>
                      <div className="w-1/7 h-[65%] bg-gradient-to-t from-primary-light to-primary-dark rounded-t-sm"></div>
                      <div className="w-1/7 h-[80%] bg-gradient-to-t from-primary-light to-primary-dark rounded-t-sm"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-sm font-medium">Top Lead Sources</h4>
                      <span className="text-xs text-primary-light">View All</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 glass-card">
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-2 text-primary-light" />
                          <span className="text-sm">Enterprise Solutions Inc.</span>
                        </div>
                        <span className="text-xs font-medium text-success">94%</span>
                      </div>
                      <div className="flex justify-between items-center p-2 glass-card">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-primary-light" />
                          <span className="text-sm">Global Tech Partners</span>
                        </div>
                        <span className="text-xs font-medium text-success">89%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -top-5 -right-5 glass-card p-3 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="flex items-center">
                  <BarChart2 className="w-5 h-5 text-primary-light mr-2" />
                  <div>
                    <div className="text-xs font-medium">ROI Increased</div>
                    <div className="text-sm font-semibold">+127%</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-5 -left-5 glass-card p-3 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-primary-light mr-2" />
                  <div>
                    <div className="text-xs font-medium">New Leads Today</div>
                    <div className="text-sm font-semibold">32 Qualified</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;