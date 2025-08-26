"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const Footer = ({ scrollToSection }) => {
  const handleQuickLinkClick = (section) => {
    if (scrollToSection && typeof scrollToSection === 'function') {
      scrollToSection(section.toLowerCase());
    }
  };

  return (
    <footer id="contact" className="py-16 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-gray-800">
                <span className="text-xl font-bold text-blue-500">S</span>
              </div>
              <span className="text-2xl font-bold text-white">SKYTEC</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed max-w-md">
              Transforming ideas into innovative digital solutions. We specialize in custom software development, 
              web design, and cutting-edge technology services for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              {['home', 'services', 'about', 'pricing', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleQuickLinkClick(section)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-lg capitalize text-left"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-5">
              <div className="flex items-start">
                <Phone className="mt-1 mr-4 h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-medium">Phone</p>
                  <p className="text-gray-300">+265 990 012 621</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mt-1 mr-4 h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-medium">Email</p>
                  <p className="text-gray-300">skytec@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mt-1 mr-4 h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-medium">Location</p>
                  <p className="text-gray-300">Mponela, Malawi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-400 text-lg">
              © {new Date().getFullYear()} SKYTEC Technologies. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 bg-gray-800 px-6 py-3 rounded-lg">
            <span className="text-gray-300 text-sm">🚀 Premium Quality</span>
            <span className="text-gray-300 text-sm">⭐ 24/7 Support</span>
            <span className="text-gray-300 text-sm">💼 Enterprise Grade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;