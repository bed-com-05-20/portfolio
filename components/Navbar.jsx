"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CircuitBoard } from 'lucide-react';

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
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-95 py-3 shadow-md' : 'bg-opacity-0 py-5'}`} style={{ backgroundColor: scrolled ? 'rgb(var(--background-color))' : 'transparent' }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center">
          <CircuitBoard className="mr-2 h-10 w-10" style={{ color: 'rgb(var(--primary-color))' }} />
          <span className="text-2xl font-bold" style={{ color: 'rgb(var(--primary-color))' }}>RodgerTech</span>
        </div>
        <div className="hidden space-x-8 md:flex">
          {['home', 'services', 'resume', 'work', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              style={{ color: activeSection === section ? 'rgb(var(--secondary-color))' : 'rgb(var(--primary-color))' }}
            >
              {section.toUpperCase()}
            </button>
          ))}
        </div>
        <button 
          className="hire-me-btn"
          onClick={() => scrollToSection('contact')}
        >
          HIRE ME
        </button>
      </div>
    </nav>
  );
};

export default Navbar;