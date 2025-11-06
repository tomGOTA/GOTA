import React from 'react';

const GotaLogo: React.FC = () => (
    <span className="text-3xl font-bold text-white tracking-tighter">GOTA.</span>
);


const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-6 flex justify-center items-center">
        <GotaLogo />
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
    </header>
  );
};

export default Header;