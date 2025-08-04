const ServicesSection = () => {
  const services = [
    {
      title: "Artificial Intelligence",
      description: "We develop iOS and Android apps using cross-platform technologies for wider reach and consistent performance, enhanced with AI and ML integration for smarter user experiences.",
      icon: "AI",
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-100 to-pink-100",
      iconBg: "from-purple-400 to-purple-600"
    },
    {
      title: "App Development", 
      description: "iOS & Android app development with seamless cross-platform compatibility. Smart solutions powered by AI integration.",
      icon: "App",
      color: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-100 to-purple-100",
      iconBg: "from-blue-400 to-purple-500"
    },
    {
      title: "Web development",
      description: "We create custom websites and web apps, offer tailored e-commerce solutions, and build with CMS and no-code platforms for faster, flexible development.",
      icon: "Web", 
      color: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-100 to-purple-100",
      iconBg: "from-pink-400 to-purple-500"
    }
  ];

  // Generate network nodes for background pattern
  const generateNetworkPattern = (serviceIndex) => {
    const nodes = [];
    const connections = [];
    
    // Create nodes in a grid-like pattern
    for (let i = 0; i < 12; i++) {
      const x = (i % 4) * 30 + 10 + Math.random() * 10;
      const y = Math.floor(i / 4) * 30 + 10 + Math.random() * 10;
      nodes.push({ x, y, id: i });
    }
    
    // Create connections between nearby nodes
    nodes.forEach((node, index) => {
      nodes.forEach((otherNode, otherIndex) => {
        if (index !== otherIndex) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < 35 && Math.random() > 0.6) {
            connections.push({ from: node, to: otherNode });
          }
        }
      });
    });
    
    return { nodes, connections };
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We craft bold digital solutions that drive growth. From concept to launch, 
            solving real-world problems with precision and creativity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { nodes, connections } = generateNetworkPattern(index);
            
            return (
              <div key={index} className="group">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.bgGradient} opacity-10 rounded-full -translate-y-8 translate-x-8`}></div>
                  
                  {/* Service icon with gradient background */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg">{service.icon}</span>
                    </div>
                    
                    {/* Floating background text */}
                    <div className="absolute -top-2 -right-2 opacity-5 pointer-events-none">
                      <span className="text-6xl font-black text-gray-900">
                        {service.title.split(' ')[0].toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Network pattern illustration */}
                  <div className="relative mt-8 h-32 overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120">
                      {/* Connections */}
                      {connections.map((connection, idx) => (
                        <line
                          key={`connection-${idx}`}
                          x1={connection.from.x}
                          y1={connection.from.y}
                          x2={connection.to.x}
                          y2={connection.to.y}
                          stroke="url(#gradient)"
                          strokeWidth="1"
                          opacity="0.6"
                          className="animate-pulse"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        />
                      ))}
                      
                      {/* Nodes */}
                      {nodes.map((node, idx) => (
                        <circle
                          key={`node-${idx}`}
                          cx={node.x}
                          cy={node.y}
                          r={idx === 5 ? "4" : "2"}
                          fill={idx === 5 ? "url(#nodeGradient)" : "rgba(147, 51, 234, 0.6)"}
                          className="animate-pulse"
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        />
                      ))}
                      
                      {/* Gradients */}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
                        </linearGradient>
                        <radialGradient id="nodeGradient">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </radialGradient>
                      </defs>
                    </svg>
                    
                    {/* Central service indicator */}
                    <div className="absolute bottom-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.iconBg} rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            );
          })}
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