import ContactSection from '@/components/ContactSection';
import NameInfo from '@/components/Info';
import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Background Image */}
      <div className="mt-1 sm:mt-2 lg:mt-4 px-2 sm:px-4 lg:px-6">
        <div
          className="rounded-3xl overflow-hidden bg-white"
          style={{
            backgroundImage: "url(/bg.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section className="pt-4 sm:pt-4 lg:pt-8 pb-2 sm:pb-4 lg:pb-4">
            <div
              ref={headerRef}
              className={`mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-6 transform transition-all duration-700 ease-out ${
                isHeaderVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="w-full text-left">
                <h1 className="ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 mt-4 sm:mt-4 lg:mt-4">
                  Contact Us
                </h1>
                <p className="ml-2 text-gray-400 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-2xl leading-relaxed">
                  We craft bold digital solutions that drive growth. From concept to launch, solving real-world problems with precision and creativity.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section - Exactly like home page */}
      <div className="flex flex-col items-center px-4 md:px-12 lg:px-8 xl:px-8 py-4">
        <div className="py-4 text-center">
          <h1 className="font-recoleta md:p-8 text-3xl md:text-5xl font-normal">
            Ready to <span className="text-[#DF56FE]">build</span> the future with{" "}
            <span className="text-[#5956E9]">Website</span>?
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 md:gap-4 xl:gap-0 w-full justify-center">
          <NameInfo
            name="Farhan"
            role="Solution Specialist"
            profileImage="/girl1.svg"
            email="teamdzssolutions@dzssolutions.com"
            ctaHref="#"
          />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Contact;