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

      

      {/* 2. OUR MISSION SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">Our Mission</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-plum mb-8 italic">
            "Turning your travel dreams into Divine Realities."<br/>
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
      {/* Updated Headline to reflect the "Different" concept */}
      <h2 className="text-4xl md:text-5xl font-bold text-plum mb-4 italic uppercase tracking-tighter">
        What Makes <span className="text-gold">Aaru Different?</span>
      </h2>
      <p className="text-gray-500 font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs">
        We design journeys for people—not packages.
      </p>
      <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        { 
          icon: <Shield size={40} />, 
          title: "Trust First", 
          desc: "No hidden costs or copy-paste plans. A transparent, honest, and reliable travel partner." 
        },
        { 
          icon: <Star size={40} />, 
          title: "Personalized", 
          desc: "Every itinerary is built from scratch. Your trip adjusts to you—not the other way around." 
        },
        { 
          icon: <Globe size={40} />, 
          title: "Emotion Driven", 
          desc: "We focus on how you want to feel—peaceful, adventurous, or connected." 
        },
        { 
          icon: <Plane size={40} />, 
          title: "Flexible Luxury", 
          desc: "From slow retreats to fun-filled adventures, we match the pace of your story." 
        }
      ].map((item, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-8 rounded-[2rem] shadow-xl text-center border-b-4 border-gold group transition-all duration-300 hover:bg-plum hover:text-cream"
        >
          <div className="text-gold flex justify-center mb-6 group-hover:scale-110 transition duration-300">
            {item.icon}
          </div>
          <h4 className="font-bold text-xl mb-4 uppercase tracking-tight">
            {item.title}
          </h4>
          <p className="text-sm opacity-70 leading-relaxed font-medium">
            {item.desc}
          </p>
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
          alt="The Aaru Experience" 
        />
      </div>
      <div className="md:w-1/2">
        <h4 className="text-gold font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">
          Beyond Fixed Packages
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold text-plum mb-6 italic leading-tight">
          Your Trip <span className="text-gold">Adjusts To You</span>, <br/> Not The Other Way Around.
        </h2>
        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          We understand that no two travelers seek the same thing. Whether it’s the silence of the mountains or a slow luxury getaway, we don't believe in "one size fits all." At Aaru, we design personalized journeys crafted around what you truly seek, ensuring every rupee spent translates into a perfectly planned memory.
        </p>
        <Link 
          to="/about" 
          className="inline-flex items-center gap-2 text-plum font-bold border-b-2 border-gold pb-1 hover:gap-4 transition-all"
        >
          Our story <ChevronRight size={20} />
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
      <h4 className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">Design Your Journey</h4>
      <h2 className="text-4xl md:text-5xl font-black text-plum italic uppercase">Crafted <span className="text-gold font-black">Experiences</span></h2>
      <p className="text-gray-500 mt-4 text-sm font-medium">Because no two journeys should look—or cost—the same.</p>
    </div>

    {['International', 'Domestic', 'Spiritual'].map((category) => (
      <div key={category} className="mb-20 last:mb-0">
        <div className="flex justify-between items-end mb-8 px-2 border-l-4 border-gold pl-6">
          <div>
            <h3 className="text-2xl font-black text-plum uppercase tracking-tighter">{category}</h3>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
              {category === 'Spiritual' ? 'Soulful Path Seekers' : `Bespoke ${category} Escapes`}
            </p>
          </div>
          <div className="hidden md:flex gap-2 text-gold text-xs font-bold uppercase italic opacity-70">
            Swipe to explore →
          </div>
        </div>

        <div className="flex items-stretch overflow-x-auto pb-10 gap-4 no-scrollbar snap-x snap-mandatory px-4 overscroll-x-contain cursor-grab active:cursor-grabbing touch-auto select-none">
          {allPackages
            .filter(pkg => pkg.cat === category)
            .map((pkg, idx) => (
              <div 
                key={idx} 
                className="min-w-[280px] md:min-w-[380px] snap-start bg-cream rounded-[2rem] overflow-hidden flex flex-col shadow-lg border border-gold/5 transition-all duration-300 hover:shadow-2xl mb-2"
              >
                <div className="h-48 md:h-56 relative overflow-hidden shrink-0">
                  <img 
                    src={pkg.img} 
                    className="w-full h-full object-cover pointer-events-none" 
                    alt={pkg.title} 
                  />
                  {/* CHANGED: Removed Price, Added Personalized Badge */}
                  <div className="absolute bottom-4 left-4 bg-plum text-gold px-4 py-1 rounded-full text-[9px] font-black uppercase italic shadow-xl border border-gold/30">
                    Bespoke Pricing
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[9px] font-bold text-gold uppercase mb-2 tracking-widest">
                    <Clock size={12}/> {pkg.dur}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-plum mb-4 leading-tight flex-grow">{pkg.title}</h4>
                  
                  {/* CHANGED: Refined Link Text */}
                  <Link 
                    to="/contact" 
                    className="flex items-center gap-2 text-plum font-bold text-xs hover:gap-4 transition-all mt-auto"
                  >
                    Customize This Trip <ChevronRight size={16} className="text-gold" />
                  </Link>
                </div>
              </div>
            ))}
        </div>

        <div className="md:hidden flex justify-center gap-1 mt-[-20px] mb-10">
           <div className="w-8 h-1 bg-gold rounded-full"></div>
           <div className="w-2 h-1 bg-gold/30 rounded-full"></div>
           <div className="w-1 h-1 bg-gold/20 rounded-full"></div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* 5. VIDEO TESTIMONIALS SECTION (UPDATED) */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">THE TRAVELER’S CHRONICLE</h4>
            <h2 className="text-4xl md:text-5xl font-black text-plum italic uppercase">
              THE <span className="text-gold">EXPERIENCE</span>
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
        <h4 className="text-gold font-bold tracking-widest uppercase mb-4 text-xs">Your Travel Partner</h4>
        <h3 className="text-4xl font-bold mb-6 text-gold italic leading-tight">
          Southern India’s Roots, <br/>Global Storytelling.
        </h3>
        <p className="text-cream/70 mb-8 max-w-md font-medium text-lg">
          We don’t just offer a service; we become your partner in planning. Based in Chennai and Bangalore, our experts are ready to craft a journey that fits your budget, your pace, and your purpose.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-2xl font-bold hover:text-gold transition">
            <MapPin className="text-gold" /> Chennai
          </div>
          <div className="flex items-center gap-4 text-2xl font-bold hover:text-gold transition">
            <MapPin className="text-gold" /> Bangalore
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-2xl">
        <h4 className="text-2xl font-bold mb-4 text-gold text-center italic">Start the Conversation</h4>
        <p className="text-center text-cream/60 text-xs uppercase tracking-widest mb-8">
          Share your details for a bespoke quote
        </p>
        <div className="space-y-5">
          <a href="https://wa.me/919087060620?text=Hi%20Aaru%20Trips%2C%20I%20want%20to%20plan%20a%20custom%20trip!" 
             className="flex items-center justify-between bg-[#25D366] text-white p-6 rounded-2xl font-bold hover:scale-105 transition shadow-lg group">
            <span className="flex items-center gap-3 text-lg"><MessageCircle /> WhatsApp</span>
            <ChevronRight className="group-hover:translate-x-2 transition" />
          </a>
          <a href="mailto:Aarutripsandtravels6@gmail.com" 
             className="flex items-center justify-between bg-gold text-plum p-6 rounded-2xl font-bold hover:scale-105 transition shadow-lg group">
            <span className="flex items-center gap-3 text-lg"><Mail /> Design My Trip</span>
            <ChevronRight className="group-hover:translate-x-2 transition" />
          </a>
        </div>
        <p className="text-center mt-6 text-[10px] text-cream/40 uppercase tracking-tighter">
          *Prices are determined based on your unique preferences
        </p>
      </div>
    </div>
  </div>
</section>

{/* 7. FINAL CTA STRIP */}
<section className="py-16 bg-gold text-center relative overflow-hidden">
  {/* Decorative subtle text for background depth */}
  <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
     <span className="text-[15vw] font-black text-plum whitespace-nowrap uppercase tracking-tighter">
       Your Story
     </span>
  </div>

  <div className="relative z-10 container mx-auto px-4">
    <h3 className="text-4xl md:text-5xl font-black text-plum mb-4 italic tracking-tighter uppercase">
      Ready to Craft <span className="underline decoration-plum/20 underline-offset-8">Your</span> Story?
    </h3>
    <p className="text-plum/80 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-8 max-w-2xl mx-auto leading-relaxed">
      No fixed plans. No copy-paste routes. <br className="hidden md:block" /> 
      Just a journey designed around your pace and your preferences.
    </p>
    
    <Link 
      to="/contact" 
      className="bg-plum text-gold px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] hover:shadow-2xl hover:scale-105 transition-all inline-block shadow-xl border border-plum/10"
    >
      Plan My Personalized Trip
    </Link>
    
    <p className="mt-6 text-plum/60 text-[9px] font-black uppercase tracking-widest">
      For Journeys. For Memories. For You.
    </p>
  </div>
</section>
      
    </div>
  );
};

export default Home;