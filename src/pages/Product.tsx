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
      {/* Header with Background Image */}
      <div className="mt-10 px-6">
        <div 
          className="rounded-3xl overflow-hidden bg-white"
          style={{
            backgroundImage: 'url(/bg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <section className="pt-12 pb-8 max-w-5xl mx-auto">
            {/* Header Content with slide-in from right animation */}
            <div className={`mb-8 px-4 transform transition-all duration-700 ease-out ${
              isHeaderVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0'
            }`}>
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 mt-9">Mobile app development</h1>
              <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
                We craft bold digital solutions that drive growth. From concept to launch,
                solving real-world problems with precision and creativity.
              </p>
              
              {/* Filter Tags - Connected Design */}
              <div className="flex flex-wrap mt-6">
                <div className="flex bg-white border border-gray-200 rounded-full overflow-hidden">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-2 text-sm font-medium transition-all duration-200 relative ${
                        activeTab === tab
                          ? 'bg-purple-500 text-white rounded-full shadow-md z-10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:rounded-full before:pointer-events-none'
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Project Grid with slide-up animation */}
          <section className={`pt-4 pb-16 px-6 bg-white rounded-3xl shadow-sm transform transition-all duration-700 ease-out ${
            isProjectsVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}>
            <div className="max-w-6xl mx-auto">

              {/* Project Grid with ProjectsSection styling */}
              <div className="grid md:grid-cols-2 gap-6">
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
                    <div className={`relative ${project.bgColor} rounded-3xl aspect-[5/3] flex items-center justify-center overflow-hidden mb-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Project Info - Transparent background */}
                    <div className="px-2">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                            {project.badge}
                          </span>
                          <span className="text-gray-900 text-xs font-medium">
                            AI Integrated Workflow Product
                          </span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                          <span className="text-gray-500 text-xs">by Team</span>
                          <div className="flex -space-x-2">
                            {project.team.map((member, i) => (
                              <div 
                                key={i}
                                className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center overflow-hidden"
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
          </section>
        </div>
      </section>
      <Services />
    </div>
  );
};

export default Products;