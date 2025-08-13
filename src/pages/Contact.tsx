import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const headerRef = useRef(null);
  const formSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    // Observer for the header
    const headerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsHeaderVisible(true);
        headerObserver.disconnect();
      }
    }, observerOptions);

    // Observer for the form section
    const formObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsFormVisible(true);
        formObserver.disconnect();
      }
    }, observerOptions);

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }
    
    if (formSectionRef.current) {
      formObserver.observe(formSectionRef.current);
    }

    return () => {
      headerObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  // Project types for easy mapping
  const projectTypes = ['Web Development', 'Mobile App', 'AI Integration'];
  const [selectedProject, setSelectedProject] = useState('Web Development');

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Background Image - UNCHANGED */}
       <div className="mt-1 sm:mt-2 lg:mt-4 px-2 sm:px-4 lg:px-6">
          <div
            className="rounded-3xl overflow-hidden bg-white"
            style={{
              backgroundImage: "url(/bg.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <section className="pt-6 sm:pt-8 lg:pt-12 pb-4 sm:pb-6 lg:pb-8">
              <div
                className={`mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-6 transform transition-all duration-700 ease-out ${
                  isHeaderVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="w-full text-left">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 mt-2 sm:mt-6 lg:mt-9">
                    Contact Us
                  </h1>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed">
                   We craft bold digital solutions that drive growth. From concept to launch, solving real-world problems with precision and creativity.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

      {/* Main Contact Section - UPDATED to match ContactSection */}
      <section ref={formSectionRef} className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 bg-white">
        <div className="w-full">
          {/* Main Content Container - ADDED: Border around content like ContactSection */}
          <div className="border border-gray-200 rounded-3xl pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 px-8 sm:px-12 lg:px-16 bg-white">
            
            {/* Symmetric Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[500px] lg:min-h-[600px] -mt-12">
              
              {/* Left Side - Contact Image - UPDATED: Better positioning like ContactSection */}
              <div className={`flex items-center justify-start h-full transform transition-all duration-1000 ease-out ${
                isFormVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <img
                  src="/cont.svg"
                  alt="Contact illustration"
                  className="h-auto object-contain -ml-14"
                  style={{ maxHeight: '800px', width: 'auto' }}
                />
              </div>

              {/* Right Side - Contact Form - UPDATED: Increased vertical spacing like ContactSection */}
              <div className={`h-full flex flex-col justify-center space-y-6 lg:space-y-8 w-full transform transition-all duration-1000 ease-out ${
                isFormVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
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
                  <div className="flex flex-wrap gap-2 lg:gap-3 mb-0">
                    {projectTypes.map((project) => (
                      <button
                        key={project}
                        onClick={() => setSelectedProject(project)}
                        className={`
                          px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-sm lg:text-base transition-all duration-300 hover:scale-105
                          ${selectedProject === project
                            ? 'bg-purple-100 text-purple-600 border border-purple-500'
                            : 'border border-gray-300 text-gray-600 hover:bg-purple-100 hover:text-purple-600 hover:border-purple-500'
                          }
                        `}
                      >
                        {project}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Field - Responsive sizing with reduced top spacing */}
                <div className="-mt-12">
                  <textarea 
                    placeholder="Enter message"
                    rows={1}
                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300 text-sm lg:text-base"
                  ></textarea>
                </div>

                {/* Submit Button and Social Icons - Responsive layout with icons moved left */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <img 
                    src="/sendmessage.svg" 
                    alt="Send Message" 
                    className="cursor-pointer hover:scale-105 transition-all duration-300 hover:opacity-80 w-full sm:w-auto max-w-[250px] h-auto"
                    onClick={() => {
                      // Handle send message click
                      console.log('Send message clicked');
                    }}
                  />

                  {/* Social Icons - Responsive sizing, moved slightly left */}
                  <div className="flex items-center gap-4 -ml-2 sm:-ml-4">
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
    </div>
  );
};

export default Contact;