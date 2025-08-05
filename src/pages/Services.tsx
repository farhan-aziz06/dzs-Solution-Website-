import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import React from 'react';

const Services = () => {
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
      image: "/genai.svg",
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
      image: "/appdev.svg",
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
      image: "/genai.svg",
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
      image: "/ui.svg",
      stack: "/stack4.svg",
      gradient: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
          <section className="pt-16 pb-10 max-w-5xl mx-auto">
            {/* Header Content */}
            <div className="mb-8 px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Services</h1>
              <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
                We offer comprehensive digital solutions to help your business thrive in the modern landscape
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-8 px-6 bg-white pb-16 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                {/* Service Image Header */}
                <div className={`h-40 ${service.gradient} relative rounded-t-3xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/5"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-5">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-full px-3 py-3 text-gray-700 text-xs shadow-sm border border-gray-200 font-semibold">
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center pt-4 pb-4">
                    <div className="w-auto">
                      <img src={service.stack} alt="Tech stack" className="h-10 object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;