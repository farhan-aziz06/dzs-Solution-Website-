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
  };

  return (
    <section
      ref={sectionRef}
      className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden pb-8 sm:pb-12 lg:pb-16 pt-8 sm:pt-12 lg:pt-16"
    >
      <div className="w-full">
        {/* Header Animation - Matching Services page alignment */}
        <div
          className={`mb-4 sm:mb-6 lg:mb-8 transition-all duration-1000 ease-out ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-20 opacity-0'
          }`}
        >
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 transition-all duration-1000 delay-100">
              Our Services
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed transition-all duration-1000 delay-200">
              We craft bold digital solutions that drive growth. From concept to
              launch, solving real-world problems with precision and creativity.
            </p>
          </div>
        </div>

        {/* Services Image - Natural responsive scaling like project cards */}
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="transition-all duration-1000 delay-300 w-full">
            {/* Desktop Image - Natural scaling */}
            <img
              src="/services.svg"
              alt="Our Services"
              className="hidden sm:block w-full h-auto object-contain"
            />
            
            {/* Mobile Image - Natural scaling with centering */}
            <div className="block sm:hidden flex justify-center">
              <img
                src="/phoneservices.svg"
                alt="Our Services - Mobile"
                className="w-full h-auto object-contain max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;