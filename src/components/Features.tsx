import React from 'react';
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
  Target,
  Shield,
  Rocket,
} from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
  });

  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: 'Verified Leads',
      description: 'Receive laser-targeted leads, fully verified and aligned to your ideal customer profile (ICP), right in your inbox.',
    },
    {
      icon: <FileSearch className="w-8 h-8 text-white" />,
      title: 'Prospect Intelligence',
      description: "Gain insight into each lead's buying signals, firmographics, and intent, all enriched automatically.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Smart Automations',
      description: 'Enable intelligent automation to save hours every week and nurture leads without manual intervention.',
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'CRM Integrations',
      description: 'Seamlessly integrate with Salesforce, HubSpot, and more. Handled separately to keep your pipeline fresh.',
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Precision Targeting',
      description: 'Advanced AI algorithms ensure every lead matches your exact requirements and buying criteria.',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Data Compliance',
      description: 'GDPR and CCPA compliant data collection ensures your outreach meets all regulatory requirements.',
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: 'Instant Delivery',
      description: 'Get qualified leads delivered to your inbox within minutes of identification and verification.',
    },
  ];

  const stats = [
    { icon: Clock, text: 'Save 25+ hours weekly' },
    { icon: DollarSign, text: 'Cut CAC by up to 60%' },
    { icon: BarChart3, text: '3x higher conversions' }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Taggle Delivers the <span className="gradient-text">Leads That Convert</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8">
            Verified contacts. Real-time insights. Automations. Integrations ready.
          </p>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {stats.map(({ icon: Icon, text }, idx) => (
              <motion.div
                key={idx}
                className="bg-black/30 border border-white/10 p-4 flex items-center justify-center rounded-xl hover:border-purple-500/40 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                <Icon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="font-medium text-white text-sm sm:text-base">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px',
  });

  return (
    <motion.div
      ref={cardRef}
      className="group text-white rounded-2xl border border-purple-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ 
        duration: 0.4, 
        ease: 'easeOut',
        delay: index * 0.1,
      }}
      initial="hidden"
      animate={cardInView ? "visible" : "hidden"}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-purple-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent blur-2xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700"></div>
        <div className="absolute top-5 left-5 w-8 h-8 rounded-full bg-purple-500/5 blur-xl animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-6 h-6 rounded-full bg-purple-500/5 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center h-full min-h-[280px]">
        {/* Icon */}
        <motion.div 
          className="relative mb-6"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border border-purple-500/10 animate-pulse delay-500"></div>
          <div className="p-4 rounded-full border border-purple-500/20 bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
            {feature.icon}
          </div>
        </motion.div>

        {/* Content */}
        <motion.h3 
          className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0 }}
          animate={cardInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
        >
          {feature.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 text-sm leading-relaxed sm:text-base group-hover:text-gray-200 transition-colors duration-300 flex-grow"
          initial={{ opacity: 0 }}
          animate={cardInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
        >
          {feature.description}
        </motion.p>
      </div>

      {/* Hover highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

export default Features;