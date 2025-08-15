import React, { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
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

  const projectTypes = ['Web Development', 'Mobile App', 'AI Integration'];

  return (
    <section
      ref={sectionRef}
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 bg-white mb-12 sm:mb-18 lg:mb-24 overflow-x-hidden"
    >
      <div className="w-full">
        {/* Header Section */}
        <div
          className={`mb-6 sm:mb-8 lg:mb-12 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">
            Contact us
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed">
            Have a project in mind or just want to chat? We'd love to hear from you. <br />
            Reach out and let's make it happen!
          </p>
        </div>

        {/* Main Content */}
        <div className="rounded-3xl pt-8 sm:pt-10 lg:pt-16 pb-8 sm:pb-10 lg:pb-16 px-6 sm:px-10 lg:px-16 bg-white">
          <div className="
  grid grid-cols-1 xl:grid-cols-2 
  gap-8 lg:gap-8 xl:gap-6 
  items-center min-h-[500px] xl:min-h-[600px] 
  max-w-[1250px] 2xl:max-w-[1200px] mx-auto 
  -mt-6 sm:-mt-8
">

            {/* Left - Image */}
            <div
              className={`flex items-center justify-center xl:justify-start h-full transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <img
                src="/cont.svg"
                alt="Contact illustration"
                className="h-auto object-contain w-full sm:w-auto max-h-[600px] xl:max-h-[700px]"
              />
            </div>

            {/* Right - Form */}
            <div
              className={`h-full flex flex-col justify-center items-center xl:items-start space-y-2 sm:space-y-3 xl:space-y-4 w-full transform transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: '350ms' }}
            >
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full">
                <div>
                  <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="w-full">
                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm lg:text-base"
                />
              </div>

              {/* Phone */}
              <div className="w-full">
                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">Phone</label>
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

              {/* Project Type */}
              <div className="w-full">
                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">Tell us about your project</label>
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

              {/* Message */}
              <div className="w-full">
                <textarea
                  placeholder="Enter message"
                  rows={1}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm lg:text-base"
                ></textarea>
              </div>

              {/* Submit & Social */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 w-full">
                <img
                  src="/sendmessage.svg"
                  alt="Send Message"
                  className="cursor-pointer hover:scale-105 transition-all duration-300 hover:opacity-80 w-full sm:w-auto max-w-[200px] sm:max-w-[250px] h-auto"
                  onClick={() => {
                    console.log('Send message clicked');
                  }}
                />
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
  );
};

export default ContactSection;
