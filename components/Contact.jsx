// "use client";

// import { useEffect, useState } from 'react';
// import { Phone, Mail, MapPin } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isSending, setIsSending] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   useEffect(() => {
//     emailjs.init('wKtKAke8HD0R46yu0'); 
    
//     const handleScroll = () => {
//       const element = document.getElementById('contact');
//       if (element) {
//         const position = element.getBoundingClientRect();
//         if (position.top < window.innerHeight - 100) {
//           setIsVisible(true);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSending(true);

//     try {
//       await emailjs.send(
//         'service_6q1ixvb', 
//         'template_8jpyyv8',
//         {
//           to_email: 'chisalerodgers9@gmail.com', // Your email address
//           from_name: `${formData.firstName} ${formData.lastName}`,
//           from_email: formData.email,
//           phone: formData.phone,
//           service: formData.service,
//           message: formData.message
//         }
//       );

//       alert('Message sent successfully!');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message. Please try again.');
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <section id="contact" className="min-h-screen py-24 bg-black">
//       <div className="mx-auto max-w-7xl px-6">
//         <h2 className={`text-4xl font-bold transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} text-blue-400`}>
//           LET'S WORK TOGETHER
//         </h2>
//         <p className={`mb-12 max-w-2xl text-xl text-gray-400 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
//            style={{ transitionDelay: '200ms' }}>
//           Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
//         </p>
        
//         <div className="flex flex-col gap-12 md:flex-row">
//           <div className={`md:w-2/3 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
//                style={{ transitionDelay: '400ms' }}>
//             <form onSubmit={handleSubmit} className="rounded-lg bg-gray-800 p-8 shadow-lg">
//               <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
//                 <div>
//                   <input 
//                     type="text" 
//                     name="firstName" 
//                     placeholder="First Name" 
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input 
//                     type="text" 
//                     name="lastName" 
//                     placeholder="Last Name" 
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//               </div>
              
//               <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
//                 <div>
//                   <input 
//                     type="email" 
//                     name="email" 
//                     placeholder="Email Address" 
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input 
//                     type="tel" 
//                     name="phone" 
//                     placeholder="Phone Number" 
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//               </div>
              
//               <div className="mb-6">
//                 <select 
//                   name="service" 
//                   value={formData.service}
//                   onChange={handleChange}
//                   className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required
//                 >
//                   <option value="" className="text-gray-400">Select a Service</option>
//                   <option value="web-development" className="text-white">Web Development</option>
//                   <option value="ui-ux-design" className="text-white">UI/UX Design</option>
//                   <option value="mobile-app" className="text-white">Mobile App Development</option>
//                   <option value="programming-lessons" className="text-white">Programming Lessons</option>
//                 </select>
//               </div>
              
//               <div className="mb-6">
//                 <textarea 
//                   name="message" 
//                   rows={6} 
//                   placeholder="Type your Message here."
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required
//                 ></textarea>
//               </div>
              
//               <div className="text-center">
//                 <button 
//                   type="submit" 
//                   className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50"
//                   disabled={isSending}
//                 >
//                   {isSending ? 'Sending...' : 'Send message'}
//                 </button>
//               </div>
//             </form>
//           </div>
          
//           <div className={`md:w-1/3 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
//                style={{ transitionDelay: '600ms' }}>
//             <div className="space-y-12">
//               <div>
//                 <h3 className="mb-4 text-2xl font-bold text-white">phone</h3>
//                 <div className="flex items-center">
//                   <Phone className="mr-2 h-5 w-5 text-blue-400" />
//                   <span className="text-xl text-gray-300">+265(0) 990 0126 21</span>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="mb-4 text-2xl font-bold text-white">email</h3>
//                 <div className="flex items-center">
//                   <Mail className="mr-2 h-5 w-5 text-blue-400" />
//                   <span className="text-xl text-gray-300">chisalerodgers9@gmail.com</span>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="mb-4 text-2xl font-bold text-white">address</h3>
//                 <div className="flex items-center">
//                   <MapPin className="mr-2 h-5 w-5 text-blue-400" />
//                   <span className="text-xl text-gray-300">Mponela, Dowa, Malawi</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("wKtKAke8HD0R46yu0");

    const handleScroll = () => {
      const element = document.getElementById("contact");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);
    setStatusType(null);

    try {
      await emailjs.send("service_6q1ixvb", "template_8jpyyv8", {
        to_email: "chisalerodgers9@gmail.com",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      });

      setStatusType("success");
      setStatusMessage("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusType("error");
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className={`text-4xl font-bold transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          } text-blue-400`}
        >
          LET&apos;S WORK TOGETHER
        </h2>
        <p
          className={`mb-12 max-w-2xl text-xl text-gray-400 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Have a project in mind? Let&apos;s discuss how we can work together to
          bring your ideas to life.
        </p>

        <div className="flex flex-col gap-12 md:flex-row">
          <div
            className={`md:w-2/3 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-lg bg-gray-800 p-8 shadow-lg"
            >
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="mb-6">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="" className="text-gray-400">
                    Select a Service
                  </option>
                  <option value="web-development" className="text-white">
                    Web Development
                  </option>
                  <option value="ui-ux-design" className="text-white">
                    UI/UX Design
                  </option>
                  <option value="mobile-app" className="text-white">
                    Mobile App Development
                  </option>
                  <option value="programming-lessons" className="text-white">
                    Programming Lessons
                  </option>
                </select>
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Type your Message here."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                ></textarea>
              </div>

              {statusMessage && (
                <div
                  className={`mb-4 p-3 rounded ${
                    statusType === "success"
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>

          <div
            className={`md:w-1/3 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="space-y-12">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-white">phone</h3>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-blue-400" />
                  <span className="text-xl text-gray-300">
                    +265(0) 990 0126 21
                  </span>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold text-white">email</h3>
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-blue-400" />
                  <span className="text-xl text-gray-300">
                    chisalerodgers9@gmail.com
                  </span>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold text-white">address</h3>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-400" />
                  <span className="text-xl text-gray-300">
                    Mponela, Dowa, Malawi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
