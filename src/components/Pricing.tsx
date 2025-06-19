import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, Sparkles } from 'lucide-react';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: Array<{ text: string; included: boolean }>;
  highlights?: string[];
  cta: string;
  highlighted?: boolean;
  delay: number;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  description,
  features,
  highlights = [],
  cta,
  highlighted = false,
  delay,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col items-center h-full">
      <motion.div
        ref={ref}
        className="card-gradient-border w-full h-full flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay }}
      >
        <div className="card-inner text-white font-sans flex flex-col flex-grow p-6">
        {highlighted && (
            <div className="inline-flex items-center self-center mb-5 bg-gradient-to-r from-primary-light to-primary-dark text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Most Popular
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-2xl font-heading font-semibold mb-2">{name}</h3>
            <div className="mb-1">
              <span className="text-4xl font-bold text-primary-light">${price}</span>
              <span className="text-white/60">/month</span>
            </div>
            <p className="text-white/70 text-sm">{description}</p>
          </div>

          {highlights.length > 0 && (
            <div className="mb-5 bg-surface-light rounded-lg p-3">
              <p className="text-sm font-medium text-primary-light mb-2">Plan Highlights:</p>
              <ul className="space-y-1">
                {highlights.map((highlight, index) => (
                  <li key={index} className="text-sm text-white/90 flex items-center">
                    <Check className="w-4 h-4 text-success mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ul className="space-y-3 mb-6 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {feature.included ? (
                  <Check className="w-5 h-5 text-success mt-0.5 mr-3" />
                ) : (
                  <X className="w-5 h-5 text-white/30 mt-0.5 mr-3" />
                )}
                <span className={feature.included ? 'text-white/90' : 'text-white/50'}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#signup"
            className={`w-full block text-center py-2 rounded-md font-medium mt-auto ${
              highlighted
                ? 'bg-gradient-to-r from-primary-light to-primary-dark text-white hover:opacity-90 transition'
                : 'bg-surface-medium text-white hover:bg-surface-dark transition'
            }`}
          >
            {cta}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const pricingTiers = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for small businesses starting with lead generation',
      highlights: ['150 monthly leads', 'Basic ICP tools', 'Standard enrichment'],
      features: [
        { text: 'Basic ICP development tools', included: true },
        { text: 'Standard data enrichment', included: true },
        { text: 'Basic lead scoring', included: true },
        { text: 'Essential CRM integrations', included: true },
        { text: 'Email support', included: true },
        { text: 'Realtime data updates', included: false },
        { text: 'Custom scoring models', included: false },
        { text: 'Advanced analytics', included: false },
        { text: 'Custom Workflow Automation', included: false },
      ],
      cta: 'Start Free Trial',
      highlighted: false,
      delay: 0.1,
    },
    {
      name: 'Professional',
      price: '59',
      description: 'Ideal for growing teams with advanced lead generation needs',
      highlights: ['2,500 monthly leads', 'Advanced ICP tools', 'Real-time enrichment'],
      features: [
        { text: 'Everything from the Starter Plan', included: true },
        { text: 'Advanced ICP development suite', included: true },
        { text: 'Real-time data enrichment', included: true },
        { text: 'AI-powered lead scoring', included: true },
        { text: 'Extended CRM integrations', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom field mapping', included: true },
        { text: 'Custom scoring models', included: false },
        { text: 'Custom Workflow Automation', included: false },
      ],
      cta: 'Get Started',
      highlighted: true,
      delay: 0.2,
    },
    {
      name: 'Growth',
      price: '99',
      description: 'For organizations requiring enterprise-grade features',
      highlights: ['10,000 monthly leads', 'Custom ICP development', 'Premium data sources'],
      features: [
        { text: 'Everything from the Pro Plan', included: true },
        { text: 'Custom ICP development', included: true },
        { text: 'Premium data sources', included: true },
        { text: 'Custom scoring models', included: true },
        { text: 'Enterprise integrations', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Advanced analytics dashboard', included: true },
        { text: 'Custom Workflow automation', included: true },
      ],
      cta: 'Get Started',
      highlighted: false,
      delay: 0.3,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative bg-background text-white">
      <div className="container-custom max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold font-heading mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-white/70 text-lg">
            Choose the plan that fits your business. 14‑day free trial included.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {pricingTiers.map((tier, i) => (
            <PricingTier key={i} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;