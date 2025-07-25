const ServicesSection = () => {
  const services = [
    {
      title: "Artificial Intelligence",
      description: "Intelligent algorithms and machine learning solutions for data science, natural language processing, enhanced with AI real-time analysis.",
      icon: "AI",
      color: "bg-purple-500"
    },
    {
      title: "App Development", 
      description: "Cross-platform compatibility, cloud solutions development, mobile application that's in development.",
      icon: "App",
      color: "bg-blue-500"
    },
    {
      title: "Web development",
      description: "Tailored e-commerce solutions, and built with responsive design and web application development.",
      icon: "Web", 
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We can take custom services that meet your needs and all the level of things to create 
            your next project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="bg-card rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  {/* Service illustration */}
                  <div className="relative h-32 flex items-center justify-center">
                    <div className="relative">
                      {/* Network/connection lines */}
                      <svg className="w-24 h-24 text-muted-foreground/20" viewBox="0 0 100 100">
                        <path d="M20,50 L40,30 L60,50 L80,30" stroke="currentColor" strokeWidth="1" fill="none" />
                        <path d="M20,70 L40,50 L60,70 L80,50" stroke="currentColor" strokeWidth="1" fill="none" />
                        <circle cx="20" cy="50" r="2" fill="currentColor" />
                        <circle cx="40" cy="30" r="2" fill="currentColor" />
                        <circle cx="60" cy="50" r="2" fill="currentColor" />
                        <circle cx="80" cy="30" r="2" fill="currentColor" />
                      </svg>
                      
                      {/* Center icon */}
                      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 ${service.color} rounded-full flex items-center justify-center text-white font-bold`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating icon in corner */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                F
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;