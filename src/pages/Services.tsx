import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import React, { useEffect, useState, useRef } from 'react';

const Services = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibleServices, setVisibleServices] = useState(new Set());
  const headerRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const headerTimer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 100);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      });
    }, observerOptions);

    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = serviceRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setVisibleServices(prev => new Set([...prev, index]));
          }
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    serviceRefs.current.forEach((ref) => {
      if (ref) {
        servicesObserver.observe(ref);
      }
    });

    return () => {
      clearTimeout(headerTimer);
      headerObserver.disconnect();
      servicesObserver.disconnect();
    };
  }, []);

  const services = [
    {
      title: "Generative Intelligence (AI)",
      description: "We develop iOS and Android apps using cross-platform technologies for wider reach and consistent performance, enhanced with AI and ML integration for smarter user experiences.",
      features: [
        "Generative AI & Deep Learning",
        "AI Research & Innovation",
        "AI Driven Automation and Optimization",
        "Computer Vision and Image Processing",
        "Datascience and Predictive Analysis",
        "Natural Language Processing"
      ],
      image: "/new.svg",
      stack: "/stack1.svg",
      gradient: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700"
    },
    {
      title: "App Development", 
      description: "We develop iOS and Android apps using cross-platform technologies for wider reach and consistent performance, enhanced with AI and ML integration for smarter user experiences.",
      features: [
        "Cross-Platform Mobile Development",
        "AI-Integrated Smart Apps",
        "App Performance Tuning & Monitoring",
        "Mobile UI/UX Innovation",
        "Cloud-Connected Mobile Applications",
        "Secure Mobile App Architecture"
      ],
      image: "/new.svg",
      stack: "/stack2.svg",
      gradient: "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700"
    },
    {
      title: "Web Development",
      description: "We develop iOS and Android apps using cross-platform technologies for wider reach and consistent performance, enhanced with AI and ML integration for smarter user experiences.",
      features: [
        "Modern Web Frameworks & Tooling",
        "API-Driven Web Ecosystem",
        "Dynamic Web Applications with Real-Time Data",
        "Web Security and Encryption Protocols",
        "Progressive Web Apps (PWA) Development",
        "AI-Powered Web Interface"
      ],
      image: "/new.svg",
      stack: "/stack3.svg",
      gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600"
    },
    {
      title: "UI/UX Design",
      description: "We develop iOS and Android apps using cross-platform technologies for wider reach and consistent performance, enhanced with AI and ML integration for smarter user experiences.",
      features: [
        "Human-Centered Design & Usability Testing",
        "Motion Design & Microinteractions",
        "Design System & Interactive Prototyping",
        "Accessibility & Inclusive Design Practices",
        "Visual Storytelling & Branding through Design",
        "User Research & Data-Driven UI Decisions"
      ],
      image: "/new.svg",
      stack: "/stack4.svg",
      gradient: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Background Image */}
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
            {/* Header Content */}
            <div 
              ref={headerRef}
              className={`mb-4 sm:mb-6 lg:mb-8 w-full transform transition-all duration-700 ease-out px-4 sm:px-6 lg:px-10 ${
                isHeaderVisible 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-full opacity-0'
              }`}
            >
              <div className="text-left">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 mt-2 sm:mt-6 lg:mt-9">
                  Services
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed">
                  We craft bold digital solutions that drive growth. From concept to launch, solving real-world problems with precision and creativity.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 bg-white pb-8 sm:pb-12 lg:pb-16 pt-8 sm:pt-12 lg:pt-16">
        <div className="w-full">
          {/* Services Grid */}
          <section className="pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-10 bg-white rounded-3xl shadow-sm">
            <div className="w-full space-y-4 sm:space-y-5 lg:space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  ref={el => serviceRefs.current[index] = el}
                  className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 transform transition-all duration-700 ease-out ${
                    visibleServices.has(index)
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-16 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: visibleServices.has(index) ? `${index * 150}ms` : '0ms' 
                  }}
                >
                  {/* Service Image Header */}
                  <div className={`h-32 sm:h-40 lg:h-56 ${service.gradient} relative rounded-t-2xl sm:rounded-t-3xl overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 lg:p-8">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 mt-3 sm:mt-5 lg:mt-7">
                      {service.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-5 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-2 mb-3 sm:mb-4 lg:mb-5">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className={`bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-full px-3 sm:px-4 py-2 sm:py-3 text-gray-700 text-xs sm:text-sm shadow-sm border border-gray-200 font-semibold transform transition-all duration-500 ease-out ${
                            visibleServices.has(index)
                              ? 'translate-y-0 opacity-100' 
                              : 'translate-y-4 opacity-0'
                          }`}
                          style={{ 
                            transitionDelay: visibleServices.has(index) ? `${(index * 150) + (featureIndex * 50) + 200}ms` : '0ms' 
                          }}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className={`flex justify-center pt-2 sm:pt-3 lg:pt-4 pb-2 sm:pb-3 lg:pb-4 transform transition-all duration-500 ease-out ${
                      visibleServices.has(index)
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: visibleServices.has(index) ? `${(index * 150) + 500}ms` : '0ms' 
                    }}>
                      <div className="w-auto mb-3 sm:mb-4 lg:mb-6">
                        <img src={service.stack} alt="Tech stack" className="h-8 sm:h-9 lg:h-10 object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Services;