"use client";

import { useEffect, useState } from "react";

const Pricing = ({ setActiveSection, scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("pricing");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
          setActiveSection && setActiveSection("pricing");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection && setActiveSection("contact");
    }
  };

  const plans = [
    {
      name: "Startup Website",
      price: "$150",
      pages: "1-5 pages",
      features: [
        "Domain Name",
        "Responsive Website",
        "Contact form",
        "Free 1yr Hosting",
        "Custom Emails",
        "AI chatbot",
      ],
      buttonText: "Choose Startup Plan",
    },
    {
      name: "Standard Website",
      price: "$250-300",
      pages: "5-10 pages",
      features: [
        "Domain Name",
        "Responsive Website",
        "Contact form",
        "Free 1yr Hosting",
        "Business Emails",
        "AI Chatbot",
      ],
      buttonText: "Choose Standard Plan",
    },
    {
      name: "Professional Website",
      price: "$400-1000",
      pages: "10-15 pages",
      features: [
        "Domain Name",
        "Responsive Website",
        "Contact form",
        "Free 1yr Hosting",
        "Business Emails",
      ],
      buttonText: "Choose Professional Plan",
    },
    {
      name: "Enterprise Website",
      price: "$900-3000",
      pages: "20-75 pages",
      features: [
        "Domain Name",
        "Responsive Website",
        "Contact form",
        "Free 1yr Hosting",
        "Custom Solutions",
        "Priority Support",
      ],
      buttonText: "Choose Enterprise Plan",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Website Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl bg-gray-900 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {plan.name}
              </h3>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {plan.price}
              </div>
              <div className="text-gray-400 mb-6">{plan.pages}</div>

              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-400 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition-colors"
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-xl text-gray-400 mb-6">
            Can't find what you're looking for? Let's chat!
          </p>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors mr-4"
            onClick={scrollToContact}
          >
            Chat
          </button>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors"
            onClick={scrollToContact}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;