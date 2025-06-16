"use client";

import { Download, Facebook, Twitter, Instagram, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h1 className="mb-6 text-5xl font-bold text-white">Hello! I'm</h1>
            <h1 className="mb-8 text-5xl font-bold italic text-blue-400">RODGERS CHISALE,</h1>
            <p className="mb-10 max-w-xl text-xl text-gray-400">
              I'm a web Designer with extensive experience for over 3 years, expertise is to create and website design, Frontend design, and many more....
            </p>
            
            <div className="mb-8 flex items-center">
              <a 
                href="/resume.pdf" 
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium"
              >
                <Download className="mr-2 h-4 w-4" />
                DOWNLOAD CV
              </a>
              
              <div className="flex items-center space-x-4 ml-6">
                <a href="https://web.facebook.com/rodgers.chisale.5688" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://x.com/Fwafaxa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/rodgerchisale/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://github.com/bed-com-05-20" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative h-[450px] w-[450px] overflow-hidden rounded-full border-4 border-gray-800 shadow-xl">
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