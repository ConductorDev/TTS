import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="prose prose-lg">
        <p className="mb-4">Last updated: December 18, 2023</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using The Train Station website and services, you accept and agree to be bound by these Terms and Conditions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Booking and Cancellation</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>All bookings are subject to availability</li>
            <li>Cancellations must be made at least 24 hours in advance</li>
            <li>Refunds are subject to our cancellation policy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>All prices are in USD unless otherwise stated</li>
            <li>Payment is required at the time of booking</li>
            <li>We accept major credit cards and other payment methods as specified</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Code of Conduct</h2>
          <p>Users must:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Respect other guests and staff</li>
            <li>Follow venue rules and guidelines</li>
            <li>Not engage in any illegal activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Liability</h2>
          <p>The Train Station is not liable for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal injury or loss of belongings</li>
            <li>Technical issues beyond our control</li>
            <li>Third-party services or content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <p>For questions about these Terms and Conditions, please contact us at:</p>
          <p>Email: info@thetrainstationcorbin.com</p>
          <p>Address: 4672 5th Street Road, Corbin, KY 40701</p>
        </section>
      </div>
    </div>
  );
}
