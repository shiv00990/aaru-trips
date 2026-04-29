import React, { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    journeyDate: '',
    msg: ''
  });
  
  const [agreed, setAgreed] = useState(false); // New state for checkbox
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!agreed) {
      setStatus('Please agree to the Terms & Conditions.');
      return;
    }

    setStatus('Sending...');

    try {
      await fetch('https://script.google.com/macros/s/AKfycbz-oB7AXiqUZX6uwFH4oVAe3dJyOhsN-7_DA9A3NfBlc3HopyZuzlwyqBiNA0hmSkwkzQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });
      setStatus('Success! We will call you soon.');
      setFormData({ name: '', email: '', phone: '', journeyDate: '', msg: '' });
      setAgreed(false);
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="py-20 bg-cream min-h-screen">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
        
        {/* --- LEFT SIDE: CONTACT INFO --- */}
        <div>
          <h2 className="text-5xl font-bold text-plum mb-6">Let's Plan Your <br/><span className="text-gold">Next Story</span></h2>
          
          <div className="space-y-6 mt-10">
            {/* Clickable Call Card */}
            <a href="tel:+919087060620" className="flex items-center gap-4 p-6 bg-plum text-cream rounded-2xl shadow-xl hover:scale-105 transition-transform block">
              <Phone className="text-gold" /> 
              <div>
                <p className="text-xs opacity-50">Call Us</p>
                <p className="font-bold">+91 90870 60620</p>
              </div>
            </a>

            {/* Clickable Email Card */}
            <a href="mailto:Aarutripsandtravels6@gmail.com" className="flex items-center gap-4 p-6 bg-white text-plum rounded-2xl shadow-md border border-gold/10 hover:scale-105 transition-transform block">
              <Mail className="text-gold" /> 
              <div>
                <p className="text-xs opacity-50">Email</p>
                <p className="font-bold text-sm md:text-base">Aarutripsandtravels6@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gold/20 space-y-4">
          <input required type="text" placeholder="Your Name" className="w-full p-4 bg-cream/50 rounded-xl outline-none focus:ring-2 focus:ring-gold" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          <input required type="email" placeholder="Email Address" className="w-full p-4 bg-cream/50 rounded-xl outline-none focus:ring-2 focus:ring-gold" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          <input required type="tel" placeholder="Phone Number" className="w-full p-4 bg-cream/50 rounded-xl outline-none focus:ring-2 focus:ring-gold" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-plum/50 ml-2">Planned Journey Date</label>
            <input
              type="date"
              required
              value={formData.journeyDate}
              onChange={(e) => setFormData({...formData, journeyDate: e.target.value})}
              className="w-full p-4 rounded-2xl bg-cream border border-gold/10 focus:outline-none focus:border-gold text-plum"
            />
          </div>

          <textarea placeholder="Tell us about your dream destination..." className="w-full p-4 bg-cream/50 rounded-xl outline-none h-32" value={formData.msg} onChange={e => setFormData({...formData, msg: e.target.value})}></textarea>

          {/* --- TERMS CHECKBOX --- */}
          <div className="flex items-start gap-3 px-2 py-2">
            <input 
              required
              type="checkbox" 
              id="terms" 
              checked={agreed} 
              onChange={() => setAgreed(!agreed)}
              className="mt-1 accent-plum h-4 w-4"
            />
            <label htmlFor="terms" className="text-xs text-plum/70 leading-tight">
              I agree to the <a href="/terms" className="text-gold font-bold underline">Terms & Conditions</a> and <a href="/privacy" className="text-gold font-bold underline">Privacy Policy</a> of Aaru Trips.
            </label>
          </div>

          <button 
            type="submit"
            disabled={!agreed}
            className={`w-full font-bold py-5 rounded-xl transition uppercase tracking-widest flex justify-center gap-2 ${agreed ? 'bg-plum text-gold hover:bg-gold hover:text-plum cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
          >
            <Send size={20}/> Submit Inquiry
          </button>
          
          {status && <p className="text-center text-xs font-bold mt-2 text-plum">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;