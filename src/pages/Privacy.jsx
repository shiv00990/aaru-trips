import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-cream min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-xl">
        <h1 className="text-3xl font-bold text-plum mb-6 uppercase tracking-widest border-b pb-4">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>At Aaru Trips, we value your privacy. This policy explains how we collect and protect your personal information.</p>

          <section>
            <h2 className="text-xl font-bold text-plum mb-2">1. Information We Collect</h2>
            <p>We collect information such as your Name, Email, Phone Number, and Journey Dates when you fill out our "Plan My Trip" or inquiry forms. This is necessary to provide you with travel quotes and services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-plum mb-2">2. How We Use Your Data</h2>
            <p>Your data is used solely to respond to your inquiries, process bookings, and improve our services. We do not sell or rent your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-plum mb-2">3. Data Storage</h2>
            <p>Our website uses secure cloud infrastructure. Inquiry data is stored securely and is only accessible to authorized team members of Aaru Trips.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-plum mb-2">4. Cookies</h2>
            <p>We use minor cookies to analyze website traffic and improve your browsing experience. You can choose to disable cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-plum mb-2">5. Updates</h2>
            <p>We may update this policy from time to time. We encourage you to check this page periodically for any changes.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;