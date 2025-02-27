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
    <section id="services" className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className={`section-title transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ color: 'rgb(var(--primary-color))' }}>SERVICES</h2>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="service-number" style={{ color: 'rgb(var(--primary-color))' }}>{service.id}</h3>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
              <div className="flex items-center">
                <ArrowRight className="h-6 w-6" style={{ color: 'rgb(var(--primary-color))' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;