import React, { useState, useEffect } from 'react';
import {  X, Play } from 'lucide-react';
import { 
  Shield, Star, Globe, Plane, ChevronRight, Clock, 
  Mail, MessageCircle, MapPin, Quote 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ASSET IMPORTS
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
  // NEW: State to track which video is playing in the popup
  const [activeVideo, setActiveVideo] = useState(null);

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
      
      {/* HERO FIXED */}
      <section className="relative h-[85vh] md:h-[90vh] bg-plum border-b-8 border-gold">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide} 
              initial={{ opacity: 0, scale: 1.1 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 1.5 }} 
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-plum/80 z-10" />
              <img src={slides[currentSlide].url} className="w-full h-full object-cover" alt="Slide" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white font-bold tracking-[0.4em] uppercase mb-4 text-xs md:text-sm border-y border-gold/30 py-2 px-6 inline-block"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-9xl font-black text-[#FBBF24] italic uppercase tracking-tighter drop-shadow-2xl mb-8"
          >
            {slides[currentSlide].title}
          </motion.h2>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            <Link to="/contact" className="bg-[#FBBF24] text-plum px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-110 hover:bg-white transition-all shadow-[0_0_30px_rgba(251,191,36,0.4)]">
              Plan My Trip
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION, WHY CHOOSE US, ABOUT (Removed for brevity as they remain unchanged) */}

      {/* --- CATEGORIZED PACKAGE SWIPER (Unchanged) --- */}
      {/* ... (Keep your existing Swiper code here) ... */}

      

      {/* 2. OUR MISSION SECTION */}
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
              <motion.div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl text-center border-b-4 border-gold group transition-all duration-300 hover:bg-plum hover:text-cream">
                <div className="text-gold flex justify-center mb-6 group-hover:scale-110 transition duration-300">{item.icon}</div>
                <h4 className="font-bold text-xl mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT TEASER SECTION */}
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

      {/* 5. VIDEO TESTIMONIALS SECTION (UPDATED) */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">Real Stories</h4>
            <h2 className="text-4xl md:text-5xl font-black text-plum italic uppercase">
              Travelers <span className="text-gold">On Camera</span>
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Sathya Narayan", 
                trip: "Thailand Bliss", 
                videoUrl: "https://www.youtube.com/embed/1ceesqVVqZc?autoplay=1",
                thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2078&auto=format&fit=crop" 
              },
              { 
                name: "Disha Dewangan", 
                trip: "Bali Paradise", 
                videoUrl: "https://www.youtube.com/embed/PJDvoQGcNE0?autoplay=1", 
                thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2076&auto=format&fit=crop"
              },
              { 
                name: "Tata Reddy", 
                trip: "Kasi Yatra", 
                videoUrl: "https://www.youtube.com/embed/ofSggv8ZE-k?autoplay=1", 
                thumbnail: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop"
              }
            ].map((video, i) => (
              <div 
                key={i} 
                onClick={() => setActiveVideo(video)} // CLICK TO OPEN
                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white cursor-pointer"
              >
                <img src={video.thumbnail} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={video.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-plum via-transparent to-black/20 opacity-80" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.6)] group-hover:scale-125 transition-transform">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-plum border-b-[12px] border-b-transparent ml-2" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex gap-1 text-gold mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <h4 className="text-2xl font-bold text-white leading-none">{video.name}</h4>
                  <p className="text-gold font-medium text-xs uppercase tracking-widest mt-2">Trip: {video.trip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POPUP MODAL (NEW) */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-plum/95 backdrop-blur-xl"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-md aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl"
              >
                <button 
                  onClick={() => setActiveVideo(null)} 
                  className="absolute top-4 right-4 z-10 bg-gold text-plum p-2 rounded-full hover:rotate-90 transition-all"
                >
                  <X size={24} />
                </button>
                <iframe 
                  src={activeVideo.videoUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

{/* --- CATEGORIZED PACKAGE SWIPER --- */}
<section className="py-24 bg-white overflow-hidden w-full">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h4 className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">Curated Experiences</h4>
      <h2 className="text-4xl md:text-5xl font-black text-plum italic uppercase">Explore <span className="text-gold font-black">Categories</span></h2>
    </div>

    {['International', 'Domestic', 'Spiritual'].map((category) => (
      <div key={category} className="mb-20 last:mb-0">
        <div className="flex justify-between items-end mb-8 px-2 border-l-4 border-gold pl-6">
          <div>
            <h3 className="text-2xl font-black text-plum uppercase tracking-tighter">{category}</h3>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Handpicked {category} Escapes</p>
          </div>
          <div className="hidden md:flex gap-2 text-gold text-xs font-bold uppercase italic opacity-70">
            Swipe to explore →
          </div>
        </div>

        {/* --- CATEGORIZED PACKAGE SWIPER --- */}
<div className="flex items-stretch overflow-x-auto pb-10 gap-4 no-scrollbar snap-x snap-mandatory px-4 overscroll-x-contain cursor-grab active:cursor-grabbing touch-pan-x select-none">
  {allPackages
    .filter(pkg => pkg.cat === category)
    .map((pkg, idx) => (
      <div 
        key={idx} 
        /* FIX 1: Changed min-w to [280px] for mobile (was 300px).
           FIX 2: Added 'last:mr-8' to ensure the last card doesn't touch the edge.
        */
        className="min-w-[280px] md:min-w-[380px] snap-start bg-cream rounded-[2rem] overflow-hidden flex flex-col shadow-lg border border-gold/5 transition-all duration-300 hover:shadow-2xl mb-2"
      >
        {/* Slightly reduced image height for mobile */}
        <div className="h-48 md:h-56 relative overflow-hidden shrink-0">
          <img 
            src={pkg.img} 
            className="w-full h-full object-cover pointer-events-none" 
            alt={pkg.title} 
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-plum px-3 py-1 rounded-full text-[9px] font-black uppercase italic shadow-xl">
            {pkg.price}
          </div>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-[9px] font-bold text-gold uppercase mb-2 tracking-widest">
            <Clock size={12}/> {pkg.dur}
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-plum mb-4 leading-tight flex-grow">{pkg.title}</h4>
          <Link 
            to="/contact" 
            className="flex items-center gap-2 text-plum font-bold text-xs hover:gap-4 transition-all mt-auto"
          >
            Check Availability <ChevronRight size={16} className="text-gold" />
          </Link>
        </div>
      </div>
    ))}
</div>

{/* --- VISUAL CUE: Swipe Indicator (Add this right below the swiper div) --- */}
<div className="md:hidden flex justify-center gap-1 mt-[-20px] mb-10">
   <div className="w-8 h-1 bg-gold rounded-full"></div>
   <div className="w-2 h-1 bg-gold/30 rounded-full"></div>
   <div className="w-1 h-1 bg-gold/20 rounded-full"></div>
</div>
      </div>
    ))}
  </div>
</section>


      {/* 5. TESTIMONIALS SECTION */}
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

      {/* 6. OUR PRESENCE SECTION */}
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