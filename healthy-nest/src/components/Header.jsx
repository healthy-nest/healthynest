import React from 'react';
import logo from '../assets/logo.png'; // Update path as needed

const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 py-4 shadow-sm bg-white">
      {/* Logo Section */}
      <div className="flex items-center gap-3 text-2xl font-bold text-green-600">
        {/*<img src={logo} alt="Logo" className="w-12 h-12 object-contain" /> */}
        HealthyNest
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
        <a href="#" className="hover:text-green-600">Home</a>
        <a href="#" className="hover:text-green-600">Compare</a>
        <a href="#" className="hover:text-green-600">Providers</a>
        <a href="#" className="hover:text-green-600">About Us</a>
        <a href="#" className="hover:text-green-600">Resources</a>
      </nav>
    </header>
  );
};

export default Header;
