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
    title: "Deal Taxi Platform",
    category: "Full-Stack Mobile & Admin Panel",
    team: ["/arrij.jpeg", "/user.png", "/Farhan1.png"],
    image: "/taxiapp.png",
    bgColor: "bg-gradient-to-br from-blue-900 to-blue-950",
    badge: "App"
  },
  {
    title: "Dome Water",
    category: "Mobile App, Admin Panel & Backend",
    team: ["/umar1.webp","/arrij.jpeg", "/user.png", "/Farhan1.png"],
    image: "/dome.png",
    bgColor: "bg-gradient-to-br from-gray-900 to-black",
    badge: "App"
  },
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
            <a href="/project" className="group inline-block focus:outline-none">
              <h2
                id="projects-section"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 transition-all duration-1000 cursor-pointer group-hover:text-purple-600"
                tabIndex={0}
              >
                Our Projects
              </h2>
            </a>
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
                      loading="lazy"
                      decoding="async"
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
                              loading="lazy"
                              decoding="async"
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


        {/* Services Section - Dark theme with floating cards and three columns */}
        <div ref={servicesRef} className="mt-8 sm:mt-12 lg:mt-16">
          <div className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 transition-all duration-1000 ${
            servicesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}>
            {/* Hero Section */}
            <div className="relative z-10 text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                A development approach built for how your business works
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                Your business needs are unique—your tech stack should be too. DZS Solutions' fully customizable development model lets you structure projects, teams, and workflows however you need.
              </p>
              <a href="#docs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors">
                View docs →
              </a>
            </div>

            {/* Floating Cards */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-4 sm:left-10 w-24 h-16 sm:w-32 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center gap-2 px-3">
                <div className="w-2 h-2 bg-white/60 rounded" />
                <span className="text-white text-xs">React</span>
              </div>
              <div className="absolute top-20 right-8 sm:right-16 w-28 h-16 sm:w-36 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center gap-2 px-3 blur-sm">
                <div className="w-2 h-2 bg-white/60 rounded" />
                <span className="text-white text-xs">Next.js</span>
              </div>
              <div className="absolute bottom-32 left-12 sm:left-20 w-32 h-16 sm:w-40 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center gap-2 px-3">
                <div className="w-2 h-2 bg-white/60 rounded" />
                <span className="text-white text-xs">AI Agents</span>
              </div>
              <div className="absolute top-32 right-12 sm:right-24 w-28 h-16 sm:w-36 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center gap-2 px-3 blur-sm">
                <div className="w-2 h-2 bg-white/60 rounded" />
                <span className="text-white text-xs">Node.js</span>
              </div>
            </div>

            {/* Three Columns */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
              {/* Left Column */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
                  Organize projects your way
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Automatically group projects by client, stack, or team, making it easy to manage and track deliverables.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs border border-white/20">React</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs border border-white/20">Next.js</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs border border-white/20">Node.js</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs border border-white/20">Python</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs border border-white/20">AWS</span>
                </div>
              </div>

              {/* Middle Column */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
                  Mapped to your structure
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Assign priorities based on deadlines, budgets, or client tiers, so every project gets the right level of attention.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-2">Clients</div>
                    <div className="space-y-1.5">
                      <div className="text-white text-sm">Enterprise Corp</div>
                      <div className="text-white text-sm">Startup Labs</div>
                      <div className="text-white text-sm">Tech Ventures</div>
                      <div className="text-gray-400 text-sm">Global Inc</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-2">Projects</div>
                    <div className="space-y-1.5">
                      <div className="text-white text-sm">E-commerce Platform</div>
                      <div className="text-white text-sm">AI Dashboard</div>
                      <div className="text-gray-400 text-sm">Mobile App</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
                  Let AI handle the busywork
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Auto-generate code, optimize workflows, and customize features—so your team spends less time on setup and more time building.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Enterprise Plan</span>
                    <span className="text-gray-400 text-xs">38 projects</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Pro Plan</span>
                    <span className="text-gray-400 text-xs">492 projects</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Starter</span>
                    <span className="px-2 py-0.5 rounded bg-gray-700 text-gray-300 text-xs">Default</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Memoize to avoid re-renders when parent updates without changing props
export default React.memo(ProjectsSection);