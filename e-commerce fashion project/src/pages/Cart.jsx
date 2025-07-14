// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-10 text-center">
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            to="/" 
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {cartItems.map((item) => (
              <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                {/* Desktop Layout */}
                <div className="hidden sm:flex items-center p-4 sm:p-6">
                  {/* Product Image */}
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg mr-4 sm:mr-6 flex-shrink-0"
                  />
                  
                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 truncate">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-1 sm:mb-2">SKU: {item.sku}</p>
                    <p className="text-base sm:text-lg font-bold text-pink-600">PKR {item.price?.toLocaleString()}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center mx-4 sm:mx-6">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <span className="mx-3 sm:mx-4 font-semibold text-sm sm:text-lg min-w-[20px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                    >
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                  
                  {/* Subtotal */}
                  <div className="text-right mx-4 sm:mx-6 min-w-[80px]">
                    <p className="text-base sm:text-lg font-bold text-gray-800">
                      PKR {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  
                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-2 flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Mobile Layout */}
                <div className="sm:hidden p-4">
                  <div className="flex gap-3 mb-3">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">SKU: {item.sku}</p>
                      <p className="text-lg font-bold text-pink-600">PKR {item.price?.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="mx-3 font-semibold text-base min-w-[20px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Subtotal and Remove */}
                    <div className="flex items-center gap-4">
                      <p className="text-base font-bold text-gray-800">
                        PKR {(item.price * item.quantity).toLocaleString()}
                      </p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cart Summary */}
        <div className="lg:w-96">
          <div className="bg-pink-50 rounded-lg p-4 sm:p-6 border border-pink-200 sticky top-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                <span className="font-semibold">PKR {cartTotal?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">FREE</span>
              </div>
              <div className="border-t border-gray-300 pt-3">
                <div className="flex justify-between">
                  <span className="text-base sm:text-lg font-bold">Total</span>
                  <span className="text-base sm:text-lg font-bold text-pink-600">PKR {cartTotal?.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-colors mb-3 text-sm sm:text-base">
              Proceed to Checkout
            </button>
            
            <Link 
              to="/" 
              className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors text-sm sm:text-base"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}