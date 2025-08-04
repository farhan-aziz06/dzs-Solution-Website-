import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen px-6 py-9">
      {/* Background with he.svg behind gradient.svg */}
      <div className="absolute inset-6 rounded-3xl overflow-hidden">
        {/* He.svg image as base layer */}
        <img 
          src="/he.svg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient.svg on top */}
        <img 
          src="/Gradient.svg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-46 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh] pt-40">

          {/* Left side - Text content */}
          <div className="space-y-4">
            <h1 className="text-xl lg:text-4xl font-semi-bold text-white leading-tight">
              Your trusted partner for guaranteed software delivery
            </h1>
            
            <p className="text-base text-white/90 leading-relaxed max-w-lg">
              Combining advanced technology and decades of industry insight, we design and develop 
              bespoke full-cycle solutions tailored to deliver your unique software vision.
            </p>
            
            <div className="pt-4">
 <a href="/contact" className="group bg-white hover:bg-gray-50 text-gray-900 font-medium px-4 py-1.5 rounded-full flex items-center justify-between w-[190px] transition-all duration-200 shadow-md hover:shadow-lg">
  <span className="flex-grow text-left">Get in contact</span>
  <img 
    src="/arrow.svg" 
    alt="Arrow" 
    className="w-9 h-9 group-hover:translate-x-1 transition-transform" 
  />
</a>

</div>


          </div>
          
           {/* Right side - Reviews card positioned much lower and to the right */}
<div className="relative">
  <div className="absolute bg-white rounded-3xl p-2.5" 
       style={{
         boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
         bottom: '-195px',
         right: '-20px',
         width: '400px'
       }}>
    <div className="flex items-center space-x-2.5">
      <div className="flex -space-x-5">
        <div className="w-11 h-11 rounded-full border-2 border-white shadow-lg overflow-hidden z-30">
          <img src="/girl1.svg" alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="w-11 h-11 rounded-full border-2 border-white shadow-lg overflow-hidden z-20">
          <img src="/boy.svg" alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="w-11 h-11 rounded-full border-2 border-white shadow-lg overflow-hidden z-10">
          <img src="/girl.svg" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className="flex-1">
        <p className="text-gray-400 text-xs leading-relaxed mb-1">
          Real stories. Real results. Hear what our clients have to say.
        </p>
        <a href="#" className="text-black hover:text-gray-700 text-xs font-semibold transition-colors duration-200 flex items-center space-x-1">
          <span>See Reviews</span>
          <img src="/arrow2.svg" alt="" className="w-1.5 h-1.5" />
        </a>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;