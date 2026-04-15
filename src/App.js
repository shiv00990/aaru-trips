import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Mail, Instagram } from 'lucide-react';

// Import your page components
import Home from './pages/Home';
import Packages from './pages/Packages';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-cream min-h-screen text-plum flex flex-col">
        
        {/* --- GLOBAL NAVIGATION --- */}
        <nav className="bg-plum text-cream py-4 px-6 sticky top-0 z-50 shadow-xl border-b border-gold/30">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="group">
              <h1 className="text-xl md:text-2xl font-bold tracking-widest text-gold uppercase group-hover:scale-105 transition">Aaru Trips</h1>
              <p className="text-[10px] uppercase tracking-widest text-cream/60">Divine Journey, Peaceful Experience</p>
            </Link>
            
            <div className="hidden md:flex gap-8 items-center font-semibold text-sm uppercase">
              <Link to="/" className="hover:text-gold transition">Home</Link>
              <Link to="/packages" className="hover:text-gold transition">Tour Packages</Link>
              <Link to="/contact" className="bg-gold text-plum px-5 py-2 rounded-full hover:bg-cream transition">Plan My Trip</Link>
            </div>
          </div>
        </nav>

        {/* --- PAGE CONTENT --- */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* --- GLOBAL FOOTER --- */}
        <footer className="bg-[#1a0e16] text-cream/40 py-12 px-4 border-t border-white/5">
          <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-gold font-bold mb-4">AARU TRIPS</h4>
              <p className="text-sm">Specializing in spiritual yatras and international luxury escapes. Your comfort is our priority.</p>
            </div>
            <div>
              <h4 className="text-cream font-bold mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li><Link to="/packages" className="hover:text-gold">All Packages</Link></li>
                <li><Link to="/contact" className="hover:text-gold">Request a Quote</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-cream font-bold mb-4">Contact</h4>
              <p className="text-sm">Aarutripsandtravels6@gmail.com</p>
              <p className="text-sm">+91 90870 60620</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;