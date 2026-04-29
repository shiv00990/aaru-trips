import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import ScrollToTop from './pages/ScrollToTop';
import logocheck from './assets/logocheck.png';

// Import your page components
import Home from './pages/Home';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';



function App(){
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
      className="hidden sm:flex items-center gap-1 hover:text-gold transition-colors"
    >
      ✉️ Aarutripsandtravels6@gmail.com
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

            <Link to="/contact" className="md:hidden bg-gold text-plum p-2 rounded-full">
              <Phone size={20} />
            </Link>
          </div>
        </nav>


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
                Head Office: [Your City, India]
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