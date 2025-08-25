"use client";

const Services = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">We do</h2>
        </div>

        {/* Services Grid */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 - Website design and development */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Image placeholder - Replace with your actual image */}
            <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Website Design Image</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Website design and development</h3>
              <div className="flex justify-between items-center">
                <span className="text-blue-400 font-semibold">We do</span>
                <button className="text-blue-400 hover:text-blue-300 font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Service 2 - Custom Software Development */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Image placeholder - Replace with your actual image */}
            <div className="h-48 bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Software Development Image</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-blue-400 font-semibold block mb-2">We do</span>
                <strong>Custom Software Development</strong>
              </h3>
              <div className="flex justify-end">
                <button className="text-blue-400 hover:text-blue-300 font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Service 3 - Graphics Designing */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Image placeholder - Replace with your actual image */}
            <div className="h-48 bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Graphics Design Image</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-blue-400 font-semibold block mb-2">We do</span>
                <strong>Graphics Designing</strong>
              </h3>
              <div className="flex justify-end">
                <button className="text-blue-400 hover:text-blue-300 font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;