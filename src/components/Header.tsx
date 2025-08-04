import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full pt-4 pb-0 px-6 flex items-center justify-between bg-white">
      <div className="flex items-center">
        <div className="text-xl font-semibold text-gray-800">Logo</div>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Home</a>
        <a href="/product" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Product</a>
        <a href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Services</a>
        <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">About</a>
      </nav>
      
      <a href="/contact" className="bg-gradient-to-r from-purple-500 to-purple-400 text-white hover:from-purple-600 hover:to-purple-500 transition-all duration-200 rounded-full px-6 py-2.5 font-medium shadow-md hover:shadow-lg">
  Get in contact
</a>

    </header>
  );
};

export default Header;