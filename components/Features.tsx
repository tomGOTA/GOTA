import React from 'react';

const FeatureCard: React.FC<{ title: React.ReactNode; description: string }> = ({ title, description }) => (
  <div className="bg-black p-6 transition-all duration-300 hover:-translate-y-1 border border-white">
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything You Need to Scale Smarter</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">A private space for connection, insight, and execution.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title={<>Real<br />Conversations</>} 
            description="Honest discussions with founders and operators running seven-to-nine figure brands. Share what’s working, what’s not, and learn from people who’ve actually done it." 
          />
          <FeatureCard 
            title={<>Private<br />Sessions</>} 
            description="Live roundtables, member-led deep dives, and invite-only AMAs with top operators and partners across the Amazon ecosystem." 
          />
          <FeatureCard 
            title={<>Proven<br />Playbooks</>} 
            description="Access frameworks, SOPs, and benchmarks from real operators. No theory — just what’s driving growth right now." 
          />
        </div>
      </div>
    </section>
  );
};

export default Features;