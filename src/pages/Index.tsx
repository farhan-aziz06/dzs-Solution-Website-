import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
// import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactSection";
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import CountryClientsMap from "@/components/ClientsMap";

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
      <ServicesSection />
      <ProjectsSection />
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
            <Info
            name="Farhan"
            role="Solution Specialist"
            profileImage="/girl1.svg"
            email="teamdzssolutions@dzssolutions.com"
            ctaHref="#"/>
            <ContactForm />
        </div>

      </div>
      <div>
      <div>
          <CountryClientsMap data={data} />
      </div>
      </div>
    </div>
  );
};

export default Index;
