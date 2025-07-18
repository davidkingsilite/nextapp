'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.service) {
                alert('Please fill in all required fields.');
                return;
              }
              
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
                alert('Please enter a valid email address.');
                return;
              }

    if (!recaptchaToken) {
      return alert('Please verify that you are not a robot.');
    }
     setStatus('sending');

    try {
      setSubmitting(true);

      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token: recaptchaToken }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setResponse('Request submitted successfully!');
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
        setRecaptchaToken(null);
      } else {
        setResponse(data.error || 'Submission failed.');
      }
    } catch (error) {
      setResponse('Server error. Please try again later.');
      console.error('Error submitting quote:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (

    <main className="min-h-screen bg-white text-black-100 font-bevietnam px-4 py-12 md:px-10 lg:px-24">
       {/* Header Section */}
         <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold mb-2">Request a Free Quote</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Fill in the form below and we&apos;ll get back to you with a custom quote tailored to your cleaning needs.
        </p>
         </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* Form Section */}
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-5 bg-gray-50 p-6 rounded-xl shadow-md border"
    >
      <div>
        <label className="text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Service Type</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">Select a service</option>
          <option value="residential">Residential Cleaning</option>
          <option value="office">Office Cleaning</option>
          <option value="deep">Deep Cleaning</option>
          <option value="move">Move-In / Move-Out</option>
          <option value="window">Window Cleaning</option>
          <option value="post-construction">Post-Construction</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your needs..."
          className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={(token) => setRecaptchaToken(token)}
        className="mt-4"
      />
      
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary-green-100 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition font-semibold"
        onClick={() => setResponse('')}
      >
        {submitting ? 'Submitting...' : 'Submit Request'}
      </button>

      {response && <p className={`text-sm text-center mt-2 ${status === 'success' ? 'text-green-700': 'text-red-500'}`}>{response}</p>}
    </form>
 {/* Image or Info Panel */}
      <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Image
            src="/Image-(3).png"
            alt="Cleaning"
            width={500}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
            priority
          />
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Need Immediate Help?</h3>
            <p className="text-sm text-gray-600">Call us directly: <span className="text-black font-medium">+234-xxx-xxx-xxxx</span></p>
            <p className="text-sm text-gray-600">Or email us at: <span className="text-black font-medium">info@procleaning.com</span></p>
          </div>
        </motion.div>
    </div>
    </main>
  );
}
