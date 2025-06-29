'use client';

import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <main className="px-4 py-12 md:px-8 lg:px-20 font-bevietnam bg-white text-black-100">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Shaninomi Cleaning</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          We’re dedicated to delivering a cleaner, healthier environment for your home and workplace. Discover who we are, what we value, and why clients trust us.
        </p>
      </section>

      {/* Company Intro */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 mb-16">
        <div className="w-full lg:w-1/2">
          <Image
            src="/team-cleaners.png" // replace with your actual image
            alt="Cleaning professional"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="text-sm text-gray-700">
          Shaninomi Cleaning is a professional cleaning service company based on the values of excellence, integrity, and care. We’ve been offering residential and commercial cleaning solutions that focus on quality and customer satisfaction.
          </p>
          <p className="text-sm text-gray-700">
            Whether it’s regular maintenance, deep cleaning, or specialized services, we tailor our offerings to your unique needs with flexible scheduling and eco-friendly products.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-primary-green-100/10 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-primary-green-100">Our Mission</h3>
          <p className="text-sm text-gray-700">
            To provide professional, reliable, and affordable cleaning services that create a safe and comfortable environment for our clients — every single day.
          </p>
        </div>

        <div className="bg-primary-green-100/10 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-primary-green-100">Our Vision</h3>
          <p className="text-sm text-gray-700">
            To become the most trusted name in residential and commercial cleaning, known for service excellence and sustainable practices.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">What We Value</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Trust & Reliability', text: 'We earn our clients’ trust by being consistent, honest, and responsive.' },
            { title: 'Attention to Detail', text: 'We focus on the small things — because cleanliness is in the details.' },
            { title: 'Eco-Conscious', text: 'We use environmentally friendly products and methods whenever possible.' },
          ].map((val, idx) => (
            <div key={idx} className="bg-white shadow rounded-xl p-6 text-center border">
              <h4 className="font-semibold text-lg mb-2">{val.title}</h4>
              <p className="text-sm text-gray-600">{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Meet Our Expert Team</h2>
        <p className="text-sm text-gray-600 mb-10 max-w-xl mx-auto">
          Our cleaning professionals are trained, experienced, and passionate about delivering excellence. Each team member is background-checked and insured.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {[
            { name: 'Claire Whitmore', role: 'Lead Cleaner', img: '/Image-(4).png' },
            { name: 'Erick Reynolds', role: 'Operations Manager', img: '/Image-(5).png' },
            { name: 'Jasmine Taylor', role: 'Quality Assurance', img: '/Image-(6).png' },
          ].map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Image
                src={member.img}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full object-cover mb-3"
              />
              <h4 className="font-medium text-lg">{member.name}</h4>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-primary-green-100 text-white rounded-xl max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3">Ready to Experience a Cleaner Space?</h2>
        <p className="mb-6 text-sm">
          Contact us today and let our expert team handle your cleaning needs.
        </p>
        <a
          href="/get-a-quote"
          className="inline-block bg-white text-primary-green-100 font-semibold px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition"
        >
          Get a Quote
        </a>
      </section>
    </main>
  );
};

export default AboutPage;
