import React from "react";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: 29,
      period: "month",
      description: "Perfect for beginners starting their coding journey",
      features: [
        "Access to 50+ courses",
        "Basic coding environment",
        "Community forum access",
        "Email support",
        "Mobile app access",
        "Basic certificates",
      ],
      popular: false,
      buttonText: "Start Free Trial",
    },
    {
      name: "Professional",
      icon: Crown,
      price: 79,
      period: "month",
      description: "Ideal for serious learners and career changers",
      features: [
        "Access to ALL courses",
        "Advanced IDE with debugging",
        "Priority support",
        "Live mentorship sessions",
        "Career coaching",
        "Industry-recognized certificates",
        "Job placement assistance",
        "Portfolio review",
      ],
      popular: true,
      buttonText: "Get Started",
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: 199,
      period: "month",
      description: "For teams and organizations",
      features: [
        "Everything in Professional",
        "Team management dashboard",
        "Custom learning paths",
        "Advanced analytics",
        "Dedicated account manager",
        "Custom certificates",
        "API access",
        "Enterprise SSO",
      ],
      popular: false,
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options to fit your learning style and budget. All
            plans include lifetime access to purchased courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular
                  ? "border-orange-500 scale-105"
                  : "border-white border-opacity-20 hover:border-orange-300"
              }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <plan.icon
                  className={`w-12 h-12 mx-auto mb-4 ${
                    plan.popular ? "text-orange-400" : "text-gray-300"
                  }`}
                />

                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-300 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-300">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === "Enterprise" ? "/contact" : "/courses"}
                className={`block w-full text-center py-4 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                    : "bg-white bg-opacity-10 text-white border border-white border-opacity-30 hover:bg-opacity-20"
                }`}>
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center text-gray-300">
          <p className="text-lg">
            💡 All plans include a 14-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
