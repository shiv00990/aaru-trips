import React, { useState } from 'react';
import { Clock, X, ChevronRight, CheckCircle2, Info, Calendar, WhatsApp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Asset imports
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

const Packages = () => {
  const [filter, setFilter] = useState('All');
  const [selectedPkg, setSelectedPkg] = useState(null);

  const allTours = [
    // --- INTERNATIONAL ---
    { 
      title: "Mauritius Escape", price: "On Request", dur: "6N/7D", cat: "International", img: mauritiusImg, 
      details: "Luxury beach resort stay with comprehensive island exploration.",
      highlights: ["Ile Aux Cerfs Water Sports", "Seven Coloured Earth", "Grand Bassin Lake"],
      itinerary: [
        { day: "Day 1", title: "Arrival", desc: "Transfer to resort, enjoy beach dinner." },
        { day: "Day 2", title: "Ile Aux Cerfs", desc: "Speedboat transfers and water sports." },
        { day: "Day 3", title: "South Tour", desc: "Seven Coloured Earth and Grand Bassin." },
        { day: "Day 4", title: "Leisure", desc: "Relax or explore local markets." },
        { day: "Day 5", title: "North Tour", desc: "Botanical Garden and Waterfront." },
        { day: "Day 6", title: "Sea Walk", desc: "Underwater sea walk experience." },
        { day: "Day 7", title: "Departure", desc: "Airport drop-off." }
      ],
      inclusions: ["4-Star Resort", "Daily Breakfast & Dinner", "Island Transfers"]
    },
    { 
      title: "Bali Paradise", price: "₹78,000", dur: "6N/7D", cat: "International", img: baliImg, 
      details: "A romantic blend of Ubud's jungle serenity and Kuta's vibrant beaches.",
      highlights: ["Private Pool Villa", "Floating Breakfast", "Nusa Penida Trip"],
      itinerary: [
        { day: "Day 1", title: "Ubud Arrival", desc: "Villa check-in and leisure." },
        { day: "Day 2", title: "Ubud Tour", desc: "Monkey Forest and Rice Terrace." },
        { day: "Day 3", title: "Kintamani", desc: "Mount Batur volcano views." },
        { day: "Day 4", title: "South Bali", desc: "Transfer to Kuta/Seminyak." },
        { day: "Day 5", title: "Nusa Penida", desc: "Kelingking Beach day trip." },
        { day: "Day 6", title: "Tanah Lot", desc: "Temple sunset visit." },
        { day: "Day 7", title: "Departure", desc: "Airport transfer." }
      ],
      inclusions: ["Pool Villa", "Floating Breakfast", "Private AC Car"]
    },
    { 
      title: "Thailand Songkran", price: "On Request", dur: "4N/5D", cat: "International", img: thailandImg, 
      details: "Experience the vibrant Water Festival and the best of Pattaya & Bangkok.",
      highlights: ["Songkran Festival", "Coral Island Speedboat", "Safari World"],
      itinerary: [
        { day: "Day 1", title: "Pattaya", desc: "Arrival and Alcazar Show." },
        { day: "Day 2", title: "Coral Island", desc: "Water sports and seafood lunch." },
        { day: "Day 3", title: "Bangkok", desc: "Temple tours and Gems Gallery." },
        { day: "Day 4", title: "Safari World", desc: "Full day at Marine Park." },
        { day: "Day 5", title: "Departure", desc: "Shopping and Airport drop." }
      ],
      inclusions: ["4-Star Hotels", "Safari World Tickets", "All Transfers"]
    },
    { 
      title: "Magic Vietnam", price: "₹43,000", dur: "6N/7D", cat: "International", img: vietnamImg, 
      details: "Discover the Golden Bridge and the hidden gems of Central Vietnam.",
      highlights: ["Ba Na Hills", "Golden Bridge", "Hoi An Ancient Town"],
      itinerary: [
        { day: "Day 1", title: "Da Nang", desc: "Arrival and Marble Mountains." },
        { day: "Day 2", title: "Ba Na Hills", desc: "Cable car and Golden Bridge." },
        { day: "Day 3", title: "Hoi An", desc: "Basket Boat and Ancient Town." },
        { day: "Day 4", title: "Hue City", desc: "Imperial City excursion." },
        { day: "Day 5", title: "Phu Quoc", desc: "Flight to island paradise." },
        { day: "Day 6", title: "Vin Safari", desc: "Wildlife and theme park." },
        { day: "Day 7", title: "Departure", desc: "Flight back home." }
      ],
      inclusions: ["Domestic Flights", "Entrance Fees", "Daily Meals"]
    },

    // --- DOMESTIC ---
    { 
      title: "Kashmir Bliss", price: "₹27,000", dur: "4N/5D", cat: "Domestic", img: kashmirImg, 
      details: "Heaven on earth with shikara rides and snow-capped peaks.",
      highlights: ["Dal Lake Houseboat", "Gulmarg Gondola", "Pahalgam Valley"],
      itinerary: [
        { day: "Day 1", title: "Srinagar", desc: "Houseboat check-in and Shikara ride." },
        { day: "Day 2", title: "Gulmarg", desc: "Gondola ride and snow activities." },
        { day: "Day 3", title: "Pahalgam", desc: "Betab Valley and Lidder River." },
        { day: "Day 4", title: "Sonmarg", desc: "Glacier visit and pony rides." },
        { day: "Day 5", title: "Departure", desc: "Mughal Gardens and Airport." }
      ],
      inclusions: ["Houseboat Stay", "AC Vehicle", "Breakfast & Dinner"]
    },
    { 
      title: "Andaman Honeymoon", price: "₹42,000", dur: "6N/7D", cat: "Domestic", img: andamanImg, 
      details: "Crystal clear waters and private beach moments.",
      highlights: ["Havelock Island", "Radhanagar Beach", "Scuba Diving"],
      itinerary: [
        { day: "Day 1", title: "Port Blair", desc: "Cellular Jail light & sound show." },
        { day: "Day 2", title: "Havelock", desc: "Private Ferry to Havelock island." },
        { day: "Day 3", title: "Elephant Beach", desc: "Snorkeling and water sports." },
        { day: "Day 4", title: "Neil Island", desc: "Natural Bridge and Laxmanpur beach." },
        { day: "Day 5", title: "Port Blair", desc: "Return ferry and shopping." },
        { day: "Day 6", title: "Baratang", desc: "Limestone caves and Jarawa reserve." },
        { day: "Day 7", title: "Departure", desc: "Airport drop-off." }
      ],
      inclusions: ["Ferry Tickets", "Candlelight Dinner", "Decorated Bed"]
    },
    { 
      title: "Himachal Wonders", price: "₹41,000", dur: "5N/6D", cat: "Domestic", img: himachalImg, 
      details: "Explore the scenic beauty of Shimla, Manali, and Rohtang Pass.",
      highlights: ["Solang Valley", "Mall Road Shopping", "Hadimba Temple"],
      itinerary: [
        { day: "Day 1", title: "Shimla", desc: "Arrival and Ridge walk." },
        { day: "Day 2", title: "Kufri", desc: "Adventure park and pony rides." },
        { day: "Day 3", title: "Manali", desc: "Scenic drive via Kullu Valley." },
        { day: "Day 4", title: "Solang Valley", desc: "Snow sports and Rohtang Pass." },
        { day: "Day 5", title: "Manali Local", desc: "Temple and Monastery visits." },
        { day: "Day 6", title: "Departure", desc: "Return drive to Chandigarh." }
      ],
      inclusions: ["AC Volvo/Car", "3-Star Deluxe Hotels", "Taxes"]
    },

    // --- SPIRITUAL ---
    { 
      title: "Kasi-Ayodhya Yatra", price: "₹29,000", dur: "3D/2N", cat: "Spiritual", img: kasiImg, 
      details: "Sacred darshan at the heart of Indian spirituality.",
      highlights: ["Ganga Aarti", "Ram Mandir Darshan", "Kashi Vishwanath"],
      itinerary: [
        { day: "Day 1", title: "Varanasi", desc: "Ganga Aarti and evening boat." },
        { day: "Day 2", title: "Vishwanath", desc: "Darshan and travel to Ayodhya." },
        { day: "Day 3", title: "Ayodhya", desc: "Ram Mandir and Hanuman Garhi." }
      ],
      inclusions: ["VIP Darshan", "Pure Veg Meals", "AC Transport"]
    },
    { 
      title: "Panchabhoota Yatra", price: "₹12,000", dur: "5 Days", cat: "Spiritual", img: panchaboothaImg, 
      details: "Divine journey to the 5 elements of Shiva.",
      highlights: ["Chidambaram", "Kalahasti", "Arunachalam"],
      itinerary: [
        { day: "Day 1", title: "Kalahasti", desc: "Vayu Lingam Darshan." },
        { day: "Day 2", title: "Kanchi", desc: "Prithvi Lingam (Ekambareswarar)." },
        { day: "Day 3", title: "Arunachalam", desc: "Agni Lingam and Girivalam." },
        { day: "Day 4", title: "Chidambaram", desc: "Akasa Lingam (Natarajar)." },
        { day: "Day 5", title: "Trichy", desc: "Jambu Lingam (Thiruvanaikaval)." }
      ],
      inclusions: ["Temple Guide", "AC Accommodation", "Group Coach"]
    },
    { 
      title: "Ujjain-Omkareshwar", price: "₹20,000", dur: "3 Days", cat: "Spiritual", img: ujjanImg, 
      details: "The land of Mahakal and the sacred Narmada river.",
      highlights: ["Bhasma Aarti", "Jyotirlinga Darshan", "Narmada Boat"],
      itinerary: [
        { day: "Day 1", title: "Ujjain", desc: "Arrival and evening Darshan." },
        { day: "Day 2", title: "Mahakal", desc: "Early morning Bhasma Aarti." },
        { day: "Day 3", title: "Omkareshwar", desc: "River rituals and departure." }
      ],
      inclusions: ["Aarti Booking", "AC Hotel", "Local Guide"]
    }
  ];

  const filteredTours = filter === 'All' ? allTours : allTours.filter(t => t.cat === filter);

  return (
    <div className="py-20 bg-cream min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-plum mb-6 italic uppercase tracking-tighter">Explore Our <span className="text-gold">Destinations</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['All', 'International', 'Domestic', 'Spiritual'].map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${
                  filter === cat ? 'bg-plum text-gold border-plum' : 'bg-transparent text-plum border-plum/20 hover:border-gold'
                }`}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTours.map((pkg, idx) => (
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={idx} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gold/10 group flex flex-col h-full hover:shadow-2xl transition-shadow">
              <div className="relative h-60 overflow-hidden">
                <img src={pkg.img} className="w-full h-full object-cover transition duration-700" alt={pkg.title} />
                <div className="absolute top-4 left-4 bg-plum/90 backdrop-blur-md text-gold px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{pkg.cat}</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4 text-xs font-bold text-gray-400 uppercase">
                  <span className="flex items-center gap-1"><Clock size={14} className="text-gold"/> {pkg.dur}</span>
                  <span className="text-gold text-lg">{pkg.price}</span>
                </div>
                <h4 className="text-2xl font-bold text-plum mb-4 leading-tight">{pkg.title}</h4>
                <p className="text-sm text-gray-500 mb-8 line-clamp-2 italic">{pkg.details}</p>
                <button onClick={() => setSelectedPkg(pkg)} className="mt-auto flex items-center justify-center gap-2 w-full bg-plum text-cream py-4 rounded-2xl font-bold hover:bg-gold hover:text-plum transition duration-300">
                  View Full Itinerary <ChevronRight size={18}/>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPkg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-plum/90 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              className="bg-cream rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col">
              
              <div className="p-8 md:p-10 bg-white border-b border-gold/10 flex justify-between items-center">
                <div>
                  <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px]">{selectedPkg.cat}</span>
                  <h4 className="text-3xl md:text-4xl font-bold text-plum mt-2 leading-none">{selectedPkg.title}</h4>
                </div>
                <button onClick={() => setSelectedPkg(null)} className="bg-plum text-gold p-3 rounded-full hover:rotate-90 transition duration-300"><X size={24} /></button>
              </div>

              <div className="overflow-y-auto p-8 md:p-10 flex-grow scrollbar-thin">
                <div className="grid md:grid-cols-3 gap-10">
                  <div className="md:col-span-2 space-y-8">
                    <h5 className="flex items-center gap-2 text-plum font-bold uppercase tracking-widest text-sm border-l-4 border-gold pl-4"><Calendar size={18} className="text-gold"/> Day-by-Day Plan</h5>
                    {selectedPkg.itinerary.map((item, i) => (
                      <div key={i} className="relative pl-8 border-l-2 border-gold/20 pb-8 last:pb-0">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold shadow-lg" />
                        <span className="text-[10px] font-black text-gold uppercase">{item.day}</span>
                        <h6 className="text-xl font-bold text-plum mb-2">{item.title}</h6>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white p-8 rounded-[2rem] border border-gold/10 shadow-sm">
                      <h5 className="flex items-center gap-2 text-plum font-bold uppercase tracking-widest text-xs mb-6"><CheckCircle2 size={16} className="text-gold"/> Inclusions</h5>
                      <ul className="space-y-4">
                        {selectedPkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600"><span className="text-gold mt-1">•</span> {inc}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-plum text-cream p-8 rounded-[2rem] shadow-xl">
                      <h5 className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs mb-4"><Info size={16}/> Ground Assistance</h5>
                      <p className="text-[11px] opacity-70">Aaru Trips provides 24/7 dedicated local support to ensure your journey is peaceful and divine.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:px-10 bg-white border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black">Starting From</p>
                  <p className="text-4xl font-black text-plum">{selectedPkg.price}</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <a href={`https://wa.me/919087060620?text=Hi Aaru Trips, I'm interested in the ${selectedPkg.title} package.`} target="_blank" rel="noreferrer" className="flex-1 md:flex-none text-center bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition shadow-lg">WhatsApp</a>
                  <Link to="/contact" className="flex-1 md:flex-none text-center bg-gold text-plum px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition">Book Now</Link>
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