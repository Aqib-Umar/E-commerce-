// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Women from './pages/Women';
import ProductDetail from './pages/ProductDetails';
//import ProductDetail from './pages/Productdetail';
import TopSales from './pages/TopSales';
import About from './pages/About';
import Contact from './pages/Contact';
import Unstitched from './pages/Unstitched';
import Stitched from './pages/stitched';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women" element={<Women />} />
            <Route path="/stitched" element={<Stitched />}/>
            <Route path="/product/:id" element={<ProductDetail />} />
            
            <Route path="/top-sales" element={<TopSales />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/unstitched" element={<Unstitched />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;