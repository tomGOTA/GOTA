import React from 'react';

const CommunityPlatform: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">A Platform Built for Connection</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">Powered by Circle, the leading platform for modern communities.</p>
        </div>
        <div className="max-w-5xl mx-auto">
            <div className="relative">
                 <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[#428037]/20 blur-3xl rounded-full opacity-60" 
                    aria-hidden="true"
                ></div>
                <img 
                    src="https://raw.githubusercontent.com/tomGOTA/lander/refs/heads/main/Adobe%20Express%20Photo%20project%20(1).png" 
                    alt="Screenshot of the GOTA community platform on Circle, showing discussion channels and member activity." 
                    className="relative w-full rounded-2xl border border-gray-800 shadow-2xl" 
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPlatform;