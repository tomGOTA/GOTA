import React from 'react';

const SpotsLeftBanner: React.FC = () => {
  return (
    <div className="inline-flex items-center justify-center bg-black/50 border border-gray-800 rounded-full px-4 py-1.5 mb-6 text-sm text-gray-200 backdrop-blur-sm">
      <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3" style={{ boxShadow: '0 0 10px 1px rgba(52, 211, 153, 0.7)' }}></div>
      <span>Hurry, spaces are limited.</span>
    </div>
  );
};

export default SpotsLeftBanner;