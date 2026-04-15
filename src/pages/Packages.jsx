import React, { useState } from 'react';
import { Clock, X, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import baliImg from '../assets/bali.jpg';
import thailandImg from '../assets/thailand.jpg';
import vietnamImg from '../assets/vietnam.jpg';
import kashmirImg from '../assets/kashmir.jpg';
import mauritiusImg from '../assets/mauritius.jpg';
import himachalImg from '../assets/himachal.jpg';
import kasiImg from '../assets/kasi.jpg';
import panchaboothaImg from '../assets/panchabootha.jpg';
import ujjanImg from '../assets/ujjan.jpg';
import andamanImg from '../assets/bali2.jpg'; // Using bali2 for Andaman as a placeholder

const Packages = () => {
  const [filter, setFilter] = useState('All');
  const [selectedPkg, setSelectedPkg] = useState(null);

  const allTours = [
    // INTERNATIONAL
    { title: "Mauritius Escape", price: "On Request", dur: "6N/7D", cat: "International", img: mauritiusImg, details: "4-Star Hotel, Ile Aux Cerfs, South Island Tour, Seven Coloured Earth." },
    { title: "Bali Paradise", price: "₹78,000", dur: "6N/7D", cat: "International", img: baliImg, details: "Floating Breakfast, Private Pool Villa, Ubud & Kuta stays." },
    { title: "Thailand Songkran", price: "On Request", dur: "4N/5D", cat: "International", img: thailandImg, details: "Special Water Festival tour, Pattaya & Bangkok, Tiger Topia." },
    { title: "Magic Vietnam", price: "₹43,000", dur: "6N/7D", cat: "International", img: vietnamImg, details: "Ba Na Hills, Golden Bridge, Phu Quoc Vin Safari." },
    
    // DOMESTIC
    { title: "Kashmir Bliss", price: "₹27,000", dur: "4N/5D", cat: "Domestic", img: kashmirImg, details: "Dal Lake Houseboat, Gulmarg Gondola, Saffron fields." },
    { title: "Andaman Honeymoon", price: "₹42,000", dur: "6N/7D", cat: "Domestic", img: andamanImg, details: "Havelock Island, Candle Light Dinner, Couple Photoshoot." },
    { title: "Himachal Wonders", price: "₹41,000", dur: "5N/6D", cat: "Domestic", img: himachalImg, details: "Shimla & Manali, Solang Valley, Rohtang Pass." },

    // SPIRITUAL
    { title: "Kasi-Ayodhya Yatra", price: "₹29,000", dur: "3D/2N", cat: "Spiritual", img: kasiImg, details: "Ganga Aarti, Triveni Sangam, Ram Janmabhoomi Darshan." },
    { title: "Panchabhoota Yatra", price: "₹12,000", dur: "5 Days", cat: "Spiritual", img: panchaboothaImg, details: "16 Temples, Srikalahasti, Chidambaram, Madurai, Rameswaram." },
    { title: "Ujjain-Omkareshwar", price: "₹20,000", dur: "3 Days", cat: "Spiritual", img: ujjanImg, details: "Mahakaleshwar Jyotirlinga, Ram Ghat, Star Hotel Stay." }
  ];

  const filteredTours = filter === 'All' ? allTours : allTours.filter(t => t.cat === filter);

  return (
    <div className="py-20 bg-cream min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header & Filter */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-plum mb-6 italic">Explore Our <span className="text-gold">Destinations</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['All', 'International', 'Domestic', 'Spiritual'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${
                  filter === cat ? 'bg-plum text-gold border-plum' : 'bg-transparent text-plum border-plum/20 hover:border-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of 10 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTours.map((pkg, idx) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={idx} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gold/10 group flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={pkg.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={pkg.title} />
                <div className="absolute top-4 left-4 bg-plum/90 backdrop-blur-md text-gold px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {pkg.cat}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4 text-xs font-bold text-gray-400 uppercase">
                  <span className="flex items-center gap-1"><Clock size={14} className="text-gold"/> {pkg.dur}</span>
                  <span className="text-gold text-lg">{pkg.price}</span>
                </div>
                <h4 className="text-2xl font-bold text-plum mb-4 leading-tight">{pkg.title}</h4>
                <p className="text-sm text-gray-500 mb-8 line-clamp-2 italic">{pkg.details}</p>
                
                <button 
                  onClick={() => setSelectedPkg(pkg)}
                  className="mt-auto flex items-center justify-center gap-2 w-full bg-plum text-cream py-4 rounded-2xl font-bold hover:bg-gold hover:text-plum transition duration-300"
                >
                  View Full Itinerary <ChevronRight size={18}/>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Itinerary Modal */}
      <AnimatePresence>
        {selectedPkg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-plum/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              className="bg-cream rounded-[2.5rem] max-w-2xl w-full overflow-hidden relative shadow-2xl"
            >
              <button onClick={() => setSelectedPkg(null)} className="absolute top-6 right-6 bg-plum text-gold p-2 rounded-full z-10 hover:rotate-90 transition duration-300">
                <X size={24} />
              </button>
              <div className="p-10">
                <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">{selectedPkg.cat}</span>
                <h4 className="text-4xl font-bold text-plum mt-2 mb-6">{selectedPkg.title}</h4>
                <div className="bg-white p-6 rounded-2xl mb-8 border border-gold/20 shadow-inner">
                   <h5 className="font-bold text-plum uppercase text-xs mb-3 border-b border-gold/30 pb-2">Tour Highlights</h5>
                   <p className="text-gray-600 leading-relaxed italic">{selectedPkg.details}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Starting From</p>
                    <p className="text-3xl font-bold text-plum">{selectedPkg.price}</p>
                  </div>
                  <a href="/contact" className="bg-gold text-plum px-8 py-4 rounded-xl font-bold hover:shadow-lg transition active:scale-95">Book This Tour</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Packages;