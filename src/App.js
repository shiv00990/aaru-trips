import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from './pages/ScrollToTop';
import logocheck from './assets/logocheck2.png';

// Import your page components
import Home from './pages/Home';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';



function App(){
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add this

  const closeMenu = () => setIsMenuOpen(false);

  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <Router>
      {/* This must be inside Router to work, and outside Routes to affect all pages */}
      <ScrollToTop /> 

    <div className="bg-cream min-h-screen text-plum flex flex-col font-sans">
        
{/* --- TOP INFO BAR (Interactive) --- */}
<div className="bg-plum/10 text-plum py-2 px-6 text-[10px] md:text-xs flex justify-between border-b border-plum/5 font-medium uppercase tracking-wider">
  <div className="flex gap-4">
    {/* Clickable Phone */}
    <a 
      href="tel:+919087060620" 
      className="flex items-center gap-1 hover:text-gold transition-colors"
    >
      📞 +91 90870 60620
    </a>
    
    {/* Clickable Email */}
    <a 
      href="mailto:Aarutripsandtravels6@gmail.com" 
      className="flex items-center gap-1 hover:text-gold transition-colors"
    >
     <span>✉️</span>
      {/* Hide the long email address on mobile, show only "Email" */}
      <span className="hidden sm:inline">Aarutripsandtravels6@gmail.com</span>
      <span className="sm:hidden uppercase">Email Us Now</span>
    </a>
  </div>
  
  <div className="hidden md:block opacity-70">Mon - Sat: 09:00 - 18:00</div>
</div>

        {/* --- GLOBAL NAVIGATION --- */}
        <nav className="bg-plum text-cream py-4 px-6 sticky top-0 z-50 shadow-xl border-b border-gold/30">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="group flex items-center gap-4">
      {/* LOGO IMAGE PLACEHOLDER */}
      <img 
        src={logocheck}
        alt="Aaru Trips Logo" 
        className="h-10 md:h-12 w-auto object-contain transform scale-125 md:scale-150 group-hover:scale-155 transition duration-300" 
      />
    </Link>
            
            <div className="hidden md:flex gap-8 items-center font-semibold text-sm uppercase tracking-wider">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
              <Link to="/packages" className="hover:text-gold transition-colors">Tour Packages</Link>
              <Link to="/contact" className="bg-gold text-plum px-6 py-2 rounded-full hover:bg-cream hover:scale-105 transition-all shadow-lg text-xs">
                Plan My Trip
              </Link>
            </div>

            {/* MOBILE BUTTONS (Visible on Mobile only) */}
    <div className="flex md:hidden items-center gap-3">
      <Link to="/contact" className="bg-gold text-plum p-3 rounded-full shadow-lg">
        <Phone size={20} />
      </Link>
      
      {/* HAMBURGER / THREE DASHES BUTTON */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-gold p-2 transition-transform active:scale-90"
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
    </div>

    {/* MOBILE MENU OVERLAY (Slide Down) */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-plum border-b border-gold/30 flex flex-col p-8 gap-6 shadow-2xl md:hidden z-40"
        >
          <Link to="/" onClick={closeMenu} className="text-xl font-bold border-b border-white/5 pb-2">Home</Link>
          <Link to="/about" onClick={closeMenu} className="text-xl font-bold border-b border-white/5 pb-2">About Us</Link>
          <Link to="/packages" onClick={closeMenu} className="text-xl font-bold border-b border-white/5 pb-2">Tour Packages</Link>
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className="bg-gold text-plum text-center py-4 rounded-2xl font-black uppercase tracking-widest mt-2"
          >
            Plan My Trip
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
          </div>
        </nav>

        {/* --- FLOATING SOCIAL SIDEBAR --- */}
<div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col gap-4">

  <a 
    href="https://instagram.com/aarutripsandtravels"
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-plum text-cream p-3 rounded-full shadow-lg hover:bg-gold hover:text-plum transition-all hover:scale-110"
  >
    <FaInstagram size={18} />
  </a>

  <a 
    href="https://facebook.com/aarutripsandtravels"
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-plum text-cream p-3 rounded-full shadow-lg hover:bg-gold hover:text-plum transition-all hover:scale-110"
  >
    <FaFacebookF size={18} />
  </a>

  <a 
    href="https://linkedin.com/in/YOUR_USERNAME"
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-plum text-cream p-3 rounded-full shadow-lg hover:bg-gold hover:text-plum transition-all hover:scale-110"
  >
    <FaLinkedinIn size={18} />
  </a>

</div>


        {/* --- PAGE CONTENT --- */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        {/* --- GLOBAL FOOTER --- */}
        <footer className="bg-[#1a0e16] text-cream/40 py-12 px-4 border-t border-white/5">
          <div className="container mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h4 className="text-gold font-bold mb-4 tracking-widest uppercase">Aaru Trips</h4>
              <p className="text-sm leading-relaxed">
                Specializing in spiritual yatras and international luxury escapes. Your comfort is our priority at every step of your journey.
              </p>
            </div>
            
            <div>
              <h4 className="text-cream font-bold mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
              <ul className="text-sm space-y-3">
                <li><Link to="/packages" className="hover:text-gold transition">View All Packages</Link></li>
                <li><Link to="/about" className="hover:text-gold transition">Our Story</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition">Request a Quote</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-cream font-bold mb-4 uppercase text-xs tracking-widest">Contact Support</h4>
              <a href="mailto:Aarutripsandtravels6@gmail.com" className="block text-sm mb-2 hover:text-gold transition-colors">
                Aarutripsandtravels6@gmail.com
              </a>
              <a href="tel:+919087060620" className="block text-sm font-bold text-gold hover:text-cream transition-colors">
                +91 90870 60620
              </a>
              <p className="text-[10px] mt-4 opacity-50 uppercase tracking-tighter">
                Head Office: CHENNAI
              </p>
            </div>
          </div>

          <div className="container mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} Aaru Trips & Travels. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="/terms" className="hover:text-gold transition">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-gold transition">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;