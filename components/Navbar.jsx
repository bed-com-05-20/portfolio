"use client";

import { useState, useEffect } from "react";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ["home", "services", "about", "products", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 bg-opacity-95 py-3 shadow-md"
          : "bg-opacity-0 py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO AREA */}
        <div className="flex items-center space-x-3">
          {/* Image logo (replace /logo.png with your image) */}
          <img
            src="/logo.png"
            alt="Skytec Logo"
            className="h-10 w-10 rounded-full border-2 border-blue-400 object-cover"
          />

          {/* Text branding */}
          <span className="text-xl font-bold text-white">SKYTEC</span>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex space-x-8">
          {["home", "services", "about", "products", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`uppercase font-medium transition-colors ${
                activeSection === section
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-blue-400 transition-colors">
            Login
          </button>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
