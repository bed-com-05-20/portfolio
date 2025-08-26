"use client";

const Services = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Our Services</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            We provide top-notch digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div
          id="services"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Service 1 */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: "url('/web.jpg')" }}
            ></div>
            <div className="p-6 text-center">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                We do
              </span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Website Design & Development
              </h3>
              <button className="text-blue-400 hover:text-blue-300 font-medium">
                Read More →
              </button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: "url('/customise.jpg')" }}
            ></div>
            <div className="p-6 text-center">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                We do
              </span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Custom Software Development
              </h3>
              <button className="text-blue-400 hover:text-blue-300 font-medium">
                Read More →
              </button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: "url('/design1.jpg')" }}
            ></div>
            <div className="p-6 text-center">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                We do
              </span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Graphics Designing
              </h3>
              <button className="text-blue-400 hover:text-blue-300 font-medium">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
