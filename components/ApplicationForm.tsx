import React, { useState, useEffect, useCallback, FormEvent, ChangeEvent } from 'react';

const questions = [
  { id: 'name', label: "What's your full name?", type: 'text', placeholder: 'John Doe' },
  { id: 'email', label: 'And your email address?', type: 'email', placeholder: 'john.doe@example.com' },
  { id: 'storeUrl', label: "What's your Amazon Storefront or Company URL?", type: 'url', placeholder: 'https://amazon.com/shops/your-store' },
  { id: 'revenue', label: "What's your approximate annual revenue on Amazon?", type: 'select', options: ['Select a range', '<$1M', '$1M - $5M', '$5M - $10M', '$10M - $25M', '$25M+'] },
  { id: 'challenge', label: "What are you hoping to achieve from joining the GOTA. community?", type: 'textarea', placeholder: "e.g., Scaling advertising, supply chain, team building..." },
];

const initialFormData = questions.reduce((acc, q) => ({ ...acc, [q.id]: '' }), {});

const ApplicationForm: React.FC<{ isOpen: boolean; onClose: () => void; onSuccess: () => void; }> = ({ isOpen, onClose, onSuccess }) => {
  const [currentStep, setCurrentStep] = useState(0); // 0: welcome, 1-n: questions, n+1: thanks
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
    // Reset form state after transition
    setTimeout(() => {
        setCurrentStep(0);
        setFormData(initialFormData);
        setError('');
        setIsSubmitting(false);
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleNext = () => {
    if (currentStep > 0) {
      const currentQuestion = questions[currentStep - 1];
      if (!formData[currentQuestion.id]) {
        setError('Please fill this in.');
        return;
      }
    }
    setError('');
    setCurrentStep(prev => prev + 1);
  };
  
  const handleBack = () => {
    setError('');
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const lastQuestion = questions[questions.length - 1];
    if (!formData[lastQuestion.id]) {
      setError('Please fill this in.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // This form is configured to send submissions to Formspree.
    // To receive submissions in your email:
    // 1. Create a new form on https://formspree.io/
    // 2. Copy your form's endpoint URL.
    // 3. Replace the `FORM_ENDPOINT` value below with your own URL.
    // NOTE: The current URL is a public test endpoint. Submissions will succeed but will not be emailed to you.
    const FORM_ENDPOINT = 'https://formspree.io/f/xkgpdpnk';

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed. Please try again.');
      }
      
      onSuccess();
      setCurrentStep(prev => prev + 1); // Move to thank you screen
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setError(`Sorry, there was an issue submitting your application. ${message}`);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  const progress = currentStep > 0 && currentStep <= questions.length ? ((currentStep -1) / questions.length) * 100 : (currentStep > questions.length ? 100 : 0)

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-opacity duration-300" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl bg-black border border-gray-800 rounded-2xl shadow-2xl text-white transform transition-all duration-300 scale-100">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10" aria-label="Close form">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <div className="p-8 md:p-12">
            <div className="h-1 bg-gray-800 rounded-full mb-8">
                <div className="h-1 bg-[#428037] rounded-full transition-all duration-500" style={{width: `${progress}%`}}></div>
            </div>

            <div className="min-h-[250px] flex flex-col justify-center">
              {currentStep === 0 && (
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Join the GOTA Community</h2>
                  <p className="text-gray-400 mb-8">Complete a short application to get access.</p>
                  <button onClick={handleNext} className="bg-white text-black font-extrabold py-3 px-8 rounded-none">Start Application</button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {questions.map((q, index) => (
                    <div key={q.id} className={`${currentStep === index + 1 ? 'block' : 'hidden'}`}>
                        <label htmlFor={q.id} className="text-2xl md:text-3xl font-bold mb-6 block">{q.label}</label>
                        {q.type === 'text' || q.type === 'email' || q.type === 'url' ? (
                            <input type={q.type} id={q.id} name={q.id} value={formData[q.id]} onChange={handleInputChange} placeholder={q.placeholder} className="w-full bg-transparent border-b-2 border-gray-700 focus:border-[#428037] text-xl py-2 focus:outline-none transition-colors" required />
                        ) : q.type === 'select' ? (
                            <select id={q.id} name={q.id} value={formData[q.id]} onChange={handleInputChange} className="w-full bg-gray-900 border-2 border-gray-700 focus:border-[#428037] text-xl py-3 px-2 focus:outline-none rounded-md" required>
                                {q.options.map(opt => <option key={opt} value={opt === q.options[0] ? '' : opt} disabled={opt === q.options[0]}>{opt}</option>)}
                            </select>
                        ) : (
                             <textarea id={q.id} name={q.id} value={formData[q.id]} onChange={handleInputChange} placeholder={q.placeholder} className="w-full bg-gray-900 border-2 border-gray-700 focus:border-[#428037] text-xl py-2 px-2 focus:outline-none rounded-md transition-colors h-32" required />
                        )}
                        {error && currentStep === index + 1 && <p className="text-red-500 mt-2 text-sm">{error}</p>}
                    </div>
                ))}
              </form>

              {currentStep > questions.length && (
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Thank you!</h2>
                    <p className="text-gray-400 mb-8">Your application has been received. We'll review it and get back to you shortly.</p>
                    <button onClick={handleClose} className="bg-white text-black font-extrabold py-3 px-8 rounded-none">Close</button>
                  </div>
              )}
            </div>
            
            {currentStep > 0 && currentStep <= questions.length && (
                <div className="flex items-center justify-between mt-8">
                    <button onClick={handleBack} className="text-gray-400 hover:text-white transition-colors disabled:opacity-50" disabled={currentStep === 1 || isSubmitting}>Back</button>
                    <button onClick={currentStep === questions.length ? handleSubmit : handleNext} className="bg-white text-black font-extrabold py-3 px-8 rounded-none transition-colors duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : (currentStep === questions.length ? 'Submit' : 'Next')}
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;