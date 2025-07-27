import React from 'react';
import logo from '../assets/logo.png'; // Update path as needed
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 py-4 shadow-sm bg-white">
      {/* Logo Section */}
      <div className="flex items-center gap-3 text-2xl font-bold text-green-600">
        {/*<img src={logo} alt="Logo" className="w-12 h-12 object-contain" /> */}
        <Link to="/" className="hover:text-green-600">
          HealthyNest
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/compare" className="hover:text-green-600">Compare</Link>
        <Link to="/explore-nests" className="hover:text-green-600">Providers</Link>
        <Link to="/about" className="hover:text-green-600">About Us</Link>
        <Link to="/resources" className="hover:text-green-600">Resources</Link>
      </nav>
    </header>
  );
};

export default Header;
