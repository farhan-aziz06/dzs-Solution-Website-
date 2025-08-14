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
            <section className="pt-4 sm:pt-4 lg:pt-8 pb-2 sm:pb-4 lg:pb-4">
              <div
                className={`mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-6 transform transition-all duration-700 ease-out ${
                  isHeaderVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="w-full text-left">
                  <h1 className=" ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 mt-4 sm:mt-4 lg:mt-4">
  Contact Us
</h1>

                  <p className="ml-2 text-gray-400 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed">
                   We craft bold digital solutions that drive growth. From concept to launch, solving real-world problems with precision and creativity.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

      {/* Main Contact Section - UPDATED to match ContactSection exactly */}
      <section ref={formSectionRef} className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 bg-white mb-12 sm:mb-18 lg:mb-24 overflow-x-hidden">
        <div className="w-full">
          {/* Main Content Container - Changed to match ContactSection (removed border, changed padding) */}
          <div className="rounded-3xl pt-8 sm:pt-10 lg:pt-16 pb-8 sm:pb-10 lg:pb-16 px-6 sm:px-10 lg:px-16 bg-white">
            
            {/* Content Grid - Updated spacing and layout to match ContactSection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center min-h-[500px] lg:min-h-[600px] -mt-6 sm:-mt-8">
              
              {/* Left Side - Contact Image - Updated positioning to match ContactSection */}
              <div className={`flex items-center justify-center lg:justify-start h-full transform transition-all duration-1000 ease-out ${
                isFormVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <img
                  src="/cont.svg"
                  alt="Contact illustration"
                  className="h-auto object-contain lg:-ml-14 w-[85%] sm:w-auto"
                  style={{ maxHeight: '800px' }}
                />
              </div>

              {/* Right Side - Contact Form - Updated to match ContactSection exactly */}
              <div className={`h-full flex flex-col justify-center items-center lg:items-start space-y-4 sm:space-y-6 lg:space-y-8 w-full transform transition-all duration-1000 ease-out lg:-ml-8 ${
                isFormVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`} style={{ transitionDelay: '350ms' }}>
                
                {/* Name Fields - Updated spacing and responsive classes to match ContactSection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                  <div>
                    <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 sm:mb-2">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your First Name" 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm lg:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 sm:mb-2">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your Last Name" 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm lg:text-base"
                    />
                  </div>
                </div>

                {/* Email Field - Updated to match ContactSection */}
                <div className="w-full">
                  <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 sm:mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm lg:text-base"
                  />
                </div>

                {/* Phone Field - Updated to match ContactSection exactly */}
                <div className="w-full">
                  <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 sm:mb-2">Phone</label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <select className="px-3 sm:px-4 py-2.5 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-full bg-white text-sm lg:text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[100px] sm:min-w-[120px] appearance-none">
                        <option>+92 (PAK)</option>
                      </select>
                      <img 
                        src="/drop.svg" 
                        alt="dropdown" 
                        className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 pointer-events-none"
                      />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Phone" 
                      className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm lg:text-base"
                    />
                  </div>
                </div>

                {/* Project Type - Updated to match ContactSection exactly */}
                <div className="w-full">
                  <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 sm:mb-2">Tell us about your project</label>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {projectTypes.map((project) => (
                      <button
                        key={project}
                        onClick={() => setSelectedProject(project)}
                        className={`px-3 sm:px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-sm lg:text-base transition-all duration-300 hover:scale-105
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

                {/* Message Field - Updated to match ContactSection exactly */}
                <div className="-mt-8 sm:-mt-10 w-full">
                  <textarea 
                    placeholder="Enter message"
                    rows={1}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm lg:text-base"
                  ></textarea>
                </div>

                {/* Submit Button and Social Icons - Updated to match ContactSection exactly */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 w-full">
                  <img 
                    src="/sendmessage.svg" 
                    alt="Send Message" 
                    className="cursor-pointer hover:scale-105 transition-all duration-300 hover:opacity-80 w-full sm:w-auto max-w-[200px] sm:max-w-[250px] h-auto"
                    onClick={() => {
                      console.log('Send message clicked');
                    }}
                  />

                  {/* Social Icons - Updated positioning to match ContactSection */}
                  <div className="flex items-center gap-3 sm:gap-4 -ml-1 sm:-ml-2">
                    <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-110">
                      <img src="/twitter.svg" alt="Twitter" className="w-7 sm:w-8 h-7 sm:h-8" />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-110">
                      <img src="/instagram.svg" alt="Instagram" className="w-7 sm:w-8 h-7 sm:h-8" />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-110">
                      <img src="/discord.svg" alt="Discord" className="w-7 sm:w-8 h-7 sm:h-8" />
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