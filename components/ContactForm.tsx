'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert('Please fill in all required fields.');
      return;
    }
    
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
 
    const data = await res.json();
    if (res.ok) {
      setStatus('Message sent ✅');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send ❌');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        rows={5}
        required
      />
      <button 
        type="submit" 
        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition" >
        Send Message
      </button>
      {
        status &&
        <p className="text-sm text-gray-600">{status}</p>
      }
      
    </form>
  );
}
