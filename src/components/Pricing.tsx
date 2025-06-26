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
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
  });

  const getLeadsText = (baseLeads: number) => {
    const leads = billingCycle === "yearly" ? Math.ceil(baseLeads * 1.2) : baseLeads;
    return `${leads} verified leads/month delivered to your inbox.`;
  };

  return (
    <section id="pricing" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Straightforward <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-white/70 text-lg">
          You pay. We deliver. Simple.
          </p>

          <div className="mt-6 inline-flex items-center space-x-4 justify-center">
            <span
              className={`text-sm cursor-pointer transition-colors duration-200 ${billingCycle === "monthly" ? "text-white" : "text-white/50"}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </span>
            <div
              className="w-12 h-6 bg-zinc-700 rounded-full flex items-center px-1 cursor-pointer transition-all duration-200"
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                  billingCycle === "yearly" ? "translate-x-6" : ""
                }`}
              />
            </div>
            <span
              className={`text-sm cursor-pointer transition-colors duration-200 ${billingCycle === "yearly" ? "text-white" : "text-white/50"}`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-zinc-800 p-6 bg-zinc-900 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">
                  ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  <span className="text-sm font-normal text-white/50 ml-1">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </p>
                <p className="text-white/70 mb-6">{getLeadsText(plan.baseLeads)}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mt-1 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#signup"
                className="mt-6 inline-block w-full text-center bg-purple-600 hover:bg-purple-700 transition-colors duration-200 rounded-md py-2 font-medium"
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