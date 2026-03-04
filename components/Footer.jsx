"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const Footer = ({ scrollToSection }) => {
  const handleQuickLinkClick = (section) => {
    if (scrollToSection && typeof scrollToSection === "function") {
      scrollToSection(section.toLowerCase());
    }
  };

  return (
    // <footer id="contact" className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500 bg-gray-900">
                <span className="text-xl font-bold text-blue-500">S</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">
                SKYTEC Technologies
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              We deliver innovative technology solutions that empower businesses
              and individuals to grow in the digital era.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Projects"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleQuickLinkClick(item)}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-blue-500" />
                <span>Lilongwe, Malawi</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-blue-500" />
                <span>+265 990 126 21</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-blue-500" />
                <span>info@skytec.mw</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Section */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SKYTEC Technologies. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <button className="hover:text-blue-500 transition">
              Privacy Policy
            </button>
            <button className="hover:text-blue-500 transition">
              Terms of Service
            </button>
          </div>
        </div> */}

      </div>
    // </footer>
  );
};

export default Footer;