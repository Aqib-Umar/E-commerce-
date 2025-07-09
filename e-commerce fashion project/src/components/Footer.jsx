// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Customer Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CUSTOMER SERVICES</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Delivery & Orders</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Returns & Exchanges</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Track My Order</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Payment Guides</Link></li>
            </ul>
          </div>
          
          {/* Assistance */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FOR ASSISTANCE</h3>
            <ul className="space-y-2">
              <li>Whatsapp: <span className="text-gray-300">0322 6773534</span></li>
              <li>Email: <span className="text-gray-300">elisha@gmail.com</span></li>
            </ul>
          </div>
          
          {/* Currency */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CURRENCY</h3>
            <select className="bg-gray-800 text-white p-2 rounded w-full">
              <option>PKR - Pakistani Rupee</option>
              <option>USD - US Dollar</option>
              <option>EUR - Euro</option>
            </select>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-300">About us</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Careers</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Store locator</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Store addresses</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Elisha Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;