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

        {/* Main Content Container with Shadow */}
        <section className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-10 bg-white rounded-3xl shadow-sm border border-gray-100">
          {/* Main Content Grid - Responsive layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            
            {/* Left Side - Contact Image - Responsive sizing */}
            <div className={`flex items-center justify-center lg:justify-start transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <img
                src="/cont.svg"
                alt="Contact illustration"
                className="max-w-full h-auto w-64 sm:w-80 lg:w-full"
              />
            </div>

            {/* Right Side - Contact Form - Responsive spacing and sizing */}
            <div className={`space-y-4 lg:space-y-6 w-full transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`} style={{ transitionDelay: '350ms' }}>
              
              {/* Name Fields - Responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your First Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your Last Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* Email Field - Responsive sizing */}
              <div>
                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                />
              </div>

              {/* Phone Field - Responsive layout */}
              <div>
                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Phone</label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select className="px-4 py-3 pr-10 border border-gray-300 rounded-full bg-white text-sm lg:text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[120px] appearance-none transition-all duration-300">
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
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
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
                        px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base transition-all duration-300 hover:scale-105
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300 text-sm lg:text-base"
                ></textarea>
              </div>

              {/* Submit Button and Social Icons - Responsive layout */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg text-base font-medium group w-full sm:w-auto">
                  {/* White gradient overlay on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>

                  <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                    Send Message 
                    <img src="/arrow3.svg" alt="send" className="w-4 h-4" />
                  </span>
                </button>

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
        </section>
      </div>
    </section>
  );
};

export default ContactSection;