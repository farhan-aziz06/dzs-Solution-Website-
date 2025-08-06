import React, { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 1. State to track the selected project type
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

  // 2. An array to hold the project types for easy mapping
  const projectTypes = ['Web Development', 'Mobile App', 'AI Integration'];

  return (
    <section ref={sectionRef} className="pt-6 pb-12 px-6 bg-white mb-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Slides from Left */}
        <div className={`mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
        }`}>
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">Contact us</h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Have a project in mind or just want to chat? We'd love to hear from you. 
            Reach out and let's make it happen!
          </p>
        </div>

        {/* Main Content Grid - Slides from Bottom */}
        <div className={`grid lg:grid-cols-2 gap-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Left Side - Contact Image */}
          <div className="flex items-center justify-center">
            <img
              src="/contact.svg"
              alt="Contact illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-6 mt-16">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your First Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your Last Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <div className="flex gap-2">
                <div className="relative">
                  <select className="px-4 py-3 pr-10 border border-gray-300 rounded-full bg-white text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[140px] appearance-none transition-all duration-300">
                    <option>+92(PAK)</option>
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
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your project</label>
              <div className="flex flex-wrap gap-3 mb-4">
                {/* 3. Map over the array to render buttons dynamically */}
                {projectTypes.map((project) => (
                    <button
                      key={project}
                      // 4. Update state on click
                      onClick={() => setSelectedProject(project)}
                      // 5. Apply styles conditionally
                      className={`
                        px-6 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105
                        ${selectedProject === project
                          ? 'bg-purple-100 text-purple-500 border border-purple-500' // Active style
                          : 'border border-gray-300 text-gray-600 hover:bg-purple-100 hover:text-purple-500 hover:border-purple-500' // Inactive style with hover that mimics active style
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
                className="w-full h-[48px] px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none overflow-hidden transition-all duration-300"
              ></textarea>
            </div>

            {/* Submit Button and Social Icons */}
            <div className="flex items-center justify-between">
              <button className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg">
                Send Message 
                <img src="/arrow3.svg" alt="send" className="w-4 h-4" />
              </button>
              
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
    </section>
  );
};

export default ContactSection;