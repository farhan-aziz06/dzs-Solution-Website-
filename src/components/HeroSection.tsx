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
    <section className="relative bg-white min-h-screen px-6 py-9">
      {/* Background with he.svg behind gradient.svg - now with rounded corners */}
      <div className="absolute inset-6 rounded-3xl overflow-hidden">
        <img
          src="/he.svg"
          alt=""
          className="absolute w-full h-full object-cover rounded-3xl"
          style={{ top: "-2px", left: "0", right: "0", bottom: "0.50px" }}
        />
        <img
          src="/Gradient.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-46 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh] pt-40">
          {/* Left side - Text content with slide up animation */}
          <div
            className={`space-y-4 transform transition-all duration-1000 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            <h1 className="text-[36px] font-semibold text-white leading-tight">
              Your trusted partner for guaranteed software delivery
            </h1>

            <p className="text-[14px] font-normal text-white/90 leading-relaxed max-w-lg">
              Combining advanced technology and decades of industry insight, we design and develop
              bespoke full-cycle solutions tailored to deliver your unique software vision.
            </p>

            <div className="pt-4">
              <a
                href="/contact"
                className="group bg-white hover:bg-gray-50 text-gray-900 font-medium text-[14px] px-4 py-1.5 rounded-full flex items-center justify-between w-[190px] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span className="flex-grow text-left ml-3">Get in contact</span>
                <img
                  src="/arrow.svg"
                  alt="Arrow"
                  className="w-9 h-9 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Right side - Reviews card with slide from left animation and delay */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className={`bg-white rounded-3xl p-2.5 w-full max-w-[400px] mt-8 lg:mt-0 lg:absolute lg:w-[400px] lg:bottom-[-195px] lg:right-[-20px] transform transition-all duration-1000 ease-out ${
                isLoaded ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center space-x-2.5">
                <div className="flex -space-x-5">
                  <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden z-30">
                    <img src="/girl1.svg" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden z-20">
                    <img src="/boy.svg" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden z-10">
                    <img src="/girl.svg" alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-gray-400 text-[11px] leading-relaxed mb-1">
                    Real stories. Real results. Hear what our clients have to say.
                  </p>
                  <a
                    href="/about#client-reviews"
                    className="text-black hover:text-gray-700 text-xs font-semibold transition-colors duration-200 flex items-center space-x-1"
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