import React from 'react';

const Footer = () => {
  return (
    <footer className="relative text-white py-8 px-6 mx-6 mb-6 rounded-3xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/Main.svg" alt="Background" className="w-full h-full object-cover rounded-3xl" />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            {/* Logo */}
            <div className="mb-6 md:mb-0 md:mt-8 md:ml-48">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/bar.svg" alt="Bar chart" className="w-5 h-5" />
                <div className="text-xl font-bold">LOGO</div>
              </div>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <img src="/fb.svg" alt="Facebook" className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <img src="/twi.svg" alt="Twitter" className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <img src="/ins.svg" alt="Instagram" className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Links sections */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 md:mr-48">
              {/* Useful Links */}
              <div>
                <h4 className="font-medium mb-3 text-white text-sm">Useful Links</h4>
                <ul className="space-y-2 text-gray-400 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Inbox</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cart</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Wish list</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-medium mb-3 text-white text-sm">Support</h4>
                <ul className="space-y-2 text-gray-400 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">Contact Admin</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Settings</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Report Fraud</a></li>
                </ul>
              </div>

              {/* Account */}
              <div>
                <h4 className="font-medium mb-3 text-white text-sm">Account</h4>
                <ul className="space-y-2 text-gray-400 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">Switch to Buyer</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Become a Seller</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Sign up</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gradient line separator */}
          <div className="mt-8 mb-4">
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