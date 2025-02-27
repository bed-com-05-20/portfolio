"use client";

import { Download, Facebook, Twitter, Instagram, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h2 className="mb-4 text-3xl font-bold" style={{ color: 'rgb(var(--primary-color))' }}>SOFTWARE DEVELOPER</h2>
            <h1 className="mb-6 text-5xl font-bold">Hello! I'm</h1>
            <h1 className="mb-8 text-5xl font-bold italic" style={{ color: 'rgb(var(--secondary-color))' }}>RODGERS CHISALE,</h1>
            <p className="mb-10 max-w-xl text-xl">
              I'm good at creating the best websites and am proficient in various programming languages and technologies.
            </p>
            
            <div className="mb-8 flex">
              <a href="/resume.pdf" className="download-btn mr-6">
                <Download className="mr-2 h-5 w-5" />
                DOWNLOAD CV
              </a>
              
              <div className="flex items-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Facebook style={{ color: 'rgb(var(--primary-color))' }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Twitter style={{ color: 'rgb(var(--primary-color))' }} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Instagram style={{ color: 'rgb(var(--primary-color))' }} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github style={{ color: 'rgb(var(--primary-color))' }} />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h3 className="stat-number">4</h3>
                <p className="stat-label">years of experience</p>
              </div>
              <div>
                <h3 className="stat-number">12</h3>
                <p className="stat-label">projects completed</p>
              </div>
              <div>
                <h3 className="stat-number">8</h3>
                <p className="stat-label">technology mastered</p>
              </div>
              <div>
                <h3 className="stat-number">700</h3>
                <p className="stat-label">code commits</p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative h-[450px] w-[450px] overflow-hidden rounded-full border-4 border-white shadow-xl">
              <img 
                src="/profile.jpg" 
                alt="Rodgers Chisale" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;