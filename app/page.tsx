"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80, // adjust offset for navbar
      behavior: "smooth",
    });
    setActiveSection(id);
  }
};



  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          scrollToSection={scrollToSection}
        />
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <About setActiveSection={setActiveSection} />
        <Pricing
          setActiveSection={setActiveSection}
          scrollToSection={scrollToSection}
        />
        <Contact />
        <Footer scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}
