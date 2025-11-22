import { useState, useEffect, useRef } from "react";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const founder = {
    name: "Farhan Aziz",
    role: "Founder & CEO",
    image:
      "/Farhan1.webp",
    quote:
      "Building AI-powered SaaS products that turn complex processes into simple, scalable solutions.",
    bio:
      "Founder & tech entrepreneur specializing in mobile apps, web platforms, SaaS MVPs, and AI automation."};

  const teamMembers = [
    {
      name: "Umar Nauman",
      role: "Head Of Gen AI & ML",
      image:
        "/umar1.webp",
    },
    {
      name: "Taha Ashfaq ",
      role: "Deasigns Head",
      image:
        "/taha.webp",
    },
    {
      name: "Hajirah Sultan",
      role: "Designs and Branding Expert",
      image:
        "/human.webp",
    },
    {
      name: "Areeba Aziz",
      role: "Sales & Marketing",
      image:
        "/human.webp",
    },
  ];

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
        rootMargin: "-10px",
        threshold: 0.1,
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
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3">
          Together we build, together we rise.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl lg:max-w-3xl leading-relaxed">
          We believe success is a shared journey. By working closely with our clients and team, we co-create solutions that elevate everyone involved fostering mutual growth, trust, and long-lasting impact.
        </p>
      </div>
      {/* Founder / CEO Section */}
      <div
        className={`bg-white border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 transform transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
        style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
      >
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="relative w-full lg:w-1/2 h-72 sm:h-96 lg:h-[520px] overflow-hidden">
            <img
              src={founder.image}
              alt={founder.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 sm:p-9 lg:p-12 flex flex-col justify-center gap-4 sm:gap-5">
            <p className="text-xs tracking-widest text-gray-500">OUR FOUNDER</p>
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              “{founder.quote}”
            </h3>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl">{founder.bio}</p>
            <div className="pt-1 sm:pt-2 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">SaaS • App Development • Web Development</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">AI • Ai Automation • Gen Ai</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">Sales & Marketing</span>
            </div>
            <div className="pt-3 sm:pt-4">
              <p className="text-gray-900 font-semibold text-sm sm:text-base">{founder.name}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{founder.role}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Team Section Header */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-none">
            Built by
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-gray-900 leading-none">
            a world-class team of experts
          </h2>
        </div>
        <div className="mt-4 sm:mt-6 max-w-3xl">
          <div className="flex items-start gap-3">
            <span className="text-gray-400 text-xs font-semibold tracking-widest">01</span>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Building projects of this quality is only possible thanks to our
              strong, world-class team and our
              experience in building customer service software.
            </p>
          </div>
        </div>
        <p className="mt-6 text-[10px] sm:text-xs tracking-widest text-gray-500">
          LEADERSHIP
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl border border-gray-200 overflow-hidden transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible
                ? `${index * 200}ms`
                : "0ms",
            }}
          >
            <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
            <div className="px-3 sm:px-4 py-3 sm:py-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 text-xs">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;