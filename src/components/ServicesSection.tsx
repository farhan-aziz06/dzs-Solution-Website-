import React, { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleServiceClick = (service) => {
    console.log(`Clicked on ${service.title}`);
    // Add your click handler logic here
  };

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Animation - Slide from left with bounce */}
        <div className={`mb-10 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-20 opacity-0'
        }`}>
          <h2 className="text-4xl font-semibold text-gray-900 mb-4 transition-all duration-1000 delay-100">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl transition-all duration-1000 delay-200">
            We craft bold digital solutions that drive growth. From concept to launch, 
            solving real-world problems with precision and creativity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services Image - Slide from bottom with bounce */}
          <div className={`flex justify-center transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            <div className={`transition-all duration-1000 delay-200`}>
              {/* Desktop Image */}
<img 
  src="/services.svg" 
  alt="Our Services"
  className="hidden sm:block w-full max-w-none h-auto object-contain transition-all duration-500"
  style={{ width: '1100px', height: 'auto', marginLeft: '630px' }} // Adjust value as needed
/>

              
              {/* Mobile Image */}
              <img 
                src="/phoneservices.svg" 
                alt="Our Services - Mobile"
                className="block sm:hidden w-full max-w-xs h-auto object-contain transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        @keyframes bounce-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          50% {
            transform: translateY(-10px);
            opacity: 1;
          }
          70% {
            transform: translateY(5px);
          }
          85% {
            transform: translateY(-3px);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 1s ease-out;
        }

        .animate-bounce-up {
          animation: bounce-up 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;