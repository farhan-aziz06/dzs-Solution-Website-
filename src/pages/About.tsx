import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  
  const sectionRefs = useRef({});

  const teamMembers = [
    {
      name: "Paul Smith",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Merging Classic Tailoring With Bold Playful Contemporary Designs."
    },
    {
      name: "Paul Smith",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Merging Classic Tailoring With Bold Playful Contemporary Designs."
    },
    {
      name: "Paul Smith",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Merging Classic Tailoring With Bold Playful Contemporary Designs."
    }
  ];

  // Header animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for sections
  useEffect(() => {
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -100px 0px',
      threshold: 0.3
    };

    const handleIntersect = (entries, sectionId) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, sectionId]));
        }
      });
    };

    // Observer for each section
    ['vision', 'stories', 'team'].forEach(sectionId => {
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
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash === '#client-reviews') {
        const element = document.getElementById('client-reviews');
        if (element) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Check on mount
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  const setSectionRef = (sectionId) => (el) => {
    sectionRefs.current[sectionId] = el;
  };

  const getSectionClasses = (sectionId) => {
    const baseClasses = "transform transition-all duration-1000 ease-out";
    const isVisible = visibleSections.has(sectionId);
    
    return `${baseClasses} ${
      isVisible 
        ? "translate-y-0 opacity-100" 
        : "translate-y-16 opacity-0"
    }`;
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-12 pb-16">
        {/* Header with Background Image */}
        <div className="px-6">
          <div
            className="rounded-3xl overflow-hidden bg-white"
            style={{
              backgroundImage: 'url(/bg.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <section className="pt-16 pb-10 max-w-5xl mx-auto">
              <div className="mb-8 px-4">
                <div 
                  className={`transform transition-all duration-1000 ease-out ${
                    headerVisible 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-12 opacity-0"
                  }`}
                >
                  <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 text-left">
                    About us
                  </h1>
                  <p className="text-gray-500 text-base max-w-2xl leading-relaxed text-left">
                    We are a dedicated team of software developers, designers, and strategists passionate about creating 
                    digital solutions that make a difference. With years of experience and a commitment to excellence, 
                    we transform ideas into powerful, user-friendly applications that drive business success.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Vision to Value Section */}
          <div 
            ref={setSectionRef('vision')}
            className={`mb-20 mt-16 ${getSectionClasses('vision')}`}
          >
            <div className="mb-12 -ml-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                From Vision to Value
              </h2>
              <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
                Our journey is defined by turning complex challenges into elegant solutions.
                We believe in the power of technology to transform businesses and create lasting impact in the digital world.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <img src="/pro.svg" alt="Professional services illustration" className="max-w-5xl w-full h-auto scale-105" />
            </div>
          </div>

          {/* Client Success Stories - Updated section with id for navigation */}
          <div 
            id="client-reviews"
            ref={setSectionRef('stories')}
            className={`mb-20 ${getSectionClasses('stories')}`}
          >
            <div className="mb-12 -ml-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                See what our clients say.
              </h2>
              <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
                Each client story reflects a journey of collaboration, innovation, and real-world impact—
                showcasing how our solutions drive growth, solve problems, and build lasting partnerships.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Left Arrow with Circle */}
              <button className="absolute -left-5 top-[43%] transform -translate-y-1/2 z-10 transition-all duration-200 hover:scale-110">

                <div className="relative">
                  <img src="/circle.svg" alt="Circle background" className="w-8 h-8" />
                  <img src="/left.svg" alt="Previous" className="absolute inset-0 w-4 h-4 translate-x-2 translate-y-1.5" />
                </div>
              </button>
              
              {/* Right Arrow with Circle */}
              <button className="absolute -right-5 top-[43%] transform -translate-y-1/2 z-10 transition-all duration-200 hover:scale-110">
                <div className="relative">
                  <img src="/circle.svg" alt="Circle background" className="w-8 h-8" />
                  <img src="/right.svg" alt="Next" className="absolute inset-0 w-4 h-4 translate-x-2 translate-y-1.5" />
                </div>
              </button>

              <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
                {/* Content */}
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Text Section */}
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">
                      From Idea to Reality in Weeks
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      The team truly understood our vision and transformed it into a seamless, user-friendly mobile app.
                      The process was smooth, and the final result went beyond what we imagined. Our Communication was smooth, 
                      & the final product exceeded expectations. Their collaboration style and quality of work with your team 
                      improved our delivery by 60%. It felt more like working with a true partner than just a service provider.
                    </p>

                    {/* New Layout: Avatar + Stars + Name/Role */}
                    <div className="flex items-center justify-between w-full mt-6">
                      {/* Left: Avatar + Stars */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold text-sm">
                          RR
                        </div>
                        <img src="/stars.svg" alt="5 star rating" className="h-5" />
                      </div>

                      {/* Right: Name and Title */}
                      <div className="text-right">
                        <div className="font-semibold text-sm text-gray-900">Ronald Richard</div>
                        <div className="text-xs text-gray-500">Co-Founder & CEO</div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-48 h-49 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src="/client.svg"
                      alt="Ronald Richard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Dots moved outside the card box */}
              <div className="flex justify-center mt-6 gap-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div 
            ref={setSectionRef('team')}
            className={getSectionClasses('team')}
          >
            <div className="mb-12 -ml-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                Together we build, together we rise.
              </h2>
              <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
                Meet the talented individuals who make our success possible.
                Our diverse team brings together expertise, creativity, and passion to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-1">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl border border-gray-200 overflow-hidden w-full max-w-[290px] h-[480px] mx-auto transform transition-all duration-700 ease-out ${
                    visibleSections.has('team')
                      ? `translate-y-0 opacity-100`
                      : `translate-y-12 opacity-0`
                  }`}
                  style={{
                    transitionDelay: visibleSections.has('team') ? `${index * 200}ms` : '0ms'
                  }}
                >
                  <div className="relative w-full h-84 rounded-t-3xl overflow-hidden">
                    <img 
                      src="/back.svg" 
                      alt="Background"
                      className="w-full h-full object-cover rounded-t-3xl"
                    />
                    <img 
                      src="/person.svg" 
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
                    />
                  </div>
                  <div className="px-4 py-5 text-center">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-xs mb-3">
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
      </main>
    </div>
  );
};

export default About;