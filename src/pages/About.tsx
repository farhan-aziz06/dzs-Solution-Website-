import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sectionRefs = useRef({});

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

  const reviews = [
    {
      title: "From Idea to Reality in Weeks",
      content: "The team truly understood our vision and transformed it into a seamless, user-friendly mobile app. The process was smooth, and the final result went beyond what we imagined. Our Communication was smooth, & the final product exceeded expectations. Their collaboration style and quality of work with your team improved our delivery by 60%. It felt more like working with a true partner than just a service provider.",
      author: "Ronald Richard",
      position: "Co-Founder & CEO",
      initials: "RR",
      image: "/client.svg"
    },
    {
      title: "Exceptional AI Integration Results",
      content: "Working with this team on our AI-powered platform was transformative. They didn't just deliver code—they delivered intelligence. The machine learning models they implemented increased our efficiency by 75% and provided insights we never thought possible. Their expertise in both technical execution and business strategy made all the difference.",
      author: "Sarah Johnson",
      position: "CTO & Head of Innovation",
      initials: "SJ",
      image: "/g1.jpg"
    },
    {
      title: "Digital Transformation Done Right",
      content: "Our legacy systems were holding us back until we partnered with this incredible team. They modernized our entire infrastructure while ensuring zero downtime. The new web application they built handles 10x our previous traffic and the user experience is phenomenal. Their attention to detail and commitment to excellence is unmatched.",
      author: "Zoe Johnson",
      position: "VP of Digital Strategy",
      initials: "ZJ",
      image: "/g2.jpg"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observers = [];
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -100px 0px",
      threshold: 0.3,
    };

    const handleIntersect = (entries, sectionId) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, sectionId]));
        }
      });
    };

    ["vision", "stories", "team"].forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => handleIntersect(entries, sectionId),
          observerOptions
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash === "#client-reviews") {
        const element = document.getElementById("client-reviews");
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  const setSectionRef = (sectionId) => (el) => {
    sectionRefs.current[sectionId] = el;
  };

  const getSectionClasses = (sectionId) => {
    const baseClasses = "transform transition-all duration-1000 ease-out";
    const isVisible = visibleSections.has(sectionId);

    return `${baseClasses} ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
    }`;
  };

  const nextReview = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevReview = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToReview = (index) => {
    if (isTransitioning || index === currentReview) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReview(index);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap');`}
      </style>
      <div className="min-h-screen bg-background">
        <main className="pt-2 sm:pt-4 lg:pt-6 pb-8 sm:pb-12 lg:pb-16">
          {/* Header */}
          <div className="mt-1 sm:mt-2 lg:mt-4 px-2 sm:px-4 lg:px-6">
            <div
              className="rounded-3xl overflow-hidden bg-white"
              style={{
                backgroundImage: "url(/bg.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <section className="pt-4 sm:pt-4 lg:pt-8 pb-2 sm:pb-4 lg:pb-4">
                <div
                  className={`mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-6 transform transition-all duration-700 ease-out ${
                    headerVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="w-full text-left">
                    <h1 className=" ml-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 mt-4 sm:mt-4 lg:mt-4">
                      About us
                    </h1>
                    <p className=" ml-3 text-gray-400 text-xs sm:text-sm lg:text-base max-w-xl lg:max-w-1xl leading-relaxed">
                      We craft smart digital solutions with a focus on AI, web,
                      and app development. From idea to launch, we build products
                      that drive growth, solve real problems, and stand out in
                      today's digital world.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Content Section */}
          <section className="py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-6 bg-white">
            <section className="pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-12 lg:pb-16 px-2 sm:px-4 lg:px-6 bg-white rounded-3xl shadow-sm">
              <div className="w-full">
                {/* Vision */}
                <div
                  ref={setSectionRef("vision")}
                  className={`mb-10 sm:mb-16 lg:mb-20 mt-8 sm:mt-12 lg:mt-16 ${getSectionClasses(
                    "vision"
                  )}`}
                >
                  <div className="mb-6 sm:mb-8 lg:mb-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      From Vision to Value
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-xl lg:max-w-3xl leading-relaxed">
                     We craft smart digital solutions with a focus on AI, web, and app development. From idea to launch, we build products that drive growth, solve real problems, and stand out in today's digital world.
                    </p>
                  </div>
                  {/* Updated responsive image container */}
                  <div className="transition-all duration-1000 delay-400">
                    <div className="w-full">
                      <img
                        src="/pro.svg"
                        alt="Professional services"
                        className="w-full h-auto object-contain transition-all duration-500 hidden sm:block"
                      />
                      <img
                        src="/mobilemetrics.svg"
                        alt="Mobile metrics"
                        className="w-full h-auto object-contain transition-all duration-500 block sm:hidden"
                      />
                    </div>
                  </div>
                </div>

                {/* Stories */}
                <div
                  id="client-reviews"
                  ref={setSectionRef("stories")}
                  className={`mb-10 sm:mb-16 lg:mb-20 ${getSectionClasses(
                    "stories"
                  )}`}
                >
                  <div className="mb-6 sm:mb-8 lg:mb-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      Client success stories.
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-xl lg:max-w-3xl leading-relaxed">
                     Each client story reflects a journey of collaboration, innovation, and real-world impact—showcasing how our solutions drive growth, solve problems, and build lasting partnerships.
                    </p>
                  </div>

                  <div className="relative max-w-3xl lg:max-w-4xl mx-auto">
                    {/* Arrows */}
                    <button 
                      onClick={prevReview}
                      className="absolute -left-3 sm:-left-4 lg:-left-6 top-[43%] transform -translate-y-1/2 z-10 transition-all duration-200 hover:scale-110"
                    >
                      <div className="relative">
                        <img
                          src="/circle.svg"
                          alt="Circle"
                          className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                        />
                        <img
                          src="/left.svg"
                          alt="Prev"
                          className="absolute inset-0 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 translate-x-1.5 translate-y-1.5 lg:translate-x-2.5 lg:translate-y-2.5"
                        />
                      </div>
                    </button>
                    <button 
                      onClick={nextReview}
                      className="absolute -right-3 sm:-right-4 lg:-right-6 top-[43%] transform -translate-y-1/2 z-10 transition-all duration-200 hover:scale-110"
                    >
                      <div className="relative">
                        <img
                          src="/circle.svg"
                          alt="Circle"
                          className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                        />
                        <img
                          src="/right.svg"
                          alt="Next"
                          className="absolute inset-0 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 translate-x-1.5 translate-y-1.5 lg:translate-x-2.5 lg:translate-y-2.5"
                        />
                      </div>
                    </button>

                    {/* Story Card */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-6 lg:p-9 shadow-sm overflow-hidden">
                      <div className={`flex flex-col md:flex-row items-start gap-4 sm:gap-5 lg:gap-7 transition-all duration-300 ease-in-out ${
                        isTransitioning 
                          ? 'transform translate-x-8 opacity-0' 
                          : 'transform translate-x-0 opacity-100'
                      }`}>
                        <div className="flex-1">
                          <h3 className="text-xs sm:text-sm text-gray-500 mb-2 " style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}>
                            {reviews[currentReview].title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5 sm:mb-6 lg:mb-7">
                            {reviews[currentReview].content}
                          </p>
                          <div className="flex items-center justify-between w-full mt-8 sm:mt-10 lg:mt-12">
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm sm:text-base lg:text-lg font-medium">
                                {reviews[currentReview].initials}
                              </div>
                              <img
                                src="/stars.svg"
                                alt="Stars"
                                className="h-4 sm:h-5 lg:h-6"
                              />
                            </div>
                            <div className="text-left">
                              <div 
                                className="text-sm sm:text-base lg:text-lg text-gray-900"
                                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
                              >
                                {reviews[currentReview].author}
                              </div>
                              <div 
                                className="text-xs text-gray-400"
                                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400 }}
                              >
                                {reviews[currentReview].position}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Fixed image container with proper height */}
                        <div className="w-full md:w-45 h-48 sm:w-40 sm:h-40 lg:w-52 lg:h-52 xl:h-60 rounded-2xl overflow-hidden flex-shrink-0 order-first md:order-last">
                          <img
                            src={reviews[currentReview].image}
                            alt={reviews[currentReview].author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-4 sm:mt-5 lg:mt-6 gap-2">
                      {reviews.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToReview(index)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                            index === currentReview ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Team */}
                <div
                  ref={setSectionRef("team")}
                  className={getSectionClasses("team")}
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
                          visibleSections.has("team")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-12 opacity-0"
                        }`}
                        style={{
                          transitionDelay: visibleSections.has("team")
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
              </div>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;