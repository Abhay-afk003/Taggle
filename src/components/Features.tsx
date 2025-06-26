import React, { useEffect, useRef, useState } from 'react';
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
import SlidingArrow from './SlidingArrow';

const Features: React.FC = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.15,
    rootMargin: '50px 0px'
  });
  
  const [animationStarted, setAnimationStarted] = useState(false);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-purple-400" />,
      title: 'Verified Leads',
      description: 'Receive laser-targeted leads, fully verified and aligned to your ideal customer profile (ICP), right in your inbox.',
    },
    {
      icon: <FileSearch className="w-8 h-8 text-blue-400" />,
      title: 'Prospect Intelligence',
      description: 'Gain insight into each lead\'s buying signals, firmographics, and intent, all enriched automatically.',
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Smart Automations',
      description: 'Enable intelligent automation to save hours every week and nurture leads without manual intervention.',
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'CRM Integrations',
      description: 'Seamlessly integrate with Salesforce, HubSpot, and more. Keep your pipeline fresh and organized.',
    },
  ];

  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
      
      // Use requestAnimationFrame for smooth performance
      const animateFeatures = () => {
        featureRefs.current.forEach((element, index) => {
          if (element) {
            // Stagger animations by 100ms
            setTimeout(() => {
              requestAnimationFrame(() => {
                element.classList.add('feature-slide-up-visible');
              });
            }, index * 100);
          }
        });
      };
      
      // Small delay to ensure DOM is ready
      setTimeout(animateFeatures, 50);
    }
  }, [inView, animationStarted]);

  return (
    <section 
      id="features" 
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12" 
      style={{ contentVisibility: 'auto' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Sliding Arrow for Section Header */}
          <div className="flex items-center justify-center mb-6">
            <SlidingArrow 
              isVisible={animationStarted} 
              delay={200}
              className="mr-4"
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Taggle Delivers the <span className="gradient-text italic">Leads That Convert</span>
            </h2>
          </div>
          
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Verified contacts. Real-time insights. Smart automations. CRM integrations ready.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Clock, text: 'Save 25+ hours weekly', color: 'text-purple-400' },
              { icon: DollarSign, text: 'Cut CAC by up to 60%', color: 'text-green-400' },
              { icon: BarChart3, text: '3x higher conversions', color: 'text-blue-400' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
                style={{ gap: '24px' }}
              >
                <stat.icon className={`w-6 h-6 ${stat.color} flex-shrink-0`} />
                <span className="text-white text-base text-center leading-tight">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid with Slide-Up Animation */}
        <div 
          ref={ref}
          className="features-grid"
          style={{ gap: '24px' }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              ref={(el) => {
                featureRefs.current[idx] = el;
              }}
              className="feature-slide-up"
              style={{ 
                gap: '24px'
              }}
            >
              <div className="mb-6 p-3 rounded-xl bg-black/20 w-fit">
                {feature.icon}
              </div>
              
              <h3 className="text-xl mb-3 text-white leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Sliding Arrow for each feature */}
              <div className="mt-4">
                <SlidingArrow 
                  isVisible={animationStarted} 
                  delay={300 + (idx * 100)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;