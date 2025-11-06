import React from 'react';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const audienceData = [
  {
    title: 'PPC Strategy & Insight',
    description: 'Staying ahead of Amazon’s evolving ad ecosystem — from DSP to Sponsored Brand video — and sharing what’s actually driving incremental growth.',
  },
  {
    title: 'Operational Excellence',
    description: 'Optimizing logistics, supply chain, and team structures at scale. Discussing real-world systems that create efficiency without sacrificing speed.',
  },
  {
    title: 'Compliance & Risk',
    description: 'Navigating Amazon’s compliance landscape, from product claims and reviews to account health — and learning how top brands stay protected.',
  },
  {
    title: 'Omni-Channel Growth',
    description: 'Balancing DTC, TikTok Shop, retail, and Amazon in one cohesive strategy. GOTA members understand that brand-building doesn’t stop at one channel.',
  },
];

const AudienceItem: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <li className="flex items-start">
        <div className="flex-shrink-0 mt-1">
            <CheckIcon />
        </div>
        <div className="ml-4">
            <h4 className="text-lg font-bold text-white">{title}</h4>
            <p className="mt-1 text-gray-300">{description}</p>
        </div>
    </li>
);

const Audience: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-black">
      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[550px]">
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#428037]/25 blur-3xl rounded-full" 
                    aria-hidden="true"
                ></div>
                <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                    alt="A confident business leader, representing the members of the GOTA community" 
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl shadow-2xl" 
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    }}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
            </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Private Space for Elite Amazon Operators</h2>
            <p className="text-lg text-gray-400 mb-8">
              We are building an elite space for operators leading complex Amazon businesses — people who think beyond listings.
            </p>
            <ul className="space-y-6">
              {audienceData.map((item) => (
                <AudienceItem key={item.title} title={item.title} description={item.description} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;