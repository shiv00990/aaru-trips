import React, { useState, useEffect } from 'react';
import { 
  Shield, Star, Globe, Plane, ChevronDown,ChevronRight, Target, Award, Users, Landmark, Clock, 
  Mail, MessageCircle, MapPin, Quote 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Using your existing asset
import hero2 from '../assets/hero2.png';
import raguImg from '../assets/ragu.jpg';
import vinoImg from '../assets/vino.jpg'; 

const CountUp = ({ end, duration = 2000, useSeparator = true }) => {
  const [count, setCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
      } else {
        setStarted(false); 
        setCount(0);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!started) return;
    
    let start = 0;
    const finalEnd = parseInt(end);
    const increment = finalEnd / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= finalEnd) {
        setCount(finalEnd);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  // If useSeparator is true, use toLocaleString(), otherwise just return the number
  return (
    <span ref={elementRef}>
      {useSeparator ? count.toLocaleString() : count}
    </span>
  );
};

const About = () => {
  return (
    <div className="bg-cream min-h-screen font-sans selection:bg-gold selection:text-plum">
      
      {/* 1. IMPACT HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center bg-plum overflow-hidden border-b-8 border-gold">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={hero2} className="w-full h-full object-cover" alt="Divine Background" />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-plum/90 z-10" />

        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-8xl font-black text-[#FBBF24] italic uppercase tracking-tighter drop-shadow-2xl"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase mt-6 text-[10px] md:text-base border-y border-gold/30 py-4 px-8 inline-block"
          >
            For Journeys, For Memories, For You
          </motion.p>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAV */}
      <nav className="bg-white border-b border-gold/10 sticky top-[72px] z-40 shadow-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-center gap-16 py-4 text-plum font-bold uppercase text-xs tracking-widest">
          <a href="#story" className="hover:text-gold transition">The Brand</a>
          <a href="#mission" className="hover:text-gold transition">What We Do</a>
          <a href="#team" className="hover:text-gold transition">Leadership</a>
          <a href="#presence" className="hover:text-gold transition">Presence</a>
        </div>
      </nav>

      {/* 3. THE ORIGIN STORY */}
<section id="story" className="py-24 container mx-auto px-4">
  <div className="grid md:grid-cols-2 gap-16 items-center">
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <h4 className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">Guided with Purpose</h4>
      <h2 className="text-4xl md:text-5xl font-bold text-plum mb-8 italic leading-tight">
        Inspired by <span className="text-gold">Wisdom</span>, <br/> Crafted for Your Story
      </h2>
      <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
        <p>
          The name <strong>“Aaru”</strong> is inspired by “Aarumugam,” a sacred name symbolizing wisdom, protection, and the strength of six directions. It reflects our belief that every journey should be guided with care and a clear sense of purpose.
        </p>
        <p>
          At Aaru Trips and Travels, we understand that no two travelers seek the same connection. Some travel for the silence of the mountains, others for the thrill of discovery. This is why we don’t believe in fixed packages—we believe in <strong>crafted experiences</strong>.
        </p>
        <p className="text-plum font-bold italic">
          Your trip adjusts to you—your pace, your preferences, and your story. We design journeys for people, not copy-paste itineraries.
        </p>
      </div>
    </motion.div>

    <motion.div 
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gold/20 rounded-[3rem] rotate-3 -z-10" />
      <img 
        src={hero2} 
        className="rounded-[3rem] shadow-2xl border-4 border-white object-cover h-[500px] w-full transition-transform duration-700 hover:scale-[1.02]" 
        alt="Aaru Brand Story" 
      />
      {/* Small floating badge to reinforce the concept */}
      <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block border-l-4 border-gold">
        <p className="text-plum font-black text-sm uppercase leading-tight">
          Personalized <br/> <span className="text-gold">To Your Soul</span>
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* 4. MISSION & VISION GRID */}
<section id="mission" className="py-24 bg-plum text-cream relative overflow-hidden">
  <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* MISSION: Focus on Emotion & Experience */}
      <div className="p-12 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 hover:border-gold/50 transition duration-500 group">
        <Target className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" size={48} />
        <h3 className="text-3xl font-bold mb-4 italic text-gold">Our Mission</h3>
        <p className="text-cream/70 text-lg leading-relaxed">
          To craft journeys where the traveler doesn't have to adjust to a trip—the trip adjusts to them. We strive to create experiences designed around your pace, your preferences, and your story.
        </p>
      </div>

      {/* GOAL: Focus on Quality & Personalization over fixed numbers */}
      <div className="p-12 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 hover:border-gold/50 transition duration-500 group">
        <Award className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" size={48} />
        <h3 className="text-3xl font-bold mb-4 italic text-gold">Our Commitment</h3>
        <p className="text-cream/70 text-lg leading-relaxed">
          At Aaru, we don’t believe in "fixed packages." Our goal is to provide a perfectly planned experience for every rupee spent, ensuring a trust-first approach that is transparent, honest, and entirely bespoke.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* 5. TRUST STATS SECTION */}
<section id="stats" className="py-24 bg-white border-y border-gold/10">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h3 className="text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">
        Crafted for the Individual
      </h3>
      <h2 className="text-4xl font-bold text-plum italic uppercase">
        Personalized <span className="text-gold">Expertise</span>
      </h2>
      <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-4 font-bold">
        Because travel is not about where you go—it's about what you feel.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {[
        { 
          icon: <Users size={40} />, 
          val: "300",
          suffix: "+", 
          label: "Journeys Planned",
          desc: "Our mission is to build a legacy of trust by understanding that no two travelers are the same.",
          useSeparator: true 
        },
        { 
          icon: <Landmark size={40} />, 
          val: "100",
          suffix: "%", 
          label: "Custom-Made",
          desc: "Bespoke itineraries designed around your pace, your preferences, and your unique story.",
          useSeparator: true
        },
        { 
          icon: <Globe size={40} />, 
          val: "2025",
          suffix: "", 
          label: "Modern Vision",
          desc: "A digital-first partner based in Chennai, focused on creating memories rather than just packages.",
          useSeparator: false
        },
        { 
          icon: <Shield size={40} />, 
          val: "24",
          suffix: "/7", 
          label: "Guided Care",
          desc: "Transparent and reliable end-to-end support, ensuring your trip adjusts perfectly to you.",
          useSeparator: false
        }
      ].map((stat, i) => (
        <div key={i} className="text-center p-6 group">
          <div className="h-16 w-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
            {stat.icon}
          </div>
          <p className="text-5xl font-black text-plum mb-2 tracking-tighter">
            <CountUp end={stat.val} useSeparator={stat.useSeparator} />{stat.suffix}
          </p>
          <p className="text-[11px] font-bold text-gold uppercase tracking-[0.2em] mb-4">
            {stat.label}
          </p>
          <p className="text-gray-500 text-xs leading-relaxed px-4 font-medium italic">
            {stat.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* --- THE AARU PHILOSOPHY SECTION --- */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    
    {/* Header Section */}
    <div className="text-center mb-16">
      <h4 className="text-gold font-bold tracking-[0.3em] uppercase mb-6 text-[10px] md:text-xs">
        The Aaru Philosophy
      </h4>
      <h2 className="text-4xl md:text-6xl font-black text-plum italic leading-tight uppercase tracking-tighter">
        "Travel is not about where you go— <br className="hidden md:block" />
        it’s about <span className="text-gold underline decoration-gold/20 underline-offset-8">what you feel</span>."
      </h2>
    </div>

    {/* Content Grid */}
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
      
      {/* Left: Manifesto Text */}
      <div className="md:w-3/5 space-y-8">
        <div className="space-y-6 text-gray-500 font-medium leading-relaxed text-lg">
          <p>
            We understand that no two travelers are the same. Some seek peace, some seek adventure, some seek connection. 
          </p>
          <p>
            That is why every journey we create is designed around you—your pace, your preferences, your story.
          </p>
          <p>
            From serene spiritual yatras to vibrant international holidays, from intimate family getaways to carefully curated group experiences, we bring together comfort, detail, and personalization in every itinerary.
          </p>
        </div>
        
        <div className="pt-4">
          <p className="text-plum font-black text-2xl italic border-l-4 border-gold pl-6">
            At Aaru, we don’t believe in fixed packages. <br />
            We believe in crafted experiences.
          </p>
        </div>
      </div>

      {/* Right: Focused Callout Box */}
      <div className="md:w-2/5 w-full">
        <div className="bg-plum p-10 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
          {/* Subtle Decorative Circle */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
          
          <h3 className="text-gold text-2xl md:text-3xl font-bold mb-6 italic leading-tight">
            Crafted <br /> Experiences
          </h3>
          <p className="text-cream/80 text-sm md:text-base leading-relaxed mb-8">
            Because in the end, travel is not just about the destination—it’s about what you remember and what you take back with you.
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-[10px] border-b border-gold pb-2 hover:gap-4 transition-all"
          >
            Start Your Story <ChevronRight size={14}/>
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 6. TEAM SECTION */}
      <section id="team" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-gold font-bold tracking-[0.3em] uppercase mb-3 text-xs">Leadership</h4>
            <h2 className="text-3xl md:text-4xl font-black text-plum italic uppercase tracking-tighter">
              The Minds Behind <span className="text-gold">Aaru</span>
            </h2>
            <div className="w-12 h-1 bg-gold/30 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { 
                name: "Vinodhini Ragupathi", 
                role: "Founder", 
                desc: "The visionary architect behind the brand's passion for detail and personalized journeys.",
                image: vinoImg 
              },
              { 
                name: "Ragupathi Govindan", 
                role: "CEO", 
                desc: "Driving growth with a commitment to high-quality service and purpose-led expansion.",
                image: raguImg 
              }
            ].map((member, i) => (
              <div key={i} className="bg-cream rounded-[2.5rem] overflow-hidden shadow-lg border border-gold/10 flex flex-col items-center">
                <div className="w-full h-80 relative overflow-hidden bg-plum">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent" />
                </div>
                <div className="p-8 text-center w-full bg-white">
                  <h4 className="text-2xl font-bold text-plum mb-1">{member.name}</h4>
                  <p className="text-gold text-[10px] font-black uppercase tracking-[0.25em] mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-plum relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">Voices of Trust</h4>
              <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase">Traveler <span className="text-gold">Reviews</span></h2>
            </div>
            <div className="flex gap-2">
               {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-gold" fill="currentColor" />)}
               <span className="text-white font-bold ml-2">4.9/5 Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "K. Raghunath", loc: "Chennai", quote: "The Kasi Yatra was handled so gracefully. My elderly parents had zero stress during the rituals." },
              { name: "Priya Sharma", loc: "Bangalore", quote: "Our Bali honeymoon was perfectly curated. The 4-star hotels handpicked by Aaru were stunning." },
              { name: "Venkatesh Rao", loc: "Madurai", quote: "Responsive support 24/7. They actually treat you like family, not just customers." }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] relative shadow-2xl">
                <Quote className="text-gold/20 absolute top-8 right-8" size={40} />
                <p className="text-cream/80 italic text-lg mb-8 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold text-plum">{t.name[0]}</div>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-[10px] text-gold uppercase tracking-widest">{t.loc}</p>
                  </div>
                </div>
              </div>
            ))}
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

export default About;