import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$99',
    description: 'Perfect for small businesses and startups',
    features: [
      'Responsive website design',
      '5 pages included',
      'Contact form integration',
      '3 months of support',
      'Google Analytics setup'
    ],
    buttonText: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$249',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Starter',
      'E-commerce functionality',
      'CMS integration',
      'Custom animations',
      'SEO optimization',
      '6 months of support'
    ],
    buttonText: 'Choose Plan',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '$499',
    description: 'For large businesses with advanced needs',
    features: [
      'Everything in Professional',
      'Custom web application',
      'Database integration',
      'User authentication',
      'API development',
      'Advanced security features',
      '12 months of priority support'
    ],
    buttonText: 'Contact Us'
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Choose a plan that works best for your business needs. All plans come with our quality guarantee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`
                rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1
                ${plan.highlighted 
                  ? 'bg-white dark:bg-gray-700 border-2 border-blue-500 dark:border-blue-400 shadow-lg scale-105 z-10' 
                  : 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-md'
                }
              `}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`
                    w-full py-3 rounded-md transition-colors duration-300
                    ${plan.highlighted 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    }
                  `}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;