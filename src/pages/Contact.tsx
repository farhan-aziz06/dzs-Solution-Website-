import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection"; // adjust path if needed

const Contact = () => {
  return (
    <>

      {/* Header with Background Image */}
      <div className="mt-10 px-6">
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
            {/* Header Content */}
            <div className="mb-8 px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
              <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
                We craft bold digital solutions that drive growth. From concept to launch, solving real-world problems with precision and creativity.
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className="pt-16 pb-12 px-6 bg-white mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Image */}
            <div className="flex items-center justify-center">
              <img
                src="/contact.svg"
                alt="Contact illustration"
                className="max-w-full h-auto"
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className="space-y-6 mt-16">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your First Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your Last Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select className="px-4 py-3 pr-10 border border-gray-300 rounded-full bg-white text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[140px] appearance-none">
                      <option>+92(PAK)</option>
                    </select>
                    <img 
                      src="/drop.svg" 
                      alt="dropdown" 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                    />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your project</label>
                <div className="flex flex-wrap gap-3 mb-4">
                  <button className="px-6 py-3 bg-purple-100 text-purple-500 border border-purple-500 rounded-full text-sm hover:bg-purple-200 transition-colors">
                    Web Development
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-600 rounded-full text-sm hover:bg-gray-50 transition-colors">
                    Mobile App
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-600 rounded-full text-sm hover:bg-gray-50 transition-colors">
                    AI Integration
                  </button>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <textarea 
                  placeholder="Enter message"
                  className="w-full h-[48px] px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none overflow-hidden"
                ></textarea>
              </div>

              {/* Submit Button and Social Icons */}
              <div className="flex items-center justify-between">
                <button className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors flex items-center gap-2">
                  Send Message 
                  <img src="/arrow3.svg" alt="send" className="w-4 h-4" />
                </button>
                
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/twitter.svg" alt="Twitter" className="w-8 h-8" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/discord.svg" alt="Discord" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;
