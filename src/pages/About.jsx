import React from 'react';
import { Target, Award, Landmark, Shield, Users, ChevronDown, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

// Using your existing asset
import hero2 from '../assets/hero2.png';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
      } else {
        // This is the "Magic" line that allows the reset
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

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
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
        
        {/* Dark Overlay for better text readablity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-plum/90 z-10" />

        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-7xl md:text-9xl font-black text-[#FBBF24] italic uppercase tracking-tighter drop-shadow-2xl"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white font-bold tracking-[0.5em] uppercase mt-6 text-xs md:text-base border-y border-gold/30 py-4 px-8 inline-block"
          >
            Founded on Faith, Driven by Discovery
          </motion.p>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAV (Professional Touch) */}
      <nav className="bg-white border-b border-gold/10 sticky top-[72px] z-40 shadow-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-center gap-16 py-4 text-plum font-bold uppercase text-xs tracking-widest">
          <a href="#story" className="hover:text-gold transition">The Origin</a>
          <a href="#mission" className="hover:text-gold transition">Mission & Vision</a>
          <a href="#stats" className="hover:text-gold transition">Why Us</a>
          <a href="#presence" className="hover:text-gold transition">Our Presence</a>
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
            <h4 className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">Since the Beginning</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-plum mb-8 italic leading-tight">
              Bridging Devotion <br/> with <span className="text-gold">Discovery</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded with a vision to simplify the spiritual path for thousands, <strong>Aaru Trips</strong> began as a boutique initiative in Southern India. We noticed that while many wanted to embark on Divine Yatras, the journey was often stressful for the elderly and families.
              </p>
              <p>
                We stepped in to change that. By blending traditional values with modern luxury, we ensure that whether you are performing a ritual in Kasi or relaxing on a beach in Bali, your peace of mind is never compromised.
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
              className="rounded-[3rem] shadow-2xl border-4 border-white object-cover h-[500px] w-full" 
              alt="Team Spiritual Journey" 
            />
          </motion.div>
        </div>
      </section>

      {/* 4. MISSION & VISION GRID */}
      <section id="mission" className="py-24 bg-plum text-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 hover:border-gold/50 transition duration-500">
              <Target className="text-gold mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-4 italic">Our Mission</h3>
              <p className="text-cream/70 text-lg leading-relaxed">
                To provide safe, soulful, and sophisticated travel experiences. We strive to handle every complex detail, allowing our clients to disconnect from the chaos of life and reconnect with their inner peace.
              </p>
            </div>
            <div className="p-12 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 hover:border-gold/50 transition duration-500">
              <Award className="text-gold mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-4 italic">Our Vision</h3>
              <p className="text-cream/70 text-lg leading-relaxed">
                To be recognized as India’s most trusted boutique travel partner, celebrated for our integrity, our handpicked hospitality, and our unwavering commitment to the "Aaru" standard of service.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* --- UPGRADED TRUST & VALUE SECTION WITH ANIMATION --- */}
<section id="stats" className="py-24 bg-white border-y border-gold/10">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h3 className="text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">Our Credentials</h3>
      <h2 className="text-4xl font-bold text-plum italic uppercase">Why Thousands Trust Us</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {[
        { 
          icon: <Users size={40} />, 
          val: "5000",
          suffix: "+", 
          label: "Happy Travelers", 
          desc: "From solo backpackers to families of four generations, we've successfully managed diverse travel needs." 
        },
        { 
          icon: <Landmark size={40} />, 
          val: "100",
          suffix: "+", 
          label: "Spiritual Sites", 
          desc: "Deeply curated pilgrimages to Kasi, Ayodhya, and the Panchabhoota Sthalams with local expert guides." 
        },
        { 
          icon: <Globe size={40} />, 
          val: "15",
          suffix: "+", 
          label: "Global Destinations", 
          desc: "Partnered with premium 4-star hospitality groups in Bali, Thailand, Mauritius, and across Southeast Asia." 
        },
        { 
          icon: <Shield size={40} />, 
          val: "100",
          suffix: "%", 
          label: "Success Rate", 
          desc: "Our 'Zero-Hassle' guarantee ensures your transit, stay, and sightseeing are perfectly synchronized." 
        }
      ].map((stat, i) => (
        <motion.div 
          whileHover={{ y: -5 }}
          key={i} 
          className="text-center p-6"
        >
          {/* Icon Circle - Exact Design Preserved */}
          <div className="h-16 w-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
            {stat.icon}
          </div>
          
          {/* Animated Number - Exact Typography Preserved */}
          <p className="text-5xl font-black text-plum mb-2 tracking-tighter">
            <CountUp end={stat.val} />{stat.suffix}
          </p>
          
          <p className="text-sm font-bold text-gold uppercase tracking-[0.2em] mb-4">{stat.label}</p>
          
          {/* Informational Text - Exact Spacing Preserved */}
          <p className="text-gray-500 text-sm leading-relaxed px-4">
            {stat.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* 6. OUR PRESENCE */}
      <section id="presence" className="py-24 text-center bg-cream">
        <h3 className="text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">Where We Are</h3>
        <h2 className="text-4xl font-bold text-plum mb-16 italic uppercase">Our Regional Hubs</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-20">
          {['Chennai', 'Madurai', 'Trichy', 'Bangalore'].map((city) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={city} 
              className="bg-white px-12 py-8 rounded-[2rem] shadow-xl border border-gold/10 min-w-[200px]"
            >
              <div className="h-16 w-16 bg-plum/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="text-gold" size={28} />
              </div>
              <p className="text-xl font-bold text-plum uppercase tracking-widest">{city}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gold text-center">
        <h3 className="text-4xl font-black text-plum mb-8 italic uppercase tracking-tighter">Become Part of Our Story</h3>
        <a href="/contact" className="bg-plum text-gold px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-black transition-all">Start Your Journey</a>
      </section>

    </div>
  );
};

export default About;