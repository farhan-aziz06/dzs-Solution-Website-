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
    <section className="relative bg-white md:min-h-[84vh] min-h-[80vw] px-2 sm:px-6 py-4 sm:py-9">
      {/* Background image with gradient */}
      <div className="absolute inset-2 sm:inset-6 md:h-full rounded-3xl overflow-hidden lg:w-[95vw] md:w-[93vw] w-[93vw] h-[80vw]">
        <div className="">
          <img
            src="/main-hero.svg"
            alt=""
            className="absolute inset-0 object-cover lg:w-[95vw] md:w-[93vw] w-[93vw] h-[80vw] md:h-full"
          />
          <img
            src="/Gradient.svg"
            alt=""
            className="absolute inset-0 object-cover lg:w-[95vw] md:w-[93vw] w-[93vw] h-[80vw] md:h-full"
          />
        </div>
        {/* Content */}
        <div
          className={`absolute transform transition-all duration-1000 ease-out
            ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            sm:left-[clamp(0.75rem,2vw,2.5rem)]
            sm:bottom-[clamp(1rem,3vw,3rem)]
            sm:max-w-[clamp(250px,45%,550px)]
            flex flex-col
            sm:items-start sm:text-left
            max-sm:inset-0 max-sm:flex max-sm:items-start max-sm:justify-center max-sm:text-left max-sm:px-4`}
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
            className="inline-flex items-center bg-white hover:bg-gray-100 text-gray-900 font-medium  
            pr-[clamp(4rem,2vw,1.5rem)] pl-3 py-[clamp(.9rem,0.3vw,0.25rem)] 
            rounded-full mt-[clamp(2rem,2vw,1.5rem)] shadow-md 
            hover:shadow-lg transition-all duration-200 relative"
            
            style={{ fontSize: "clamp(0.85rem, 1vw + 0.5rem, 1rem)" }}
          >
            Get in contact 
            <img
              src="/arrow.svg"
              alt="Arrow"
              className="absolute right-1"
              style={{
                width: "clamp(2.5rem, 3vw, 3rem)",
                height: "clamp(2.5rem, 3vw, 3rem)",
              }}
            />
          </a>

          {/* Review card for mobile */}
          {/* <div className="hidden max-sm:mt-4 max-sm:flex">
            <div className="bg-white rounded-2xl shadow-xl p-3 flex items-center space-x-3 w-[90%]">
              <div className="flex -space-x-3 flex-shrink-0">
                {["/Farhan1.webp", "/boy.svg", "/girl.svg"].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="User"
                    className="rounded-full shadow-lg object-cover w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
          </div> */}
        </div>
      </div>

      {/* Review card for desktop */}
      <div
        className={`absolute xl:bottom-[clamp(-1.5rem,1vw,-1.5rem)]  md:bottom-[clamp(-1rem,1vw,-1.5rem)] bottom-[clamp(-.5rem,1vw,-1.5rem)] transform transition-all duration-1000 ease-out delay-300
          ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
        style={{
          right: "max(3%, -.5rem)",
        }}
      >
        <div
          className="bg-white rounded-3xl w-[20vw] xl:w-[31vw] lg:w-[28vw] md:w-[22vw] shadow-2xl 
          px-[clamp(1rem,3vw,0.75rem)] py-3 xl:py-3 lg:py-2 md:py-1 
          flex md:flex-col sm:block items-center md:items-start"
          
        >
          <div className=" -space-x-2 flex">
            {["/Farhan1.webp", "/boy.svg", "/girl.svg"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="User"
                className="rounded-full shadow-lg object-cover w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            ))}
          </div>
          <div className="pt-1  hidden md:block">
            <p
              className="text-gray-400 leading-relaxed "
              style={{
                fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)",
                lineHeight: "1.3",
              }}
            >
              Real stories. Real results. Hear what our clients say.
            </p>
            <a
              href="/about#client-reviews"
              className="text-black hover:text-gray-700 font-semibold flex items-center space-x-1"
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