import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hexagonalBg from "@/assets/hexagonal-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] px-6">
      {/* 3D Hexagonal Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hexagonalBg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your trusted partner for guaranteed software delivery
          </h1>
          
          <p className="text-lg text-white/90 leading-relaxed">
            Combining advanced technology and decades of industry insight, we design and develop 
            bespoke full-cycle solutions tailored to deliver your unique software vision.
          </p>
          
          <div className="flex items-center space-x-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 flex items-center gap-2" asChild>
              <a href="/contact">
                Get in contact
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Client" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Real stories, Real results. Hear what</p>
                <p className="text-white text-sm font-medium">our clients have to say.</p>
                <p className="text-white/80 text-sm mt-1 flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                  See Reviews <ArrowRight className="w-3 h-3" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;