"use client";

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      id: '01',
      title: 'Web Development',
      description: "I'm good at creating the best websites using different technologies."
    },
    {
      id: '02',
      title: 'UI/UX Design',
      description: "I create most Proficiency UI/UX design that are easy to understand"
    },
    {
      id: '03',
      title: 'Mobile App Development',
      description: "I create most Proficiency UI/UX design that are easy to understand"
    },
    {
      id: '04',
      title: 'Programming Lessons',
      description: "I create most Proficiency UI/UX design that are easy to understand"
    }
  ];

  return (
    <section id="services" className="min-h-screen py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
  
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`p-8 rounded-xl bg-gray-900 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-2xl font-bold text-blue-400">{service.id}</span>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors">
                  <ArrowRight className="h-5 w-5 text-white" />
                </button>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <button className="text-blue-400 hover:text-blue-300 flex items-center transition-colors">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;