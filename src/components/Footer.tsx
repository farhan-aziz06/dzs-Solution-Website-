import React from 'react';

const Footer = () => {
  return (
    <footer className="relative text-white pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-8 px-3 sm:px-4 lg:px-6 mx-3 sm:mx-4 lg:mx-6 mb-3 sm:mb-4 lg:mb-6 mt-8 sm:mt-12 lg:mt-16 rounded-2xl sm:rounded-3xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/Main.svg" alt="Background" className="w-full h-full object-cover rounded-2xl sm:rounded-3xl" />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            {/* Logo - Responsive positioning */}
            <div className="mb-4 sm:mb-5 lg:mb-6 md:mb-0 md:mt-2 lg:md:mt-4 md:ml-32 lg:md:ml-60">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 lg:mb-6">
                <img src="/bar.svg" alt="Bar chart" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">LOGO</div>
              </div>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <img src="/fb.svg" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <img src="/twi.svg" alt="Twitter" className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <img src="/ins.svg" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Links sections - Responsive layout and positioning */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 md:mr-32 lg:md:mr-80 w-full sm:w-auto">
              {/* Useful Links */}
              <div>
                <h4 className="font-medium mb-2 sm:mb-3 text-white text-xs sm:text-sm">Useful Links</h4>
                <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Product</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-medium mb-2 sm:mb-3 text-white text-xs sm:text-sm">Support</h4>
                <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">E-mail</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gradient line separator - Responsive spacing */}
          <div className="mt-6 sm:mt-8 lg:mt-12 mb-2 sm:mb-3 lg:mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
          </div>
          
          <div className="text-center text-gray-400 text-xs">
            Copyright © 2025 | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;