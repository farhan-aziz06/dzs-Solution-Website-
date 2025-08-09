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
      className="py-16 px-6 bg-white overflow-hidden sm:py-16 sm:px-6 lg:py-16 lg:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Animation */}
        <div
          className={`mb-10 transition-all duration-1000 ease-out ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-20 opacity-0'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 transition-all duration-1000 delay-100">
            Our Services
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl transition-all duration-1000 delay-200">
            We craft bold digital solutions that drive growth. From concept to
            launch, solving real-world problems with precision and creativity.
          </p>
        </div>

        {/* Services Image - Centered and Bigger */}
        <div
          className={`flex justify-center transition-all duration-1000 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="transition-all duration-1000 delay-300 w-full max-w-4xl">
            {/* Desktop Image */}
            <img
              src="/services.svg"
              alt="Our Services"
              className="hidden sm:block w-full h-auto object-contain mx-auto"
            />
            
            {/* Mobile Image */}
            <img
              src="/phoneservices.svg"
              alt="Our Services - Mobile"
              className="block sm:hidden w-full h-auto object-contain mx-auto max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;