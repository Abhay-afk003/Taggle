import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Database, BarChart3, RefreshCw, ArrowRight, Clock, DollarSign } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  savings: string;
  cta: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, benefits, savings, cta, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="feature-card group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-3 rounded-full bg-gradient-to-r from-primary-light to-primary-dark inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <Clock className="w-4 h-4 text-success mr-2" />
          <span className="text-success font-medium text-sm">{savings}</span>
        </div>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-white/60 flex items-start">
              <ArrowRight className="w-3 h-3 text-primary-light mt-1 mr-2 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      
      <button className="btn-ghost w-full group-hover:bg-gradient-to-r group-hover:from-primary-light group-hover:to-primary-dark group-hover:text-white transition-all duration-300">
        {cta}
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Precision Targeting That Converts",
      description: "Stop wasting budget on unqualified prospects. Our AI identifies your perfect customers with 94% accuracy, eliminating guesswork and reducing acquisition costs by up to 60%.",
      benefits: [
        "Target only decision-makers actively seeking solutions",
        "Eliminate cold outreach to uninterested prospects",
        "Focus sales efforts on highest-converting segments"
      ],
      savings: "Save 15+ hours weekly on prospect research",
      cta: "Start Precise Targeting",
      delay: 0.1,
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: "Complete Prospect Intelligence",
      description: "Transform incomplete contact lists into comprehensive prospect profiles. Get verified emails, phone numbers, company insights, and buying signals in real-time.",
      benefits: [
        "Verified contact data with 95% accuracy guarantee",
        "Real-time company growth and technology insights",
        "Buying intent signals and timing indicators"
      ],
      savings: "Eliminate 20+ hours of manual data research weekly",
      cta: "Enrich Your Database",
      delay: 0.2,
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Smart Lead Prioritization",
      description: "Never miss a hot prospect again. Our AI scores every lead based on conversion probability, helping you close 3x more deals by focusing on ready-to-buy prospects first.",
      benefits: [
        "Prioritize leads with 80%+ conversion probability",
        "Identify prospects in active buying cycles",
        "Automate follow-up sequences for lukewarm leads"
      ],
      savings: "Increase close rates by 200% on priority leads",
      cta: "Score My Leads",
      delay: 0.3,
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      title: "Seamless Workflow Integration",
      description: "Sync instantly with Salesforce, HubSpot, and 50+ CRMs. Eliminate manual data entry and keep your sales pipeline automatically updated with fresh, qualified leads.",
      benefits: [
        "One-click setup with major CRM platforms",
        "Automatic lead scoring and pipeline updates",
        "Real-time sync prevents data duplication"
      ],
      savings: "Reduce admin time by 10+ hours weekly",
      cta: "Connect Your CRM",
      delay: 0.4,
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-dark/20 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turn More Prospects Into <span className="gradient-text">Paying Customers</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Stop chasing unqualified leads. Our proven system helps you find, engage, and convert the right prospects faster than ever before.
          </p>
          
          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-4 flex items-center justify-center">
              <Clock className="w-5 h-5 text-success mr-2" />
              <span className="font-medium">Save 25+ hours weekly</span>
            </div>
            <div className="glass-card p-4 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-success mr-2" />
              <span className="font-medium">Reduce costs by 60%</span>
            </div>
            <div className="glass-card p-4 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-success mr-2" />
              <span className="font-medium">3x higher close rates</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Social Proof Section */}
        <motion.div
          className="mt-20 glass-card p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Join 10,000+ Companies Already <span className="gradient-text">Winning With AI</span>
          </h3>
          <p className="text-white/70 mb-8">
            See the immediate impact on your sales pipeline with our 14-day free trial
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-primary-light mb-2">94%</div>
              <div className="text-white/60">Lead Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-light mb-2">3x</div>
              <div className="text-white/60">Faster Pipeline Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-light mb-2">$127K</div>
              <div className="text-white/60">Average Revenue Increase</div>
            </div>
          </div>
          
          <a href="#trial" className="btn-primary inline-flex items-center">
            Start Your Free 14-Day Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;