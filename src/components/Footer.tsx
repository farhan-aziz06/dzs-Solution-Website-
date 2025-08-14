import React from 'react';

const Footer = () => {
  return (
    <footer className="relative text-white pt-16 pb-8 px-6 mx-6 mb-6 mt-16 rounded-3xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/Main.svg" alt="Background" className="w-full h-full object-cover rounded-3xl" />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            {/* Logo and social media icons */}
            <div className="mb-6 md:mb-0 md:mt-4 md:ml-60">
              <div className="flex flex-col items-center space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <img src="/bar.svg" alt="Bar chart" className="w-9 h-9" />
                  <div className="text-3xl font-bold">LOGO</div>
                </div>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="hover:opacity-80">
                    <img src="/fb.svg" alt="Facebook" className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <img src="/twi.svg" alt="Twitter" className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <img src="/ins.svg" alt="Instagram" className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <img src="/fiver.svg" alt="Fiverr" className="w-4 h-4" />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <img src="/upwork.svg" alt="Upwork" className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Spacer only on desktop */}
            <div className="hidden md:flex flex-1"></div>

            {/* Links sections */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-32 md:mr-64 items-center md:items-start">
              {/* Useful Links */}
              <div>
                <h4 className="font-medium mb-3 text-white text-sm">Useful Links</h4>
                <ul className="space-y-2 text-gray-400 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Product</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-medium mb-3 text-white text-sm">Support</h4>
                <ul className="space-y-2 text-gray-400 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">E-mail</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gradient line separator */}
          <div className="mt-12 mb-4">
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
