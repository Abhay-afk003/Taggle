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
        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: '48px' }}>
          <h2 className="section-title">
            Simple <span className="accent-text-green">pricing</span>
          </h2>
          <p className="section-description">
            Choose the plan that fits your business needs.
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`toggle-btn ${billingCycle === "monthly" ? 'active' : ''}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`toggle-btn ${billingCycle === "yearly" ? 'active' : ''}`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}
              
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="price-container">
                  <span className="price-amount">
                    ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="price-period">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
                <p className="plan-description">{getLeadsText(plan.baseLeads)}</p>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <Check className="check-icon" />
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} w-full`}>
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