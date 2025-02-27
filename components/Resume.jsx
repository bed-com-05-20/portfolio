"use client";

import { useEffect, useState } from 'react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('resume');
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

  const experiences = [
    {
      id: 1,
      date: '2021 - present',
      title: 'Full stack Developer',
      company: 'RodgerTech'
    },
    {
      id: 2,
      date: '2021 - present',
      title: 'Front-end Developer Intern',
      company: 'RodgerTech'
    }
  ];

  const education = [
    {
      id: 1,
      date: '2018 - 2022',
      title: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology'
    },
    {
      id: 2,
      date: '2016 - 2018',
      title: 'High School Diploma',
      institution: 'Central High School'
    }
  ];

  const skills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 
    'Next.js', 'Tailwind CSS', 'MongoDB', 'SQL', 'Git', 
    'UI/UX Design', 'Responsive Design'
  ];

  return (
    <section id="resume" className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="mb-12 md:mb-0 md:w-1/3">
            <h2 className={`section-title transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ color: 'rgb(var(--primary-color))' }}>WHY HIRE ME?</h2>
            <p className={`mb-12 text-xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              I'm good at creating the best websites and am proficient in various programming languages and technologies.
            </p>
            
            <div className="space-y-4">
              <button 
                className={`w-full rounded-lg py-3 text-left text-xl font-bold transition-all duration-300 ${activeTab === 'experience' ? 'bg-primary-color text-white' : 'bg-transparent'}`}
                style={{ backgroundColor: activeTab === 'experience' ? 'rgb(var(--primary-color))' : 'transparent' }}
                onClick={() => setActiveTab('experience')}
              >
                My Experience
              </button>
              
              <button 
                className={`w-full rounded-lg py-3 text-left text-xl font-bold transition-all duration-300 ${activeTab === 'education' ? 'bg-primary-color text-white' : 'bg-transparent'}`}
                style={{ backgroundColor: activeTab === 'education' ? 'rgb(var(--primary-color))' : 'transparent' }}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              
              <button 
                className={`w-full rounded-lg py-3 text-left text-xl font-bold transition-all duration-300 ${activeTab === 'skills' ? 'bg-primary-color text-white' : 'bg-transparent'}`}
                style={{ backgroundColor: activeTab === 'skills' ? 'rgb(var(--primary-color))' : 'transparent' }}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
              
              <button 
                className={`w-full rounded-lg py-3 text-left text-xl font-bold transition-all duration-300 ${activeTab === 'about' ? 'bg-primary-color text-white' : 'bg-transparent'}`}
                style={{ backgroundColor: activeTab === 'about' ? 'rgb(var(--primary-color))' : 'transparent' }}
                onClick={() => setActiveTab('about')}
              >
                About me
              </button>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className={`section-subtitle mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              My Experience
            </h2>
            
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="experience-card">
                      <p className="experience-date">{exp.date}</p>
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'education' && (
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.id} className="experience-card">
                      <p className="experience-date">{edu.date}</p>
                      <h3 className="experience-title">{edu.title}</h3>
                      <p className="experience-company">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'skills' && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="rounded-lg bg-primary-color bg-opacity-80 p-4 text-center text-white">
                      {skill}
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'about' && (
                <div className="rounded-lg bg-primary-color bg-opacity-80 p-6 text-white">
                  <p className="mb-4 text-lg">
                    I am a passionate software developer with a strong focus on creating beautiful, functional websites and applications. 
                    With 4 years of experience in the field, I've developed a deep understanding of modern web technologies and best practices.
                  </p>
                  <p className="mb-4 text-lg">
                    My approach combines technical expertise with creative problem-solving to deliver solutions that not only work flawlessly but also provide an exceptional user experience.
                  </p>
                  <p className="text-lg">
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge with the developer community.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;