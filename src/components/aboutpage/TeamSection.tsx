import { useState, useEffect, useRef } from "react";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      name: "Paul Smith",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description:
        "Merging Classic Tailoring With Bold Playful Contemporary Designs.",
    },
    {
      name: "Paul Smith",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description:
        "Merging Classic Tailoring With Bold Playful Contemporary Designs.",
    },
    {
      name: "Paul Smith",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description:
        "Merging Classic Tailoring With Bold Playful Contemporary Designs.",
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
      <div className="flex flex-wrap justify-center gap-2 sm:gap-6 md:gap-8 lg:gap-14">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden w-full max-w-[200px] sm:max-w-[230px] lg:max-w-[260px] h-[320px] sm:h-[380px] lg:h-[440px] transform transition-all duration-700 ease-out ${
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
            <div className="relative w-full h-64 sm:h-72 lg:h-84 rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
              <img
                src="/back.svg"
                alt="Background"
                className="w-full h-full object-cover rounded-t-2xl sm:rounded-t-3xl"
              />
              <img
                src="/person.svg"
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover rounded-t-2xl sm:rounded-t-3xl"
              />
            </div>
            <div className="px-3 sm:px-4 py-3 sm:py-4 lg:py-5 text-center">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-400 text-xs mb-2 sm:mb-3">
                {member.role}
              </p>
              <p className="text-gray-500 text-xs leading-snug line-clamp-2">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;