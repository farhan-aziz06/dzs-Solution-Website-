import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="w-full pt-4 pb-0 px-6 flex items-center justify-between bg-white relative z-50">
        <div className="flex items-center">
          <div className="text-xl font-semibold text-gray-800">Logo</div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Home</a>
          <a href="/product" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Product</a>
          <a href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Services</a>
          <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">About</a>
        </nav>
        
        {/* Desktop Contact Button */}
        <a 
          href="/contact" 
          className="hidden md:block bg-gradient-to-r from-purple-500 to-purple-400 text-white hover:from-purple-600 hover:to-purple-500 transition-all duration-200 rounded-full px-6 py-2.5 font-medium shadow-md hover:shadow-lg"
        >
          Get in contact
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} className="text-gray-700" />
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="text-xl font-semibold text-gray-800">Logo</div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close mobile menu"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col p-6 space-y-6">
          <a 
            href="/" 
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-2 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a 
            href="/product" 
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-2 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Product
          </a>
          <a 
            href="/services" 
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-2 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Services
          </a>
          <a 
            href="/about" 
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-2 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          
          {/* Mobile Contact Button */}
          <div className="pt-4">
            <a 
              href="/contact" 
              className="block text-center bg-gradient-to-r from-purple-500 to-purple-400 text-white hover:from-purple-600 hover:to-purple-500 transition-all duration-200 rounded-full px-6 py-3 font-medium shadow-md hover:shadow-lg"
              onClick={toggleMobileMenu}
            >
              Get in contact
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;