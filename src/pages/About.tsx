import AboutHeader from "../components/aboutpage/AboutHeader";
import VisionSection from "../components/aboutpage/VisionSection";
import ClientReviews from "../components/aboutpage/ClientReviews";
import TeamSection from "../components/aboutpage/TeamSection";

const About = () => {
  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap');`}
      </style>
      <div className="min-h-screen bg-background">
        <main className="pt-2 sm:pt-4 lg:pt-6 pb-8 sm:pb-12 lg:pb-16">
          {/* Header */}
          <AboutHeader />

          {/* Content Section */}
          <section className="py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-6 bg-white">
            <section className="pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-12 lg:pb-16 px-2 sm:px-4 lg:px-6 bg-white rounded-3xl shadow-sm">
              <div className="w-full">
                {/* Vision */}
                <VisionSection />

                {/* Client Reviews */}
                <ClientReviews />

                {/* Team */}
                <TeamSection />
              </div>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;