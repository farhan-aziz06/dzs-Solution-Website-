import { useState, useEffect, useRef } from "react";

const VisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "-100px 0px -100px 0px",
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`mb-10 sm:mb-16 lg:mb-20 mt-8 sm:mt-12 lg:mt-16 transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3">
          From Vision to Value
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl lg:max-w-3xl leading-relaxed">
          We craft smart digital solutions with a focus on AI, web, and app development. From idea to launch, we build products that drive growth, solve real problems, and stand out in today's digital world.
        </p>
      </div>
      <div className="transition-all duration-1000 delay-400">
        <div className="w-full">
          <img
            src="/pro.svg"
            alt="Professional services"
            className="w-full h-auto object-contain transition-all duration-500 hidden sm:block"
          />
          <img
            src="/mobilemetrics.svg"
            alt="Mobile metrics"
            className="w-full h-auto object-contain transition-all duration-500 block sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;