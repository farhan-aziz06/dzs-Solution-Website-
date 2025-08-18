import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-white min-h-screen px-2 sm:px-6 py-4 sm:py-9">
      {/* Background Container with Images and Review Card */}
      <div className="absolute inset-2 sm:inset-6 rounded-3xl overflow-hidden">
        {/* Background Images */}
        <img
          src="/he.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <img
          src="/Gradient.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Review Card - positioned relative to the background container */}
        <div
          className={`absolute z-20 transform transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{
            bottom: "clamp(3rem, 8vh, 6rem)",
            right: "clamp(1.5rem, 4vw, 3rem)",
            width: "clamp(240px, 22vw + 2rem, 400px)",
          }}
        >
          <div
            className="bg-white rounded-2xl shadow-xl flex items-center space-x-3"
            style={{
              padding: "clamp(0.75rem, 1.2vw, 1.4rem)",
            }}
          >
            <div className="flex -space-x-3 flex-shrink-0">
              {["/girl1.svg", "/boy.svg", "/girl.svg"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="User"
                  style={{
                    width: "clamp(2.2rem, 2.8vw, 3.5rem)",
                    height: "clamp(2.2rem, 2.8vw, 3.5rem)",
                  }}
                  className="rounded-full shadow-lg object-cover"
                />
              ))}
            </div>
            <div className="min-w-0 flex-1">
              <p
                className="text-gray-400"
                style={{
                  fontSize: "clamp(0.75rem, 1vw, 1.1rem)",
                  lineHeight: "1.3",
                }}
              >
                Real stories. Real results. Hear what our clients say.
              </p>
              <a
                href="/about#client-reviews"
                className="text-black hover:text-gray-700 font-semibold flex items-center space-x-1 mt-[clamp(0.4rem,0.6vw,0.7rem)]"
                style={{
                  fontSize: "clamp(0.75rem, 1vw, 1.1rem)",
                }}
              >
                <span>See Reviews</span>
                <img
                  src="/arrow2.svg"
                  alt=""
                  style={{
                    width: "clamp(0.6rem, 0.8vw, 1rem)",
                    height: "clamp(0.6rem, 0.8vw, 1rem)",
                  }}
                />
              </a>
            </div>
          </div> 
        </div>
      </div>

      {/* Text Content */}
      <div
        className={`absolute z-10 transform transition-all duration-1000 ease-out ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{
          left: "clamp(2rem, 8vw, 8rem)",
          bottom: "clamp(3rem, 15vh, 10rem)",
          width: "min(50%, 800px)",
        }}
      >
        <h1
          className="text-white font-semibold tracking-tight"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 4.2rem)",
            lineHeight: "1.1",
          }}
        >
          Your trusted partner for guaranteed software delivery
        </h1>
        <p
          className="text-white/90 mt-[clamp(1rem,2.5vw,2.5rem)]"
          style={{
            fontSize: "clamp(0.9rem, 1.4vw, 1.3rem)",
            lineHeight: "1.5",
          }}
        >
          Combining advanced technology and decades of industry insight, we
          design and develop bespoke full-cycle solutions tailored to deliver
          your unique software vision.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200 mt-[clamp(1.2rem,3vw,3rem)]"
          style={{
            fontSize: "clamp(0.9rem, 1.4vw, 1.2rem)",
            padding: "clamp(0.6rem, 1.2vw, 1rem) clamp(1.5rem, 3vw, 2.2rem)",
          }}
        >
          Get in contact
          <img
            src="/arrow.svg"
            alt="Arrow"
            className="ml-2"
            style={{
              width: "clamp(2rem, 3vw, 3rem)",
              height: "clamp(2rem, 3vw, 3rem)",
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;