// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-800">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
          {/* Logo on the left, centered vertically */}
          <div className="flex justify-center md:justify-start">
            <img src="/logo1.png" alt="Logo" className="w-32 h-auto" />
          </div>

          {/* Content columns on the right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Customer Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CUSTOMER SERVICES</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="hover:text-gray-600">Contact Us</Link></li>
                <li><Link to="#" className="hover:text-gray-600">Delivery & Orders</Link></li>
                <li><Link to="#" className="hover:text-gray-600">Returns & Exchanges</Link></li>
                <li><Link to="#" className="hover:text-gray-600">Terms & Conditions</Link></li>
                <li><Link to="#" className="hover:text-gray-600">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-gray-600">Track My Order</Link></li>
                <li><Link to="#" className="hover:text-gray-600">Payment Guides</Link></li>
              </ul>
            </div>

            {/* For Assistance */}
            <div>
              <h3 className="text-lg font-semibold mb-4">FOR ASSISTANCE</h3>
              <ul className="space-y-2">
                <li>Whatsapp: <span className="text-gray-600">0322 6773534</span></li>
                <li>Email: <span className="text-gray-600">elisha@gmail.com</span></li>
              </ul>
            </div>

            {/* Currency + Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CURRENCY</h3>
              <select className="bg-gray-200 text-gray-800 p-2 rounded w-full">
                <option>PKR - Pakistani Rupee</option>
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
              </select>

              {/* Company Section Below Currency */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="hover:text-gray-600">About us</Link></li>
                  <li><Link to="#" className="hover:text-gray-600">Careers</Link></li>
                  <li><Link to="#" className="hover:text-gray-600">Store locator</Link></li>
                  <li><Link to="#" className="hover:text-gray-600">Store addresses</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
