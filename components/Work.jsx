"use client";

import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('work');
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

  const projects = [
    {
      id: '01',
      title: 'Front-end Project',
      description: "I'm proficient in various programming languages and technologies.",
      technologies: 'React.js, CSS',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      github: 'https://github.com/bed-com-05-20'
    },
    {
      id: '02',
      title: 'E-commerce Website',
      description: "A fully functional online store with payment integration.",
      technologies: 'Next.js, Tailwind CSS, Stripe',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      github: 'https://github.com/bed-com-05-20'
    }
  ];

  return (
    <section id="work" className="min-h-screen py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col items-center gap-12 transition-all duration-1000 md:flex-row ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">{project.id}</h3>
                <h4 className="text-3xl font-bold text-white mb-4">{project.title}</h4>
                <p className="text-lg text-gray-400 mb-4">{project.description}</p>
                <p className="text-blue-400 mb-6">{project.technologies}</p>
                
                <div className="mb-8 h-px w-full bg-gray-700"></div>
                
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="mr-2 h-6 w-6" />
                  View on GitHub
                </a>
              </div>
              
              <div className="md:w-1/2">
                <div className="overflow-hidden rounded-lg shadow-xl border-2 border-gray-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;