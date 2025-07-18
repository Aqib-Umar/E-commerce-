// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import cart context

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  console.log('Header rendering...'); // Add this
  const { cartCount } = useCart(); // Get cart count from context
  
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Women', path: '/women' },
    { title: 'Stitched', path: '/stitched' },
    { title: 'Unstitched', path: '/unstitched' },
    { title: 'Top Sales', path: '/top-sales' },
    { title: 'About us', path: '/about' },
    { title: 'Contact us', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* 🔶 Discount Bar */}
      <div className="bg-amber-900 text-white text-center py-2">
        <p className="text-sm">
          Avail free shipping National worldwide for orders above PKR 3000
        </p>
      </div>

      {/* 🔶 Top bar with logo in center and icons on right */}
      <div className="bg-gray-50 py-4 md:py-6 px-4 md:px-6 relative">
        <div className="container mx-auto flex items-center justify-between">
          
          {/* Invisible placeholder (for symmetry) */}
          <div className="w-10 md:w-24"></div>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 md:-top-2">
            <Link to="/">
              <img
                src="/images/logo1.png"
                alt="Logo"
                className="w-20 h-20 md:w-28 md:h-28 object-contain rounded-xl"
              />
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4 md:space-x-6 ml-auto">
            {/* Search icon */}
            <div className="cursor-pointer">
              <svg 
                className="w-5 h-5 text-gray-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Login icon */}
            <Link to="/login" className="text-gray-600 hover:text-black transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Cart icon with badge */}
            <Link to="/cart" className="text-gray-600 hover:text-black transition-colors relative">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* Cart badge - only show when items in cart */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* 🔶 Navigation Bar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex justify-center flex-grow">
            <div className="flex space-x-4 lg:space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.title} 
                    to={link.path}
                    className={`relative py-2 px-1 font-medium transition-colors ${
                      isActive ? 'text-black font-bold' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {link.title}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right placeholder for mobile */}
          <div className="md:hidden w-6"></div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.title} 
                    to={link.path}
                    className={`relative py-2 px-1 font-medium ${
                      isActive ? 'text-black font-bold' : 'text-gray-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
