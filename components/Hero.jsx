"use client";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white"
    >
      {/* Hero Section - Navigation removed since it's already in the main page */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center pt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Expert Software
          <br />
          Solutions for
          <br />
          your Business
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Welcome to Xhed Technologies, your partner in digital success.
        </p>

        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-500 transition-colors text-lg font-medium">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
