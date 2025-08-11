import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-white min-h-screen px-2 sm:px-6 py-4 sm:py-9">
      {/* Background image with gradient */}
      <div className="absolute inset-2 sm:inset-6 rounded-3xl overflow-hidden">
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

        {/* Content */}
        <div
          className={`absolute transform transition-all duration-1000 ease-out
            ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            sm:left-[clamp(0.75rem,2vw,2.5rem)]
            sm:bottom-[clamp(1rem,3vw,3rem)]
            sm:max-w-[clamp(250px,45%,550px)]
            flex flex-col
            sm:items-start sm:text-left
            max-sm:inset-0 max-sm:flex max-sm:items-center max-sm:justify-center max-sm:text-center max-sm:px-4`}
        >
          <h1
            className="text-white font-semibold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(1.3rem, 2.2vw + 0.8rem, 2.8rem)",
              lineHeight: "1.15",
            }}
          >
            Your trusted partner for guaranteed software delivery
          </h1>
          <p
            className="text-white/90 mt-[clamp(0.75rem,1.5vw,1.25rem)] leading-relaxed"
            style={{
              fontSize: "clamp(0.75rem, 0.8vw + 0.5rem, 1rem)",
              lineHeight: "1.4",
            }}
          >
            Combining advanced technology and decades of industry insight, we design and develop bespoke full-cycle solutions tailored to deliver your unique software vision.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 font-medium px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.15rem,0.3vw,0.25rem)] rounded-full mt-[clamp(1rem,2vw,1.5rem)] shadow-md hover:shadow-lg transition-all duration-200"
            style={{ fontSize: "clamp(0.85rem, 1vw + 0.5rem, 1rem)" }}
          >
            Get in contact
            <img
              src="/arrow.svg"
              alt="Arrow"
              className="ml-2"
              style={{
                width: "clamp(2.5rem, 3vw, 3rem)",
                height: "clamp(2.5rem, 3vw, 3rem)",
              }}
            />
          </a>

          {/* Review card for mobile */}
          <div className="hidden max-sm:mt-4 max-sm:flex">
            <div className="bg-white rounded-2xl shadow-xl p-3 flex items-center space-x-3 w-[90%]">
              <div className="flex -space-x-3 flex-shrink-0">
                {["/girl1.svg", "/boy.svg", "/girl.svg"].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="User"
                    style={{
                      width: "clamp(2.5rem, 5vw, 2.8rem)",
                      height: "clamp(2.5rem, 5vw, 2.8rem)",
                    }}
                    className="rounded-full shadow-lg object-cover"
                  />
                ))}
              </div>
              <div className="min-w-0">
                <p
                  className="text-gray-400 leading-relaxed"
                  style={{
                    fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)",
                    lineHeight: "1.3",
                  }}
                >
                  Real stories. Real results. Hear what our clients say.
                </p>
                <a
                  href="/about#client-reviews"
                  className="text-black hover:text-gray-700 font-semibold flex items-center space-x-1 mt-1"
                  style={{
                    fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)",
                  }}
                >
                  <span>See Reviews</span>
                  <img
                    src="/arrow2.svg"
                    alt=""
                    style={{
                      width: "clamp(0.4rem, 0.6vw, 0.5rem)",
                      height: "clamp(0.4rem, 0.6vw, 0.5rem)",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review card for desktop */}
      <div
        className={`absolute transform transition-all duration-1000 ease-out delay-300 hidden sm:block
          ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
        style={{
          bottom: "clamp(1rem, 2vw, 2rem)",
          right: "max(4%, 2rem)",
        }}
      >
        <div
          className="bg-white rounded-2xl shadow-xl p-[clamp(0.5rem,1vw,0.75rem)] flex items-center space-x-3"
          style={{
            width: "clamp(300px, 30vw, 500px)",
          }}
        >
          <div className="flex -space-x-3 flex-shrink-0">
            {["/girl1.svg", "/boy.svg", "/girl.svg"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="User"
                style={{
                  width: "clamp(2.5rem, 5vw, 2.8rem)",
                  height: "clamp(2.5rem, 5vw, 2.8rem)",
                }}
                className="rounded-full shadow-lg object-cover"
              />
            ))}
          </div>
          <div className="min-w-0">
            <p
              className="text-gray-400 leading-relaxed"
              style={{
                fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)",
                lineHeight: "1.3",
              }}
            >
              Real stories. Real results. Hear what our clients say.
            </p>
            <a
              href="/about#client-reviews"
              className="text-black hover:text-gray-700 font-semibold flex items-center space-x-1 mt-1"
              style={{
                fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)",
              }}
            >
              <span>See Reviews</span>
              <img
                src="/arrow2.svg"
                alt=""
                style={{
                  width: "clamp(0.4rem, 0.6vw, 0.5rem)",
                  height: "clamp(0.4rem, 0.6vw, 0.5rem)",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;