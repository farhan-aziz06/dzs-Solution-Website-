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
    <section className="relative bg-white min-h-screen px-4 sm:px-6 py-6 sm:py-9">
      {/* Background with he.svg behind gradient.svg - now with rounded corners */}
      <div className="absolute inset-4 sm:inset-6 rounded-2xl sm:rounded-3xl overflow-hidden">
        <img
          src="/he.svg"
          alt=""
          className="absolute w-full h-full object-cover rounded-2xl sm:rounded-3xl"
          style={{ top: "-2px", left: "0", right: "0", bottom: "0.50px" }}
        />
        <img
          src="/Gradient.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl"
        />
      </div>

      {/* Main content container with relative positioning for consistent layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-32 lg:py-46 relative z-10">
        <div className="relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] pt-8 sm:pt-20 md:pt-32 lg:pt-40">
          {/* Content wrapper to maintain consistent spacing ratios */}
          <div className="relative w-full h-full flex flex-col justify-between">
            {/* Left side - Text content with slide up animation */}
            <div
              className={`max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6 transform transition-all duration-1000 ease-out ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white leading-tight">
                Your trusted partner for guaranteed software delivery
              </h1>

              <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-normal text-white/90 leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
                Combining advanced technology and decades of industry insight, we design and develop
                bespoke full-cycle solutions tailored to deliver your unique software vision.
              </p>

              <div className="pt-2 sm:pt-4">
                <a
                  href="/contact"
                  className="group bg-white hover:bg-gray-50 text-gray-900 font-medium text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center justify-between w-40 sm:w-44 lg:w-48 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <span className="flex-grow text-left ml-2">Get in contact</span>
                  <img
                    src="/arrow.svg"
                    alt="Arrow"
                    className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Reviews card - Desktop positioning (lg and up) - Adjusted position */}
            <div className="hidden lg:block">
              <div
                className={`absolute transform transition-all duration-1000 ease-out delay-300 ${
                  isLoaded ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{
                  bottom: '-135px',
                  right: '-25px',
                }}
              >
                <div
                  className="bg-white rounded-2xl lg:rounded-3xl p-2 lg:p-2.5 xl:p-3 shadow-xl"
                  style={{
                    width: 'clamp(320px, 28vw, 460px)',
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="flex items-center space-x-2 lg:space-x-2.5 xl:space-x-3">
                    <div className="flex -space-x-3 lg:-space-x-4 xl:-space-x-5">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full shadow-lg overflow-hidden z-30">
                        <img src="/girl1.svg" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full shadow-lg overflow-hidden z-20">
                        <img src="/boy.svg" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full shadow-lg overflow-hidden z-10">
                        <img src="/girl.svg" alt="User" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-400 text-xs lg:text-sm xl:text-base leading-relaxed mb-1">
                        Real stories. Real results. Hear what our clients have to say.
                      </p>
                      <a
                        href="/about#client-reviews"
                        className="text-black hover:text-gray-700 text-xs lg:text-sm xl:text-base font-semibold transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>See Reviews</span>
                        <img src="/arrow2.svg" alt="" className="w-1.5 h-1.5 lg:w-2 lg:h-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile and Tablet version of review card (below lg) */}
          <div className="lg:hidden mt-8 sm:mt-12 md:mt-16">
            <div
              className={`bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] mx-auto transform transition-all duration-1000 ease-out delay-300 ${
                isLoaded ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center space-x-2 sm:space-x-2.5">
                <div className="flex -space-x-3 sm:-space-x-4 md:-space-x-5">
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

                <div className="flex-1">
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-1">
                    Real stories. Real results. Hear what our clients have to say.
                  </p>
                  <a
                    href="/about#client-reviews"
                    className="text-black hover:text-gray-700 text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>See Reviews</span>
                    <img src="/arrow2.svg" alt="" className="w-1.5 h-1.5" />
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