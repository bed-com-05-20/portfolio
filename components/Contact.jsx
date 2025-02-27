"use client";

import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent! (This is a demo)');
        setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
        });
  };
  

  return (
    <section id="contact" className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className={`section-title transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ color: 'rgb(var(--primary-color))' }}>LET'S WORK TOGETHER</h2>
        <p className={`mb-12 max-w-2xl text-xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>
        
        <div className="flex flex-col gap-12 md:flex-row">
          <div className={`md:w-2/3 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <form onSubmit={handleSubmit} className="contact-form rounded-lg bg-white bg-opacity-20 p-8 shadow-lg">
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <select 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="programming-lessons">Programming Lessons</option>
                </select>
              </div>
              
              <div className="mb-6">
                <textarea 
                  name="message" 
                  rows={6} 
                  placeholder="Type your Message here."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
          
          <div className={`md:w-1/3 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <div className="space-y-12">
              <div>
                <h3 className="mb-4 text-2xl font-bold">phone</h3>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" style={{ color: 'rgb(var(--primary-color))' }} />
                  <span className="text-xl">(+265) 0990 012 621</span>
                </div>
              </div>
              
              <div>
                <h3 className="mb-4 text-2xl font-bold">email</h3>
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" style={{ color: 'rgb(var(--primary-color))' }} />
                  <span className="text-xl">chisalerodgers9@gmail.com</span>
                </div>
              </div>
              
              <div>
                <h3 className="mb-4 text-2xl font-bold">address</h3>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" style={{ color: 'rgb(var(--primary-color))' }} />
                  <span className="text-xl">Mponela, Iowa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;