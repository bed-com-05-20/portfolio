"use client";

import { useEffect, useState } from 'react';

const About = ({ setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
          setActiveSection('about');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who we're?</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">Turning ideas into reality.</h3>
            <p className="text-xl text-gray-400 mb-6">
              Our experts specialize in graphic design, responsive websites, user-friendly mobile apps, 
              custom software solutions, seamless UI/UX designs, and expert consultancy. We also provide 
              business transformation services and robust customer support systems to help your business thrive.
            </p>
            <p className="text-xl text-gray-400 mb-10">
              At SKYTEC, our mission is to empower businesses and individuals with cutting-edge digital solutions.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors">
              Contact Us →
            </button>
          </div>

          <div className="md:w-1/2">
            <div className={`p-8 rounded-xl bg-gray-800 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 mb-8">
                To empower businesses and individuals with cutting-edge digital solutions that drive growth and innovation.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400">
                Our vision is to be a leading provider of innovative and user-centric digital solutions, 
                setting new industry standards for excellence, creativity, and technological advancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;