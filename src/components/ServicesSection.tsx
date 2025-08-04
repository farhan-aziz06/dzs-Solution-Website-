import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Artificial Intelligence",
      description: "We develop iOS and Android apps using cross-platform technologies for wider reach and consistent performance, enhanced with AI and ML integration for smarter user experiences.",
      svgFile: "ai1.svg"
    },
    {
      title: "App Development", 
      description: "iOS & Android app development with seamless cross-platform compatibility. Smart solutions powered by AI integration.",
      svgFile: "app1.svg"
    },
    {
      title: "Web development",
      description: "We create custom websites and web apps, offer tailored e-commerce solutions, and build with CMS and no-code platforms for faster, flexible development.",
      svgFile: "web1.svg"
    }
  ];

  const handleServiceClick = (service) => {
    console.log(`Clicked on ${service.title}`);
    // Add your click handler logic here
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-semi-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            We craft bold digital solutions that drive growth. From concept to launch, 
            solving real-world problems with precision and creativity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <img 
                  src={`/${service.svgFile}`} 
                  alt={service.title}
                  className="w-[90%] h-auto object-contain transition-all duration-500 group-hover:drop-shadow-2xl mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;