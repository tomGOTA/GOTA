import React from 'react';
import SpotsLeftBanner from './SpotsLeftBanner';

const Hero: React.FC<{ onApplyClick: () => void; hasSubmitted: boolean }> = ({ onApplyClick, hasSubmitted }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 text-center text-white bg-black">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-[#428037]/30 blur-3xl rounded-full opacity-50" 
          aria-hidden="true"
        ></div>
      
        <div className="relative container mx-auto px-6 flex flex-col items-center">
            <SpotsLeftBanner />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
                <span>Giants</span>
                <span className="text-gray-500 italic"> of the </span>
                <span>Amazon.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 font-light mb-10">
                The invite-only Amazon community where leaders share insight, solve challenges, and shape the future of commerce.
            </p>
            <button 
                onClick={onApplyClick}
                disabled={hasSubmitted}
                className="inline-block bg-white hover:bg-black text-black hover:text-white font-extrabold text-lg py-4 px-8 rounded-none border border-black transition-colors duration-300 disabled:bg-gray-700 disabled:text-gray-400 disabled:border-gray-700 disabled:cursor-not-allowed">
                {hasSubmitted ? 'Thank You' : 'Become a Member'}
            </button>
        </div>
    </section>
  );
};

export default Hero;