import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, Sparkles, Headphones } from 'lucide-react';

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
  delay 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`glass-card p-8 relative ${
        highlighted ? 'border-2 border-gradient-to-r from-primary-light to-primary-dark' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-light to-primary-dark text-white text-sm py-1 px-4 rounded-full flex items-center">
          <Sparkles className="w-4 h-4 mr-1" />
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-semibold mb-2">{name}</h3>
        <div className="mb-3">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-white/60">/month</span>
        </div>
        <p className="text-white/70">{description}</p>
      </div>

      {highlights.length > 0 && (
        <div className="mb-6 bg-white/5 rounded-lg p-4">
          <p className="text-sm font-medium text-primary-light mb-3">Plan Highlights:</p>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-white/90 flex items-center">
                <Check className="w-4 h-4 text-success mr-2" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <Check className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
            ) : (
              <X className="w-5 h-5 text-white/30 mt-0.5 mr-3 flex-shrink-0" />
            )}
            <span className={feature.included ? "text-white/90" : "text-white/50"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <a 
        href="#signup" 
        className={`w-full ${
          highlighted 
            ? 'btn-primary' 
            : 'btn-ghost'
        }`}
      >
        {cta}
      </a>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pricingTiers = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small businesses starting with lead generation",
      highlights: [
        "500 monthly leads",
        "Basic ICP tools",
        "Standard enrichment"
      ],
      features: [
        { text: "Basic ICP development tools", included: true },
        { text: "Standard data enrichment", included: true },
        { text: "Basic lead scoring", included: true },
        { text: "Essential CRM integrations", included: true },
        { text: "Email support", included: true },
        { text: "Real-time data updates", included: false },
        { text: "Custom scoring models", included: false },
        { text: "Advanced analytics", included: false },
      ],
      cta: "Start Free Trial",
      highlighted: false,
      delay: 0.1,
    },
    {
      name: "Professional",
      price: "59",
      description: "Ideal for growing teams with advanced lead generation needs",
      highlights: [
        "2,000 monthly leads",
        "Advanced ICP tools",
        "Real-time enrichment"
      ],
      features: [
        { text: "Advanced ICP development suite", included: true },
        { text: "Real-time data enrichment", included: true },
        { text: "AI-powered lead scoring", included: true },
        { text: "Extended CRM integrations", included: true },
        { text: "Priority support", included: true },
        { text: "Custom field mapping", included: true },
        { text: "Custom scoring models", included: false },
        { text: "Dedicated account manager", included: false },
      ],
      cta: "Start Free Trial",
      highlighted: true,
      delay: 0.2,
    },
    {
      name: "Growth",
      price: "99",
      description: "For organizations requiring enterprise-grade features",
      highlights: [
        "Unlimited leads",
        "Custom ICP development",
        "Premium data sources"
      ],
      features: [
        { text: "Custom ICP development", included: true },
        { text: "Premium data sources", included: true },
        { text: "Custom scoring models", included: true },
        { text: "Enterprise integrations", included: true },
        { text: "Dedicated support", included: true },
        { text: "Advanced analytics dashboard", included: true },
        { text: "Custom workflow automation", included: true },
        { text: "API access", included: true },
      ],
      cta: "Contact Sales",
      highlighted: false,
      delay: 0.3,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/20 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, <span className="gradient-text">Transparent</span> Pricing</h2>
          <p className="text-white/70 text-lg">Choose the plan that fits your business needs. All plans include a 14-day free trial.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">Need a custom solution? Let's build a plan that perfectly fits your requirements.</p>
          <a href="#contact" className="btn-ghost inline-flex items-center">
            <Headphones className="w-5 h-5 mr-2" />
            Contact Our Sales Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;