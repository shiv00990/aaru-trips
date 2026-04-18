import React, { useState, useEffect } from 'react';
import { 
  Shield, Star, Globe, Plane, ChevronRight, Clock, 
  Mail, MessageCircle, MapPin, Quote 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// 1. ASSET IMPORTS
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
    <div className="bg-cream overflow-x-hidden">
      
      {/* 1. HERO SLIDER SECTION */}
      <section className="relative h-[80vh] overflow-hidden bg-plum">
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={slides[currentSlide].url} className="w-full h-full object-cover" alt="Slide" />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 text-cream">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {slides[currentSlide].title}
          </motion.h2>
          <p className="text-gold font-bold tracking-widest uppercase mb-8">{slides[currentSlide].subtitle}</p>
          <Link to="/contact" className="bg-gold text-plum px-10 py-4 rounded-full font-extrabold hover:scale-110 transition shadow-2xl">Book Now</Link>
        </div>
      </section>

      {/* 2. OUR MISSION / PHILOSOPHY SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">Our Mission</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-plum mb-8 italic">
            "Turning your travel dreams Divine Realities."<br/>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed font-medium">
            At Aaru Trips, we believe travel is more than just visiting a place—it's about the peace you find there. 
            Whether it's a spiritual yatra to the heart of India or a luxury escape to a tropical island, 
            we handle every detail so you can focus on the journey.
          </p>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-plum mb-4 italic uppercase tracking-tighter">
              Why Travel With <span className="text-gold">Aaru Trips?</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Shield size={40} />, title: "Secure Travel", desc: "Your safety is our priority. Verified local partners for every destination." },
              { icon: <Star size={40} />, title: "4-Star Hotels", desc: "Handpicked premium accommodations vetted for comfort and luxury." },
              { icon: <Globe size={40} />, title: "Expert Guides", desc: "Professional English-speaking guides to bring culture to life." },
              { icon: <Plane size={40} />, title: "AC Transit", desc: "Travel in luxury with fully air-conditioned vehicles for all transfers." }
            ].map((item, i) => (
              <motion.div whileHover={{ y: -10 }} key={i} className="bg-white p-8 rounded-[2rem] shadow-xl text-center border-b-4 border-gold group transition-all duration-300 hover:bg-plum hover:text-cream">
                <div className="text-gold flex justify-center mb-6 group-hover:scale-110 transition duration-300">{item.icon}</div>
                <h4 className="font-bold text-xl mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT TEASER SECTION ON HOME PAGE --- */}
<section className="py-24 bg-white overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2 relative">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
        <img 
          src={hero2} 
          className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-cream" 
          alt="About Aaru Trips" 
        />
      </div>
      <div className="md:w-1/2">
        <h4 className="text-gold font-bold tracking-widest uppercase mb-4">Know Us Better</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-plum mb-6 italic">A Legacy of <br/> Trust & <span className="text-gold">Peaceful Journeys</span></h2>
        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          At Aaru Trips, we don't just sell packages; we share stories. With deep roots in Chennai and Madurai, we specialize in making complex travel simple, safe, and soulful. 
        </p>
        <Link 
          to="/about" 
          className="inline-flex items-center gap-2 text-plum font-bold border-b-2 border-gold pb-1 hover:gap-4 transition-all"
        >
          Read Full Story <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* 4. TOP DESTINATIONS GRID */}
      <section className="py-24 bg-white border-t border-gold/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12 border-b-2 border-gold pb-4">
            <h3 className="text-4xl font-extrabold text-plum uppercase italic tracking-tighter">
              Top <span className="text-gold">Destinations</span>
            </h3>
            <Link to="/packages" className="text-plum text-sm font-bold flex items-center gap-1 hover:text-gold transition">
              View All Packages <ChevronRight size={16}/>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allPackages.map((pkg, idx) => (
              <motion.div whileHover={{ y: -5 }} key={idx} className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col h-full shadow-2xl border border-gold/5">
                <div className="h-60 relative">
                  <img src={pkg.img} className="w-full h-full object-cover" alt={pkg.title} />
                  <div className="absolute top-4 left-4 bg-plum/90 backdrop-blur-md text-gold px-4 py-1 rounded-full text-[10px] font-bold uppercase italic tracking-widest">
                    {pkg.cat}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase mb-3">
                    <span className="flex items-center gap-1"><Clock size={14} className="text-gold"/> {pkg.dur}</span>
                    <span className="text-gold text-lg">{pkg.price}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-plum mb-4">{pkg.title}</h4>
                  <Link to="/packages" className="mt-auto text-plum font-bold border-b-2 border-gold w-fit text-sm hover:text-gold transition-colors">
                    View Itinerary
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION (Social Proof) */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-plum italic">What Our <span className="text-gold">Travelers Say</span></h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sathya Narayan", loc: "Chennai", text: "Booked our Thailand trip via Aaru Trips. 24/7 assistance and truly exceptional service.", rating: 5 },
              { name: "Disha Dewangan", loc: "Madurai", text: "Had a really good experience planning our Bali trip. Highly recommend for their follow-up.", rating: 5 },
              { name: "Tata Reddy", loc: "Hyderabad", text: "Their communication was very good. They are very flexible in arranging the itinerary.", rating: 5 }
            ].map((rev, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-gold/10 relative shadow-sm hover:shadow-xl transition-all">
                <Quote className="text-gold/10 absolute top-8 right-8" size={50} />
                <div className="flex gap-1 mb-6 text-gold">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-plum/80 italic mb-8 leading-relaxed font-medium">"{rev.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-plum text-gold flex items-center justify-center font-bold">
                    {rev.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-plum leading-none">{rev.name}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{rev.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PRESENCE & CONTACT LINKS SECTION */}
      <section className="py-20 bg-plum text-cream relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-gold italic">Global Reach, <br/>Local Expertise</h3>
              <p className="text-cream/70 mb-8 max-w-md font-medium text-lg">Southern India's trusted travel partner. Connect with our regional experts instantly.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-2xl font-bold hover:text-gold transition"><MapPin className="text-gold" /> Chennai</div>
                <div className="flex items-center gap-4 text-2xl font-bold hover:text-gold transition"><MapPin className="text-gold" /> Madurai</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-2xl">
              <h4 className="text-2xl font-bold mb-8 text-gold text-center">Contact Us Instantly</h4>
              <div className="space-y-5">
                <a href="https://wa.me/919087060620?text=Hi%20Aaru%20Trips%2C%20I%20want%20to%20plan%20a%20trip!" 
                   className="flex items-center justify-between bg-[#25D366] text-white p-6 rounded-2xl font-bold hover:scale-105 transition shadow-lg group">
                  <span className="flex items-center gap-3 text-lg"><MessageCircle /> WhatsApp Us</span>
                  <ChevronRight className="group-hover:translate-x-2 transition" />
                </a>
                <a href="mailto:Aarutripsandtravels6@gmail.com" 
                   className="flex items-center justify-between bg-gold text-plum p-6 rounded-2xl font-bold hover:scale-105 transition shadow-lg group">
                  <span className="flex items-center gap-3 text-lg"><Mail /> Email Inquiry</span>
                  <ChevronRight className="group-hover:translate-x-2 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA STRIP */}
      <section className="py-16 bg-gold text-center">
         <h3 className="text-4xl font-black text-plum mb-6 italic tracking-tighter uppercase">Ready for your Divine Journey?</h3>
         <Link to="/contact" className="bg-plum text-gold px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] hover:shadow-2xl hover:scale-105 transition-all inline-block">Plan My Trip Now</Link>
      </section>
      
    </div>
  );
};

export default Home;