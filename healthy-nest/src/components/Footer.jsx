import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 px-6 md:px-20">
      {/* Top section: 4 columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12">
        <div>
          <h3 className="text-xl font-bold mb-4 text-green-900">HealthyNest</h3>
          <p className="text-sm text-gray-600">
            A family-first elder care platform built to help you find and compare the best care homes.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-800">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-green-700">Home</a></li>
            <li><a href="#" className="hover:text-green-700">About</a></li>
            <li><a href="#" className="hover:text-green-700">Services</a></li>
            <li><a href="#" className="hover:text-green-700">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-800">Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-green-700">FAQs</a></li>
            <li><a href="#" className="hover:text-green-700">Help Center</a></li>
            <li><a href="#" className="hover:text-green-700">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-700">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-800">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📍 123 Elder Lane, Hyderabad, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ contact@healthynest.in</li>
          </ul>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-200 my-6" />

      {/* Bottom row: Copyright */}
      <div className="text-center text-sm text-gray-500 pb-6">
        © 2023 Healthy Nest. All rights reserved. Built with <span className="text-red-500">❤️</span> in <strong>India</strong>.
      </div>
    </footer>
  );
};

export default Footer;
