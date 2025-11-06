import { useState, useEffect, useRef } from "react";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const founder = {
    name: "Elena Vallin",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=640&h=640&fit=crop&crop=faces",
    quote:
      "Building human-centered AI that turns complex data into simple decisions.",
    bio:
      "Ex-CTO turned founder with 15+ years in cloud, ML ops and product. Led teams shipping secure, scalable platforms used by millions.",
  };

  const teamMembers = [
    {
      name: "Fergal Reid",
      role: "Chief AI Officer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=640&h=640&fit=crop&crop=faces",
    },
    {
      name: "Brian McDonnell",
      role: "Director, Engineering",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=640&h=640&fit=crop&crop=faces",
    },
    {
      name: "Mario Kostelac",
      role: "Principal ML Engineer",
      image:
        "https://images.unsplash.com/photo-1541534401786-2077eed87a72?w=640&h=640&fit=crop&crop=faces",
    },
    {
      name: "Alexey Tarasov",
      role: "Senior Manager, ML Engineering",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=640&h=640&fit=crop&crop=faces",
    },
    {
      name: "Fedor Parfenov",
      role: "Staff Machine Learning Scientist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=640&h=640&fit=crop&crop=faces",
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
          We believe success is a shared journey. By working closely with our clients and team, we co-create solutions that elevate everyone involved—fostering mutual growth, trust, and long-lasting impact.
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
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">Kubernetes • Cloud</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">Applied ML • MLOps</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">Security by Design</span>
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
            a world-class team of AI experts
          </h2>
        </div>
        <div className="mt-4 sm:mt-6 max-w-3xl">
          <div className="flex items-start gap-3">
            <span className="text-gray-400 text-xs font-semibold tracking-widest">01</span>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Building models of this quality is only possible thanks to our
              50-person-strong, world-class AI group and our decade-long
              experience in building customer service software.
            </p>
          </div>
        </div>
        <p className="mt-6 text-[10px] sm:text-xs tracking-widest text-gray-500">
          AI GROUP LEADERSHIP
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