import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // State to track the selected project type
  const [selectedProject, setSelectedProject] = useState('Web Development');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Project types for easy mapping
  const projectTypes = ['Web Development', 'Mobile App', 'AI Integration'];

  return (
    <>
      {/* Header with Background Image */}
      <div className="mt-4 sm:mt-6 lg:mt-10 px-2 sm:px-4 lg:px-6">
        <div 
          className="rounded-3xl overflow-hidden bg-white"
          style={{
            backgroundImage: 'url(/bg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <section className="pt-6 sm:pt-8 lg:pt-12 pb-4 sm:pb-6 lg:pb-8">
            {/* Header Content */}
            <div className={`mb-4 sm:mb-6 lg:mb-8 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <div className="w-full text-left">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 mt-4 sm:mt-6 lg:mt-9">
                  Contact Us
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed">
                  We craft bold digital solutions that drive growth. From concept to launch, solving real-world problems with precision and creativity.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Main Contact Section */}
      <section ref={sectionRef} className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 px-3 sm:px-4 lg:px-8 xl:px-12 bg-white mb-12 sm:mb-18 lg:mb-24">
        <div className="w-full">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
            
            {/* Left Side - Contact Image */}
            <div className={`flex items-center justify-center lg:justify-start transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <img
                src="/cont.svg"
                alt="Contact illustration"
                className="max-w-full h-auto w-48 sm:w-64 md:w-80 lg:w-full"
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className={`space-y-3 sm:space-y-4 lg:space-y-6 mt-4 sm:mt-6 lg:mt-0 w-full transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your First Name" 
                    className="w-full px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your Last Name" 
                    className="w-full px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm lg:text-base"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Phone
                </label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select className="px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 pr-6 sm:pr-8 lg:pr-10 border border-gray-300 rounded-full bg-white text-xs sm:text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[80px] sm:min-w-[100px] lg:min-w-[140px] appearance-none transition-all duration-300">
                      <option>+92(PAK)</option>
                    </select>
                    <img 
                      src="/drop.svg" 
                      alt="dropdown" 
                      className="absolute right-1.5 sm:right-2 lg:right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 pointer-events-none"
                    />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="flex-1 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Tell us about your project
                </label>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3 mb-3 sm:mb-4">
                  {projectTypes.map((project) => (
                    <button
                      key={project}
                      onClick={() => setSelectedProject(project)}
                      className={`
                        px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full text-xs sm:text-sm transition-all duration-300 hover:scale-105
                        ${selectedProject === project
                          ? 'bg-purple-100 text-purple-500 border border-purple-500'
                          : 'border border-gray-300 text-gray-600 hover:bg-purple-100 hover:text-purple-500 hover:border-purple-500'
                        }
                      `}
                    >
                      {project}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <textarea 
                  placeholder="Enter message"
                  className="w-full h-[32px] sm:h-[40px] lg:h-[48px] px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none overflow-hidden transition-all duration-300 text-xs sm:text-sm lg:text-base"
                ></textarea>
              </div>

              {/* Submit Button and Social Icons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                <button className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg text-xs sm:text-sm lg:text-base font-normal group w-full sm:w-auto">
                  {/* White gradient overlay on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>

                  <span className="relative z-10 flex items-center justify-center gap-2 w-full sm:w-auto">
                    Send Message 
                    <img src="/arrow3.svg" alt="send" className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4" />
                  </span>
                </button>

                {/* Social Icons */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-110">
                    <img src="/twitter.svg" alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-110">
                    <img src="/instagram.svg" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-110">
                    <img src="/discord.svg" alt="Discord" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;