import { useState, useEffect, useRef } from "react";

const ClientReviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const lastTimeRef = useRef(0);

  const reviews = [
    {
      title: "From Idea to Reality in Weeks",
      content: "Working with this team on our taxi app was an outstanding experience. They understood our vision clearly and turned it into a complete, smooth, and user-friendly platform. The driver app, passenger app, and admin panel all worked together perfectly. Communication during the entire project was fast and transparent, and the final delivery went far beyond what we expected. Our operational efficiency improved by almost 60 percent after launching the system. It genuinely felt like working with a true partner rather than a typical software vendor.",
      author: "Sheemon & Eden",
      position: "Co-Founder & CTO",
      initials: "S&E",
      image: "/man.webp"
    },
    {
      title: "Exceptional AI Automation and Lead Generation Results",
      content: "Working with this team on our AI-powered lead generation system was a game changer. They did not just build automation. They built a smart engine that identifies, scores, and nurtures quality leads with impressive accuracy. The workflows they designed increased our lead conversion rate by more than 70 percent and eliminated hours of manual work every week. Their technical expertise and understanding of real business processes made the entire experience highly impactful.",
      author: "Michael Harrington",
      position: "Head of Sales",
      initials: "MH",
      image: "/man.webp"
    },
    {
    title: "End-to-End Cafe Platform Delivered Perfectly",
    content: "Our team worked with them to build the complete NY Caffeine platform, including the mobile app and the full admin panel. The entire system was delivered with smooth functionality, clean design, and reliable performance. Order handling, menu updates, inventory tracking, delivery flow, and daily analytics were all integrated in one place. This improved our operational efficiency by more than 65 percent and allowed us to manage everything in real time. Their professionalism and ability to turn our idea into a polished, end-to-end product was truly impressive.",
    author: "Johnathan Doe",
    position: "CEO",
    initials: "JD",
    image: "/man.webp"
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

  // simple auto-scroll for the horizontal slider
  useEffect(() => {
    const container = sliderRef.current as unknown as HTMLDivElement | null;
    if (!container) return;

    const speedPxPerMs = 0.06; // smaller = slower
    let rafId: number;

    const tick = (timestamp: number) => {
      const last = lastTimeRef.current || timestamp;
      const delta = timestamp - last;
      lastTimeRef.current = timestamp;

      container.scrollLeft += delta * speedPxPerMs;

      const loopWidth = container.scrollWidth / 2; // we render items twice
      if (container.scrollLeft >= loopWidth) {
        container.scrollLeft = 0;
        lastTimeRef.current = timestamp; // avoid jump in next frame
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
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
      {/* Testimonials */}
      <div className="mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3">
          Client success stories.
        </h2>
       
      </div>

      {/* Simple Pre-Testimonials Hero (no images) placed after intro */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white via-white to-gray-50 border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm mb-6 sm:mb-8 lg:mb-12 text-center">
        <span className="inline-block text-[10px] sm:text-xs tracking-widest text-gray-500 mb-2">Testimonials</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
          Trusted by leaders
          <br className="hidden sm:block" />
          <span className="font-light text-gray-700">from various industries</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
          Learn why professionals trust our solutions to complete their customer journeys.
        </p>
        <div className="mt-5">
          <a href="#success-stories" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-xs sm:text-sm shadow hover:bg-gray-800 transition">
            Read Success Stories
            <span className="inline-block translate-y-[1px]">→</span>
          </a>
        </div>
      <div className="max-w-6xl mx-auto relative">
        <div
          ref={sliderRef}
          className="flex gap-5 sm:gap-6 mt-10 overflow-hidden no-scrollbar py-1"
        >
          {([...reviews, ...reviews] as typeof reviews).map((item, idx) => (
            <div key={idx} className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-4">
                  <img src={item.image} alt={item.author} className="w-8 h-8 rounded-full object-cover" />
                  <div className="text-sm text-gray-900 font-medium">{item.author}</div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-6">{item.content}</p>
                <div>
                  <div className="text-gray-900 font-semibold">{item.author}</div>
                  <div className="text-xs text-gray-400">{item.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Edge gradients for slight blur/fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-14 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-14 bg-gradient-to-l from-white to-transparent" />
      </div>
      </div>
    </div>
  );
};

export default ClientReviews;