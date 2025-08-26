"use client";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen text-white flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Expert of Software <br /> Solutions for <br /> your Business
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Welcome to SKYTEC Technologies, your best partner in technologies and
          digital success.
        </p>

        {/* Call to Action */}
        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition inline-block"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
