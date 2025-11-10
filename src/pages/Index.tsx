import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import React, { useEffect, useState, lazy, Suspense } from "react";
import LoadingFallback from "@/components/LoadingFallback";

// Helper to lazy-load a component but ensure a minimum delay (ms) so the
// fallback stays visible for at least that long. This satisfies the 3s
// minimum loading time requirement for the UI.
const lazyWithDelay = (importFn: () => Promise<any>, ms = 3000) =>
  lazy(() =>
    Promise.all([importFn(), new Promise((res) => setTimeout(res, ms))]).then(
      ([moduleExports]) => moduleExports
    )
  );

// Lazy-load heavier / below-the-fold components for faster initial load
const ServicesSection = lazyWithDelay(() => import("@/components/ServicesSection"), 3000);
const ProjectsSection = lazyWithDelay(() => import("@/components/ProjectsSection"), 3000);
const ContactForm = lazyWithDelay(() => import("@/components/ContactSection"), 3000);
const Info = lazyWithDelay(() => import("@/components/Info"), 3000);
const CountryClientsMap = lazyWithDelay(() => import("@/components/ClientsMap"), 3000);

const Index = () => {
  const rotatingPhrases = ["Flutter", "Website", "UI/UX", "AI Solutions"];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const data = [
    { country: "Pakistan", clients: 5 },
    { country: "Israel", clients: 1 },
    { country: "UK", clients: 4 },
    { country: "USA", clients: 5 },
    { country: "Germany", clients: 3 }
  ];
  

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Suspense fallback={<LoadingFallback message="Loading sections..." />}>
        <ServicesSection />
        <ProjectsSection />
      </Suspense>
      {/* <ContactSection /> */}
      <div className="flex flex-col items-center px-4 md:px-12 lg:px-8 xl:px-8 py-4">
        <div className="py-4 text-center">
          {/* Ready to build the future with */}
          <h1 className="font-recoleta md:p-8 text-3xl md:text-5xl font-normal">
            Ready to <span className="text-[#DF56FE]">build</span> the future with{" "}
            <span className="text-[#5956E9]">{rotatingPhrases[phraseIndex]} </span>?
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 md:gap-4 xl:gap-0 w-full justify-center">
          <Suspense fallback={<LoadingFallback message="Loading contact..." />}>
            <Info
              name="Farhan"
              role="Solution Specialist"
              profileImage="/girl1.svg"
              email="teamdzssolutions@dzssolutions.com"
              ctaHref="#"
            />
            <ContactForm />
          </Suspense>
        </div>

      </div>
      <div>
        <Suspense fallback={<LoadingFallback message="Loading map..." />}>
          <CountryClientsMap data={data} />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
