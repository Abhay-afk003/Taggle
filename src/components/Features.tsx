import React from 'react';
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

  // Duplicate features for seamless loop
  const allFeatures = [...features, ...features];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Taggle Delivers the <span className="gradient-text">Leads That Convert</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8">
            Verified contacts. Real-time insights. Automations. Integrations ready.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {stats.map(({ icon: Icon, text }, idx) => (
              <div
                key={idx}
                className="bg-black/30 border border-white/10 p-4 flex items-center justify-center rounded-xl"
              >
                <Icon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="font-medium text-white text-sm sm:text-base">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Marquee */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Scrolling features */}
          <div className="flex animate-marquee space-x-6 hover:pause-animation">
            {allFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-80 text-white rounded-2xl border border-purple-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] p-6 mx-2"
              >
                <div className="flex flex-col items-center text-center h-full min-h-[280px]">
                  <div className="mb-6">
                    <div className="p-4 rounded-full border border-purple-500/20 bg-black/40">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-purple-400 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Trusted by 500+ companies • 99.9% uptime • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;