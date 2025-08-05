import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
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
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">About us</h1>
                <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
                  We are a dedicated team of software developers, designers, and strategists passionate about creating 
                  digital solutions that make a difference. With years of experience and a commitment to excellence, 
                  we transform ideas into powerful, user-friendly applications that drive business success.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Vision to Value Section */}
          <div className="mb-20 mt-16">
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

          {/* Client Success Stories */}
          <div className="mb-20">
            <div className="mb-12 -ml-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                Client success stories.
              </h2>
              <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
                Each client story reflects a journey of collaboration, innovation, and real-world impact—
                showcasing how our solutions drive growth, solve problems, and build lasting partnerships.
              </p>
            </div>

   <div className="relative max-w-3xl mx-auto">
  {/* Arrows - moved outside the box */}
  <button className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>

  <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
    {/* Content */}
    <div className="flex flex-col md:flex-row items-start gap-6">
      {/* Text Section */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          From Idea to Reality in Weeks
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
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
          <div>
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
      className="bg-white rounded-3xl border border-gray-200 overflow-hidden w-full max-w-[290px] h-[480px] mx-auto"
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
