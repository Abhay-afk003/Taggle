import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  UserCheck,
  FileSearch,
  Zap,
  Database,
  Clock,
  DollarSign,
  BarChart3,
} from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-purple-400" />,
      title: 'Verified Leads',
      description:
        'Receive laser-targeted leads, fully verified and aligned to your ideal customer profile (ICP), right in your inbox.',
    },
    {
      icon: <FileSearch className="w-8 h-8 text-blue-400" />,
      title: 'Prospect Intelligence',
      description:
        'Gain insight into each lead\'s buying signals, firmographics, and intent, all enriched automatically.',
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Smart Automations',
      description:
        'Enable intelligent automation to save hours every week and nurture leads without manual intervention.',
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'CRM Integrations',
      description:
        'Seamlessly integrate with Salesforce, HubSpot, and more. Keep your pipeline fresh and organized.',
    },
  ];

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Taggle Delivers the <span className="gradient-text">Leads That Convert</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed">
            Verified contacts. Real-time insights. Smart automations. CRM integrations ready.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Clock, text: 'Save 25+ hours weekly', color: 'text-purple-400' },
              { icon: DollarSign, text: 'Cut CAC by up to 60%', color: 'text-green-400' },
              { icon: BarChart3, text: '3x higher conversions', color: 'text-blue-400' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                <span className="font-semibold text-white text-sm md:text-base">{stat.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-purple-500/40 transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="mb-4 p-3 rounded-xl bg-black/20 w-fit">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;