"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-95 py-3 shadow-md' : 'bg-opacity-0 py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center">
          {/* Rounded logo with text */}
          <div className="flex items-center">
            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-800 p-1">
              <Image 
                src="/logo.png" 
                alt="skytec Logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="hidden space-x-8 md:flex">
          {['home', 'services', 'resume', 'work', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`uppercase font-medium transition-colors ${activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
            >
              {section}
            </button>
          ))}
        </div>
        
        <button 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors"
          onClick={() => scrollToSection('contact')}
        >
          HIRE ME
        </button>
      </div>
    </nav>
  );
};

export default Navbar;