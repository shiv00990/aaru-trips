import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', pkg: '', msg: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending to Aaru Trips...');
    // Add your Google Apps Script URL in a fetch call here
    setTimeout(() => setStatus('Success! We will call you soon.'), 1500);
  };

  return (
    <div className="py-20 bg-cream min-h-screen">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold text-plum mb-6">Let's Plan Your <br/><span className="text-gold">Next Story</span></h2>
          <div className="space-y-6 mt-10">
            <div className="flex items-center gap-4 p-6 bg-plum text-cream rounded-2xl shadow-xl">
              <Phone className="text-gold" /> <div><p className="text-xs opacity-50">Call Us</p><p className="font-bold">+91 90870 60620</p></div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white text-plum rounded-2xl shadow-md border border-gold/10">
              <Mail className="text-gold" /> <div><p className="text-xs opacity-50">Email</p><p className="font-bold">Aarutripsandtravels6@gmail.com</p></div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gold/20 space-y-4">
          <input required type="text" placeholder="Your Name" className="w-full p-4 bg-cream/50 rounded-xl outline-none focus:ring-2 focus:ring-gold" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          <input required type="email" placeholder="Email Address" className="w-full p-4 bg-cream/50 rounded-xl outline-none focus:ring-2 focus:ring-gold" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          <input required type="tel" placeholder="Phone Number" className="w-full p-4 bg-cream/50 rounded-xl outline-none focus:ring-2 focus:ring-gold" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
          <textarea placeholder="Tell us about your dream destination..." className="w-full p-4 bg-cream/50 rounded-xl outline-none h-32" value={formData.msg} onChange={e => setFormData({...formData, msg: e.target.value})}></textarea>
          <button className="w-full bg-plum text-gold font-bold py-5 rounded-xl hover:bg-gold hover:text-plum transition uppercase tracking-widest flex justify-center gap-2">
            <Send size={20}/> Submit Inquiry
          </button>
          {status && <p className="text-center text-gold font-bold mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;