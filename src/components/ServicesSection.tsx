import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Artificial Intelligence",
      description: "We develop iOS and Android apps using cross-platform technologies for wider reach and consistent performance, enhanced with AI and ML integration for smarter user experiences.",
      icon: "AI",
      svgFile: "brain.svg",
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-100 to-pink-100",
      iconBg: "from-purple-400 to-purple-600"
    },
    {
      title: "App Development", 
      description: "iOS & Android app development with seamless cross-platform compatibility. Smart solutions powered by AI integration.",
      icon: "App",
      svgFile: "app.svg",
      color: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-100 to-purple-100",
      iconBg: "from-blue-400 to-purple-500"
    },
    {
      title: "Web development",
      description: "We create custom websites and web apps, offer tailored e-commerce solutions, and build with CMS and no-code platforms for faster, flexible development.",
      icon: "Web",
      svgFile: "web.svg", 
      color: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-100 to-purple-100",
      iconBg: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            We craft bold digital solutions that drive growth. From concept to launch, 
            solving real-world problems with precision and creativity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 overflow-hidden">
                {/* Card bottom fade effect - stronger fade like in the image */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 via-white/60 to-transparent rounded-b-3xl z-10 pointer-events-none"></div>
                
                {/* Service title */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                {/* Service description */}
                <div className="mb-8">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                
                {/* Simple background with just the SVG image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl overflow-hidden">
                  {/* Background SVG image only */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={`/${service.svgFile}`} 
                      alt={service.title}
                      className="w-full h-full object-contain opacity-30"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;