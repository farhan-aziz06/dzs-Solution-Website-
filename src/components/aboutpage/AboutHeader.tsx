import { useState, useEffect } from "react";

const AboutHeader = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
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
            className={`mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-6 transform transition-all duration-700 ease-out ${
              headerVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="w-full text-left">
              <h1 className="ml-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 mt-4 sm:mt-4 lg:mt-4">
                About us
              </h1>
              <p className="ml-3 text-gray-400 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-1xl leading-relaxed">
                We craft smart digital solutions with a focus on AI, web,
                and app development. From idea to launch, we build products
                that drive growth, solve real problems, and stand out in
                today's digital world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutHeader;