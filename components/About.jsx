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
          
          {/* Left side */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who We Are</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">Turning Ideas Into Reality</h3>
            <p className="text-xl text-gray-400 mb-6">
              At <span className="text-white font-semibold">SKYTEC</span>, we are passionate about building
              innovative solutions that empower businesses and individuals in today’s digital world.
              Our expertise spans responsive websites, mobile apps, custom software, and seamless UI/UX designs.
            </p>
            <p className="text-xl text-gray-400 mb-10">
              Beyond development, we provide expert consultancy, business transformation strategies, and 
              reliable customer support—helping our clients achieve long-term growth and success.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors">
              Contact Us →
            </button>
          </div>

          {/* Right side */}
          <div className="md:w-1/2">
            <div
              className={`p-8 rounded-xl bg-gray-800 transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 mb-8">
                To deliver innovative, scalable, and reliable digital solutions that 
                enable businesses and individuals to thrive in an ever-changing technological landscape.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 mb-8">
                To become Africa’s most trusted technology partner, driving digital transformation and 
                inspiring innovation that impacts lives globally.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-400">
                Innovation, reliability, integrity, and customer-centricity guide everything we do. 
                We believe technology should not just solve problems—it should create opportunities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
