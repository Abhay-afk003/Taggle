import React, { useState } from "react";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: { monthly: number; yearly: number };
  baseLeads: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Lite",
    price: { monthly: 9, yearly: 90 },
    baseLeads: 100,
    features: [
      "Inbox delivery only",
      "Basic ICP matching",
      "Email support",
    ],
    cta: "Start Lite",
  },
  {
    name: "Solo",
    price: { monthly: 29, yearly: 290 },
    baseLeads: 500,
    features: [
      "Inbox delivery with insights",
      "Advanced ICP matching",
      "Limited CRM integrations",
      "Priority support"
    ],
    cta: "Get Solo",
    popular: true,
  },
  {
    name: "Pro",
    price: { monthly: 69, yearly: 690 },
    baseLeads: 1500,
    features: [
      "Full platform access",
      "Advanced ICP matching",
      "All CRM integrations",
      "Full automation suite",
      "Dedicated support"
    ],
    cta: "Go Pro",
  },
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const getLeadsText = (baseLeads: number) => {
    const leads = billingCycle === "yearly" ? Math.ceil(baseLeads * 1.2) : baseLeads;
    return `${leads} verified leads/month`;
  };

  return (
    <section id="pricing" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto rhythm-48">
          <h2 className="section-heading rhythm-24">
            Simple <span className="gradient-text-2">pricing</span>
          </h2>
          <p className="body-text text-white/80 rhythm-32">
            Choose the plan that fits your business needs.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center space-x-4 bg-white/5 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 ${
                billingCycle === "monthly" 
                  ? "bg-white text-black" 
                  : "text-white hover:text-white/80"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 ${
                billingCycle === "yearly" 
                  ? "bg-white text-black" 
                  : "text-white hover:text-white/80"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card relative ${
                plan.popular ? 'border-white/40 scale-105' : ''
              } col-span-12 md:col-span-4`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center rhythm-24">
                <h3 className="text-xl font-semibold rhythm-8">{plan.name}</h3>
                <div className="rhythm-16">
                  <span className="text-3xl font-bold">
                    ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-white/60 ml-1">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
                <p className="text-white/80 text-sm">{getLeadsText(plan.baseLeads)}</p>
              </div>

              <ul className="space-y-3 rhythm-32">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#67B26F' }} />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;