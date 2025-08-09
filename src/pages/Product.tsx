import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import Services from '@/pages/Services';

const Products = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Artificial Intelligence');

  useEffect(() => {
    // Trigger header animation immediately
    setIsHeaderVisible(true);
    
    // Trigger projects animation after header animation
    const timer = setTimeout(() => {
      setIsProjectsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    'Artificial Intelligence',
    'App Development', 
    'Web Technology'
  ];

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
    },
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
  ];

  return (
    <div className="min-h-screen">
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
          <section className="pt-6 sm:pt-8 lg:pt-12 pb-4 sm:pb-6 lg:pb-8 max-w-5xl mx-auto">
            {/* Header Content with slide-in from right animation */}
            <div className={`mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 transform transition-all duration-700 ease-out ${
              isHeaderVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0'
            }`}>
              <div className="-ml-6 sm:-ml-8 lg:-ml-12">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 mt-4 sm:mt-6 lg:mt-9">Mobile app development</h1>
              <p className="text-gray-500 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed">
                We craft bold digital solutions that drive growth. From concept to launch,
                solving real-world problems with precision and creativity.
              </p>
              </div>
              {/* Filter Tags - Mobile Optimized */}
              <div className="mt-4 sm:mt-5 lg:mt-6">
                {/* Mobile: Stack tabs vertically or use smaller text */}
                <div className="block sm:hidden">
                  <div className="flex flex-col gap-2">
                    {tabs.map((tab, index) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-full px-3 py-2 text-xs font-medium transition-all duration-200 rounded-full ${
                          activeTab === tab
                            ? 'bg-purple-500 text-white shadow-md'
                            : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Desktop: Original horizontal layout */}
                <div className="hidden sm:flex">
                  <div className="flex bg-white border border-gray-200 rounded-full overflow-hidden">
                    {tabs.map((tab, index) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 sm:px-4 lg:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 relative whitespace-nowrap ${
                          activeTab === tab
                            ? 'bg-purple-500 text-white rounded-full shadow-md z-10'
                            : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Project Grid with slide-up animation */}
          <section className={`pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-12 lg:pb-16 px-2 sm:px-4 lg:px-6 bg-white rounded-3xl shadow-sm transform transition-all duration-700 ease-out ${
            isProjectsVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}>
            <div className="max-w-6xl mx-auto">

              {/* Project Grid with ProjectsSection styling - ORIGINAL LAYOUT PRESERVED */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className={`group cursor-pointer transform transition-all duration-500 ease-out ${
                      isProjectsVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: isProjectsVisible ? `${index * 100}ms` : '0ms' 
                    }}
                  >
                    {/* Image Container with Gradient Background */}
                    <div className={`relative ${project.bgColor} rounded-2xl sm:rounded-3xl aspect-[5/3] flex items-center justify-center overflow-hidden mb-2 sm:mb-3 lg:mb-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Project Info - Updated with ProjectsSection animations */}
                    <div className="px-1 sm:px-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                          <span className={`px-3 sm:px-4 py-1 rounded-full text-xs font-medium shadow-lg transition-all duration-300 ${
                            'bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 text-white group-hover:from-purple-600 group-hover:via-purple-500 group-hover:to-purple-600'
                          } relative overflow-hidden`}>
                            {/* White gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 pointer-events-none"></div>
                            <span className="relative z-10">{project.badge}</span>
                          </span>
                          <span className="text-gray-900 text-xs font-medium">
                            AI Integrated Workflow Product
                          </span>
                        </div>
                        
                        {/* Team Section with Sliding Pill Effect - ProjectsSection style */}
                        <div className="relative flex items-center self-start sm:self-auto">
                          {/* Sliding Pill Container */}
                          <div className="relative overflow-hidden border border-gray-200 bg-gray-100 rounded-full transition-all duration-500 ease-out group-hover:pr-10 sm:group-hover:pr-12 lg:group-hover:pr-14">
                            {/* Default state - "by Team" text */}
                            <div className="px-2 sm:px-3 py-1 transition-all duration-500 ease-out">
                              <span className="text-gray-500 text-xs whitespace-nowrap">by Team</span>
                            </div>
                          </div>
                          
                          {/* Team member circles - perfect fit with no white space */}
                          <div className="absolute right-1 flex -space-x-1 sm:-space-x-1.5 transition-all duration-500 ease-out transform translate-x-4 sm:translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <Services />
    </div>
  );
};

export default Products;