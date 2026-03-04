"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectIdea: '',
    projectDescription: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call or form processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      // Show success toast
      toast.success('Thank you for your message! We will get back to you soon.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#10B981',
          color: '#fff',
        }
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectIdea: '',
        projectDescription: ''
      });
    } catch (error) {
      // Show error toast
      toast.error('Something went wrong. Please try again.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#EF4444',
          color: '#fff',
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
    {/* <div className="min-h-screen bg-gray-900 text-white py-16"> */}
      {/* Toast Container */}
      <Toaster />
      
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch with us</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you have a question about our services, need assistance, or just want to say hello, 
            feel free to reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              {/* Email */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-8 bg-blue-500 mr-4"></div>
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <div className="flex items-center text-gray-400 ml-9">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>info@skytec.mw</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-700 mb-8"></div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-8 bg-blue-500 mr-4"></div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                </div>
                <div className="flex items-center text-gray-400 ml-9">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>+265 990 126 21</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-700 mb-8"></div>

              {/* Location */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-1 h-8 bg-blue-500 mr-4"></div>
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <div className="flex items-center text-gray-400 ml-9">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <span>Malawi, Dowa, Mponela</span>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Quick Response Time</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Expert Consultation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Customized Solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Tell us your Project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-400 mb-2">Your phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="projectIdea" className="block text-gray-400 mb-2">Your project idea</label>
                  <input
                    type="text"
                    id="projectIdea"
                    name="projectIdea"
                    value={formData.projectIdea}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-gray-400 mb-2">Project description</label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Submit
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Additional Features */}
            <div className="mt-8 bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-gray-400 text-sm">We review your project requirements</p>
                </div>
                <div className="p-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-gray-400 text-sm">Our team contacts you within 24 hours</p>
                </div>
                <div className="p-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-gray-400 text-sm">We provide a customized solution and quote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    </section>
  );
};

export default Contact;