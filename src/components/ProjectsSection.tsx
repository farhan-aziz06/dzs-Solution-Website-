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
      image: "/pi1.png",
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
    <section ref={sectionRef} className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden pb-8 sm:pb-12 lg:pb-16 pt-8 sm:pt-12 lg:pt-16">
      <div className="w-full">
        {/* Header Animation - This is already correctly aligned */}
        <div className={`mb-4 sm:mb-6 lg:mb-8 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-20 opacity-0'
        }`}>
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 transition-all duration-1000">
              Our Projects
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed transition-all duration-1000">
              We craft bold digital solutions that drive growth. From concept to launch, <br/>
              solving real-world problems with precision and creativity.
            </p>
          </div>
        </div>

        {/* Projects Grid Container - Horizontal padding removed for alignment */}
        <div className="pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-12 lg:pb-16 bg-white rounded-3xl shadow-sm">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-1000 delay-300 ${
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
                {/* Image Container */}
                <div className={`relative rounded-2xl sm:rounded-3xl aspect-[5/3] flex items-center justify-center overflow-hidden mb-3 sm:mb-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="px-1 sm:px-2">
                  {/* Category - Full width on small screens */}
                  <div className="mb-2 sm:hidden">
                    <span className="text-gray-900 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Badge and Team - Second line on small screens */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    {/* Badge and Category container for larger screens */}
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                      <span className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-xs font-medium shadow-lg transition-all duration-300 ${
                        'bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 text-white group-hover:from-purple-600 group-hover:via-purple-500 group-hover:to-purple-600'
                      } relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 pointer-events-none"></div>
                        <span className="relative z-10">{project.badge}</span>
                      </span>
                      {/* Category only visible on larger screens */}
                      <span className="text-gray-900 text-xs sm:text-xs font-medium hidden sm:block">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Team Section */}
                    <div className="relative flex items-center">
                      <div className="relative overflow-hidden border border-gray-200 bg-gray-100 rounded-full transition-all duration-500 ease-out group-hover:pr-12 sm:group-hover:pr-14">
                        <div className="px-2 sm:px-3 py-1 transition-all duration-500 ease-out">
                          <span className="text-gray-500 text-xs whitespace-nowrap">by Team</span>
                        </div>
                      </div>
                      <div className="absolute right-1 flex -space-x-1 sm:-space-x-1.5 transition-all duration-500 ease-out transform translate-x-5 sm:translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                        {project.team.map((member, i) => (
                          <div 
                            key={i}
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden transition-all duration-300 shadow-sm"
                            style={{ 
                              transitionDelay: `${i * 80}ms`
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
        </div>

        {/* Services Section - This section was already correctly aligned */}
        <div ref={servicesRef} className="hidden md:block mt-8 sm:mt-12 lg:mt-16">
          <div className={`mb-4 sm:mb-6 lg:mb-8 transition-all duration-1000 ease-out ${
            servicesVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-20 opacity-0'
          }`}>
            <div className="text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 transition-all duration-1000">
                More Than Just Services
              </h2>
             <p className="text-gray-400 text-xs sm:text-sm lg:text-base max-w-4xl leading-relaxed transition-all duration-1000">
  We go beyond basic services—offering long-term support, flexible payments, expert teams, and scalable solutions. <br/>Every project is designed with care to ensure value, growth, and lasting impact for our clients.
</p>

            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-400 ${
            servicesVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            <div className="transition-all duration-1000 delay-600 w-full mt-12">
              <img
                src="/ser.svg"
                alt="Services illustration"
                className="w-full h-auto object-contain transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;