import React from 'react';
import { Target, Users, Landmark, Award } from 'lucide-react';
import hero2 from '../assets/hero2.png'; // Using a nice spiritual/scenic image

const About = () => {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-plum overflow-hidden">
        <img src={hero2} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="About Aaru Trips" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gold italic uppercase">Our Story</h1>
          <p className="text-cream tracking-[0.3em] uppercase mt-4">Founded on Faith, Driven by Discovery</p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-plum mb-6 italic">Who is <span className="text-gold">Aaru Trips?</span></h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded with a passion for bridging the gap between spiritual devotion and world-class travel, Aaru Trips began as a small family-led initiative in Southern India. Our name, "Aaru," reflects the purity and flow of a river, symbolizing the seamless journey we provide to every traveler.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Specializing in both Divine Yatras and International Luxury Escapes, we have built a reputation for handling the smallest details—from elderly care during pilgrimages to private villas in Bali.
            </p>
          </div>
          <div className="bg-plum p-1 rounded-[3rem] shadow-2xl rotate-2">
            <img src={hero2} className="rounded-[3rem] -rotate-2 hover:rotate-0 transition-transform duration-500" alt="Team" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-cream rounded-[2rem] border-l-8 border-gold">
            <Target className="text-gold mb-4" size={40} />
            <h3 className="text-2xl font-bold text-plum mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">To provide safe, soulful, and sophisticated travel experiences that allow our clients to disconnect from the stress of life and reconnect with their inner peace or the beauty of the world.</p>
          </div>
          <div className="p-10 bg-cream rounded-[2rem] border-l-8 border-plum">
            <Award className="text-plum mb-4" size={40} />
            <h3 className="text-2xl font-bold text-plum mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">To become India's most trusted boutique travel partner, known for our integrity, handpicked 4-star hospitality, and unwavering commitment to customer safety.</p>
          </div>
        </div>
      </section>

      {/* The Presence Section */}
      <section className="py-24 text-center">
        <h3 className="text-3xl font-bold text-plum mb-12 italic uppercase">Our Presence</h3>
        <div className="flex flex-wrap justify-center gap-12">
          {['Chennai', 'Madurai', 'Trichy', 'Bangalore'].map((city) => (
            <div key={city} className="group cursor-default">
              <Landmark size={50} className="text-gold mx-auto mb-4 group-hover:scale-110 transition" />
              <p className="text-xl font-bold text-plum uppercase tracking-widest">{city}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;