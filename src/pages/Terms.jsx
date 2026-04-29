import React from 'react';

const Terms = () => {
  return (
    <div className="bg-cream min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-xl">
        <h1 className="text-3xl font-bold text-plum mb-6 uppercase tracking-widest border-b pb-4">
          Terms & Conditions
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-plum mb-2">1. Booking and Payments</h2>
            <p>All bookings are subject to availability at the time of reservation. A booking is only confirmed once the initial deposit has been received and acknowledged by Aaru Trips.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-plum mb-2">2. Cancellation Policy</h2>
            <p>Cancellation charges vary depending on the specific package, hotel, and airline policies. For spiritual yatras and group tours, specific non-refundable deposit rules apply. Please consult your travel advisor for specific package details.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-plum mb-2">3. Travel Insurance</h2>
            <p>We strongly recommend all travelers purchase comprehensive travel insurance. Aaru Trips is not liable for any losses arising from medical emergencies, trip cancellations, or luggage loss.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-plum mb-2">4. Documentation</h2>
            <p>It is the passenger's responsibility to ensure all travel documents, including passports, visas, and health certificates, are valid and in order before departure.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-plum mb-2">5. Liability</h2>
            <p>Aaru Trips acts only as an agent for airlines, hotels, and local transport operators. We are not responsible for any changes in schedules, delays, or service failures by these third-party providers.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;