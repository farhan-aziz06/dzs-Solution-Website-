import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-12 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 mb-16">
          {/* Icon - top left */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 border-2 border-white relative">
              <div className="absolute top-1 left-1 w-2 h-2 bg-white" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-white" />
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-white" />
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-white" />
            </div>
          </div>

          {/* Three columns of links */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 lg:gap-20 flex-1">
            {/* The Good */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">The Good</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automations</a></li>
              </ul>
            </div>

            {/* The Boring */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">The Boring</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/project" className="hover:text-white transition-colors">Projects</a></li>
              </ul>
            </div>

            {/* The Cool */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">The Cool</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                {/* <li><a href="#" className="hover:text-white transition-colors">Fiverr</a></li> */}
                <li><a href="https://www.linkedin.com/in/farhan-aziz-921337240/" className="hover:text-white transition-colors">LinkedIn</a></li>
                {/* <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Upwork</a></li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* Large DZS text at bottom */}
        <div className="mt-8 lg:mt-12">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-white leading-none">
            DZS SOLUTIONS.
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;