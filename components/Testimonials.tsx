import React from 'react';
import type { Testimonial } from '../types';

// New testimonials data reflecting the user's request for two cards.
const testimonialsData: Testimonial[] = [
  {
    quote: "GOTA has revolutionized my strategic process. The private sessions are intuitive and save me so much time!",
    name: "Jillie Bernard",
    role: "Founder & CEO",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
  },
  {
    quote: "The best operator community I've joined. The playbooks are a game-changer for Amazon sellers.",
    name: "David Miller",
    role: "Head of E-commerce",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  }
];

// Star icon component to display ratings.
const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.134-.662 1.456 0l1.861 3.843 4.247.617c.732.107 1.023.998.494 1.513l-3.073 2.994.725 4.23c.124.728-.638 1.283-1.29.944l-3.796-1.996-3.796 1.996c-.652.34-1.414-.216-1.29-.944l.725-4.23-3.073-2.994c-.529-.515-.238-1.406.494-1.513l4.247-.617 1.86-3.843z" clipRule="evenodd" />
    </svg>
);

// Updated TestimonialCard to match the new design.
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-[#1C1C1E] p-8 border border-gray-800/50 rounded-2xl flex flex-col h-full space-y-6">
    <div className="flex items-center space-x-4">
      <img className="h-14 w-14 rounded-full object-cover" src={testimonial.avatarUrl} alt={`Portrait of ${testimonial.name}`} />
      <div className="flex">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-white" />
        ))}
      </div>
    </div>
    <p className="text-gray-300 text-lg flex-grow">{testimonial.quote}</p>
    <div>
        <div className="text-lg font-bold text-white">{testimonial.name}</div>
        <div className="text-base text-gray-400">{testimonial.role}</div>
    </div>
  </div>
);

// Main Testimonials component with updated text and layout.
const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Customers Say</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Hear from our incredible customers who are building at lightning speed.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;