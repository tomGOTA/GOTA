import React from 'react';
import { SparkleIcon } from './icons/SparkleIcon';

const Pricing: React.FC<{ onApplyClick: () => void; hasSubmitted: boolean }> = ({ onApplyClick, hasSubmitted }) => {
  const features = [
    "Access to private operator discussions",
    "Monthly roundtables with 7–9 figure founders",
    "Proven Amazon playbooks and frameworks",
    "Curated agency and recruiter network",
    "Priority access to live sessions and resources",
    "Cancel anytime — no long-term commitment",
  ];

  return (
    <section id="pricing" className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Membership that means something
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">Built for operators, not sellers.</p>
        
        <div className="relative max-w-md mx-auto mt-12">
          <div className="absolute -inset-20 bg-[#428037]/20 blur-3xl rounded-full" aria-hidden="true"></div>
          
          <div className="relative bg-black/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-xl">
            <div className="inline-flex items-center bg-gray-900 border border-gray-700 rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="mr-2">🟢</span>
              Limited founding seats
            </div>

            <div className="mt-6">
              <span className="text-6xl font-bold">$100</span>
              <span className="text-xl text-gray-400">/month</span>
            </div>

            <div className="mt-8">
              <button 
                onClick={onApplyClick}
                disabled={hasSubmitted}
                className="block w-full bg-white hover:bg-black text-black hover:text-white font-extrabold text-lg py-4 px-8 rounded-none border-2 border-[#428037] transition-colors duration-300 disabled:bg-gray-700 disabled:text-gray-400 disabled:border-gray-700 disabled:cursor-not-allowed"
              >
                {hasSubmitted ? 'Thank You' : 'Apply for Early Access'}
              </button>
            </div>
            
            <ul className="space-y-4 mt-8 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <SparkleIcon className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;