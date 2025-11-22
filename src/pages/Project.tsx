import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import Services from '@/pages/Services';
import Tooltip from '@/components/Tooltip';
import '@/components/Tooltip.css';

const Projects = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Artificial Intelligence');
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: '',
    x: 0,
    y: 0
  });

  useEffect(() => {
    setIsHeaderVisible(true);
    const timer = setTimeout(() => {
      setIsProjectsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const tabs = ['Artificial Intelligence', 'App Development', 'Web Technology'];

const projects = [
  {
    title: "Deal Taxi Platform",
    category: "Full-Stack Mobile & Admin Panel",
    team: ["/arrij.webp", "/human.webp", "/Farhan1.webp","/taha.webp"],
    image: "/taxiapp.webp",
    bgColor: "bg-gradient-to-br from-blue-900 to-blue-950",
    badge: "App",
    description: "Complete taxi booking platform with driver app, passenger app, and powerful admin panel. Features real-time GPS tracking, automated dispatch, payment integration, and analytics dashboard. Built with React Native and Node.js microservices."
  },
  {
    title: "NY Caffeine End-to-End System",
    category: "Mobile App & Admin Dashboard",
    team: ["/arrij.webp", "human.webp", "/Farhan1.webp","taha.webp"],
    image: "/fig2.svg",
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    badge: "App",
    description: "Full-stack cafe management system with mobile ordering app and comprehensive admin panel. Includes menu management, inventory tracking, order processing, delivery integration, and real-time analytics. Improved operational efficiency by 65%."
  },
  {
    title: "AI-Powered Lead Generation",
    category: "AI Automation & CRM Integration",
    team: ["/umar1.webp", "/human.webp", "/Farhan1.webp"],
    image: "/fig2.svg",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
    badge: "AI",
    description: "Intelligent lead generation system using machine learning to identify, score, and nurture quality leads. Features automated workflows, CRM integration, predictive analytics, and smart segmentation. Increased conversion rates by over 70%."
  },
  {
    title: "Dome Water",
    category: "Mobile App, Admin Panel & Backend",
    team: ["/umar1.webp","/arrij.webp", "/human.webp", "/Farhan1.webp"],
    image: "/dome.webp",
    bgColor: "bg-gradient-to-br from-gray-900 to-black",
    badge: "App & Admin Panel",
    description: "Water delivery management platform with mobile app for customers and drivers, plus complete admin dashboard. Features order scheduling, route optimization, inventory management, and payment processing with real-time tracking."
  },
    // {
    //   title: "SaaS Workflow Automation",
    //   category: "Web Platform & AI Integration",
    //   team: ["/girl.svg", "/Farhan1.webp", "/boy.svg"],
    //   image: "/saas_workflow.png",
    //   bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    //   badge: "Web"
    // },
  {
    title: "Microservices Taxi Backend",
    category: "Backend Optimization & Redis Cache",
    team: ["/arrij.webp", "/human.webp", "/farhan.png","/taha.webp"],
    image: "/taxi-2.webp",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
    badge: "Backend",
    description: "High-performance microservices architecture for taxi platform with Redis caching, message queues, and load balancing. Handles 10,000+ concurrent requests with sub-100ms response times. Built with Node.js, Redis, and Docker."
  },
];

  

  return (
    <div className="min-h-screen">

      {/* Header Section */}
      <div className="mt-4 sm:mt-6 lg:mt-10 px-4 sm:px-6 lg:px-10">
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
            <div
              className={`mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-10 transform transition-all duration-700 ease-out ${
                isHeaderVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0'
              }`}
            >
              <div className="w-full text-left">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-0 mt-0 sm:mt-0 lg:mt-0">
                  From Idea to Production: End-to-End Apps, AI Systems, and Scalable Platforms
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed">
                  We craft bold digital solutions that drive growth. From concept to launch,
                  solving real-world problems with precision and creativity.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="mt-4 sm:mt-5 lg:mt-6">
                {/* Mobile Layout */}
                <div className="block sm:hidden">
                  <div className="flex flex-col gap-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-full px-3 py-2 text-xs font-medium transition-all duration-200 rounded-full relative overflow-hidden ${
                          activeTab === tab
                            ? 'bg-gradient-to-b from-[#C3A5E9] to-[#A16FFF] text-white shadow-md'
                            : 'bg-white border border-gray-200 text-gray-400 hover:text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        {activeTab === tab && (
                          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent pointer-events-none rounded-full"></div>
                        )}
                        <span className="relative z-10">{tab}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:flex">
                  <div className="flex bg-white border border-gray-200 rounded-full overflow-hidden">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 lg:px-6 py-2 text-xs sm:text-sm font-medium transition-all duration-200 relative whitespace-nowrap overflow-hidden ${
                          activeTab === tab
                            ? 'bg-gradient-to-b from-[#C3A5E9] to-[#A16FFF] text-white rounded-full shadow-md z-10'
                            : 'text-gray-500 hover:text-gray-400 hover:bg-gray-50'
                        }`}
                      >
                        {activeTab === tab && (
                          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none rounded-full"></div>
                        )}
                        <span className="relative z-10">{tab}</span>
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
      <section className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 bg-white">
        <div>
          <section
            className={`pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-10 bg-white rounded-3xl shadow-sm transform transition-all duration-700 ease-out ${
              isProjectsVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer transition-all duration-1000 ${
                      isProjectsVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-20 opacity-0'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                    onMouseEnter={() => {
                      setTooltip({
                        visible: true,
                        text: project.description,
                        x: 0,
                        y: 0
                      });
                    }}
                    onMouseMove={(e) => {
                      setTooltip(prev => ({
                        ...prev,
                        x: e.clientX,
                        y: e.clientY
                      }));
                    }}
                    onMouseLeave={() => {
                      setTooltip({
                        visible: false,
                        text: '',
                        x: 0,
                        y: 0
                      });
                    }}
                  >
                    {/* Card Image */}
                    <div
                      className={`relative rounded-2xl sm:rounded-3xl aspect-[5/3] flex items-center justify-center overflow-hidden mb-3 sm:mb-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Card Info */}
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
                          <span
                            className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-xs font-medium shadow-lg transition-all duration-300 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 text-white group-hover:from-purple-600 group-hover:via-purple-500 group-hover:to-purple-600 relative overflow-hidden`}
                          >
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
                                style={{ transitionDelay: `${i * 80}ms` }}
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

      {/* Floating Tooltip */}
      <Tooltip
        text={tooltip.text}
        x={tooltip.x}
        y={tooltip.y}
        visible={tooltip.visible}
      />
    </div>
  );
};

export default Projects;