import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`w-full py-2 sm:py-3 lg:py-4 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 flex items-center justify-between bg-white relative z-50 transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Logo - Responsive sizing */}
        <div className={`flex items-center transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Replace text logo with image placed at public/logo-dzs.png */}
          <img src="/logo-dzs-updated.png" alt="DZS Solutions" loading="lazy" className="w-28 sm:w-32 md:w-36 lg:w-40 h-auto object-contain" />
        </div>
        
        {/* Desktop Navigation - Responsive spacing and font sizes */}
        <nav className={`hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <a href="/" className="text-sm lg:text-base text-gray-700 hover:text-gray-900 transition-colors font-medium hover:scale-105 duration-200">Home</a>
          <a href="/services" className="text-sm lg:text-base text-gray-700 hover:text-gray-900 transition-colors font-medium hover:scale-105 duration-200">Services</a>
          <a href="/project" className="text-sm lg:text-base text-gray-700 hover:text-gray-900 transition-colors font-medium hover:scale-105 duration-200">Projects</a>
          <a href="/about" className="text-sm lg:text-base text-gray-700 hover:text-gray-900 transition-colors font-medium hover:scale-105 duration-200">About</a>
        </nav>
        
        {/* Desktop Contact Button with SVG - Responsive sizing */}
        <a 
          href="/contact" 
          className={`hidden md:block transition-all duration-1000 hover:scale-105 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          title="Get in contact"
        >
          <img 
            src="/contactbutton.svg" 
            alt="Contact" 
            className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto"
            style={{ minHeight: '24px' }}
            onError={(e) => {
              console.log('SVG failed to load from /contactbutton.svg');
            }}
            onLoad={() => console.log('SVG loaded successfully')}
          />
        </a>

        {/* Mobile Menu Button - Responsive sizing */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-all duration-1000 hover:scale-110 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Toggle mobile menu"
        >
          <Menu size={20} className="sm:w-6 sm:h-6 text-gray-700" />
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ease-out"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Sidebar - Responsive width */}
      <div className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-xl transform transition-all duration-300 ease-out z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        {/* Sidebar Header - Responsive spacing and font */}
        <div className={`flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 transition-opacity duration-300 ease-out ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <img src="/logo-dzs.png" alt="DZS Solutions" loading="lazy" className="w-24 sm:w-28 h-auto object-contain" />
          <button
            onClick={toggleMobileMenu}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 hover:rotate-90"
            aria-label="Close mobile menu"
          >
            <X size={20} className="sm:w-6 sm:h-6 text-gray-700" />
          </button>
        </div>

        {/* Sidebar Navigation - Responsive spacing and fonts */}
        <nav className="flex flex-col p-4 sm:p-6 space-y-4 sm:space-y-6">
          {[
            { href: "/", text: "Home" },
            { href: "/services", text: "Services" },
            { href: "/project", text: "Projects" },
            { href: "/about", text: "About" }
          ].map((item) => (
            <a 
              key={item.text}
              href={item.href}
              className={`text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium text-base sm:text-lg py-2 border-b border-gray-100 hover:scale-105 ${
                isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={toggleMobileMenu}
            >
              {item.text}
            </a>
          ))}
          
          {/* Mobile Contact Button with SVG - Responsive sizing */}
          <div
            className={`pt-3 sm:pt-4 transition-opacity duration-300 ease-out ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a
              href="/contact"
              onClick={toggleMobileMenu}
              className="flex items-center justify-start"
              title="Get in contact"
            >
              <img
                src="/contactbutton.svg"
                alt="Contact"
                className="w-32 sm:w-36 md:w-40 h-auto"
                style={{ minHeight: '28px' }}
                onError={(e) => {
                  console.log('SVG failed to load from /contactbutton.svg');
                }}
                onLoad={() => console.log('SVG loaded successfully')}
              />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;