import React, { useEffect, useRef, useState } from 'react';

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: 'App Development',
    description:
      'Native and cross‑platform mobile apps with robust APIs, analytics and CI/CD.',
  },
  {
    title: 'Website Development',
    description:
      'Fast, SEO‑friendly web apps using React/Next.js, Tailwind and modern tooling.',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'Custom ML models, RAG search, embeddings and LLM integrations for products.',
  },
  {
    title: 'AI Agents & Automations',
    description:
      'Agentic workflows, chatbots and business automations that save hours weekly.',
  },
  {
    title: 'SaaS Product Development',
    description:
      'From MVP to scale: multi‑tenant architecture, billing, auth and observability.',
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState<number>(2);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef as any}
      className="px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20 bg-white"
    >
      <div
        className={`mx-auto max-w-10xl rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#A26FFF] via-[#E7CDFF] to-[#1E1D28] text-white shadow-xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-[#1E1D28] text-[10px] sm:text-xs tracking-widest uppercase mb-2">
            Our Service
          </p>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              What <span className="text-[#1E1D28]">Services</span>
              <br /> We’re Offering
            </h2>
            <p className=" text-purple-500 text-xs sm:text-sm max-w-md">
              We help teams launch and scale products with dependable engineering,
              thoughtful design and pragmatic AI.
            </p>
          </div>
        </div>

        {/* Services list */}
        <div className="divide-y divide-white/10">
          {services.map((service, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={service.title}
                type="button"
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                className="group w-full text-left"
              >
                <div className="relative px-6 sm:px-8 lg:px-10 py-6 sm:py-7 flex items-center">
                  <div className={`text-lg sm:text-xl lg:text-2xl font-semibold transition-colors ${
                    isActive ? 'text-white' : 'text-[#1E1D28]'
                  }`}>
                    {service.title}
                    {isActive && <span className="text-white"> .</span>}
                  </div>
                  <div className="ml-auto flex items-center gap-6">
                    <div className={`hidden sm:block text-[11px] sm:text-xs max-w-xs text-[#1E1D28] transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {service.description}
                    </div>
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full border ${
                      isActive ? 'border-[#A26FFF] bg-[#E7CDFF]' : 'border-white/20'
                    } transition-colors`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;