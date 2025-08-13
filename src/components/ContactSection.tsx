import React, { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // State to track the selected project type
  const [selectedProject, setSelectedProject] = useState('Web Development');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally disconnect observer after first trigger
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '-50px 0px', // Start animation 50px before the element comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // An array to hold the project types for easy mapping
  const projectTypes = ['Web Development', 'Mobile App', 'AI Integration'];

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 bg-white mb-12 sm:mb-18 lg:mb-24">
      <div className="w-full">
        {/* Header Section - Slides from Left with responsive spacing */}
        <div className={`mb-6 sm:mb-8 lg:mb-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
        }`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">Contact us</h2>
          <p className="text-gray-500 text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed">
            Have a project in mind or just want to chat? We'd love to hear from you. Reach out and let's make it happen!
          </p>
        </div>

        {/* Main Content Container with Shadow - Single Symmetric Div */}
        <div className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-10 bg-white rounded-3xl shadow-sm border border-gray-100">
          
          {/* Symmetric Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[500px] lg:min-h-[600px]">
            
            {/* Left Side - Contact Image */}
            <div className={`flex items-center justify-center h-full transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl flex items-center justify-center">
                <img
                  src="/cont.svg"
                  alt="Contact illustration"
                  className="max-w-full h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className={`h-full flex flex-col justify-center space-y-4 lg:space-y-6 w-full transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`} style={{ transitionDelay: '350ms' }}>
              
              {/* Name Fields - Responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your First Name" 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your Last Name" 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* Email Field - Responsive sizing */}
              <div>
                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                />
              </div>

              {/* Phone Field - Responsive layout */}
              <div>
                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Phone</label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select className="px-4 py-2.5 pr-10 border border-gray-300 rounded-full bg-white text-sm lg:text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[120px] appearance-none transition-all duration-300">
                      <option>+92 (PAK)</option>
                    </select>
                    <img 
                      src="/drop.svg" 
                      alt="dropdown" 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                    />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* Project Type - Responsive buttons */}
              <div>
                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Tell us about your project</label>
                <div className="flex flex-wrap gap-2 lg:gap-3 mb-4">
                  {projectTypes.map((project) => (
                    <button
                      key={project}
                      onClick={() => setSelectedProject(project)}
                      className={`
                        px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-sm lg:text-base transition-all duration-300 hover:scale-105
                        ${selectedProject === project
                          ? 'bg-purple-100 text-purple-600 border border-purple-500 font-semibold'
                          : 'border border-gray-300 text-gray-600 hover:bg-purple-100 hover:text-purple-600 hover:border-purple-500'
                        }
                      `}
                    >
                      {project}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Field - Responsive sizing */}
              <div>
                <textarea 
                  placeholder="Enter message"
                  rows={1}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300 text-sm lg:text-base"
                ></textarea>
              </div>

              {/* Submit Button and Social Icons - Responsive layout */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <img 
                  src="/sendmessage.svg" 
                  alt="Send Message" 
                  className="cursor-pointer hover:scale-105 transition-all duration-300 hover:opacity-80 w-full sm:w-auto max-w-[200px] h-auto"
                  onClick={() => {
                    // Handle send message click
                    console.log('Send message clicked');
                  }}
                />

                {/* Social Icons - Responsive sizing */}
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-110">
                    <img src="/twitter.svg" alt="Twitter" className="w-8 h-8" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-110">
                    <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-110">
                    <img src="/discord.svg" alt="Discord" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;