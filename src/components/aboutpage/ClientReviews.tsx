import { useState, useEffect, useRef } from "react";

const ClientReviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

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
    <div
      id="client-reviews"
      ref={sectionRef}
      className={`mb-10 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
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
              <h3 className="text-xs sm:text-sm text-gray-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}>
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
  );
};

export default ClientReviews;