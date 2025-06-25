'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', form);
    // TODO: send data to backend/email
  };

  return (
    <main className="px-4 py-16 md:px-8 lg:px-20 font-bevietnam bg-white text-black-100">
      
      {/* Hero */}
      <section className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h1>
        <p className="text-gray-600 text-sm md:text-base">
          Have questions or want to book a service? Fill out the form or reach us directly — we're happy to help.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div>  
        {/* Contact Form */}
        <p className="text-gray-600 mb-7">
            We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
          </p>
        <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <Phone className="text-primary-green-100 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-primary-green-100 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-gray-600">support@procleaning.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-primary-green-100 w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-sm text-gray-600">123 Sparkle Street, Clean City, IL 60500</p>
            </div>
          </div>

          {/* Optional: Google Map Embed */}
          <div className="mt-6">
            <iframe
              title="Pro Cleaning Location"
              src="https://maps.google.com/maps?q=New York, USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
       
      </section>
    </main>
  );
};

export default ContactPage;
