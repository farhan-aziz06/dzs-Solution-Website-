import React, { useEffect, useRef, useState } from 'react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (servicesRef.current) {
        servicesObserver.unobserve(servicesRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "",
      category: "AI Integrated Workflow Product",
      team: ["/girl.svg", "/girl1.svg", "/boy.svg"],
      image: "/fig1.svg",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      badge: "AI"
    },
    {
      title: "",
      category: "AI Integrated Workflow Product", 
      team: ["/girl1.svg", "/boy.svg", "/girl.svg"],
      image: "/fig2.svg",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      badge: "Web"
    },
    {
      title: "",
      category: "AI Integrated Workflow Product",
      team: ["/boy.svg", "/girl.svg", "/girl1.svg"],
      image: "/fig3.svg",
      bgColor: "bg-gradient-to-br from-gray-900 to-black",
      badge: "App"
    },
    {
      title: "", 
      category: "AI Integrated Workflow Product",
      team: ["/girl1.svg", "/girl.svg", "/boy.svg"],
      image: "/fig4.svg",
      bgColor: "bg-gradient-to-br from-blue-900 to-blue-950",
      badge: "AI"
    }
  ];

  return (
    <section ref={sectionRef} className="pt-0 pb-16 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Animation - Slide from left */}
        <div className={`mb-12 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-20 opacity-0'
        }`}>
          <h2 className="text-4xl font-semibold text-gray-900 mb-4 transition-all duration-1000">
            Our Projects
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl transition-all duration-1000">
            We craft bold digital solutions that drive growth. From concept to launch, 
            solving real-world problems with precision and creativity.
          </p>
        </div>

        {/* Project Grid - Slide from bottom */}
        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'
        }`}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${400 + (index * 150)}ms` }}
            >
              {/* Image Container with Gradient Background */}
              <div className={`relative ${project.bgColor} rounded-3xl aspect-[5/3] flex items-center justify-center overflow-hidden mb-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Project Info - Transparent background */}
              <div className="px-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium shadow-lg transition-all duration-300 ${
                      'group-hover:bg-purple-600 group-hover:text-white bg-gray-900 text-white'
                    }`}>
                      {project.badge}
                    </span>
                    <span className="text-gray-900 text-xs font-medium">
                      AI Integrated Workflow Product
                    </span>
                  </div>
                  
                  {/* Team Section with Sliding Pill Effect */}
                  <div className="relative flex items-center">
                    {/* Sliding Pill Container */}
                    <div className="relative overflow-hidden border border-gray-200 bg-gray-100 rounded-full transition-all duration-500 ease-out group-hover:pr-16">
                      {/* Default state - "by Team" text */}
                      <div className="px-3 py-1 transition-all duration-500 ease-out">
                        <span className="text-gray-500 text-xs whitespace-nowrap">by Team</span>
                      </div>
                    </div>
                    
                    {/* Team member circles - positioned absolutely on the right */}
                    <div className="absolute right-0 flex -space-x-2 transition-all duration-500 ease-out transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                      {project.team.map((member, i) => (
                        <div 
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center overflow-hidden transition-all duration-300"
                          style={{ 
                            transitionDelay: `${i * 100}ms`,
                            transform: `translateX(${8 - (i * 2)}px)` 
                          }}
                        >
                          <img
                            src={member}
                            alt={`Team member ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section - Hidden on Mobile */}
        <div ref={servicesRef} className="hidden sm:block mt-24">
          {/* Services Header - Slide from left */}
          <div className={`mb-12 transition-all duration-1000 ease-out ${
            servicesVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-20 opacity-0'
          }`}>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 transition-all duration-1000">
              More Than Just Services
            </h2>
            <p className="text-gray-500 text-lg max-w-4xl transition-all duration-1000">
             We go beyond basic services—offering long-term support, flexible payments, expert teams, and scalable solutions. Every project is designed with care to ensure value, growth, and lasting impact for our clients.
            </p>
            
            {/* Services Image - Slide from bottom */}
            <div className={`mt-8 transition-all duration-1000 delay-400 ${
              servicesVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}>
              <div className={`transition-all duration-1000 delay-600`}>
                <img
                  src="/ser.svg"
                  alt="Services illustration"
                  className="max-w-6xl h-auto transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ProjectsSection;