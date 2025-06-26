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
    <section id="pricing" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl mb-3">
            Straightforward <span className="gradient-text italic">Pricing</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg">
          You pay. We deliver. Simple.
          </p>

          <div className="mt-5 inline-flex items-center space-x-4 justify-center">
            <span
              className={`text-sm cursor-pointer ${billingCycle === "monthly" ? "text-white" : "text-white/50"}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </span>
            <div
              className="w-12 h-6 bg-zinc-700 rounded-full flex items-center px-1 cursor-pointer"
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  billingCycle === "yearly" ? "translate-x-6" : ""
                }`}
              />
            </div>
            <span
              className={`text-sm cursor-pointer ${billingCycle === "yearly" ? "text-white" : "text-white/50"}`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-zinc-800 p-5 bg-zinc-900 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <h3 className="text-lg mb-2">{plan.name}</h3>
                <p className="text-2xl mb-3">
                  ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  <span className="text-sm font-normal text-white/50 ml-1">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </p>
                <p className="text-white/70 mb-5 text-sm">{getLeadsText(plan.baseLeads)}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#signup"
                className="mt-5 inline-block w-full text-center bg-purple-600 hover:bg-purple-700 transition rounded-md py-2 text-sm"
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