import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: { monthly: number; yearly: number };
  baseLeads: number;
  description: string;
  features: string[];
  cta: string;
}

const plans: PricingPlan[] = [
  {
    name: "Lite",
    price: { monthly: 9, yearly: 90 },
    baseLeads: 100,
    description: "",
    features: [
      "Inbox delivery only",
      "Basic ICP matching",
      "No CRM or automation",
    ],
    cta: "Start Lite",
  },
  {
    name: "Solo",
    price: { monthly: 29, yearly: 290 },
    baseLeads: 500,
    description: "",
    features: [
      "Inbox delivery with insights",
      "Advanced ICP matching",
      "Limited CRM integrations",
      "Limited Automations enabled"
    ],
    cta: "Get Solo",
  },
  {
    name: "Pro",
    price: { monthly: 69, yearly: 690 },
    baseLeads: 1500,
    description: "",
    features: [
      "Inbox delivery with insights",
      "Advanced ICP matching",
      "Full CRM integrations",
      "All Automations enabled",
    ],
    cta: "Go Pro",
  },
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const getLeadsText = (baseLeads: number) => {
    const leads = billingCycle === "yearly" ? Math.ceil(baseLeads * 1.2) : baseLeads;
    return `${leads} verified leads/month delivered to your inbox.`;
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-container mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 leading-tight">
              <span className="text-white">Straightforward </span>
              <span className="gradient-text italic">Pricing</span>
            </h2>
          </div>
          
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            You pay. We deliver. Simple.
          </p>

          <div className="mt-5 sm:mt-6 inline-flex items-center space-x-3 sm:space-x-4 justify-center bg-zinc-800/50 rounded-full p-1">
            <span
              className={`text-xs sm:text-sm cursor-pointer px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "monthly" 
                  ? "text-white bg-purple-600" 
                  : "text-white/50 hover:text-white/70"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </span>
            <span
              className={`text-xs sm:text-sm cursor-pointer px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "yearly" 
                  ? "text-white bg-purple-600" 
                  : "text-white/50 hover:text-white/70"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-zinc-800 p-4 sm:p-6 lg:p-8 bg-zinc-900/50 backdrop-blur-md flex flex-col justify-between h-full min-h-[400px] hover:border-purple-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-white">{plan.name}</h3>
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-white">
                    ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-sm sm:text-base text-white/50 ml-1">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
                <p className="text-white/70 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {getLeadsText(plan.baseLeads)}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm lg:text-base">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#signup"
                className="mt-6 sm:mt-8 inline-block w-full text-center bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg py-2 sm:py-3 text-sm sm:text-base lg:text-lg text-white hover:scale-105 transform"
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;