import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Audience from './components/Audience';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(() => {
    try {
      // Check localStorage to see if the form has already been submitted.
      return window.localStorage.getItem('formSubmitted') === 'true';
    } catch (error) {
      console.error('Could not access localStorage', error);
      return false;
    }
  });

  // Listen for changes in localStorage to sync state across tabs.
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'formSubmitted') {
        setHasSubmitted(event.newValue === 'true');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  const handleOpenForm = () => {
    if (!hasSubmitted) {
      setIsFormOpen(true);
    }
  };
  const handleCloseForm = () => setIsFormOpen(false);
  
  const handleFormSuccess = () => {
    try {
      // Persist the submission status to localStorage.
      window.localStorage.setItem('formSubmitted', 'true');
    } catch (error) {
      console.error('Could not write to localStorage', error);
    }
    setHasSubmitted(true);
  };

  return (
    <div className="bg-black">
      <Header />
      <main>
        <Hero onApplyClick={handleOpenForm} hasSubmitted={hasSubmitted} />
        <Features />
        <Audience />
        <Pricing onApplyClick={handleOpenForm} hasSubmitted={hasSubmitted} />
        <FAQ />
      </main>
      <Footer />
      <ApplicationForm isOpen={isFormOpen} onClose={handleCloseForm} onSuccess={handleFormSuccess} />
    </div>
  );
};

export default App;