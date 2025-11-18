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
        {/* Aesthetic dual-card layout replacing static images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Delivery snapshot for tech services */}
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-5 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
              What we've shipped
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              A snapshot of our delivery across web, mobile, cloud and AI.
            </p>
            <div className="rounded-2xl bg-gray-50/70 border border-gray-200 p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* metric tiles */}
                <div className="rounded-xl bg-white border border-gray-200 overflow-hidden p-4">
                  <div className="text-3xl font-semibold text-gray-900">Prep Genius</div>
                  <div className="text-xs text-gray-600 mt-1">Our tech products launched</div>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 overflow-hidden p-4">
                  <div className="text-3xl font-semibold text-gray-900">7+</div>
                  <div className="text-xs text-gray-600 mt-1">Apps, Websites, Admin Panel & Automations delivered</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Currently</div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs border border-teal-200">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500" /> 5 active projects
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Stacks</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs border border-sky-200">React</span>
                    
                    <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs border border-sky-200">React Native</span>
                    <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-700 text-xs border border-gray-200">Next.js</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-200">Node</span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs border border-amber-200">Python</span>
                    <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs border border-indigo-200">AWS</span>
                    <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-700 text-xs border border-gray-200">Flutter</span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs border border-amber-200">n8n</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clients & engagement metrics */}
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-5 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
              Who we partner with
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Product teams and founders who value speed, quality and outcomes.
            </p>
            <div className="rounded-2xl bg-gray-50/70 border border-gray-200 p-4">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full bg-sky-400/90 border-2 border-white" />
                  <span className="w-7 h-7 rounded-full bg-indigo-400/90 border-2 border-white" />
                  <span className="w-7 h-7 rounded-full bg-emerald-400/90 border-2 border-white" />
                </div>
                <span className="text-xs text-gray-700 font-medium">Clients</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="rounded-xl bg-white border border-gray-200 px-3 py-2 text-xs text-gray-700">
                  2 retainer clients
                </div>
                <div className="rounded-xl bg-white border border-gray-200 px-3 py-2 text-xs text-gray-700">
                  95% on‑time delivery
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white border border-gray-200 px-3 py-2 text-xs text-gray-700">
                  5 current projects
                </div>
                <div className="rounded-xl bg-white border border-gray-200 px-3 py-2 text-xs text-gray-700">
                  99.9% uptime SLAs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;