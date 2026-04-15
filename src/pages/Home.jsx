import React, { useState, useEffect } from 'react';
import { Shield, Star, Globe, Plane, ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// 1. IMPORT ALL YOUR ASSETS
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import baliImg from '../assets/bali.jpg';
import thailandImg from '../assets/thailand.jpg';
import vietnamImg from '../assets/vietnam.jpg';
import kashmirImg from '../assets/kashmir.jpg';
import mauritiusImg from '../assets/mauritius.jpg';
import himachalImg from '../assets/himachal.jpg';
import kasiImg from '../assets/kasi.jpg';
import panchaboothaImg from '../assets/panchabootha.jpg';
import ujjanImg from '../assets/ujjan.jpg';
import andamanImg from '../assets/bali2.jpg'; 

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: hero1, title: "Tropical Paradises", subtitle: "Mauritius & Bali" },
    { url: hero2, title: "Divine Journeys", subtitle: "Spiritual Peace" },
    { url: hero3, title: "Mountain Escapes", subtitle: "Kashmir & Himachal" }
  ];

  const allPackages = [
    { title: "Mauritius Escape", img: mauritiusImg, dur: "6N/7D", cat: "International", price: "On Request" },
    { title: "Bali Paradise", img: baliImg, dur: "6N/7D", cat: "International", price: "₹78,000" },
    { title: "Thailand Songkran", img: thailandImg, dur: "4N/5D", cat: "International", price: "On Request" },
    { title: "Magic Vietnam", img: vietnamImg, dur: "6N/7D", cat: "International", price: "₹43,000" },
    { title: "Kashmir Bliss", img: kashmirImg, dur: "4N/5D", cat: "Domestic", price: "₹27,000" },
    { title: "Andaman Honeymoon", img: andamanImg, dur: "6N/7D", cat: "Domestic", price: "₹42,000" },
    { title: "Himachal Wonders", img: himachalImg, dur: "5N/6D", cat: "Domestic", price: "₹41,000" },
    { title: "Kasi-Ayodhya Yatra", img: kasiImg, dur: "3D/2N", cat: "Spiritual", price: "₹29,000" },
    { title: "Panchabhoota Yatra", img: panchaboothaImg, dur: "5 Days", cat: "Spiritual", price: "₹12,000" },
    { title: "Ujjain-Omkareshwar", img: ujjanImg, dur: "3 Days", cat: "Spiritual", price: "₹20,000" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-cream">
      {/* HERO SLIDER SECTION (Keep as is) */}
      <section className="relative h-[80vh] overflow-hidden bg-plum">
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={slides[currentSlide].url} className="w-full h-full object-cover" alt="Slide" />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 text-cream">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">{slides[currentSlide].title}</h2>
          <p className="text-gold font-bold tracking-widest uppercase mb-8">{slides[currentSlide].subtitle}</p>
          <Link to="/contact" className="bg-gold text-plum px-8 py-3 rounded-full font-bold hover:scale-105 transition">Book Now</Link>
        </div>
      </section>

      

      {/* FULL DESTINATIONS GRID */}
      <section className="py-24 bg-cream"> {/* Changed from bg-plum to bg-cream */}
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-end mb-12 border-b-2 border-gold pb-4">
      <h3 className="text-4xl font-extrabold text-plum uppercase italic tracking-tighter">
        Top <span className="text-gold">Destinations</span>
      </h3>
      <Link to="/packages" className="text-plum text-sm font-bold flex items-center gap-1 hover:text-gold transition">
        View All Packages <ChevronRight size={16}/>
      </Link>
    </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.map((pkg, idx) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={idx} 
                className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full shadow-2xl"
              >
                <div className="h-52 relative">
                  <img src={pkg.img} className="w-full h-full object-cover" alt={pkg.title} />
                  <div className="absolute top-4 left-4 bg-plum/80 text-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase italic">
                    {pkg.cat}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase mb-2">
                    <span className="flex items-center gap-1"><Clock size={12}/> {pkg.dur}</span>
                    <span className="text-gold">{pkg.price}</span>
                  </div>
                  <h4 className="text-xl font-bold text-plum mb-4">{pkg.title}</h4>
                  <Link to="/packages" className="mt-auto text-plum font-bold border-b-2 border-gold w-fit text-sm hover:text-gold transition">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
  <div className="container mx-auto px-4">
    
    {/* Headline and Subtext */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-plum mb-4 italic uppercase tracking-tighter">
        Why Travel With <span className="text-gold">Aaru Trips?</span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto font-medium">
        We don't just book tickets; we craft experiences. From spiritual awakenings to luxury island escapes, 
        here is why thousands of travelers trust us with their dream vacations.
      </p>
      <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
    </div>

    {/* Expanded Cards */}
    <div className="grid md:grid-cols-4 gap-8">
      {[
        { 
          icon: <Shield size={40} />, 
          title: "Secure Travel", 
          desc: "Your safety is our priority. We provide 24/7 on-trip support and fully verified local partners for every destination." 
        },
        { 
          icon: <Star size={40} />, 
          title: "4-Star Hotels", 
          desc: "We handpick only premium accommodations. Every hotel is vetted for comfort, cleanliness, and prime location." 
        },
        { 
          icon: <Globe size={40} />, 
          title: "Expert Guides", 
          desc: "Our professional English-speaking guides bring history and culture to life, ensuring you never miss a detail." 
        },
        { 
          icon: <Plane size={40} />, 
          title: "AC Transit", 
          desc: "Travel in luxury with fully air-conditioned vehicles for all transfers, ensuring a cool and comfortable journey." 
        }
      ].map((item, i) => (
        <motion.div 
          whileHover={{ y: -10 }}
          key={i} 
          className="bg-white p-8 rounded-[2rem] shadow-xl text-center border-b-4 border-gold group transition-all duration-300 hover:bg-plum hover:text-cream"
        >
          <div className="text-gold flex justify-center mb-6 group-hover:scale-110 transition duration-300">
            {item.icon}
          </div>
          <h4 className="font-bold text-xl mb-4 uppercase tracking-tight">{item.title}</h4>
          <p className="text-sm opacity-70 leading-relaxed font-medium">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* FINAL CTA STRIP */}
      <section className="py-16 bg-gold text-center">
         <h3 className="text-3xl font-bold text-plum mb-6 italic">Ready for your Divine Journey?</h3>
         <Link to="/contact" className="bg-plum text-gold px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:shadow-xl transition inline-block">Plan My Trip</Link>
      </section>
    </div>
  );
};

export default Home;