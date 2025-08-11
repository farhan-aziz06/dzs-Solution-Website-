import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-white min-h-screen px-2 xs:px-4 sm:px-6 py-4 xs:py-6 sm:py-9">
      {/* Background with he.svg behind gradient.svg - fully responsive rounded corners */}
      <div className="absolute inset-2 xs:inset-4 sm:inset-6 rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden">
        <img
          src="/he.svg"
          alt=""
          className="absolute w-full h-full object-cover object-center rounded-xl xs:rounded-2xl sm:rounded-3xl transition-all duration-300"
          style={{ top: "-2px", left: "0", right: "0", bottom: "0.50px" }}
        />
        <img
          src="/Gradient.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center rounded-xl xs:rounded-2xl sm:rounded-3xl transition-all duration-300"
        />
      </div>

      {/* Main content container with fluid responsive padding */}
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 py-8 xs:py-12 sm:py-20 md:py-32 lg:py-46 relative z-10">
        {/* Mobile/Phone layout - centered content */}
        <div className="sm:hidden relative min-h-[70vh] flex flex-col items-center justify-center text-center space-y-4 xs:space-y-6">
          {/* Text content with enhanced fluid spacing */}
          <div
            className={`max-w-[280px] xs:max-w-xs space-y-3 xs:space-y-4 transform transition-all duration-1000 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            <h1 className="text-lg xs:text-xl font-semibold text-white leading-tight tracking-tight">
              Your trusted partner for guaranteed software delivery
            </h1>

            <p className="text-xs xs:text-sm font-normal text-white/90 leading-relaxed tracking-wide">
              Combining advanced technology and decades of industry insight, we design and develop
              bespoke full-cycle solutions tailored to deliver your unique software vision.
            </p>

            <div className="pt-1 xs:pt-2">
              <a
                href="/contact"
                className="group bg-white hover:bg-gray-50 text-gray-900 font-medium text-xs xs:text-sm px-2.5 xs:px-3 py-1.5 rounded-full flex items-center justify-between w-36 xs:w-40 transition-all duration-200 shadow-md hover:shadow-lg mx-auto"
              >
                <span className="flex-grow text-left ml-1 xs:ml-2">Get in contact</span>
                <img
                  src="/arrow.svg"
                  alt="Arrow"
                  className="w-5 h-5 xs:w-6 xs:h-6 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Review card for mobile - enhanced responsive sizing */}
          <div className="mt-6 xs:mt-8 w-full px-2">
            <div
              className={`bg-white rounded-xl xs:rounded-2xl p-1.5 xs:p-2 w-full max-w-[260px] xs:max-w-[280px] mx-auto transform transition-all duration-1000 ease-out delay-300 ${
                isLoaded ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center space-x-1.5 xs:space-x-2">
                <div className="flex -space-x-2 xs:-space-x-3">
                  <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full shadow-lg overflow-hidden z-30">
                    <img src="/girl1.svg" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full shadow-lg overflow-hidden z-20">
                    <img src="/boy.svg" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full shadow-lg overflow-hidden z-10">
                    <img src="/girl.svg" alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-xs leading-relaxed mb-0.5 xs:mb-1">
                    Real stories. Real results. Hear what our clients have to say.
                  </p>
                  <a
                    href="/about#client-reviews"
                    className="text-black hover:text-gray-700 text-xs font-semibold transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>See Reviews</span>
                    <img src="/arrow2.svg" alt="" className="w-1.5 h-1.5 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet and larger screens layout - enhanced fluid scaling */}
        <div className="hidden sm:block relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] pt-6 sm:pt-8 md:pt-16 lg:pt-24 xl:pt-32 2xl:pt-40">
          <div className="relative w-full h-full flex flex-col justify-between">
            {/* Left side - Text content with enhanced typography scaling */}
            <div
              className={`max-w-[90vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 transform transition-all duration-1000 ease-out ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white leading-tight tracking-tight">
                Your trusted partner for guaranteed software delivery
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-white/90 leading-relaxed tracking-wide max-w-[85%] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                Combining advanced technology and decades of industry insight, we design and develop
                bespoke full-cycle solutions tailored to deliver your unique software vision.
              </p>

              <div className="pt-2 sm:pt-3 md:pt-4 lg:pt-5">
                <a
                  href="/contact"
                  className="group bg-white hover:bg-gray-50 text-gray-900 font-medium text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full flex items-center justify-between w-[clamp(160px,15vw,200px)] sm:w-[clamp(180px,16vw,220px)] md:w-[clamp(200px,18vw,240px)] transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <span className="flex-grow text-left ml-2">Get in contact</span>
                  <img
                    src="/arrow.svg"
                    alt="Arrow"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform flex-shrink-0"
                  />
                </a>
              </div>
            </div>

            {/* Reviews card - Desktop positioning with enhanced fluid sizing */}
            <div className="hidden lg:block">
              <div
                className={`absolute transform transition-all duration-1000 ease-out delay-300 ${
                  isLoaded ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{
                  bottom: '-135px',
                  right: 'clamp(-40px, -3vw, -25px)',
                }}
              >
                <div
                  className="bg-white rounded-2xl lg:rounded-3xl p-2 lg:p-2.5 xl:p-3 2xl:p-4 shadow-xl"
                  style={{
                    width: 'clamp(300px, 25vw + 20px, 480px)',
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="flex items-center space-x-2 lg:space-x-2.5 xl:space-x-3 2xl:space-x-4">
                    <div className="flex -space-x-2 lg:-space-x-3 xl:-space-x-4 2xl:-space-x-5">
                      <div className="w-[clamp(40px,3.5vw,56px)] h-[clamp(40px,3.5vw,56px)] rounded-full shadow-lg overflow-hidden z-30">
                        <img src="/girl1.svg" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-[clamp(40px,3.5vw,56px)] h-[clamp(40px,3.5vw,56px)] rounded-full shadow-lg overflow-hidden z-20">
                        <img src="/boy.svg" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-[clamp(40px,3.5vw,56px)] h-[clamp(40px,3.5vw,56px)] rounded-full shadow-lg overflow-hidden z-10">
                        <img src="/girl.svg" alt="User" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-[clamp(12px,1.2vw,16px)] leading-relaxed mb-1">
                        Real stories. Real results. Hear what our clients have to say.
                      </p>
                      <a
                        href="/about#client-reviews"
                        className="text-black hover:text-gray-700 text-[clamp(12px,1.2vw,16px)] font-semibold transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>See Reviews</span>
                        <img src="/arrow2.svg" alt="" className="w-[clamp(6px,0.6vw,8px)] h-[clamp(6px,0.6vw,8px)] flex-shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet version - enhanced responsive sizing */}
          <div className="sm:block md:block lg:hidden mt-8 sm:mt-12 md:mt-16">
            <div
              className={`bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 w-[min(90vw,400px)] sm:w-[min(85vw,420px)] md:w-[min(80vw,450px)] mx-auto transform transition-all duration-1000 ease-out delay-300 ${
                isLoaded ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center space-x-2 sm:space-x-2.5 md:space-x-3">
                <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-lg overflow-hidden z-30">
                    <img src="/girl1.svg" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-lg overflow-hidden z-20">
                    <img src="/boy.svg" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-lg overflow-hidden z-10">
                    <img src="/girl.svg" alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mb-1">
                    Real stories. Real results. Hear what our clients have to say.
                  </p>
                  <a
                    href="/about#client-reviews"
                    className="text-black hover:text-gray-700 text-xs sm:text-sm md:text-base font-semibold transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>See Reviews</span>
                    <img src="/arrow2.svg" alt="" className="w-1.5 h-1.5 sm:w-2 sm:h-2 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;