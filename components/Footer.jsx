"use client";

import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const quickLinks = ['home', 'services', 'about', 'pricing', 'contact'];

  return (
    <footer className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo + social */}
          <div>
            <div className="flex items-center mb-6">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-800 p-1">
                <span className="text-xl font-bold text-blue-400">SKYTEC</span>
              </div>
              <span className="text-xl font-bold text-white">SKYTEC</span>
            </div>
            <p className="text-gray-400 mb-6">
              Expert software solutions for your business. We help transform your ideas into reality with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)} 
                    className="text-gray-400 hover:text-blue-400 transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Graphic Design', 'Software Solutions'].map((service) => (
                <li key={service} className="text-gray-400 hover:text-blue-400 transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+265(0) 990 0126 21</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-gray-400">skytec@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Mponela, Dowa, Malawi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} SKYTEC Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
