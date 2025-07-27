import React from 'react';
import logo from '../assets/hn_logo.png'; // Update path as needed
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 py-2 shadow-sm bg-white h-18">
  <div className="flex items-center">
    <Link to="/healthynest">
      <img
        src={logo}
        alt="Logo"
        className="h-12 w-auto object-contain" // 👈 slightly larger logo
      />
    </Link>
  </div>
      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
        <Link to="/healthynest" className="hover:text-green-600">Home</Link>
        <Link to="/compare" className="hover:text-green-600">Compare</Link>
        <Link to="/healthynest/explore-nests" className="hover:text-green-600">Providers</Link>
        <Link to="/about" className="hover:text-green-600">About Us</Link>
        <Link to="/resources" className="hover:text-green-600">Resources</Link>
      </nav>
    </header>
  );
};

export default Header;
